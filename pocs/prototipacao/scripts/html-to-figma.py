#!/usr/bin/env python3
"""
html-to-figma.py — v2

Converte protótipos HTML em elementos vetoriais hierárquicos no Figma.
Usa Playwright para resolver CSS computado (inclusive oklch, var()) e extrair
a árvore DOM real de cada elemento visível.

v2 vs v1:
- v1: lista plana de retângulos e textos → sem agrupamento no Figma
- v2: árvore hierárquica → Frames aninhados espelham a estrutura DOM
  Containers com bg/border → figma.createFrame() com fill
  Containers sem bg mas com filhos → figma.createFrame() fills=[]
  Folhas visuais sem filhos → figma.createRectangle()
  Textos diretos → figma.createText()

Isso permite selecionar/mover seções inteiras no Figma.

Uso (igual à v1):
    python3 scripts/html-to-figma.py
    python3 scripts/html-to-figma.py mc-frames.html 0
    python3 scripts/html-to-figma.py mc-frames.html 0,3,6
    python3 scripts/html-to-figma.py mc-redesign-v2.html
    python3 scripts/html-to-figma.py mc-board.html

Saída: figma/figma-vetorial-<nome>.js
    → No Figma: Plugins → Scripter → File → Open → selecione o arquivo → Run
    → Página "🧩 HTML Vetorial" criada com Frames aninhados editáveis
"""
import asyncio
import sys
from pathlib import Path

HERE      = Path(__file__).parent
PROTO_DIR = HERE.parent / "prototipos"
FIGMA_DIR = HERE.parent / "figma"

# ── Metadados dos 14 estados de mc-frames.html ─────────────────────────────
FRAMES_META = [
    ("A", "A1", "Pedido mínimo — 1 produto, 1 parcela"),
    ("A", "A2", "7 produtos + desconto"),
    ("A", "A3", "7 produtos + campo Outros preenchido"),
    ("A", "A4", "Modalidade FABRICA — endereço oculto"),
    ("A", "A5", "Destinatário diferente do comprador"),
    ("A", "A6", "Obs. Fábrica com instrução detalhada"),
    ("A", "A7", "Seção 9 — Controle Interno expandida"),
    ("B", "B1", "Validação — campos obrigatórios faltando"),
    ("B", "B2", "CPF inválido"),
    ("B", "B3", "CEP não encontrado"),
    ("B", "B4", "CEP sendo consultado (loading)"),
    ("B", "B5", "Cadastrando — loading geral"),
    ("B", "B6", "Cadastro realizado com sucesso"),
    ("B", "B7", "Autocomplete aberto — busca 'BIC'"),
]

# ── JS injetado no browser para extrair a ÁRVORE DOM ──────────────────────
# Retorna { node: {...árvore...}, width, height }
# Cada nó: { x, y, w, h, bg, border, radius, op, texts[], children[] }
# Coordenadas são RELATIVAS ao elemento pai (para facilitar Frames aninhados).
EXTRACT_SCRIPT = r"""
(rootSel) => {
  const root = document.querySelector(rootSel);
  if (!root) return { error: `${rootSel} not found`, node: null, width: 0, height: 0 };

  const rootRect = root.getBoundingClientRect();
  const W = rootRect.width;
  const H = rootRect.height;

  function parseColor(c) {
    if (!c || c === 'transparent') return null;
    const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!m) return null;
    const a = m[4] !== undefined ? +m[4] : 1;
    if (a < 0.03) return null;
    return { r: +m[1]/255, g: +m[2]/255, b: +m[3]/255, a };
  }

  function px(v) { return parseFloat(v) || 0; }

  function getRadius(st) {
    const tl = px(st.borderTopLeftRadius),
          tr = px(st.borderTopRightRadius),
          bl = px(st.borderBottomLeftRadius),
          br = px(st.borderBottomRightRadius);
    if (tl === tr && tl === bl && tl === br) return tl;
    return { tl, tr, bl, br };
  }

  function extractNode(el, parentRect, parentOpacity) {
    const st = window.getComputedStyle(el);
    if (st.display === 'none' || st.visibility === 'hidden') return null;
    // SVGs são ignorados internamente (ícones ausentes — limitação conhecida)
    if (el.tagName === 'svg' || el.closest('svg')) return null;

    const selfOp = parseFloat(st.opacity);
    const opacity = parentOpacity * selfOp;
    if (opacity < 0.03) return null;

    const r = el.getBoundingClientRect();
    const absX = r.left - rootRect.left;
    const absY = r.top  - rootRect.top;
    const w = +r.width.toFixed(1);
    const h = +r.height.toFixed(1);

    if (w < 1 || h < 1) return null;
    if (absX > W+10 || absY > H+10 || absX+w < -10 || absY+h < -10) return null;

    const bg        = parseColor(st.backgroundColor);
    const bColor    = parseColor(st.borderTopColor);
    const bWidth    = px(st.borderTopWidth);
    const bStyle    = st.borderTopStyle;
    const hasBorder = !!(bColor && bWidth >= 0.5 && bStyle !== 'none');
    const radius    = getRadius(st);
    const op        = opacity < 0.995 ? +opacity.toFixed(3) : undefined;

    const color  = parseColor(st.color);
    const size   = px(st.fontSize);
    const weight = parseInt(st.fontWeight) || 400;
    const bold   = weight >= 600;
    const tag    = el.tagName;

    // ── Textos diretos do elemento (nós de texto do DOM) ──
    const texts = [];

    for (const textNode of el.childNodes) {
      if (textNode.nodeType !== 3) continue;
      const text = textNode.textContent.replace(/\s+/g, ' ').trim();
      if (!text) continue;
      try {
        const range = document.createRange();
        range.selectNodeContents(textNode);
        for (const tr of range.getClientRects()) {
          if (tr.width < 1 || tr.height < 1) continue;
          texts.push({
            x: +(tr.left - r.left).toFixed(1),
            y: +(tr.top  - r.top ).toFixed(1),
            w: +tr.width.toFixed(1), h: +tr.height.toFixed(1),
            text, size, bold,
            color: color || { r:0.122, g:0.063, b:0.031, a:1 },
          });
        }
      } catch(_) {}
    }

    // ── Valor/placeholder de inputs ──
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      const val = el.value || '', ph = el.placeholder || '';
      const display = val || ph;
      if (display) {
        const isph = !el.value && !!ph;
        texts.push({
          x: 9, y: Math.max(0, (h-size)/2-1), w: w-18, h: size+2,
          text: display, size, bold: false,
          color: isph ? {r:0.75,g:0.69,b:0.66,a:1} : (color||{r:0.122,g:0.063,b:0.031,a:1}),
        });
      }
    } else if (tag === 'SELECT') {
      const sel = el.options[el.selectedIndex];
      const val = sel ? sel.text.trim() : '';
      if (val && val !== '— Selecione —') {
        texts.push({
          x: 9, y: Math.max(0, (h-size)/2-1), w: w-26, h: size+2,
          text: val, size, bold: false,
          color: color || {r:0.122,g:0.063,b:0.031,a:1},
        });
      }
    }

    // ── Filhos (coordenadas relativas a este elemento) ──
    const children = [];
    for (const child of el.children) {
      const cn = extractNode(child, r, opacity);
      if (cn) children.push(cn);
    }

    return {
      x: +(r.left - parentRect.left).toFixed(1),
      y: +(r.top  - parentRect.top ).toFixed(1),
      w, h,
      bg:     bg || null,
      border: hasBorder ? { color: bColor, w: bWidth } : null,
      radius, op,
      texts, children,
    };
  }

  const node = extractNode(root, rootRect, 1.0);
  return { node, width: Math.round(W), height: Math.round(H) };
}
"""

# ── JS para expandir altura e remover scroll ────────────────────────────────
EXPAND_HEIGHT_SCRIPT = r"""
() => {
  const vswin = document.getElementById('vswin');
  if (vswin) {
    vswin.style.transform = 'none';
    vswin.style.height    = 'auto';
    vswin.style.minHeight = '800px';
    vswin.style.overflow  = 'visible';
  }
  const root = vswin || document.body;
  const win  = root.querySelector('.win');
  if (win)  { win.style.height  = 'auto'; win.style.overflow  = 'visible'; }
  const ab   = root.querySelector('.ab');
  if (ab)   { ab.style.height   = 'auto'; ab.style.overflow   = 'visible'; }
  const main = root.querySelector('.main');
  if (main) { main.style.height = 'auto'; main.style.overflow = 'visible'; }
  const vport = document.getElementById('vport');
  if (vport){ vport.style.height = 'auto'; vport.style.overflow = 'visible'; }
}
"""


# ── Helpers de geração de código JS ─────────────────────────────────────────

def _c(col: dict) -> str:
    """dict {r,g,b,a} → expressão JS de cor para Figma."""
    return f"{{r:{col['r']:.4f},g:{col['g']:.4f},b:{col['b']:.4f}}}"


def _fills(bg: dict | None) -> str:
    """Gera a linha .fills=[...] para um nó."""
    if not bg:
        return "[]"
    fa = f",opacity:{bg['a']:.3f}" if bg.get('a', 1) < 0.995 else ""
    return f"[{{type:'SOLID',color:{_c(bg)}{fa}}}]"


def _radius_js(r, var: str) -> str:
    """Converte radius para código JS usando o nome da variável."""
    if isinstance(r, (int, float)):
        return f"{var}.cornerRadius={r:.1f};" if r else ""
    if isinstance(r, dict):
        return (
            f"{var}.topLeftRadius={r['tl']:.1f};"
            f"{var}.topRightRadius={r['tr']:.1f};"
            f"{var}.bottomLeftRadius={r['bl']:.1f};"
            f"{var}.bottomRightRadius={r['br']:.1f};"
        )
    return ""


def _emit_text(lines: list, t: dict, parent_var: str, counter: list, pad: str) -> None:
    """Emite um nó de texto no JS."""
    raw = t['text'].replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ").strip()
    if not raw:
        return
    color = t.get('color', {'r': 0.122, 'g': 0.063, 'b': 0.031, 'a': 1})
    size  = t.get('size', 13)
    bold  = t.get('bold', False)
    op    = t.get('op')
    var   = f"n{counter[0]}"
    counter[0] += 1

    fa = f",opacity:{color['a']:.3f}" if color.get('a', 1) < 0.995 else ""
    lines.append(f"{pad}{{const {var}=figma.createText();")
    lines.append(f"{pad}  {var}.fontName={'FB' if bold else 'FR'};")
    lines.append(f"{pad}  {var}.fontSize={size:.1f};")
    lines.append(f"{pad}  {var}.fills=[{{type:'SOLID',color:{_c(color)}{fa}}}];")
    lines.append(f"{pad}  {var}.x={t['x']}; {var}.y={t['y']};")
    lines.append(f"{pad}  {var}.characters='{raw}';")
    if op is not None:
        lines.append(f"{pad}  {var}.opacity={op};")
    lines.append(f"{pad}  {parent_var}.appendChild({var});}}")


def _emit_node(lines: list, node: dict, parent_var: str, counter: list, pad: str,
               ox: float = 0, oy: float = 0) -> None:
    """
    Emite um nó da árvore DOM como elemento Figma.

    Lógica:
    - Nó com visual (bg/border) → figma.createFrame() como container agrupável
    - Nó sem visual mas com filhos → achatado (filhos sobem ao pai com offset acumulado)
    - Nó folha sem filhos e sem visual → ignorado

    O achatamento (flatten) de nós invisíveis reduz chamadas de API e limpa o layers panel:
    apenas elementos visualmente distintos viram Frames no Figma.
    """
    if node is None:
        return

    bg         = node.get('bg')
    border     = node.get('border')
    children   = node.get('children', [])
    texts      = node.get('texts', [])
    op         = node.get('op')
    has_visual = bool(bg or border)

    x = node['x'] + ox
    y = node['y'] + oy
    w, h = node['w'], node['h']

    if has_visual:
        # Nó com background/border → Frame agrupável no Figma
        var = f"n{counter[0]}"
        counter[0] += 1

        lines.append(f"{pad}{{const {var}=figma.createFrame();")
        lines.append(f"{pad}  {var}.x={x:.1f}; {var}.y={y:.1f};")
        lines.append(f"{pad}  {var}.resize(Math.max(1,{w}),Math.max(1,{h}));")
        lines.append(f"{pad}  {var}.fills={_fills(bg)};")
        lines.append(f"{pad}  {var}.clipsContent=false;")
        if border:
            bc = border['color']
            ba = f",opacity:{bc['a']:.3f}" if bc.get('a', 1) < 0.995 else ""
            lines.append(f"{pad}  {var}.strokes=[{{type:'SOLID',color:{_c(bc)}{ba}}}];")
            lines.append(f"{pad}  {var}.strokeWeight={border['w']:.1f}; {var}.strokeAlign='INSIDE';")
        rad = _radius_js(node.get('radius', 0), var)
        if rad:
            lines.append(f"{pad}  {rad}")
        if op is not None:
            lines.append(f"{pad}  {var}.opacity={op};")
        lines.append(f"{pad}  {parent_var}.appendChild({var});")
        # Filhos usam coordenadas relativas a este frame (sem offset)
        for t in texts:
            _emit_text(lines, t, var, counter, pad + '  ')
        for child in children:
            _emit_node(lines, child, var, counter, pad + '  ', 0, 0)
        lines.append(f"{pad}}}")

    elif children or texts:
        # Nó invisível com conteúdo → achatado: propaga filhos com offset acumulado
        for t in texts:
            t2 = dict(t)
            t2['x'] = t['x'] + x
            t2['y'] = t['y'] + y
            _emit_text(lines, t2, parent_var, counter, pad)
        for child in children:
            _emit_node(lines, child, parent_var, counter, pad, x, y)


# ── Geração do JS para Figma Scripter ──────────────────────────────────────

def generate_figma_js(frames_data: list[dict]) -> str:
    lines = [
        "// figma-vetorial-generated.js — gerado por html-to-figma.py v2",
        "// Plugin: Scripter  figma.com/community/plugin/1206449155596395736",
        "// Estrutura: Frames aninhados espelham o DOM — selecione seções inteiras no Figma.",
        "",
        "async function main() {",
        "  const FR = { family: 'Inter', style: 'Regular' };",
        "  const FB = { family: 'Inter', style: 'Bold' };",
        "  await figma.loadFontAsync(FR);",
        "  await figma.loadFontAsync(FB);",
        "",
        "  let pg = figma.root.children.find(p => p.name.includes('HTML Vetorial'));",
        "  if (!pg) { pg = figma.createPage(); pg.name = '🧩 HTML Vetorial'; }",
        "  else { for (const c of [...pg.children]) c.remove(); }",
        "  figma.currentPage = pg;",
        "",
    ]

    x_cursor = 0
    GAP      = 80
    counter  = [0]

    for fd in frames_data:
        fid   = fd['id']
        title = fd['title'].replace("'", "\\'")
        w     = fd['width']
        h     = fd['height']
        node  = fd.get('node')

        lines.append(f"  // ── {fid}: {fd['title']}")
        lines.append(f"  {{const F=figma.createFrame();")
        lines.append(f"    F.x={x_cursor}; F.y=0;")
        lines.append(f"    F.resize({w},{h});")
        lines.append(f"    F.name='{fid} — {title}';")

        # Usa a cor de fundo do nó raiz, ou fallback bege
        if node and node.get('bg'):
            lines.append(f"    F.fills={_fills(node['bg'])};")
        else:
            lines.append(f"    F.fills=[{{type:'SOLID',color:{{r:0.976,g:0.961,b:0.949}}}}];")

        lines.append(f"    F.clipsContent=true;")
        lines.append(f"    pg.appendChild(F);")

        if node:
            # Textos diretos da raiz
            for t in node.get('texts', []):
                _emit_text(lines, t, 'F', counter, '    ')
            # Filhos da raiz (estrutura hierárquica completa)
            for child in node.get('children', []):
                _emit_node(lines, child, 'F', counter, '    ')

        lines.append("  }")
        # Yield ao event loop do Figma entre frames — evita timeout no Scripter
        lines.append("  await Promise.resolve();")
        lines.append("")
        x_cursor += w + GAP

    n_frames = len(frames_data)

    lines += [
        "  figma.viewport.scrollAndZoomIntoView([...pg.children]);",
        f"  console.log('✅ HTML Vetorial v2 — {n_frames} frame(s) com hierarquia DOM');",
        "}",
        "",
        "main().catch(e => console.error('❌ Erro:', e.message, '\\n', e.stack));",
    ]

    return "\n".join(lines)


# ── Extração via Playwright ─────────────────────────────────────────────────

def _count_tree(node: dict | None) -> tuple[int, int]:
    """Conta (containers, textos) na árvore recursivamente."""
    if not node:
        return 0, 0
    containers = 1
    texts      = len(node.get('texts', []))
    for child in node.get('children', []):
        cc, ct = _count_tree(child)
        containers += cc
        texts      += ct
    return containers, texts


async def _extract(page, root_sel: str, frame_id: str, title: str) -> dict:
    """Extrai a árvore de elementos de um frame já renderizado."""
    result = await page.evaluate(EXTRACT_SCRIPT, root_sel)
    node   = result.get('node')

    containers, texts = _count_tree(node)
    print(f"       → {containers} containers, {texts} textos")

    return {
        'id':     frame_id,
        'title':  title,
        'width':  result.get('width', 1280),
        'height': result.get('height', 800),
        'node':   node,
    }


async def process_mc_frames(html: Path, indices: set | None = None) -> list[dict]:
    """Processa mc-frames.html com sistema de 14 estados."""
    from playwright.async_api import async_playwright

    meta = [(i, grp, fid, title) for i, (grp, fid, title) in enumerate(FRAMES_META)]
    if indices is not None:
        meta = [m for m in meta if m[0] in indices]

    frames_data = []

    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        page    = await browser.new_page(
            viewport={"width": 1960, "height": 1200},
            device_scale_factor=1,
        )
        await page.goto(f"file://{html}", wait_until="load")
        await page.wait_for_selector("#vswin", state="visible")

        for i, grp, fid, title in meta:
            print(f"  🔍 {fid}: {title}…")
            await page.evaluate(f"showFrame({i})")
            await page.wait_for_timeout(350)
            await page.evaluate(EXPAND_HEIGHT_SCRIPT)
            await page.wait_for_timeout(150)

            fd = await _extract(page, "#vswin", fid, title)
            frames_data.append(fd)

        await browser.close()

    return frames_data


async def process_standalone(html: Path) -> list[dict]:
    """Processa um HTML avulso (sem sistema de frames)."""
    from playwright.async_api import async_playwright

    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        page    = await browser.new_page(
            viewport={"width": 1960, "height": 1200},
            device_scale_factor=1,
        )
        await page.goto(f"file://{html}", wait_until="load")
        await page.wait_for_timeout(500)

        root_sel = (
            "#vswin" if await page.query_selector("#vswin")
            else ".win" if await page.query_selector(".win")
            else "body"
        )
        print(f"  🔍 {html.name} (raiz: {root_sel})…")

        await page.evaluate(EXPAND_HEIGHT_SCRIPT)
        await page.wait_for_timeout(150)

        fd = await _extract(page, root_sel, html.stem, html.stem)
        await browser.close()

    return [fd]


# ── Entry point ─────────────────────────────────────────────────────────────

async def main():
    args = sys.argv[1:]

    if not args:
        html = PROTO_DIR / "mc-frames.html"
        print(f"🎬 Extraindo 14 frames de {html.name}…\n")
        frames_data = await process_mc_frames(html)
        out_stem = "figma-vetorial-14estados"

    elif len(args) == 1 and args[0].endswith(".html"):
        html = PROTO_DIR / args[0]
        if not html.exists():
            print(f"❌ Arquivo não encontrado: {html}")
            return
        if "mc-frames" in args[0]:
            print(f"🎬 Extraindo 14 frames de {html.name}…\n")
            frames_data = await process_mc_frames(html)
        else:
            print(f"🎬 Extraindo {html.name}…\n")
            frames_data = await process_standalone(html)
        out_stem = f"figma-vetorial-{html.stem}"

    elif len(args) == 2 and args[0].endswith(".html"):
        html    = PROTO_DIR / args[0]
        raw_idx = args[1]
        indices = {int(x) for x in raw_idx.split(",")}
        print(f"🎬 Extraindo frame(s) {raw_idx} de {html.name}…\n")
        frames_data = await process_mc_frames(html, indices=indices)
        out_stem = f"figma-vetorial-{html.stem}-f{raw_idx.replace(',','-')}"

    else:
        print(__doc__)
        return

    if not frames_data:
        print("⚠️  Nenhum frame extraído.")
        return

    FIGMA_DIR.mkdir(exist_ok=True)
    print("\n🔧 Gerando script Figma Scripter…")
    js  = generate_figma_js(frames_data)
    out = FIGMA_DIR / f"{out_stem}.js"
    out.write_text(js, encoding="utf-8")

    size_kb = out.stat().st_size // 1024
    total_containers = sum(_count_tree(f.get('node'))[0] for f in frames_data)
    total_texts      = sum(_count_tree(f.get('node'))[1] for f in frames_data)

    print(f"\n✅ Script gerado: {out.name}")
    print(f"   {len(frames_data)} frame(s) · {total_containers} containers · {total_texts} textos · {size_kb} KB")
    print()
    print("── Como usar ──────────────────────────────────────────────")
    print("1. No Figma: Plugins → Scripter")
    print("2. File → Open → selecione", out.name)
    print("3. Clique Run")
    print("   → Página '🧩 HTML Vetorial' com Frames aninhados editáveis")
    print()
    print("Dica v2: cada seção é um Frame — selecione e mova livremente.")
    print("         Textos, retângulos e backgrounds são editáveis individualmente.")


asyncio.run(main())
