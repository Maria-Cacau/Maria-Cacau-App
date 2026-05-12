#!/usr/bin/env python3
"""
Captura screenshots dos 14 estados do formulário Novo Pedido
e gera um script Figma Scripter com as imagens embutidas.

Requisitos:
    pip install playwright
    playwright install chromium

Como usar:
    python3 screenshot-frames.py
    → gera figma-14estados-generated.js nesta pasta
    → abra no Figma: Plugins > Scripter > cole o conteúdo > Run
"""
import asyncio
import base64
from pathlib import Path

HERE      = Path(__file__).parent
HTML      = HERE.parent / "prototipos" / "mc-frames.html"
OUT       = HERE.parent / "figma" / "figma-14estados-generated.js"

FRAMES = [
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


async def capture():
    from playwright.async_api import async_playwright

    shots = []
    async with async_playwright() as pw:
        # Viewport largo — garante scale=1 no viewer (precisa de min ~1548px)
        browser = await pw.chromium.launch()
        page = await browser.new_page(
            viewport={"width": 1960, "height": 1200},
            device_scale_factor=1,  # sem retina — screenshot 1:1 CSS px
        )

        await page.goto(f"file://{HTML}", wait_until="load")
        await page.wait_for_selector("#vswin", state="visible")

        for i, (grp, fid, title) in enumerate(FRAMES):
            # Navega para o frame via JS
            await page.evaluate(f"showFrame({i})")
            await page.wait_for_timeout(250)

            # Expande o conteúdo — remove scroll e overflow para capturar TUDO
            await page.evaluate("""
                const vswin = document.getElementById('vswin');
                vswin.style.transform  = 'none';
                vswin.style.height     = 'auto';
                vswin.style.minHeight  = '800px';
                vswin.style.overflow   = 'visible';

                const win = vswin.querySelector('.win');
                if (win) { win.style.height = 'auto'; win.style.overflow = 'visible'; }

                const ab = vswin.querySelector('.ab');
                if (ab) { ab.style.height = 'auto'; ab.style.overflow = 'visible'; }

                const main = vswin.querySelector('.fr-main');
                if (main) { main.style.overflow = 'visible'; main.style.height = 'auto'; }

                // Ajusta o vport também
                const vport = document.getElementById('vport');
                if (vport) { vport.style.height = 'auto'; vport.style.overflow = 'visible'; }
            """)
            await page.wait_for_timeout(200)

            # Descobre altura real do conteúdo expandido
            height = int(await page.evaluate(
                "document.getElementById('vswin').getBoundingClientRect().height"
            ))

            # Expande viewport se necessário para caber o frame inteiro
            if height > 1200:
                await page.set_viewport_size({"width": 1960, "height": height + 50})
                await page.wait_for_timeout(100)

            # Screenshot do #vswin (largura fixa 1280px, altura = conteúdo completo)
            elem = page.locator("#vswin")
            jpeg = await elem.screenshot(type="jpeg", quality=85)
            b64  = base64.b64encode(jpeg).decode()
            shots.append((grp, fid, title, b64, height))

            kb = len(jpeg) // 1024
            print(f"  📸 {fid}  {title}  ({height}px / {kb} KB)")

            # Restaura viewport para o próximo frame
            await page.set_viewport_size({"width": 1960, "height": 1200})

        await browser.close()

    return shots


def build_figma_script(shots: list) -> str:
    data_lines = []
    for grp, fid, title, b64, height in shots:
        safe_title = title.replace("'", "\\'")
        data_lines.append(f"  {{g:'{grp}',id:'{fid}',t:'{safe_title}',h:{height},d:'{b64}'}},")

    data_block = "\n".join(data_lines)

    return f"""\
// figma-14estados-generated.js — gerado por screenshot-frames.py
// Plugin: Scripter · figma.com/community/plugin/1206449155596395736
// No Figma: Plugins → Scripter → cole este arquivo inteiro → Run

async function main() {{
  await figma.loadFontAsync({{family:'Inter',style:'Regular'}});
  await figma.loadFontAsync({{family:'Inter',style:'Bold'}});

  const FR={{family:'Inter',style:'Regular'}}, FB={{family:'Inter',style:'Bold'}};
  const C=s=>{{const v=s.replace('#','');return{{r:parseInt(v.slice(0,2),16)/255,g:parseInt(v.slice(2,4),16)/255,b:parseInt(v.slice(4,6),16)/255}};}};

  async function T(s,x,y,sz,bold,hex='#1F1008',mw=0){{
    const n=figma.createText();n.fontName=bold?FB:FR;n.fontSize=sz;
    n.fills=[{{type:'SOLID',color:C(hex)}}];n.x=x;n.y=y;n.characters=String(s||'');
    if(mw){{n.textAutoResize='HEIGHT';n.resize(mw,n.height);}}
    return n;
  }}

  // ── Página ───────────────────────────────────────────────────
  let pg=figma.root.children.find(p=>p.name.includes('14 Estados'));
  if(!pg){{pg=figma.createPage();pg.name='📋 14 Estados — Novo Pedido';}}
  else{{for(const c of[...pg.children])c.remove();}}
  figma.currentPage=pg;

  // ── Conversão base64 → bytes ─────────────────────────────────
  function toBytes(b64){{
    const raw=atob(b64);
    const buf=new Uint8Array(raw.length);
    for(let i=0;i<raw.length;i++)buf[i]=raw.charCodeAt(i);
    return buf;
  }}

  // ── Dados dos frames (largura=1280, altura=conteúdo completo) ─
  const DATA=[
{data_block}
  ];

  // ── Layout: 7 colunas × 2 grupos ────────────────────────────
  // Cada linha tem a altura do frame mais alto naquele grupo
  const FW=1280, GX=80, GY=120, LABEL_H=28;
  const GRUPOS=[
    {{label:'GRUPO A — CAMINHOS FELIZES',       cor:'#391B10', start:0, count:7}},
    {{label:'GRUPO B — ESTADOS DE FEEDBACK E ERRO', cor:'#C0392B', start:7, count:7}},
  ];

  let curY=0;
  for(const grp of GRUPOS){{
    const rowData=DATA.slice(grp.start, grp.start+grp.count);
    const rowH=Math.max(...rowData.map(d=>d.h));

    // Rótulo do grupo
    const gl=await T(grp.label, 0, curY, 13, true, grp.cor);
    pg.appendChild(gl);
    curY+=LABEL_H;

    // 7 frames lado a lado
    for(let ci=0;ci<rowData.length;ci++){{
      const d=rowData[ci];
      const x=ci*(FW+GX);

      // Frame com imagem em altura real
      const f=figma.createFrame();
      f.x=x; f.y=curY; f.resize(FW, d.h);
      f.name=`${{d.id}} — ${{d.t}}`;
      const img=figma.createImage(toBytes(d.d));
      f.fills=[{{type:'IMAGE',scaleMode:'FIT',imageHash:img.hash}}];
      pg.appendChild(f);

      // Badge com ID
      const badge=figma.createFrame();
      badge.x=x; badge.y=curY-24; badge.resize(48,20);
      badge.fills=[{{type:'SOLID',color:C(grp.cor)}}]; badge.cornerRadius=4;
      pg.appendChild(badge);
      pg.appendChild(await T(d.id, x+8, curY-20, 10, true, '#ffffff'));

      // Título abaixo do frame
      pg.appendChild(await T(d.t, x, curY+d.h+8, 10, false, '#7A6157', FW));
    }}

    curY+=rowH+GY+30; // avança para o próximo grupo
  }}

  figma.viewport.scrollAndZoomIntoView([...pg.children]);
  console.log('✅ Página "📋 14 Estados — Novo Pedido" criada!');
  console.log('   14 frames com conteúdo completo (sem scroll) em 2 grupos de 7.');
}}

main().catch(e=>console.error('❌ Erro:', e.message, '\\n', e.stack));
"""


async def main():
    if not HTML.exists():
        print(f"❌ Arquivo não encontrado: {HTML}")
        return

    print(f"🎬 Capturando 14 frames de {HTML.name}…\n")

    try:
        shots = await capture()
    except ImportError:
        print("❌ Playwright não instalado.")
        print("   Execute: pip install playwright && playwright install chromium")
        return

    # Salvar JPEGs individuais
    imgs_dir = HERE.parent / "figma" / "frames"
    imgs_dir.mkdir(exist_ok=True)
    for grp, fid, title, b64, height in shots:
        img_path = imgs_dir / f"{fid}.jpg"
        img_path.write_bytes(base64.b64decode(b64))

    total_kb = sum(len(b) // 1024 for *_, b, _ in shots)
    print(f"\n📦 Total das imagens: ~{total_kb} KB")
    print(f"🖼  JPEGs salvos em: frames-exportados/  (A1.jpg … B7.jpg)")
    print("🔧 Gerando script Figma Scripter…")

    js = build_figma_script(shots)
    OUT.write_text(js, encoding="utf-8")

    size_kb = OUT.stat().st_size // 1024
    print(f"✅ Script gerado: {OUT.name}  ({size_kb} KB)\n")
    print("── Opção 1 — Scripter (automático) ─────────────────────")
    print("1. No Figma: Plugins → Scripter")
    print("2. File → Open → seleciona figma-14estados-generated.js")
    print("   (ou abre o arquivo e Cmd+A → Cmd+C → cola no Scripter)")
    print("3. Clica Run → página '📋 14 Estados' criada automaticamente")
    print()
    print("── Opção 2 — Import manual (fallback) ──────────────────")
    print("1. No Figma: cria 14 frames 1280×(altura respectiva)")
    print("2. Arrasta os JPEGs de frames-exportados/ para cada frame")
    print("   A1.jpg → frame A1,  A2.jpg → frame A2, etc.")


asyncio.run(main())
