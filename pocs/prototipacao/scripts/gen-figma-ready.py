#!/usr/bin/env python3
"""
gen-figma-ready.py

Gera HTMLs estáticos por tela a partir de protótipos HTML, prontos para
uso com plugins "HTML to Figma" no Figma.

Usa Playwright para:
  - Ativar cada painel/frame (conteúdo dinâmico pré-renderizado)
  - Remover overflow/scroll constraints
  - Capturar o HTML "congelado" com o estado visual completo

Tipos suportados:
  - Panel-based: index.html, mc-redesign-v2.html (usa data-p + .panel)
  - Frame-based: mc-frames.html (usa showFrame(idx) + #vswin)

Uso:
  python3 scripts/gen-figma-ready.py                      # index.html (padrão)
  python3 scripts/gen-figma-ready.py mc-redesign-v2.html
  python3 scripts/gen-figma-ready.py mc-frames.html

Saída: prototipos/figma-ready/<nome-do-arquivo>/
"""
import asyncio
import re
import sys
from pathlib import Path

HERE      = Path(__file__).parent
PROTO_DIR = HERE.parent / "prototipos"

# ── Configs: arquivos baseados em painéis ─────────────────────────────────────
# Cada entrada: (panel_id, panel_name, output_slug, pre_action_js | None)
PANEL_CONFIGS: dict[str, list[tuple]] = {
    "index.html": [
        ("products",   "Produtos",      "produtos",      None),
        ("deliveries", "Entregas",      "entregas",      None),
        ("cpf",        "Verificar CPF", "verificar-cpf",
            "() => { document.getElementById('cpf-in').value='417.460.450-83'; vCPF(); }"),
    ],
    "mc-redesign-v2.html": [
        ("np",         "Novo Pedido",   "novo-pedido",   None),
        ("products",   "Produtos",      "produtos",      None),
        ("deliveries", "Entregas",      "entregas",      None),
        ("cpf",        "Verificar CPF", "verificar-cpf",
            "() => { document.getElementById('cpf-in').value='417.460.450-83'; vCPF(); }"),
    ],
}

# ── Configs: arquivos baseados em frames (showFrame) ──────────────────────────
# Cada entrada: (frame_idx, frame_id, title, group)
FRAME_CONFIGS: dict[str, list[tuple]] = {
    "mc-frames.html": [
        (0,  "A1", "Pedido mínimo — 1 produto, 1 parcela",        "A"),
        (1,  "A2", "7 produtos + desconto",                        "A"),
        (2,  "A3", "7 produtos + campo Outros preenchido",         "A"),
        (3,  "A4", "Modalidade FABRICA — endereço oculto",         "A"),
        (4,  "A5", "Destinatário diferente do comprador",          "A"),
        (5,  "A6", "Obs. Fábrica com instrução detalhada",         "A"),
        (6,  "A7", "Seção 9 — Controle Interno expandida",         "A"),
        (7,  "B1", "Validação — campos obrigatórios faltando",     "B"),
        (8,  "B2", "CPF inválido",                                 "B"),
        (9,  "B3", "CEP não encontrado",                           "B"),
        (10, "B4", "CEP sendo consultado (loading)",               "B"),
        (11, "B5", "Cadastrando — loading geral",                  "B"),
        (12, "B6", "Cadastro realizado com sucesso",               "B"),
        (13, "B7", 'Autocomplete aberto — busca "BIC"',            "B"),
    ],
}

# ── JS: expande overflow para painéis (index, mc-redesign-v2) ─────────────────
EXPAND_PANEL_JS = """
() => {
  const win = document.querySelector('.win');
  if (win) {
    win.style.height      = 'auto';
    win.style.minHeight   = '800px';
    win.style.overflow    = 'visible';
    win.style.borderRadius = '0';
    win.style.boxShadow   = 'none';
  }
  for (const sel of ['.app-body', '.main', '.sb', '.sb-nav']) {
    const el = document.querySelector(sel);
    if (el) { el.style.overflow = 'visible'; el.style.height = 'auto'; }
  }
}
"""

# ── JS: expande overflow para frames (mc-frames) ──────────────────────────────
EXPAND_FRAME_JS = """
() => {
  const vswin = document.getElementById('vswin');
  if (vswin) {
    vswin.style.transform  = 'none';
    vswin.style.height     = 'auto';
    vswin.style.minHeight  = '800px';
    vswin.style.overflow   = 'visible';
  }
  const win = document.querySelector('.win');
  if (win) {
    win.style.height      = 'auto';
    win.style.overflow    = 'visible';
    win.style.borderRadius = '0';
    win.style.boxShadow   = 'none';
  }
  for (const sel of ['.ab', '.main', '.fr-main', '.sb', '.sb-nav']) {
    const el = document.querySelector(sel);
    if (el) { el.style.overflow = 'visible'; el.style.height = 'auto'; }
  }
}
"""

# ── JS: ativa painel no modelo data-p + .panel ────────────────────────────────
ACTIVATE_PANEL_JS = """
(panelId) => {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  const panel = document.getElementById('panel-' + panelId);
  if (panel) panel.classList.add('on');
  const nav = document.querySelector('[data-p="' + panelId + '"]');
  if (nav) nav.classList.add('active');
}
"""

# ── CSS override injetado nos arquivos gerados ────────────────────────────────
FIGMA_READY_CSS = """
<style id="figma-ready">
/* figma-ready: remove scroll para uso com plugins HTML to Figma */
html, body {
  height: auto;
  overflow: visible;
  display: block;
  background: #f9f4ee;
  padding: 0;
  margin: 0;
}
@keyframes fi { from { opacity:1; transform:none; } to { opacity:1; transform:none; } }
</style>
"""

# ── Templates HTML ────────────────────────────────────────────────────────────
SINGLE_TEMPLATE = """\
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Maria Cacau — {title}</title>
{style}
{override}
</head>
<body>
{win_html}
</body>
</html>
"""

ALL_TEMPLATE = """\
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Maria Cacau — {title}</title>
{style}
<style id="figma-ready">
html, body {{
  height: auto;
  overflow: visible;
  display: block;
  background: #2a1209;
  padding: 40px;
  margin: 0;
}}
.all-wrap {{
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: flex-start;
  width: max-content;
}}
@keyframes fi {{ from {{ opacity:1; transform:none; }} to {{ opacity:1; transform:none; }} }}
</style>
</head>
<body>
<div class="all-wrap">
{win_sections}
</div>
</body>
</html>
"""


# ── Captura de painel ─────────────────────────────────────────────────────────

async def capture_panel(browser, html_path: Path, panel_id: str, pre_action: str | None) -> str:
    page = await browser.new_page(viewport={"width": 1280, "height": 2000})
    await page.goto(f"file://{html_path}", wait_until="load")
    await page.wait_for_timeout(400)
    await page.evaluate(ACTIVATE_PANEL_JS, panel_id)
    await page.wait_for_timeout(200)
    if pre_action:
        await page.evaluate(pre_action)
        await page.wait_for_timeout(200)
    await page.evaluate(EXPAND_PANEL_JS)
    await page.wait_for_timeout(200)
    win_html = await page.evaluate("() => document.querySelector('.win').outerHTML")
    await page.close()
    return win_html


# ── Captura de frame (showFrame) ──────────────────────────────────────────────

async def capture_frame(browser, html_path: Path, frame_idx: int) -> str:
    page = await browser.new_page(viewport={"width": 1280, "height": 2000})
    await page.goto(f"file://{html_path}", wait_until="load")
    await page.wait_for_timeout(400)
    await page.evaluate(f"showFrame({frame_idx})")
    await page.wait_for_timeout(350)
    await page.evaluate(EXPAND_FRAME_JS)
    await page.wait_for_timeout(200)
    win_html = await page.evaluate("() => document.querySelector('.win').outerHTML")
    await page.close()
    return win_html


# ── Helpers ───────────────────────────────────────────────────────────────────

def make_all_html(style: str, title: str, items: list[tuple[str, str]]) -> str:
    """items: list of (slug, win_html)"""
    sections = "\n".join(f"<!-- {slug} -->\n{html}" for slug, html in items)
    return ALL_TEMPLATE.format(style=style, title=title, win_sections=sections)


# ── Main ──────────────────────────────────────────────────────────────────────

async def main():
    from playwright.async_api import async_playwright

    src_name = sys.argv[1] if len(sys.argv) > 1 else "index.html"
    html_file = PROTO_DIR / src_name
    out_dir   = PROTO_DIR / "figma-ready" / Path(src_name).stem

    if not html_file.exists():
        print(f"❌ Arquivo não encontrado: {html_file}")
        return

    src = html_file.read_text(encoding="utf-8")
    style_match  = re.search(r'(<style>.*?</style>)', src, re.DOTALL)
    shared_style = style_match.group(1) if style_match else ""
    out_dir.mkdir(parents=True, exist_ok=True)

    async with async_playwright() as pw:
        browser = await pw.chromium.launch()

        # ── Modo frame (mc-frames.html) ───────────────────────────────────────
        if src_name in FRAME_CONFIGS:
            frames = FRAME_CONFIGS[src_name]
            print(f"🎬 {html_file.name} — {len(frames)} frames\n")

            frozen: dict[str, tuple[str, str, str]] = {}  # id → (title, group, win_html)

            for frame_idx, frame_id, title, group in frames:
                print(f"  🔍 {frame_id}: {title}…")
                win_html = await capture_frame(browser, html_file, frame_idx)
                frozen[frame_id] = (title, group, win_html)

                html_out = SINGLE_TEMPLATE.format(
                    title    = f"{frame_id} — {title}",
                    style    = shared_style,
                    override = FIGMA_READY_CSS,
                    win_html = win_html,
                )
                out = out_dir / f"{frame_id}.html"
                out.write_text(html_out, encoding="utf-8")
                print(f"       → {out.name} ({out.stat().st_size // 1024} KB)")

            # all-A, all-B, all-14
            for group_label, group_key in [("A", "A"), ("B", "B"), ("14", None)]:
                items = [
                    (fid, html)
                    for fid, (_, grp, html) in frozen.items()
                    if group_key is None or grp == group_key
                ]
                fname = f"all-{group_label}.html"
                title = (
                    f"Grupo {group_label} — Caminhos Felizes" if group_label == "A"
                    else f"Grupo {group_label} — Estados de Feedback" if group_label == "B"
                    else "Todos os 14 frames"
                )
                print(f"\n  🔍 {fname} ({len(items)} frames lado a lado)…")
                out = out_dir / fname
                out.write_text(make_all_html(shared_style, title, items), encoding="utf-8")
                print(f"       → {out.name} ({out.stat().st_size // 1024} KB)")

            total = len(frozen) + 3
            rel   = out_dir.relative_to(PROTO_DIR.parent)
            print(f"\n✅ {total} arquivos em {rel}/")
            print("   Individuais: A1.html … B7.html")
            print("   Combinados:  all-A.html · all-B.html · all-14.html")

        # ── Modo painel (index.html, mc-redesign-v2.html, …) ──────────────────
        elif src_name in PANEL_CONFIGS:
            panels = PANEL_CONFIGS[src_name]
            print(f"🎬 {html_file.name} — {len(panels)} painéis\n")

            frozen_panels: dict[str, tuple[str, str]] = {}  # slug → (name, win_html)

            for panel_id, panel_name, slug, pre_action in panels:
                print(f"  🔍 {panel_name}…")
                win_html = await capture_panel(browser, html_file, panel_id, pre_action)
                frozen_panels[slug] = (panel_name, win_html)

                html_out = SINGLE_TEMPLATE.format(
                    title    = panel_name,
                    style    = shared_style,
                    override = FIGMA_READY_CSS,
                    win_html = win_html,
                )
                out = out_dir / f"{slug}.html"
                out.write_text(html_out, encoding="utf-8")
                print(f"       → {out.name} ({out.stat().st_size // 1024} KB)")

            n       = len(panels)
            fname   = f"all-{n}.html"
            items   = [(slug, html) for slug, (_, html) in frozen_panels.items()]
            print(f"\n  🔍 {fname} ({n} painéis lado a lado)…")
            out = out_dir / fname
            out.write_text(make_all_html(shared_style, "Todas as telas", items), encoding="utf-8")
            print(f"       → {out.name} ({out.stat().st_size // 1024} KB)")

            rel = out_dir.relative_to(PROTO_DIR.parent)
            print(f"\n✅ {n + 1} arquivos em {rel}/")
            for slug, (name, _) in frozen_panels.items():
                print(f"     • {slug}.html  →  {name}")
            print(f"     • {fname}  →  Todas as telas lado a lado")

        else:
            all_known = list(PANEL_CONFIGS) + list(FRAME_CONFIGS)
            print(f"❌ Sem config para '{src_name}'.")
            print(f"   Arquivos suportados: {all_known}")

        await browser.close()


asyncio.run(main())
