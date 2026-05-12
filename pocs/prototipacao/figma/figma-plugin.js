// ═══════════════════════════════════════════════════════════════
//  Maria Cacau — Figma Population Script  v3
//  Run via Scripter plugin: figma.com/community/plugin/1206449155596395736
//  Open your Figma file → Plugins → Scripter → paste → Run
// ═══════════════════════════════════════════════════════════════

async function main() {

  // ── 1. Load fonts ONCE upfront ──────────────────────────────
  const FR = { family: "Inter", style: "Regular" };
  const FB = { family: "Inter", style: "Bold" };
  for (const f of [FR, FB]) {
    try { await figma.loadFontAsync(f); } catch(e) {}
  }

  // ── 2. Core helpers ─────────────────────────────────────────
  function h2r(hex) {
    const v = hex.replace('#','');
    return { r:parseInt(v.slice(0,2),16)/255, g:parseInt(v.slice(2,4),16)/255, b:parseInt(v.slice(4,6),16)/255 };
  }

  function rect(x,y,w,h,hex,r=0) {
    const n = figma.createRectangle();
    n.x=x; n.y=y; n.resize(w,h);
    n.fills=[{type:'SOLID',color:h2r(hex)}];
    if(r) n.cornerRadius=r;
    return n;
  }

  function border(node, hex, weight=1) {
    node.strokes=[{type:'SOLID',color:h2r(hex)}];
    node.strokeWeight=weight; node.strokeAlign='INSIDE';
    return node;
  }

  async function txt(str, x, y, size, bold, hex='#1F1008', maxW=0) {
    const n = figma.createText();
    n.fontName = bold ? FB : FR;
    n.fontSize = size;
    n.fills = [{type:'SOLID',color:h2r(hex)}];
    n.x=x; n.y=y;
    n.characters = String(str||'');
    if(maxW) { n.textAutoResize='HEIGHT'; n.resize(maxW, n.height); }
    return n;
  }

  function frame(x,y,w,h,name,bg='#ffffff') {
    const f = figma.createFrame();
    f.x=x; f.y=y; f.resize(w,h); f.name=name;
    f.fills=[{type:'SOLID',color:h2r(bg)}];
    f.clipsContent=false;
    return f;
  }

  // append to parent or current page
  function add(node, parent) {
    (parent||figma.currentPage).appendChild(node);
    return node;
  }

  // ── 3. Setup 3 pages ────────────────────────────────────────
  const NAMES = ['🎨 Design Tokens','🧩 Componentes','📱 Telas do App'];
  while(figma.root.children.length < 3) figma.root.appendChild(figma.createPage());
  for(let i=0;i<3;i++) {
    figma.root.children[i].name = NAMES[i];
    for(const ch of [...figma.root.children[i].children]) ch.remove();
  }

  // ══════════════════════════════════════════════════════════════
  //  PAGE 1 — Design Tokens
  // ══════════════════════════════════════════════════════════════
  figma.currentPage = figma.root.children[0];

  // Color data
  const COLORS = [
    {g:'Marca',      name:'Chocolate',     hex:'#391B10'},
    {g:'Marca',      name:'Peach',         hex:'#F9A879'},
    {g:'Marca',      name:'Peach Dark',    hex:'#D4744A'},
    {g:'Superfície', name:'BG',            hex:'#F9F5F2'},
    {g:'Superfície', name:'Surface',       hex:'#FDFCFB'},
    {g:'Superfície', name:'Surface 2',     hex:'#F2ECE7'},
    {g:'Superfície', name:'Border',        hex:'#D9CEC6'},
    {g:'Superfície', name:'Border Light',  hex:'#EDE7E3'},
    {g:'Estado',     name:'Green',         hex:'#2B7A47'},
    {g:'Estado',     name:'Green BG',      hex:'#E8F5EE'},
    {g:'Estado',     name:'Amber',         hex:'#96600A'},
    {g:'Estado',     name:'Amber BG',      hex:'#FDF3E3'},
    {g:'Estado',     name:'Red',           hex:'#C0392B'},
    {g:'Estado',     name:'Red BG',        hex:'#FDECEA'},
    {g:'Estado',     name:'Blue',          hex:'#1A56A0'},
    {g:'Estado',     name:'Blue BG',       hex:'#E8F0FB'},
    {g:'Texto',      name:'Foreground',    hex:'#1F1008'},
    {g:'Texto',      name:'Muted',         hex:'#7A6157'},
    {g:'Texto',      name:'Subtle',        hex:'#A08880'},
    {g:'Sidebar',    name:'Sidebar BG',    hex:'#391B10'},
    {g:'Sidebar',    name:'Sidebar Text',  hex:'#F0E8E4'},
    {g:'Sidebar',    name:'Sidebar Muted', hex:'#9C7A6D'},
  ];

  const cpF = add(frame(0,0,1400,100,'Paleta de Cores'));
  add(await txt('PALETA DE CORES',20,18,10,false,'#999999'), cpF);

  const groups = [...new Set(COLORS.map(c=>c.g))];
  let gx=20, gy=44;
  for(const g of groups) {
    add(await txt(g,gx,gy,11,true,'#555555'), cpF);
    gy+=22;
    for(const c of COLORS.filter(x=>x.g===g)) {
      add(rect(gx,gy,72,72,c.hex,8), cpF);
      const isDark = parseInt(c.hex.slice(1,3),16) < 120;
      add(await txt(c.hex, gx, gy+20, 9, false, isDark?'#ffffff':'#1F1008', 72), cpF);
      add(await txt(c.name, gx, gy+76, 11, false, '#333333', 84), cpF);
      gx+=92;
    }
    gx=20; gy+=144;
  }
  cpF.resize(1400, gy+20);

  // Typography
  const tyF = add(frame(0, cpF.y+cpF.height+40, 860, 100, 'Tipografia'));
  add(await txt('TIPOGRAFIA — Inter',20,18,10,false,'#999999'), tyF);
  const SCALE=[
    {n:'H1 Display',s:32,b:true},{n:'H2 Section',s:24,b:true},{n:'H3 Card',s:18,b:true},
    {n:'Body 14',s:14,b:false},{n:'Body 13',s:13,b:false},{n:'Small 12',s:12,b:false},
    {n:'Micro 11',s:11,b:false},{n:'Tiny 10',s:10,b:false},
  ];
  let ty=44;
  for(const t of SCALE) {
    add(await txt(t.n,20,ty,10,false,'#aaaaaa'), tyF);
    add(await txt('Maria Cacau · Gestão de Pedidos',140,ty,t.s,t.b,'#1F1008'), tyF);
    ty+=t.s+22;
  }
  tyF.resize(860, ty+20);

  // Spacing tokens
  const spF = add(frame(900, cpF.y+cpF.height+40, 360, 320, 'Tokens de Layout'));
  add(await txt('TOKENS DE LAYOUT',20,18,10,false,'#999999'), spF);
  const TOKENS=[
    ['Border Radius S','4px'],['Border Radius M','8px'],['Border Radius L','12px'],
    ['Input height','30px'],['Button (primary)','34px'],['Status bar','28px'],
    ['Title bar','38px'],['Sidebar width','220px'],['Section header','40px'],
  ];
  let sy=44;
  for(const [l,v] of TOKENS) {
    add(await txt(l,20,sy,12,false,'#666666'), spF);
    add(await txt(v,220,sy,12,true,'#391B10'), spF);
    sy+=26;
  }

  // ══════════════════════════════════════════════════════════════
  //  PAGE 2 — Components
  // ══════════════════════════════════════════════════════════════
  figma.currentPage = figma.root.children[1];
  let cy = 0;

  // ── Buttons ──────────────────────────────────────────────────
  const btnF = add(frame(0,cy,1000,160,'Botões'));
  add(await txt('BOTÕES',20,16,10,false,'#999999'), btnF);
  const BTNS=[
    {l:'Cadastrar Pedido',bg:'#391B10',fg:'#ffffff'},
    {l:'Consultar',bg:'#391B10',fg:'#ffffff'},
    {l:'Limpar',bg:'#F2ECE7',fg:'#1F1008'},
    {l:'+ Adicionar produto',bg:'#F2ECE7',fg:'#1F1008'},
    {l:'Copiar',bg:'#F2ECE7',fg:'#1F1008'},
    {l:'Salvar',bg:'#F2ECE7',fg:'#1F1008'},
    {l:'Excluir',bg:'#FDECEA',fg:'#C0392B'},
  ];
  let bx=20;
  for(const b of BTNS) {
    const bw=b.l.length*7+24;
    const r=rect(bx,42,bw,34,b.bg,4);
    if(b.bg==='#F2ECE7'||b.bg==='#FDECEA') border(r,'#D9CEC6');
    add(r,btnF);
    add(await txt(b.l,bx+12,51,13,true,b.fg), btnF);
    bx+=bw+12;
  }
  add(await txt('Disabled state: 55% opacity',20,94,11,false,'#aaaaaa'), btnF);
  const disR=rect(20,112,120,30,'#391B10',4); disR.opacity=0.55; add(disR,btnF);
  add(await txt('Desabilitado',32,120,12,true,'#ffffff'), btnF);
  cy += 180;

  // ── Inputs — 9 states ────────────────────────────────────────
  const inpF = add(frame(0,cy,1000,100,'Inputs — 9 Estados'));
  add(await txt('INPUTS — 9 ESTADOS',20,16,10,false,'#999999'), inpF);
  const INP=[
    {l:'1 Vazio',          v:'',                 ph:'Nome do comprador…',bc:'#D9CEC6',bg:'#FDFCFB'},
    {l:'2 Preenchido',     v:'Bruna Otani Wada',  ph:'',                 bc:'#D9CEC6',bg:'#FDFCFB'},
    {l:'3 Focus',          v:'Bruna Otani…',      ph:'',                 bc:'#D4744A',bg:'#FDFCFB',glow:true},
    {l:'4 Erro — vazio',   v:'',                  ph:'',                 bc:'#C0392B',bg:'#FDFCFB',err:'Campo obrigatório'},
    {l:'5 Erro — CPF',     v:'123.456.789-00',    ph:'',                 bc:'#C0392B',bg:'#FDFCFB',err:'CPF inválido'},
    {l:'6 Desabilitado',   v:'Nome…',             ph:'',                 bc:'#EDE7E3',bg:'#F2ECE7',dis:true},
    {l:'7 Autofill',       v:'Bruna Otani Wada',  ph:'',                 bc:'#D9CEC6',bg:'#FAF5F0',muted:true},
    {l:'8 Calculado',      v:'R$ 276,00',         ph:'',                 bc:'#EDE7E3',bg:'#F5F0EB',calc:true},
    {l:'9 Total (grande)', v:'R$ 295,96',         ph:'',                 bc:'#C4A080',bg:'#F5EDE3',large:true},
  ];
  let iix=20, iiy=44;
  for(const s of INP) {
    const iw=s.large?220:180, ih=s.large?44:30;
    add(await txt(s.l,iix,iiy,10,false,'#999999',iw), inpF);
    const box=rect(iix,iiy+18,iw,ih,s.bg,4);
    border(box,s.bc);
    if(s.dis) box.opacity=0.65;
    if(s.glow) box.effects=[{type:'DROP_SHADOW',color:{r:0.83,g:0.45,b:0.29,a:0.3},offset:{x:0,y:0},radius:4,spread:2,visible:true,blendMode:'NORMAL'}];
    add(box,inpF);
    const dv=s.v||s.ph;
    if(dv) {
      const vc=s.v?(s.muted?'#A08880':'#1F1008'):'#C0B0A8';
      const vt=await txt(dv,iix+9,iiy+18+(ih>30?(ih-14)/2:8),s.large?18:13,s.large,vc);
      if(s.dis) vt.opacity=0.65;
      add(vt,inpF);
    }
    if(s.err) add(await txt(s.err,iix,iiy+ih+22,10,false,'#C0392B'), inpF);
    iix+=iw+20;
    if(iix>900){iix=20;iiy+=s.err?120:90;}
  }
  inpF.resize(1000, iiy+130);
  cy += inpF.height+20;

  // ── Selects · Segmented · Checkbox ───────────────────────────
  const ctF = add(frame(0,cy,1000,180,'Selects · Segmented · Checkbox'));
  add(await txt('SELECTS · SEGMENTED · CHECKBOX',20,16,10,false,'#999999'), ctF);

  // Select normal
  add(await txt('Select',20,36,10,false,'#A08880'), ctF);
  const s1=rect(20,52,200,30,'#FDFCFB',4); border(s1,'#D9CEC6'); add(s1,ctF);
  add(await txt('SEDEX PLP',30,61,13,false,'#1F1008'), ctF);
  add(await txt('▼',192,60,10,false,'#999999'), ctF);

  // Select error
  add(await txt('Select — Erro',240,36,10,false,'#A08880'), ctF);
  const s2=rect(240,52,200,30,'#FDFCFB',4); border(s2,'#C0392B'); add(s2,ctF);
  add(await txt('— Selecione —',250,61,13,false,'#C0B0A8'), ctF);
  add(await txt('▼',432,60,10,false,'#999999'), ctF);
  add(await txt('Campo obrigatório',240,86,10,false,'#C0392B'), ctF);

  // Segmented
  add(await txt('Segmented Control',460,36,10,false,'#A08880'), ctF);
  const SEGS=['Feminino','Masculino','Gêmeas','Gêmeos','Não sabe'];
  let sgx=460;
  for(let i=0;i<SEGS.length;i++){
    const sw=SEGS[i].length*7+14;
    const sb=rect(sgx,52,sw,30,i===0?'#391B10':'#FDFCFB',0);
    border(sb,'#D9CEC6');
    if(i===0){sb.topLeftRadius=4;sb.bottomLeftRadius=4;}
    if(i===SEGS.length-1){sb.topRightRadius=4;sb.bottomRightRadius=4;}
    add(sb,ctF);
    add(await txt(SEGS[i],sgx+7,61,11,i===0,i===0?'#ffffff':'#7A6157'), ctF);
    sgx+=sw;
  }

  // Checkboxes
  add(await txt('Checked',20,124,10,false,'#A08880'), ctF);
  const cb1=rect(20,140,14,14,'#391B10',3); add(cb1,ctF);
  add(await txt('✓',22,140,10,true,'#ffffff'), ctF);
  add(await txt('Mesmo que o comprador',40,141,12,false,'#7A6157'), ctF);

  add(await txt('Unchecked',240,124,10,false,'#A08880'), ctF);
  const cb2=rect(240,140,14,14,'#FDFCFB',3); border(cb2,'#D9CEC6'); add(cb2,ctF);
  add(await txt('Vai pagar na retirada',260,141,12,false,'#7A6157'), ctF);
  cy += ctF.height+20;

  // ── Banners ───────────────────────────────────────────────────
  const banF = add(frame(0,cy,1000,200,'Banners de Estado'));
  add(await txt('BANNERS DE ESTADO',20,16,10,false,'#999999'), banF);
  const BANS=[
    {m:'✓  Pedido #25859 cadastrado com sucesso!',                  bg:'#E8F5EE',fg:'#2B7A47',bc:'#2B7A47',y:40},
    {m:'⚠  Preencha os campos obrigatórios antes de cadastrar',      bg:'#FDECEA',fg:'#C0392B',bc:'#C0392B',y:84},
    {m:'!  CEP não encontrado. Preencha o endereço manualmente.',    bg:'#FDF3E3',fg:'#96600A',bc:'#96600A',y:128},
    {m:'i  Consultando CEP 04743-030…',                              bg:'#E8F0FB',fg:'#1A56A0',bc:'#1A56A0',y:162},
  ];
  for(const b of BANS){
    const br=rect(20,b.y,960,30,b.bg,6); border(br,b.bc); add(br,banF);
    add(await txt(b.m,34,b.y+9,12,false,b.fg,920), banF);
  }
  cy += banF.height+20;

  // ── Badges ────────────────────────────────────────────────────
  const bdF = add(frame(0,cy,1000,80,'Badges & Pills'));
  add(await txt('BADGES & PILLS',20,16,10,false,'#999999'), bdF);
  const BDG=[
    {l:'Confirmado',bg:'#E8F5EE',fg:'#2B7A47',dot:'#2B7A47'},
    {l:'Pendente',  bg:'#FDF3E3',fg:'#96600A',dot:'#96600A'},
    {l:'Cancelado', bg:'#FDECEA',fg:'#C0392B',dot:'#C0392B'},
    {l:'Em trânsito',bg:'#E8F0FB',fg:'#1A56A0',dot:'#1A56A0'},
    {l:'Novo',      bg:'#F9A879',fg:'#391B10',dot:null},
    {l:'Em breve',  bg:'#F2ECE7',fg:'#7A6157',dot:null},
    {l:'Falta: R$ 50,00',bg:'#FDF3E3',fg:'#96600A',dot:null},
  ];
  let bdx=20;
  for(const b of BDG){
    const bw=b.l.length*7+22;
    const br=rect(bdx,40,bw,24,b.bg,12); add(br,bdF);
    if(b.dot){add(rect(bdx+8,51,6,6,b.dot,3),bdF);}
    add(await txt(b.l,bdx+(b.dot?20:8),47,11,false,b.fg), bdF);
    bdx+=bw+12;
  }
  cy += bdF.height+20;

  // ── Table ─────────────────────────────────────────────────────
  const tabF = add(frame(0,cy,1000,240,'Tabela de Dados'));
  add(await txt('TABELA DE DADOS',20,16,10,false,'#999999'), tabF);
  const TCOLS=[{h:'Código',w:90},{h:'Produto',w:500},{h:'Qtd',w:80},{h:'Total',w:120}];
  const thr=rect(20,40,820,30,'#F2ECE7'); border(thr,'#D9CEC6'); add(thr,tabF);
  let thx=36;
  for(const c of TCOLS){add(await txt(c.h,thx,49,10,false,'#7A6157'),tabF);thx+=c.w;}
  const TROWS=[
    ['AGU002','Água Lindoya Baby 240ml com lacinho','16','R$ 0,00'],
    ['BIC001','Bichinho Virtual personalizado + Cordão','30','R$ 207,00'],
    ['DIF003','Difusor Premium 30ml + Laço + Saquinho','25','R$ 0,00'],
    ['GAM001','Mini game Personalizado + adesivo','100','R$ 0,00'],
    ['LAT006','Latinhas 7×5 c/ Adesivo na Tampa','60','R$ 0,00'],
  ];
  for(let ri=0;ri<TROWS.length;ri++){
    const ry=70+ri*30;
    const rb=rect(20,ry,820,30,ri%2===0?'#FDFCFB':'#F9F5F2'); border(rb,'#EDE7E3'); add(rb,tabF);
    let rx=36;
    for(let ci=0;ci<TROWS[ri].length;ci++){
      add(await txt(TROWS[ri][ci],rx,ry+9,12,ci===0||ci===3,ci===0?'#7A6157':'#1F1008'),tabF);
      rx+=TCOLS[ci].w;
    }
  }
  const tfr=rect(20,70+TROWS.length*30,820,30,'#F2ECE7');
  tfr.strokeWeight=2;tfr.strokes=[{type:'SOLID',color:h2r('#D9CEC6')}];tfr.strokeAlign='INSIDE';
  add(tfr,tabF);
  add(await txt('Total geral',36,70+TROWS.length*30+9,12,false,'#7A6157'),tabF);
  add(await txt('651 un/kits',36+90+500+80,70+TROWS.length*30+9,12,true,'#1F1008'),tabF);
  tabF.resize(1000,70+TROWS.length*30+60);
  cy += tabF.height+20;

  // ── Sidebar ───────────────────────────────────────────────────
  const sibF = add(frame(0,cy,220,360,'Sidebar','#391B10'));
  add(rect(14,14,38,38,'#F9A879',8), sibF);
  add(await txt('MC',20,23,14,true,'#391B10'), sibF);
  add(await txt('Maria Cacau',60,18,13,true,'#F0E8E4'), sibF);
  add(await txt('GESTÃO DE PEDIDOS',60,34,9,false,'#9C7A6D'), sibF);
  add(rect(0,66,220,1,'#5A3020'), sibF);
  const SI=[{l:'Novo Pedido',a:true,y:80},{l:'Produtos',a:false,y:112},{l:'Entregas',a:false,y:144},
    {l:'Verificar CPF',a:false,y:176},{l:'Frete por CEP',dim:true,y:224},{l:'Nota Fiscal',dim:true,y:256}];
  for(const n of SI){
    if(n.a){const ab=rect(0,n.y-4,220,32,'#ffffff');ab.opacity=0.14;add(ab,sibF);add(rect(0,n.y+4,3,18,'#F9A879'),sibF);}
    const t=await txt(n.l,36,n.y+4,13,n.a,n.dim?'#9C7A6D':'#F0E8E4');
    if(n.dim)t.opacity=0.5;
    add(t,sibF);
  }

  // ── Autocomplete ──────────────────────────────────────────────
  const acF = add(frame(240,cy,420,150,'Autocomplete de Produto'));
  add(await txt('AUTOCOMPLETE',20,16,10,false,'#999999'), acF);
  const acI=rect(20,40,380,30,'#FDFCFB',4);
  acI.strokes=[{type:'SOLID',color:h2r('#D4744A')}];acI.strokeWeight=1.5;acI.strokeAlign='INSIDE';
  add(acI,acF);
  add(await txt('BIC',30,50,13,false,'#1F1008'), acF);
  const acD=rect(20,72,380,72,'#FDFCFB',4); border(acD,'#D9CEC6');
  acD.effects=[{type:'DROP_SHADOW',color:{r:0,g:0,b:0,a:0.1},offset:{x:0,y:4},radius:12,spread:0,visible:true,blendMode:'NORMAL'}];
  add(acD,acF);
  const acH=rect(20,72,380,36,'#F5EDE3'); acH.topLeftRadius=4; acH.topRightRadius=4; add(acH,acF);
  add(await txt('BIC001',30,82,11,false,'#A08880'), acF);
  add(await txt('Bichinho Virtual personalizado + Cordão',80,82,12,false,'#1F1008'), acF);
  add(await txt('BIC002',30,114,11,false,'#A08880'), acF);
  add(await txt('Bichinho Virtual com Caixinha Acetato',80,114,12,false,'#7A6157'), acF);

  // ── Sticky Footer ─────────────────────────────────────────────
  const stkF = add(frame(0,cy+380,1000,56,'Sticky Footer','#FDFCFB'));
  border(stkF,'#EDE7E3');
  const SIT=[{s:'Pedido',v:'#25859',g:false,x:28},{s:'Total',v:'R$ 295,96',g:false,x:160},{s:'Falta pagar',v:'R$ 0,00',g:true,x:320}];
  for(const s of SIT){
    add(await txt(s.s,s.x,10,10,false,'#A08880'),stkF);
    add(await txt(s.v,s.x,24,13,true,s.g?'#2B7A47':'#1F1008'),stkF);
    if(s.x>28){add(rect(s.x-12,14,1,26,'#EDE7E3'),stkF);}
  }
  const clrB=rect(838,11,80,34,'#F2ECE7',4); border(clrB,'#D9CEC6'); add(clrB,stkF);
  add(await txt('Limpar',855,20,13,false,'#1F1008'),stkF);
  add(rect(930,11,154,34,'#391B10',4),stkF);
  add(await txt('Cadastrar Pedido',942,20,13,true,'#ffffff'),stkF);

  // ── Section Headers ───────────────────────────────────────────
  const shF = add(frame(0,cy+460,1000,240,'Headers de Seção'));
  add(await txt('HEADERS DE SEÇÃO',20,16,10,false,'#999999'), shF);
  const SHS=[
    {n:'1',t:'Identificação do Pedido',sub:'',y:40,open:true,int:false},
    {n:'2',t:'Comprador',sub:'',y:88,open:true,int:false},
    {n:'5',t:'Produtos',sub:'3 itens',y:136,open:true,int:false},
    {n:'9',t:'Controle Interno',sub:'Uso interno da operação',y:184,open:false,int:true},
  ];
  for(const s of SHS){
    const bg=rect(20,s.y,860,36,s.int?'#FAF9F8':'#F2ECE7',s.open?0:8);
    if(s.open){bg.topLeftRadius=8;bg.topRightRadius=8;} else bg.cornerRadius=8;
    add(bg,shF);
    add(rect(30,s.y+8,20,20,s.int?'#A08880':'#391B10',10),shF);
    add(await txt(s.n,34+(s.n.length>1?0:3),s.y+12,9,true,'#ffffff'),shF);
    add(await txt(s.t,58,s.y+12,13,true,s.int?'#7A6157':'#1F1008'),shF);
    if(s.sub) add(await txt(s.sub,680,s.y+13,11,false,'#A08880'),shF);
    add(await txt(s.open?'▼':'▶',836,s.y+13,10,false,'#A08880'),shF);
  }

  // ── Status Bar ────────────────────────────────────────────────
  const stbCmpF = add(frame(0,cy+720,800,50,'Status Bar — 3 estados'));
  add(await txt('STATUS BAR',20,8,10,false,'#999999'), stbCmpF);
  const SDOTS=[{hex:'#2B7A47',l:'Pronto para consultar',x:14},{hex:'#96600A',l:'Consultando CEP…',x:260},{hex:'#C0392B',l:'CEP não encontrado',x:480}];
  for(const d of SDOTS){add(rect(d.x,26,6,6,d.hex,3),stbCmpF);add(await txt(d.l,d.x+12,23,11,false,'#A08880'),stbCmpF);}

  // ══════════════════════════════════════════════════════════════
  //  PAGE 3 — App Screens
  // ══════════════════════════════════════════════════════════════
  figma.currentPage = figma.root.children[2];

  // Chrome builder
  async function chrome(parent, activeLabel, statusMsg) {
    // Title bar
    add(rect(0,0,1280,38,'#391B10'),parent);
    add(rect(14,8,22,22,'#F9A879',5),parent);
    add(await txt('MC',19,12,10,true,'#391B10'),parent);
    add(await txt('Maria Cacau — Gestão de Pedidos',44,13,13,false,'#F0E8E4'),parent);
    // Sidebar
    add(rect(0,38,220,734,'#391B10'),parent);
    add(rect(14,52,38,38,'#F9A879',8),parent);
    add(await txt('MC',20,62,14,true,'#391B10'),parent);
    add(await txt('Maria Cacau',60,56,13,true,'#F0E8E4'),parent);
    add(await txt('GESTÃO DE PEDIDOS',60,72,9,false,'#9C7A6D'),parent);
    add(rect(0,100,220,1,'#5A3020'),parent);
    const NAV=[{l:'Novo Pedido',y:110},{l:'Produtos',y:142},{l:'Entregas',y:174},{l:'Verificar CPF',y:206},{l:'Frete por CEP',y:254,dim:true},{l:'Nota Fiscal',y:286,dim:true}];
    for(const n of NAV){
      const act=n.l===activeLabel;
      if(act){const ab=rect(0,n.y-4,220,32,'#ffffff');ab.opacity=0.14;add(ab,parent);add(rect(0,n.y+4,3,18,'#F9A879'),parent);}
      const t=await txt(n.l,36,n.y+4,13,act,n.dim?'#9C7A6D':'#F0E8E4');
      if(n.dim)t.opacity=0.5; add(t,parent);
    }
    // Status bar
    add(rect(0,772,1280,28,'#FDFCFB'),parent);
    add(rect(0,772,1280,1,'#D9CEC6'),parent);
    add(rect(14,783,6,6,'#2B7A47',3),parent);
    add(await txt(statusMsg||'Pronto',28,780,11,false,'#A08880'),parent);
    add(await txt('v4.2',1232,780,11,false,'#A08880'),parent);
  }

  // ── Screen 1 — Novo Pedido ────────────────────────────────────
  const scNP = add(frame(0,0,1280,800,'Novo Pedido — Formulário Preenchido','#F9F5F2'));
  await chrome(scNP,'Novo Pedido','Planilha P2026 carregada · pronto para consultar');

  add(await txt('Novo Pedido',250,52,20,true,'#1F1008'),scNP);
  add(await txt('Preencha os dados e clique em Cadastrar Pedido para salvar na planilha',250,76,13,false,'#7A6157'),scNP);

  const FSECS=[
    {n:'1',t:'Identificação do Pedido',y:106,fields:[{l:'Nº Pedido',v:'25859',w:140},{l:'Como Conheceu',v:'Cliente',w:200}]},
    {n:'2',t:'Comprador',y:194,fields:[{l:'Nome',v:'Bruna Otani Wada',w:340},{l:'Parentesco',v:'Mãe',w:120},{l:'Telefone',v:'(11) 99988-7137',w:180},{l:'CPF',v:'228.085.478-38',w:180}]},
    {n:'3',t:'Presenteado & Evento',y:320,fields:[{l:'Nome',v:'Laura',w:180},{l:'Sexo',v:'Feminino',w:120},{l:'Evento',v:'Maternidade',w:160},{l:'Data',v:'28/01/2026',w:130}]},
    {n:'5',t:'Produtos — 1 item',y:420,fields:[{l:'Produto',v:'Cartão 7x10 c/ Mini Tabletinho',w:380},{l:'Qtd',v:'40',w:60},{l:'Unit.',v:'R$ 6,90',w:100},{l:'Total',v:'R$ 276,00',w:110,calc:true}]},
    {n:'6',t:'Financeiro',y:536,fields:[{l:'Desconto',v:'R$ 0,00',w:140},{l:'Frete',v:'R$ 19,96',w:140},{l:'TOTAL',v:'R$ 295,96',w:220,total:true}]},
    {n:'8',t:'Entrega — SEDEX PLP',y:636,fields:[{l:'Data',v:'22/12/2025',w:130},{l:'Modalidade',v:'SEDEX PLP',w:160},{l:'CEP',v:'06351-380',w:110},{l:'Cidade/UF',v:'Carapicuíba / SP',w:180}]},
  ];
  for(const s of FSECS){
    const sh=rect(248,s.y,992,32,'#F2ECE7'); sh.topLeftRadius=6;sh.topRightRadius=6; add(sh,scNP);
    add(rect(258,s.y+6,20,20,'#391B10',10),scNP);
    add(await txt(s.n,262+(s.n.length>1?0:3),s.y+10,9,true,'#ffffff'),scNP);
    add(await txt(s.t,286,s.y+10,12,true,'#1F1008'),scNP);
    const sb=rect(248,s.y+32,992,72,'#FDFCFB'); sb.bottomLeftRadius=6;sb.bottomRightRadius=6; border(sb,'#EDE7E3'); add(sb,scNP);
    let fx=266;
    for(const f of s.fields){
      add(await txt(f.l,fx,s.y+40,9,false,'#A08880'),scNP);
      const fb=rect(fx,s.y+52,f.w,f.total?36:24,f.calc?'#F5F0EB':f.total?'#F5EDE3':'#FDFCFB',3);
      border(fb,f.total?'#C4A080':'#D9CEC6',f.total?2:1);
      add(fb,scNP);
      add(await txt(f.v,fx+7,s.y+(f.total?62:57),f.total?15:12,f.total,f.calc||f.total?'#7A6157':'#1F1008'),scNP);
      fx+=f.w+12;
    }
  }
  // Sticky footer
  const sf1=rect(220,744,1060,28,'#FDFCFB'); border(sf1,'#EDE7E3'); add(sf1,scNP);
  add(await txt('#25859',240,751,12,true,'#1F1008'),scNP);
  add(await txt('Total: R$ 295,96',336,751,12,false,'#1F1008'),scNP);
  add(await txt('Falta: R$ 0,00',490,751,12,false,'#2B7A47'),scNP);
  add(rect(1072,740,188,36,'#391B10',4),scNP);
  add(await txt('→  Cadastrar Pedido',1084,749,13,true,'#ffffff'),scNP);

  // ── Screen 2 — Resumo de Produtos ────────────────────────────
  const scPr = add(frame(1320,0,1280,800,'Resumo de Produtos','#F9F5F2'));
  await chrome(scPr,'Produtos','17 pedidos encontrados · 27/04 a 03/05');

  add(await txt('Resumo de Produtos',250,52,20,true,'#1F1008'),scPr);
  add(await txt('Itens a expedir no período, agrupados por produto',250,76,13,false,'#7A6157'),scPr);

  const pfb=rect(250,104,980,46,'#FDFCFB',8); border(pfb,'#EDE7E3'); add(pfb,scPr);
  const pd1=rect(266,118,130,26,'#FDFCFB',3); border(pd1,'#D9CEC6'); add(pd1,scPr);
  add(await txt('27/04/2026',274,124,12,false,'#1F1008'),scPr);
  const pd2=rect(410,118,130,26,'#FDFCFB',3); border(pd2,'#D9CEC6'); add(pd2,scPr);
  add(await txt('03/05/2026',418,124,12,false,'#1F1008'),scPr);
  add(rect(554,114,90,30,'#391B10',4),scPr);
  add(await txt('Consultar',566,122,13,true,'#ffffff'),scPr);

  const STATS=[
    {l:'PEDIDOS',v:'17',s:'no período',c:'#F9A879',x:250},
    {l:'ITENS A EXPEDIR',v:'651',s:'unidades/kits',c:'#2B7A47',x:502},
    {l:'SKUS ÚNICOS',v:'12',s:'produtos diferentes',c:'#1A56A0',x:754},
    {l:'SEM ESTOQUE',v:'0',s:'produtos em falta',c:'#96600A',x:1006},
  ];
  for(const s of STATS){
    const c=rect(s.x,166,240,78,'#FDFCFB',8); border(c,'#EDE7E3'); add(c,scPr);
    add(rect(s.x,166,240,3,s.c),scPr);
    add(await txt(s.l,s.x+14,178,9,false,'#A08880'),scPr);
    add(await txt(s.v,s.x+14,192,22,true,'#1F1008'),scPr);
    add(await txt(s.s,s.x+14,222,11,false,'#A08880'),scPr);
  }

  const cbg=rect(250,260,980,110,'#FDFCFB',8); border(cbg,'#EDE7E3'); add(cbg,scPr);
  add(await txt('QUANTIDADE POR PRODUTO',266,272,10,false,'#A08880'),scPr);
  const QTY=[16,10,40,30,30,10,25,20,100,40,60,10];
  const MQ=Math.max(...QTY);
  const CODES=['AGU','ALC','AQU','BIC','BRI','COF','DIF','DIV','GAM','JDM','LAT','LE1'];
  for(let i=0;i<QTY.length;i++){
    const bh=Math.max(4,Math.round((QTY[i]/MQ)*60));
    add(rect(268+i*76,340-bh,62,bh,'#391B10',2),scPr);
    add(await txt(CODES[i],268+i*76+8,344,8,false,'#A08880'),scPr);
  }

  const pth=rect(250,380,980,28,'#F2ECE7'); border(pth,'#D9CEC6'); add(pth,scPr);
  add(await txt('Código',266,389,10,false,'#7A6157'),scPr);
  add(await txt('Produto',362,389,10,false,'#7A6157'),scPr);
  add(await txt('Total',842,389,10,false,'#7A6157'),scPr);
  const PRWS=[['AGU002','Água Lindoya Baby 240ml com lacinho','16 un'],['BIC001','Bichinho Virtual personalizado + Cordão','30 un'],['DIF003','Difusor Premium 30ml + Laço + Saquinho','25 un'],['GAM001','Mini game Personalizado + adesivo','100 un'],['LAT006','Latinhas 7×5 c/ Adesivo na Tampa','60 un']];
  for(let ri=0;ri<PRWS.length;ri++){
    const ry=408+ri*28; const rb=rect(250,ry,980,28,ri%2===0?'#FDFCFB':'#F9F5F2'); border(rb,'#EDE7E3'); add(rb,scPr);
    add(await txt(PRWS[ri][0],266,ry+8,12,true,'#7A6157'),scPr);
    add(await txt(PRWS[ri][1],362,ry+8,12,false,'#1F1008'),scPr);
    add(await txt(PRWS[ri][2],842,ry+8,12,true,'#1F1008'),scPr);
  }

  // ── Screen 3 — CPF ────────────────────────────────────────────
  const scC = add(frame(2640,0,1280,800,'Verificar CPF','#F9F5F2'));
  await chrome(scC,'Verificar CPF','CPF 228.085.478-38 é válido');

  add(await txt('Verificação de CPF',250,52,20,true,'#1F1008'),scC);
  add(await txt('Valide o dígito verificador antes de cadastrar um pedido',250,76,13,false,'#7A6157'),scC);

  const cb=rect(250,104,420,50,'#FDFCFB',8); border(cb,'#EDE7E3'); add(cb,scC);
  const ci=rect(266,120,240,28,'#FDFCFB',4); border(ci,'#D9CEC6'); add(ci,scC);
  add(await txt('228.085.478-38',274,128,13,false,'#1F1008'),scC);
  add(rect(518,118,80,30,'#391B10',4),scC);
  add(await txt('Verificar',528,126,13,true,'#ffffff'),scC);

  // Valid result
  const rv=rect(250,172,380,80,'#FDFCFB',8); border(rv,'#EDE7E3'); add(rv,scC);
  add(rect(266,190,40,40,'#E8F5EE',20),scC);
  add(await txt('✓',276,197,16,true,'#2B7A47'),scC);
  add(await txt('CPF válido',316,186,15,true,'#2B7A47'),scC);
  add(await txt('Dígito verificador correto — CPF pode ser cadastrado.',316,206,12,false,'#7A6157'),scC);
  add(await txt('228.085.478-38',316,223,12,false,'#A08880'),scC);

  // Invalid result
  const ri2=rect(250,272,380,80,'#FDFCFB',8); border(ri2,'#EDE7E3'); add(ri2,scC);
  add(rect(266,290,40,40,'#FDECEA',20),scC);
  add(await txt('✕',278,296,14,true,'#C0392B'),scC);
  add(await txt('CPF inválido',316,286,15,true,'#C0392B'),scC);
  add(await txt('Dígito verificador incorreto. Verifique o número.',316,306,12,false,'#7A6157'),scC);
  add(await txt('123.456.789-00',316,323,12,false,'#A08880'),scC);

  // ── Zoom to page 1 ────────────────────────────────────────────
  figma.currentPage = figma.root.children[0];
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);

  console.log('');
  console.log('✅ Maria Cacau Design System — criado com sucesso!');
  console.log('   Page 1 🎨  Paleta (22 cores) · Tipografia · Tokens de layout');
  console.log('   Page 2 🧩  Botões · Inputs×9 · Selects · Segmented · Checkboxes');
  console.log('               Banners · Badges · Tabela · Sidebar · Autocomplete');
  console.log('               Sticky Footer · Section headers · Status bar');
  console.log('   Page 3 📱  Novo Pedido · Resumo de Produtos · Verificar CPF');
}

main().catch(e => {
  console.error('❌ Erro ao executar:', e.message);
  console.error(e.stack);
});
