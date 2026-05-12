// figma-vetorial-generated.js — gerado por html-to-figma.py v2
// Plugin: Scripter  figma.com/community/plugin/1206449155596395736
// Estrutura: Frames aninhados espelham o DOM — selecione seções inteiras no Figma.

async function main() {
  const FR = { family: 'Inter', style: 'Regular' };
  const FB = { family: 'Inter', style: 'Bold' };
  await figma.loadFontAsync(FR);
  await figma.loadFontAsync(FB);

  let pg = figma.root.children.find(p => p.name.includes('HTML Vetorial'));
  if (!pg) { pg = figma.createPage(); pg.name = '🧩 HTML Vetorial'; }
  else { for (const c of [...pg.children]) c.remove(); }
  figma.currentPage = pg;

  // ── A1: Pedido mínimo — 1 produto, 1 parcela
  {const F=figma.createFrame();
    F.x=0; F.y=0;
    F.resize(1280,2567);
    F.name='A1 — Pedido mínimo — 1 produto, 1 parcela';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n0=figma.createFrame();
      n0.x=0.0; n0.y=0.0;
      n0.resize(Math.max(1,1280),Math.max(1,38));
      n0.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n0.clipsContent=false;
      F.appendChild(n0);
      {const n1=figma.createFrame();
        n1.x=14.0; n1.y=8.0;
        n1.resize(Math.max(1,22),Math.max(1,22));
        n1.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1.clipsContent=false;
        n1.cornerRadius=5.0;
        n0.appendChild(n1);
        {const n2=figma.createText();
          n2.fontName=FB;
          n2.fontSize=10.0;
          n2.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n2.x=2.5; n2.y=5;
          n2.characters='MC';
          n1.appendChild(n2);}
      }
      {const n3=figma.createText();
        n3.fontName=FR;
        n3.fontSize=13.0;
        n3.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n3.x=44; n3.y=11;
        n3.characters='Maria Cacau — Gestão de Pedidos';
        n0.appendChild(n3);}
    }
    {const n4=figma.createFrame();
      n4.x=0.0; n4.y=38.0;
      n4.resize(Math.max(1,220),Math.max(1,2501));
      n4.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n4.clipsContent=false;
      F.appendChild(n4);
      {const n5=figma.createFrame();
        n5.x=14.0; n5.y=14.0;
        n5.resize(Math.max(1,38),Math.max(1,38));
        n5.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n5.clipsContent=false;
        n5.cornerRadius=8.0;
        n4.appendChild(n5);
        {const n6=figma.createText();
          n6.fontName=FB;
          n6.fontSize=14.0;
          n6.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n6.x=7.5; n6.y=10.5;
          n6.characters='MC';
          n5.appendChild(n6);}
      }
      {const n7=figma.createText();
        n7.fontName=FB;
        n7.fontSize=13.0;
        n7.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n7.x=62; n7.y=18.5;
        n7.characters='Maria Cacau';
        n4.appendChild(n7);}
      {const n8=figma.createText();
        n8.fontName=FR;
        n8.fontSize=10.0;
        n8.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n8.x=62; n8.y=35.5;
        n8.characters='Gestão de Pedidos';
        n4.appendChild(n8);}
      {const n9=figma.createText();
        n9.fontName=FB;
        n9.fontSize=10.0;
        n9.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n9.x=16; n9.y=85;
        n9.characters='Pedidos';
        n4.appendChild(n9);}
      {const n10=figma.createFrame();
        n10.x=8.0; n10.y=101.0;
        n10.resize(Math.max(1,204),Math.max(1,34));
        n10.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n10.clipsContent=false;
        n10.cornerRadius=8.0;
        n4.appendChild(n10);
        {const n11=figma.createText();
          n11.fontName=FB;
          n11.fontSize=13.0;
          n11.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n11.x=38; n11.y=9;
          n11.characters='Novo Pedido';
          n10.appendChild(n11);}
        {const n12=figma.createFrame();
          n12.x=160.4; n12.y=10.5;
          n12.resize(Math.max(1,33.6),Math.max(1,13));
          n12.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n12.clipsContent=false;
          n12.cornerRadius=8.0;
          n10.appendChild(n12);
          {const n13=figma.createText();
            n13.fontName=FB;
            n13.fontSize=9.0;
            n13.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n13.x=5; n13.y=1;
            n13.characters='Novo';
            n12.appendChild(n13);}
        }
      }
      {const n14=figma.createText();
        n14.fontName=FB;
        n14.fontSize=10.0;
        n14.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n14.x=16; n14.y=145;
        n14.characters='Consultas';
        n4.appendChild(n14);}
      {const n15=figma.createText();
        n15.fontName=FR;
        n15.fontSize=13.0;
        n15.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n15.x=46; n15.y=170;
        n15.characters='Produtos';
        n4.appendChild(n15);}
      {const n16=figma.createText();
        n16.fontName=FR;
        n16.fontSize=13.0;
        n16.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n16.x=46; n16.y=206;
        n16.characters='Entregas';
        n4.appendChild(n16);}
      {const n17=figma.createText();
        n17.fontName=FR;
        n17.fontSize=13.0;
        n17.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n17.x=46; n17.y=242;
        n17.characters='Verificar CPF';
        n4.appendChild(n17);}
      {const n18=figma.createText();
        n18.fontName=FB;
        n18.fontSize=10.0;
        n18.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n18.x=16; n18.y=277;
        n18.characters='Em breve';
        n4.appendChild(n18);}
      {const n19=figma.createText();
        n19.fontName=FR;
        n19.fontSize=13.0;
        n19.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n19.x=46; n19.y=302;
        n19.characters='Frete por CEP';
        n4.appendChild(n19);}
      {const n20=figma.createFrame();
        n20.x=169.2; n20.y=303.5;
        n20.resize(Math.max(1,32.8),Math.max(1,13));
        n20.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n20.clipsContent=false;
        n20.cornerRadius=8.0;
        n20.opacity=0.36;
        n4.appendChild(n20);
        {const n21=figma.createText();
          n21.fontName=FB;
          n21.fontSize=9.0;
          n21.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n21.x=5; n21.y=1;
          n21.characters='Logo';
          n20.appendChild(n21);}
      }
      {const n22=figma.createText();
        n22.fontName=FR;
        n22.fontSize=13.0;
        n22.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n22.x=46; n22.y=338;
        n22.characters='Nota Fiscal';
        n4.appendChild(n22);}
      {const n23=figma.createFrame();
        n23.x=169.2; n23.y=339.5;
        n23.resize(Math.max(1,32.8),Math.max(1,13));
        n23.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n23.clipsContent=false;
        n23.cornerRadius=8.0;
        n23.opacity=0.36;
        n4.appendChild(n23);
        {const n24=figma.createText();
          n24.fontName=FB;
          n24.fontSize=9.0;
          n24.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n24.x=5; n24.y=1;
          n24.characters='Logo';
          n23.appendChild(n24);}
      }
    }
    {const n25=figma.createText();
      n25.fontName=FB;
      n25.fontSize=20.0;
      n25.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n25.x=248; n25.y=62;
      n25.characters='Novo Pedido';
      F.appendChild(n25);}
    {const n26=figma.createText();
      n26.fontName=FR;
      n26.fontSize=13.0;
      n26.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n26.x=248; n26.y=88;
      n26.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n26);}
    {const n27=figma.createFrame();
      n27.x=265.0; n27.y=133.0;
      n27.resize(Math.max(1,20),Math.max(1,20));
      n27.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n27.clipsContent=false;
      n27.cornerRadius=50.0;
      F.appendChild(n27);
      {const n28=figma.createText();
        n28.fontName=FB;
        n28.fontSize=9.0;
        n28.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n28.x=7.6; n28.y=4.5;
        n28.characters='1';
        n27.appendChild(n28);}
    }
    {const n29=figma.createText();
      n29.fontName=FB;
      n29.fontSize=13.0;
      n29.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n29.x=295; n29.y=135;
      n29.characters='Identificação do Pedido';
      F.appendChild(n29);}
    {const n30=figma.createText();
      n30.fontName=FR;
      n30.fontSize=11.0;
      n30.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n30.x=265; n30.y=178;
      n30.characters='Nº Pedido';
      F.appendChild(n30);}
    {const n31=figma.createText();
      n31.fontName=FR;
      n31.fontSize=11.0;
      n31.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n31.x=319.2; n31.y=178;
      n31.characters='*';
      F.appendChild(n31);}
    {const n32=figma.createText();
      n32.fontName=FR;
      n32.fontSize=13.0;
      n32.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n32.x=274; n32.y=201.5;
      n32.characters='25859';
      F.appendChild(n32);}
    {const n33=figma.createText();
      n33.fontName=FR;
      n33.fontSize=11.0;
      n33.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n33.x=757; n33.y=178;
      n33.characters='Como Conheceu';
      F.appendChild(n33);}
    {const n34=figma.createText();
      n34.fontName=FR;
      n34.fontSize=13.0;
      n34.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n34.x=766; n34.y=201.5;
      n34.characters='Cliente';
      F.appendChild(n34);}
    {const n35=figma.createFrame();
      n35.x=265.0; n35.y=260.0;
      n35.resize(Math.max(1,20),Math.max(1,20));
      n35.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n35.clipsContent=false;
      n35.cornerRadius=50.0;
      F.appendChild(n35);
      {const n36=figma.createText();
        n36.fontName=FB;
        n36.fontSize=9.0;
        n36.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n36.x=7; n36.y=4.5;
        n36.characters='2';
        n35.appendChild(n36);}
    }
    {const n37=figma.createText();
      n37.fontName=FB;
      n37.fontSize=13.0;
      n37.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n37.x=295; n37.y=262;
      n37.characters='Comprador';
      F.appendChild(n37);}
    {const n38=figma.createText();
      n38.fontName=FR;
      n38.fontSize=11.0;
      n38.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n38.x=265; n38.y=305;
      n38.characters='Nome do Comprador';
      F.appendChild(n38);}
    {const n39=figma.createText();
      n39.fontName=FR;
      n39.fontSize=11.0;
      n39.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n39.x=378.2; n39.y=305;
      n39.characters='*';
      F.appendChild(n39);}
    {const n40=figma.createText();
      n40.fontName=FR;
      n40.fontSize=13.0;
      n40.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n40.x=274; n40.y=328.5;
      n40.characters='Bruna Otani Wada';
      F.appendChild(n40);}
    {const n41=figma.createText();
      n41.fontName=FR;
      n41.fontSize=11.0;
      n41.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n41.x=265; n41.y=361;
      n41.characters='Parentesco';
      F.appendChild(n41);}
    {const n42=figma.createText();
      n42.fontName=FR;
      n42.fontSize=13.0;
      n42.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n42.x=274; n42.y=384.5;
      n42.characters='Mãe';
      F.appendChild(n42);}
    {const n43=figma.createText();
      n43.fontName=FR;
      n43.fontSize=11.0;
      n43.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n43.x=757; n43.y=361;
      n43.characters='Telefone';
      F.appendChild(n43);}
    {const n44=figma.createText();
      n44.fontName=FR;
      n44.fontSize=11.0;
      n44.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n44.x=803.6; n44.y=361;
      n44.characters='*';
      F.appendChild(n44);}
    {const n45=figma.createText();
      n45.fontName=FR;
      n45.fontSize=13.0;
      n45.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n45.x=766; n45.y=384.5;
      n45.characters='(11) 99988-7137';
      F.appendChild(n45);}
    {const n46=figma.createText();
      n46.fontName=FR;
      n46.fontSize=11.0;
      n46.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n46.x=265; n46.y=417;
      n46.characters='CPF';
      F.appendChild(n46);}
    {const n47=figma.createText();
      n47.fontName=FR;
      n47.fontSize=13.0;
      n47.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n47.x=274; n47.y=440.5;
      n47.characters='228.085.478-38';
      F.appendChild(n47);}
    {const n48=figma.createText();
      n48.fontName=FR;
      n48.fontSize=11.0;
      n48.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n48.x=757; n48.y=417;
      n48.characters='Email';
      F.appendChild(n48);}
    {const n49=figma.createText();
      n49.fontName=FR;
      n49.fontSize=13.0;
      n49.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n49.x=766; n49.y=440.5;
      n49.characters='bruna.otaniwada@gmail.com';
      F.appendChild(n49);}
    {const n50=figma.createFrame();
      n50.x=265.0; n50.y=499.0;
      n50.resize(Math.max(1,20),Math.max(1,20));
      n50.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n50.clipsContent=false;
      n50.cornerRadius=50.0;
      F.appendChild(n50);
      {const n51=figma.createText();
        n51.fontName=FB;
        n51.fontSize=9.0;
        n51.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n51.x=6.9; n51.y=4.5;
        n51.characters='3';
        n50.appendChild(n51);}
    }
    {const n52=figma.createText();
      n52.fontName=FB;
      n52.fontSize=13.0;
      n52.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n52.x=295; n52.y=501;
      n52.characters='Presenteado & Evento';
      F.appendChild(n52);}
    {const n53=figma.createText();
      n53.fontName=FR;
      n53.fontSize=11.0;
      n53.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n53.x=265; n53.y=544;
      n53.characters='Nome do Presenteado';
      F.appendChild(n53);}
    {const n54=figma.createText();
      n54.fontName=FR;
      n54.fontSize=13.0;
      n54.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n54.x=274; n54.y=567.5;
      n54.characters='Laura';
      F.appendChild(n54);}
    {const n55=figma.createText();
      n55.fontName=FR;
      n55.fontSize=11.0;
      n55.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n55.x=265; n55.y=600;
      n55.characters='Sexo';
      F.appendChild(n55);}
    {const n56=figma.createFrame();
      n56.x=265.0; n56.y=616.0;
      n56.resize(Math.max(1,96.4),Math.max(1,30));
      n56.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n56.clipsContent=false;
      n56.strokes=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n56.strokeWeight=1.0; n56.strokeAlign='INSIDE';
      n56.topLeftRadius=4.0;n56.topRightRadius=0.0;n56.bottomLeftRadius=4.0;n56.bottomRightRadius=0.0;
      F.appendChild(n56);
      {const n57=figma.createText();
        n57.fontName=FR;
        n57.fontSize=11.0;
        n57.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n57.x=24.5; n57.y=8.5;
        n57.characters='Feminino';
        n56.appendChild(n57);}
    }
    {const n58=figma.createText();
      n58.fontName=FR;
      n58.fontSize=11.0;
      n58.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n58.x=382.09999999999997; n58.y=624.5;
      n58.characters='Masculino';
      F.appendChild(n58);}
    {const n59=figma.createText();
      n59.fontName=FR;
      n59.fontSize=11.0;
      n59.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n59.x=482.7; n59.y=624.5;
      n59.characters='Gêmeas';
      F.appendChild(n59);}
    {const n60=figma.createText();
      n60.fontName=FR;
      n60.fontSize=11.0;
      n60.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n60.x=577.9000000000001; n60.y=624.5;
      n60.characters='Gêmeos';
      F.appendChild(n60);}
    {const n61=figma.createText();
      n61.fontName=FR;
      n61.fontSize=11.0;
      n61.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n61.x=670.2; n61.y=624.5;
      n61.characters='Não sabe';
      F.appendChild(n61);}
    {const n62=figma.createText();
      n62.fontName=FR;
      n62.fontSize=11.0;
      n62.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n62.x=757; n62.y=600;
      n62.characters='Tipo de Evento';
      F.appendChild(n62);}
    {const n63=figma.createText();
      n63.fontName=FR;
      n63.fontSize=13.0;
      n63.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n63.x=766; n63.y=623.5;
      n63.characters='Maternidade';
      F.appendChild(n63);}
    {const n64=figma.createText();
      n64.fontName=FR;
      n64.fontSize=11.0;
      n64.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n64.x=265; n64.y=656;
      n64.characters='Data do Evento';
      F.appendChild(n64);}
    {const n65=figma.createText();
      n65.fontName=FR;
      n65.fontSize=13.0;
      n65.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n65.x=274; n65.y=679.5;
      n65.characters='2026-01-28';
      F.appendChild(n65);}
    {const n66=figma.createFrame();
      n66.x=265.0; n66.y=738.0;
      n66.resize(Math.max(1,20),Math.max(1,20));
      n66.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n66.clipsContent=false;
      n66.cornerRadius=50.0;
      F.appendChild(n66);
      {const n67=figma.createText();
        n67.fontName=FB;
        n67.fontSize=9.0;
        n67.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n67.x=6.8; n67.y=4.5;
        n67.characters='4';
        n66.appendChild(n67);}
    }
    {const n68=figma.createText();
      n68.fontName=FB;
      n68.fontSize=13.0;
      n68.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n68.x=295; n68.y=740;
      n68.characters='Personalização';
      F.appendChild(n68);}
    {const n69=figma.createText();
      n69.fontName=FR;
      n69.fontSize=11.0;
      n69.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n69.x=1138; n69.y=741.5;
      n69.characters='Arte & embalagem';
      F.appendChild(n69);}
    {const n70=figma.createText();
      n70.fontName=FR;
      n70.fontSize=11.0;
      n70.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n70.x=265; n70.y=783;
      n70.characters='Nome da Etiqueta';
      F.appendChild(n70);}
    {const n71=figma.createText();
      n71.fontName=FR;
      n71.fontSize=13.0;
      n71.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n71.x=274; n71.y=806.5;
      n71.characters='Laura';
      F.appendChild(n71);}
    {const n72=figma.createText();
      n72.fontName=FR;
      n72.fontSize=11.0;
      n72.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n72.x=757; n72.y=783;
      n72.characters='Tema da Etiqueta';
      F.appendChild(n72);}
    {const n73=figma.createText();
      n73.fontName=FR;
      n73.fontSize=13.0;
      n73.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n73.x=766; n73.y=806.5;
      n73.characters='floral';
      F.appendChild(n73);}
    {const n74=figma.createText();
      n74.fontName=FR;
      n74.fontSize=11.0;
      n74.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n74.x=265; n74.y=839;
      n74.characters='Nome na Caixa';
      F.appendChild(n74);}
    {const n75=figma.createText();
      n75.fontName=FR;
      n75.fontSize=13.0;
      n75.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n75.x=274; n75.y=862.5;
      n75.characters='Laura';
      F.appendChild(n75);}
    {const n76=figma.createText();
      n76.fontName=FR;
      n76.fontSize=11.0;
      n76.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n76.x=757; n76.y=839;
      n76.characters='Arte / Tecido da Caixa';
      F.appendChild(n76);}
    {const n77=figma.createText();
      n77.fontName=FR;
      n77.fontSize=13.0;
      n77.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n77.x=766; n77.y=862.5;
      n77.characters='floral rosa';
      F.appendChild(n77);}
    {const n78=figma.createText();
      n78.fontName=FR;
      n78.fontSize=11.0;
      n78.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n78.x=265; n78.y=895;
      n78.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n78);}
    {const n79=figma.createText();
      n79.fontName=FR;
      n79.fontSize=13.0;
      n79.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n79.x=274; n79.y=918.5;
      n79.characters='0';
      F.appendChild(n79);}
    {const n80=figma.createFrame();
      n80.x=265.0; n80.y=977.0;
      n80.resize(Math.max(1,20),Math.max(1,20));
      n80.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n80.clipsContent=false;
      n80.cornerRadius=50.0;
      F.appendChild(n80);
      {const n81=figma.createText();
        n81.fontName=FB;
        n81.fontSize=9.0;
        n81.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n81.x=6.9; n81.y=4.5;
        n81.characters='5';
        n80.appendChild(n81);}
    }
    {const n82=figma.createText();
      n82.fontName=FB;
      n82.fontSize=13.0;
      n82.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n82.x=295; n82.y=979;
      n82.characters='Produtos';
      F.appendChild(n82);}
    {const n83=figma.createText();
      n83.fontName=FR;
      n83.fontSize=11.0;
      n83.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n83.x=1203.9; n83.y=980.5;
      n83.characters='1 item';
      F.appendChild(n83);}
    {const n84=figma.createText();
      n84.fontName=FB;
      n84.fontSize=10.0;
      n84.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n84.x=265; n84.y=1022;
      n84.characters='Produto';
      F.appendChild(n84);}
    {const n85=figma.createText();
      n85.fontName=FB;
      n85.fontSize=10.0;
      n85.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n85.x=937; n85.y=1022;
      n85.characters='Qtd';
      F.appendChild(n85);}
    {const n86=figma.createText();
      n86.fontName=FB;
      n86.fontSize=10.0;
      n86.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n86.x=1007; n86.y=1022;
      n86.characters='R$ Unit.';
      F.appendChild(n86);}
    {const n87=figma.createText();
      n87.fontName=FB;
      n87.fontSize=10.0;
      n87.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n87.x=1113; n87.y=1022;
      n87.characters='Total';
      F.appendChild(n87);}
    {const n88=figma.createText();
      n88.fontName=FR;
      n88.fontSize=13.0;
      n88.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n88.x=274; n88.y=1054.5;
      n88.characters='Cartão 7x10 com Mini Tabletinho chocolate ao leite';
      F.appendChild(n88);}
    {const n89=figma.createText();
      n89.fontName=FR;
      n89.fontSize=13.0;
      n89.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n89.x=946; n89.y=1054.5;
      n89.characters='40';
      F.appendChild(n89);}
    {const n90=figma.createText();
      n90.fontName=FR;
      n90.fontSize=13.0;
      n90.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n90.x=1016; n90.y=1054.5;
      n90.characters='6,90';
      F.appendChild(n90);}
    {const n91=figma.createText();
      n91.fontName=FR;
      n91.fontSize=12.0;
      n91.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n91.x=1123; n91.y=1056;
      n91.characters='R$ 276,00';
      F.appendChild(n91);}
    {const n92=figma.createText();
      n92.fontName=FR;
      n92.fontSize=12.0;
      n92.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n92.x=292; n92.y=1089.5;
      n92.characters='Adicionar produto';
      F.appendChild(n92);}
    {const n93=figma.createText();
      n93.fontName=FR;
      n93.fontSize=11.0;
      n93.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n93.x=265; n93.y=1110;
      n93.characters='Outros (descrição livre)';
      F.appendChild(n93);}
    {const n94=figma.createText();
      n94.fontName=FR;
      n94.fontSize=13.0;
      n94.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n94.x=274; n94.y=1133.5;
      n94.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n94);}
    {const n95=figma.createText();
      n95.fontName=FR;
      n95.fontSize=11.0;
      n95.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n95.x=1000.4; n95.y=1174;
      n95.characters='Subtotal dos produtos';
      F.appendChild(n95);}
    {const n96=figma.createText();
      n96.fontName=FB;
      n96.fontSize=13.0;
      n96.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n96.x=1170.7; n96.y=1174;
      n96.characters='R$ 276,00';
      F.appendChild(n96);}
    {const n97=figma.createFrame();
      n97.x=265.0; n97.y=1224.0;
      n97.resize(Math.max(1,20),Math.max(1,20));
      n97.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n97.clipsContent=false;
      n97.cornerRadius=50.0;
      F.appendChild(n97);
      {const n98=figma.createText();
        n98.fontName=FB;
        n98.fontSize=9.0;
        n98.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n98.x=6.8; n98.y=4.5;
        n98.characters='6';
        n97.appendChild(n98);}
    }
    {const n99=figma.createText();
      n99.fontName=FB;
      n99.fontSize=13.0;
      n99.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n99.x=295; n99.y=1226;
      n99.characters='Financeiro';
      F.appendChild(n99);}
    {const n100=figma.createText();
      n100.fontName=FR;
      n100.fontSize=11.0;
      n100.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n100.x=265; n100.y=1269;
      n100.characters='Desconto (R$)';
      F.appendChild(n100);}
    {const n101=figma.createText();
      n101.fontName=FR;
      n101.fontSize=13.0;
      n101.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n101.x=274; n101.y=1292.5;
      n101.characters='0';
      F.appendChild(n101);}
    {const n102=figma.createText();
      n102.fontName=FR;
      n102.fontSize=11.0;
      n102.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n102.x=757; n102.y=1269;
      n102.characters='Frete (R$)';
      F.appendChild(n102);}
    {const n103=figma.createText();
      n103.fontName=FR;
      n103.fontSize=13.0;
      n103.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n103.x=766; n103.y=1292.5;
      n103.characters='19,96';
      F.appendChild(n103);}
    {const n104=figma.createText();
      n104.fontName=FR;
      n104.fontSize=11.0;
      n104.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n104.x=265; n104.y=1325;
      n104.characters='Total do Pedido';
      F.appendChild(n104);}
    {const n105=figma.createText();
      n105.fontName=FB;
      n105.fontSize=20.0;
      n105.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n105.x=281; n105.y=1352.5;
      n105.characters='R$ 295,96';
      F.appendChild(n105);}
    {const n106=figma.createFrame();
      n106.x=265.0; n106.y=1421.0;
      n106.resize(Math.max(1,20),Math.max(1,20));
      n106.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n106.clipsContent=false;
      n106.cornerRadius=50.0;
      F.appendChild(n106);
      {const n107=figma.createText();
        n107.fontName=FB;
        n107.fontSize=9.0;
        n107.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n107.x=7.2; n107.y=4.5;
        n107.characters='7';
        n106.appendChild(n107);}
    }
    {const n108=figma.createText();
      n108.fontName=FB;
      n108.fontSize=13.0;
      n108.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n108.x=295; n108.y=1423;
      n108.characters='Pagamento';
      F.appendChild(n108);}
    {const n109=figma.createText();
      n109.fontName=FB;
      n109.fontSize=10.0;
      n109.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n109.x=265; n109.y=1466;
      n109.characters='Forma';
      F.appendChild(n109);}
    {const n110=figma.createText();
      n110.fontName=FB;
      n110.fontSize=10.0;
      n110.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n110.x=411; n110.y=1466;
      n110.characters='Data Pgto';
      F.appendChild(n110);}
    {const n111=figma.createText();
      n111.fontName=FB;
      n111.fontSize=10.0;
      n111.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n111.x=541; n111.y=1466;
      n111.characters='Valor (R$)';
      F.appendChild(n111);}
    {const n112=figma.createText();
      n112.fontName=FB;
      n112.fontSize=10.0;
      n112.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n112.x=657; n112.y=1466;
      n112.characters='Confirm.';
      F.appendChild(n112);}
    {const n113=figma.createText();
      n113.fontName=FR;
      n113.fontSize=12.0;
      n113.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n113.x=274; n113.y=1499;
      n113.characters='Créd 2x';
      F.appendChild(n113);}
    {const n114=figma.createText();
      n114.fontName=FR;
      n114.fontSize=13.0;
      n114.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n114.x=420; n114.y=1498.5;
      n114.characters='2025-12-13';
      F.appendChild(n114);}
    {const n115=figma.createText();
      n115.fontName=FR;
      n115.fontSize=13.0;
      n115.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n115.x=550; n115.y=1498.5;
      n115.characters='295,96';
      F.appendChild(n115);}
    {const n116=figma.createText();
      n116.fontName=FR;
      n116.fontSize=13.3;
      n116.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n116.x=699; n116.y=1498;
      n116.characters='on';
      F.appendChild(n116);}
    {const n117=figma.createText();
      n117.fontName=FR;
      n117.fontSize=12.0;
      n117.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n117.x=292; n117.y=1533.5;
      n117.characters='Adicionar parcela';
      F.appendChild(n117);}
    {const n118=figma.createText();
      n118.fontName=FR;
      n118.fontSize=12.0;
      n118.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n118.x=280; n118.y=1579;
      n118.characters='Total do pedido';
      F.appendChild(n118);}
    {const n119=figma.createText();
      n119.fontName=FR;
      n119.fontSize=12.0;
      n119.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n119.x=1160.6; n119.y=1580.5;
      n119.characters='R$ 295,96';
      F.appendChild(n119);}
    {const n120=figma.createText();
      n120.fontName=FR;
      n120.fontSize=12.0;
      n120.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n120.x=280; n120.y=1599;
      n120.characters='Total pago';
      F.appendChild(n120);}
    {const n121=figma.createText();
      n121.fontName=FR;
      n121.fontSize=12.0;
      n121.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n121.x=1160.6; n121.y=1600.5;
      n121.characters='R$ 295,96';
      F.appendChild(n121);}
    {const n122=figma.createText();
      n122.fontName=FB;
      n122.fontSize=12.0;
      n122.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n122.x=280; n122.y=1619.5;
      n122.characters='Falta pagar';
      F.appendChild(n122);}
    {const n123=figma.createText();
      n123.fontName=FB;
      n123.fontSize=12.0;
      n123.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n123.x=1165.8; n123.y=1621;
      n123.characters='R$ 0,00';
      F.appendChild(n123);}
    {const n124=figma.createText();
      n124.fontName=FR;
      n124.fontSize=13.3;
      n124.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n124.x=289; n124.y=1652.5;
      n124.characters='on';
      F.appendChild(n124);}
    {const n125=figma.createText();
      n125.fontName=FR;
      n125.fontSize=12.0;
      n125.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n125.x=300; n125.y=1652;
      n125.characters='Vai pagar na retirada';
      F.appendChild(n125);}
    {const n126=figma.createFrame();
      n126.x=265.0; n126.y=1716.0;
      n126.resize(Math.max(1,20),Math.max(1,20));
      n126.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n126.clipsContent=false;
      n126.cornerRadius=50.0;
      F.appendChild(n126);
      {const n127=figma.createText();
        n127.fontName=FB;
        n127.fontSize=9.0;
        n127.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n127.x=6.8; n127.y=4.5;
        n127.characters='8';
        n126.appendChild(n127);}
    }
    {const n128=figma.createText();
      n128.fontName=FB;
      n128.fontSize=13.0;
      n128.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n128.x=295; n128.y=1718;
      n128.characters='Entrega';
      F.appendChild(n128);}
    {const n129=figma.createText();
      n129.fontName=FR;
      n129.fontSize=11.0;
      n129.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n129.x=265; n129.y=1761;
      n129.characters='Data de Entrega';
      F.appendChild(n129);}
    {const n130=figma.createText();
      n130.fontName=FR;
      n130.fontSize=11.0;
      n130.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n130.x=352.7; n130.y=1761;
      n130.characters='*';
      F.appendChild(n130);}
    {const n131=figma.createText();
      n131.fontName=FR;
      n131.fontSize=13.0;
      n131.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n131.x=274; n131.y=1784.5;
      n131.characters='2025-12-22';
      F.appendChild(n131);}
    {const n132=figma.createText();
      n132.fontName=FR;
      n132.fontSize=11.0;
      n132.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n132.x=757; n132.y=1761;
      n132.characters='Modalidade';
      F.appendChild(n132);}
    {const n133=figma.createText();
      n133.fontName=FR;
      n133.fontSize=11.0;
      n133.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n133.x=820.4; n133.y=1761;
      n133.characters='*';
      F.appendChild(n133);}
    {const n134=figma.createText();
      n134.fontName=FR;
      n134.fontSize=13.0;
      n134.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n134.x=766; n134.y=1784.5;
      n134.characters='SEDEX PLP';
      F.appendChild(n134);}
    {const n135=figma.createText();
      n135.fontName=FB;
      n135.fontSize=10.0;
      n135.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n135.x=265; n135.y=1822.5;
      n135.characters='Destinatário';
      F.appendChild(n135);}
    {const n136=figma.createText();
      n136.fontName=FR;
      n136.fontSize=13.3;
      n136.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n136.x=1083.7; n136.y=1821.5;
      n136.characters='on';
      F.appendChild(n136);}
    {const n137=figma.createText();
      n137.fontName=FR;
      n137.fontSize=12.0;
      n137.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n137.x=1093.7; n137.y=1821;
      n137.characters='Mesmo que o comprador';
      F.appendChild(n137);}
    {const n138=figma.createText();
      n138.fontName=FR;
      n138.fontSize=11.0;
      n138.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n138.x=265; n138.y=1855;
      n138.characters='Nome do Destinatário';
      F.appendChild(n138);}
    {const n139=figma.createText();
      n139.fontName=FR;
      n139.fontSize=11.0;
      n139.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n139.x=383.5; n139.y=1855;
      n139.characters='*';
      F.appendChild(n139);}
    {const n140=figma.createText();
      n140.fontName=FR;
      n140.fontSize=13.0;
      n140.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n140.x=274; n140.y=1878.5;
      n140.characters='Bruna Otani Wada';
      F.appendChild(n140);}
    {const n141=figma.createText();
      n141.fontName=FR;
      n141.fontSize=11.0;
      n141.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n141.x=265; n141.y=1911;
      n141.characters='Telefone';
      F.appendChild(n141);}
    {const n142=figma.createText();
      n142.fontName=FR;
      n142.fontSize=13.0;
      n142.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n142.x=274; n142.y=1934.5;
      n142.characters='(11) 99988-7137';
      F.appendChild(n142);}
    {const n143=figma.createText();
      n143.fontName=FR;
      n143.fontSize=11.0;
      n143.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n143.x=757; n143.y=1911;
      n143.characters='CPF';
      F.appendChild(n143);}
    {const n144=figma.createText();
      n144.fontName=FR;
      n144.fontSize=13.0;
      n144.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n144.x=766; n144.y=1934.5;
      n144.characters='228.085.478-38';
      F.appendChild(n144);}
    {const n145=figma.createText();
      n145.fontName=FR;
      n145.fontSize=11.0;
      n145.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n145.x=265; n145.y=1967;
      n145.characters='Email';
      F.appendChild(n145);}
    {const n146=figma.createText();
      n146.fontName=FR;
      n146.fontSize=13.0;
      n146.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n146.x=274; n146.y=1990.5;
      n146.characters='bruna.otaniwada@gmail.com';
      F.appendChild(n146);}
    {const n147=figma.createText();
      n147.fontName=FB;
      n147.fontSize=10.0;
      n147.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n147.x=265; n147.y=2027;
      n147.characters='Endereço';
      F.appendChild(n147);}
    {const n148=figma.createText();
      n148.fontName=FR;
      n148.fontSize=11.0;
      n148.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n148.x=265; n148.y=2058;
      n148.characters='CEP';
      F.appendChild(n148);}
    {const n149=figma.createText();
      n149.fontName=FR;
      n149.fontSize=13.0;
      n149.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n149.x=274; n149.y=2081.5;
      n149.characters='06351-380';
      F.appendChild(n149);}
    {const n150=figma.createText();
      n150.fontName=FR;
      n150.fontSize=11.0;
      n150.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n150.x=265; n150.y=2114;
      n150.characters='Logradouro';
      F.appendChild(n150);}
    {const n151=figma.createText();
      n151.fontName=FR;
      n151.fontSize=13.0;
      n151.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n151.x=274; n151.y=2137.5;
      n151.characters='Alameda Safira';
      F.appendChild(n151);}
    {const n152=figma.createText();
      n152.fontName=FR;
      n152.fontSize=11.0;
      n152.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n152.x=593; n152.y=2114;
      n152.characters='Número';
      F.appendChild(n152);}
    {const n153=figma.createText();
      n153.fontName=FR;
      n153.fontSize=13.0;
      n153.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n153.x=602; n153.y=2137.5;
      n153.characters='74';
      F.appendChild(n153);}
    {const n154=figma.createText();
      n154.fontName=FR;
      n154.fontSize=11.0;
      n154.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n154.x=265; n154.y=2170;
      n154.characters='Complemento';
      F.appendChild(n154);}
    {const n155=figma.createText();
      n155.fontName=FR;
      n155.fontSize=13.0;
      n155.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n155.x=274; n155.y=2193.5;
      n155.characters='condomínio Golf Village';
      F.appendChild(n155);}
    {const n156=figma.createText();
      n156.fontName=FR;
      n156.fontSize=11.0;
      n156.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n156.x=511; n156.y=2170;
      n156.characters='Bairro';
      F.appendChild(n156);}
    {const n157=figma.createText();
      n157.fontName=FR;
      n157.fontSize=13.0;
      n157.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n157.x=520; n157.y=2193.5;
      n157.characters='Golf Park';
      F.appendChild(n157);}
    {const n158=figma.createText();
      n158.fontName=FR;
      n158.fontSize=11.0;
      n158.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n158.x=757; n158.y=2170;
      n158.characters='Cidade';
      F.appendChild(n158);}
    {const n159=figma.createText();
      n159.fontName=FR;
      n159.fontSize=13.0;
      n159.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n159.x=766; n159.y=2193.5;
      n159.characters='Carapicuíba';
      F.appendChild(n159);}
    {const n160=figma.createText();
      n160.fontName=FR;
      n160.fontSize=11.0;
      n160.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n160.x=265; n160.y=2226;
      n160.characters='UF';
      F.appendChild(n160);}
    {const n161=figma.createText();
      n161.fontName=FR;
      n161.fontSize=13.0;
      n161.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n161.x=274; n161.y=2249.5;
      n161.characters='SP';
      F.appendChild(n161);}
    {const n162=figma.createText();
      n162.fontName=FB;
      n162.fontSize=10.0;
      n162.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n162.x=265; n162.y=2286;
      n162.characters='Observações';
      F.appendChild(n162);}
    {const n163=figma.createText();
      n163.fontName=FR;
      n163.fontSize=11.0;
      n163.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n163.x=265; n163.y=2317;
      n163.characters='Obs. Fábrica';
      F.appendChild(n163);}
    {const n164=figma.createText();
      n164.fontName=FR;
      n164.fontSize=13.0;
      n164.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n164.x=274; n164.y=2354.5;
      n164.characters='MINI TABLETINHO NO CARD + SAQUINHO + FITILHO';
      F.appendChild(n164);}
    {const n165=figma.createText();
      n165.fontName=FR;
      n165.fontSize=11.0;
      n165.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n165.x=757; n165.y=2317;
      n165.characters='Info Motoboy';
      F.appendChild(n165);}
    {const n166=figma.createText();
      n166.fontName=FB;
      n166.fontSize=9.0;
      n166.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n166.x=271.8; n166.y=2431.5;
      n166.characters='9';
      F.appendChild(n166);}
    {const n167=figma.createText();
      n167.fontName=FR;
      n167.fontSize=12.0;
      n167.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n167.x=295; n167.y=2429.5;
      n167.characters='Controle Interno';
      F.appendChild(n167);}
    {const n168=figma.createText();
      n168.fontName=FR;
      n168.fontSize=11.0;
      n168.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n168.x=1088.2; n168.y=2430.5;
      n168.characters='Uso interno da operação';
      F.appendChild(n168);}
    {const n169=figma.createText();
      n169.fontName=FR;
      n169.fontSize=10.0;
      n169.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n169.x=1225.1; n169.y=2433.1;
      n169.characters='▼';
      F.appendChild(n169);}
    {const n170=figma.createText();
      n170.fontName=FR;
      n170.fontSize=10.0;
      n170.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n170.x=248; n170.y=1060;
      n170.characters='Pedido';
      F.appendChild(n170);}
    {const n171=figma.createText();
      n171.fontName=FB;
      n171.fontSize=13.0;
      n171.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n171.x=248; n171.y=1074;
      n171.characters='#25859';
      F.appendChild(n171);}
    {const n172=figma.createText();
      n172.fontName=FR;
      n172.fontSize=10.0;
      n172.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n172.x=327.9; n172.y=1060;
      n172.characters='Total';
      F.appendChild(n172);}
    {const n173=figma.createText();
      n173.fontName=FB;
      n173.fontSize=13.0;
      n173.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n173.x=327.9; n173.y=1074;
      n173.characters='R$ 295,96';
      F.appendChild(n173);}
    {const n174=figma.createText();
      n174.fontName=FR;
      n174.fontSize=10.0;
      n174.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n174.x=429.2; n174.y=1060;
      n174.characters='Falta pagar';
      F.appendChild(n174);}
    {const n175=figma.createText();
      n175.fontName=FB;
      n175.fontSize=13.0;
      n175.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n175.x=429.2; n175.y=1074;
      n175.characters='R$ 0,00';
      F.appendChild(n175);}
    {const n176=figma.createText();
      n176.fontName=FR;
      n176.fontSize=13.0;
      n176.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n176.x=1018.7; n176.y=1066;
      n176.characters='Limpar';
      F.appendChild(n176);}
    {const n177=figma.createFrame();
      n177.x=1083.2; n177.y=1057.0;
      n177.resize(Math.max(1,168.8),Math.max(1,34));
      n177.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n177.clipsContent=false;
      n177.cornerRadius=4.0;
      F.appendChild(n177);
      {const n178=figma.createText();
        n178.fontName=FB;
        n178.fontSize=13.0;
        n178.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n178.x=39; n178.y=9;
        n178.characters='Cadastrar Pedido';
        n177.appendChild(n178);}
    }
    {const n179=figma.createText();
      n179.fontName=FR;
      n179.fontSize=11.0;
      n179.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n179.x=30; n179.y=2547;
      n179.characters='Pedido #25859 · R$ 295,96 · SEDEX PLP · Carapicuíba';
      F.appendChild(n179);}
    {const n180=figma.createText();
      n180.fontName=FR;
      n180.fontSize=11.0;
      n180.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n180.x=1241.8; n180.y=2548;
      n180.characters='v4.2';
      F.appendChild(n180);}
  }
  await Promise.resolve();

  // ── A2: 7 produtos + desconto
  {const F=figma.createFrame();
    F.x=1360; F.y=0;
    F.resize(1280,2826);
    F.name='A2 — 7 produtos + desconto';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n181=figma.createFrame();
      n181.x=0.0; n181.y=0.0;
      n181.resize(Math.max(1,1280),Math.max(1,38));
      n181.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n181.clipsContent=false;
      F.appendChild(n181);
      {const n182=figma.createFrame();
        n182.x=14.0; n182.y=8.0;
        n182.resize(Math.max(1,22),Math.max(1,22));
        n182.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n182.clipsContent=false;
        n182.cornerRadius=5.0;
        n181.appendChild(n182);
        {const n183=figma.createText();
          n183.fontName=FB;
          n183.fontSize=10.0;
          n183.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n183.x=2.5; n183.y=5;
          n183.characters='MC';
          n182.appendChild(n183);}
      }
      {const n184=figma.createText();
        n184.fontName=FR;
        n184.fontSize=13.0;
        n184.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n184.x=44; n184.y=11;
        n184.characters='Maria Cacau — Gestão de Pedidos';
        n181.appendChild(n184);}
    }
    {const n185=figma.createFrame();
      n185.x=0.0; n185.y=38.0;
      n185.resize(Math.max(1,220),Math.max(1,2760));
      n185.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n185.clipsContent=false;
      F.appendChild(n185);
      {const n186=figma.createFrame();
        n186.x=14.0; n186.y=14.0;
        n186.resize(Math.max(1,38),Math.max(1,38));
        n186.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n186.clipsContent=false;
        n186.cornerRadius=8.0;
        n185.appendChild(n186);
        {const n187=figma.createText();
          n187.fontName=FB;
          n187.fontSize=14.0;
          n187.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n187.x=7.5; n187.y=10.5;
          n187.characters='MC';
          n186.appendChild(n187);}
      }
      {const n188=figma.createText();
        n188.fontName=FB;
        n188.fontSize=13.0;
        n188.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n188.x=62; n188.y=18.5;
        n188.characters='Maria Cacau';
        n185.appendChild(n188);}
      {const n189=figma.createText();
        n189.fontName=FR;
        n189.fontSize=10.0;
        n189.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n189.x=62; n189.y=35.5;
        n189.characters='Gestão de Pedidos';
        n185.appendChild(n189);}
      {const n190=figma.createText();
        n190.fontName=FB;
        n190.fontSize=10.0;
        n190.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n190.x=16; n190.y=85;
        n190.characters='Pedidos';
        n185.appendChild(n190);}
      {const n191=figma.createFrame();
        n191.x=8.0; n191.y=101.0;
        n191.resize(Math.max(1,204),Math.max(1,34));
        n191.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n191.clipsContent=false;
        n191.cornerRadius=8.0;
        n185.appendChild(n191);
        {const n192=figma.createText();
          n192.fontName=FB;
          n192.fontSize=13.0;
          n192.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n192.x=38; n192.y=9;
          n192.characters='Novo Pedido';
          n191.appendChild(n192);}
        {const n193=figma.createFrame();
          n193.x=160.4; n193.y=10.5;
          n193.resize(Math.max(1,33.6),Math.max(1,13));
          n193.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n193.clipsContent=false;
          n193.cornerRadius=8.0;
          n191.appendChild(n193);
          {const n194=figma.createText();
            n194.fontName=FB;
            n194.fontSize=9.0;
            n194.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n194.x=5; n194.y=1;
            n194.characters='Novo';
            n193.appendChild(n194);}
        }
      }
      {const n195=figma.createText();
        n195.fontName=FB;
        n195.fontSize=10.0;
        n195.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n195.x=16; n195.y=145;
        n195.characters='Consultas';
        n185.appendChild(n195);}
      {const n196=figma.createText();
        n196.fontName=FR;
        n196.fontSize=13.0;
        n196.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n196.x=46; n196.y=170;
        n196.characters='Produtos';
        n185.appendChild(n196);}
      {const n197=figma.createText();
        n197.fontName=FR;
        n197.fontSize=13.0;
        n197.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n197.x=46; n197.y=206;
        n197.characters='Entregas';
        n185.appendChild(n197);}
      {const n198=figma.createText();
        n198.fontName=FR;
        n198.fontSize=13.0;
        n198.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n198.x=46; n198.y=242;
        n198.characters='Verificar CPF';
        n185.appendChild(n198);}
      {const n199=figma.createText();
        n199.fontName=FB;
        n199.fontSize=10.0;
        n199.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n199.x=16; n199.y=277;
        n199.characters='Em breve';
        n185.appendChild(n199);}
      {const n200=figma.createText();
        n200.fontName=FR;
        n200.fontSize=13.0;
        n200.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n200.x=46; n200.y=302;
        n200.characters='Frete por CEP';
        n185.appendChild(n200);}
      {const n201=figma.createFrame();
        n201.x=169.2; n201.y=303.5;
        n201.resize(Math.max(1,32.8),Math.max(1,13));
        n201.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n201.clipsContent=false;
        n201.cornerRadius=8.0;
        n201.opacity=0.36;
        n185.appendChild(n201);
        {const n202=figma.createText();
          n202.fontName=FB;
          n202.fontSize=9.0;
          n202.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n202.x=5; n202.y=1;
          n202.characters='Logo';
          n201.appendChild(n202);}
      }
      {const n203=figma.createText();
        n203.fontName=FR;
        n203.fontSize=13.0;
        n203.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n203.x=46; n203.y=338;
        n203.characters='Nota Fiscal';
        n185.appendChild(n203);}
      {const n204=figma.createFrame();
        n204.x=169.2; n204.y=339.5;
        n204.resize(Math.max(1,32.8),Math.max(1,13));
        n204.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n204.clipsContent=false;
        n204.cornerRadius=8.0;
        n204.opacity=0.36;
        n185.appendChild(n204);
        {const n205=figma.createText();
          n205.fontName=FB;
          n205.fontSize=9.0;
          n205.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n205.x=5; n205.y=1;
          n205.characters='Logo';
          n204.appendChild(n205);}
      }
    }
    {const n206=figma.createText();
      n206.fontName=FB;
      n206.fontSize=20.0;
      n206.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n206.x=248; n206.y=62;
      n206.characters='Novo Pedido';
      F.appendChild(n206);}
    {const n207=figma.createText();
      n207.fontName=FR;
      n207.fontSize=13.0;
      n207.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n207.x=248; n207.y=88;
      n207.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n207);}
    {const n208=figma.createFrame();
      n208.x=265.0; n208.y=133.0;
      n208.resize(Math.max(1,20),Math.max(1,20));
      n208.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n208.clipsContent=false;
      n208.cornerRadius=50.0;
      F.appendChild(n208);
      {const n209=figma.createText();
        n209.fontName=FB;
        n209.fontSize=9.0;
        n209.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n209.x=7.6; n209.y=4.5;
        n209.characters='1';
        n208.appendChild(n209);}
    }
    {const n210=figma.createText();
      n210.fontName=FB;
      n210.fontSize=13.0;
      n210.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n210.x=295; n210.y=135;
      n210.characters='Identificação do Pedido';
      F.appendChild(n210);}
    {const n211=figma.createText();
      n211.fontName=FR;
      n211.fontSize=11.0;
      n211.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n211.x=265; n211.y=178;
      n211.characters='Nº Pedido';
      F.appendChild(n211);}
    {const n212=figma.createText();
      n212.fontName=FR;
      n212.fontSize=11.0;
      n212.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n212.x=319.2; n212.y=178;
      n212.characters='*';
      F.appendChild(n212);}
    {const n213=figma.createText();
      n213.fontName=FR;
      n213.fontSize=13.0;
      n213.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n213.x=274; n213.y=201.5;
      n213.characters='25622';
      F.appendChild(n213);}
    {const n214=figma.createText();
      n214.fontName=FR;
      n214.fontSize=11.0;
      n214.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n214.x=757; n214.y=178;
      n214.characters='Como Conheceu';
      F.appendChild(n214);}
    {const n215=figma.createText();
      n215.fontName=FR;
      n215.fontSize=13.0;
      n215.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n215.x=766; n215.y=201.5;
      n215.characters='Instagram';
      F.appendChild(n215);}
    {const n216=figma.createFrame();
      n216.x=265.0; n216.y=260.0;
      n216.resize(Math.max(1,20),Math.max(1,20));
      n216.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n216.clipsContent=false;
      n216.cornerRadius=50.0;
      F.appendChild(n216);
      {const n217=figma.createText();
        n217.fontName=FB;
        n217.fontSize=9.0;
        n217.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n217.x=7; n217.y=4.5;
        n217.characters='2';
        n216.appendChild(n217);}
    }
    {const n218=figma.createText();
      n218.fontName=FB;
      n218.fontSize=13.0;
      n218.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n218.x=295; n218.y=262;
      n218.characters='Comprador';
      F.appendChild(n218);}
    {const n219=figma.createText();
      n219.fontName=FR;
      n219.fontSize=11.0;
      n219.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n219.x=265; n219.y=305;
      n219.characters='Nome do Comprador';
      F.appendChild(n219);}
    {const n220=figma.createText();
      n220.fontName=FR;
      n220.fontSize=11.0;
      n220.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n220.x=378.2; n220.y=305;
      n220.characters='*';
      F.appendChild(n220);}
    {const n221=figma.createText();
      n221.fontName=FR;
      n221.fontSize=13.0;
      n221.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n221.x=274; n221.y=328.5;
      n221.characters='Claudete Luiza de Oliveira';
      F.appendChild(n221);}
    {const n222=figma.createText();
      n222.fontName=FR;
      n222.fontSize=11.0;
      n222.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n222.x=265; n222.y=361;
      n222.characters='Parentesco';
      F.appendChild(n222);}
    {const n223=figma.createText();
      n223.fontName=FR;
      n223.fontSize=13.0;
      n223.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n223.x=274; n223.y=384.5;
      n223.characters='Mãe';
      F.appendChild(n223);}
    {const n224=figma.createText();
      n224.fontName=FR;
      n224.fontSize=11.0;
      n224.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n224.x=757; n224.y=361;
      n224.characters='Telefone';
      F.appendChild(n224);}
    {const n225=figma.createText();
      n225.fontName=FR;
      n225.fontSize=11.0;
      n225.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n225.x=803.6; n225.y=361;
      n225.characters='*';
      F.appendChild(n225);}
    {const n226=figma.createText();
      n226.fontName=FR;
      n226.fontSize=13.0;
      n226.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n226.x=766; n226.y=384.5;
      n226.characters='(19) 98838-3973';
      F.appendChild(n226);}
    {const n227=figma.createText();
      n227.fontName=FR;
      n227.fontSize=11.0;
      n227.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n227.x=265; n227.y=417;
      n227.characters='CPF';
      F.appendChild(n227);}
    {const n228=figma.createText();
      n228.fontName=FR;
      n228.fontSize=13.0;
      n228.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n228.x=274; n228.y=440.5;
      n228.characters='225.426.898-81';
      F.appendChild(n228);}
    {const n229=figma.createText();
      n229.fontName=FR;
      n229.fontSize=11.0;
      n229.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n229.x=757; n229.y=417;
      n229.characters='Email';
      F.appendChild(n229);}
    {const n230=figma.createText();
      n230.fontName=FR;
      n230.fontSize=13.0;
      n230.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n230.x=766; n230.y=440.5;
      n230.characters='claudete17oliveira@gmail.com';
      F.appendChild(n230);}
    {const n231=figma.createFrame();
      n231.x=265.0; n231.y=499.0;
      n231.resize(Math.max(1,20),Math.max(1,20));
      n231.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n231.clipsContent=false;
      n231.cornerRadius=50.0;
      F.appendChild(n231);
      {const n232=figma.createText();
        n232.fontName=FB;
        n232.fontSize=9.0;
        n232.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n232.x=6.9; n232.y=4.5;
        n232.characters='3';
        n231.appendChild(n232);}
    }
    {const n233=figma.createText();
      n233.fontName=FB;
      n233.fontSize=13.0;
      n233.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n233.x=295; n233.y=501;
      n233.characters='Presenteado & Evento';
      F.appendChild(n233);}
    {const n234=figma.createText();
      n234.fontName=FR;
      n234.fontSize=11.0;
      n234.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n234.x=265; n234.y=544;
      n234.characters='Nome do Presenteado';
      F.appendChild(n234);}
    {const n235=figma.createText();
      n235.fontName=FR;
      n235.fontSize=13.0;
      n235.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n235.x=274; n235.y=567.5;
      n235.characters='Isabela';
      F.appendChild(n235);}
    {const n236=figma.createText();
      n236.fontName=FR;
      n236.fontSize=11.0;
      n236.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n236.x=265; n236.y=600;
      n236.characters='Sexo';
      F.appendChild(n236);}
    {const n237=figma.createFrame();
      n237.x=265.0; n237.y=616.0;
      n237.resize(Math.max(1,96.4),Math.max(1,30));
      n237.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n237.clipsContent=false;
      n237.strokes=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n237.strokeWeight=1.0; n237.strokeAlign='INSIDE';
      n237.topLeftRadius=4.0;n237.topRightRadius=0.0;n237.bottomLeftRadius=4.0;n237.bottomRightRadius=0.0;
      F.appendChild(n237);
      {const n238=figma.createText();
        n238.fontName=FR;
        n238.fontSize=11.0;
        n238.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n238.x=24.5; n238.y=8.5;
        n238.characters='Feminino';
        n237.appendChild(n238);}
    }
    {const n239=figma.createText();
      n239.fontName=FR;
      n239.fontSize=11.0;
      n239.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n239.x=382.09999999999997; n239.y=624.5;
      n239.characters='Masculino';
      F.appendChild(n239);}
    {const n240=figma.createText();
      n240.fontName=FR;
      n240.fontSize=11.0;
      n240.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n240.x=482.7; n240.y=624.5;
      n240.characters='Gêmeas';
      F.appendChild(n240);}
    {const n241=figma.createText();
      n241.fontName=FR;
      n241.fontSize=11.0;
      n241.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n241.x=577.9000000000001; n241.y=624.5;
      n241.characters='Gêmeos';
      F.appendChild(n241);}
    {const n242=figma.createText();
      n242.fontName=FR;
      n242.fontSize=11.0;
      n242.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n242.x=670.2; n242.y=624.5;
      n242.characters='Não sabe';
      F.appendChild(n242);}
    {const n243=figma.createText();
      n243.fontName=FR;
      n243.fontSize=11.0;
      n243.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n243.x=757; n243.y=600;
      n243.characters='Tipo de Evento';
      F.appendChild(n243);}
    {const n244=figma.createText();
      n244.fontName=FR;
      n244.fontSize=13.0;
      n244.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n244.x=766; n244.y=623.5;
      n244.characters='Aniversário';
      F.appendChild(n244);}
    {const n245=figma.createText();
      n245.fontName=FR;
      n245.fontSize=11.0;
      n245.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n245.x=265; n245.y=656;
      n245.characters='Data do Evento';
      F.appendChild(n245);}
    {const n246=figma.createText();
      n246.fontName=FR;
      n246.fontSize=13.0;
      n246.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n246.x=274; n246.y=679.5;
      n246.characters='2026-01-26';
      F.appendChild(n246);}
    {const n247=figma.createFrame();
      n247.x=265.0; n247.y=738.0;
      n247.resize(Math.max(1,20),Math.max(1,20));
      n247.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n247.clipsContent=false;
      n247.cornerRadius=50.0;
      F.appendChild(n247);
      {const n248=figma.createText();
        n248.fontName=FB;
        n248.fontSize=9.0;
        n248.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n248.x=6.8; n248.y=4.5;
        n248.characters='4';
        n247.appendChild(n248);}
    }
    {const n249=figma.createText();
      n249.fontName=FB;
      n249.fontSize=13.0;
      n249.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n249.x=295; n249.y=740;
      n249.characters='Personalização';
      F.appendChild(n249);}
    {const n250=figma.createText();
      n250.fontName=FR;
      n250.fontSize=11.0;
      n250.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n250.x=1138; n250.y=741.5;
      n250.characters='Arte & embalagem';
      F.appendChild(n250);}
    {const n251=figma.createText();
      n251.fontName=FR;
      n251.fontSize=11.0;
      n251.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n251.x=265; n251.y=783;
      n251.characters='Nome da Etiqueta';
      F.appendChild(n251);}
    {const n252=figma.createText();
      n252.fontName=FR;
      n252.fontSize=11.0;
      n252.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n252.x=757; n252.y=783;
      n252.characters='Tema da Etiqueta';
      F.appendChild(n252);}
    {const n253=figma.createText();
      n253.fontName=FR;
      n253.fontSize=11.0;
      n253.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n253.x=265; n253.y=839;
      n253.characters='Nome na Caixa';
      F.appendChild(n253);}
    {const n254=figma.createText();
      n254.fontName=FR;
      n254.fontSize=11.0;
      n254.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n254.x=757; n254.y=839;
      n254.characters='Arte / Tecido da Caixa';
      F.appendChild(n254);}
    {const n255=figma.createText();
      n255.fontName=FR;
      n255.fontSize=11.0;
      n255.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n255.x=265; n255.y=895;
      n255.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n255);}
    {const n256=figma.createText();
      n256.fontName=FR;
      n256.fontSize=13.0;
      n256.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n256.x=274; n256.y=918.5;
      n256.characters='0';
      F.appendChild(n256);}
    {const n257=figma.createFrame();
      n257.x=265.0; n257.y=977.0;
      n257.resize(Math.max(1,20),Math.max(1,20));
      n257.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n257.clipsContent=false;
      n257.cornerRadius=50.0;
      F.appendChild(n257);
      {const n258=figma.createText();
        n258.fontName=FB;
        n258.fontSize=9.0;
        n258.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n258.x=6.9; n258.y=4.5;
        n258.characters='5';
        n257.appendChild(n258);}
    }
    {const n259=figma.createText();
      n259.fontName=FB;
      n259.fontSize=13.0;
      n259.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n259.x=295; n259.y=979;
      n259.characters='Produtos';
      F.appendChild(n259);}
    {const n260=figma.createText();
      n260.fontName=FR;
      n260.fontSize=11.0;
      n260.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n260.x=1200.1; n260.y=980.5;
      n260.characters='7 itens';
      F.appendChild(n260);}
    {const n261=figma.createText();
      n261.fontName=FB;
      n261.fontSize=10.0;
      n261.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n261.x=265; n261.y=1022;
      n261.characters='Produto';
      F.appendChild(n261);}
    {const n262=figma.createText();
      n262.fontName=FB;
      n262.fontSize=10.0;
      n262.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n262.x=937; n262.y=1022;
      n262.characters='Qtd';
      F.appendChild(n262);}
    {const n263=figma.createText();
      n263.fontName=FB;
      n263.fontSize=10.0;
      n263.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n263.x=1007; n263.y=1022;
      n263.characters='R$ Unit.';
      F.appendChild(n263);}
    {const n264=figma.createText();
      n264.fontName=FB;
      n264.fontSize=10.0;
      n264.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n264.x=1113; n264.y=1022;
      n264.characters='Total';
      F.appendChild(n264);}
    {const n265=figma.createText();
      n265.fontName=FR;
      n265.fontSize=13.0;
      n265.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n265.x=274; n265.y=1054.5;
      n265.characters='LIVRO PARA COLORIR';
      F.appendChild(n265);}
    {const n266=figma.createText();
      n266.fontName=FR;
      n266.fontSize=13.0;
      n266.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n266.x=946; n266.y=1054.5;
      n266.characters='13';
      F.appendChild(n266);}
    {const n267=figma.createText();
      n267.fontName=FR;
      n267.fontSize=13.0;
      n267.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n267.x=1016; n267.y=1054.5;
      n267.characters='28,88';
      F.appendChild(n267);}
    {const n268=figma.createText();
      n268.fontName=FR;
      n268.fontSize=12.0;
      n268.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n268.x=1123; n268.y=1056;
      n268.characters='R$ 375,44';
      F.appendChild(n268);}
    {const n269=figma.createText();
      n269.fontName=FR;
      n269.fontSize=13.0;
      n269.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n269.x=274; n269.y=1091.5;
      n269.characters='GIZ DE CERA CAIXINHA PERS.';
      F.appendChild(n269);}
    {const n270=figma.createText();
      n270.fontName=FR;
      n270.fontSize=13.0;
      n270.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n270.x=946; n270.y=1091.5;
      n270.characters='10';
      F.appendChild(n270);}
    {const n271=figma.createText();
      n271.fontName=FR;
      n271.fontSize=12.0;
      n271.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n271.x=1123; n271.y=1093;
      n271.characters='R$ 0,00';
      F.appendChild(n271);}
    {const n272=figma.createText();
      n272.fontName=FR;
      n272.fontSize=15.0;
      n272.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n272.x=1217.4; n272.y=1090;
      n272.characters='×';
      F.appendChild(n272);}
    {const n273=figma.createText();
      n273.fontName=FR;
      n273.fontSize=13.0;
      n273.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n273.x=274; n273.y=1128.5;
      n273.characters='MASSINHA';
      F.appendChild(n273);}
    {const n274=figma.createText();
      n274.fontName=FR;
      n274.fontSize=13.0;
      n274.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n274.x=946; n274.y=1128.5;
      n274.characters='13';
      F.appendChild(n274);}
    {const n275=figma.createText();
      n275.fontName=FR;
      n275.fontSize=12.0;
      n275.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n275.x=1123; n275.y=1130;
      n275.characters='R$ 0,00';
      F.appendChild(n275);}
    {const n276=figma.createText();
      n276.fontName=FR;
      n276.fontSize=15.0;
      n276.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n276.x=1217.4; n276.y=1127;
      n276.characters='×';
      F.appendChild(n276);}
    {const n277=figma.createText();
      n277.fontName=FR;
      n277.fontSize=13.0;
      n277.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n277.x=274; n277.y=1165.5;
      n277.characters='(2) MOLDE SORTIDO MASSINHA';
      F.appendChild(n277);}
    {const n278=figma.createText();
      n278.fontName=FR;
      n278.fontSize=13.0;
      n278.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n278.x=946; n278.y=1165.5;
      n278.characters='13';
      F.appendChild(n278);}
    {const n279=figma.createText();
      n279.fontName=FR;
      n279.fontSize=12.0;
      n279.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n279.x=1123; n279.y=1167;
      n279.characters='R$ 0,00';
      F.appendChild(n279);}
    {const n280=figma.createText();
      n280.fontName=FR;
      n280.fontSize=15.0;
      n280.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n280.x=1217.4; n280.y=1164;
      n280.characters='×';
      F.appendChild(n280);}
    {const n281=figma.createText();
      n281.fontName=FR;
      n281.fontSize=13.0;
      n281.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n281.x=274; n281.y=1202.5;
      n281.characters='(2) Bolinha pula-pula';
      F.appendChild(n281);}
    {const n282=figma.createText();
      n282.fontName=FR;
      n282.fontSize=13.0;
      n282.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n282.x=946; n282.y=1202.5;
      n282.characters='13';
      F.appendChild(n282);}
    {const n283=figma.createText();
      n283.fontName=FR;
      n283.fontSize=12.0;
      n283.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n283.x=1123; n283.y=1204;
      n283.characters='R$ 0,00';
      F.appendChild(n283);}
    {const n284=figma.createText();
      n284.fontName=FR;
      n284.fontSize=15.0;
      n284.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n284.x=1217.4; n284.y=1201;
      n284.characters='×';
      F.appendChild(n284);}
    {const n285=figma.createText();
      n285.fontName=FR;
      n285.fontSize=13.0;
      n285.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n285.x=274; n285.y=1239.5;
      n285.characters='JOGO MEMÓRIA 12 PARES + ORGANZA';
      F.appendChild(n285);}
    {const n286=figma.createText();
      n286.fontName=FR;
      n286.fontSize=13.0;
      n286.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n286.x=946; n286.y=1239.5;
      n286.characters='13';
      F.appendChild(n286);}
    {const n287=figma.createText();
      n287.fontName=FR;
      n287.fontSize=12.0;
      n287.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n287.x=1123; n287.y=1241;
      n287.characters='R$ 0,00';
      F.appendChild(n287);}
    {const n288=figma.createText();
      n288.fontName=FR;
      n288.fontSize=15.0;
      n288.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n288.x=1217.4; n288.y=1238;
      n288.characters='×';
      F.appendChild(n288);}
    {const n289=figma.createText();
      n289.fontName=FR;
      n289.fontSize=13.0;
      n289.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n289.x=274; n289.y=1276.5;
      n289.characters='ORGANZA 15x23 (KIT)';
      F.appendChild(n289);}
    {const n290=figma.createText();
      n290.fontName=FR;
      n290.fontSize=13.0;
      n290.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n290.x=946; n290.y=1276.5;
      n290.characters='13';
      F.appendChild(n290);}
    {const n291=figma.createText();
      n291.fontName=FR;
      n291.fontSize=12.0;
      n291.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n291.x=1123; n291.y=1278;
      n291.characters='R$ 0,00';
      F.appendChild(n291);}
    {const n292=figma.createText();
      n292.fontName=FR;
      n292.fontSize=15.0;
      n292.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n292.x=1217.4; n292.y=1275;
      n292.characters='×';
      F.appendChild(n292);}
    {const n293=figma.createText();
      n293.fontName=FR;
      n293.fontSize=12.0;
      n293.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n293.x=292; n293.y=1311.5;
      n293.characters='Adicionar produto';
      F.appendChild(n293);}
    {const n294=figma.createText();
      n294.fontName=FR;
      n294.fontSize=11.0;
      n294.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n294.x=265; n294.y=1332;
      n294.characters='Outros (descrição livre)';
      F.appendChild(n294);}
    {const n295=figma.createText();
      n295.fontName=FR;
      n295.fontSize=13.0;
      n295.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n295.x=274; n295.y=1355.5;
      n295.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n295);}
    {const n296=figma.createText();
      n296.fontName=FR;
      n296.fontSize=11.0;
      n296.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n296.x=1000.4; n296.y=1396;
      n296.characters='Subtotal dos produtos';
      F.appendChild(n296);}
    {const n297=figma.createText();
      n297.fontName=FB;
      n297.fontSize=13.0;
      n297.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n297.x=1170.7; n297.y=1396;
      n297.characters='R$ 375,44';
      F.appendChild(n297);}
    {const n298=figma.createFrame();
      n298.x=265.0; n298.y=1446.0;
      n298.resize(Math.max(1,20),Math.max(1,20));
      n298.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n298.clipsContent=false;
      n298.cornerRadius=50.0;
      F.appendChild(n298);
      {const n299=figma.createText();
        n299.fontName=FB;
        n299.fontSize=9.0;
        n299.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n299.x=6.8; n299.y=4.5;
        n299.characters='6';
        n298.appendChild(n299);}
    }
    {const n300=figma.createText();
      n300.fontName=FB;
      n300.fontSize=13.0;
      n300.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n300.x=295; n300.y=1448;
      n300.characters='Financeiro';
      F.appendChild(n300);}
    {const n301=figma.createText();
      n301.fontName=FR;
      n301.fontSize=11.0;
      n301.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n301.x=265; n301.y=1491;
      n301.characters='Desconto (R$)';
      F.appendChild(n301);}
    {const n302=figma.createText();
      n302.fontName=FR;
      n302.fontSize=13.0;
      n302.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n302.x=274; n302.y=1514.5;
      n302.characters='27.96';
      F.appendChild(n302);}
    {const n303=figma.createText();
      n303.fontName=FR;
      n303.fontSize=11.0;
      n303.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n303.x=757; n303.y=1491;
      n303.characters='Frete (R$)';
      F.appendChild(n303);}
    {const n304=figma.createText();
      n304.fontName=FR;
      n304.fontSize=13.0;
      n304.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n304.x=766; n304.y=1514.5;
      n304.characters='21,80';
      F.appendChild(n304);}
    {const n305=figma.createText();
      n305.fontName=FR;
      n305.fontSize=11.0;
      n305.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n305.x=265; n305.y=1547;
      n305.characters='Total do Pedido';
      F.appendChild(n305);}
    {const n306=figma.createText();
      n306.fontName=FB;
      n306.fontSize=20.0;
      n306.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n306.x=281; n306.y=1574.5;
      n306.characters='R$ 369,28';
      F.appendChild(n306);}
    {const n307=figma.createFrame();
      n307.x=265.0; n307.y=1643.0;
      n307.resize(Math.max(1,20),Math.max(1,20));
      n307.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n307.clipsContent=false;
      n307.cornerRadius=50.0;
      F.appendChild(n307);
      {const n308=figma.createText();
        n308.fontName=FB;
        n308.fontSize=9.0;
        n308.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n308.x=7.2; n308.y=4.5;
        n308.characters='7';
        n307.appendChild(n308);}
    }
    {const n309=figma.createText();
      n309.fontName=FB;
      n309.fontSize=13.0;
      n309.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n309.x=295; n309.y=1645;
      n309.characters='Pagamento';
      F.appendChild(n309);}
    {const n310=figma.createText();
      n310.fontName=FB;
      n310.fontSize=10.0;
      n310.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n310.x=265; n310.y=1688;
      n310.characters='Forma';
      F.appendChild(n310);}
    {const n311=figma.createText();
      n311.fontName=FB;
      n311.fontSize=10.0;
      n311.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n311.x=411; n311.y=1688;
      n311.characters='Data Pgto';
      F.appendChild(n311);}
    {const n312=figma.createText();
      n312.fontName=FB;
      n312.fontSize=10.0;
      n312.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n312.x=541; n312.y=1688;
      n312.characters='Valor (R$)';
      F.appendChild(n312);}
    {const n313=figma.createText();
      n313.fontName=FB;
      n313.fontSize=10.0;
      n313.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n313.x=657; n313.y=1688;
      n313.characters='Confirm.';
      F.appendChild(n313);}
    {const n314=figma.createText();
      n314.fontName=FR;
      n314.fontSize=12.0;
      n314.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n314.x=274; n314.y=1721;
      n314.characters='Créd 6x';
      F.appendChild(n314);}
    {const n315=figma.createText();
      n315.fontName=FR;
      n315.fontSize=13.0;
      n315.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n315.x=420; n315.y=1720.5;
      n315.characters='2025-10-09';
      F.appendChild(n315);}
    {const n316=figma.createText();
      n316.fontName=FR;
      n316.fontSize=13.0;
      n316.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n316.x=550; n316.y=1720.5;
      n316.characters='338,56';
      F.appendChild(n316);}
    {const n317=figma.createText();
      n317.fontName=FR;
      n317.fontSize=13.3;
      n317.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n317.x=699; n317.y=1720;
      n317.characters='on';
      F.appendChild(n317);}
    {const n318=figma.createText();
      n318.fontName=FR;
      n318.fontSize=12.0;
      n318.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n318.x=274; n318.y=1758;
      n318.characters='Vindi';
      F.appendChild(n318);}
    {const n319=figma.createText();
      n319.fontName=FR;
      n319.fontSize=13.0;
      n319.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n319.x=420; n319.y=1757.5;
      n319.characters='2026-01-12';
      F.appendChild(n319);}
    {const n320=figma.createText();
      n320.fontName=FR;
      n320.fontSize=13.0;
      n320.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n320.x=550; n320.y=1757.5;
      n320.characters='86,64';
      F.appendChild(n320);}
    {const n321=figma.createText();
      n321.fontName=FR;
      n321.fontSize=13.3;
      n321.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n321.x=699; n321.y=1757;
      n321.characters='on';
      F.appendChild(n321);}
    {const n322=figma.createText();
      n322.fontName=FR;
      n322.fontSize=15.0;
      n322.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n322.x=751.4; n322.y=1756;
      n322.characters='×';
      F.appendChild(n322);}
    {const n323=figma.createText();
      n323.fontName=FR;
      n323.fontSize=12.0;
      n323.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n323.x=292; n323.y=1792.5;
      n323.characters='Adicionar parcela';
      F.appendChild(n323);}
    {const n324=figma.createText();
      n324.fontName=FR;
      n324.fontSize=12.0;
      n324.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n324.x=280; n324.y=1838;
      n324.characters='Total do pedido';
      F.appendChild(n324);}
    {const n325=figma.createText();
      n325.fontName=FR;
      n325.fontSize=12.0;
      n325.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n325.x=1160.6; n325.y=1839.5;
      n325.characters='R$ 369,28';
      F.appendChild(n325);}
    {const n326=figma.createText();
      n326.fontName=FR;
      n326.fontSize=12.0;
      n326.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n326.x=280; n326.y=1858;
      n326.characters='Total pago';
      F.appendChild(n326);}
    {const n327=figma.createText();
      n327.fontName=FR;
      n327.fontSize=12.0;
      n327.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n327.x=1160.6; n327.y=1859.5;
      n327.characters='R$ 425,20';
      F.appendChild(n327);}
    {const n328=figma.createText();
      n328.fontName=FB;
      n328.fontSize=12.0;
      n328.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n328.x=280; n328.y=1878.5;
      n328.characters='Falta pagar';
      F.appendChild(n328);}
    {const n329=figma.createText();
      n329.fontName=FB;
      n329.fontSize=12.0;
      n329.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n329.x=1165.8; n329.y=1880;
      n329.characters='R$ 0,00';
      F.appendChild(n329);}
    {const n330=figma.createText();
      n330.fontName=FR;
      n330.fontSize=13.3;
      n330.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n330.x=289; n330.y=1911.5;
      n330.characters='on';
      F.appendChild(n330);}
    {const n331=figma.createText();
      n331.fontName=FR;
      n331.fontSize=12.0;
      n331.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n331.x=300; n331.y=1911;
      n331.characters='Vai pagar na retirada';
      F.appendChild(n331);}
    {const n332=figma.createFrame();
      n332.x=265.0; n332.y=1975.0;
      n332.resize(Math.max(1,20),Math.max(1,20));
      n332.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n332.clipsContent=false;
      n332.cornerRadius=50.0;
      F.appendChild(n332);
      {const n333=figma.createText();
        n333.fontName=FB;
        n333.fontSize=9.0;
        n333.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n333.x=6.8; n333.y=4.5;
        n333.characters='8';
        n332.appendChild(n333);}
    }
    {const n334=figma.createText();
      n334.fontName=FB;
      n334.fontSize=13.0;
      n334.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n334.x=295; n334.y=1977;
      n334.characters='Entrega';
      F.appendChild(n334);}
    {const n335=figma.createText();
      n335.fontName=FR;
      n335.fontSize=11.0;
      n335.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n335.x=265; n335.y=2020;
      n335.characters='Data de Entrega';
      F.appendChild(n335);}
    {const n336=figma.createText();
      n336.fontName=FR;
      n336.fontSize=11.0;
      n336.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n336.x=352.7; n336.y=2020;
      n336.characters='*';
      F.appendChild(n336);}
    {const n337=figma.createText();
      n337.fontName=FR;
      n337.fontSize=11.0;
      n337.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n337.x=757; n337.y=2020;
      n337.characters='Modalidade';
      F.appendChild(n337);}
    {const n338=figma.createText();
      n338.fontName=FR;
      n338.fontSize=11.0;
      n338.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n338.x=820.4; n338.y=2020;
      n338.characters='*';
      F.appendChild(n338);}
    {const n339=figma.createText();
      n339.fontName=FR;
      n339.fontSize=13.0;
      n339.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n339.x=766; n339.y=2043.5;
      n339.characters='JADLOG COM';
      F.appendChild(n339);}
    {const n340=figma.createText();
      n340.fontName=FB;
      n340.fontSize=10.0;
      n340.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n340.x=265; n340.y=2081.5;
      n340.characters='Destinatário';
      F.appendChild(n340);}
    {const n341=figma.createText();
      n341.fontName=FR;
      n341.fontSize=13.3;
      n341.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n341.x=1083.7; n341.y=2080.5;
      n341.characters='on';
      F.appendChild(n341);}
    {const n342=figma.createText();
      n342.fontName=FR;
      n342.fontSize=12.0;
      n342.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n342.x=1093.7; n342.y=2080;
      n342.characters='Mesmo que o comprador';
      F.appendChild(n342);}
    {const n343=figma.createText();
      n343.fontName=FR;
      n343.fontSize=11.0;
      n343.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n343.x=265; n343.y=2114;
      n343.characters='Nome do Destinatário';
      F.appendChild(n343);}
    {const n344=figma.createText();
      n344.fontName=FR;
      n344.fontSize=11.0;
      n344.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n344.x=383.5; n344.y=2114;
      n344.characters='*';
      F.appendChild(n344);}
    {const n345=figma.createText();
      n345.fontName=FR;
      n345.fontSize=13.0;
      n345.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n345.x=274; n345.y=2137.5;
      n345.characters='Claudete Luiza de Oliveira';
      F.appendChild(n345);}
    {const n346=figma.createText();
      n346.fontName=FR;
      n346.fontSize=11.0;
      n346.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n346.x=265; n346.y=2170;
      n346.characters='Telefone';
      F.appendChild(n346);}
    {const n347=figma.createText();
      n347.fontName=FR;
      n347.fontSize=13.0;
      n347.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n347.x=274; n347.y=2193.5;
      n347.characters='(19) 98838-3973';
      F.appendChild(n347);}
    {const n348=figma.createText();
      n348.fontName=FR;
      n348.fontSize=11.0;
      n348.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n348.x=757; n348.y=2170;
      n348.characters='CPF';
      F.appendChild(n348);}
    {const n349=figma.createText();
      n349.fontName=FR;
      n349.fontSize=13.0;
      n349.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n349.x=766; n349.y=2193.5;
      n349.characters='225.426.898-81';
      F.appendChild(n349);}
    {const n350=figma.createText();
      n350.fontName=FR;
      n350.fontSize=11.0;
      n350.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n350.x=265; n350.y=2226;
      n350.characters='Email';
      F.appendChild(n350);}
    {const n351=figma.createText();
      n351.fontName=FR;
      n351.fontSize=13.0;
      n351.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n351.x=274; n351.y=2249.5;
      n351.characters='claudete17oliveira@gmail.com';
      F.appendChild(n351);}
    {const n352=figma.createText();
      n352.fontName=FB;
      n352.fontSize=10.0;
      n352.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n352.x=265; n352.y=2286;
      n352.characters='Endereço';
      F.appendChild(n352);}
    {const n353=figma.createText();
      n353.fontName=FR;
      n353.fontSize=11.0;
      n353.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n353.x=265; n353.y=2317;
      n353.characters='CEP';
      F.appendChild(n353);}
    {const n354=figma.createText();
      n354.fontName=FR;
      n354.fontSize=13.0;
      n354.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n354.x=274; n354.y=2340.5;
      n354.characters='13058-208';
      F.appendChild(n354);}
    {const n355=figma.createText();
      n355.fontName=FR;
      n355.fontSize=11.0;
      n355.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n355.x=265; n355.y=2373;
      n355.characters='Logradouro';
      F.appendChild(n355);}
    {const n356=figma.createText();
      n356.fontName=FR;
      n356.fontSize=13.0;
      n356.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n356.x=274; n356.y=2396.5;
      n356.characters='R. Prof. Romeu Ceravolo';
      F.appendChild(n356);}
    {const n357=figma.createText();
      n357.fontName=FR;
      n357.fontSize=11.0;
      n357.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n357.x=593; n357.y=2373;
      n357.characters='Número';
      F.appendChild(n357);}
    {const n358=figma.createText();
      n358.fontName=FR;
      n358.fontSize=13.0;
      n358.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n358.x=602; n358.y=2396.5;
      n358.characters='425';
      F.appendChild(n358);}
    {const n359=figma.createText();
      n359.fontName=FR;
      n359.fontSize=11.0;
      n359.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n359.x=265; n359.y=2429;
      n359.characters='Complemento';
      F.appendChild(n359);}
    {const n360=figma.createText();
      n360.fontName=FR;
      n360.fontSize=13.0;
      n360.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n360.x=274; n360.y=2452.5;
      n360.characters='Casa';
      F.appendChild(n360);}
    {const n361=figma.createText();
      n361.fontName=FR;
      n361.fontSize=11.0;
      n361.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n361.x=511; n361.y=2429;
      n361.characters='Bairro';
      F.appendChild(n361);}
    {const n362=figma.createText();
      n362.fontName=FR;
      n362.fontSize=13.0;
      n362.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n362.x=520; n362.y=2452.5;
      n362.characters='Conj. Res. Parque São Bento';
      F.appendChild(n362);}
    {const n363=figma.createText();
      n363.fontName=FR;
      n363.fontSize=11.0;
      n363.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n363.x=757; n363.y=2429;
      n363.characters='Cidade';
      F.appendChild(n363);}
    {const n364=figma.createText();
      n364.fontName=FR;
      n364.fontSize=13.0;
      n364.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n364.x=766; n364.y=2452.5;
      n364.characters='Campinas';
      F.appendChild(n364);}
    {const n365=figma.createText();
      n365.fontName=FR;
      n365.fontSize=11.0;
      n365.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n365.x=265; n365.y=2485;
      n365.characters='UF';
      F.appendChild(n365);}
    {const n366=figma.createText();
      n366.fontName=FR;
      n366.fontSize=13.0;
      n366.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n366.x=274; n366.y=2508.5;
      n366.characters='SP';
      F.appendChild(n366);}
    {const n367=figma.createText();
      n367.fontName=FB;
      n367.fontSize=10.0;
      n367.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n367.x=265; n367.y=2545;
      n367.characters='Observações';
      F.appendChild(n367);}
    {const n368=figma.createText();
      n368.fontName=FR;
      n368.fontSize=11.0;
      n368.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n368.x=265; n368.y=2576;
      n368.characters='Obs. Fábrica';
      F.appendChild(n368);}
    {const n369=figma.createText();
      n369.fontName=FR;
      n369.fontSize=11.0;
      n369.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n369.x=757; n369.y=2576;
      n369.characters='Info Motoboy';
      F.appendChild(n369);}
    {const n370=figma.createText();
      n370.fontName=FB;
      n370.fontSize=9.0;
      n370.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n370.x=271.8; n370.y=2690.5;
      n370.characters='9';
      F.appendChild(n370);}
    {const n371=figma.createText();
      n371.fontName=FR;
      n371.fontSize=12.0;
      n371.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n371.x=295; n371.y=2688.5;
      n371.characters='Controle Interno';
      F.appendChild(n371);}
    {const n372=figma.createText();
      n372.fontName=FR;
      n372.fontSize=11.0;
      n372.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n372.x=1088.2; n372.y=2689.5;
      n372.characters='Uso interno da operação';
      F.appendChild(n372);}
    {const n373=figma.createText();
      n373.fontName=FR;
      n373.fontSize=10.0;
      n373.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n373.x=1225.1; n373.y=2692.1;
      n373.characters='▼';
      F.appendChild(n373);}
    {const n374=figma.createText();
      n374.fontName=FR;
      n374.fontSize=10.0;
      n374.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n374.x=248; n374.y=1060;
      n374.characters='Pedido';
      F.appendChild(n374);}
    {const n375=figma.createText();
      n375.fontName=FB;
      n375.fontSize=13.0;
      n375.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n375.x=248; n375.y=1074;
      n375.characters='#25622';
      F.appendChild(n375);}
    {const n376=figma.createText();
      n376.fontName=FR;
      n376.fontSize=10.0;
      n376.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n376.x=327.9; n376.y=1060;
      n376.characters='Total';
      F.appendChild(n376);}
    {const n377=figma.createText();
      n377.fontName=FB;
      n377.fontSize=13.0;
      n377.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n377.x=327.9; n377.y=1074;
      n377.characters='R$ 369,28';
      F.appendChild(n377);}
    {const n378=figma.createText();
      n378.fontName=FR;
      n378.fontSize=10.0;
      n378.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n378.x=429.2; n378.y=1060;
      n378.characters='Falta pagar';
      F.appendChild(n378);}
    {const n379=figma.createText();
      n379.fontName=FB;
      n379.fontSize=13.0;
      n379.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n379.x=429.2; n379.y=1074;
      n379.characters='R$ 0,00';
      F.appendChild(n379);}
    {const n380=figma.createText();
      n380.fontName=FR;
      n380.fontSize=13.0;
      n380.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n380.x=1018.7; n380.y=1066;
      n380.characters='Limpar';
      F.appendChild(n380);}
    {const n381=figma.createFrame();
      n381.x=1083.2; n381.y=1057.0;
      n381.resize(Math.max(1,168.8),Math.max(1,34));
      n381.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n381.clipsContent=false;
      n381.cornerRadius=4.0;
      F.appendChild(n381);
      {const n382=figma.createText();
        n382.fontName=FB;
        n382.fontSize=13.0;
        n382.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n382.x=39; n382.y=9;
        n382.characters='Cadastrar Pedido';
        n381.appendChild(n382);}
    }
    {const n383=figma.createText();
      n383.fontName=FR;
      n383.fontSize=11.0;
      n383.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n383.x=30; n383.y=2806;
      n383.characters='Pedido #25622 · 7 produtos · R$ 425,20 · JADLOG COM';
      F.appendChild(n383);}
    {const n384=figma.createText();
      n384.fontName=FR;
      n384.fontSize=11.0;
      n384.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n384.x=1241.8; n384.y=2807;
      n384.characters='v4.2';
      F.appendChild(n384);}
  }
  await Promise.resolve();

  // ── A3: 7 produtos + campo Outros preenchido
  {const F=figma.createFrame();
    F.x=2720; F.y=0;
    F.resize(1280,2863);
    F.name='A3 — 7 produtos + campo Outros preenchido';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n385=figma.createFrame();
      n385.x=0.0; n385.y=0.0;
      n385.resize(Math.max(1,1280),Math.max(1,38));
      n385.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n385.clipsContent=false;
      F.appendChild(n385);
      {const n386=figma.createFrame();
        n386.x=14.0; n386.y=8.0;
        n386.resize(Math.max(1,22),Math.max(1,22));
        n386.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n386.clipsContent=false;
        n386.cornerRadius=5.0;
        n385.appendChild(n386);
        {const n387=figma.createText();
          n387.fontName=FB;
          n387.fontSize=10.0;
          n387.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n387.x=2.5; n387.y=5;
          n387.characters='MC';
          n386.appendChild(n387);}
      }
      {const n388=figma.createText();
        n388.fontName=FR;
        n388.fontSize=13.0;
        n388.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n388.x=44; n388.y=11;
        n388.characters='Maria Cacau — Gestão de Pedidos';
        n385.appendChild(n388);}
    }
    {const n389=figma.createFrame();
      n389.x=0.0; n389.y=38.0;
      n389.resize(Math.max(1,220),Math.max(1,2797));
      n389.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n389.clipsContent=false;
      F.appendChild(n389);
      {const n390=figma.createFrame();
        n390.x=14.0; n390.y=14.0;
        n390.resize(Math.max(1,38),Math.max(1,38));
        n390.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n390.clipsContent=false;
        n390.cornerRadius=8.0;
        n389.appendChild(n390);
        {const n391=figma.createText();
          n391.fontName=FB;
          n391.fontSize=14.0;
          n391.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n391.x=7.5; n391.y=10.5;
          n391.characters='MC';
          n390.appendChild(n391);}
      }
      {const n392=figma.createText();
        n392.fontName=FB;
        n392.fontSize=13.0;
        n392.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n392.x=62; n392.y=18.5;
        n392.characters='Maria Cacau';
        n389.appendChild(n392);}
      {const n393=figma.createText();
        n393.fontName=FR;
        n393.fontSize=10.0;
        n393.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n393.x=62; n393.y=35.5;
        n393.characters='Gestão de Pedidos';
        n389.appendChild(n393);}
      {const n394=figma.createText();
        n394.fontName=FB;
        n394.fontSize=10.0;
        n394.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n394.x=16; n394.y=85;
        n394.characters='Pedidos';
        n389.appendChild(n394);}
      {const n395=figma.createFrame();
        n395.x=8.0; n395.y=101.0;
        n395.resize(Math.max(1,204),Math.max(1,34));
        n395.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n395.clipsContent=false;
        n395.cornerRadius=8.0;
        n389.appendChild(n395);
        {const n396=figma.createText();
          n396.fontName=FB;
          n396.fontSize=13.0;
          n396.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n396.x=38; n396.y=9;
          n396.characters='Novo Pedido';
          n395.appendChild(n396);}
        {const n397=figma.createFrame();
          n397.x=160.4; n397.y=10.5;
          n397.resize(Math.max(1,33.6),Math.max(1,13));
          n397.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n397.clipsContent=false;
          n397.cornerRadius=8.0;
          n395.appendChild(n397);
          {const n398=figma.createText();
            n398.fontName=FB;
            n398.fontSize=9.0;
            n398.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n398.x=5; n398.y=1;
            n398.characters='Novo';
            n397.appendChild(n398);}
        }
      }
      {const n399=figma.createText();
        n399.fontName=FB;
        n399.fontSize=10.0;
        n399.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n399.x=16; n399.y=145;
        n399.characters='Consultas';
        n389.appendChild(n399);}
      {const n400=figma.createText();
        n400.fontName=FR;
        n400.fontSize=13.0;
        n400.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n400.x=46; n400.y=170;
        n400.characters='Produtos';
        n389.appendChild(n400);}
      {const n401=figma.createText();
        n401.fontName=FR;
        n401.fontSize=13.0;
        n401.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n401.x=46; n401.y=206;
        n401.characters='Entregas';
        n389.appendChild(n401);}
      {const n402=figma.createText();
        n402.fontName=FR;
        n402.fontSize=13.0;
        n402.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n402.x=46; n402.y=242;
        n402.characters='Verificar CPF';
        n389.appendChild(n402);}
      {const n403=figma.createText();
        n403.fontName=FB;
        n403.fontSize=10.0;
        n403.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n403.x=16; n403.y=277;
        n403.characters='Em breve';
        n389.appendChild(n403);}
      {const n404=figma.createText();
        n404.fontName=FR;
        n404.fontSize=13.0;
        n404.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n404.x=46; n404.y=302;
        n404.characters='Frete por CEP';
        n389.appendChild(n404);}
      {const n405=figma.createFrame();
        n405.x=169.2; n405.y=303.5;
        n405.resize(Math.max(1,32.8),Math.max(1,13));
        n405.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n405.clipsContent=false;
        n405.cornerRadius=8.0;
        n405.opacity=0.36;
        n389.appendChild(n405);
        {const n406=figma.createText();
          n406.fontName=FB;
          n406.fontSize=9.0;
          n406.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n406.x=5; n406.y=1;
          n406.characters='Logo';
          n405.appendChild(n406);}
      }
      {const n407=figma.createText();
        n407.fontName=FR;
        n407.fontSize=13.0;
        n407.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n407.x=46; n407.y=338;
        n407.characters='Nota Fiscal';
        n389.appendChild(n407);}
      {const n408=figma.createFrame();
        n408.x=169.2; n408.y=339.5;
        n408.resize(Math.max(1,32.8),Math.max(1,13));
        n408.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n408.clipsContent=false;
        n408.cornerRadius=8.0;
        n408.opacity=0.36;
        n389.appendChild(n408);
        {const n409=figma.createText();
          n409.fontName=FB;
          n409.fontSize=9.0;
          n409.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n409.x=5; n409.y=1;
          n409.characters='Logo';
          n408.appendChild(n409);}
      }
    }
    {const n410=figma.createText();
      n410.fontName=FB;
      n410.fontSize=20.0;
      n410.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n410.x=248; n410.y=62;
      n410.characters='Novo Pedido';
      F.appendChild(n410);}
    {const n411=figma.createText();
      n411.fontName=FR;
      n411.fontSize=13.0;
      n411.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n411.x=248; n411.y=88;
      n411.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n411);}
    {const n412=figma.createFrame();
      n412.x=265.0; n412.y=133.0;
      n412.resize(Math.max(1,20),Math.max(1,20));
      n412.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n412.clipsContent=false;
      n412.cornerRadius=50.0;
      F.appendChild(n412);
      {const n413=figma.createText();
        n413.fontName=FB;
        n413.fontSize=9.0;
        n413.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n413.x=7.6; n413.y=4.5;
        n413.characters='1';
        n412.appendChild(n413);}
    }
    {const n414=figma.createText();
      n414.fontName=FB;
      n414.fontSize=13.0;
      n414.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n414.x=295; n414.y=135;
      n414.characters='Identificação do Pedido';
      F.appendChild(n414);}
    {const n415=figma.createText();
      n415.fontName=FR;
      n415.fontSize=11.0;
      n415.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n415.x=265; n415.y=178;
      n415.characters='Nº Pedido';
      F.appendChild(n415);}
    {const n416=figma.createText();
      n416.fontName=FR;
      n416.fontSize=11.0;
      n416.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n416.x=319.2; n416.y=178;
      n416.characters='*';
      F.appendChild(n416);}
    {const n417=figma.createText();
      n417.fontName=FR;
      n417.fontSize=13.0;
      n417.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n417.x=274; n417.y=201.5;
      n417.characters='25727';
      F.appendChild(n417);}
    {const n418=figma.createText();
      n418.fontName=FR;
      n418.fontSize=11.0;
      n418.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n418.x=757; n418.y=178;
      n418.characters='Como Conheceu';
      F.appendChild(n418);}
    {const n419=figma.createFrame();
      n419.x=265.0; n419.y=260.0;
      n419.resize(Math.max(1,20),Math.max(1,20));
      n419.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n419.clipsContent=false;
      n419.cornerRadius=50.0;
      F.appendChild(n419);
      {const n420=figma.createText();
        n420.fontName=FB;
        n420.fontSize=9.0;
        n420.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n420.x=7; n420.y=4.5;
        n420.characters='2';
        n419.appendChild(n420);}
    }
    {const n421=figma.createText();
      n421.fontName=FB;
      n421.fontSize=13.0;
      n421.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n421.x=295; n421.y=262;
      n421.characters='Comprador';
      F.appendChild(n421);}
    {const n422=figma.createText();
      n422.fontName=FR;
      n422.fontSize=11.0;
      n422.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n422.x=265; n422.y=305;
      n422.characters='Nome do Comprador';
      F.appendChild(n422);}
    {const n423=figma.createText();
      n423.fontName=FR;
      n423.fontSize=11.0;
      n423.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n423.x=378.2; n423.y=305;
      n423.characters='*';
      F.appendChild(n423);}
    {const n424=figma.createText();
      n424.fontName=FR;
      n424.fontSize=13.0;
      n424.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n424.x=274; n424.y=328.5;
      n424.characters='Clelia Aparecida de Paiva';
      F.appendChild(n424);}
    {const n425=figma.createText();
      n425.fontName=FR;
      n425.fontSize=11.0;
      n425.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n425.x=265; n425.y=361;
      n425.characters='Parentesco';
      F.appendChild(n425);}
    {const n426=figma.createText();
      n426.fontName=FR;
      n426.fontSize=13.0;
      n426.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n426.x=274; n426.y=384.5;
      n426.characters='Mãe';
      F.appendChild(n426);}
    {const n427=figma.createText();
      n427.fontName=FR;
      n427.fontSize=11.0;
      n427.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n427.x=757; n427.y=361;
      n427.characters='Telefone';
      F.appendChild(n427);}
    {const n428=figma.createText();
      n428.fontName=FR;
      n428.fontSize=11.0;
      n428.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n428.x=803.6; n428.y=361;
      n428.characters='*';
      F.appendChild(n428);}
    {const n429=figma.createText();
      n429.fontName=FR;
      n429.fontSize=13.0;
      n429.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n429.x=766; n429.y=384.5;
      n429.characters='(12) 98128-0831';
      F.appendChild(n429);}
    {const n430=figma.createText();
      n430.fontName=FR;
      n430.fontSize=11.0;
      n430.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n430.x=265; n430.y=417;
      n430.characters='CPF';
      F.appendChild(n430);}
    {const n431=figma.createText();
      n431.fontName=FR;
      n431.fontSize=11.0;
      n431.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n431.x=757; n431.y=417;
      n431.characters='Email';
      F.appendChild(n431);}
    {const n432=figma.createFrame();
      n432.x=265.0; n432.y=499.0;
      n432.resize(Math.max(1,20),Math.max(1,20));
      n432.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n432.clipsContent=false;
      n432.cornerRadius=50.0;
      F.appendChild(n432);
      {const n433=figma.createText();
        n433.fontName=FB;
        n433.fontSize=9.0;
        n433.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n433.x=6.9; n433.y=4.5;
        n433.characters='3';
        n432.appendChild(n433);}
    }
    {const n434=figma.createText();
      n434.fontName=FB;
      n434.fontSize=13.0;
      n434.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n434.x=295; n434.y=501;
      n434.characters='Presenteado & Evento';
      F.appendChild(n434);}
    {const n435=figma.createText();
      n435.fontName=FR;
      n435.fontSize=11.0;
      n435.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n435.x=265; n435.y=544;
      n435.characters='Nome do Presenteado';
      F.appendChild(n435);}
    {const n436=figma.createText();
      n436.fontName=FR;
      n436.fontSize=13.0;
      n436.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n436.x=274; n436.y=567.5;
      n436.characters='Mirela';
      F.appendChild(n436);}
    {const n437=figma.createText();
      n437.fontName=FR;
      n437.fontSize=11.0;
      n437.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n437.x=265; n437.y=600;
      n437.characters='Sexo';
      F.appendChild(n437);}
    {const n438=figma.createFrame();
      n438.x=265.0; n438.y=616.0;
      n438.resize(Math.max(1,96.4),Math.max(1,30));
      n438.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n438.clipsContent=false;
      n438.strokes=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n438.strokeWeight=1.0; n438.strokeAlign='INSIDE';
      n438.topLeftRadius=4.0;n438.topRightRadius=0.0;n438.bottomLeftRadius=4.0;n438.bottomRightRadius=0.0;
      F.appendChild(n438);
      {const n439=figma.createText();
        n439.fontName=FR;
        n439.fontSize=11.0;
        n439.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n439.x=24.5; n439.y=8.5;
        n439.characters='Feminino';
        n438.appendChild(n439);}
    }
    {const n440=figma.createText();
      n440.fontName=FR;
      n440.fontSize=11.0;
      n440.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n440.x=382.09999999999997; n440.y=624.5;
      n440.characters='Masculino';
      F.appendChild(n440);}
    {const n441=figma.createText();
      n441.fontName=FR;
      n441.fontSize=11.0;
      n441.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n441.x=482.7; n441.y=624.5;
      n441.characters='Gêmeas';
      F.appendChild(n441);}
    {const n442=figma.createText();
      n442.fontName=FR;
      n442.fontSize=11.0;
      n442.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n442.x=577.9000000000001; n442.y=624.5;
      n442.characters='Gêmeos';
      F.appendChild(n442);}
    {const n443=figma.createText();
      n443.fontName=FR;
      n443.fontSize=11.0;
      n443.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n443.x=670.2; n443.y=624.5;
      n443.characters='Não sabe';
      F.appendChild(n443);}
    {const n444=figma.createText();
      n444.fontName=FR;
      n444.fontSize=11.0;
      n444.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n444.x=757; n444.y=600;
      n444.characters='Tipo de Evento';
      F.appendChild(n444);}
    {const n445=figma.createText();
      n445.fontName=FR;
      n445.fontSize=13.0;
      n445.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n445.x=766; n445.y=623.5;
      n445.characters='Aniversário';
      F.appendChild(n445);}
    {const n446=figma.createText();
      n446.fontName=FR;
      n446.fontSize=11.0;
      n446.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n446.x=265; n446.y=656;
      n446.characters='Data do Evento';
      F.appendChild(n446);}
    {const n447=figma.createText();
      n447.fontName=FR;
      n447.fontSize=13.0;
      n447.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n447.x=274; n447.y=679.5;
      n447.characters='2026-03-14';
      F.appendChild(n447);}
    {const n448=figma.createFrame();
      n448.x=265.0; n448.y=738.0;
      n448.resize(Math.max(1,20),Math.max(1,20));
      n448.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n448.clipsContent=false;
      n448.cornerRadius=50.0;
      F.appendChild(n448);
      {const n449=figma.createText();
        n449.fontName=FB;
        n449.fontSize=9.0;
        n449.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n449.x=6.8; n449.y=4.5;
        n449.characters='4';
        n448.appendChild(n449);}
    }
    {const n450=figma.createText();
      n450.fontName=FB;
      n450.fontSize=13.0;
      n450.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n450.x=295; n450.y=740;
      n450.characters='Personalização';
      F.appendChild(n450);}
    {const n451=figma.createText();
      n451.fontName=FR;
      n451.fontSize=11.0;
      n451.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n451.x=1138; n451.y=741.5;
      n451.characters='Arte & embalagem';
      F.appendChild(n451);}
    {const n452=figma.createText();
      n452.fontName=FR;
      n452.fontSize=11.0;
      n452.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n452.x=265; n452.y=783;
      n452.characters='Nome da Etiqueta';
      F.appendChild(n452);}
    {const n453=figma.createText();
      n453.fontName=FR;
      n453.fontSize=11.0;
      n453.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n453.x=757; n453.y=783;
      n453.characters='Tema da Etiqueta';
      F.appendChild(n453);}
    {const n454=figma.createText();
      n454.fontName=FR;
      n454.fontSize=11.0;
      n454.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n454.x=265; n454.y=839;
      n454.characters='Nome na Caixa';
      F.appendChild(n454);}
    {const n455=figma.createText();
      n455.fontName=FR;
      n455.fontSize=11.0;
      n455.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n455.x=757; n455.y=839;
      n455.characters='Arte / Tecido da Caixa';
      F.appendChild(n455);}
    {const n456=figma.createText();
      n456.fontName=FR;
      n456.fontSize=11.0;
      n456.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n456.x=265; n456.y=895;
      n456.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n456);}
    {const n457=figma.createText();
      n457.fontName=FR;
      n457.fontSize=13.0;
      n457.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n457.x=274; n457.y=918.5;
      n457.characters='0';
      F.appendChild(n457);}
    {const n458=figma.createFrame();
      n458.x=265.0; n458.y=977.0;
      n458.resize(Math.max(1,20),Math.max(1,20));
      n458.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n458.clipsContent=false;
      n458.cornerRadius=50.0;
      F.appendChild(n458);
      {const n459=figma.createText();
        n459.fontName=FB;
        n459.fontSize=9.0;
        n459.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n459.x=6.9; n459.y=4.5;
        n459.characters='5';
        n458.appendChild(n459);}
    }
    {const n460=figma.createText();
      n460.fontName=FB;
      n460.fontSize=13.0;
      n460.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n460.x=295; n460.y=979;
      n460.characters='Produtos';
      F.appendChild(n460);}
    {const n461=figma.createText();
      n461.fontName=FR;
      n461.fontSize=11.0;
      n461.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n461.x=1200.1; n461.y=980.5;
      n461.characters='7 itens';
      F.appendChild(n461);}
    {const n462=figma.createText();
      n462.fontName=FB;
      n462.fontSize=10.0;
      n462.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n462.x=265; n462.y=1022;
      n462.characters='Produto';
      F.appendChild(n462);}
    {const n463=figma.createText();
      n463.fontName=FB;
      n463.fontSize=10.0;
      n463.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n463.x=937; n463.y=1022;
      n463.characters='Qtd';
      F.appendChild(n463);}
    {const n464=figma.createText();
      n464.fontName=FB;
      n464.fontSize=10.0;
      n464.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n464.x=1007; n464.y=1022;
      n464.characters='R$ Unit.';
      F.appendChild(n464);}
    {const n465=figma.createText();
      n465.fontName=FB;
      n465.fontSize=10.0;
      n465.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n465.x=1113; n465.y=1022;
      n465.characters='Total';
      F.appendChild(n465);}
    {const n466=figma.createText();
      n466.fontName=FR;
      n466.fontSize=13.0;
      n466.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n466.x=274; n466.y=1054.5;
      n466.characters='LIVRO PARA COLORIR';
      F.appendChild(n466);}
    {const n467=figma.createText();
      n467.fontName=FR;
      n467.fontSize=13.0;
      n467.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n467.x=946; n467.y=1054.5;
      n467.characters='20';
      F.appendChild(n467);}
    {const n468=figma.createText();
      n468.fontName=FR;
      n468.fontSize=13.0;
      n468.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n468.x=1016; n468.y=1054.5;
      n468.characters='20,89';
      F.appendChild(n468);}
    {const n469=figma.createText();
      n469.fontName=FR;
      n469.fontSize=12.0;
      n469.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n469.x=1123; n469.y=1056;
      n469.characters='R$ 417,80';
      F.appendChild(n469);}
    {const n470=figma.createText();
      n470.fontName=FR;
      n470.fontSize=13.0;
      n470.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n470.x=274; n470.y=1091.5;
      n470.characters='GIZ DE CERA CAIXINHA PERS.';
      F.appendChild(n470);}
    {const n471=figma.createText();
      n471.fontName=FR;
      n471.fontSize=13.0;
      n471.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n471.x=946; n471.y=1091.5;
      n471.characters='20';
      F.appendChild(n471);}
    {const n472=figma.createText();
      n472.fontName=FR;
      n472.fontSize=12.0;
      n472.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n472.x=1123; n472.y=1093;
      n472.characters='R$ 0,00';
      F.appendChild(n472);}
    {const n473=figma.createText();
      n473.fontName=FR;
      n473.fontSize=15.0;
      n473.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n473.x=1217.4; n473.y=1090;
      n473.characters='×';
      F.appendChild(n473);}
    {const n474=figma.createText();
      n474.fontName=FR;
      n474.fontSize=13.0;
      n474.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n474.x=274; n474.y=1128.5;
      n474.characters='MASSINHA';
      F.appendChild(n474);}
    {const n475=figma.createText();
      n475.fontName=FR;
      n475.fontSize=13.0;
      n475.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n475.x=946; n475.y=1128.5;
      n475.characters='20';
      F.appendChild(n475);}
    {const n476=figma.createText();
      n476.fontName=FR;
      n476.fontSize=12.0;
      n476.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n476.x=1123; n476.y=1130;
      n476.characters='R$ 0,00';
      F.appendChild(n476);}
    {const n477=figma.createText();
      n477.fontName=FR;
      n477.fontSize=15.0;
      n477.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n477.x=1217.4; n477.y=1127;
      n477.characters='×';
      F.appendChild(n477);}
    {const n478=figma.createText();
      n478.fontName=FR;
      n478.fontSize=13.0;
      n478.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n478.x=274; n478.y=1165.5;
      n478.characters='(2) Bolinha pula-pula';
      F.appendChild(n478);}
    {const n479=figma.createText();
      n479.fontName=FR;
      n479.fontSize=13.0;
      n479.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n479.x=946; n479.y=1165.5;
      n479.characters='20';
      F.appendChild(n479);}
    {const n480=figma.createText();
      n480.fontName=FR;
      n480.fontSize=12.0;
      n480.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n480.x=1123; n480.y=1167;
      n480.characters='R$ 0,00';
      F.appendChild(n480);}
    {const n481=figma.createText();
      n481.fontName=FR;
      n481.fontSize=15.0;
      n481.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n481.x=1217.4; n481.y=1164;
      n481.characters='×';
      F.appendChild(n481);}
    {const n482=figma.createText();
      n482.fontName=FR;
      n482.fontSize=13.0;
      n482.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n482.x=274; n482.y=1202.5;
      n482.characters='(2) MOLDE SORTIDO MASSINHA';
      F.appendChild(n482);}
    {const n483=figma.createText();
      n483.fontName=FR;
      n483.fontSize=13.0;
      n483.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n483.x=946; n483.y=1202.5;
      n483.characters='20';
      F.appendChild(n483);}
    {const n484=figma.createText();
      n484.fontName=FR;
      n484.fontSize=12.0;
      n484.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n484.x=1123; n484.y=1204;
      n484.characters='R$ 0,00';
      F.appendChild(n484);}
    {const n485=figma.createText();
      n485.fontName=FR;
      n485.fontSize=15.0;
      n485.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n485.x=1217.4; n485.y=1201;
      n485.characters='×';
      F.appendChild(n485);}
    {const n486=figma.createText();
      n486.fontName=FR;
      n486.fontSize=13.0;
      n486.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n486.x=274; n486.y=1239.5;
      n486.characters='Saquinho Organza';
      F.appendChild(n486);}
    {const n487=figma.createText();
      n487.fontName=FR;
      n487.fontSize=13.0;
      n487.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n487.x=946; n487.y=1239.5;
      n487.characters='20';
      F.appendChild(n487);}
    {const n488=figma.createText();
      n488.fontName=FR;
      n488.fontSize=12.0;
      n488.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n488.x=1123; n488.y=1241;
      n488.characters='R$ 0,00';
      F.appendChild(n488);}
    {const n489=figma.createText();
      n489.fontName=FR;
      n489.fontSize=15.0;
      n489.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n489.x=1217.4; n489.y=1238;
      n489.characters='×';
      F.appendChild(n489);}
    {const n490=figma.createText();
      n490.fontName=FR;
      n490.fontSize=13.0;
      n490.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n490.x=274; n490.y=1276.5;
      n490.characters='SAQUINHO PERSONALIZADO 10X15 ZIP';
      F.appendChild(n490);}
    {const n491=figma.createText();
      n491.fontName=FR;
      n491.fontSize=13.0;
      n491.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n491.x=946; n491.y=1276.5;
      n491.characters='20';
      F.appendChild(n491);}
    {const n492=figma.createText();
      n492.fontName=FR;
      n492.fontSize=13.0;
      n492.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n492.x=1016; n492.y=1276.5;
      n492.characters='3,90';
      F.appendChild(n492);}
    {const n493=figma.createText();
      n493.fontName=FR;
      n493.fontSize=12.0;
      n493.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n493.x=1123; n493.y=1278;
      n493.characters='R$ 78,00';
      F.appendChild(n493);}
    {const n494=figma.createText();
      n494.fontName=FR;
      n494.fontSize=15.0;
      n494.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n494.x=1217.4; n494.y=1275;
      n494.characters='×';
      F.appendChild(n494);}
    {const n495=figma.createText();
      n495.fontName=FR;
      n495.fontSize=12.0;
      n495.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n495.x=292; n495.y=1311.5;
      n495.characters='Adicionar produto';
      F.appendChild(n495);}
    {const n496=figma.createText();
      n496.fontName=FR;
      n496.fontSize=11.0;
      n496.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n496.x=265; n496.y=1332;
      n496.characters='Outros (descrição livre)';
      F.appendChild(n496);}
    {const n497=figma.createText();
      n497.fontName=FR;
      n497.fontSize=13.0;
      n497.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n497.x=274; n497.y=1355.5;
      n497.characters='mudou a arte depois de aprovado';
      F.appendChild(n497);}
    {const n498=figma.createText();
      n498.fontName=FR;
      n498.fontSize=11.0;
      n498.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n498.x=1000.4; n498.y=1396;
      n498.characters='Subtotal dos produtos';
      F.appendChild(n498);}
    {const n499=figma.createText();
      n499.fontName=FB;
      n499.fontSize=13.0;
      n499.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n499.x=1170.7; n499.y=1396;
      n499.characters='R$ 495,80';
      F.appendChild(n499);}
    {const n500=figma.createFrame();
      n500.x=265.0; n500.y=1446.0;
      n500.resize(Math.max(1,20),Math.max(1,20));
      n500.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n500.clipsContent=false;
      n500.cornerRadius=50.0;
      F.appendChild(n500);
      {const n501=figma.createText();
        n501.fontName=FB;
        n501.fontSize=9.0;
        n501.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n501.x=6.8; n501.y=4.5;
        n501.characters='6';
        n500.appendChild(n501);}
    }
    {const n502=figma.createText();
      n502.fontName=FB;
      n502.fontSize=13.0;
      n502.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n502.x=295; n502.y=1448;
      n502.characters='Financeiro';
      F.appendChild(n502);}
    {const n503=figma.createText();
      n503.fontName=FR;
      n503.fontSize=11.0;
      n503.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n503.x=265; n503.y=1491;
      n503.characters='Desconto (R$)';
      F.appendChild(n503);}
    {const n504=figma.createText();
      n504.fontName=FR;
      n504.fontSize=13.0;
      n504.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n504.x=274; n504.y=1514.5;
      n504.characters='0';
      F.appendChild(n504);}
    {const n505=figma.createText();
      n505.fontName=FR;
      n505.fontSize=11.0;
      n505.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n505.x=757; n505.y=1491;
      n505.characters='Frete (R$)';
      F.appendChild(n505);}
    {const n506=figma.createText();
      n506.fontName=FR;
      n506.fontSize=13.0;
      n506.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n506.x=766; n506.y=1514.5;
      n506.characters='23,47';
      F.appendChild(n506);}
    {const n507=figma.createText();
      n507.fontName=FR;
      n507.fontSize=11.0;
      n507.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n507.x=265; n507.y=1547;
      n507.characters='Total do Pedido';
      F.appendChild(n507);}
    {const n508=figma.createText();
      n508.fontName=FB;
      n508.fontSize=20.0;
      n508.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n508.x=281; n508.y=1574.5;
      n508.characters='R$ 519,27';
      F.appendChild(n508);}
    {const n509=figma.createFrame();
      n509.x=265.0; n509.y=1643.0;
      n509.resize(Math.max(1,20),Math.max(1,20));
      n509.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n509.clipsContent=false;
      n509.cornerRadius=50.0;
      F.appendChild(n509);
      {const n510=figma.createText();
        n510.fontName=FB;
        n510.fontSize=9.0;
        n510.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n510.x=7.2; n510.y=4.5;
        n510.characters='7';
        n509.appendChild(n510);}
    }
    {const n511=figma.createText();
      n511.fontName=FB;
      n511.fontSize=13.0;
      n511.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n511.x=295; n511.y=1645;
      n511.characters='Pagamento';
      F.appendChild(n511);}
    {const n512=figma.createText();
      n512.fontName=FB;
      n512.fontSize=10.0;
      n512.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n512.x=265; n512.y=1688;
      n512.characters='Forma';
      F.appendChild(n512);}
    {const n513=figma.createText();
      n513.fontName=FB;
      n513.fontSize=10.0;
      n513.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n513.x=411; n513.y=1688;
      n513.characters='Data Pgto';
      F.appendChild(n513);}
    {const n514=figma.createText();
      n514.fontName=FB;
      n514.fontSize=10.0;
      n514.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n514.x=541; n514.y=1688;
      n514.characters='Valor (R$)';
      F.appendChild(n514);}
    {const n515=figma.createText();
      n515.fontName=FB;
      n515.fontSize=10.0;
      n515.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n515.x=657; n515.y=1688;
      n515.characters='Confirm.';
      F.appendChild(n515);}
    {const n516=figma.createText();
      n516.fontName=FR;
      n516.fontSize=12.0;
      n516.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n516.x=274; n516.y=1721;
      n516.characters='Inter';
      F.appendChild(n516);}
    {const n517=figma.createText();
      n517.fontName=FR;
      n517.fontSize=13.0;
      n517.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n517.x=420; n517.y=1720.5;
      n517.characters='2025-09-30';
      F.appendChild(n517);}
    {const n518=figma.createText();
      n518.fontName=FR;
      n518.fontSize=13.0;
      n518.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n518.x=550; n518.y=1720.5;
      n518.characters='100,00';
      F.appendChild(n518);}
    {const n519=figma.createText();
      n519.fontName=FR;
      n519.fontSize=13.3;
      n519.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n519.x=699; n519.y=1720;
      n519.characters='on';
      F.appendChild(n519);}
    {const n520=figma.createText();
      n520.fontName=FR;
      n520.fontSize=12.0;
      n520.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n520.x=274; n520.y=1758;
      n520.characters='Inter';
      F.appendChild(n520);}
    {const n521=figma.createText();
      n521.fontName=FR;
      n521.fontSize=13.0;
      n521.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n521.x=420; n521.y=1757.5;
      n521.characters='2025-11-07';
      F.appendChild(n521);}
    {const n522=figma.createText();
      n522.fontName=FR;
      n522.fontSize=13.0;
      n522.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n522.x=550; n522.y=1757.5;
      n522.characters='331,27';
      F.appendChild(n522);}
    {const n523=figma.createText();
      n523.fontName=FR;
      n523.fontSize=13.3;
      n523.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n523.x=699; n523.y=1757;
      n523.characters='on';
      F.appendChild(n523);}
    {const n524=figma.createText();
      n524.fontName=FR;
      n524.fontSize=15.0;
      n524.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n524.x=751.4; n524.y=1756;
      n524.characters='×';
      F.appendChild(n524);}
    {const n525=figma.createText();
      n525.fontName=FR;
      n525.fontSize=12.0;
      n525.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n525.x=274; n525.y=1795;
      n525.characters='Inter';
      F.appendChild(n525);}
    {const n526=figma.createText();
      n526.fontName=FR;
      n526.fontSize=13.0;
      n526.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n526.x=420; n526.y=1794.5;
      n526.characters='2026-01-28';
      F.appendChild(n526);}
    {const n527=figma.createText();
      n527.fontName=FR;
      n527.fontSize=13.0;
      n527.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n527.x=550; n527.y=1794.5;
      n527.characters='78,00';
      F.appendChild(n527);}
    {const n528=figma.createText();
      n528.fontName=FR;
      n528.fontSize=13.3;
      n528.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n528.x=699; n528.y=1794;
      n528.characters='on';
      F.appendChild(n528);}
    {const n529=figma.createText();
      n529.fontName=FR;
      n529.fontSize=15.0;
      n529.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n529.x=751.4; n529.y=1793;
      n529.characters='×';
      F.appendChild(n529);}
    {const n530=figma.createText();
      n530.fontName=FR;
      n530.fontSize=12.0;
      n530.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n530.x=292; n530.y=1829.5;
      n530.characters='Adicionar parcela';
      F.appendChild(n530);}
    {const n531=figma.createText();
      n531.fontName=FR;
      n531.fontSize=12.0;
      n531.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n531.x=280; n531.y=1875;
      n531.characters='Total do pedido';
      F.appendChild(n531);}
    {const n532=figma.createText();
      n532.fontName=FR;
      n532.fontSize=12.0;
      n532.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n532.x=1160.6; n532.y=1876.5;
      n532.characters='R$ 519,27';
      F.appendChild(n532);}
    {const n533=figma.createText();
      n533.fontName=FR;
      n533.fontSize=12.0;
      n533.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n533.x=280; n533.y=1895;
      n533.characters='Total pago';
      F.appendChild(n533);}
    {const n534=figma.createText();
      n534.fontName=FR;
      n534.fontSize=12.0;
      n534.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n534.x=1160.6; n534.y=1896.5;
      n534.characters='R$ 509,27';
      F.appendChild(n534);}
    {const n535=figma.createText();
      n535.fontName=FB;
      n535.fontSize=12.0;
      n535.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n535.x=280; n535.y=1915.5;
      n535.characters='Falta pagar';
      F.appendChild(n535);}
    {const n536=figma.createText();
      n536.fontName=FB;
      n536.fontSize=12.0;
      n536.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n536.x=1159.2; n536.y=1917;
      n536.characters='R$ 10,00';
      F.appendChild(n536);}
    {const n537=figma.createText();
      n537.fontName=FR;
      n537.fontSize=13.3;
      n537.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n537.x=289; n537.y=1948.5;
      n537.characters='on';
      F.appendChild(n537);}
    {const n538=figma.createText();
      n538.fontName=FR;
      n538.fontSize=12.0;
      n538.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n538.x=300; n538.y=1948;
      n538.characters='Vai pagar na retirada';
      F.appendChild(n538);}
    {const n539=figma.createFrame();
      n539.x=265.0; n539.y=2012.0;
      n539.resize(Math.max(1,20),Math.max(1,20));
      n539.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n539.clipsContent=false;
      n539.cornerRadius=50.0;
      F.appendChild(n539);
      {const n540=figma.createText();
        n540.fontName=FB;
        n540.fontSize=9.0;
        n540.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n540.x=6.8; n540.y=4.5;
        n540.characters='8';
        n539.appendChild(n540);}
    }
    {const n541=figma.createText();
      n541.fontName=FB;
      n541.fontSize=13.0;
      n541.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n541.x=295; n541.y=2014;
      n541.characters='Entrega';
      F.appendChild(n541);}
    {const n542=figma.createText();
      n542.fontName=FR;
      n542.fontSize=11.0;
      n542.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n542.x=265; n542.y=2057;
      n542.characters='Data de Entrega';
      F.appendChild(n542);}
    {const n543=figma.createText();
      n543.fontName=FR;
      n543.fontSize=11.0;
      n543.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n543.x=352.7; n543.y=2057;
      n543.characters='*';
      F.appendChild(n543);}
    {const n544=figma.createText();
      n544.fontName=FR;
      n544.fontSize=11.0;
      n544.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n544.x=757; n544.y=2057;
      n544.characters='Modalidade';
      F.appendChild(n544);}
    {const n545=figma.createText();
      n545.fontName=FR;
      n545.fontSize=11.0;
      n545.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n545.x=820.4; n545.y=2057;
      n545.characters='*';
      F.appendChild(n545);}
    {const n546=figma.createText();
      n546.fontName=FR;
      n546.fontSize=13.0;
      n546.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n546.x=766; n546.y=2080.5;
      n546.characters='JADLOG COM';
      F.appendChild(n546);}
    {const n547=figma.createText();
      n547.fontName=FB;
      n547.fontSize=10.0;
      n547.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n547.x=265; n547.y=2118.5;
      n547.characters='Destinatário';
      F.appendChild(n547);}
    {const n548=figma.createText();
      n548.fontName=FR;
      n548.fontSize=13.3;
      n548.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n548.x=1083.7; n548.y=2117.5;
      n548.characters='on';
      F.appendChild(n548);}
    {const n549=figma.createText();
      n549.fontName=FR;
      n549.fontSize=12.0;
      n549.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n549.x=1093.7; n549.y=2117;
      n549.characters='Mesmo que o comprador';
      F.appendChild(n549);}
    {const n550=figma.createText();
      n550.fontName=FR;
      n550.fontSize=11.0;
      n550.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n550.x=265; n550.y=2151;
      n550.characters='Nome do Destinatário';
      F.appendChild(n550);}
    {const n551=figma.createText();
      n551.fontName=FR;
      n551.fontSize=11.0;
      n551.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n551.x=383.5; n551.y=2151;
      n551.characters='*';
      F.appendChild(n551);}
    {const n552=figma.createText();
      n552.fontName=FR;
      n552.fontSize=13.0;
      n552.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n552.x=274; n552.y=2174.5;
      n552.characters='Clelia Aparecida de Paiva';
      F.appendChild(n552);}
    {const n553=figma.createText();
      n553.fontName=FR;
      n553.fontSize=11.0;
      n553.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n553.x=265; n553.y=2207;
      n553.characters='Telefone';
      F.appendChild(n553);}
    {const n554=figma.createText();
      n554.fontName=FR;
      n554.fontSize=13.0;
      n554.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n554.x=274; n554.y=2230.5;
      n554.characters='(12) 98128-0831';
      F.appendChild(n554);}
    {const n555=figma.createText();
      n555.fontName=FR;
      n555.fontSize=11.0;
      n555.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n555.x=757; n555.y=2207;
      n555.characters='CPF';
      F.appendChild(n555);}
    {const n556=figma.createText();
      n556.fontName=FR;
      n556.fontSize=11.0;
      n556.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n556.x=265; n556.y=2263;
      n556.characters='Email';
      F.appendChild(n556);}
    {const n557=figma.createText();
      n557.fontName=FB;
      n557.fontSize=10.0;
      n557.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n557.x=265; n557.y=2323;
      n557.characters='Endereço';
      F.appendChild(n557);}
    {const n558=figma.createText();
      n558.fontName=FR;
      n558.fontSize=11.0;
      n558.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n558.x=265; n558.y=2354;
      n558.characters='CEP';
      F.appendChild(n558);}
    {const n559=figma.createText();
      n559.fontName=FR;
      n559.fontSize=13.0;
      n559.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n559.x=274; n559.y=2377.5;
      n559.characters='12225-011';
      F.appendChild(n559);}
    {const n560=figma.createText();
      n560.fontName=FR;
      n560.fontSize=11.0;
      n560.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n560.x=265; n560.y=2410;
      n560.characters='Logradouro';
      F.appendChild(n560);}
    {const n561=figma.createText();
      n561.fontName=FR;
      n561.fontSize=13.0;
      n561.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n561.x=274; n561.y=2433.5;
      n561.characters='Av. Presidente Tancredo Neves';
      F.appendChild(n561);}
    {const n562=figma.createText();
      n562.fontName=FR;
      n562.fontSize=11.0;
      n562.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n562.x=593; n562.y=2410;
      n562.characters='Número';
      F.appendChild(n562);}
    {const n563=figma.createText();
      n563.fontName=FR;
      n563.fontSize=13.0;
      n563.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n563.x=602; n563.y=2433.5;
      n563.characters='1331';
      F.appendChild(n563);}
    {const n564=figma.createText();
      n564.fontName=FR;
      n564.fontSize=11.0;
      n564.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n564.x=265; n564.y=2466;
      n564.characters='Complemento';
      F.appendChild(n564);}
    {const n565=figma.createText();
      n565.fontName=FR;
      n565.fontSize=13.0;
      n565.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n565.x=274; n565.y=2489.5;
      n565.characters='Apto 71';
      F.appendChild(n565);}
    {const n566=figma.createText();
      n566.fontName=FR;
      n566.fontSize=11.0;
      n566.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n566.x=511; n566.y=2466;
      n566.characters='Bairro';
      F.appendChild(n566);}
    {const n567=figma.createText();
      n567.fontName=FR;
      n567.fontSize=13.0;
      n567.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n567.x=520; n567.y=2489.5;
      n567.characters='Jd Americano';
      F.appendChild(n567);}
    {const n568=figma.createText();
      n568.fontName=FR;
      n568.fontSize=11.0;
      n568.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n568.x=757; n568.y=2466;
      n568.characters='Cidade';
      F.appendChild(n568);}
    {const n569=figma.createText();
      n569.fontName=FR;
      n569.fontSize=13.0;
      n569.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n569.x=766; n569.y=2489.5;
      n569.characters='São José dos Campos';
      F.appendChild(n569);}
    {const n570=figma.createText();
      n570.fontName=FR;
      n570.fontSize=11.0;
      n570.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n570.x=265; n570.y=2522;
      n570.characters='UF';
      F.appendChild(n570);}
    {const n571=figma.createText();
      n571.fontName=FR;
      n571.fontSize=13.0;
      n571.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n571.x=274; n571.y=2545.5;
      n571.characters='SP';
      F.appendChild(n571);}
    {const n572=figma.createText();
      n572.fontName=FB;
      n572.fontSize=10.0;
      n572.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n572.x=265; n572.y=2582;
      n572.characters='Observações';
      F.appendChild(n572);}
    {const n573=figma.createText();
      n573.fontName=FR;
      n573.fontSize=11.0;
      n573.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n573.x=265; n573.y=2613;
      n573.characters='Obs. Fábrica';
      F.appendChild(n573);}
    {const n574=figma.createText();
      n574.fontName=FR;
      n574.fontSize=11.0;
      n574.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n574.x=757; n574.y=2613;
      n574.characters='Info Motoboy';
      F.appendChild(n574);}
    {const n575=figma.createText();
      n575.fontName=FB;
      n575.fontSize=9.0;
      n575.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n575.x=271.8; n575.y=2727.5;
      n575.characters='9';
      F.appendChild(n575);}
    {const n576=figma.createText();
      n576.fontName=FR;
      n576.fontSize=12.0;
      n576.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n576.x=295; n576.y=2725.5;
      n576.characters='Controle Interno';
      F.appendChild(n576);}
    {const n577=figma.createText();
      n577.fontName=FR;
      n577.fontSize=11.0;
      n577.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n577.x=1088.2; n577.y=2726.5;
      n577.characters='Uso interno da operação';
      F.appendChild(n577);}
    {const n578=figma.createText();
      n578.fontName=FR;
      n578.fontSize=10.0;
      n578.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n578.x=1225.1; n578.y=2729.1;
      n578.characters='▼';
      F.appendChild(n578);}
    {const n579=figma.createText();
      n579.fontName=FR;
      n579.fontSize=10.0;
      n579.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n579.x=248; n579.y=1060;
      n579.characters='Pedido';
      F.appendChild(n579);}
    {const n580=figma.createText();
      n580.fontName=FB;
      n580.fontSize=13.0;
      n580.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n580.x=248; n580.y=1074;
      n580.characters='#25727';
      F.appendChild(n580);}
    {const n581=figma.createText();
      n581.fontName=FR;
      n581.fontSize=10.0;
      n581.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n581.x=327.9; n581.y=1060;
      n581.characters='Total';
      F.appendChild(n581);}
    {const n582=figma.createText();
      n582.fontName=FB;
      n582.fontSize=13.0;
      n582.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n582.x=327.9; n582.y=1074;
      n582.characters='R$ 519,27';
      F.appendChild(n582);}
    {const n583=figma.createText();
      n583.fontName=FR;
      n583.fontSize=10.0;
      n583.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n583.x=429.2; n583.y=1060;
      n583.characters='Falta pagar';
      F.appendChild(n583);}
    {const n584=figma.createText();
      n584.fontName=FB;
      n584.fontSize=13.0;
      n584.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n584.x=429.2; n584.y=1074;
      n584.characters='R$ 10,00';
      F.appendChild(n584);}
    {const n585=figma.createText();
      n585.fontName=FR;
      n585.fontSize=13.0;
      n585.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n585.x=1018.7; n585.y=1066;
      n585.characters='Limpar';
      F.appendChild(n585);}
    {const n586=figma.createFrame();
      n586.x=1083.2; n586.y=1057.0;
      n586.resize(Math.max(1,168.8),Math.max(1,34));
      n586.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n586.clipsContent=false;
      n586.cornerRadius=4.0;
      F.appendChild(n586);
      {const n587=figma.createText();
        n587.fontName=FB;
        n587.fontSize=13.0;
        n587.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n587.x=39; n587.y=9;
        n587.characters='Cadastrar Pedido';
        n586.appendChild(n587);}
    }
    {const n588=figma.createText();
      n588.fontName=FR;
      n588.fontSize=11.0;
      n588.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n588.x=30; n588.y=2843;
      n588.characters='Pedido #25727 · campo "Outros" preenchido · R$ 519,27';
      F.appendChild(n588);}
    {const n589=figma.createText();
      n589.fontName=FR;
      n589.fontSize=11.0;
      n589.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n589.x=1241.8; n589.y=2844;
      n589.characters='v4.2';
      F.appendChild(n589);}
  }
  await Promise.resolve();

  // ── A4: Modalidade FABRICA — endereço oculto
  {const F=figma.createFrame();
    F.x=4080; F.y=0;
    F.resize(1280,2308);
    F.name='A4 — Modalidade FABRICA — endereço oculto';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n590=figma.createFrame();
      n590.x=0.0; n590.y=0.0;
      n590.resize(Math.max(1,1280),Math.max(1,38));
      n590.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n590.clipsContent=false;
      F.appendChild(n590);
      {const n591=figma.createFrame();
        n591.x=14.0; n591.y=8.0;
        n591.resize(Math.max(1,22),Math.max(1,22));
        n591.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n591.clipsContent=false;
        n591.cornerRadius=5.0;
        n590.appendChild(n591);
        {const n592=figma.createText();
          n592.fontName=FB;
          n592.fontSize=10.0;
          n592.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n592.x=2.5; n592.y=5;
          n592.characters='MC';
          n591.appendChild(n592);}
      }
      {const n593=figma.createText();
        n593.fontName=FR;
        n593.fontSize=13.0;
        n593.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n593.x=44; n593.y=11;
        n593.characters='Maria Cacau — Gestão de Pedidos';
        n590.appendChild(n593);}
    }
    {const n594=figma.createFrame();
      n594.x=0.0; n594.y=38.0;
      n594.resize(Math.max(1,220),Math.max(1,2242));
      n594.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n594.clipsContent=false;
      F.appendChild(n594);
      {const n595=figma.createFrame();
        n595.x=14.0; n595.y=14.0;
        n595.resize(Math.max(1,38),Math.max(1,38));
        n595.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n595.clipsContent=false;
        n595.cornerRadius=8.0;
        n594.appendChild(n595);
        {const n596=figma.createText();
          n596.fontName=FB;
          n596.fontSize=14.0;
          n596.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n596.x=7.5; n596.y=10.5;
          n596.characters='MC';
          n595.appendChild(n596);}
      }
      {const n597=figma.createText();
        n597.fontName=FB;
        n597.fontSize=13.0;
        n597.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n597.x=62; n597.y=18.5;
        n597.characters='Maria Cacau';
        n594.appendChild(n597);}
      {const n598=figma.createText();
        n598.fontName=FR;
        n598.fontSize=10.0;
        n598.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n598.x=62; n598.y=35.5;
        n598.characters='Gestão de Pedidos';
        n594.appendChild(n598);}
      {const n599=figma.createText();
        n599.fontName=FB;
        n599.fontSize=10.0;
        n599.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n599.x=16; n599.y=85;
        n599.characters='Pedidos';
        n594.appendChild(n599);}
      {const n600=figma.createFrame();
        n600.x=8.0; n600.y=101.0;
        n600.resize(Math.max(1,204),Math.max(1,34));
        n600.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n600.clipsContent=false;
        n600.cornerRadius=8.0;
        n594.appendChild(n600);
        {const n601=figma.createText();
          n601.fontName=FB;
          n601.fontSize=13.0;
          n601.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n601.x=38; n601.y=9;
          n601.characters='Novo Pedido';
          n600.appendChild(n601);}
        {const n602=figma.createFrame();
          n602.x=160.4; n602.y=10.5;
          n602.resize(Math.max(1,33.6),Math.max(1,13));
          n602.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n602.clipsContent=false;
          n602.cornerRadius=8.0;
          n600.appendChild(n602);
          {const n603=figma.createText();
            n603.fontName=FB;
            n603.fontSize=9.0;
            n603.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n603.x=5; n603.y=1;
            n603.characters='Novo';
            n602.appendChild(n603);}
        }
      }
      {const n604=figma.createText();
        n604.fontName=FB;
        n604.fontSize=10.0;
        n604.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n604.x=16; n604.y=145;
        n604.characters='Consultas';
        n594.appendChild(n604);}
      {const n605=figma.createText();
        n605.fontName=FR;
        n605.fontSize=13.0;
        n605.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n605.x=46; n605.y=170;
        n605.characters='Produtos';
        n594.appendChild(n605);}
      {const n606=figma.createText();
        n606.fontName=FR;
        n606.fontSize=13.0;
        n606.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n606.x=46; n606.y=206;
        n606.characters='Entregas';
        n594.appendChild(n606);}
      {const n607=figma.createText();
        n607.fontName=FR;
        n607.fontSize=13.0;
        n607.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n607.x=46; n607.y=242;
        n607.characters='Verificar CPF';
        n594.appendChild(n607);}
      {const n608=figma.createText();
        n608.fontName=FB;
        n608.fontSize=10.0;
        n608.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n608.x=16; n608.y=277;
        n608.characters='Em breve';
        n594.appendChild(n608);}
      {const n609=figma.createText();
        n609.fontName=FR;
        n609.fontSize=13.0;
        n609.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n609.x=46; n609.y=302;
        n609.characters='Frete por CEP';
        n594.appendChild(n609);}
      {const n610=figma.createFrame();
        n610.x=169.2; n610.y=303.5;
        n610.resize(Math.max(1,32.8),Math.max(1,13));
        n610.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n610.clipsContent=false;
        n610.cornerRadius=8.0;
        n610.opacity=0.36;
        n594.appendChild(n610);
        {const n611=figma.createText();
          n611.fontName=FB;
          n611.fontSize=9.0;
          n611.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n611.x=5; n611.y=1;
          n611.characters='Logo';
          n610.appendChild(n611);}
      }
      {const n612=figma.createText();
        n612.fontName=FR;
        n612.fontSize=13.0;
        n612.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n612.x=46; n612.y=338;
        n612.characters='Nota Fiscal';
        n594.appendChild(n612);}
      {const n613=figma.createFrame();
        n613.x=169.2; n613.y=339.5;
        n613.resize(Math.max(1,32.8),Math.max(1,13));
        n613.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n613.clipsContent=false;
        n613.cornerRadius=8.0;
        n613.opacity=0.36;
        n594.appendChild(n613);
        {const n614=figma.createText();
          n614.fontName=FB;
          n614.fontSize=9.0;
          n614.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n614.x=5; n614.y=1;
          n614.characters='Logo';
          n613.appendChild(n614);}
      }
    }
    {const n615=figma.createText();
      n615.fontName=FB;
      n615.fontSize=20.0;
      n615.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n615.x=248; n615.y=62;
      n615.characters='Novo Pedido';
      F.appendChild(n615);}
    {const n616=figma.createText();
      n616.fontName=FR;
      n616.fontSize=13.0;
      n616.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n616.x=248; n616.y=88;
      n616.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n616);}
    {const n617=figma.createFrame();
      n617.x=265.0; n617.y=133.0;
      n617.resize(Math.max(1,20),Math.max(1,20));
      n617.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n617.clipsContent=false;
      n617.cornerRadius=50.0;
      F.appendChild(n617);
      {const n618=figma.createText();
        n618.fontName=FB;
        n618.fontSize=9.0;
        n618.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n618.x=7.6; n618.y=4.5;
        n618.characters='1';
        n617.appendChild(n618);}
    }
    {const n619=figma.createText();
      n619.fontName=FB;
      n619.fontSize=13.0;
      n619.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n619.x=295; n619.y=135;
      n619.characters='Identificação do Pedido';
      F.appendChild(n619);}
    {const n620=figma.createText();
      n620.fontName=FR;
      n620.fontSize=11.0;
      n620.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n620.x=265; n620.y=178;
      n620.characters='Nº Pedido';
      F.appendChild(n620);}
    {const n621=figma.createText();
      n621.fontName=FR;
      n621.fontSize=11.0;
      n621.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n621.x=319.2; n621.y=178;
      n621.characters='*';
      F.appendChild(n621);}
    {const n622=figma.createText();
      n622.fontName=FR;
      n622.fontSize=13.0;
      n622.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n622.x=274; n622.y=201.5;
      n622.characters='25868';
      F.appendChild(n622);}
    {const n623=figma.createText();
      n623.fontName=FR;
      n623.fontSize=11.0;
      n623.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n623.x=757; n623.y=178;
      n623.characters='Como Conheceu';
      F.appendChild(n623);}
    {const n624=figma.createText();
      n624.fontName=FR;
      n624.fontSize=13.0;
      n624.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n624.x=766; n624.y=201.5;
      n624.characters='Cliente';
      F.appendChild(n624);}
    {const n625=figma.createFrame();
      n625.x=265.0; n625.y=260.0;
      n625.resize(Math.max(1,20),Math.max(1,20));
      n625.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n625.clipsContent=false;
      n625.cornerRadius=50.0;
      F.appendChild(n625);
      {const n626=figma.createText();
        n626.fontName=FB;
        n626.fontSize=9.0;
        n626.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n626.x=7; n626.y=4.5;
        n626.characters='2';
        n625.appendChild(n626);}
    }
    {const n627=figma.createText();
      n627.fontName=FB;
      n627.fontSize=13.0;
      n627.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n627.x=295; n627.y=262;
      n627.characters='Comprador';
      F.appendChild(n627);}
    {const n628=figma.createText();
      n628.fontName=FR;
      n628.fontSize=11.0;
      n628.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n628.x=265; n628.y=305;
      n628.characters='Nome do Comprador';
      F.appendChild(n628);}
    {const n629=figma.createText();
      n629.fontName=FR;
      n629.fontSize=11.0;
      n629.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n629.x=378.2; n629.y=305;
      n629.characters='*';
      F.appendChild(n629);}
    {const n630=figma.createText();
      n630.fontName=FR;
      n630.fontSize=13.0;
      n630.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n630.x=274; n630.y=328.5;
      n630.characters='Tacia';
      F.appendChild(n630);}
    {const n631=figma.createText();
      n631.fontName=FR;
      n631.fontSize=11.0;
      n631.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n631.x=265; n631.y=361;
      n631.characters='Parentesco';
      F.appendChild(n631);}
    {const n632=figma.createText();
      n632.fontName=FR;
      n632.fontSize=11.0;
      n632.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n632.x=757; n632.y=361;
      n632.characters='Telefone';
      F.appendChild(n632);}
    {const n633=figma.createText();
      n633.fontName=FR;
      n633.fontSize=11.0;
      n633.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n633.x=803.6; n633.y=361;
      n633.characters='*';
      F.appendChild(n633);}
    {const n634=figma.createText();
      n634.fontName=FR;
      n634.fontSize=11.0;
      n634.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n634.x=265; n634.y=417;
      n634.characters='CPF';
      F.appendChild(n634);}
    {const n635=figma.createText();
      n635.fontName=FR;
      n635.fontSize=11.0;
      n635.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n635.x=757; n635.y=417;
      n635.characters='Email';
      F.appendChild(n635);}
    {const n636=figma.createFrame();
      n636.x=265.0; n636.y=499.0;
      n636.resize(Math.max(1,20),Math.max(1,20));
      n636.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n636.clipsContent=false;
      n636.cornerRadius=50.0;
      F.appendChild(n636);
      {const n637=figma.createText();
        n637.fontName=FB;
        n637.fontSize=9.0;
        n637.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n637.x=6.9; n637.y=4.5;
        n637.characters='3';
        n636.appendChild(n637);}
    }
    {const n638=figma.createText();
      n638.fontName=FB;
      n638.fontSize=13.0;
      n638.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n638.x=295; n638.y=501;
      n638.characters='Presenteado & Evento';
      F.appendChild(n638);}
    {const n639=figma.createText();
      n639.fontName=FR;
      n639.fontSize=11.0;
      n639.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n639.x=265; n639.y=544;
      n639.characters='Nome do Presenteado';
      F.appendChild(n639);}
    {const n640=figma.createText();
      n640.fontName=FR;
      n640.fontSize=11.0;
      n640.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n640.x=265; n640.y=600;
      n640.characters='Sexo';
      F.appendChild(n640);}
    {const n641=figma.createText();
      n641.fontName=FR;
      n641.fontSize=11.0;
      n641.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n641.x=289.5; n641.y=624.5;
      n641.characters='Feminino';
      F.appendChild(n641);}
    {const n642=figma.createText();
      n642.fontName=FR;
      n642.fontSize=11.0;
      n642.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n642.x=382.09999999999997; n642.y=624.5;
      n642.characters='Masculino';
      F.appendChild(n642);}
    {const n643=figma.createText();
      n643.fontName=FR;
      n643.fontSize=11.0;
      n643.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n643.x=482.7; n643.y=624.5;
      n643.characters='Gêmeas';
      F.appendChild(n643);}
    {const n644=figma.createText();
      n644.fontName=FR;
      n644.fontSize=11.0;
      n644.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n644.x=577.9000000000001; n644.y=624.5;
      n644.characters='Gêmeos';
      F.appendChild(n644);}
    {const n645=figma.createText();
      n645.fontName=FR;
      n645.fontSize=11.0;
      n645.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n645.x=670.2; n645.y=624.5;
      n645.characters='Não sabe';
      F.appendChild(n645);}
    {const n646=figma.createText();
      n646.fontName=FR;
      n646.fontSize=11.0;
      n646.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n646.x=757; n646.y=600;
      n646.characters='Tipo de Evento';
      F.appendChild(n646);}
    {const n647=figma.createText();
      n647.fontName=FR;
      n647.fontSize=11.0;
      n647.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n647.x=265; n647.y=656;
      n647.characters='Data do Evento';
      F.appendChild(n647);}
    {const n648=figma.createFrame();
      n648.x=265.0; n648.y=738.0;
      n648.resize(Math.max(1,20),Math.max(1,20));
      n648.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n648.clipsContent=false;
      n648.cornerRadius=50.0;
      F.appendChild(n648);
      {const n649=figma.createText();
        n649.fontName=FB;
        n649.fontSize=9.0;
        n649.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n649.x=6.8; n649.y=4.5;
        n649.characters='4';
        n648.appendChild(n649);}
    }
    {const n650=figma.createText();
      n650.fontName=FB;
      n650.fontSize=13.0;
      n650.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n650.x=295; n650.y=740;
      n650.characters='Personalização';
      F.appendChild(n650);}
    {const n651=figma.createText();
      n651.fontName=FR;
      n651.fontSize=11.0;
      n651.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n651.x=1138; n651.y=741.5;
      n651.characters='Arte & embalagem';
      F.appendChild(n651);}
    {const n652=figma.createText();
      n652.fontName=FR;
      n652.fontSize=11.0;
      n652.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n652.x=265; n652.y=783;
      n652.characters='Nome da Etiqueta';
      F.appendChild(n652);}
    {const n653=figma.createText();
      n653.fontName=FR;
      n653.fontSize=11.0;
      n653.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n653.x=757; n653.y=783;
      n653.characters='Tema da Etiqueta';
      F.appendChild(n653);}
    {const n654=figma.createText();
      n654.fontName=FR;
      n654.fontSize=11.0;
      n654.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n654.x=265; n654.y=839;
      n654.characters='Nome na Caixa';
      F.appendChild(n654);}
    {const n655=figma.createText();
      n655.fontName=FR;
      n655.fontSize=11.0;
      n655.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n655.x=757; n655.y=839;
      n655.characters='Arte / Tecido da Caixa';
      F.appendChild(n655);}
    {const n656=figma.createText();
      n656.fontName=FR;
      n656.fontSize=11.0;
      n656.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n656.x=265; n656.y=895;
      n656.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n656);}
    {const n657=figma.createText();
      n657.fontName=FR;
      n657.fontSize=13.0;
      n657.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n657.x=274; n657.y=918.5;
      n657.characters='0';
      F.appendChild(n657);}
    {const n658=figma.createFrame();
      n658.x=265.0; n658.y=977.0;
      n658.resize(Math.max(1,20),Math.max(1,20));
      n658.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n658.clipsContent=false;
      n658.cornerRadius=50.0;
      F.appendChild(n658);
      {const n659=figma.createText();
        n659.fontName=FB;
        n659.fontSize=9.0;
        n659.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n659.x=6.9; n659.y=4.5;
        n659.characters='5';
        n658.appendChild(n659);}
    }
    {const n660=figma.createText();
      n660.fontName=FB;
      n660.fontSize=13.0;
      n660.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n660.x=295; n660.y=979;
      n660.characters='Produtos';
      F.appendChild(n660);}
    {const n661=figma.createText();
      n661.fontName=FR;
      n661.fontSize=11.0;
      n661.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n661.x=1203.9; n661.y=980.5;
      n661.characters='1 item';
      F.appendChild(n661);}
    {const n662=figma.createText();
      n662.fontName=FB;
      n662.fontSize=10.0;
      n662.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n662.x=265; n662.y=1022;
      n662.characters='Produto';
      F.appendChild(n662);}
    {const n663=figma.createText();
      n663.fontName=FB;
      n663.fontSize=10.0;
      n663.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n663.x=937; n663.y=1022;
      n663.characters='Qtd';
      F.appendChild(n663);}
    {const n664=figma.createText();
      n664.fontName=FB;
      n664.fontSize=10.0;
      n664.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n664.x=1007; n664.y=1022;
      n664.characters='R$ Unit.';
      F.appendChild(n664);}
    {const n665=figma.createText();
      n665.fontName=FB;
      n665.fontSize=10.0;
      n665.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n665.x=1113; n665.y=1022;
      n665.characters='Total';
      F.appendChild(n665);}
    {const n666=figma.createText();
      n666.fontName=FR;
      n666.fontSize=13.0;
      n666.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n666.x=274; n666.y=1054.5;
      n666.characters='(NAT211) Brownie 6x6 na caixinha + Cinta Personalizada';
      F.appendChild(n666);}
    {const n667=figma.createText();
      n667.fontName=FR;
      n667.fontSize=13.0;
      n667.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n667.x=946; n667.y=1054.5;
      n667.characters='15';
      F.appendChild(n667);}
    {const n668=figma.createText();
      n668.fontName=FR;
      n668.fontSize=13.0;
      n668.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n668.x=1016; n668.y=1054.5;
      n668.characters='13,99';
      F.appendChild(n668);}
    {const n669=figma.createText();
      n669.fontName=FR;
      n669.fontSize=12.0;
      n669.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n669.x=1123; n669.y=1056;
      n669.characters='R$ 209,85';
      F.appendChild(n669);}
    {const n670=figma.createText();
      n670.fontName=FR;
      n670.fontSize=12.0;
      n670.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n670.x=292; n670.y=1089.5;
      n670.characters='Adicionar produto';
      F.appendChild(n670);}
    {const n671=figma.createText();
      n671.fontName=FR;
      n671.fontSize=11.0;
      n671.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n671.x=265; n671.y=1110;
      n671.characters='Outros (descrição livre)';
      F.appendChild(n671);}
    {const n672=figma.createText();
      n672.fontName=FR;
      n672.fontSize=13.0;
      n672.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n672.x=274; n672.y=1133.5;
      n672.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n672);}
    {const n673=figma.createText();
      n673.fontName=FR;
      n673.fontSize=11.0;
      n673.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n673.x=1000.4; n673.y=1174;
      n673.characters='Subtotal dos produtos';
      F.appendChild(n673);}
    {const n674=figma.createText();
      n674.fontName=FB;
      n674.fontSize=13.0;
      n674.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n674.x=1170.7; n674.y=1174;
      n674.characters='R$ 209,85';
      F.appendChild(n674);}
    {const n675=figma.createFrame();
      n675.x=265.0; n675.y=1224.0;
      n675.resize(Math.max(1,20),Math.max(1,20));
      n675.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n675.clipsContent=false;
      n675.cornerRadius=50.0;
      F.appendChild(n675);
      {const n676=figma.createText();
        n676.fontName=FB;
        n676.fontSize=9.0;
        n676.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n676.x=6.8; n676.y=4.5;
        n676.characters='6';
        n675.appendChild(n676);}
    }
    {const n677=figma.createText();
      n677.fontName=FB;
      n677.fontSize=13.0;
      n677.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n677.x=295; n677.y=1226;
      n677.characters='Financeiro';
      F.appendChild(n677);}
    {const n678=figma.createText();
      n678.fontName=FR;
      n678.fontSize=11.0;
      n678.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n678.x=265; n678.y=1269;
      n678.characters='Desconto (R$)';
      F.appendChild(n678);}
    {const n679=figma.createText();
      n679.fontName=FR;
      n679.fontSize=13.0;
      n679.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n679.x=274; n679.y=1292.5;
      n679.characters='-9.85';
      F.appendChild(n679);}
    {const n680=figma.createText();
      n680.fontName=FR;
      n680.fontSize=11.0;
      n680.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n680.x=757; n680.y=1269;
      n680.characters='Frete (R$)';
      F.appendChild(n680);}
    {const n681=figma.createText();
      n681.fontName=FR;
      n681.fontSize=13.0;
      n681.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n681.x=766; n681.y=1292.5;
      n681.characters='0,00';
      F.appendChild(n681);}
    {const n682=figma.createText();
      n682.fontName=FR;
      n682.fontSize=11.0;
      n682.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n682.x=265; n682.y=1325;
      n682.characters='Total do Pedido';
      F.appendChild(n682);}
    {const n683=figma.createText();
      n683.fontName=FB;
      n683.fontSize=20.0;
      n683.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n683.x=281; n683.y=1352.5;
      n683.characters='R$ 219,70';
      F.appendChild(n683);}
    {const n684=figma.createFrame();
      n684.x=265.0; n684.y=1421.0;
      n684.resize(Math.max(1,20),Math.max(1,20));
      n684.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n684.clipsContent=false;
      n684.cornerRadius=50.0;
      F.appendChild(n684);
      {const n685=figma.createText();
        n685.fontName=FB;
        n685.fontSize=9.0;
        n685.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n685.x=7.2; n685.y=4.5;
        n685.characters='7';
        n684.appendChild(n685);}
    }
    {const n686=figma.createText();
      n686.fontName=FB;
      n686.fontSize=13.0;
      n686.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n686.x=295; n686.y=1423;
      n686.characters='Pagamento';
      F.appendChild(n686);}
    {const n687=figma.createText();
      n687.fontName=FB;
      n687.fontSize=10.0;
      n687.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n687.x=265; n687.y=1466;
      n687.characters='Forma';
      F.appendChild(n687);}
    {const n688=figma.createText();
      n688.fontName=FB;
      n688.fontSize=10.0;
      n688.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n688.x=411; n688.y=1466;
      n688.characters='Data Pgto';
      F.appendChild(n688);}
    {const n689=figma.createText();
      n689.fontName=FB;
      n689.fontSize=10.0;
      n689.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n689.x=541; n689.y=1466;
      n689.characters='Valor (R$)';
      F.appendChild(n689);}
    {const n690=figma.createText();
      n690.fontName=FB;
      n690.fontSize=10.0;
      n690.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n690.x=657; n690.y=1466;
      n690.characters='Confirm.';
      F.appendChild(n690);}
    {const n691=figma.createText();
      n691.fontName=FR;
      n691.fontSize=12.0;
      n691.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n691.x=274; n691.y=1499;
      n691.characters='Inter';
      F.appendChild(n691);}
    {const n692=figma.createText();
      n692.fontName=FR;
      n692.fontSize=13.0;
      n692.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n692.x=420; n692.y=1498.5;
      n692.characters='2025-12-17';
      F.appendChild(n692);}
    {const n693=figma.createText();
      n693.fontName=FR;
      n693.fontSize=13.0;
      n693.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n693.x=550; n693.y=1498.5;
      n693.characters='200,00';
      F.appendChild(n693);}
    {const n694=figma.createText();
      n694.fontName=FR;
      n694.fontSize=13.3;
      n694.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n694.x=699; n694.y=1498;
      n694.characters='on';
      F.appendChild(n694);}
    {const n695=figma.createText();
      n695.fontName=FR;
      n695.fontSize=12.0;
      n695.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n695.x=292; n695.y=1533.5;
      n695.characters='Adicionar parcela';
      F.appendChild(n695);}
    {const n696=figma.createText();
      n696.fontName=FR;
      n696.fontSize=12.0;
      n696.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n696.x=280; n696.y=1579;
      n696.characters='Total do pedido';
      F.appendChild(n696);}
    {const n697=figma.createText();
      n697.fontName=FR;
      n697.fontSize=12.0;
      n697.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n697.x=1160.6; n697.y=1580.5;
      n697.characters='R$ 219,70';
      F.appendChild(n697);}
    {const n698=figma.createText();
      n698.fontName=FR;
      n698.fontSize=12.0;
      n698.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n698.x=280; n698.y=1599;
      n698.characters='Total pago';
      F.appendChild(n698);}
    {const n699=figma.createText();
      n699.fontName=FR;
      n699.fontSize=12.0;
      n699.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n699.x=1160.6; n699.y=1600.5;
      n699.characters='R$ 200,00';
      F.appendChild(n699);}
    {const n700=figma.createText();
      n700.fontName=FB;
      n700.fontSize=12.0;
      n700.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n700.x=280; n700.y=1619.5;
      n700.characters='Falta pagar';
      F.appendChild(n700);}
    {const n701=figma.createText();
      n701.fontName=FB;
      n701.fontSize=12.0;
      n701.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n701.x=1159.2; n701.y=1621;
      n701.characters='R$ 19,70';
      F.appendChild(n701);}
    {const n702=figma.createText();
      n702.fontName=FR;
      n702.fontSize=13.3;
      n702.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n702.x=289; n702.y=1652.5;
      n702.characters='on';
      F.appendChild(n702);}
    {const n703=figma.createText();
      n703.fontName=FR;
      n703.fontSize=12.0;
      n703.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n703.x=300; n703.y=1652;
      n703.characters='Vai pagar na retirada';
      F.appendChild(n703);}
    {const n704=figma.createFrame();
      n704.x=265.0; n704.y=1716.0;
      n704.resize(Math.max(1,20),Math.max(1,20));
      n704.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n704.clipsContent=false;
      n704.cornerRadius=50.0;
      F.appendChild(n704);
      {const n705=figma.createText();
        n705.fontName=FB;
        n705.fontSize=9.0;
        n705.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n705.x=6.8; n705.y=4.5;
        n705.characters='8';
        n704.appendChild(n705);}
    }
    {const n706=figma.createText();
      n706.fontName=FB;
      n706.fontSize=13.0;
      n706.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n706.x=295; n706.y=1718;
      n706.characters='Entrega';
      F.appendChild(n706);}
    {const n707=figma.createText();
      n707.fontName=FR;
      n707.fontSize=11.0;
      n707.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n707.x=265; n707.y=1761;
      n707.characters='Data de Entrega';
      F.appendChild(n707);}
    {const n708=figma.createText();
      n708.fontName=FR;
      n708.fontSize=11.0;
      n708.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n708.x=352.7; n708.y=1761;
      n708.characters='*';
      F.appendChild(n708);}
    {const n709=figma.createText();
      n709.fontName=FR;
      n709.fontSize=13.0;
      n709.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n709.x=274; n709.y=1784.5;
      n709.characters='2025-12-20';
      F.appendChild(n709);}
    {const n710=figma.createText();
      n710.fontName=FR;
      n710.fontSize=11.0;
      n710.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n710.x=757; n710.y=1761;
      n710.characters='Modalidade';
      F.appendChild(n710);}
    {const n711=figma.createText();
      n711.fontName=FR;
      n711.fontSize=11.0;
      n711.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n711.x=820.4; n711.y=1761;
      n711.characters='*';
      F.appendChild(n711);}
    {const n712=figma.createText();
      n712.fontName=FR;
      n712.fontSize=13.0;
      n712.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n712.x=766; n712.y=1784.5;
      n712.characters='FABRICA';
      F.appendChild(n712);}
    {const n713=figma.createText();
      n713.fontName=FB;
      n713.fontSize=10.0;
      n713.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n713.x=265; n713.y=1822.5;
      n713.characters='Destinatário';
      F.appendChild(n713);}
    {const n714=figma.createText();
      n714.fontName=FR;
      n714.fontSize=13.3;
      n714.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n714.x=1083.7; n714.y=1821.5;
      n714.characters='on';
      F.appendChild(n714);}
    {const n715=figma.createText();
      n715.fontName=FR;
      n715.fontSize=12.0;
      n715.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n715.x=1093.7; n715.y=1821;
      n715.characters='Mesmo que o comprador';
      F.appendChild(n715);}
    {const n716=figma.createText();
      n716.fontName=FR;
      n716.fontSize=11.0;
      n716.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n716.x=265; n716.y=1855;
      n716.characters='Nome do Destinatário';
      F.appendChild(n716);}
    {const n717=figma.createText();
      n717.fontName=FR;
      n717.fontSize=11.0;
      n717.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n717.x=383.5; n717.y=1855;
      n717.characters='*';
      F.appendChild(n717);}
    {const n718=figma.createText();
      n718.fontName=FR;
      n718.fontSize=13.0;
      n718.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n718.x=274; n718.y=1878.5;
      n718.characters='Tacia';
      F.appendChild(n718);}
    {const n719=figma.createText();
      n719.fontName=FR;
      n719.fontSize=11.0;
      n719.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n719.x=265; n719.y=1911;
      n719.characters='Telefone';
      F.appendChild(n719);}
    {const n720=figma.createText();
      n720.fontName=FR;
      n720.fontSize=11.0;
      n720.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n720.x=757; n720.y=1911;
      n720.characters='CPF';
      F.appendChild(n720);}
    {const n721=figma.createText();
      n721.fontName=FR;
      n721.fontSize=11.0;
      n721.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n721.x=265; n721.y=1967;
      n721.characters='Email';
      F.appendChild(n721);}
    {const n722=figma.createText();
      n722.fontName=FB;
      n722.fontSize=10.0;
      n722.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n722.x=265; n722.y=2027;
      n722.characters='Observações';
      F.appendChild(n722);}
    {const n723=figma.createText();
      n723.fontName=FR;
      n723.fontSize=11.0;
      n723.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n723.x=265; n723.y=2058;
      n723.characters='Obs. Fábrica';
      F.appendChild(n723);}
    {const n724=figma.createText();
      n724.fontName=FR;
      n724.fontSize=11.0;
      n724.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n724.x=757; n724.y=2058;
      n724.characters='Info Motoboy';
      F.appendChild(n724);}
    {const n725=figma.createText();
      n725.fontName=FB;
      n725.fontSize=9.0;
      n725.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n725.x=271.8; n725.y=2172.5;
      n725.characters='9';
      F.appendChild(n725);}
    {const n726=figma.createText();
      n726.fontName=FR;
      n726.fontSize=12.0;
      n726.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n726.x=295; n726.y=2170.5;
      n726.characters='Controle Interno';
      F.appendChild(n726);}
    {const n727=figma.createText();
      n727.fontName=FR;
      n727.fontSize=11.0;
      n727.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n727.x=1088.2; n727.y=2171.5;
      n727.characters='Uso interno da operação';
      F.appendChild(n727);}
    {const n728=figma.createText();
      n728.fontName=FR;
      n728.fontSize=10.0;
      n728.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n728.x=1225.1; n728.y=2174.1;
      n728.characters='▼';
      F.appendChild(n728);}
    {const n729=figma.createText();
      n729.fontName=FR;
      n729.fontSize=10.0;
      n729.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n729.x=248; n729.y=1060;
      n729.characters='Pedido';
      F.appendChild(n729);}
    {const n730=figma.createText();
      n730.fontName=FB;
      n730.fontSize=13.0;
      n730.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n730.x=248; n730.y=1074;
      n730.characters='#25868';
      F.appendChild(n730);}
    {const n731=figma.createText();
      n731.fontName=FR;
      n731.fontSize=10.0;
      n731.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n731.x=327.9; n731.y=1060;
      n731.characters='Total';
      F.appendChild(n731);}
    {const n732=figma.createText();
      n732.fontName=FB;
      n732.fontSize=13.0;
      n732.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n732.x=327.9; n732.y=1074;
      n732.characters='R$ 219,70';
      F.appendChild(n732);}
    {const n733=figma.createText();
      n733.fontName=FR;
      n733.fontSize=10.0;
      n733.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n733.x=429.2; n733.y=1060;
      n733.characters='Falta pagar';
      F.appendChild(n733);}
    {const n734=figma.createText();
      n734.fontName=FB;
      n734.fontSize=13.0;
      n734.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n734.x=429.2; n734.y=1074;
      n734.characters='R$ 19,70';
      F.appendChild(n734);}
    {const n735=figma.createText();
      n735.fontName=FR;
      n735.fontSize=13.0;
      n735.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n735.x=1018.7; n735.y=1066;
      n735.characters='Limpar';
      F.appendChild(n735);}
    {const n736=figma.createFrame();
      n736.x=1083.2; n736.y=1057.0;
      n736.resize(Math.max(1,168.8),Math.max(1,34));
      n736.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n736.clipsContent=false;
      n736.cornerRadius=4.0;
      F.appendChild(n736);
      {const n737=figma.createText();
        n737.fontName=FB;
        n737.fontSize=13.0;
        n737.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n737.x=39; n737.y=9;
        n737.characters='Cadastrar Pedido';
        n736.appendChild(n737);}
    }
    {const n738=figma.createText();
      n738.fontName=FR;
      n738.fontSize=11.0;
      n738.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n738.x=30; n738.y=2288;
      n738.characters='Pedido #25868 · FABRICA · sem endereço necessário';
      F.appendChild(n738);}
    {const n739=figma.createText();
      n739.fontName=FR;
      n739.fontSize=11.0;
      n739.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n739.x=1241.8; n739.y=2289;
      n739.characters='v4.2';
      F.appendChild(n739);}
  }
  await Promise.resolve();

  // ── A5: Destinatário diferente do comprador
  {const F=figma.createFrame();
    F.x=5440; F.y=0;
    F.resize(1280,2567);
    F.name='A5 — Destinatário diferente do comprador';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n740=figma.createFrame();
      n740.x=0.0; n740.y=0.0;
      n740.resize(Math.max(1,1280),Math.max(1,38));
      n740.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n740.clipsContent=false;
      F.appendChild(n740);
      {const n741=figma.createFrame();
        n741.x=14.0; n741.y=8.0;
        n741.resize(Math.max(1,22),Math.max(1,22));
        n741.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n741.clipsContent=false;
        n741.cornerRadius=5.0;
        n740.appendChild(n741);
        {const n742=figma.createText();
          n742.fontName=FB;
          n742.fontSize=10.0;
          n742.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n742.x=2.5; n742.y=5;
          n742.characters='MC';
          n741.appendChild(n742);}
      }
      {const n743=figma.createText();
        n743.fontName=FR;
        n743.fontSize=13.0;
        n743.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n743.x=44; n743.y=11;
        n743.characters='Maria Cacau — Gestão de Pedidos';
        n740.appendChild(n743);}
    }
    {const n744=figma.createFrame();
      n744.x=0.0; n744.y=38.0;
      n744.resize(Math.max(1,220),Math.max(1,2501));
      n744.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n744.clipsContent=false;
      F.appendChild(n744);
      {const n745=figma.createFrame();
        n745.x=14.0; n745.y=14.0;
        n745.resize(Math.max(1,38),Math.max(1,38));
        n745.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n745.clipsContent=false;
        n745.cornerRadius=8.0;
        n744.appendChild(n745);
        {const n746=figma.createText();
          n746.fontName=FB;
          n746.fontSize=14.0;
          n746.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n746.x=7.5; n746.y=10.5;
          n746.characters='MC';
          n745.appendChild(n746);}
      }
      {const n747=figma.createText();
        n747.fontName=FB;
        n747.fontSize=13.0;
        n747.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n747.x=62; n747.y=18.5;
        n747.characters='Maria Cacau';
        n744.appendChild(n747);}
      {const n748=figma.createText();
        n748.fontName=FR;
        n748.fontSize=10.0;
        n748.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n748.x=62; n748.y=35.5;
        n748.characters='Gestão de Pedidos';
        n744.appendChild(n748);}
      {const n749=figma.createText();
        n749.fontName=FB;
        n749.fontSize=10.0;
        n749.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n749.x=16; n749.y=85;
        n749.characters='Pedidos';
        n744.appendChild(n749);}
      {const n750=figma.createFrame();
        n750.x=8.0; n750.y=101.0;
        n750.resize(Math.max(1,204),Math.max(1,34));
        n750.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n750.clipsContent=false;
        n750.cornerRadius=8.0;
        n744.appendChild(n750);
        {const n751=figma.createText();
          n751.fontName=FB;
          n751.fontSize=13.0;
          n751.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n751.x=38; n751.y=9;
          n751.characters='Novo Pedido';
          n750.appendChild(n751);}
        {const n752=figma.createFrame();
          n752.x=160.4; n752.y=10.5;
          n752.resize(Math.max(1,33.6),Math.max(1,13));
          n752.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n752.clipsContent=false;
          n752.cornerRadius=8.0;
          n750.appendChild(n752);
          {const n753=figma.createText();
            n753.fontName=FB;
            n753.fontSize=9.0;
            n753.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n753.x=5; n753.y=1;
            n753.characters='Novo';
            n752.appendChild(n753);}
        }
      }
      {const n754=figma.createText();
        n754.fontName=FB;
        n754.fontSize=10.0;
        n754.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n754.x=16; n754.y=145;
        n754.characters='Consultas';
        n744.appendChild(n754);}
      {const n755=figma.createText();
        n755.fontName=FR;
        n755.fontSize=13.0;
        n755.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n755.x=46; n755.y=170;
        n755.characters='Produtos';
        n744.appendChild(n755);}
      {const n756=figma.createText();
        n756.fontName=FR;
        n756.fontSize=13.0;
        n756.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n756.x=46; n756.y=206;
        n756.characters='Entregas';
        n744.appendChild(n756);}
      {const n757=figma.createText();
        n757.fontName=FR;
        n757.fontSize=13.0;
        n757.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n757.x=46; n757.y=242;
        n757.characters='Verificar CPF';
        n744.appendChild(n757);}
      {const n758=figma.createText();
        n758.fontName=FB;
        n758.fontSize=10.0;
        n758.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n758.x=16; n758.y=277;
        n758.characters='Em breve';
        n744.appendChild(n758);}
      {const n759=figma.createText();
        n759.fontName=FR;
        n759.fontSize=13.0;
        n759.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n759.x=46; n759.y=302;
        n759.characters='Frete por CEP';
        n744.appendChild(n759);}
      {const n760=figma.createFrame();
        n760.x=169.2; n760.y=303.5;
        n760.resize(Math.max(1,32.8),Math.max(1,13));
        n760.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n760.clipsContent=false;
        n760.cornerRadius=8.0;
        n760.opacity=0.36;
        n744.appendChild(n760);
        {const n761=figma.createText();
          n761.fontName=FB;
          n761.fontSize=9.0;
          n761.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n761.x=5; n761.y=1;
          n761.characters='Logo';
          n760.appendChild(n761);}
      }
      {const n762=figma.createText();
        n762.fontName=FR;
        n762.fontSize=13.0;
        n762.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n762.x=46; n762.y=338;
        n762.characters='Nota Fiscal';
        n744.appendChild(n762);}
      {const n763=figma.createFrame();
        n763.x=169.2; n763.y=339.5;
        n763.resize(Math.max(1,32.8),Math.max(1,13));
        n763.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n763.clipsContent=false;
        n763.cornerRadius=8.0;
        n763.opacity=0.36;
        n744.appendChild(n763);
        {const n764=figma.createText();
          n764.fontName=FB;
          n764.fontSize=9.0;
          n764.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n764.x=5; n764.y=1;
          n764.characters='Logo';
          n763.appendChild(n764);}
      }
    }
    {const n765=figma.createText();
      n765.fontName=FB;
      n765.fontSize=20.0;
      n765.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n765.x=248; n765.y=62;
      n765.characters='Novo Pedido';
      F.appendChild(n765);}
    {const n766=figma.createText();
      n766.fontName=FR;
      n766.fontSize=13.0;
      n766.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n766.x=248; n766.y=88;
      n766.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n766);}
    {const n767=figma.createFrame();
      n767.x=265.0; n767.y=133.0;
      n767.resize(Math.max(1,20),Math.max(1,20));
      n767.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n767.clipsContent=false;
      n767.cornerRadius=50.0;
      F.appendChild(n767);
      {const n768=figma.createText();
        n768.fontName=FB;
        n768.fontSize=9.0;
        n768.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n768.x=7.6; n768.y=4.5;
        n768.characters='1';
        n767.appendChild(n768);}
    }
    {const n769=figma.createText();
      n769.fontName=FB;
      n769.fontSize=13.0;
      n769.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n769.x=295; n769.y=135;
      n769.characters='Identificação do Pedido';
      F.appendChild(n769);}
    {const n770=figma.createText();
      n770.fontName=FR;
      n770.fontSize=11.0;
      n770.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n770.x=265; n770.y=178;
      n770.characters='Nº Pedido';
      F.appendChild(n770);}
    {const n771=figma.createText();
      n771.fontName=FR;
      n771.fontSize=11.0;
      n771.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n771.x=319.2; n771.y=178;
      n771.characters='*';
      F.appendChild(n771);}
    {const n772=figma.createText();
      n772.fontName=FR;
      n772.fontSize=13.0;
      n772.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n772.x=274; n772.y=201.5;
      n772.characters='25856';
      F.appendChild(n772);}
    {const n773=figma.createText();
      n773.fontName=FR;
      n773.fontSize=11.0;
      n773.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n773.x=757; n773.y=178;
      n773.characters='Como Conheceu';
      F.appendChild(n773);}
    {const n774=figma.createFrame();
      n774.x=265.0; n774.y=260.0;
      n774.resize(Math.max(1,20),Math.max(1,20));
      n774.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n774.clipsContent=false;
      n774.cornerRadius=50.0;
      F.appendChild(n774);
      {const n775=figma.createText();
        n775.fontName=FB;
        n775.fontSize=9.0;
        n775.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n775.x=7; n775.y=4.5;
        n775.characters='2';
        n774.appendChild(n775);}
    }
    {const n776=figma.createText();
      n776.fontName=FB;
      n776.fontSize=13.0;
      n776.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n776.x=295; n776.y=262;
      n776.characters='Comprador';
      F.appendChild(n776);}
    {const n777=figma.createText();
      n777.fontName=FR;
      n777.fontSize=11.0;
      n777.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n777.x=265; n777.y=305;
      n777.characters='Nome do Comprador';
      F.appendChild(n777);}
    {const n778=figma.createText();
      n778.fontName=FR;
      n778.fontSize=11.0;
      n778.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n778.x=378.2; n778.y=305;
      n778.characters='*';
      F.appendChild(n778);}
    {const n779=figma.createText();
      n779.fontName=FR;
      n779.fontSize=13.0;
      n779.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n779.x=274; n779.y=328.5;
      n779.characters='Luana';
      F.appendChild(n779);}
    {const n780=figma.createText();
      n780.fontName=FR;
      n780.fontSize=11.0;
      n780.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n780.x=265; n780.y=361;
      n780.characters='Parentesco';
      F.appendChild(n780);}
    {const n781=figma.createText();
      n781.fontName=FR;
      n781.fontSize=11.0;
      n781.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n781.x=757; n781.y=361;
      n781.characters='Telefone';
      F.appendChild(n781);}
    {const n782=figma.createText();
      n782.fontName=FR;
      n782.fontSize=11.0;
      n782.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n782.x=803.6; n782.y=361;
      n782.characters='*';
      F.appendChild(n782);}
    {const n783=figma.createText();
      n783.fontName=FR;
      n783.fontSize=11.0;
      n783.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n783.x=265; n783.y=417;
      n783.characters='CPF';
      F.appendChild(n783);}
    {const n784=figma.createText();
      n784.fontName=FR;
      n784.fontSize=11.0;
      n784.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n784.x=757; n784.y=417;
      n784.characters='Email';
      F.appendChild(n784);}
    {const n785=figma.createFrame();
      n785.x=265.0; n785.y=499.0;
      n785.resize(Math.max(1,20),Math.max(1,20));
      n785.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n785.clipsContent=false;
      n785.cornerRadius=50.0;
      F.appendChild(n785);
      {const n786=figma.createText();
        n786.fontName=FB;
        n786.fontSize=9.0;
        n786.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n786.x=6.9; n786.y=4.5;
        n786.characters='3';
        n785.appendChild(n786);}
    }
    {const n787=figma.createText();
      n787.fontName=FB;
      n787.fontSize=13.0;
      n787.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n787.x=295; n787.y=501;
      n787.characters='Presenteado & Evento';
      F.appendChild(n787);}
    {const n788=figma.createText();
      n788.fontName=FR;
      n788.fontSize=11.0;
      n788.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n788.x=265; n788.y=544;
      n788.characters='Nome do Presenteado';
      F.appendChild(n788);}
    {const n789=figma.createText();
      n789.fontName=FR;
      n789.fontSize=11.0;
      n789.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n789.x=265; n789.y=600;
      n789.characters='Sexo';
      F.appendChild(n789);}
    {const n790=figma.createText();
      n790.fontName=FR;
      n790.fontSize=11.0;
      n790.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n790.x=289.5; n790.y=624.5;
      n790.characters='Feminino';
      F.appendChild(n790);}
    {const n791=figma.createText();
      n791.fontName=FR;
      n791.fontSize=11.0;
      n791.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n791.x=382.09999999999997; n791.y=624.5;
      n791.characters='Masculino';
      F.appendChild(n791);}
    {const n792=figma.createText();
      n792.fontName=FR;
      n792.fontSize=11.0;
      n792.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n792.x=482.7; n792.y=624.5;
      n792.characters='Gêmeas';
      F.appendChild(n792);}
    {const n793=figma.createText();
      n793.fontName=FR;
      n793.fontSize=11.0;
      n793.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n793.x=577.9000000000001; n793.y=624.5;
      n793.characters='Gêmeos';
      F.appendChild(n793);}
    {const n794=figma.createText();
      n794.fontName=FR;
      n794.fontSize=11.0;
      n794.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n794.x=670.2; n794.y=624.5;
      n794.characters='Não sabe';
      F.appendChild(n794);}
    {const n795=figma.createText();
      n795.fontName=FR;
      n795.fontSize=11.0;
      n795.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n795.x=757; n795.y=600;
      n795.characters='Tipo de Evento';
      F.appendChild(n795);}
    {const n796=figma.createText();
      n796.fontName=FR;
      n796.fontSize=11.0;
      n796.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n796.x=265; n796.y=656;
      n796.characters='Data do Evento';
      F.appendChild(n796);}
    {const n797=figma.createFrame();
      n797.x=265.0; n797.y=738.0;
      n797.resize(Math.max(1,20),Math.max(1,20));
      n797.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n797.clipsContent=false;
      n797.cornerRadius=50.0;
      F.appendChild(n797);
      {const n798=figma.createText();
        n798.fontName=FB;
        n798.fontSize=9.0;
        n798.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n798.x=6.8; n798.y=4.5;
        n798.characters='4';
        n797.appendChild(n798);}
    }
    {const n799=figma.createText();
      n799.fontName=FB;
      n799.fontSize=13.0;
      n799.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n799.x=295; n799.y=740;
      n799.characters='Personalização';
      F.appendChild(n799);}
    {const n800=figma.createText();
      n800.fontName=FR;
      n800.fontSize=11.0;
      n800.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n800.x=1138; n800.y=741.5;
      n800.characters='Arte & embalagem';
      F.appendChild(n800);}
    {const n801=figma.createText();
      n801.fontName=FR;
      n801.fontSize=11.0;
      n801.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n801.x=265; n801.y=783;
      n801.characters='Nome da Etiqueta';
      F.appendChild(n801);}
    {const n802=figma.createText();
      n802.fontName=FR;
      n802.fontSize=11.0;
      n802.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n802.x=757; n802.y=783;
      n802.characters='Tema da Etiqueta';
      F.appendChild(n802);}
    {const n803=figma.createText();
      n803.fontName=FR;
      n803.fontSize=11.0;
      n803.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n803.x=265; n803.y=839;
      n803.characters='Nome na Caixa';
      F.appendChild(n803);}
    {const n804=figma.createText();
      n804.fontName=FR;
      n804.fontSize=11.0;
      n804.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n804.x=757; n804.y=839;
      n804.characters='Arte / Tecido da Caixa';
      F.appendChild(n804);}
    {const n805=figma.createText();
      n805.fontName=FR;
      n805.fontSize=11.0;
      n805.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n805.x=265; n805.y=895;
      n805.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n805);}
    {const n806=figma.createText();
      n806.fontName=FR;
      n806.fontSize=13.0;
      n806.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n806.x=274; n806.y=918.5;
      n806.characters='0';
      F.appendChild(n806);}
    {const n807=figma.createFrame();
      n807.x=265.0; n807.y=977.0;
      n807.resize(Math.max(1,20),Math.max(1,20));
      n807.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n807.clipsContent=false;
      n807.cornerRadius=50.0;
      F.appendChild(n807);
      {const n808=figma.createText();
        n808.fontName=FB;
        n808.fontSize=9.0;
        n808.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n808.x=6.9; n808.y=4.5;
        n808.characters='5';
        n807.appendChild(n808);}
    }
    {const n809=figma.createText();
      n809.fontName=FB;
      n809.fontSize=13.0;
      n809.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n809.x=295; n809.y=979;
      n809.characters='Produtos';
      F.appendChild(n809);}
    {const n810=figma.createText();
      n810.fontName=FR;
      n810.fontSize=11.0;
      n810.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n810.x=1203.9; n810.y=980.5;
      n810.characters='1 item';
      F.appendChild(n810);}
    {const n811=figma.createText();
      n811.fontName=FB;
      n811.fontSize=10.0;
      n811.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n811.x=265; n811.y=1022;
      n811.characters='Produto';
      F.appendChild(n811);}
    {const n812=figma.createText();
      n812.fontName=FB;
      n812.fontSize=10.0;
      n812.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n812.x=937; n812.y=1022;
      n812.characters='Qtd';
      F.appendChild(n812);}
    {const n813=figma.createText();
      n813.fontName=FB;
      n813.fontSize=10.0;
      n813.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n813.x=1007; n813.y=1022;
      n813.characters='R$ Unit.';
      F.appendChild(n813);}
    {const n814=figma.createText();
      n814.fontName=FB;
      n814.fontSize=10.0;
      n814.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n814.x=1113; n814.y=1022;
      n814.characters='Total';
      F.appendChild(n814);}
    {const n815=figma.createText();
      n815.fontName=FR;
      n815.fontSize=13.0;
      n815.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n815.x=274; n815.y=1054.5;
      n815.characters='(NAT101) Chocotone 800g Brigadeiro Gourmet';
      F.appendChild(n815);}
    {const n816=figma.createText();
      n816.fontName=FR;
      n816.fontSize=13.0;
      n816.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n816.x=946; n816.y=1054.5;
      n816.characters='1';
      F.appendChild(n816);}
    {const n817=figma.createText();
      n817.fontName=FR;
      n817.fontSize=13.0;
      n817.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n817.x=1016; n817.y=1054.5;
      n817.characters='89,90';
      F.appendChild(n817);}
    {const n818=figma.createText();
      n818.fontName=FR;
      n818.fontSize=12.0;
      n818.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n818.x=1123; n818.y=1056;
      n818.characters='R$ 89,90';
      F.appendChild(n818);}
    {const n819=figma.createText();
      n819.fontName=FR;
      n819.fontSize=12.0;
      n819.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n819.x=292; n819.y=1089.5;
      n819.characters='Adicionar produto';
      F.appendChild(n819);}
    {const n820=figma.createText();
      n820.fontName=FR;
      n820.fontSize=11.0;
      n820.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n820.x=265; n820.y=1110;
      n820.characters='Outros (descrição livre)';
      F.appendChild(n820);}
    {const n821=figma.createText();
      n821.fontName=FR;
      n821.fontSize=13.0;
      n821.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n821.x=274; n821.y=1133.5;
      n821.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n821);}
    {const n822=figma.createText();
      n822.fontName=FR;
      n822.fontSize=11.0;
      n822.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n822.x=1007.5; n822.y=1174;
      n822.characters='Subtotal dos produtos';
      F.appendChild(n822);}
    {const n823=figma.createText();
      n823.fontName=FB;
      n823.fontSize=13.0;
      n823.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n823.x=1177.8; n823.y=1174;
      n823.characters='R$ 89,90';
      F.appendChild(n823);}
    {const n824=figma.createFrame();
      n824.x=265.0; n824.y=1224.0;
      n824.resize(Math.max(1,20),Math.max(1,20));
      n824.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n824.clipsContent=false;
      n824.cornerRadius=50.0;
      F.appendChild(n824);
      {const n825=figma.createText();
        n825.fontName=FB;
        n825.fontSize=9.0;
        n825.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n825.x=6.8; n825.y=4.5;
        n825.characters='6';
        n824.appendChild(n825);}
    }
    {const n826=figma.createText();
      n826.fontName=FB;
      n826.fontSize=13.0;
      n826.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n826.x=295; n826.y=1226;
      n826.characters='Financeiro';
      F.appendChild(n826);}
    {const n827=figma.createText();
      n827.fontName=FR;
      n827.fontSize=11.0;
      n827.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n827.x=265; n827.y=1269;
      n827.characters='Desconto (R$)';
      F.appendChild(n827);}
    {const n828=figma.createText();
      n828.fontName=FR;
      n828.fontSize=13.0;
      n828.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n828.x=274; n828.y=1292.5;
      n828.characters='0';
      F.appendChild(n828);}
    {const n829=figma.createText();
      n829.fontName=FR;
      n829.fontSize=11.0;
      n829.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n829.x=757; n829.y=1269;
      n829.characters='Frete (R$)';
      F.appendChild(n829);}
    {const n830=figma.createText();
      n830.fontName=FR;
      n830.fontSize=13.0;
      n830.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n830.x=766; n830.y=1292.5;
      n830.characters='0,00';
      F.appendChild(n830);}
    {const n831=figma.createText();
      n831.fontName=FR;
      n831.fontSize=11.0;
      n831.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n831.x=265; n831.y=1325;
      n831.characters='Total do Pedido';
      F.appendChild(n831);}
    {const n832=figma.createText();
      n832.fontName=FB;
      n832.fontSize=20.0;
      n832.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n832.x=281; n832.y=1352.5;
      n832.characters='R$ 89,90';
      F.appendChild(n832);}
    {const n833=figma.createFrame();
      n833.x=265.0; n833.y=1421.0;
      n833.resize(Math.max(1,20),Math.max(1,20));
      n833.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n833.clipsContent=false;
      n833.cornerRadius=50.0;
      F.appendChild(n833);
      {const n834=figma.createText();
        n834.fontName=FB;
        n834.fontSize=9.0;
        n834.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n834.x=7.2; n834.y=4.5;
        n834.characters='7';
        n833.appendChild(n834);}
    }
    {const n835=figma.createText();
      n835.fontName=FB;
      n835.fontSize=13.0;
      n835.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n835.x=295; n835.y=1423;
      n835.characters='Pagamento';
      F.appendChild(n835);}
    {const n836=figma.createText();
      n836.fontName=FB;
      n836.fontSize=10.0;
      n836.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n836.x=265; n836.y=1466;
      n836.characters='Forma';
      F.appendChild(n836);}
    {const n837=figma.createText();
      n837.fontName=FB;
      n837.fontSize=10.0;
      n837.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n837.x=411; n837.y=1466;
      n837.characters='Data Pgto';
      F.appendChild(n837);}
    {const n838=figma.createText();
      n838.fontName=FB;
      n838.fontSize=10.0;
      n838.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n838.x=541; n838.y=1466;
      n838.characters='Valor (R$)';
      F.appendChild(n838);}
    {const n839=figma.createText();
      n839.fontName=FB;
      n839.fontSize=10.0;
      n839.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n839.x=657; n839.y=1466;
      n839.characters='Confirm.';
      F.appendChild(n839);}
    {const n840=figma.createText();
      n840.fontName=FR;
      n840.fontSize=13.0;
      n840.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n840.x=274; n840.y=1498.5;
      n840.characters='— Forma —';
      F.appendChild(n840);}
    {const n841=figma.createText();
      n841.fontName=FR;
      n841.fontSize=13.3;
      n841.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n841.x=699; n841.y=1498;
      n841.characters='on';
      F.appendChild(n841);}
    {const n842=figma.createText();
      n842.fontName=FR;
      n842.fontSize=12.0;
      n842.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n842.x=292; n842.y=1533.5;
      n842.characters='Adicionar parcela';
      F.appendChild(n842);}
    {const n843=figma.createText();
      n843.fontName=FR;
      n843.fontSize=12.0;
      n843.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n843.x=280; n843.y=1579;
      n843.characters='Total do pedido';
      F.appendChild(n843);}
    {const n844=figma.createText();
      n844.fontName=FR;
      n844.fontSize=12.0;
      n844.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n844.x=1167.2; n844.y=1580.5;
      n844.characters='R$ 89,90';
      F.appendChild(n844);}
    {const n845=figma.createText();
      n845.fontName=FR;
      n845.fontSize=12.0;
      n845.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n845.x=280; n845.y=1599;
      n845.characters='Total pago';
      F.appendChild(n845);}
    {const n846=figma.createText();
      n846.fontName=FR;
      n846.fontSize=12.0;
      n846.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n846.x=1173.8; n846.y=1600.5;
      n846.characters='R$ 0,00';
      F.appendChild(n846);}
    {const n847=figma.createText();
      n847.fontName=FB;
      n847.fontSize=12.0;
      n847.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n847.x=280; n847.y=1619.5;
      n847.characters='Falta pagar';
      F.appendChild(n847);}
    {const n848=figma.createText();
      n848.fontName=FB;
      n848.fontSize=12.0;
      n848.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n848.x=1159.2; n848.y=1621;
      n848.characters='R$ 89,90';
      F.appendChild(n848);}
    {const n849=figma.createText();
      n849.fontName=FR;
      n849.fontSize=13.3;
      n849.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n849.x=289; n849.y=1652.5;
      n849.characters='on';
      F.appendChild(n849);}
    {const n850=figma.createText();
      n850.fontName=FR;
      n850.fontSize=12.0;
      n850.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n850.x=300; n850.y=1652;
      n850.characters='Vai pagar na retirada';
      F.appendChild(n850);}
    {const n851=figma.createFrame();
      n851.x=265.0; n851.y=1716.0;
      n851.resize(Math.max(1,20),Math.max(1,20));
      n851.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n851.clipsContent=false;
      n851.cornerRadius=50.0;
      F.appendChild(n851);
      {const n852=figma.createText();
        n852.fontName=FB;
        n852.fontSize=9.0;
        n852.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n852.x=6.8; n852.y=4.5;
        n852.characters='8';
        n851.appendChild(n852);}
    }
    {const n853=figma.createText();
      n853.fontName=FB;
      n853.fontSize=13.0;
      n853.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n853.x=295; n853.y=1718;
      n853.characters='Entrega';
      F.appendChild(n853);}
    {const n854=figma.createText();
      n854.fontName=FR;
      n854.fontSize=11.0;
      n854.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n854.x=265; n854.y=1761;
      n854.characters='Data de Entrega';
      F.appendChild(n854);}
    {const n855=figma.createText();
      n855.fontName=FR;
      n855.fontSize=11.0;
      n855.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n855.x=352.7; n855.y=1761;
      n855.characters='*';
      F.appendChild(n855);}
    {const n856=figma.createText();
      n856.fontName=FR;
      n856.fontSize=11.0;
      n856.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n856.x=757; n856.y=1761;
      n856.characters='Modalidade';
      F.appendChild(n856);}
    {const n857=figma.createText();
      n857.fontName=FR;
      n857.fontSize=11.0;
      n857.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n857.x=820.4; n857.y=1761;
      n857.characters='*';
      F.appendChild(n857);}
    {const n858=figma.createText();
      n858.fontName=FR;
      n858.fontSize=13.0;
      n858.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n858.x=766; n858.y=1784.5;
      n858.characters='MOTOBOY';
      F.appendChild(n858);}
    {const n859=figma.createText();
      n859.fontName=FB;
      n859.fontSize=10.0;
      n859.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n859.x=265; n859.y=1822.5;
      n859.characters='Destinatário';
      F.appendChild(n859);}
    {const n860=figma.createText();
      n860.fontName=FR;
      n860.fontSize=13.3;
      n860.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n860.x=1083.7; n860.y=1821.5;
      n860.characters='on';
      F.appendChild(n860);}
    {const n861=figma.createText();
      n861.fontName=FR;
      n861.fontSize=12.0;
      n861.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n861.x=1093.7; n861.y=1821;
      n861.characters='Mesmo que o comprador';
      F.appendChild(n861);}
    {const n862=figma.createText();
      n862.fontName=FR;
      n862.fontSize=11.0;
      n862.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n862.x=265; n862.y=1855;
      n862.characters='Nome do Destinatário';
      F.appendChild(n862);}
    {const n863=figma.createText();
      n863.fontName=FR;
      n863.fontSize=11.0;
      n863.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n863.x=383.5; n863.y=1855;
      n863.characters='*';
      F.appendChild(n863);}
    {const n864=figma.createText();
      n864.fontName=FR;
      n864.fontSize=13.0;
      n864.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n864.x=274; n864.y=1878.5;
      n864.characters='Flávio Rizzi';
      F.appendChild(n864);}
    {const n865=figma.createText();
      n865.fontName=FR;
      n865.fontSize=11.0;
      n865.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n865.x=265; n865.y=1911;
      n865.characters='Telefone';
      F.appendChild(n865);}
    {const n866=figma.createText();
      n866.fontName=FR;
      n866.fontSize=11.0;
      n866.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n866.x=757; n866.y=1911;
      n866.characters='CPF';
      F.appendChild(n866);}
    {const n867=figma.createText();
      n867.fontName=FR;
      n867.fontSize=11.0;
      n867.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n867.x=265; n867.y=1967;
      n867.characters='Email';
      F.appendChild(n867);}
    {const n868=figma.createText();
      n868.fontName=FB;
      n868.fontSize=10.0;
      n868.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n868.x=265; n868.y=2027;
      n868.characters='Endereço';
      F.appendChild(n868);}
    {const n869=figma.createText();
      n869.fontName=FR;
      n869.fontSize=11.0;
      n869.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n869.x=265; n869.y=2058;
      n869.characters='CEP';
      F.appendChild(n869);}
    {const n870=figma.createText();
      n870.fontName=FR;
      n870.fontSize=13.0;
      n870.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n870.x=274; n870.y=2081.5;
      n870.characters='04743-030';
      F.appendChild(n870);}
    {const n871=figma.createText();
      n871.fontName=FR;
      n871.fontSize=11.0;
      n871.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n871.x=265; n871.y=2114;
      n871.characters='Logradouro';
      F.appendChild(n871);}
    {const n872=figma.createText();
      n872.fontName=FR;
      n872.fontSize=13.0;
      n872.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n872.x=274; n872.y=2137.5;
      n872.characters='Rua Isabel Schimidt';
      F.appendChild(n872);}
    {const n873=figma.createText();
      n873.fontName=FR;
      n873.fontSize=11.0;
      n873.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n873.x=593; n873.y=2114;
      n873.characters='Número';
      F.appendChild(n873);}
    {const n874=figma.createText();
      n874.fontName=FR;
      n874.fontSize=13.0;
      n874.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n874.x=602; n874.y=2137.5;
      n874.characters='118';
      F.appendChild(n874);}
    {const n875=figma.createText();
      n875.fontName=FR;
      n875.fontSize=11.0;
      n875.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n875.x=265; n875.y=2170;
      n875.characters='Complemento';
      F.appendChild(n875);}
    {const n876=figma.createText();
      n876.fontName=FR;
      n876.fontSize=13.0;
      n876.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n876.x=274; n876.y=2193.5;
      n876.characters='Sala 04';
      F.appendChild(n876);}
    {const n877=figma.createText();
      n877.fontName=FR;
      n877.fontSize=11.0;
      n877.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n877.x=511; n877.y=2170;
      n877.characters='Bairro';
      F.appendChild(n877);}
    {const n878=figma.createText();
      n878.fontName=FR;
      n878.fontSize=13.0;
      n878.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n878.x=520; n878.y=2193.5;
      n878.characters='Santo Amaro';
      F.appendChild(n878);}
    {const n879=figma.createText();
      n879.fontName=FR;
      n879.fontSize=11.0;
      n879.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n879.x=757; n879.y=2170;
      n879.characters='Cidade';
      F.appendChild(n879);}
    {const n880=figma.createText();
      n880.fontName=FR;
      n880.fontSize=13.0;
      n880.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n880.x=766; n880.y=2193.5;
      n880.characters='São Paulo';
      F.appendChild(n880);}
    {const n881=figma.createText();
      n881.fontName=FR;
      n881.fontSize=11.0;
      n881.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n881.x=265; n881.y=2226;
      n881.characters='UF';
      F.appendChild(n881);}
    {const n882=figma.createText();
      n882.fontName=FR;
      n882.fontSize=13.0;
      n882.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n882.x=274; n882.y=2249.5;
      n882.characters='SP';
      F.appendChild(n882);}
    {const n883=figma.createText();
      n883.fontName=FB;
      n883.fontSize=10.0;
      n883.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n883.x=265; n883.y=2286;
      n883.characters='Observações';
      F.appendChild(n883);}
    {const n884=figma.createText();
      n884.fontName=FR;
      n884.fontSize=11.0;
      n884.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n884.x=265; n884.y=2317;
      n884.characters='Obs. Fábrica';
      F.appendChild(n884);}
    {const n885=figma.createText();
      n885.fontName=FR;
      n885.fontSize=13.0;
      n885.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n885.x=274; n885.y=2354.5;
      n885.characters='cartão De Luana / Para: Dr Flávio Rizzi';
      F.appendChild(n885);}
    {const n886=figma.createText();
      n886.fontName=FR;
      n886.fontSize=11.0;
      n886.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n886.x=757; n886.y=2317;
      n886.characters='Info Motoboy';
      F.appendChild(n886);}
    {const n887=figma.createText();
      n887.fontName=FB;
      n887.fontSize=9.0;
      n887.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n887.x=271.8; n887.y=2431.5;
      n887.characters='9';
      F.appendChild(n887);}
    {const n888=figma.createText();
      n888.fontName=FR;
      n888.fontSize=12.0;
      n888.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n888.x=295; n888.y=2429.5;
      n888.characters='Controle Interno';
      F.appendChild(n888);}
    {const n889=figma.createText();
      n889.fontName=FR;
      n889.fontSize=11.0;
      n889.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n889.x=1088.2; n889.y=2430.5;
      n889.characters='Uso interno da operação';
      F.appendChild(n889);}
    {const n890=figma.createText();
      n890.fontName=FR;
      n890.fontSize=10.0;
      n890.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n890.x=1225.1; n890.y=2433.1;
      n890.characters='▼';
      F.appendChild(n890);}
    {const n891=figma.createText();
      n891.fontName=FR;
      n891.fontSize=10.0;
      n891.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n891.x=248; n891.y=1060;
      n891.characters='Pedido';
      F.appendChild(n891);}
    {const n892=figma.createText();
      n892.fontName=FB;
      n892.fontSize=13.0;
      n892.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n892.x=248; n892.y=1074;
      n892.characters='#25856';
      F.appendChild(n892);}
    {const n893=figma.createText();
      n893.fontName=FR;
      n893.fontSize=10.0;
      n893.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n893.x=327.9; n893.y=1060;
      n893.characters='Total';
      F.appendChild(n893);}
    {const n894=figma.createText();
      n894.fontName=FB;
      n894.fontSize=13.0;
      n894.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n894.x=327.9; n894.y=1074;
      n894.characters='R$ 89,90';
      F.appendChild(n894);}
    {const n895=figma.createText();
      n895.fontName=FR;
      n895.fontSize=10.0;
      n895.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n895.x=422.1; n895.y=1060;
      n895.characters='Falta pagar';
      F.appendChild(n895);}
    {const n896=figma.createText();
      n896.fontName=FB;
      n896.fontSize=13.0;
      n896.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n896.x=422.1; n896.y=1074;
      n896.characters='R$ 89,90';
      F.appendChild(n896);}
    {const n897=figma.createText();
      n897.fontName=FR;
      n897.fontSize=13.0;
      n897.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n897.x=1018.7; n897.y=1066;
      n897.characters='Limpar';
      F.appendChild(n897);}
    {const n898=figma.createFrame();
      n898.x=1083.2; n898.y=1057.0;
      n898.resize(Math.max(1,168.8),Math.max(1,34));
      n898.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n898.clipsContent=false;
      n898.cornerRadius=4.0;
      F.appendChild(n898);
      {const n899=figma.createText();
        n899.fontName=FB;
        n899.fontSize=13.0;
        n899.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n899.x=39; n899.y=9;
        n899.characters='Cadastrar Pedido';
        n898.appendChild(n899);}
    }
    {const n900=figma.createText();
      n900.fontName=FR;
      n900.fontSize=11.0;
      n900.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n900.x=30; n900.y=2547;
      n900.characters='Pedido #25856 · destinatário diferente do comprador';
      F.appendChild(n900);}
    {const n901=figma.createText();
      n901.fontName=FR;
      n901.fontSize=11.0;
      n901.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n901.x=1241.8; n901.y=2548;
      n901.characters='v4.2';
      F.appendChild(n901);}
  }
  await Promise.resolve();

  // ── A6: Obs. Fábrica com instrução detalhada
  {const F=figma.createFrame();
    F.x=6800; F.y=0;
    F.resize(1280,2641);
    F.name='A6 — Obs. Fábrica com instrução detalhada';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n902=figma.createFrame();
      n902.x=0.0; n902.y=0.0;
      n902.resize(Math.max(1,1280),Math.max(1,38));
      n902.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n902.clipsContent=false;
      F.appendChild(n902);
      {const n903=figma.createFrame();
        n903.x=14.0; n903.y=8.0;
        n903.resize(Math.max(1,22),Math.max(1,22));
        n903.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n903.clipsContent=false;
        n903.cornerRadius=5.0;
        n902.appendChild(n903);
        {const n904=figma.createText();
          n904.fontName=FB;
          n904.fontSize=10.0;
          n904.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n904.x=2.5; n904.y=5;
          n904.characters='MC';
          n903.appendChild(n904);}
      }
      {const n905=figma.createText();
        n905.fontName=FR;
        n905.fontSize=13.0;
        n905.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n905.x=44; n905.y=11;
        n905.characters='Maria Cacau — Gestão de Pedidos';
        n902.appendChild(n905);}
    }
    {const n906=figma.createFrame();
      n906.x=0.0; n906.y=38.0;
      n906.resize(Math.max(1,220),Math.max(1,2575));
      n906.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n906.clipsContent=false;
      F.appendChild(n906);
      {const n907=figma.createFrame();
        n907.x=14.0; n907.y=14.0;
        n907.resize(Math.max(1,38),Math.max(1,38));
        n907.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n907.clipsContent=false;
        n907.cornerRadius=8.0;
        n906.appendChild(n907);
        {const n908=figma.createText();
          n908.fontName=FB;
          n908.fontSize=14.0;
          n908.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n908.x=7.5; n908.y=10.5;
          n908.characters='MC';
          n907.appendChild(n908);}
      }
      {const n909=figma.createText();
        n909.fontName=FB;
        n909.fontSize=13.0;
        n909.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n909.x=62; n909.y=18.5;
        n909.characters='Maria Cacau';
        n906.appendChild(n909);}
      {const n910=figma.createText();
        n910.fontName=FR;
        n910.fontSize=10.0;
        n910.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n910.x=62; n910.y=35.5;
        n910.characters='Gestão de Pedidos';
        n906.appendChild(n910);}
      {const n911=figma.createText();
        n911.fontName=FB;
        n911.fontSize=10.0;
        n911.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n911.x=16; n911.y=85;
        n911.characters='Pedidos';
        n906.appendChild(n911);}
      {const n912=figma.createFrame();
        n912.x=8.0; n912.y=101.0;
        n912.resize(Math.max(1,204),Math.max(1,34));
        n912.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n912.clipsContent=false;
        n912.cornerRadius=8.0;
        n906.appendChild(n912);
        {const n913=figma.createText();
          n913.fontName=FB;
          n913.fontSize=13.0;
          n913.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n913.x=38; n913.y=9;
          n913.characters='Novo Pedido';
          n912.appendChild(n913);}
        {const n914=figma.createFrame();
          n914.x=160.4; n914.y=10.5;
          n914.resize(Math.max(1,33.6),Math.max(1,13));
          n914.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n914.clipsContent=false;
          n914.cornerRadius=8.0;
          n912.appendChild(n914);
          {const n915=figma.createText();
            n915.fontName=FB;
            n915.fontSize=9.0;
            n915.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n915.x=5; n915.y=1;
            n915.characters='Novo';
            n914.appendChild(n915);}
        }
      }
      {const n916=figma.createText();
        n916.fontName=FB;
        n916.fontSize=10.0;
        n916.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n916.x=16; n916.y=145;
        n916.characters='Consultas';
        n906.appendChild(n916);}
      {const n917=figma.createText();
        n917.fontName=FR;
        n917.fontSize=13.0;
        n917.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n917.x=46; n917.y=170;
        n917.characters='Produtos';
        n906.appendChild(n917);}
      {const n918=figma.createText();
        n918.fontName=FR;
        n918.fontSize=13.0;
        n918.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n918.x=46; n918.y=206;
        n918.characters='Entregas';
        n906.appendChild(n918);}
      {const n919=figma.createText();
        n919.fontName=FR;
        n919.fontSize=13.0;
        n919.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n919.x=46; n919.y=242;
        n919.characters='Verificar CPF';
        n906.appendChild(n919);}
      {const n920=figma.createText();
        n920.fontName=FB;
        n920.fontSize=10.0;
        n920.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n920.x=16; n920.y=277;
        n920.characters='Em breve';
        n906.appendChild(n920);}
      {const n921=figma.createText();
        n921.fontName=FR;
        n921.fontSize=13.0;
        n921.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n921.x=46; n921.y=302;
        n921.characters='Frete por CEP';
        n906.appendChild(n921);}
      {const n922=figma.createFrame();
        n922.x=169.2; n922.y=303.5;
        n922.resize(Math.max(1,32.8),Math.max(1,13));
        n922.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n922.clipsContent=false;
        n922.cornerRadius=8.0;
        n922.opacity=0.36;
        n906.appendChild(n922);
        {const n923=figma.createText();
          n923.fontName=FB;
          n923.fontSize=9.0;
          n923.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n923.x=5; n923.y=1;
          n923.characters='Logo';
          n922.appendChild(n923);}
      }
      {const n924=figma.createText();
        n924.fontName=FR;
        n924.fontSize=13.0;
        n924.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n924.x=46; n924.y=338;
        n924.characters='Nota Fiscal';
        n906.appendChild(n924);}
      {const n925=figma.createFrame();
        n925.x=169.2; n925.y=339.5;
        n925.resize(Math.max(1,32.8),Math.max(1,13));
        n925.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n925.clipsContent=false;
        n925.cornerRadius=8.0;
        n925.opacity=0.36;
        n906.appendChild(n925);
        {const n926=figma.createText();
          n926.fontName=FB;
          n926.fontSize=9.0;
          n926.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n926.x=5; n926.y=1;
          n926.characters='Logo';
          n925.appendChild(n926);}
      }
    }
    {const n927=figma.createText();
      n927.fontName=FB;
      n927.fontSize=20.0;
      n927.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n927.x=248; n927.y=62;
      n927.characters='Novo Pedido';
      F.appendChild(n927);}
    {const n928=figma.createText();
      n928.fontName=FR;
      n928.fontSize=13.0;
      n928.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n928.x=248; n928.y=88;
      n928.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n928);}
    {const n929=figma.createFrame();
      n929.x=265.0; n929.y=133.0;
      n929.resize(Math.max(1,20),Math.max(1,20));
      n929.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n929.clipsContent=false;
      n929.cornerRadius=50.0;
      F.appendChild(n929);
      {const n930=figma.createText();
        n930.fontName=FB;
        n930.fontSize=9.0;
        n930.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n930.x=7.6; n930.y=4.5;
        n930.characters='1';
        n929.appendChild(n930);}
    }
    {const n931=figma.createText();
      n931.fontName=FB;
      n931.fontSize=13.0;
      n931.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n931.x=295; n931.y=135;
      n931.characters='Identificação do Pedido';
      F.appendChild(n931);}
    {const n932=figma.createText();
      n932.fontName=FR;
      n932.fontSize=11.0;
      n932.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n932.x=265; n932.y=178;
      n932.characters='Nº Pedido';
      F.appendChild(n932);}
    {const n933=figma.createText();
      n933.fontName=FR;
      n933.fontSize=11.0;
      n933.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n933.x=319.2; n933.y=178;
      n933.characters='*';
      F.appendChild(n933);}
    {const n934=figma.createText();
      n934.fontName=FR;
      n934.fontSize=13.0;
      n934.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n934.x=274; n934.y=201.5;
      n934.characters='25853';
      F.appendChild(n934);}
    {const n935=figma.createText();
      n935.fontName=FR;
      n935.fontSize=11.0;
      n935.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n935.x=757; n935.y=178;
      n935.characters='Como Conheceu';
      F.appendChild(n935);}
    {const n936=figma.createFrame();
      n936.x=265.0; n936.y=260.0;
      n936.resize(Math.max(1,20),Math.max(1,20));
      n936.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n936.clipsContent=false;
      n936.cornerRadius=50.0;
      F.appendChild(n936);
      {const n937=figma.createText();
        n937.fontName=FB;
        n937.fontSize=9.0;
        n937.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n937.x=7; n937.y=4.5;
        n937.characters='2';
        n936.appendChild(n937);}
    }
    {const n938=figma.createText();
      n938.fontName=FB;
      n938.fontSize=13.0;
      n938.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n938.x=295; n938.y=262;
      n938.characters='Comprador';
      F.appendChild(n938);}
    {const n939=figma.createText();
      n939.fontName=FR;
      n939.fontSize=11.0;
      n939.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n939.x=265; n939.y=305;
      n939.characters='Nome do Comprador';
      F.appendChild(n939);}
    {const n940=figma.createText();
      n940.fontName=FR;
      n940.fontSize=11.0;
      n940.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n940.x=378.2; n940.y=305;
      n940.characters='*';
      F.appendChild(n940);}
    {const n941=figma.createText();
      n941.fontName=FR;
      n941.fontSize=13.0;
      n941.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n941.x=274; n941.y=328.5;
      n941.characters='Deise da Lívia';
      F.appendChild(n941);}
    {const n942=figma.createText();
      n942.fontName=FR;
      n942.fontSize=11.0;
      n942.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n942.x=265; n942.y=361;
      n942.characters='Parentesco';
      F.appendChild(n942);}
    {const n943=figma.createText();
      n943.fontName=FR;
      n943.fontSize=13.0;
      n943.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n943.x=274; n943.y=384.5;
      n943.characters='Mãe';
      F.appendChild(n943);}
    {const n944=figma.createText();
      n944.fontName=FR;
      n944.fontSize=11.0;
      n944.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n944.x=757; n944.y=361;
      n944.characters='Telefone';
      F.appendChild(n944);}
    {const n945=figma.createText();
      n945.fontName=FR;
      n945.fontSize=11.0;
      n945.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n945.x=803.6; n945.y=361;
      n945.characters='*';
      F.appendChild(n945);}
    {const n946=figma.createText();
      n946.fontName=FR;
      n946.fontSize=11.0;
      n946.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n946.x=265; n946.y=417;
      n946.characters='CPF';
      F.appendChild(n946);}
    {const n947=figma.createText();
      n947.fontName=FR;
      n947.fontSize=11.0;
      n947.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n947.x=757; n947.y=417;
      n947.characters='Email';
      F.appendChild(n947);}
    {const n948=figma.createFrame();
      n948.x=265.0; n948.y=499.0;
      n948.resize(Math.max(1,20),Math.max(1,20));
      n948.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n948.clipsContent=false;
      n948.cornerRadius=50.0;
      F.appendChild(n948);
      {const n949=figma.createText();
        n949.fontName=FB;
        n949.fontSize=9.0;
        n949.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n949.x=6.9; n949.y=4.5;
        n949.characters='3';
        n948.appendChild(n949);}
    }
    {const n950=figma.createText();
      n950.fontName=FB;
      n950.fontSize=13.0;
      n950.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n950.x=295; n950.y=501;
      n950.characters='Presenteado & Evento';
      F.appendChild(n950);}
    {const n951=figma.createText();
      n951.fontName=FR;
      n951.fontSize=11.0;
      n951.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n951.x=265; n951.y=544;
      n951.characters='Nome do Presenteado';
      F.appendChild(n951);}
    {const n952=figma.createText();
      n952.fontName=FR;
      n952.fontSize=13.0;
      n952.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n952.x=274; n952.y=567.5;
      n952.characters='Lívia';
      F.appendChild(n952);}
    {const n953=figma.createText();
      n953.fontName=FR;
      n953.fontSize=11.0;
      n953.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n953.x=265; n953.y=600;
      n953.characters='Sexo';
      F.appendChild(n953);}
    {const n954=figma.createFrame();
      n954.x=265.0; n954.y=616.0;
      n954.resize(Math.max(1,96.4),Math.max(1,30));
      n954.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n954.clipsContent=false;
      n954.strokes=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n954.strokeWeight=1.0; n954.strokeAlign='INSIDE';
      n954.topLeftRadius=4.0;n954.topRightRadius=0.0;n954.bottomLeftRadius=4.0;n954.bottomRightRadius=0.0;
      F.appendChild(n954);
      {const n955=figma.createText();
        n955.fontName=FR;
        n955.fontSize=11.0;
        n955.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n955.x=24.5; n955.y=8.5;
        n955.characters='Feminino';
        n954.appendChild(n955);}
    }
    {const n956=figma.createText();
      n956.fontName=FR;
      n956.fontSize=11.0;
      n956.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n956.x=382.09999999999997; n956.y=624.5;
      n956.characters='Masculino';
      F.appendChild(n956);}
    {const n957=figma.createText();
      n957.fontName=FR;
      n957.fontSize=11.0;
      n957.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n957.x=482.7; n957.y=624.5;
      n957.characters='Gêmeas';
      F.appendChild(n957);}
    {const n958=figma.createText();
      n958.fontName=FR;
      n958.fontSize=11.0;
      n958.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n958.x=577.9000000000001; n958.y=624.5;
      n958.characters='Gêmeos';
      F.appendChild(n958);}
    {const n959=figma.createText();
      n959.fontName=FR;
      n959.fontSize=11.0;
      n959.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n959.x=670.2; n959.y=624.5;
      n959.characters='Não sabe';
      F.appendChild(n959);}
    {const n960=figma.createText();
      n960.fontName=FR;
      n960.fontSize=11.0;
      n960.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n960.x=757; n960.y=600;
      n960.characters='Tipo de Evento';
      F.appendChild(n960);}
    {const n961=figma.createText();
      n961.fontName=FR;
      n961.fontSize=13.0;
      n961.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n961.x=766; n961.y=623.5;
      n961.characters='Maternidade';
      F.appendChild(n961);}
    {const n962=figma.createText();
      n962.fontName=FR;
      n962.fontSize=11.0;
      n962.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n962.x=265; n962.y=656;
      n962.characters='Data do Evento';
      F.appendChild(n962);}
    {const n963=figma.createText();
      n963.fontName=FR;
      n963.fontSize=13.0;
      n963.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n963.x=274; n963.y=679.5;
      n963.characters='2026-01-15';
      F.appendChild(n963);}
    {const n964=figma.createFrame();
      n964.x=265.0; n964.y=738.0;
      n964.resize(Math.max(1,20),Math.max(1,20));
      n964.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n964.clipsContent=false;
      n964.cornerRadius=50.0;
      F.appendChild(n964);
      {const n965=figma.createText();
        n965.fontName=FB;
        n965.fontSize=9.0;
        n965.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n965.x=6.8; n965.y=4.5;
        n965.characters='4';
        n964.appendChild(n965);}
    }
    {const n966=figma.createText();
      n966.fontName=FB;
      n966.fontSize=13.0;
      n966.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n966.x=295; n966.y=740;
      n966.characters='Personalização';
      F.appendChild(n966);}
    {const n967=figma.createText();
      n967.fontName=FR;
      n967.fontSize=11.0;
      n967.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n967.x=1138; n967.y=741.5;
      n967.characters='Arte & embalagem';
      F.appendChild(n967);}
    {const n968=figma.createText();
      n968.fontName=FR;
      n968.fontSize=11.0;
      n968.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n968.x=265; n968.y=783;
      n968.characters='Nome da Etiqueta';
      F.appendChild(n968);}
    {const n969=figma.createText();
      n969.fontName=FR;
      n969.fontSize=11.0;
      n969.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n969.x=757; n969.y=783;
      n969.characters='Tema da Etiqueta';
      F.appendChild(n969);}
    {const n970=figma.createText();
      n970.fontName=FR;
      n970.fontSize=11.0;
      n970.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n970.x=265; n970.y=839;
      n970.characters='Nome na Caixa';
      F.appendChild(n970);}
    {const n971=figma.createText();
      n971.fontName=FR;
      n971.fontSize=11.0;
      n971.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n971.x=757; n971.y=839;
      n971.characters='Arte / Tecido da Caixa';
      F.appendChild(n971);}
    {const n972=figma.createText();
      n972.fontName=FR;
      n972.fontSize=11.0;
      n972.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n972.x=265; n972.y=895;
      n972.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n972);}
    {const n973=figma.createText();
      n973.fontName=FR;
      n973.fontSize=13.0;
      n973.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n973.x=274; n973.y=918.5;
      n973.characters='0';
      F.appendChild(n973);}
    {const n974=figma.createFrame();
      n974.x=265.0; n974.y=977.0;
      n974.resize(Math.max(1,20),Math.max(1,20));
      n974.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n974.clipsContent=false;
      n974.cornerRadius=50.0;
      F.appendChild(n974);
      {const n975=figma.createText();
        n975.fontName=FB;
        n975.fontSize=9.0;
        n975.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n975.x=6.9; n975.y=4.5;
        n975.characters='5';
        n974.appendChild(n975);}
    }
    {const n976=figma.createText();
      n976.fontName=FB;
      n976.fontSize=13.0;
      n976.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n976.x=295; n976.y=979;
      n976.characters='Produtos';
      F.appendChild(n976);}
    {const n977=figma.createText();
      n977.fontName=FR;
      n977.fontSize=11.0;
      n977.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n977.x=1199.5; n977.y=980.5;
      n977.characters='3 itens';
      F.appendChild(n977);}
    {const n978=figma.createText();
      n978.fontName=FB;
      n978.fontSize=10.0;
      n978.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n978.x=265; n978.y=1022;
      n978.characters='Produto';
      F.appendChild(n978);}
    {const n979=figma.createText();
      n979.fontName=FB;
      n979.fontSize=10.0;
      n979.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n979.x=937; n979.y=1022;
      n979.characters='Qtd';
      F.appendChild(n979);}
    {const n980=figma.createText();
      n980.fontName=FB;
      n980.fontSize=10.0;
      n980.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n980.x=1007; n980.y=1022;
      n980.characters='R$ Unit.';
      F.appendChild(n980);}
    {const n981=figma.createText();
      n981.fontName=FB;
      n981.fontSize=10.0;
      n981.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n981.x=1113; n981.y=1022;
      n981.characters='Total';
      F.appendChild(n981);}
    {const n982=figma.createText();
      n982.fontName=FR;
      n982.fontSize=13.0;
      n982.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n982.x=274; n982.y=1054.5;
      n982.characters='Sacolinha Fumê alça courinho + personalização + tag + correntinha';
      F.appendChild(n982);}
    {const n983=figma.createText();
      n983.fontName=FR;
      n983.fontSize=13.0;
      n983.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n983.x=946; n983.y=1054.5;
      n983.characters='30';
      F.appendChild(n983);}
    {const n984=figma.createText();
      n984.fontName=FR;
      n984.fontSize=13.0;
      n984.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n984.x=1016; n984.y=1054.5;
      n984.characters='13,90';
      F.appendChild(n984);}
    {const n985=figma.createText();
      n985.fontName=FR;
      n985.fontSize=12.0;
      n985.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n985.x=1123; n985.y=1056;
      n985.characters='R$ 417,00';
      F.appendChild(n985);}
    {const n986=figma.createText();
      n986.fontName=FR;
      n986.fontSize=13.0;
      n986.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n986.x=274; n986.y=1091.5;
      n986.characters='(CAN001) Canudo Waffle banhado no meio amargo';
      F.appendChild(n986);}
    {const n987=figma.createText();
      n987.fontName=FR;
      n987.fontSize=13.0;
      n987.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n987.x=946; n987.y=1091.5;
      n987.characters='30';
      F.appendChild(n987);}
    {const n988=figma.createText();
      n988.fontName=FR;
      n988.fontSize=13.0;
      n988.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n988.x=1016; n988.y=1091.5;
      n988.characters='6,49';
      F.appendChild(n988);}
    {const n989=figma.createText();
      n989.fontName=FR;
      n989.fontSize=12.0;
      n989.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n989.x=1123; n989.y=1093;
      n989.characters='R$ 194,70';
      F.appendChild(n989);}
    {const n990=figma.createText();
      n990.fontName=FR;
      n990.fontSize=15.0;
      n990.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n990.x=1217.4; n990.y=1090;
      n990.characters='×';
      F.appendChild(n990);}
    {const n991=figma.createText();
      n991.fontName=FR;
      n991.fontSize=13.0;
      n991.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n991.x=274; n991.y=1128.5;
      n991.characters='TECIDO PERSONALIZADO NO CANUDO + LAÇO E TAG';
      F.appendChild(n991);}
    {const n992=figma.createText();
      n992.fontName=FR;
      n992.fontSize=13.0;
      n992.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n992.x=946; n992.y=1128.5;
      n992.characters='30';
      F.appendChild(n992);}
    {const n993=figma.createText();
      n993.fontName=FR;
      n993.fontSize=13.0;
      n993.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n993.x=1016; n993.y=1128.5;
      n993.characters='5,00';
      F.appendChild(n993);}
    {const n994=figma.createText();
      n994.fontName=FR;
      n994.fontSize=12.0;
      n994.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n994.x=1123; n994.y=1130;
      n994.characters='R$ 150,00';
      F.appendChild(n994);}
    {const n995=figma.createText();
      n995.fontName=FR;
      n995.fontSize=15.0;
      n995.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n995.x=1217.4; n995.y=1127;
      n995.characters='×';
      F.appendChild(n995);}
    {const n996=figma.createText();
      n996.fontName=FR;
      n996.fontSize=12.0;
      n996.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n996.x=292; n996.y=1163.5;
      n996.characters='Adicionar produto';
      F.appendChild(n996);}
    {const n997=figma.createText();
      n997.fontName=FR;
      n997.fontSize=11.0;
      n997.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n997.x=265; n997.y=1184;
      n997.characters='Outros (descrição livre)';
      F.appendChild(n997);}
    {const n998=figma.createText();
      n998.fontName=FR;
      n998.fontSize=13.0;
      n998.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n998.x=274; n998.y=1207.5;
      n998.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n998);}
    {const n999=figma.createText();
      n999.fontName=FR;
      n999.fontSize=11.0;
      n999.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n999.x=1000.4; n999.y=1248;
      n999.characters='Subtotal dos produtos';
      F.appendChild(n999);}
    {const n1000=figma.createText();
      n1000.fontName=FB;
      n1000.fontSize=13.0;
      n1000.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1000.x=1170.7; n1000.y=1248;
      n1000.characters='R$ 761,70';
      F.appendChild(n1000);}
    {const n1001=figma.createFrame();
      n1001.x=265.0; n1001.y=1298.0;
      n1001.resize(Math.max(1,20),Math.max(1,20));
      n1001.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1001.clipsContent=false;
      n1001.cornerRadius=50.0;
      F.appendChild(n1001);
      {const n1002=figma.createText();
        n1002.fontName=FB;
        n1002.fontSize=9.0;
        n1002.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1002.x=6.8; n1002.y=4.5;
        n1002.characters='6';
        n1001.appendChild(n1002);}
    }
    {const n1003=figma.createText();
      n1003.fontName=FB;
      n1003.fontSize=13.0;
      n1003.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1003.x=295; n1003.y=1300;
      n1003.characters='Financeiro';
      F.appendChild(n1003);}
    {const n1004=figma.createText();
      n1004.fontName=FR;
      n1004.fontSize=11.0;
      n1004.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1004.x=265; n1004.y=1343;
      n1004.characters='Desconto (R$)';
      F.appendChild(n1004);}
    {const n1005=figma.createText();
      n1005.fontName=FR;
      n1005.fontSize=13.0;
      n1005.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1005.x=274; n1005.y=1366.5;
      n1005.characters='0';
      F.appendChild(n1005);}
    {const n1006=figma.createText();
      n1006.fontName=FR;
      n1006.fontSize=11.0;
      n1006.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1006.x=757; n1006.y=1343;
      n1006.characters='Frete (R$)';
      F.appendChild(n1006);}
    {const n1007=figma.createText();
      n1007.fontName=FR;
      n1007.fontSize=13.0;
      n1007.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1007.x=766; n1007.y=1366.5;
      n1007.characters='53,69';
      F.appendChild(n1007);}
    {const n1008=figma.createText();
      n1008.fontName=FR;
      n1008.fontSize=11.0;
      n1008.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1008.x=265; n1008.y=1399;
      n1008.characters='Total do Pedido';
      F.appendChild(n1008);}
    {const n1009=figma.createText();
      n1009.fontName=FB;
      n1009.fontSize=20.0;
      n1009.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1009.x=281; n1009.y=1426.5;
      n1009.characters='R$ 815,39';
      F.appendChild(n1009);}
    {const n1010=figma.createFrame();
      n1010.x=265.0; n1010.y=1495.0;
      n1010.resize(Math.max(1,20),Math.max(1,20));
      n1010.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1010.clipsContent=false;
      n1010.cornerRadius=50.0;
      F.appendChild(n1010);
      {const n1011=figma.createText();
        n1011.fontName=FB;
        n1011.fontSize=9.0;
        n1011.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1011.x=7.2; n1011.y=4.5;
        n1011.characters='7';
        n1010.appendChild(n1011);}
    }
    {const n1012=figma.createText();
      n1012.fontName=FB;
      n1012.fontSize=13.0;
      n1012.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1012.x=295; n1012.y=1497;
      n1012.characters='Pagamento';
      F.appendChild(n1012);}
    {const n1013=figma.createText();
      n1013.fontName=FB;
      n1013.fontSize=10.0;
      n1013.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1013.x=265; n1013.y=1540;
      n1013.characters='Forma';
      F.appendChild(n1013);}
    {const n1014=figma.createText();
      n1014.fontName=FB;
      n1014.fontSize=10.0;
      n1014.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1014.x=411; n1014.y=1540;
      n1014.characters='Data Pgto';
      F.appendChild(n1014);}
    {const n1015=figma.createText();
      n1015.fontName=FB;
      n1015.fontSize=10.0;
      n1015.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1015.x=541; n1015.y=1540;
      n1015.characters='Valor (R$)';
      F.appendChild(n1015);}
    {const n1016=figma.createText();
      n1016.fontName=FB;
      n1016.fontSize=10.0;
      n1016.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1016.x=657; n1016.y=1540;
      n1016.characters='Confirm.';
      F.appendChild(n1016);}
    {const n1017=figma.createText();
      n1017.fontName=FR;
      n1017.fontSize=12.0;
      n1017.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1017.x=274; n1017.y=1573;
      n1017.characters='Vindi';
      F.appendChild(n1017);}
    {const n1018=figma.createText();
      n1018.fontName=FR;
      n1018.fontSize=13.0;
      n1018.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1018.x=420; n1018.y=1572.5;
      n1018.characters='2025-12-16';
      F.appendChild(n1018);}
    {const n1019=figma.createText();
      n1019.fontName=FR;
      n1019.fontSize=13.0;
      n1019.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1019.x=550; n1019.y=1572.5;
      n1019.characters='815,39';
      F.appendChild(n1019);}
    {const n1020=figma.createText();
      n1020.fontName=FR;
      n1020.fontSize=13.3;
      n1020.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1020.x=699; n1020.y=1572;
      n1020.characters='on';
      F.appendChild(n1020);}
    {const n1021=figma.createText();
      n1021.fontName=FR;
      n1021.fontSize=12.0;
      n1021.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1021.x=292; n1021.y=1607.5;
      n1021.characters='Adicionar parcela';
      F.appendChild(n1021);}
    {const n1022=figma.createText();
      n1022.fontName=FR;
      n1022.fontSize=12.0;
      n1022.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1022.x=280; n1022.y=1653;
      n1022.characters='Total do pedido';
      F.appendChild(n1022);}
    {const n1023=figma.createText();
      n1023.fontName=FR;
      n1023.fontSize=12.0;
      n1023.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1023.x=1160.6; n1023.y=1654.5;
      n1023.characters='R$ 815,39';
      F.appendChild(n1023);}
    {const n1024=figma.createText();
      n1024.fontName=FR;
      n1024.fontSize=12.0;
      n1024.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1024.x=280; n1024.y=1673;
      n1024.characters='Total pago';
      F.appendChild(n1024);}
    {const n1025=figma.createText();
      n1025.fontName=FR;
      n1025.fontSize=12.0;
      n1025.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1025.x=1160.6; n1025.y=1674.5;
      n1025.characters='R$ 815,39';
      F.appendChild(n1025);}
    {const n1026=figma.createText();
      n1026.fontName=FB;
      n1026.fontSize=12.0;
      n1026.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1026.x=280; n1026.y=1693.5;
      n1026.characters='Falta pagar';
      F.appendChild(n1026);}
    {const n1027=figma.createText();
      n1027.fontName=FB;
      n1027.fontSize=12.0;
      n1027.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1027.x=1165.8; n1027.y=1695;
      n1027.characters='R$ 0,00';
      F.appendChild(n1027);}
    {const n1028=figma.createText();
      n1028.fontName=FR;
      n1028.fontSize=13.3;
      n1028.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1028.x=289; n1028.y=1726.5;
      n1028.characters='on';
      F.appendChild(n1028);}
    {const n1029=figma.createText();
      n1029.fontName=FR;
      n1029.fontSize=12.0;
      n1029.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1029.x=300; n1029.y=1726;
      n1029.characters='Vai pagar na retirada';
      F.appendChild(n1029);}
    {const n1030=figma.createFrame();
      n1030.x=265.0; n1030.y=1790.0;
      n1030.resize(Math.max(1,20),Math.max(1,20));
      n1030.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1030.clipsContent=false;
      n1030.cornerRadius=50.0;
      F.appendChild(n1030);
      {const n1031=figma.createText();
        n1031.fontName=FB;
        n1031.fontSize=9.0;
        n1031.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1031.x=6.8; n1031.y=4.5;
        n1031.characters='8';
        n1030.appendChild(n1031);}
    }
    {const n1032=figma.createText();
      n1032.fontName=FB;
      n1032.fontSize=13.0;
      n1032.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1032.x=295; n1032.y=1792;
      n1032.characters='Entrega';
      F.appendChild(n1032);}
    {const n1033=figma.createText();
      n1033.fontName=FR;
      n1033.fontSize=11.0;
      n1033.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1033.x=265; n1033.y=1835;
      n1033.characters='Data de Entrega';
      F.appendChild(n1033);}
    {const n1034=figma.createText();
      n1034.fontName=FR;
      n1034.fontSize=11.0;
      n1034.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1034.x=352.7; n1034.y=1835;
      n1034.characters='*';
      F.appendChild(n1034);}
    {const n1035=figma.createText();
      n1035.fontName=FR;
      n1035.fontSize=13.0;
      n1035.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1035.x=274; n1035.y=1858.5;
      n1035.characters='2025-12-23';
      F.appendChild(n1035);}
    {const n1036=figma.createText();
      n1036.fontName=FR;
      n1036.fontSize=11.0;
      n1036.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1036.x=757; n1036.y=1835;
      n1036.characters='Modalidade';
      F.appendChild(n1036);}
    {const n1037=figma.createText();
      n1037.fontName=FR;
      n1037.fontSize=11.0;
      n1037.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1037.x=820.4; n1037.y=1835;
      n1037.characters='*';
      F.appendChild(n1037);}
    {const n1038=figma.createText();
      n1038.fontName=FR;
      n1038.fontSize=13.0;
      n1038.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1038.x=766; n1038.y=1858.5;
      n1038.characters='SEDEX PLP';
      F.appendChild(n1038);}
    {const n1039=figma.createText();
      n1039.fontName=FB;
      n1039.fontSize=10.0;
      n1039.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1039.x=265; n1039.y=1896.5;
      n1039.characters='Destinatário';
      F.appendChild(n1039);}
    {const n1040=figma.createText();
      n1040.fontName=FR;
      n1040.fontSize=13.3;
      n1040.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1040.x=1083.7; n1040.y=1895.5;
      n1040.characters='on';
      F.appendChild(n1040);}
    {const n1041=figma.createText();
      n1041.fontName=FR;
      n1041.fontSize=12.0;
      n1041.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1041.x=1093.7; n1041.y=1895;
      n1041.characters='Mesmo que o comprador';
      F.appendChild(n1041);}
    {const n1042=figma.createText();
      n1042.fontName=FR;
      n1042.fontSize=11.0;
      n1042.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1042.x=265; n1042.y=1929;
      n1042.characters='Nome do Destinatário';
      F.appendChild(n1042);}
    {const n1043=figma.createText();
      n1043.fontName=FR;
      n1043.fontSize=11.0;
      n1043.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1043.x=383.5; n1043.y=1929;
      n1043.characters='*';
      F.appendChild(n1043);}
    {const n1044=figma.createText();
      n1044.fontName=FR;
      n1044.fontSize=11.0;
      n1044.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1044.x=265; n1044.y=1985;
      n1044.characters='Telefone';
      F.appendChild(n1044);}
    {const n1045=figma.createText();
      n1045.fontName=FR;
      n1045.fontSize=11.0;
      n1045.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1045.x=757; n1045.y=1985;
      n1045.characters='CPF';
      F.appendChild(n1045);}
    {const n1046=figma.createText();
      n1046.fontName=FR;
      n1046.fontSize=11.0;
      n1046.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1046.x=265; n1046.y=2041;
      n1046.characters='Email';
      F.appendChild(n1046);}
    {const n1047=figma.createText();
      n1047.fontName=FB;
      n1047.fontSize=10.0;
      n1047.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1047.x=265; n1047.y=2101;
      n1047.characters='Endereço';
      F.appendChild(n1047);}
    {const n1048=figma.createText();
      n1048.fontName=FR;
      n1048.fontSize=11.0;
      n1048.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1048.x=265; n1048.y=2132;
      n1048.characters='CEP';
      F.appendChild(n1048);}
    {const n1049=figma.createText();
      n1049.fontName=FR;
      n1049.fontSize=13.0;
      n1049.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1049.x=274; n1049.y=2155.5;
      n1049.characters='86975-000';
      F.appendChild(n1049);}
    {const n1050=figma.createText();
      n1050.fontName=FR;
      n1050.fontSize=11.0;
      n1050.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1050.x=265; n1050.y=2188;
      n1050.characters='Logradouro';
      F.appendChild(n1050);}
    {const n1051=figma.createText();
      n1051.fontName=FR;
      n1051.fontSize=13.0;
      n1051.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1051.x=274; n1051.y=2211.5;
      n1051.characters='Rua Gaspar Jerônimo da Silva';
      F.appendChild(n1051);}
    {const n1052=figma.createText();
      n1052.fontName=FR;
      n1052.fontSize=11.0;
      n1052.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1052.x=593; n1052.y=2188;
      n1052.characters='Número';
      F.appendChild(n1052);}
    {const n1053=figma.createText();
      n1053.fontName=FR;
      n1053.fontSize=13.0;
      n1053.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1053.x=602; n1053.y=2211.5;
      n1053.characters='393';
      F.appendChild(n1053);}
    {const n1054=figma.createText();
      n1054.fontName=FR;
      n1054.fontSize=11.0;
      n1054.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1054.x=265; n1054.y=2244;
      n1054.characters='Complemento';
      F.appendChild(n1054);}
    {const n1055=figma.createText();
      n1055.fontName=FR;
      n1055.fontSize=13.0;
      n1055.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1055.x=274; n1055.y=2267.5;
      n1055.characters='Apto, Bloco… (opcional)';
      F.appendChild(n1055);}
    {const n1056=figma.createText();
      n1056.fontName=FR;
      n1056.fontSize=11.0;
      n1056.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1056.x=511; n1056.y=2244;
      n1056.characters='Bairro';
      F.appendChild(n1056);}
    {const n1057=figma.createText();
      n1057.fontName=FR;
      n1057.fontSize=13.0;
      n1057.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1057.x=520; n1057.y=2267.5;
      n1057.characters='Jd Itália';
      F.appendChild(n1057);}
    {const n1058=figma.createText();
      n1058.fontName=FR;
      n1058.fontSize=11.0;
      n1058.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1058.x=757; n1058.y=2244;
      n1058.characters='Cidade';
      F.appendChild(n1058);}
    {const n1059=figma.createText();
      n1059.fontName=FR;
      n1059.fontSize=13.0;
      n1059.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1059.x=766; n1059.y=2267.5;
      n1059.characters='Mandaguari';
      F.appendChild(n1059);}
    {const n1060=figma.createText();
      n1060.fontName=FR;
      n1060.fontSize=11.0;
      n1060.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1060.x=265; n1060.y=2300;
      n1060.characters='UF';
      F.appendChild(n1060);}
    {const n1061=figma.createText();
      n1061.fontName=FR;
      n1061.fontSize=13.0;
      n1061.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1061.x=274; n1061.y=2323.5;
      n1061.characters='PR';
      F.appendChild(n1061);}
    {const n1062=figma.createText();
      n1062.fontName=FB;
      n1062.fontSize=10.0;
      n1062.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1062.x=265; n1062.y=2360;
      n1062.characters='Observações';
      F.appendChild(n1062);}
    {const n1063=figma.createText();
      n1063.fontName=FR;
      n1063.fontSize=11.0;
      n1063.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1063.x=265; n1063.y=2391;
      n1063.characters='Obs. Fábrica';
      F.appendChild(n1063);}
    {const n1064=figma.createText();
      n1064.fontName=FR;
      n1064.fontSize=13.0;
      n1064.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1064.x=274; n1064.y=2428.5;
      n1064.characters='Charutos enrolados no tecido personalizado + lacinho e tag';
      F.appendChild(n1064);}
    {const n1065=figma.createText();
      n1065.fontName=FR;
      n1065.fontSize=11.0;
      n1065.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1065.x=757; n1065.y=2391;
      n1065.characters='Info Motoboy';
      F.appendChild(n1065);}
    {const n1066=figma.createText();
      n1066.fontName=FB;
      n1066.fontSize=9.0;
      n1066.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n1066.x=271.8; n1066.y=2505.5;
      n1066.characters='9';
      F.appendChild(n1066);}
    {const n1067=figma.createText();
      n1067.fontName=FR;
      n1067.fontSize=12.0;
      n1067.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1067.x=295; n1067.y=2503.5;
      n1067.characters='Controle Interno';
      F.appendChild(n1067);}
    {const n1068=figma.createText();
      n1068.fontName=FR;
      n1068.fontSize=11.0;
      n1068.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1068.x=1088.2; n1068.y=2504.5;
      n1068.characters='Uso interno da operação';
      F.appendChild(n1068);}
    {const n1069=figma.createText();
      n1069.fontName=FR;
      n1069.fontSize=10.0;
      n1069.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1069.x=1225.1; n1069.y=2507.1;
      n1069.characters='▼';
      F.appendChild(n1069);}
    {const n1070=figma.createText();
      n1070.fontName=FR;
      n1070.fontSize=10.0;
      n1070.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1070.x=248; n1070.y=1060;
      n1070.characters='Pedido';
      F.appendChild(n1070);}
    {const n1071=figma.createText();
      n1071.fontName=FB;
      n1071.fontSize=13.0;
      n1071.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1071.x=248; n1071.y=1074;
      n1071.characters='#25853';
      F.appendChild(n1071);}
    {const n1072=figma.createText();
      n1072.fontName=FR;
      n1072.fontSize=10.0;
      n1072.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1072.x=327.9; n1072.y=1060;
      n1072.characters='Total';
      F.appendChild(n1072);}
    {const n1073=figma.createText();
      n1073.fontName=FB;
      n1073.fontSize=13.0;
      n1073.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1073.x=327.9; n1073.y=1074;
      n1073.characters='R$ 815,39';
      F.appendChild(n1073);}
    {const n1074=figma.createText();
      n1074.fontName=FR;
      n1074.fontSize=10.0;
      n1074.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1074.x=429.2; n1074.y=1060;
      n1074.characters='Falta pagar';
      F.appendChild(n1074);}
    {const n1075=figma.createText();
      n1075.fontName=FB;
      n1075.fontSize=13.0;
      n1075.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1075.x=429.2; n1075.y=1074;
      n1075.characters='R$ 0,00';
      F.appendChild(n1075);}
    {const n1076=figma.createText();
      n1076.fontName=FR;
      n1076.fontSize=13.0;
      n1076.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1076.x=1018.7; n1076.y=1066;
      n1076.characters='Limpar';
      F.appendChild(n1076);}
    {const n1077=figma.createFrame();
      n1077.x=1083.2; n1077.y=1057.0;
      n1077.resize(Math.max(1,168.8),Math.max(1,34));
      n1077.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1077.clipsContent=false;
      n1077.cornerRadius=4.0;
      F.appendChild(n1077);
      {const n1078=figma.createText();
        n1078.fontName=FB;
        n1078.fontSize=13.0;
        n1078.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1078.x=39; n1078.y=9;
        n1078.characters='Cadastrar Pedido';
        n1077.appendChild(n1078);}
    }
    {const n1079=figma.createText();
      n1079.fontName=FR;
      n1079.fontSize=11.0;
      n1079.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1079.x=30; n1079.y=2621;
      n1079.characters='Pedido #25853 · obs. fábrica preenchida · R$ 815,39';
      F.appendChild(n1079);}
    {const n1080=figma.createText();
      n1080.fontName=FR;
      n1080.fontSize=11.0;
      n1080.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1080.x=1241.8; n1080.y=2622;
      n1080.characters='v4.2';
      F.appendChild(n1080);}
  }
  await Promise.resolve();

  // ── A7: Seção 9 — Controle Interno expandida
  {const F=figma.createFrame();
    F.x=8160; F.y=0;
    F.resize(1280,2726);
    F.name='A7 — Seção 9 — Controle Interno expandida';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n1081=figma.createFrame();
      n1081.x=0.0; n1081.y=0.0;
      n1081.resize(Math.max(1,1280),Math.max(1,38));
      n1081.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1081.clipsContent=false;
      F.appendChild(n1081);
      {const n1082=figma.createFrame();
        n1082.x=14.0; n1082.y=8.0;
        n1082.resize(Math.max(1,22),Math.max(1,22));
        n1082.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1082.clipsContent=false;
        n1082.cornerRadius=5.0;
        n1081.appendChild(n1082);
        {const n1083=figma.createText();
          n1083.fontName=FB;
          n1083.fontSize=10.0;
          n1083.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1083.x=2.5; n1083.y=5;
          n1083.characters='MC';
          n1082.appendChild(n1083);}
      }
      {const n1084=figma.createText();
        n1084.fontName=FR;
        n1084.fontSize=13.0;
        n1084.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1084.x=44; n1084.y=11;
        n1084.characters='Maria Cacau — Gestão de Pedidos';
        n1081.appendChild(n1084);}
    }
    {const n1085=figma.createFrame();
      n1085.x=0.0; n1085.y=38.0;
      n1085.resize(Math.max(1,220),Math.max(1,2660));
      n1085.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1085.clipsContent=false;
      F.appendChild(n1085);
      {const n1086=figma.createFrame();
        n1086.x=14.0; n1086.y=14.0;
        n1086.resize(Math.max(1,38),Math.max(1,38));
        n1086.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1086.clipsContent=false;
        n1086.cornerRadius=8.0;
        n1085.appendChild(n1086);
        {const n1087=figma.createText();
          n1087.fontName=FB;
          n1087.fontSize=14.0;
          n1087.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1087.x=7.5; n1087.y=10.5;
          n1087.characters='MC';
          n1086.appendChild(n1087);}
      }
      {const n1088=figma.createText();
        n1088.fontName=FB;
        n1088.fontSize=13.0;
        n1088.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1088.x=62; n1088.y=18.5;
        n1088.characters='Maria Cacau';
        n1085.appendChild(n1088);}
      {const n1089=figma.createText();
        n1089.fontName=FR;
        n1089.fontSize=10.0;
        n1089.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1089.x=62; n1089.y=35.5;
        n1089.characters='Gestão de Pedidos';
        n1085.appendChild(n1089);}
      {const n1090=figma.createText();
        n1090.fontName=FB;
        n1090.fontSize=10.0;
        n1090.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1090.x=16; n1090.y=85;
        n1090.characters='Pedidos';
        n1085.appendChild(n1090);}
      {const n1091=figma.createFrame();
        n1091.x=8.0; n1091.y=101.0;
        n1091.resize(Math.max(1,204),Math.max(1,34));
        n1091.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n1091.clipsContent=false;
        n1091.cornerRadius=8.0;
        n1085.appendChild(n1091);
        {const n1092=figma.createText();
          n1092.fontName=FB;
          n1092.fontSize=13.0;
          n1092.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1092.x=38; n1092.y=9;
          n1092.characters='Novo Pedido';
          n1091.appendChild(n1092);}
        {const n1093=figma.createFrame();
          n1093.x=160.4; n1093.y=10.5;
          n1093.resize(Math.max(1,33.6),Math.max(1,13));
          n1093.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n1093.clipsContent=false;
          n1093.cornerRadius=8.0;
          n1091.appendChild(n1093);
          {const n1094=figma.createText();
            n1094.fontName=FB;
            n1094.fontSize=9.0;
            n1094.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n1094.x=5; n1094.y=1;
            n1094.characters='Novo';
            n1093.appendChild(n1094);}
        }
      }
      {const n1095=figma.createText();
        n1095.fontName=FB;
        n1095.fontSize=10.0;
        n1095.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1095.x=16; n1095.y=145;
        n1095.characters='Consultas';
        n1085.appendChild(n1095);}
      {const n1096=figma.createText();
        n1096.fontName=FR;
        n1096.fontSize=13.0;
        n1096.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1096.x=46; n1096.y=170;
        n1096.characters='Produtos';
        n1085.appendChild(n1096);}
      {const n1097=figma.createText();
        n1097.fontName=FR;
        n1097.fontSize=13.0;
        n1097.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1097.x=46; n1097.y=206;
        n1097.characters='Entregas';
        n1085.appendChild(n1097);}
      {const n1098=figma.createText();
        n1098.fontName=FR;
        n1098.fontSize=13.0;
        n1098.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1098.x=46; n1098.y=242;
        n1098.characters='Verificar CPF';
        n1085.appendChild(n1098);}
      {const n1099=figma.createText();
        n1099.fontName=FB;
        n1099.fontSize=10.0;
        n1099.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1099.x=16; n1099.y=277;
        n1099.characters='Em breve';
        n1085.appendChild(n1099);}
      {const n1100=figma.createText();
        n1100.fontName=FR;
        n1100.fontSize=13.0;
        n1100.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1100.x=46; n1100.y=302;
        n1100.characters='Frete por CEP';
        n1085.appendChild(n1100);}
      {const n1101=figma.createFrame();
        n1101.x=169.2; n1101.y=303.5;
        n1101.resize(Math.max(1,32.8),Math.max(1,13));
        n1101.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1101.clipsContent=false;
        n1101.cornerRadius=8.0;
        n1101.opacity=0.36;
        n1085.appendChild(n1101);
        {const n1102=figma.createText();
          n1102.fontName=FB;
          n1102.fontSize=9.0;
          n1102.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1102.x=5; n1102.y=1;
          n1102.characters='Logo';
          n1101.appendChild(n1102);}
      }
      {const n1103=figma.createText();
        n1103.fontName=FR;
        n1103.fontSize=13.0;
        n1103.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1103.x=46; n1103.y=338;
        n1103.characters='Nota Fiscal';
        n1085.appendChild(n1103);}
      {const n1104=figma.createFrame();
        n1104.x=169.2; n1104.y=339.5;
        n1104.resize(Math.max(1,32.8),Math.max(1,13));
        n1104.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1104.clipsContent=false;
        n1104.cornerRadius=8.0;
        n1104.opacity=0.36;
        n1085.appendChild(n1104);
        {const n1105=figma.createText();
          n1105.fontName=FB;
          n1105.fontSize=9.0;
          n1105.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1105.x=5; n1105.y=1;
          n1105.characters='Logo';
          n1104.appendChild(n1105);}
      }
    }
    {const n1106=figma.createText();
      n1106.fontName=FB;
      n1106.fontSize=20.0;
      n1106.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1106.x=248; n1106.y=62;
      n1106.characters='Novo Pedido';
      F.appendChild(n1106);}
    {const n1107=figma.createText();
      n1107.fontName=FR;
      n1107.fontSize=13.0;
      n1107.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1107.x=248; n1107.y=88;
      n1107.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n1107);}
    {const n1108=figma.createFrame();
      n1108.x=265.0; n1108.y=133.0;
      n1108.resize(Math.max(1,20),Math.max(1,20));
      n1108.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1108.clipsContent=false;
      n1108.cornerRadius=50.0;
      F.appendChild(n1108);
      {const n1109=figma.createText();
        n1109.fontName=FB;
        n1109.fontSize=9.0;
        n1109.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1109.x=7.6; n1109.y=4.5;
        n1109.characters='1';
        n1108.appendChild(n1109);}
    }
    {const n1110=figma.createText();
      n1110.fontName=FB;
      n1110.fontSize=13.0;
      n1110.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1110.x=295; n1110.y=135;
      n1110.characters='Identificação do Pedido';
      F.appendChild(n1110);}
    {const n1111=figma.createText();
      n1111.fontName=FR;
      n1111.fontSize=11.0;
      n1111.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1111.x=265; n1111.y=178;
      n1111.characters='Nº Pedido';
      F.appendChild(n1111);}
    {const n1112=figma.createText();
      n1112.fontName=FR;
      n1112.fontSize=11.0;
      n1112.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1112.x=319.2; n1112.y=178;
      n1112.characters='*';
      F.appendChild(n1112);}
    {const n1113=figma.createText();
      n1113.fontName=FR;
      n1113.fontSize=13.0;
      n1113.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1113.x=274; n1113.y=201.5;
      n1113.characters='25859';
      F.appendChild(n1113);}
    {const n1114=figma.createText();
      n1114.fontName=FR;
      n1114.fontSize=11.0;
      n1114.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1114.x=757; n1114.y=178;
      n1114.characters='Como Conheceu';
      F.appendChild(n1114);}
    {const n1115=figma.createText();
      n1115.fontName=FR;
      n1115.fontSize=13.0;
      n1115.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1115.x=766; n1115.y=201.5;
      n1115.characters='Cliente';
      F.appendChild(n1115);}
    {const n1116=figma.createFrame();
      n1116.x=265.0; n1116.y=260.0;
      n1116.resize(Math.max(1,20),Math.max(1,20));
      n1116.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1116.clipsContent=false;
      n1116.cornerRadius=50.0;
      F.appendChild(n1116);
      {const n1117=figma.createText();
        n1117.fontName=FB;
        n1117.fontSize=9.0;
        n1117.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1117.x=7; n1117.y=4.5;
        n1117.characters='2';
        n1116.appendChild(n1117);}
    }
    {const n1118=figma.createText();
      n1118.fontName=FB;
      n1118.fontSize=13.0;
      n1118.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1118.x=295; n1118.y=262;
      n1118.characters='Comprador';
      F.appendChild(n1118);}
    {const n1119=figma.createText();
      n1119.fontName=FR;
      n1119.fontSize=11.0;
      n1119.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1119.x=265; n1119.y=305;
      n1119.characters='Nome do Comprador';
      F.appendChild(n1119);}
    {const n1120=figma.createText();
      n1120.fontName=FR;
      n1120.fontSize=11.0;
      n1120.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1120.x=378.2; n1120.y=305;
      n1120.characters='*';
      F.appendChild(n1120);}
    {const n1121=figma.createText();
      n1121.fontName=FR;
      n1121.fontSize=13.0;
      n1121.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1121.x=274; n1121.y=328.5;
      n1121.characters='Bruna Otani Wada';
      F.appendChild(n1121);}
    {const n1122=figma.createText();
      n1122.fontName=FR;
      n1122.fontSize=11.0;
      n1122.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1122.x=265; n1122.y=361;
      n1122.characters='Parentesco';
      F.appendChild(n1122);}
    {const n1123=figma.createText();
      n1123.fontName=FR;
      n1123.fontSize=13.0;
      n1123.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1123.x=274; n1123.y=384.5;
      n1123.characters='Mãe';
      F.appendChild(n1123);}
    {const n1124=figma.createText();
      n1124.fontName=FR;
      n1124.fontSize=11.0;
      n1124.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1124.x=757; n1124.y=361;
      n1124.characters='Telefone';
      F.appendChild(n1124);}
    {const n1125=figma.createText();
      n1125.fontName=FR;
      n1125.fontSize=11.0;
      n1125.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1125.x=803.6; n1125.y=361;
      n1125.characters='*';
      F.appendChild(n1125);}
    {const n1126=figma.createText();
      n1126.fontName=FR;
      n1126.fontSize=13.0;
      n1126.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1126.x=766; n1126.y=384.5;
      n1126.characters='(11) 99988-7137';
      F.appendChild(n1126);}
    {const n1127=figma.createText();
      n1127.fontName=FR;
      n1127.fontSize=11.0;
      n1127.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1127.x=265; n1127.y=417;
      n1127.characters='CPF';
      F.appendChild(n1127);}
    {const n1128=figma.createText();
      n1128.fontName=FR;
      n1128.fontSize=13.0;
      n1128.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1128.x=274; n1128.y=440.5;
      n1128.characters='228.085.478-38';
      F.appendChild(n1128);}
    {const n1129=figma.createText();
      n1129.fontName=FR;
      n1129.fontSize=11.0;
      n1129.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1129.x=757; n1129.y=417;
      n1129.characters='Email';
      F.appendChild(n1129);}
    {const n1130=figma.createText();
      n1130.fontName=FR;
      n1130.fontSize=13.0;
      n1130.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1130.x=766; n1130.y=440.5;
      n1130.characters='bruna.otaniwada@gmail.com';
      F.appendChild(n1130);}
    {const n1131=figma.createFrame();
      n1131.x=265.0; n1131.y=499.0;
      n1131.resize(Math.max(1,20),Math.max(1,20));
      n1131.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1131.clipsContent=false;
      n1131.cornerRadius=50.0;
      F.appendChild(n1131);
      {const n1132=figma.createText();
        n1132.fontName=FB;
        n1132.fontSize=9.0;
        n1132.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1132.x=6.9; n1132.y=4.5;
        n1132.characters='3';
        n1131.appendChild(n1132);}
    }
    {const n1133=figma.createText();
      n1133.fontName=FB;
      n1133.fontSize=13.0;
      n1133.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1133.x=295; n1133.y=501;
      n1133.characters='Presenteado & Evento';
      F.appendChild(n1133);}
    {const n1134=figma.createText();
      n1134.fontName=FR;
      n1134.fontSize=11.0;
      n1134.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1134.x=265; n1134.y=544;
      n1134.characters='Nome do Presenteado';
      F.appendChild(n1134);}
    {const n1135=figma.createText();
      n1135.fontName=FR;
      n1135.fontSize=13.0;
      n1135.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1135.x=274; n1135.y=567.5;
      n1135.characters='Laura';
      F.appendChild(n1135);}
    {const n1136=figma.createText();
      n1136.fontName=FR;
      n1136.fontSize=11.0;
      n1136.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1136.x=265; n1136.y=600;
      n1136.characters='Sexo';
      F.appendChild(n1136);}
    {const n1137=figma.createFrame();
      n1137.x=265.0; n1137.y=616.0;
      n1137.resize(Math.max(1,96.4),Math.max(1,30));
      n1137.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1137.clipsContent=false;
      n1137.strokes=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1137.strokeWeight=1.0; n1137.strokeAlign='INSIDE';
      n1137.topLeftRadius=4.0;n1137.topRightRadius=0.0;n1137.bottomLeftRadius=4.0;n1137.bottomRightRadius=0.0;
      F.appendChild(n1137);
      {const n1138=figma.createText();
        n1138.fontName=FR;
        n1138.fontSize=11.0;
        n1138.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1138.x=24.5; n1138.y=8.5;
        n1138.characters='Feminino';
        n1137.appendChild(n1138);}
    }
    {const n1139=figma.createText();
      n1139.fontName=FR;
      n1139.fontSize=11.0;
      n1139.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1139.x=382.09999999999997; n1139.y=624.5;
      n1139.characters='Masculino';
      F.appendChild(n1139);}
    {const n1140=figma.createText();
      n1140.fontName=FR;
      n1140.fontSize=11.0;
      n1140.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1140.x=482.7; n1140.y=624.5;
      n1140.characters='Gêmeas';
      F.appendChild(n1140);}
    {const n1141=figma.createText();
      n1141.fontName=FR;
      n1141.fontSize=11.0;
      n1141.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1141.x=577.9000000000001; n1141.y=624.5;
      n1141.characters='Gêmeos';
      F.appendChild(n1141);}
    {const n1142=figma.createText();
      n1142.fontName=FR;
      n1142.fontSize=11.0;
      n1142.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1142.x=670.2; n1142.y=624.5;
      n1142.characters='Não sabe';
      F.appendChild(n1142);}
    {const n1143=figma.createText();
      n1143.fontName=FR;
      n1143.fontSize=11.0;
      n1143.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1143.x=757; n1143.y=600;
      n1143.characters='Tipo de Evento';
      F.appendChild(n1143);}
    {const n1144=figma.createText();
      n1144.fontName=FR;
      n1144.fontSize=13.0;
      n1144.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1144.x=766; n1144.y=623.5;
      n1144.characters='Maternidade';
      F.appendChild(n1144);}
    {const n1145=figma.createText();
      n1145.fontName=FR;
      n1145.fontSize=11.0;
      n1145.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1145.x=265; n1145.y=656;
      n1145.characters='Data do Evento';
      F.appendChild(n1145);}
    {const n1146=figma.createText();
      n1146.fontName=FR;
      n1146.fontSize=13.0;
      n1146.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1146.x=274; n1146.y=679.5;
      n1146.characters='2026-01-28';
      F.appendChild(n1146);}
    {const n1147=figma.createFrame();
      n1147.x=265.0; n1147.y=738.0;
      n1147.resize(Math.max(1,20),Math.max(1,20));
      n1147.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1147.clipsContent=false;
      n1147.cornerRadius=50.0;
      F.appendChild(n1147);
      {const n1148=figma.createText();
        n1148.fontName=FB;
        n1148.fontSize=9.0;
        n1148.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1148.x=6.8; n1148.y=4.5;
        n1148.characters='4';
        n1147.appendChild(n1148);}
    }
    {const n1149=figma.createText();
      n1149.fontName=FB;
      n1149.fontSize=13.0;
      n1149.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1149.x=295; n1149.y=740;
      n1149.characters='Personalização';
      F.appendChild(n1149);}
    {const n1150=figma.createText();
      n1150.fontName=FR;
      n1150.fontSize=11.0;
      n1150.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1150.x=1138; n1150.y=741.5;
      n1150.characters='Arte & embalagem';
      F.appendChild(n1150);}
    {const n1151=figma.createText();
      n1151.fontName=FR;
      n1151.fontSize=11.0;
      n1151.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1151.x=265; n1151.y=783;
      n1151.characters='Nome da Etiqueta';
      F.appendChild(n1151);}
    {const n1152=figma.createText();
      n1152.fontName=FR;
      n1152.fontSize=13.0;
      n1152.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1152.x=274; n1152.y=806.5;
      n1152.characters='Laura';
      F.appendChild(n1152);}
    {const n1153=figma.createText();
      n1153.fontName=FR;
      n1153.fontSize=11.0;
      n1153.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1153.x=757; n1153.y=783;
      n1153.characters='Tema da Etiqueta';
      F.appendChild(n1153);}
    {const n1154=figma.createText();
      n1154.fontName=FR;
      n1154.fontSize=13.0;
      n1154.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1154.x=766; n1154.y=806.5;
      n1154.characters='floral';
      F.appendChild(n1154);}
    {const n1155=figma.createText();
      n1155.fontName=FR;
      n1155.fontSize=11.0;
      n1155.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1155.x=265; n1155.y=839;
      n1155.characters='Nome na Caixa';
      F.appendChild(n1155);}
    {const n1156=figma.createText();
      n1156.fontName=FR;
      n1156.fontSize=13.0;
      n1156.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1156.x=274; n1156.y=862.5;
      n1156.characters='Laura';
      F.appendChild(n1156);}
    {const n1157=figma.createText();
      n1157.fontName=FR;
      n1157.fontSize=11.0;
      n1157.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1157.x=757; n1157.y=839;
      n1157.characters='Arte / Tecido da Caixa';
      F.appendChild(n1157);}
    {const n1158=figma.createText();
      n1158.fontName=FR;
      n1158.fontSize=13.0;
      n1158.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1158.x=766; n1158.y=862.5;
      n1158.characters='floral rosa';
      F.appendChild(n1158);}
    {const n1159=figma.createText();
      n1159.fontName=FR;
      n1159.fontSize=11.0;
      n1159.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1159.x=265; n1159.y=895;
      n1159.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n1159);}
    {const n1160=figma.createText();
      n1160.fontName=FR;
      n1160.fontSize=13.0;
      n1160.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1160.x=274; n1160.y=918.5;
      n1160.characters='0';
      F.appendChild(n1160);}
    {const n1161=figma.createFrame();
      n1161.x=265.0; n1161.y=977.0;
      n1161.resize(Math.max(1,20),Math.max(1,20));
      n1161.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1161.clipsContent=false;
      n1161.cornerRadius=50.0;
      F.appendChild(n1161);
      {const n1162=figma.createText();
        n1162.fontName=FB;
        n1162.fontSize=9.0;
        n1162.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1162.x=6.9; n1162.y=4.5;
        n1162.characters='5';
        n1161.appendChild(n1162);}
    }
    {const n1163=figma.createText();
      n1163.fontName=FB;
      n1163.fontSize=13.0;
      n1163.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1163.x=295; n1163.y=979;
      n1163.characters='Produtos';
      F.appendChild(n1163);}
    {const n1164=figma.createText();
      n1164.fontName=FR;
      n1164.fontSize=11.0;
      n1164.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1164.x=1203.9; n1164.y=980.5;
      n1164.characters='1 item';
      F.appendChild(n1164);}
    {const n1165=figma.createText();
      n1165.fontName=FB;
      n1165.fontSize=10.0;
      n1165.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1165.x=265; n1165.y=1022;
      n1165.characters='Produto';
      F.appendChild(n1165);}
    {const n1166=figma.createText();
      n1166.fontName=FB;
      n1166.fontSize=10.0;
      n1166.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1166.x=937; n1166.y=1022;
      n1166.characters='Qtd';
      F.appendChild(n1166);}
    {const n1167=figma.createText();
      n1167.fontName=FB;
      n1167.fontSize=10.0;
      n1167.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1167.x=1007; n1167.y=1022;
      n1167.characters='R$ Unit.';
      F.appendChild(n1167);}
    {const n1168=figma.createText();
      n1168.fontName=FB;
      n1168.fontSize=10.0;
      n1168.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1168.x=1113; n1168.y=1022;
      n1168.characters='Total';
      F.appendChild(n1168);}
    {const n1169=figma.createText();
      n1169.fontName=FR;
      n1169.fontSize=13.0;
      n1169.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1169.x=274; n1169.y=1054.5;
      n1169.characters='Cartão 7x10 com Mini Tabletinho chocolate ao leite';
      F.appendChild(n1169);}
    {const n1170=figma.createText();
      n1170.fontName=FR;
      n1170.fontSize=13.0;
      n1170.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1170.x=946; n1170.y=1054.5;
      n1170.characters='40';
      F.appendChild(n1170);}
    {const n1171=figma.createText();
      n1171.fontName=FR;
      n1171.fontSize=13.0;
      n1171.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1171.x=1016; n1171.y=1054.5;
      n1171.characters='6,90';
      F.appendChild(n1171);}
    {const n1172=figma.createText();
      n1172.fontName=FR;
      n1172.fontSize=12.0;
      n1172.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1172.x=1123; n1172.y=1056;
      n1172.characters='R$ 276,00';
      F.appendChild(n1172);}
    {const n1173=figma.createText();
      n1173.fontName=FR;
      n1173.fontSize=12.0;
      n1173.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1173.x=292; n1173.y=1089.5;
      n1173.characters='Adicionar produto';
      F.appendChild(n1173);}
    {const n1174=figma.createText();
      n1174.fontName=FR;
      n1174.fontSize=11.0;
      n1174.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1174.x=265; n1174.y=1110;
      n1174.characters='Outros (descrição livre)';
      F.appendChild(n1174);}
    {const n1175=figma.createText();
      n1175.fontName=FR;
      n1175.fontSize=13.0;
      n1175.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1175.x=274; n1175.y=1133.5;
      n1175.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n1175);}
    {const n1176=figma.createText();
      n1176.fontName=FR;
      n1176.fontSize=11.0;
      n1176.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1176.x=1000.4; n1176.y=1174;
      n1176.characters='Subtotal dos produtos';
      F.appendChild(n1176);}
    {const n1177=figma.createText();
      n1177.fontName=FB;
      n1177.fontSize=13.0;
      n1177.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1177.x=1170.7; n1177.y=1174;
      n1177.characters='R$ 276,00';
      F.appendChild(n1177);}
    {const n1178=figma.createFrame();
      n1178.x=265.0; n1178.y=1224.0;
      n1178.resize(Math.max(1,20),Math.max(1,20));
      n1178.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1178.clipsContent=false;
      n1178.cornerRadius=50.0;
      F.appendChild(n1178);
      {const n1179=figma.createText();
        n1179.fontName=FB;
        n1179.fontSize=9.0;
        n1179.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1179.x=6.8; n1179.y=4.5;
        n1179.characters='6';
        n1178.appendChild(n1179);}
    }
    {const n1180=figma.createText();
      n1180.fontName=FB;
      n1180.fontSize=13.0;
      n1180.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1180.x=295; n1180.y=1226;
      n1180.characters='Financeiro';
      F.appendChild(n1180);}
    {const n1181=figma.createText();
      n1181.fontName=FR;
      n1181.fontSize=11.0;
      n1181.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1181.x=265; n1181.y=1269;
      n1181.characters='Desconto (R$)';
      F.appendChild(n1181);}
    {const n1182=figma.createText();
      n1182.fontName=FR;
      n1182.fontSize=13.0;
      n1182.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1182.x=274; n1182.y=1292.5;
      n1182.characters='0';
      F.appendChild(n1182);}
    {const n1183=figma.createText();
      n1183.fontName=FR;
      n1183.fontSize=11.0;
      n1183.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1183.x=757; n1183.y=1269;
      n1183.characters='Frete (R$)';
      F.appendChild(n1183);}
    {const n1184=figma.createText();
      n1184.fontName=FR;
      n1184.fontSize=13.0;
      n1184.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1184.x=766; n1184.y=1292.5;
      n1184.characters='19,96';
      F.appendChild(n1184);}
    {const n1185=figma.createText();
      n1185.fontName=FR;
      n1185.fontSize=11.0;
      n1185.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1185.x=265; n1185.y=1325;
      n1185.characters='Total do Pedido';
      F.appendChild(n1185);}
    {const n1186=figma.createText();
      n1186.fontName=FB;
      n1186.fontSize=20.0;
      n1186.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1186.x=281; n1186.y=1352.5;
      n1186.characters='R$ 295,96';
      F.appendChild(n1186);}
    {const n1187=figma.createFrame();
      n1187.x=265.0; n1187.y=1421.0;
      n1187.resize(Math.max(1,20),Math.max(1,20));
      n1187.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1187.clipsContent=false;
      n1187.cornerRadius=50.0;
      F.appendChild(n1187);
      {const n1188=figma.createText();
        n1188.fontName=FB;
        n1188.fontSize=9.0;
        n1188.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1188.x=7.2; n1188.y=4.5;
        n1188.characters='7';
        n1187.appendChild(n1188);}
    }
    {const n1189=figma.createText();
      n1189.fontName=FB;
      n1189.fontSize=13.0;
      n1189.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1189.x=295; n1189.y=1423;
      n1189.characters='Pagamento';
      F.appendChild(n1189);}
    {const n1190=figma.createText();
      n1190.fontName=FB;
      n1190.fontSize=10.0;
      n1190.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1190.x=265; n1190.y=1466;
      n1190.characters='Forma';
      F.appendChild(n1190);}
    {const n1191=figma.createText();
      n1191.fontName=FB;
      n1191.fontSize=10.0;
      n1191.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1191.x=411; n1191.y=1466;
      n1191.characters='Data Pgto';
      F.appendChild(n1191);}
    {const n1192=figma.createText();
      n1192.fontName=FB;
      n1192.fontSize=10.0;
      n1192.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1192.x=541; n1192.y=1466;
      n1192.characters='Valor (R$)';
      F.appendChild(n1192);}
    {const n1193=figma.createText();
      n1193.fontName=FB;
      n1193.fontSize=10.0;
      n1193.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1193.x=657; n1193.y=1466;
      n1193.characters='Confirm.';
      F.appendChild(n1193);}
    {const n1194=figma.createText();
      n1194.fontName=FR;
      n1194.fontSize=12.0;
      n1194.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1194.x=274; n1194.y=1499;
      n1194.characters='Créd 2x';
      F.appendChild(n1194);}
    {const n1195=figma.createText();
      n1195.fontName=FR;
      n1195.fontSize=13.0;
      n1195.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1195.x=420; n1195.y=1498.5;
      n1195.characters='2025-12-13';
      F.appendChild(n1195);}
    {const n1196=figma.createText();
      n1196.fontName=FR;
      n1196.fontSize=13.0;
      n1196.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1196.x=550; n1196.y=1498.5;
      n1196.characters='295,96';
      F.appendChild(n1196);}
    {const n1197=figma.createText();
      n1197.fontName=FR;
      n1197.fontSize=13.3;
      n1197.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1197.x=699; n1197.y=1498;
      n1197.characters='on';
      F.appendChild(n1197);}
    {const n1198=figma.createText();
      n1198.fontName=FR;
      n1198.fontSize=12.0;
      n1198.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1198.x=292; n1198.y=1533.5;
      n1198.characters='Adicionar parcela';
      F.appendChild(n1198);}
    {const n1199=figma.createText();
      n1199.fontName=FR;
      n1199.fontSize=12.0;
      n1199.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1199.x=280; n1199.y=1579;
      n1199.characters='Total do pedido';
      F.appendChild(n1199);}
    {const n1200=figma.createText();
      n1200.fontName=FR;
      n1200.fontSize=12.0;
      n1200.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1200.x=1160.6; n1200.y=1580.5;
      n1200.characters='R$ 295,96';
      F.appendChild(n1200);}
    {const n1201=figma.createText();
      n1201.fontName=FR;
      n1201.fontSize=12.0;
      n1201.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1201.x=280; n1201.y=1599;
      n1201.characters='Total pago';
      F.appendChild(n1201);}
    {const n1202=figma.createText();
      n1202.fontName=FR;
      n1202.fontSize=12.0;
      n1202.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1202.x=1160.6; n1202.y=1600.5;
      n1202.characters='R$ 295,96';
      F.appendChild(n1202);}
    {const n1203=figma.createText();
      n1203.fontName=FB;
      n1203.fontSize=12.0;
      n1203.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1203.x=280; n1203.y=1619.5;
      n1203.characters='Falta pagar';
      F.appendChild(n1203);}
    {const n1204=figma.createText();
      n1204.fontName=FB;
      n1204.fontSize=12.0;
      n1204.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1204.x=1165.8; n1204.y=1621;
      n1204.characters='R$ 0,00';
      F.appendChild(n1204);}
    {const n1205=figma.createText();
      n1205.fontName=FR;
      n1205.fontSize=13.3;
      n1205.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1205.x=289; n1205.y=1652.5;
      n1205.characters='on';
      F.appendChild(n1205);}
    {const n1206=figma.createText();
      n1206.fontName=FR;
      n1206.fontSize=12.0;
      n1206.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1206.x=300; n1206.y=1652;
      n1206.characters='Vai pagar na retirada';
      F.appendChild(n1206);}
    {const n1207=figma.createFrame();
      n1207.x=265.0; n1207.y=1716.0;
      n1207.resize(Math.max(1,20),Math.max(1,20));
      n1207.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1207.clipsContent=false;
      n1207.cornerRadius=50.0;
      F.appendChild(n1207);
      {const n1208=figma.createText();
        n1208.fontName=FB;
        n1208.fontSize=9.0;
        n1208.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1208.x=6.8; n1208.y=4.5;
        n1208.characters='8';
        n1207.appendChild(n1208);}
    }
    {const n1209=figma.createText();
      n1209.fontName=FB;
      n1209.fontSize=13.0;
      n1209.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1209.x=295; n1209.y=1718;
      n1209.characters='Entrega';
      F.appendChild(n1209);}
    {const n1210=figma.createText();
      n1210.fontName=FR;
      n1210.fontSize=11.0;
      n1210.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1210.x=265; n1210.y=1761;
      n1210.characters='Data de Entrega';
      F.appendChild(n1210);}
    {const n1211=figma.createText();
      n1211.fontName=FR;
      n1211.fontSize=11.0;
      n1211.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1211.x=352.7; n1211.y=1761;
      n1211.characters='*';
      F.appendChild(n1211);}
    {const n1212=figma.createText();
      n1212.fontName=FR;
      n1212.fontSize=13.0;
      n1212.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1212.x=274; n1212.y=1784.5;
      n1212.characters='2025-12-22';
      F.appendChild(n1212);}
    {const n1213=figma.createText();
      n1213.fontName=FR;
      n1213.fontSize=11.0;
      n1213.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1213.x=757; n1213.y=1761;
      n1213.characters='Modalidade';
      F.appendChild(n1213);}
    {const n1214=figma.createText();
      n1214.fontName=FR;
      n1214.fontSize=11.0;
      n1214.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1214.x=820.4; n1214.y=1761;
      n1214.characters='*';
      F.appendChild(n1214);}
    {const n1215=figma.createText();
      n1215.fontName=FR;
      n1215.fontSize=13.0;
      n1215.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1215.x=766; n1215.y=1784.5;
      n1215.characters='SEDEX PLP';
      F.appendChild(n1215);}
    {const n1216=figma.createText();
      n1216.fontName=FB;
      n1216.fontSize=10.0;
      n1216.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1216.x=265; n1216.y=1822.5;
      n1216.characters='Destinatário';
      F.appendChild(n1216);}
    {const n1217=figma.createText();
      n1217.fontName=FR;
      n1217.fontSize=13.3;
      n1217.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1217.x=1083.7; n1217.y=1821.5;
      n1217.characters='on';
      F.appendChild(n1217);}
    {const n1218=figma.createText();
      n1218.fontName=FR;
      n1218.fontSize=12.0;
      n1218.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1218.x=1093.7; n1218.y=1821;
      n1218.characters='Mesmo que o comprador';
      F.appendChild(n1218);}
    {const n1219=figma.createText();
      n1219.fontName=FR;
      n1219.fontSize=11.0;
      n1219.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1219.x=265; n1219.y=1855;
      n1219.characters='Nome do Destinatário';
      F.appendChild(n1219);}
    {const n1220=figma.createText();
      n1220.fontName=FR;
      n1220.fontSize=11.0;
      n1220.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1220.x=383.5; n1220.y=1855;
      n1220.characters='*';
      F.appendChild(n1220);}
    {const n1221=figma.createText();
      n1221.fontName=FR;
      n1221.fontSize=13.0;
      n1221.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1221.x=274; n1221.y=1878.5;
      n1221.characters='Bruna Otani Wada';
      F.appendChild(n1221);}
    {const n1222=figma.createText();
      n1222.fontName=FR;
      n1222.fontSize=11.0;
      n1222.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1222.x=265; n1222.y=1911;
      n1222.characters='Telefone';
      F.appendChild(n1222);}
    {const n1223=figma.createText();
      n1223.fontName=FR;
      n1223.fontSize=13.0;
      n1223.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1223.x=274; n1223.y=1934.5;
      n1223.characters='(11) 99988-7137';
      F.appendChild(n1223);}
    {const n1224=figma.createText();
      n1224.fontName=FR;
      n1224.fontSize=11.0;
      n1224.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1224.x=757; n1224.y=1911;
      n1224.characters='CPF';
      F.appendChild(n1224);}
    {const n1225=figma.createText();
      n1225.fontName=FR;
      n1225.fontSize=13.0;
      n1225.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1225.x=766; n1225.y=1934.5;
      n1225.characters='228.085.478-38';
      F.appendChild(n1225);}
    {const n1226=figma.createText();
      n1226.fontName=FR;
      n1226.fontSize=11.0;
      n1226.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1226.x=265; n1226.y=1967;
      n1226.characters='Email';
      F.appendChild(n1226);}
    {const n1227=figma.createText();
      n1227.fontName=FR;
      n1227.fontSize=13.0;
      n1227.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1227.x=274; n1227.y=1990.5;
      n1227.characters='bruna.otaniwada@gmail.com';
      F.appendChild(n1227);}
    {const n1228=figma.createText();
      n1228.fontName=FB;
      n1228.fontSize=10.0;
      n1228.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1228.x=265; n1228.y=2027;
      n1228.characters='Endereço';
      F.appendChild(n1228);}
    {const n1229=figma.createText();
      n1229.fontName=FR;
      n1229.fontSize=11.0;
      n1229.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1229.x=265; n1229.y=2058;
      n1229.characters='CEP';
      F.appendChild(n1229);}
    {const n1230=figma.createText();
      n1230.fontName=FR;
      n1230.fontSize=13.0;
      n1230.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1230.x=274; n1230.y=2081.5;
      n1230.characters='06351-380';
      F.appendChild(n1230);}
    {const n1231=figma.createText();
      n1231.fontName=FR;
      n1231.fontSize=11.0;
      n1231.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1231.x=265; n1231.y=2114;
      n1231.characters='Logradouro';
      F.appendChild(n1231);}
    {const n1232=figma.createText();
      n1232.fontName=FR;
      n1232.fontSize=13.0;
      n1232.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1232.x=274; n1232.y=2137.5;
      n1232.characters='Alameda Safira';
      F.appendChild(n1232);}
    {const n1233=figma.createText();
      n1233.fontName=FR;
      n1233.fontSize=11.0;
      n1233.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1233.x=593; n1233.y=2114;
      n1233.characters='Número';
      F.appendChild(n1233);}
    {const n1234=figma.createText();
      n1234.fontName=FR;
      n1234.fontSize=13.0;
      n1234.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1234.x=602; n1234.y=2137.5;
      n1234.characters='74';
      F.appendChild(n1234);}
    {const n1235=figma.createText();
      n1235.fontName=FR;
      n1235.fontSize=11.0;
      n1235.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1235.x=265; n1235.y=2170;
      n1235.characters='Complemento';
      F.appendChild(n1235);}
    {const n1236=figma.createText();
      n1236.fontName=FR;
      n1236.fontSize=13.0;
      n1236.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1236.x=274; n1236.y=2193.5;
      n1236.characters='condomínio Golf Village';
      F.appendChild(n1236);}
    {const n1237=figma.createText();
      n1237.fontName=FR;
      n1237.fontSize=11.0;
      n1237.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1237.x=511; n1237.y=2170;
      n1237.characters='Bairro';
      F.appendChild(n1237);}
    {const n1238=figma.createText();
      n1238.fontName=FR;
      n1238.fontSize=13.0;
      n1238.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1238.x=520; n1238.y=2193.5;
      n1238.characters='Golf Park';
      F.appendChild(n1238);}
    {const n1239=figma.createText();
      n1239.fontName=FR;
      n1239.fontSize=11.0;
      n1239.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1239.x=757; n1239.y=2170;
      n1239.characters='Cidade';
      F.appendChild(n1239);}
    {const n1240=figma.createText();
      n1240.fontName=FR;
      n1240.fontSize=13.0;
      n1240.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1240.x=766; n1240.y=2193.5;
      n1240.characters='Carapicuíba';
      F.appendChild(n1240);}
    {const n1241=figma.createText();
      n1241.fontName=FR;
      n1241.fontSize=11.0;
      n1241.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1241.x=265; n1241.y=2226;
      n1241.characters='UF';
      F.appendChild(n1241);}
    {const n1242=figma.createText();
      n1242.fontName=FR;
      n1242.fontSize=13.0;
      n1242.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1242.x=274; n1242.y=2249.5;
      n1242.characters='SP';
      F.appendChild(n1242);}
    {const n1243=figma.createText();
      n1243.fontName=FB;
      n1243.fontSize=10.0;
      n1243.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1243.x=265; n1243.y=2286;
      n1243.characters='Observações';
      F.appendChild(n1243);}
    {const n1244=figma.createText();
      n1244.fontName=FR;
      n1244.fontSize=11.0;
      n1244.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1244.x=265; n1244.y=2317;
      n1244.characters='Obs. Fábrica';
      F.appendChild(n1244);}
    {const n1245=figma.createText();
      n1245.fontName=FR;
      n1245.fontSize=13.0;
      n1245.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1245.x=274; n1245.y=2354.5;
      n1245.characters='MINI TABLETINHO NO CARD + SAQUINHO + FITILHO';
      F.appendChild(n1245);}
    {const n1246=figma.createText();
      n1246.fontName=FR;
      n1246.fontSize=11.0;
      n1246.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1246.x=757; n1246.y=2317;
      n1246.characters='Info Motoboy';
      F.appendChild(n1246);}
    {const n1247=figma.createText();
      n1247.fontName=FB;
      n1247.fontSize=9.0;
      n1247.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n1247.x=271.8; n1247.y=2431.5;
      n1247.characters='9';
      F.appendChild(n1247);}
    {const n1248=figma.createText();
      n1248.fontName=FR;
      n1248.fontSize=12.0;
      n1248.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1248.x=295; n1248.y=2429.5;
      n1248.characters='Controle Interno';
      F.appendChild(n1248);}
    {const n1249=figma.createText();
      n1249.fontName=FR;
      n1249.fontSize=11.0;
      n1249.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1249.x=1088.2; n1249.y=2430.5;
      n1249.characters='Uso interno da operação';
      F.appendChild(n1249);}
    {const n1250=figma.createText();
      n1250.fontName=FR;
      n1250.fontSize=10.0;
      n1250.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1250.x=1227.2; n1250.y=2431;
      n1250.characters='▼';
      F.appendChild(n1250);}
    {const n1251=figma.createText();
      n1251.fontName=FR;
      n1251.fontSize=11.0;
      n1251.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1251.x=265; n1251.y=2472;
      n1251.characters='CDH';
      F.appendChild(n1251);}
    {const n1252=figma.createText();
      n1252.fontName=FR;
      n1252.fontSize=13.0;
      n1252.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1252.x=274; n1252.y=2495.5;
      n1252.characters='527';
      F.appendChild(n1252);}
    {const n1253=figma.createText();
      n1253.fontName=FR;
      n1253.fontSize=11.0;
      n1253.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1253.x=511; n1253.y=2472;
      n1253.characters='Negociação';
      F.appendChild(n1253);}
    {const n1254=figma.createText();
      n1254.fontName=FR;
      n1254.fontSize=13.0;
      n1254.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1254.x=520; n1254.y=2495.5;
      n1254.characters='-';
      F.appendChild(n1254);}
    {const n1255=figma.createText();
      n1255.fontName=FR;
      n1255.fontSize=11.0;
      n1255.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1255.x=757; n1255.y=2472;
      n1255.characters='Data Designer Chamar';
      F.appendChild(n1255);}
    {const n1256=figma.createText();
      n1256.fontName=FR;
      n1256.fontSize=11.0;
      n1256.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1256.x=1003; n1256.y=2472;
      n1256.characters='Quem Embalou';
      F.appendChild(n1256);}
    {const n1257=figma.createText();
      n1257.fontName=FR;
      n1257.fontSize=13.0;
      n1257.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1257.x=1012; n1257.y=2495.5;
      n1257.characters='-';
      F.appendChild(n1257);}
    {const n1258=figma.createText();
      n1258.fontName=FR;
      n1258.fontSize=11.0;
      n1258.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1258.x=265; n1258.y=2528;
      n1258.characters='OBS Interna';
      F.appendChild(n1258);}
    {const n1259=figma.createText();
      n1259.fontName=FR;
      n1259.fontSize=11.0;
      n1259.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1259.x=511; n1259.y=2528;
      n1259.characters='Registro';
      F.appendChild(n1259);}
    {const n1260=figma.createText();
      n1260.fontName=FR;
      n1260.fontSize=11.0;
      n1260.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1260.x=757; n1260.y=2528;
      n1260.characters='Tempo (min)';
      F.appendChild(n1260);}
    {const n1261=figma.createText();
      n1261.fontName=FR;
      n1261.fontSize=13.0;
      n1261.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1261.x=766; n1261.y=2551.5;
      n1261.characters='0';
      F.appendChild(n1261);}
    {const n1262=figma.createText();
      n1262.fontName=FR;
      n1262.fontSize=11.0;
      n1262.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1262.x=1003; n1262.y=2528;
      n1262.characters='Caixas Papelão';
      F.appendChild(n1262);}
    {const n1263=figma.createText();
      n1263.fontName=FR;
      n1263.fontSize=13.0;
      n1263.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1263.x=1012; n1263.y=2551.5;
      n1263.characters='0';
      F.appendChild(n1263);}
    {const n1264=figma.createText();
      n1264.fontName=FR;
      n1264.fontSize=10.0;
      n1264.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1264.x=248; n1264.y=1060;
      n1264.characters='Pedido';
      F.appendChild(n1264);}
    {const n1265=figma.createText();
      n1265.fontName=FB;
      n1265.fontSize=13.0;
      n1265.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1265.x=248; n1265.y=1074;
      n1265.characters='#25859';
      F.appendChild(n1265);}
    {const n1266=figma.createText();
      n1266.fontName=FR;
      n1266.fontSize=10.0;
      n1266.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1266.x=327.9; n1266.y=1060;
      n1266.characters='Total';
      F.appendChild(n1266);}
    {const n1267=figma.createText();
      n1267.fontName=FB;
      n1267.fontSize=13.0;
      n1267.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1267.x=327.9; n1267.y=1074;
      n1267.characters='R$ 295,96';
      F.appendChild(n1267);}
    {const n1268=figma.createText();
      n1268.fontName=FR;
      n1268.fontSize=10.0;
      n1268.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1268.x=429.2; n1268.y=1060;
      n1268.characters='Falta pagar';
      F.appendChild(n1268);}
    {const n1269=figma.createText();
      n1269.fontName=FB;
      n1269.fontSize=13.0;
      n1269.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1269.x=429.2; n1269.y=1074;
      n1269.characters='R$ 0,00';
      F.appendChild(n1269);}
    {const n1270=figma.createText();
      n1270.fontName=FR;
      n1270.fontSize=13.0;
      n1270.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1270.x=1018.7; n1270.y=1066;
      n1270.characters='Limpar';
      F.appendChild(n1270);}
    {const n1271=figma.createFrame();
      n1271.x=1083.2; n1271.y=1057.0;
      n1271.resize(Math.max(1,168.8),Math.max(1,34));
      n1271.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1271.clipsContent=false;
      n1271.cornerRadius=4.0;
      F.appendChild(n1271);
      {const n1272=figma.createText();
        n1272.fontName=FB;
        n1272.fontSize=13.0;
        n1272.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1272.x=39; n1272.y=9;
        n1272.characters='Cadastrar Pedido';
        n1271.appendChild(n1272);}
    }
    {const n1273=figma.createText();
      n1273.fontName=FR;
      n1273.fontSize=11.0;
      n1273.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1273.x=30; n1273.y=2706;
      n1273.characters='Seção 9 expandida · CDH: 527';
      F.appendChild(n1273);}
    {const n1274=figma.createText();
      n1274.fontName=FR;
      n1274.fontSize=11.0;
      n1274.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1274.x=1241.8; n1274.y=2707;
      n1274.characters='v4.2';
      F.appendChild(n1274);}
  }
  await Promise.resolve();

  // ── B1: Validação — campos obrigatórios faltando
  {const F=figma.createFrame();
    F.x=9520; F.y=0;
    F.resize(1280,2730);
    F.name='B1 — Validação — campos obrigatórios faltando';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n1275=figma.createFrame();
      n1275.x=0.0; n1275.y=0.0;
      n1275.resize(Math.max(1,1280),Math.max(1,38));
      n1275.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1275.clipsContent=false;
      F.appendChild(n1275);
      {const n1276=figma.createFrame();
        n1276.x=14.0; n1276.y=8.0;
        n1276.resize(Math.max(1,22),Math.max(1,22));
        n1276.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1276.clipsContent=false;
        n1276.cornerRadius=5.0;
        n1275.appendChild(n1276);
        {const n1277=figma.createText();
          n1277.fontName=FB;
          n1277.fontSize=10.0;
          n1277.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1277.x=2.5; n1277.y=5;
          n1277.characters='MC';
          n1276.appendChild(n1277);}
      }
      {const n1278=figma.createText();
        n1278.fontName=FR;
        n1278.fontSize=13.0;
        n1278.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1278.x=44; n1278.y=11;
        n1278.characters='Maria Cacau — Gestão de Pedidos';
        n1275.appendChild(n1278);}
    }
    {const n1279=figma.createFrame();
      n1279.x=0.0; n1279.y=38.0;
      n1279.resize(Math.max(1,220),Math.max(1,2664));
      n1279.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1279.clipsContent=false;
      F.appendChild(n1279);
      {const n1280=figma.createFrame();
        n1280.x=14.0; n1280.y=14.0;
        n1280.resize(Math.max(1,38),Math.max(1,38));
        n1280.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1280.clipsContent=false;
        n1280.cornerRadius=8.0;
        n1279.appendChild(n1280);
        {const n1281=figma.createText();
          n1281.fontName=FB;
          n1281.fontSize=14.0;
          n1281.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1281.x=7.5; n1281.y=10.5;
          n1281.characters='MC';
          n1280.appendChild(n1281);}
      }
      {const n1282=figma.createText();
        n1282.fontName=FB;
        n1282.fontSize=13.0;
        n1282.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1282.x=62; n1282.y=18.5;
        n1282.characters='Maria Cacau';
        n1279.appendChild(n1282);}
      {const n1283=figma.createText();
        n1283.fontName=FR;
        n1283.fontSize=10.0;
        n1283.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1283.x=62; n1283.y=35.5;
        n1283.characters='Gestão de Pedidos';
        n1279.appendChild(n1283);}
      {const n1284=figma.createText();
        n1284.fontName=FB;
        n1284.fontSize=10.0;
        n1284.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1284.x=16; n1284.y=85;
        n1284.characters='Pedidos';
        n1279.appendChild(n1284);}
      {const n1285=figma.createFrame();
        n1285.x=8.0; n1285.y=101.0;
        n1285.resize(Math.max(1,204),Math.max(1,34));
        n1285.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n1285.clipsContent=false;
        n1285.cornerRadius=8.0;
        n1279.appendChild(n1285);
        {const n1286=figma.createText();
          n1286.fontName=FB;
          n1286.fontSize=13.0;
          n1286.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1286.x=38; n1286.y=9;
          n1286.characters='Novo Pedido';
          n1285.appendChild(n1286);}
        {const n1287=figma.createFrame();
          n1287.x=160.4; n1287.y=10.5;
          n1287.resize(Math.max(1,33.6),Math.max(1,13));
          n1287.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n1287.clipsContent=false;
          n1287.cornerRadius=8.0;
          n1285.appendChild(n1287);
          {const n1288=figma.createText();
            n1288.fontName=FB;
            n1288.fontSize=9.0;
            n1288.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n1288.x=5; n1288.y=1;
            n1288.characters='Novo';
            n1287.appendChild(n1288);}
        }
      }
      {const n1289=figma.createText();
        n1289.fontName=FB;
        n1289.fontSize=10.0;
        n1289.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1289.x=16; n1289.y=145;
        n1289.characters='Consultas';
        n1279.appendChild(n1289);}
      {const n1290=figma.createText();
        n1290.fontName=FR;
        n1290.fontSize=13.0;
        n1290.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1290.x=46; n1290.y=170;
        n1290.characters='Produtos';
        n1279.appendChild(n1290);}
      {const n1291=figma.createText();
        n1291.fontName=FR;
        n1291.fontSize=13.0;
        n1291.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1291.x=46; n1291.y=206;
        n1291.characters='Entregas';
        n1279.appendChild(n1291);}
      {const n1292=figma.createText();
        n1292.fontName=FR;
        n1292.fontSize=13.0;
        n1292.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1292.x=46; n1292.y=242;
        n1292.characters='Verificar CPF';
        n1279.appendChild(n1292);}
      {const n1293=figma.createText();
        n1293.fontName=FB;
        n1293.fontSize=10.0;
        n1293.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1293.x=16; n1293.y=277;
        n1293.characters='Em breve';
        n1279.appendChild(n1293);}
      {const n1294=figma.createText();
        n1294.fontName=FR;
        n1294.fontSize=13.0;
        n1294.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1294.x=46; n1294.y=302;
        n1294.characters='Frete por CEP';
        n1279.appendChild(n1294);}
      {const n1295=figma.createFrame();
        n1295.x=169.2; n1295.y=303.5;
        n1295.resize(Math.max(1,32.8),Math.max(1,13));
        n1295.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1295.clipsContent=false;
        n1295.cornerRadius=8.0;
        n1295.opacity=0.36;
        n1279.appendChild(n1295);
        {const n1296=figma.createText();
          n1296.fontName=FB;
          n1296.fontSize=9.0;
          n1296.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1296.x=5; n1296.y=1;
          n1296.characters='Logo';
          n1295.appendChild(n1296);}
      }
      {const n1297=figma.createText();
        n1297.fontName=FR;
        n1297.fontSize=13.0;
        n1297.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1297.x=46; n1297.y=338;
        n1297.characters='Nota Fiscal';
        n1279.appendChild(n1297);}
      {const n1298=figma.createFrame();
        n1298.x=169.2; n1298.y=339.5;
        n1298.resize(Math.max(1,32.8),Math.max(1,13));
        n1298.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1298.clipsContent=false;
        n1298.cornerRadius=8.0;
        n1298.opacity=0.36;
        n1279.appendChild(n1298);
        {const n1299=figma.createText();
          n1299.fontName=FB;
          n1299.fontSize=9.0;
          n1299.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1299.x=5; n1299.y=1;
          n1299.characters='Logo';
          n1298.appendChild(n1299);}
      }
    }
    {const n1300=figma.createText();
      n1300.fontName=FR;
      n1300.fontSize=12.0;
      n1300.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1300.x=284; n1300.y=72;
      n1300.characters='Preencha os campos obrigatórios antes de cadastrar';
      F.appendChild(n1300);}
    {const n1301=figma.createText();
      n1301.fontName=FB;
      n1301.fontSize=20.0;
      n1301.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1301.x=248; n1301.y=111;
      n1301.characters='Novo Pedido';
      F.appendChild(n1301);}
    {const n1302=figma.createText();
      n1302.fontName=FR;
      n1302.fontSize=13.0;
      n1302.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1302.x=248; n1302.y=137;
      n1302.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n1302);}
    {const n1303=figma.createFrame();
      n1303.x=265.0; n1303.y=182.0;
      n1303.resize(Math.max(1,20),Math.max(1,20));
      n1303.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1303.clipsContent=false;
      n1303.cornerRadius=50.0;
      F.appendChild(n1303);
      {const n1304=figma.createText();
        n1304.fontName=FB;
        n1304.fontSize=9.0;
        n1304.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1304.x=7.6; n1304.y=4.5;
        n1304.characters='1';
        n1303.appendChild(n1304);}
    }
    {const n1305=figma.createText();
      n1305.fontName=FB;
      n1305.fontSize=13.0;
      n1305.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1305.x=295; n1305.y=184;
      n1305.characters='Identificação do Pedido';
      F.appendChild(n1305);}
    {const n1306=figma.createText();
      n1306.fontName=FR;
      n1306.fontSize=11.0;
      n1306.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1306.x=265; n1306.y=227;
      n1306.characters='Nº Pedido';
      F.appendChild(n1306);}
    {const n1307=figma.createText();
      n1307.fontName=FR;
      n1307.fontSize=11.0;
      n1307.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1307.x=319.2; n1307.y=227;
      n1307.characters='*';
      F.appendChild(n1307);}
    {const n1308=figma.createText();
      n1308.fontName=FR;
      n1308.fontSize=13.0;
      n1308.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1308.x=274; n1308.y=250.5;
      n1308.characters='25860';
      F.appendChild(n1308);}
    {const n1309=figma.createText();
      n1309.fontName=FR;
      n1309.fontSize=11.0;
      n1309.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1309.x=757; n1309.y=227;
      n1309.characters='Como Conheceu';
      F.appendChild(n1309);}
    {const n1310=figma.createText();
      n1310.fontName=FR;
      n1310.fontSize=13.0;
      n1310.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1310.x=766; n1310.y=250.5;
      n1310.characters='Instagram';
      F.appendChild(n1310);}
    {const n1311=figma.createFrame();
      n1311.x=265.0; n1311.y=309.0;
      n1311.resize(Math.max(1,20),Math.max(1,20));
      n1311.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1311.clipsContent=false;
      n1311.cornerRadius=50.0;
      F.appendChild(n1311);
      {const n1312=figma.createText();
        n1312.fontName=FB;
        n1312.fontSize=9.0;
        n1312.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1312.x=7; n1312.y=4.5;
        n1312.characters='2';
        n1311.appendChild(n1312);}
    }
    {const n1313=figma.createText();
      n1313.fontName=FB;
      n1313.fontSize=13.0;
      n1313.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1313.x=295; n1313.y=311;
      n1313.characters='Comprador';
      F.appendChild(n1313);}
    {const n1314=figma.createText();
      n1314.fontName=FR;
      n1314.fontSize=11.0;
      n1314.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1314.x=265; n1314.y=354;
      n1314.characters='Nome do Comprador';
      F.appendChild(n1314);}
    {const n1315=figma.createText();
      n1315.fontName=FR;
      n1315.fontSize=11.0;
      n1315.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1315.x=378.2; n1315.y=354;
      n1315.characters='*';
      F.appendChild(n1315);}
    {const n1316=figma.createText();
      n1316.fontName=FR;
      n1316.fontSize=10.0;
      n1316.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1316.x=265; n1316.y=403;
      n1316.characters='Campo obrigatório';
      F.appendChild(n1316);}
    {const n1317=figma.createText();
      n1317.fontName=FR;
      n1317.fontSize=11.0;
      n1317.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1317.x=265; n1317.y=425;
      n1317.characters='Parentesco';
      F.appendChild(n1317);}
    {const n1318=figma.createText();
      n1318.fontName=FR;
      n1318.fontSize=11.0;
      n1318.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1318.x=757; n1318.y=425;
      n1318.characters='Telefone';
      F.appendChild(n1318);}
    {const n1319=figma.createText();
      n1319.fontName=FR;
      n1319.fontSize=11.0;
      n1319.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1319.x=803.6; n1319.y=425;
      n1319.characters='*';
      F.appendChild(n1319);}
    {const n1320=figma.createText();
      n1320.fontName=FR;
      n1320.fontSize=10.0;
      n1320.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1320.x=757; n1320.y=474;
      n1320.characters='Campo obrigatório';
      F.appendChild(n1320);}
    {const n1321=figma.createText();
      n1321.fontName=FR;
      n1321.fontSize=11.0;
      n1321.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1321.x=265; n1321.y=496;
      n1321.characters='CPF';
      F.appendChild(n1321);}
    {const n1322=figma.createText();
      n1322.fontName=FR;
      n1322.fontSize=11.0;
      n1322.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1322.x=757; n1322.y=496;
      n1322.characters='Email';
      F.appendChild(n1322);}
    {const n1323=figma.createFrame();
      n1323.x=265.0; n1323.y=578.0;
      n1323.resize(Math.max(1,20),Math.max(1,20));
      n1323.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1323.clipsContent=false;
      n1323.cornerRadius=50.0;
      F.appendChild(n1323);
      {const n1324=figma.createText();
        n1324.fontName=FB;
        n1324.fontSize=9.0;
        n1324.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1324.x=6.9; n1324.y=4.5;
        n1324.characters='3';
        n1323.appendChild(n1324);}
    }
    {const n1325=figma.createText();
      n1325.fontName=FB;
      n1325.fontSize=13.0;
      n1325.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1325.x=295; n1325.y=580;
      n1325.characters='Presenteado & Evento';
      F.appendChild(n1325);}
    {const n1326=figma.createText();
      n1326.fontName=FR;
      n1326.fontSize=11.0;
      n1326.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1326.x=265; n1326.y=623;
      n1326.characters='Nome do Presenteado';
      F.appendChild(n1326);}
    {const n1327=figma.createText();
      n1327.fontName=FR;
      n1327.fontSize=11.0;
      n1327.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1327.x=265; n1327.y=679;
      n1327.characters='Sexo';
      F.appendChild(n1327);}
    {const n1328=figma.createText();
      n1328.fontName=FR;
      n1328.fontSize=11.0;
      n1328.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1328.x=289.5; n1328.y=703.5;
      n1328.characters='Feminino';
      F.appendChild(n1328);}
    {const n1329=figma.createText();
      n1329.fontName=FR;
      n1329.fontSize=11.0;
      n1329.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1329.x=382.09999999999997; n1329.y=703.5;
      n1329.characters='Masculino';
      F.appendChild(n1329);}
    {const n1330=figma.createText();
      n1330.fontName=FR;
      n1330.fontSize=11.0;
      n1330.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1330.x=482.7; n1330.y=703.5;
      n1330.characters='Gêmeas';
      F.appendChild(n1330);}
    {const n1331=figma.createText();
      n1331.fontName=FR;
      n1331.fontSize=11.0;
      n1331.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1331.x=577.9000000000001; n1331.y=703.5;
      n1331.characters='Gêmeos';
      F.appendChild(n1331);}
    {const n1332=figma.createText();
      n1332.fontName=FR;
      n1332.fontSize=11.0;
      n1332.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1332.x=670.2; n1332.y=703.5;
      n1332.characters='Não sabe';
      F.appendChild(n1332);}
    {const n1333=figma.createText();
      n1333.fontName=FR;
      n1333.fontSize=11.0;
      n1333.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1333.x=757; n1333.y=679;
      n1333.characters='Tipo de Evento';
      F.appendChild(n1333);}
    {const n1334=figma.createText();
      n1334.fontName=FR;
      n1334.fontSize=11.0;
      n1334.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1334.x=265; n1334.y=735;
      n1334.characters='Data do Evento';
      F.appendChild(n1334);}
    {const n1335=figma.createFrame();
      n1335.x=265.0; n1335.y=817.0;
      n1335.resize(Math.max(1,20),Math.max(1,20));
      n1335.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1335.clipsContent=false;
      n1335.cornerRadius=50.0;
      F.appendChild(n1335);
      {const n1336=figma.createText();
        n1336.fontName=FB;
        n1336.fontSize=9.0;
        n1336.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1336.x=6.8; n1336.y=4.5;
        n1336.characters='4';
        n1335.appendChild(n1336);}
    }
    {const n1337=figma.createText();
      n1337.fontName=FB;
      n1337.fontSize=13.0;
      n1337.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1337.x=295; n1337.y=819;
      n1337.characters='Personalização';
      F.appendChild(n1337);}
    {const n1338=figma.createText();
      n1338.fontName=FR;
      n1338.fontSize=11.0;
      n1338.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1338.x=1138; n1338.y=820.5;
      n1338.characters='Arte & embalagem';
      F.appendChild(n1338);}
    {const n1339=figma.createText();
      n1339.fontName=FR;
      n1339.fontSize=11.0;
      n1339.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1339.x=265; n1339.y=862;
      n1339.characters='Nome da Etiqueta';
      F.appendChild(n1339);}
    {const n1340=figma.createText();
      n1340.fontName=FR;
      n1340.fontSize=11.0;
      n1340.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1340.x=757; n1340.y=862;
      n1340.characters='Tema da Etiqueta';
      F.appendChild(n1340);}
    {const n1341=figma.createText();
      n1341.fontName=FR;
      n1341.fontSize=11.0;
      n1341.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1341.x=265; n1341.y=918;
      n1341.characters='Nome na Caixa';
      F.appendChild(n1341);}
    {const n1342=figma.createText();
      n1342.fontName=FR;
      n1342.fontSize=11.0;
      n1342.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1342.x=757; n1342.y=918;
      n1342.characters='Arte / Tecido da Caixa';
      F.appendChild(n1342);}
    {const n1343=figma.createText();
      n1343.fontName=FR;
      n1343.fontSize=11.0;
      n1343.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1343.x=265; n1343.y=974;
      n1343.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n1343);}
    {const n1344=figma.createText();
      n1344.fontName=FR;
      n1344.fontSize=13.0;
      n1344.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1344.x=274; n1344.y=997.5;
      n1344.characters='0';
      F.appendChild(n1344);}
    {const n1345=figma.createFrame();
      n1345.x=265.0; n1345.y=1056.0;
      n1345.resize(Math.max(1,20),Math.max(1,20));
      n1345.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1345.clipsContent=false;
      n1345.cornerRadius=50.0;
      F.appendChild(n1345);
      {const n1346=figma.createText();
        n1346.fontName=FB;
        n1346.fontSize=9.0;
        n1346.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1346.x=6.9; n1346.y=4.5;
        n1346.characters='5';
        n1345.appendChild(n1346);}
    }
    {const n1347=figma.createText();
      n1347.fontName=FB;
      n1347.fontSize=13.0;
      n1347.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1347.x=295; n1347.y=1058;
      n1347.characters='Produtos';
      F.appendChild(n1347);}
    {const n1348=figma.createText();
      n1348.fontName=FR;
      n1348.fontSize=11.0;
      n1348.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1348.x=1203.9; n1348.y=1059.5;
      n1348.characters='1 item';
      F.appendChild(n1348);}
    {const n1349=figma.createText();
      n1349.fontName=FB;
      n1349.fontSize=10.0;
      n1349.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1349.x=265; n1349.y=1101;
      n1349.characters='Produto';
      F.appendChild(n1349);}
    {const n1350=figma.createText();
      n1350.fontName=FB;
      n1350.fontSize=10.0;
      n1350.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1350.x=937; n1350.y=1101;
      n1350.characters='Qtd';
      F.appendChild(n1350);}
    {const n1351=figma.createText();
      n1351.fontName=FB;
      n1351.fontSize=10.0;
      n1351.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1351.x=1007; n1351.y=1101;
      n1351.characters='R$ Unit.';
      F.appendChild(n1351);}
    {const n1352=figma.createText();
      n1352.fontName=FB;
      n1352.fontSize=10.0;
      n1352.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1352.x=1113; n1352.y=1101;
      n1352.characters='Total';
      F.appendChild(n1352);}
    {const n1353=figma.createText();
      n1353.fontName=FR;
      n1353.fontSize=13.0;
      n1353.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1353.x=274; n1353.y=1133.5;
      n1353.characters='Buscar produto ou código…';
      F.appendChild(n1353);}
    {const n1354=figma.createText();
      n1354.fontName=FR;
      n1354.fontSize=10.0;
      n1354.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1354.x=265; n1354.y=1159;
      n1354.characters='Selecione ao menos 1 produto';
      F.appendChild(n1354);}
    {const n1355=figma.createText();
      n1355.fontName=FR;
      n1355.fontSize=13.0;
      n1355.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1355.x=946; n1355.y=1133.5;
      n1355.characters='1';
      F.appendChild(n1355);}
    {const n1356=figma.createText();
      n1356.fontName=FR;
      n1356.fontSize=12.0;
      n1356.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1356.x=1123; n1356.y=1135;
      n1356.characters='R$ 0,00';
      F.appendChild(n1356);}
    {const n1357=figma.createText();
      n1357.fontName=FR;
      n1357.fontSize=12.0;
      n1357.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1357.x=301; n1357.y=1188;
      n1357.characters='Selecione ao menos 1 produto com quantidade';
      F.appendChild(n1357);}
    {const n1358=figma.createText();
      n1358.fontName=FR;
      n1358.fontSize=12.0;
      n1358.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1358.x=292; n1358.y=1222.5;
      n1358.characters='Adicionar produto';
      F.appendChild(n1358);}
    {const n1359=figma.createText();
      n1359.fontName=FR;
      n1359.fontSize=11.0;
      n1359.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1359.x=265; n1359.y=1243;
      n1359.characters='Outros (descrição livre)';
      F.appendChild(n1359);}
    {const n1360=figma.createText();
      n1360.fontName=FR;
      n1360.fontSize=13.0;
      n1360.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1360.x=274; n1360.y=1266.5;
      n1360.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n1360);}
    {const n1361=figma.createText();
      n1361.fontName=FR;
      n1361.fontSize=11.0;
      n1361.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1361.x=1014.7; n1361.y=1307;
      n1361.characters='Subtotal dos produtos';
      F.appendChild(n1361);}
    {const n1362=figma.createText();
      n1362.fontName=FB;
      n1362.fontSize=13.0;
      n1362.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1362.x=1185; n1362.y=1307;
      n1362.characters='R$ 0,00';
      F.appendChild(n1362);}
    {const n1363=figma.createFrame();
      n1363.x=265.0; n1363.y=1357.0;
      n1363.resize(Math.max(1,20),Math.max(1,20));
      n1363.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1363.clipsContent=false;
      n1363.cornerRadius=50.0;
      F.appendChild(n1363);
      {const n1364=figma.createText();
        n1364.fontName=FB;
        n1364.fontSize=9.0;
        n1364.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1364.x=6.8; n1364.y=4.5;
        n1364.characters='6';
        n1363.appendChild(n1364);}
    }
    {const n1365=figma.createText();
      n1365.fontName=FB;
      n1365.fontSize=13.0;
      n1365.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1365.x=295; n1365.y=1359;
      n1365.characters='Financeiro';
      F.appendChild(n1365);}
    {const n1366=figma.createText();
      n1366.fontName=FR;
      n1366.fontSize=11.0;
      n1366.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1366.x=265; n1366.y=1402;
      n1366.characters='Desconto (R$)';
      F.appendChild(n1366);}
    {const n1367=figma.createText();
      n1367.fontName=FR;
      n1367.fontSize=13.0;
      n1367.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1367.x=274; n1367.y=1425.5;
      n1367.characters='0';
      F.appendChild(n1367);}
    {const n1368=figma.createText();
      n1368.fontName=FR;
      n1368.fontSize=11.0;
      n1368.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1368.x=757; n1368.y=1402;
      n1368.characters='Frete (R$)';
      F.appendChild(n1368);}
    {const n1369=figma.createText();
      n1369.fontName=FR;
      n1369.fontSize=13.0;
      n1369.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1369.x=766; n1369.y=1425.5;
      n1369.characters='0,00';
      F.appendChild(n1369);}
    {const n1370=figma.createText();
      n1370.fontName=FR;
      n1370.fontSize=11.0;
      n1370.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1370.x=265; n1370.y=1458;
      n1370.characters='Total do Pedido';
      F.appendChild(n1370);}
    {const n1371=figma.createText();
      n1371.fontName=FB;
      n1371.fontSize=20.0;
      n1371.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1371.x=281; n1371.y=1485.5;
      n1371.characters='R$ 0,00';
      F.appendChild(n1371);}
    {const n1372=figma.createFrame();
      n1372.x=265.0; n1372.y=1554.0;
      n1372.resize(Math.max(1,20),Math.max(1,20));
      n1372.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1372.clipsContent=false;
      n1372.cornerRadius=50.0;
      F.appendChild(n1372);
      {const n1373=figma.createText();
        n1373.fontName=FB;
        n1373.fontSize=9.0;
        n1373.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1373.x=7.2; n1373.y=4.5;
        n1373.characters='7';
        n1372.appendChild(n1373);}
    }
    {const n1374=figma.createText();
      n1374.fontName=FB;
      n1374.fontSize=13.0;
      n1374.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1374.x=295; n1374.y=1556;
      n1374.characters='Pagamento';
      F.appendChild(n1374);}
    {const n1375=figma.createText();
      n1375.fontName=FB;
      n1375.fontSize=10.0;
      n1375.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1375.x=265; n1375.y=1599;
      n1375.characters='Forma';
      F.appendChild(n1375);}
    {const n1376=figma.createText();
      n1376.fontName=FB;
      n1376.fontSize=10.0;
      n1376.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1376.x=411; n1376.y=1599;
      n1376.characters='Data Pgto';
      F.appendChild(n1376);}
    {const n1377=figma.createText();
      n1377.fontName=FB;
      n1377.fontSize=10.0;
      n1377.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1377.x=541; n1377.y=1599;
      n1377.characters='Valor (R$)';
      F.appendChild(n1377);}
    {const n1378=figma.createText();
      n1378.fontName=FB;
      n1378.fontSize=10.0;
      n1378.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1378.x=657; n1378.y=1599;
      n1378.characters='Confirm.';
      F.appendChild(n1378);}
    {const n1379=figma.createText();
      n1379.fontName=FR;
      n1379.fontSize=13.0;
      n1379.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1379.x=274; n1379.y=1631.5;
      n1379.characters='— Forma —';
      F.appendChild(n1379);}
    {const n1380=figma.createText();
      n1380.fontName=FR;
      n1380.fontSize=13.3;
      n1380.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1380.x=699; n1380.y=1631;
      n1380.characters='on';
      F.appendChild(n1380);}
    {const n1381=figma.createText();
      n1381.fontName=FR;
      n1381.fontSize=12.0;
      n1381.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1381.x=292; n1381.y=1666.5;
      n1381.characters='Adicionar parcela';
      F.appendChild(n1381);}
    {const n1382=figma.createText();
      n1382.fontName=FR;
      n1382.fontSize=12.0;
      n1382.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1382.x=280; n1382.y=1712;
      n1382.characters='Total do pedido';
      F.appendChild(n1382);}
    {const n1383=figma.createText();
      n1383.fontName=FR;
      n1383.fontSize=12.0;
      n1383.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1383.x=1173.8; n1383.y=1713.5;
      n1383.characters='R$ 0,00';
      F.appendChild(n1383);}
    {const n1384=figma.createText();
      n1384.fontName=FR;
      n1384.fontSize=12.0;
      n1384.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1384.x=280; n1384.y=1732;
      n1384.characters='Total pago';
      F.appendChild(n1384);}
    {const n1385=figma.createText();
      n1385.fontName=FR;
      n1385.fontSize=12.0;
      n1385.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1385.x=1173.8; n1385.y=1733.5;
      n1385.characters='R$ 0,00';
      F.appendChild(n1385);}
    {const n1386=figma.createText();
      n1386.fontName=FB;
      n1386.fontSize=12.0;
      n1386.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1386.x=280; n1386.y=1752.5;
      n1386.characters='Falta pagar';
      F.appendChild(n1386);}
    {const n1387=figma.createText();
      n1387.fontName=FB;
      n1387.fontSize=12.0;
      n1387.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1387.x=1165.8; n1387.y=1754;
      n1387.characters='R$ 0,00';
      F.appendChild(n1387);}
    {const n1388=figma.createText();
      n1388.fontName=FR;
      n1388.fontSize=13.3;
      n1388.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1388.x=289; n1388.y=1785.5;
      n1388.characters='on';
      F.appendChild(n1388);}
    {const n1389=figma.createText();
      n1389.fontName=FR;
      n1389.fontSize=12.0;
      n1389.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1389.x=300; n1389.y=1785;
      n1389.characters='Vai pagar na retirada';
      F.appendChild(n1389);}
    {const n1390=figma.createFrame();
      n1390.x=265.0; n1390.y=1849.0;
      n1390.resize(Math.max(1,20),Math.max(1,20));
      n1390.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1390.clipsContent=false;
      n1390.cornerRadius=50.0;
      F.appendChild(n1390);
      {const n1391=figma.createText();
        n1391.fontName=FB;
        n1391.fontSize=9.0;
        n1391.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1391.x=6.8; n1391.y=4.5;
        n1391.characters='8';
        n1390.appendChild(n1391);}
    }
    {const n1392=figma.createText();
      n1392.fontName=FB;
      n1392.fontSize=13.0;
      n1392.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1392.x=295; n1392.y=1851;
      n1392.characters='Entrega';
      F.appendChild(n1392);}
    {const n1393=figma.createText();
      n1393.fontName=FR;
      n1393.fontSize=11.0;
      n1393.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1393.x=265; n1393.y=1894;
      n1393.characters='Data de Entrega';
      F.appendChild(n1393);}
    {const n1394=figma.createText();
      n1394.fontName=FR;
      n1394.fontSize=11.0;
      n1394.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1394.x=352.7; n1394.y=1894;
      n1394.characters='*';
      F.appendChild(n1394);}
    {const n1395=figma.createText();
      n1395.fontName=FR;
      n1395.fontSize=10.0;
      n1395.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1395.x=265; n1395.y=1943;
      n1395.characters='Campo obrigatório';
      F.appendChild(n1395);}
    {const n1396=figma.createText();
      n1396.fontName=FR;
      n1396.fontSize=11.0;
      n1396.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1396.x=757; n1396.y=1894;
      n1396.characters='Modalidade';
      F.appendChild(n1396);}
    {const n1397=figma.createText();
      n1397.fontName=FR;
      n1397.fontSize=11.0;
      n1397.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1397.x=820.4; n1397.y=1894;
      n1397.characters='*';
      F.appendChild(n1397);}
    {const n1398=figma.createText();
      n1398.fontName=FR;
      n1398.fontSize=10.0;
      n1398.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1398.x=757; n1398.y=1943;
      n1398.characters='Campo obrigatório';
      F.appendChild(n1398);}
    {const n1399=figma.createText();
      n1399.fontName=FB;
      n1399.fontSize=10.0;
      n1399.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1399.x=265; n1399.y=1970.5;
      n1399.characters='Destinatário';
      F.appendChild(n1399);}
    {const n1400=figma.createText();
      n1400.fontName=FR;
      n1400.fontSize=13.3;
      n1400.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1400.x=1083.7; n1400.y=1969.5;
      n1400.characters='on';
      F.appendChild(n1400);}
    {const n1401=figma.createText();
      n1401.fontName=FR;
      n1401.fontSize=12.0;
      n1401.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1401.x=1093.7; n1401.y=1969;
      n1401.characters='Mesmo que o comprador';
      F.appendChild(n1401);}
    {const n1402=figma.createText();
      n1402.fontName=FR;
      n1402.fontSize=11.0;
      n1402.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1402.x=265; n1402.y=2003;
      n1402.characters='Nome do Destinatário';
      F.appendChild(n1402);}
    {const n1403=figma.createText();
      n1403.fontName=FR;
      n1403.fontSize=11.0;
      n1403.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1403.x=383.5; n1403.y=2003;
      n1403.characters='*';
      F.appendChild(n1403);}
    {const n1404=figma.createText();
      n1404.fontName=FR;
      n1404.fontSize=10.0;
      n1404.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1404.x=265; n1404.y=2052;
      n1404.characters='Campo obrigatório';
      F.appendChild(n1404);}
    {const n1405=figma.createText();
      n1405.fontName=FR;
      n1405.fontSize=11.0;
      n1405.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1405.x=265; n1405.y=2074;
      n1405.characters='Telefone';
      F.appendChild(n1405);}
    {const n1406=figma.createText();
      n1406.fontName=FR;
      n1406.fontSize=11.0;
      n1406.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1406.x=757; n1406.y=2074;
      n1406.characters='CPF';
      F.appendChild(n1406);}
    {const n1407=figma.createText();
      n1407.fontName=FR;
      n1407.fontSize=11.0;
      n1407.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1407.x=265; n1407.y=2130;
      n1407.characters='Email';
      F.appendChild(n1407);}
    {const n1408=figma.createText();
      n1408.fontName=FB;
      n1408.fontSize=10.0;
      n1408.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1408.x=265; n1408.y=2190;
      n1408.characters='Endereço';
      F.appendChild(n1408);}
    {const n1409=figma.createText();
      n1409.fontName=FR;
      n1409.fontSize=11.0;
      n1409.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1409.x=265; n1409.y=2221;
      n1409.characters='CEP';
      F.appendChild(n1409);}
    {const n1410=figma.createText();
      n1410.fontName=FR;
      n1410.fontSize=13.0;
      n1410.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1410.x=274; n1410.y=2244.5;
      n1410.characters='00000-000';
      F.appendChild(n1410);}
    {const n1411=figma.createText();
      n1411.fontName=FR;
      n1411.fontSize=11.0;
      n1411.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1411.x=265; n1411.y=2277;
      n1411.characters='Logradouro';
      F.appendChild(n1411);}
    {const n1412=figma.createText();
      n1412.fontName=FR;
      n1412.fontSize=11.0;
      n1412.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1412.x=593; n1412.y=2277;
      n1412.characters='Número';
      F.appendChild(n1412);}
    {const n1413=figma.createText();
      n1413.fontName=FR;
      n1413.fontSize=11.0;
      n1413.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1413.x=265; n1413.y=2333;
      n1413.characters='Complemento';
      F.appendChild(n1413);}
    {const n1414=figma.createText();
      n1414.fontName=FR;
      n1414.fontSize=13.0;
      n1414.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1414.x=274; n1414.y=2356.5;
      n1414.characters='Apto, Bloco… (opcional)';
      F.appendChild(n1414);}
    {const n1415=figma.createText();
      n1415.fontName=FR;
      n1415.fontSize=11.0;
      n1415.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1415.x=511; n1415.y=2333;
      n1415.characters='Bairro';
      F.appendChild(n1415);}
    {const n1416=figma.createText();
      n1416.fontName=FR;
      n1416.fontSize=11.0;
      n1416.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1416.x=757; n1416.y=2333;
      n1416.characters='Cidade';
      F.appendChild(n1416);}
    {const n1417=figma.createText();
      n1417.fontName=FR;
      n1417.fontSize=11.0;
      n1417.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1417.x=265; n1417.y=2389;
      n1417.characters='UF';
      F.appendChild(n1417);}
    {const n1418=figma.createText();
      n1418.fontName=FR;
      n1418.fontSize=13.0;
      n1418.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1418.x=274; n1418.y=2412.5;
      n1418.characters='SP';
      F.appendChild(n1418);}
    {const n1419=figma.createText();
      n1419.fontName=FB;
      n1419.fontSize=10.0;
      n1419.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1419.x=265; n1419.y=2449;
      n1419.characters='Observações';
      F.appendChild(n1419);}
    {const n1420=figma.createText();
      n1420.fontName=FR;
      n1420.fontSize=11.0;
      n1420.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1420.x=265; n1420.y=2480;
      n1420.characters='Obs. Fábrica';
      F.appendChild(n1420);}
    {const n1421=figma.createText();
      n1421.fontName=FR;
      n1421.fontSize=11.0;
      n1421.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1421.x=757; n1421.y=2480;
      n1421.characters='Info Motoboy';
      F.appendChild(n1421);}
    {const n1422=figma.createText();
      n1422.fontName=FB;
      n1422.fontSize=9.0;
      n1422.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n1422.x=271.8; n1422.y=2594.5;
      n1422.characters='9';
      F.appendChild(n1422);}
    {const n1423=figma.createText();
      n1423.fontName=FR;
      n1423.fontSize=12.0;
      n1423.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1423.x=295; n1423.y=2592.5;
      n1423.characters='Controle Interno';
      F.appendChild(n1423);}
    {const n1424=figma.createText();
      n1424.fontName=FR;
      n1424.fontSize=11.0;
      n1424.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1424.x=1088.2; n1424.y=2593.5;
      n1424.characters='Uso interno da operação';
      F.appendChild(n1424);}
    {const n1425=figma.createText();
      n1425.fontName=FR;
      n1425.fontSize=10.0;
      n1425.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1425.x=1225.1; n1425.y=2596.1;
      n1425.characters='▼';
      F.appendChild(n1425);}
    {const n1426=figma.createText();
      n1426.fontName=FR;
      n1426.fontSize=10.0;
      n1426.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1426.x=248; n1426.y=1060;
      n1426.characters='Pedido';
      F.appendChild(n1426);}
    {const n1427=figma.createText();
      n1427.fontName=FB;
      n1427.fontSize=13.0;
      n1427.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1427.x=248; n1427.y=1074;
      n1427.characters='#25860';
      F.appendChild(n1427);}
    {const n1428=figma.createText();
      n1428.fontName=FR;
      n1428.fontSize=10.0;
      n1428.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1428.x=327.9; n1428.y=1060;
      n1428.characters='Total';
      F.appendChild(n1428);}
    {const n1429=figma.createText();
      n1429.fontName=FB;
      n1429.fontSize=13.0;
      n1429.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1429.x=327.9; n1429.y=1074;
      n1429.characters='R$ 0,00';
      F.appendChild(n1429);}
    {const n1430=figma.createText();
      n1430.fontName=FR;
      n1430.fontSize=10.0;
      n1430.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1430.x=414.9; n1430.y=1060;
      n1430.characters='Falta pagar';
      F.appendChild(n1430);}
    {const n1431=figma.createText();
      n1431.fontName=FB;
      n1431.fontSize=13.0;
      n1431.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1431.x=414.9; n1431.y=1074;
      n1431.characters='R$ 0,00';
      F.appendChild(n1431);}
    {const n1432=figma.createText();
      n1432.fontName=FR;
      n1432.fontSize=13.0;
      n1432.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1432.x=1018.7; n1432.y=1066;
      n1432.characters='Limpar';
      F.appendChild(n1432);}
    {const n1433=figma.createFrame();
      n1433.x=1083.2; n1433.y=1057.0;
      n1433.resize(Math.max(1,168.8),Math.max(1,34));
      n1433.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1433.clipsContent=false;
      n1433.cornerRadius=4.0;
      F.appendChild(n1433);
      {const n1434=figma.createText();
        n1434.fontName=FB;
        n1434.fontSize=13.0;
        n1434.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1434.x=39; n1434.y=9;
        n1434.characters='Cadastrar Pedido';
        n1433.appendChild(n1434);}
    }
    {const n1435=figma.createText();
      n1435.fontName=FR;
      n1435.fontSize=11.0;
      n1435.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1435.x=30; n1435.y=2710;
      n1435.characters='Preencha os campos obrigatórios antes de cadastrar';
      F.appendChild(n1435);}
    {const n1436=figma.createText();
      n1436.fontName=FR;
      n1436.fontSize=11.0;
      n1436.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1436.x=1241.8; n1436.y=2711;
      n1436.characters='v4.2';
      F.appendChild(n1436);}
  }
  await Promise.resolve();

  // ── B2: CPF inválido
  {const F=figma.createFrame();
    F.x=10880; F.y=0;
    F.resize(1280,2631);
    F.name='B2 — CPF inválido';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n1437=figma.createFrame();
      n1437.x=0.0; n1437.y=0.0;
      n1437.resize(Math.max(1,1280),Math.max(1,38));
      n1437.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1437.clipsContent=false;
      F.appendChild(n1437);
      {const n1438=figma.createFrame();
        n1438.x=14.0; n1438.y=8.0;
        n1438.resize(Math.max(1,22),Math.max(1,22));
        n1438.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1438.clipsContent=false;
        n1438.cornerRadius=5.0;
        n1437.appendChild(n1438);
        {const n1439=figma.createText();
          n1439.fontName=FB;
          n1439.fontSize=10.0;
          n1439.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1439.x=2.5; n1439.y=5;
          n1439.characters='MC';
          n1438.appendChild(n1439);}
      }
      {const n1440=figma.createText();
        n1440.fontName=FR;
        n1440.fontSize=13.0;
        n1440.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1440.x=44; n1440.y=11;
        n1440.characters='Maria Cacau — Gestão de Pedidos';
        n1437.appendChild(n1440);}
    }
    {const n1441=figma.createFrame();
      n1441.x=0.0; n1441.y=38.0;
      n1441.resize(Math.max(1,220),Math.max(1,2565));
      n1441.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1441.clipsContent=false;
      F.appendChild(n1441);
      {const n1442=figma.createFrame();
        n1442.x=14.0; n1442.y=14.0;
        n1442.resize(Math.max(1,38),Math.max(1,38));
        n1442.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1442.clipsContent=false;
        n1442.cornerRadius=8.0;
        n1441.appendChild(n1442);
        {const n1443=figma.createText();
          n1443.fontName=FB;
          n1443.fontSize=14.0;
          n1443.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1443.x=7.5; n1443.y=10.5;
          n1443.characters='MC';
          n1442.appendChild(n1443);}
      }
      {const n1444=figma.createText();
        n1444.fontName=FB;
        n1444.fontSize=13.0;
        n1444.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1444.x=62; n1444.y=18.5;
        n1444.characters='Maria Cacau';
        n1441.appendChild(n1444);}
      {const n1445=figma.createText();
        n1445.fontName=FR;
        n1445.fontSize=10.0;
        n1445.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1445.x=62; n1445.y=35.5;
        n1445.characters='Gestão de Pedidos';
        n1441.appendChild(n1445);}
      {const n1446=figma.createText();
        n1446.fontName=FB;
        n1446.fontSize=10.0;
        n1446.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1446.x=16; n1446.y=85;
        n1446.characters='Pedidos';
        n1441.appendChild(n1446);}
      {const n1447=figma.createFrame();
        n1447.x=8.0; n1447.y=101.0;
        n1447.resize(Math.max(1,204),Math.max(1,34));
        n1447.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n1447.clipsContent=false;
        n1447.cornerRadius=8.0;
        n1441.appendChild(n1447);
        {const n1448=figma.createText();
          n1448.fontName=FB;
          n1448.fontSize=13.0;
          n1448.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1448.x=38; n1448.y=9;
          n1448.characters='Novo Pedido';
          n1447.appendChild(n1448);}
        {const n1449=figma.createFrame();
          n1449.x=160.4; n1449.y=10.5;
          n1449.resize(Math.max(1,33.6),Math.max(1,13));
          n1449.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n1449.clipsContent=false;
          n1449.cornerRadius=8.0;
          n1447.appendChild(n1449);
          {const n1450=figma.createText();
            n1450.fontName=FB;
            n1450.fontSize=9.0;
            n1450.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n1450.x=5; n1450.y=1;
            n1450.characters='Novo';
            n1449.appendChild(n1450);}
        }
      }
      {const n1451=figma.createText();
        n1451.fontName=FB;
        n1451.fontSize=10.0;
        n1451.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1451.x=16; n1451.y=145;
        n1451.characters='Consultas';
        n1441.appendChild(n1451);}
      {const n1452=figma.createText();
        n1452.fontName=FR;
        n1452.fontSize=13.0;
        n1452.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1452.x=46; n1452.y=170;
        n1452.characters='Produtos';
        n1441.appendChild(n1452);}
      {const n1453=figma.createText();
        n1453.fontName=FR;
        n1453.fontSize=13.0;
        n1453.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1453.x=46; n1453.y=206;
        n1453.characters='Entregas';
        n1441.appendChild(n1453);}
      {const n1454=figma.createText();
        n1454.fontName=FR;
        n1454.fontSize=13.0;
        n1454.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1454.x=46; n1454.y=242;
        n1454.characters='Verificar CPF';
        n1441.appendChild(n1454);}
      {const n1455=figma.createText();
        n1455.fontName=FB;
        n1455.fontSize=10.0;
        n1455.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1455.x=16; n1455.y=277;
        n1455.characters='Em breve';
        n1441.appendChild(n1455);}
      {const n1456=figma.createText();
        n1456.fontName=FR;
        n1456.fontSize=13.0;
        n1456.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1456.x=46; n1456.y=302;
        n1456.characters='Frete por CEP';
        n1441.appendChild(n1456);}
      {const n1457=figma.createFrame();
        n1457.x=169.2; n1457.y=303.5;
        n1457.resize(Math.max(1,32.8),Math.max(1,13));
        n1457.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1457.clipsContent=false;
        n1457.cornerRadius=8.0;
        n1457.opacity=0.36;
        n1441.appendChild(n1457);
        {const n1458=figma.createText();
          n1458.fontName=FB;
          n1458.fontSize=9.0;
          n1458.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1458.x=5; n1458.y=1;
          n1458.characters='Logo';
          n1457.appendChild(n1458);}
      }
      {const n1459=figma.createText();
        n1459.fontName=FR;
        n1459.fontSize=13.0;
        n1459.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1459.x=46; n1459.y=338;
        n1459.characters='Nota Fiscal';
        n1441.appendChild(n1459);}
      {const n1460=figma.createFrame();
        n1460.x=169.2; n1460.y=339.5;
        n1460.resize(Math.max(1,32.8),Math.max(1,13));
        n1460.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1460.clipsContent=false;
        n1460.cornerRadius=8.0;
        n1460.opacity=0.36;
        n1441.appendChild(n1460);
        {const n1461=figma.createText();
          n1461.fontName=FB;
          n1461.fontSize=9.0;
          n1461.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1461.x=5; n1461.y=1;
          n1461.characters='Logo';
          n1460.appendChild(n1461);}
      }
    }
    {const n1462=figma.createText();
      n1462.fontName=FR;
      n1462.fontSize=12.0;
      n1462.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1462.x=284; n1462.y=72;
      n1462.characters='Preencha os campos obrigatórios antes de cadastrar';
      F.appendChild(n1462);}
    {const n1463=figma.createText();
      n1463.fontName=FB;
      n1463.fontSize=20.0;
      n1463.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1463.x=248; n1463.y=111;
      n1463.characters='Novo Pedido';
      F.appendChild(n1463);}
    {const n1464=figma.createText();
      n1464.fontName=FR;
      n1464.fontSize=13.0;
      n1464.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1464.x=248; n1464.y=137;
      n1464.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n1464);}
    {const n1465=figma.createFrame();
      n1465.x=265.0; n1465.y=182.0;
      n1465.resize(Math.max(1,20),Math.max(1,20));
      n1465.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1465.clipsContent=false;
      n1465.cornerRadius=50.0;
      F.appendChild(n1465);
      {const n1466=figma.createText();
        n1466.fontName=FB;
        n1466.fontSize=9.0;
        n1466.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1466.x=7.6; n1466.y=4.5;
        n1466.characters='1';
        n1465.appendChild(n1466);}
    }
    {const n1467=figma.createText();
      n1467.fontName=FB;
      n1467.fontSize=13.0;
      n1467.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1467.x=295; n1467.y=184;
      n1467.characters='Identificação do Pedido';
      F.appendChild(n1467);}
    {const n1468=figma.createText();
      n1468.fontName=FR;
      n1468.fontSize=11.0;
      n1468.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1468.x=265; n1468.y=227;
      n1468.characters='Nº Pedido';
      F.appendChild(n1468);}
    {const n1469=figma.createText();
      n1469.fontName=FR;
      n1469.fontSize=11.0;
      n1469.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1469.x=319.2; n1469.y=227;
      n1469.characters='*';
      F.appendChild(n1469);}
    {const n1470=figma.createText();
      n1470.fontName=FR;
      n1470.fontSize=13.0;
      n1470.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1470.x=274; n1470.y=250.5;
      n1470.characters='25861';
      F.appendChild(n1470);}
    {const n1471=figma.createText();
      n1471.fontName=FR;
      n1471.fontSize=11.0;
      n1471.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1471.x=757; n1471.y=227;
      n1471.characters='Como Conheceu';
      F.appendChild(n1471);}
    {const n1472=figma.createFrame();
      n1472.x=265.0; n1472.y=309.0;
      n1472.resize(Math.max(1,20),Math.max(1,20));
      n1472.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1472.clipsContent=false;
      n1472.cornerRadius=50.0;
      F.appendChild(n1472);
      {const n1473=figma.createText();
        n1473.fontName=FB;
        n1473.fontSize=9.0;
        n1473.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1473.x=7; n1473.y=4.5;
        n1473.characters='2';
        n1472.appendChild(n1473);}
    }
    {const n1474=figma.createText();
      n1474.fontName=FB;
      n1474.fontSize=13.0;
      n1474.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1474.x=295; n1474.y=311;
      n1474.characters='Comprador';
      F.appendChild(n1474);}
    {const n1475=figma.createText();
      n1475.fontName=FR;
      n1475.fontSize=11.0;
      n1475.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1475.x=265; n1475.y=354;
      n1475.characters='Nome do Comprador';
      F.appendChild(n1475);}
    {const n1476=figma.createText();
      n1476.fontName=FR;
      n1476.fontSize=11.0;
      n1476.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1476.x=378.2; n1476.y=354;
      n1476.characters='*';
      F.appendChild(n1476);}
    {const n1477=figma.createText();
      n1477.fontName=FR;
      n1477.fontSize=13.0;
      n1477.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1477.x=274; n1477.y=377.5;
      n1477.characters='João Silva';
      F.appendChild(n1477);}
    {const n1478=figma.createText();
      n1478.fontName=FR;
      n1478.fontSize=11.0;
      n1478.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1478.x=265; n1478.y=410;
      n1478.characters='Parentesco';
      F.appendChild(n1478);}
    {const n1479=figma.createText();
      n1479.fontName=FR;
      n1479.fontSize=13.0;
      n1479.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1479.x=274; n1479.y=433.5;
      n1479.characters='Pai';
      F.appendChild(n1479);}
    {const n1480=figma.createText();
      n1480.fontName=FR;
      n1480.fontSize=11.0;
      n1480.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1480.x=757; n1480.y=410;
      n1480.characters='Telefone';
      F.appendChild(n1480);}
    {const n1481=figma.createText();
      n1481.fontName=FR;
      n1481.fontSize=11.0;
      n1481.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1481.x=803.6; n1481.y=410;
      n1481.characters='*';
      F.appendChild(n1481);}
    {const n1482=figma.createText();
      n1482.fontName=FR;
      n1482.fontSize=13.0;
      n1482.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1482.x=766; n1482.y=433.5;
      n1482.characters='(11) 94321-5678';
      F.appendChild(n1482);}
    {const n1483=figma.createText();
      n1483.fontName=FR;
      n1483.fontSize=11.0;
      n1483.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1483.x=265; n1483.y=466;
      n1483.characters='CPF';
      F.appendChild(n1483);}
    {const n1484=figma.createText();
      n1484.fontName=FR;
      n1484.fontSize=13.0;
      n1484.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1484.x=274; n1484.y=489.5;
      n1484.characters='123.456.789-00';
      F.appendChild(n1484);}
    {const n1485=figma.createText();
      n1485.fontName=FR;
      n1485.fontSize=10.0;
      n1485.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1485.x=265; n1485.y=515;
      n1485.characters='CPF inválido — dígito verificador incorreto';
      F.appendChild(n1485);}
    {const n1486=figma.createText();
      n1486.fontName=FR;
      n1486.fontSize=11.0;
      n1486.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1486.x=757; n1486.y=466;
      n1486.characters='Email';
      F.appendChild(n1486);}
    {const n1487=figma.createFrame();
      n1487.x=265.0; n1487.y=563.0;
      n1487.resize(Math.max(1,20),Math.max(1,20));
      n1487.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1487.clipsContent=false;
      n1487.cornerRadius=50.0;
      F.appendChild(n1487);
      {const n1488=figma.createText();
        n1488.fontName=FB;
        n1488.fontSize=9.0;
        n1488.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1488.x=6.9; n1488.y=4.5;
        n1488.characters='3';
        n1487.appendChild(n1488);}
    }
    {const n1489=figma.createText();
      n1489.fontName=FB;
      n1489.fontSize=13.0;
      n1489.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1489.x=295; n1489.y=565;
      n1489.characters='Presenteado & Evento';
      F.appendChild(n1489);}
    {const n1490=figma.createText();
      n1490.fontName=FR;
      n1490.fontSize=11.0;
      n1490.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1490.x=265; n1490.y=608;
      n1490.characters='Nome do Presenteado';
      F.appendChild(n1490);}
    {const n1491=figma.createText();
      n1491.fontName=FR;
      n1491.fontSize=11.0;
      n1491.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1491.x=265; n1491.y=664;
      n1491.characters='Sexo';
      F.appendChild(n1491);}
    {const n1492=figma.createText();
      n1492.fontName=FR;
      n1492.fontSize=11.0;
      n1492.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1492.x=289.5; n1492.y=688.5;
      n1492.characters='Feminino';
      F.appendChild(n1492);}
    {const n1493=figma.createText();
      n1493.fontName=FR;
      n1493.fontSize=11.0;
      n1493.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1493.x=382.09999999999997; n1493.y=688.5;
      n1493.characters='Masculino';
      F.appendChild(n1493);}
    {const n1494=figma.createText();
      n1494.fontName=FR;
      n1494.fontSize=11.0;
      n1494.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1494.x=482.7; n1494.y=688.5;
      n1494.characters='Gêmeas';
      F.appendChild(n1494);}
    {const n1495=figma.createText();
      n1495.fontName=FR;
      n1495.fontSize=11.0;
      n1495.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1495.x=577.9000000000001; n1495.y=688.5;
      n1495.characters='Gêmeos';
      F.appendChild(n1495);}
    {const n1496=figma.createText();
      n1496.fontName=FR;
      n1496.fontSize=11.0;
      n1496.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1496.x=670.2; n1496.y=688.5;
      n1496.characters='Não sabe';
      F.appendChild(n1496);}
    {const n1497=figma.createText();
      n1497.fontName=FR;
      n1497.fontSize=11.0;
      n1497.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1497.x=757; n1497.y=664;
      n1497.characters='Tipo de Evento';
      F.appendChild(n1497);}
    {const n1498=figma.createText();
      n1498.fontName=FR;
      n1498.fontSize=11.0;
      n1498.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1498.x=265; n1498.y=720;
      n1498.characters='Data do Evento';
      F.appendChild(n1498);}
    {const n1499=figma.createFrame();
      n1499.x=265.0; n1499.y=802.0;
      n1499.resize(Math.max(1,20),Math.max(1,20));
      n1499.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1499.clipsContent=false;
      n1499.cornerRadius=50.0;
      F.appendChild(n1499);
      {const n1500=figma.createText();
        n1500.fontName=FB;
        n1500.fontSize=9.0;
        n1500.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1500.x=6.8; n1500.y=4.5;
        n1500.characters='4';
        n1499.appendChild(n1500);}
    }
    {const n1501=figma.createText();
      n1501.fontName=FB;
      n1501.fontSize=13.0;
      n1501.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1501.x=295; n1501.y=804;
      n1501.characters='Personalização';
      F.appendChild(n1501);}
    {const n1502=figma.createText();
      n1502.fontName=FR;
      n1502.fontSize=11.0;
      n1502.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1502.x=1138; n1502.y=805.5;
      n1502.characters='Arte & embalagem';
      F.appendChild(n1502);}
    {const n1503=figma.createText();
      n1503.fontName=FR;
      n1503.fontSize=11.0;
      n1503.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1503.x=265; n1503.y=847;
      n1503.characters='Nome da Etiqueta';
      F.appendChild(n1503);}
    {const n1504=figma.createText();
      n1504.fontName=FR;
      n1504.fontSize=11.0;
      n1504.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1504.x=757; n1504.y=847;
      n1504.characters='Tema da Etiqueta';
      F.appendChild(n1504);}
    {const n1505=figma.createText();
      n1505.fontName=FR;
      n1505.fontSize=11.0;
      n1505.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1505.x=265; n1505.y=903;
      n1505.characters='Nome na Caixa';
      F.appendChild(n1505);}
    {const n1506=figma.createText();
      n1506.fontName=FR;
      n1506.fontSize=11.0;
      n1506.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1506.x=757; n1506.y=903;
      n1506.characters='Arte / Tecido da Caixa';
      F.appendChild(n1506);}
    {const n1507=figma.createText();
      n1507.fontName=FR;
      n1507.fontSize=11.0;
      n1507.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1507.x=265; n1507.y=959;
      n1507.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n1507);}
    {const n1508=figma.createText();
      n1508.fontName=FR;
      n1508.fontSize=13.0;
      n1508.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1508.x=274; n1508.y=982.5;
      n1508.characters='0';
      F.appendChild(n1508);}
    {const n1509=figma.createFrame();
      n1509.x=265.0; n1509.y=1041.0;
      n1509.resize(Math.max(1,20),Math.max(1,20));
      n1509.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1509.clipsContent=false;
      n1509.cornerRadius=50.0;
      F.appendChild(n1509);
      {const n1510=figma.createText();
        n1510.fontName=FB;
        n1510.fontSize=9.0;
        n1510.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1510.x=6.9; n1510.y=4.5;
        n1510.characters='5';
        n1509.appendChild(n1510);}
    }
    {const n1511=figma.createText();
      n1511.fontName=FB;
      n1511.fontSize=13.0;
      n1511.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1511.x=295; n1511.y=1043;
      n1511.characters='Produtos';
      F.appendChild(n1511);}
    {const n1512=figma.createText();
      n1512.fontName=FR;
      n1512.fontSize=11.0;
      n1512.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1512.x=1203.9; n1512.y=1044.5;
      n1512.characters='1 item';
      F.appendChild(n1512);}
    {const n1513=figma.createText();
      n1513.fontName=FB;
      n1513.fontSize=10.0;
      n1513.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1513.x=265; n1513.y=1086;
      n1513.characters='Produto';
      F.appendChild(n1513);}
    {const n1514=figma.createText();
      n1514.fontName=FB;
      n1514.fontSize=10.0;
      n1514.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1514.x=937; n1514.y=1086;
      n1514.characters='Qtd';
      F.appendChild(n1514);}
    {const n1515=figma.createText();
      n1515.fontName=FB;
      n1515.fontSize=10.0;
      n1515.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1515.x=1007; n1515.y=1086;
      n1515.characters='R$ Unit.';
      F.appendChild(n1515);}
    {const n1516=figma.createText();
      n1516.fontName=FB;
      n1516.fontSize=10.0;
      n1516.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1516.x=1113; n1516.y=1086;
      n1516.characters='Total';
      F.appendChild(n1516);}
    {const n1517=figma.createText();
      n1517.fontName=FR;
      n1517.fontSize=13.0;
      n1517.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1517.x=274; n1517.y=1118.5;
      n1517.characters='Buscar produto ou código…';
      F.appendChild(n1517);}
    {const n1518=figma.createText();
      n1518.fontName=FR;
      n1518.fontSize=13.0;
      n1518.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1518.x=946; n1518.y=1118.5;
      n1518.characters='1';
      F.appendChild(n1518);}
    {const n1519=figma.createText();
      n1519.fontName=FR;
      n1519.fontSize=12.0;
      n1519.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1519.x=1123; n1519.y=1120;
      n1519.characters='R$ 0,00';
      F.appendChild(n1519);}
    {const n1520=figma.createText();
      n1520.fontName=FR;
      n1520.fontSize=12.0;
      n1520.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1520.x=292; n1520.y=1153.5;
      n1520.characters='Adicionar produto';
      F.appendChild(n1520);}
    {const n1521=figma.createText();
      n1521.fontName=FR;
      n1521.fontSize=11.0;
      n1521.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1521.x=265; n1521.y=1174;
      n1521.characters='Outros (descrição livre)';
      F.appendChild(n1521);}
    {const n1522=figma.createText();
      n1522.fontName=FR;
      n1522.fontSize=13.0;
      n1522.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1522.x=274; n1522.y=1197.5;
      n1522.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n1522);}
    {const n1523=figma.createText();
      n1523.fontName=FR;
      n1523.fontSize=11.0;
      n1523.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1523.x=1014.7; n1523.y=1238;
      n1523.characters='Subtotal dos produtos';
      F.appendChild(n1523);}
    {const n1524=figma.createText();
      n1524.fontName=FB;
      n1524.fontSize=13.0;
      n1524.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1524.x=1185; n1524.y=1238;
      n1524.characters='R$ 0,00';
      F.appendChild(n1524);}
    {const n1525=figma.createFrame();
      n1525.x=265.0; n1525.y=1288.0;
      n1525.resize(Math.max(1,20),Math.max(1,20));
      n1525.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1525.clipsContent=false;
      n1525.cornerRadius=50.0;
      F.appendChild(n1525);
      {const n1526=figma.createText();
        n1526.fontName=FB;
        n1526.fontSize=9.0;
        n1526.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1526.x=6.8; n1526.y=4.5;
        n1526.characters='6';
        n1525.appendChild(n1526);}
    }
    {const n1527=figma.createText();
      n1527.fontName=FB;
      n1527.fontSize=13.0;
      n1527.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1527.x=295; n1527.y=1290;
      n1527.characters='Financeiro';
      F.appendChild(n1527);}
    {const n1528=figma.createText();
      n1528.fontName=FR;
      n1528.fontSize=11.0;
      n1528.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1528.x=265; n1528.y=1333;
      n1528.characters='Desconto (R$)';
      F.appendChild(n1528);}
    {const n1529=figma.createText();
      n1529.fontName=FR;
      n1529.fontSize=13.0;
      n1529.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1529.x=274; n1529.y=1356.5;
      n1529.characters='0';
      F.appendChild(n1529);}
    {const n1530=figma.createText();
      n1530.fontName=FR;
      n1530.fontSize=11.0;
      n1530.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1530.x=757; n1530.y=1333;
      n1530.characters='Frete (R$)';
      F.appendChild(n1530);}
    {const n1531=figma.createText();
      n1531.fontName=FR;
      n1531.fontSize=13.0;
      n1531.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1531.x=766; n1531.y=1356.5;
      n1531.characters='0,00';
      F.appendChild(n1531);}
    {const n1532=figma.createText();
      n1532.fontName=FR;
      n1532.fontSize=11.0;
      n1532.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1532.x=265; n1532.y=1389;
      n1532.characters='Total do Pedido';
      F.appendChild(n1532);}
    {const n1533=figma.createText();
      n1533.fontName=FB;
      n1533.fontSize=20.0;
      n1533.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1533.x=281; n1533.y=1416.5;
      n1533.characters='R$ 0,00';
      F.appendChild(n1533);}
    {const n1534=figma.createFrame();
      n1534.x=265.0; n1534.y=1485.0;
      n1534.resize(Math.max(1,20),Math.max(1,20));
      n1534.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1534.clipsContent=false;
      n1534.cornerRadius=50.0;
      F.appendChild(n1534);
      {const n1535=figma.createText();
        n1535.fontName=FB;
        n1535.fontSize=9.0;
        n1535.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1535.x=7.2; n1535.y=4.5;
        n1535.characters='7';
        n1534.appendChild(n1535);}
    }
    {const n1536=figma.createText();
      n1536.fontName=FB;
      n1536.fontSize=13.0;
      n1536.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1536.x=295; n1536.y=1487;
      n1536.characters='Pagamento';
      F.appendChild(n1536);}
    {const n1537=figma.createText();
      n1537.fontName=FB;
      n1537.fontSize=10.0;
      n1537.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1537.x=265; n1537.y=1530;
      n1537.characters='Forma';
      F.appendChild(n1537);}
    {const n1538=figma.createText();
      n1538.fontName=FB;
      n1538.fontSize=10.0;
      n1538.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1538.x=411; n1538.y=1530;
      n1538.characters='Data Pgto';
      F.appendChild(n1538);}
    {const n1539=figma.createText();
      n1539.fontName=FB;
      n1539.fontSize=10.0;
      n1539.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1539.x=541; n1539.y=1530;
      n1539.characters='Valor (R$)';
      F.appendChild(n1539);}
    {const n1540=figma.createText();
      n1540.fontName=FB;
      n1540.fontSize=10.0;
      n1540.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1540.x=657; n1540.y=1530;
      n1540.characters='Confirm.';
      F.appendChild(n1540);}
    {const n1541=figma.createText();
      n1541.fontName=FR;
      n1541.fontSize=13.0;
      n1541.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1541.x=274; n1541.y=1562.5;
      n1541.characters='— Forma —';
      F.appendChild(n1541);}
    {const n1542=figma.createText();
      n1542.fontName=FR;
      n1542.fontSize=13.3;
      n1542.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1542.x=699; n1542.y=1562;
      n1542.characters='on';
      F.appendChild(n1542);}
    {const n1543=figma.createText();
      n1543.fontName=FR;
      n1543.fontSize=12.0;
      n1543.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1543.x=292; n1543.y=1597.5;
      n1543.characters='Adicionar parcela';
      F.appendChild(n1543);}
    {const n1544=figma.createText();
      n1544.fontName=FR;
      n1544.fontSize=12.0;
      n1544.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1544.x=280; n1544.y=1643;
      n1544.characters='Total do pedido';
      F.appendChild(n1544);}
    {const n1545=figma.createText();
      n1545.fontName=FR;
      n1545.fontSize=12.0;
      n1545.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1545.x=1173.8; n1545.y=1644.5;
      n1545.characters='R$ 0,00';
      F.appendChild(n1545);}
    {const n1546=figma.createText();
      n1546.fontName=FR;
      n1546.fontSize=12.0;
      n1546.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1546.x=280; n1546.y=1663;
      n1546.characters='Total pago';
      F.appendChild(n1546);}
    {const n1547=figma.createText();
      n1547.fontName=FR;
      n1547.fontSize=12.0;
      n1547.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1547.x=1173.8; n1547.y=1664.5;
      n1547.characters='R$ 0,00';
      F.appendChild(n1547);}
    {const n1548=figma.createText();
      n1548.fontName=FB;
      n1548.fontSize=12.0;
      n1548.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1548.x=280; n1548.y=1683.5;
      n1548.characters='Falta pagar';
      F.appendChild(n1548);}
    {const n1549=figma.createText();
      n1549.fontName=FB;
      n1549.fontSize=12.0;
      n1549.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1549.x=1165.8; n1549.y=1685;
      n1549.characters='R$ 0,00';
      F.appendChild(n1549);}
    {const n1550=figma.createText();
      n1550.fontName=FR;
      n1550.fontSize=13.3;
      n1550.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1550.x=289; n1550.y=1716.5;
      n1550.characters='on';
      F.appendChild(n1550);}
    {const n1551=figma.createText();
      n1551.fontName=FR;
      n1551.fontSize=12.0;
      n1551.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1551.x=300; n1551.y=1716;
      n1551.characters='Vai pagar na retirada';
      F.appendChild(n1551);}
    {const n1552=figma.createFrame();
      n1552.x=265.0; n1552.y=1780.0;
      n1552.resize(Math.max(1,20),Math.max(1,20));
      n1552.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1552.clipsContent=false;
      n1552.cornerRadius=50.0;
      F.appendChild(n1552);
      {const n1553=figma.createText();
        n1553.fontName=FB;
        n1553.fontSize=9.0;
        n1553.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1553.x=6.8; n1553.y=4.5;
        n1553.characters='8';
        n1552.appendChild(n1553);}
    }
    {const n1554=figma.createText();
      n1554.fontName=FB;
      n1554.fontSize=13.0;
      n1554.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1554.x=295; n1554.y=1782;
      n1554.characters='Entrega';
      F.appendChild(n1554);}
    {const n1555=figma.createText();
      n1555.fontName=FR;
      n1555.fontSize=11.0;
      n1555.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1555.x=265; n1555.y=1825;
      n1555.characters='Data de Entrega';
      F.appendChild(n1555);}
    {const n1556=figma.createText();
      n1556.fontName=FR;
      n1556.fontSize=11.0;
      n1556.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1556.x=352.7; n1556.y=1825;
      n1556.characters='*';
      F.appendChild(n1556);}
    {const n1557=figma.createText();
      n1557.fontName=FR;
      n1557.fontSize=11.0;
      n1557.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1557.x=757; n1557.y=1825;
      n1557.characters='Modalidade';
      F.appendChild(n1557);}
    {const n1558=figma.createText();
      n1558.fontName=FR;
      n1558.fontSize=11.0;
      n1558.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1558.x=820.4; n1558.y=1825;
      n1558.characters='*';
      F.appendChild(n1558);}
    {const n1559=figma.createText();
      n1559.fontName=FB;
      n1559.fontSize=10.0;
      n1559.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1559.x=265; n1559.y=1886.5;
      n1559.characters='Destinatário';
      F.appendChild(n1559);}
    {const n1560=figma.createText();
      n1560.fontName=FR;
      n1560.fontSize=13.3;
      n1560.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1560.x=1083.7; n1560.y=1885.5;
      n1560.characters='on';
      F.appendChild(n1560);}
    {const n1561=figma.createText();
      n1561.fontName=FR;
      n1561.fontSize=12.0;
      n1561.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1561.x=1093.7; n1561.y=1885;
      n1561.characters='Mesmo que o comprador';
      F.appendChild(n1561);}
    {const n1562=figma.createText();
      n1562.fontName=FR;
      n1562.fontSize=11.0;
      n1562.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1562.x=265; n1562.y=1919;
      n1562.characters='Nome do Destinatário';
      F.appendChild(n1562);}
    {const n1563=figma.createText();
      n1563.fontName=FR;
      n1563.fontSize=11.0;
      n1563.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1563.x=383.5; n1563.y=1919;
      n1563.characters='*';
      F.appendChild(n1563);}
    {const n1564=figma.createText();
      n1564.fontName=FR;
      n1564.fontSize=11.0;
      n1564.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1564.x=265; n1564.y=1975;
      n1564.characters='Telefone';
      F.appendChild(n1564);}
    {const n1565=figma.createText();
      n1565.fontName=FR;
      n1565.fontSize=11.0;
      n1565.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1565.x=757; n1565.y=1975;
      n1565.characters='CPF';
      F.appendChild(n1565);}
    {const n1566=figma.createText();
      n1566.fontName=FR;
      n1566.fontSize=11.0;
      n1566.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1566.x=265; n1566.y=2031;
      n1566.characters='Email';
      F.appendChild(n1566);}
    {const n1567=figma.createText();
      n1567.fontName=FB;
      n1567.fontSize=10.0;
      n1567.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1567.x=265; n1567.y=2091;
      n1567.characters='Endereço';
      F.appendChild(n1567);}
    {const n1568=figma.createText();
      n1568.fontName=FR;
      n1568.fontSize=11.0;
      n1568.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1568.x=265; n1568.y=2122;
      n1568.characters='CEP';
      F.appendChild(n1568);}
    {const n1569=figma.createText();
      n1569.fontName=FR;
      n1569.fontSize=13.0;
      n1569.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1569.x=274; n1569.y=2145.5;
      n1569.characters='00000-000';
      F.appendChild(n1569);}
    {const n1570=figma.createText();
      n1570.fontName=FR;
      n1570.fontSize=11.0;
      n1570.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1570.x=265; n1570.y=2178;
      n1570.characters='Logradouro';
      F.appendChild(n1570);}
    {const n1571=figma.createText();
      n1571.fontName=FR;
      n1571.fontSize=11.0;
      n1571.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1571.x=593; n1571.y=2178;
      n1571.characters='Número';
      F.appendChild(n1571);}
    {const n1572=figma.createText();
      n1572.fontName=FR;
      n1572.fontSize=11.0;
      n1572.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1572.x=265; n1572.y=2234;
      n1572.characters='Complemento';
      F.appendChild(n1572);}
    {const n1573=figma.createText();
      n1573.fontName=FR;
      n1573.fontSize=13.0;
      n1573.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1573.x=274; n1573.y=2257.5;
      n1573.characters='Apto, Bloco… (opcional)';
      F.appendChild(n1573);}
    {const n1574=figma.createText();
      n1574.fontName=FR;
      n1574.fontSize=11.0;
      n1574.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1574.x=511; n1574.y=2234;
      n1574.characters='Bairro';
      F.appendChild(n1574);}
    {const n1575=figma.createText();
      n1575.fontName=FR;
      n1575.fontSize=11.0;
      n1575.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1575.x=757; n1575.y=2234;
      n1575.characters='Cidade';
      F.appendChild(n1575);}
    {const n1576=figma.createText();
      n1576.fontName=FR;
      n1576.fontSize=11.0;
      n1576.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1576.x=265; n1576.y=2290;
      n1576.characters='UF';
      F.appendChild(n1576);}
    {const n1577=figma.createText();
      n1577.fontName=FR;
      n1577.fontSize=13.0;
      n1577.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1577.x=274; n1577.y=2313.5;
      n1577.characters='SP';
      F.appendChild(n1577);}
    {const n1578=figma.createText();
      n1578.fontName=FB;
      n1578.fontSize=10.0;
      n1578.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1578.x=265; n1578.y=2350;
      n1578.characters='Observações';
      F.appendChild(n1578);}
    {const n1579=figma.createText();
      n1579.fontName=FR;
      n1579.fontSize=11.0;
      n1579.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1579.x=265; n1579.y=2381;
      n1579.characters='Obs. Fábrica';
      F.appendChild(n1579);}
    {const n1580=figma.createText();
      n1580.fontName=FR;
      n1580.fontSize=11.0;
      n1580.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1580.x=757; n1580.y=2381;
      n1580.characters='Info Motoboy';
      F.appendChild(n1580);}
    {const n1581=figma.createText();
      n1581.fontName=FB;
      n1581.fontSize=9.0;
      n1581.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n1581.x=271.8; n1581.y=2495.5;
      n1581.characters='9';
      F.appendChild(n1581);}
    {const n1582=figma.createText();
      n1582.fontName=FR;
      n1582.fontSize=12.0;
      n1582.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1582.x=295; n1582.y=2493.5;
      n1582.characters='Controle Interno';
      F.appendChild(n1582);}
    {const n1583=figma.createText();
      n1583.fontName=FR;
      n1583.fontSize=11.0;
      n1583.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1583.x=1088.2; n1583.y=2494.5;
      n1583.characters='Uso interno da operação';
      F.appendChild(n1583);}
    {const n1584=figma.createText();
      n1584.fontName=FR;
      n1584.fontSize=10.0;
      n1584.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1584.x=1225.1; n1584.y=2497.1;
      n1584.characters='▼';
      F.appendChild(n1584);}
    {const n1585=figma.createText();
      n1585.fontName=FR;
      n1585.fontSize=10.0;
      n1585.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1585.x=248; n1585.y=1060;
      n1585.characters='Pedido';
      F.appendChild(n1585);}
    {const n1586=figma.createText();
      n1586.fontName=FB;
      n1586.fontSize=13.0;
      n1586.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1586.x=248; n1586.y=1074;
      n1586.characters='#25861';
      F.appendChild(n1586);}
    {const n1587=figma.createText();
      n1587.fontName=FR;
      n1587.fontSize=10.0;
      n1587.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1587.x=327.9; n1587.y=1060;
      n1587.characters='Total';
      F.appendChild(n1587);}
    {const n1588=figma.createText();
      n1588.fontName=FB;
      n1588.fontSize=13.0;
      n1588.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1588.x=327.9; n1588.y=1074;
      n1588.characters='R$ 0,00';
      F.appendChild(n1588);}
    {const n1589=figma.createText();
      n1589.fontName=FR;
      n1589.fontSize=10.0;
      n1589.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1589.x=414.9; n1589.y=1060;
      n1589.characters='Falta pagar';
      F.appendChild(n1589);}
    {const n1590=figma.createText();
      n1590.fontName=FB;
      n1590.fontSize=13.0;
      n1590.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1590.x=414.9; n1590.y=1074;
      n1590.characters='R$ 0,00';
      F.appendChild(n1590);}
    {const n1591=figma.createText();
      n1591.fontName=FR;
      n1591.fontSize=13.0;
      n1591.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1591.x=1018.7; n1591.y=1066;
      n1591.characters='Limpar';
      F.appendChild(n1591);}
    {const n1592=figma.createFrame();
      n1592.x=1083.2; n1592.y=1057.0;
      n1592.resize(Math.max(1,168.8),Math.max(1,34));
      n1592.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1592.clipsContent=false;
      n1592.cornerRadius=4.0;
      F.appendChild(n1592);
      {const n1593=figma.createText();
        n1593.fontName=FB;
        n1593.fontSize=13.0;
        n1593.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1593.x=39; n1593.y=9;
        n1593.characters='Cadastrar Pedido';
        n1592.appendChild(n1593);}
    }
    {const n1594=figma.createText();
      n1594.fontName=FR;
      n1594.fontSize=11.0;
      n1594.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1594.x=30; n1594.y=2611;
      n1594.characters='CPF 123.456.789-00 inválido — verifique o número';
      F.appendChild(n1594);}
    {const n1595=figma.createText();
      n1595.fontName=FR;
      n1595.fontSize=11.0;
      n1595.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1595.x=1241.8; n1595.y=2612;
      n1595.characters='v4.2';
      F.appendChild(n1595);}
  }
  await Promise.resolve();

  // ── B3: CEP não encontrado
  {const F=figma.createFrame();
    F.x=12240; F.y=0;
    F.resize(1280,2584);
    F.name='B3 — CEP não encontrado';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n1596=figma.createFrame();
      n1596.x=0.0; n1596.y=0.0;
      n1596.resize(Math.max(1,1280),Math.max(1,38));
      n1596.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1596.clipsContent=false;
      F.appendChild(n1596);
      {const n1597=figma.createFrame();
        n1597.x=14.0; n1597.y=8.0;
        n1597.resize(Math.max(1,22),Math.max(1,22));
        n1597.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1597.clipsContent=false;
        n1597.cornerRadius=5.0;
        n1596.appendChild(n1597);
        {const n1598=figma.createText();
          n1598.fontName=FB;
          n1598.fontSize=10.0;
          n1598.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1598.x=2.5; n1598.y=5;
          n1598.characters='MC';
          n1597.appendChild(n1598);}
      }
      {const n1599=figma.createText();
        n1599.fontName=FR;
        n1599.fontSize=13.0;
        n1599.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1599.x=44; n1599.y=11;
        n1599.characters='Maria Cacau — Gestão de Pedidos';
        n1596.appendChild(n1599);}
    }
    {const n1600=figma.createFrame();
      n1600.x=0.0; n1600.y=38.0;
      n1600.resize(Math.max(1,220),Math.max(1,2518));
      n1600.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1600.clipsContent=false;
      F.appendChild(n1600);
      {const n1601=figma.createFrame();
        n1601.x=14.0; n1601.y=14.0;
        n1601.resize(Math.max(1,38),Math.max(1,38));
        n1601.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1601.clipsContent=false;
        n1601.cornerRadius=8.0;
        n1600.appendChild(n1601);
        {const n1602=figma.createText();
          n1602.fontName=FB;
          n1602.fontSize=14.0;
          n1602.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1602.x=7.5; n1602.y=10.5;
          n1602.characters='MC';
          n1601.appendChild(n1602);}
      }
      {const n1603=figma.createText();
        n1603.fontName=FB;
        n1603.fontSize=13.0;
        n1603.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1603.x=62; n1603.y=18.5;
        n1603.characters='Maria Cacau';
        n1600.appendChild(n1603);}
      {const n1604=figma.createText();
        n1604.fontName=FR;
        n1604.fontSize=10.0;
        n1604.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1604.x=62; n1604.y=35.5;
        n1604.characters='Gestão de Pedidos';
        n1600.appendChild(n1604);}
      {const n1605=figma.createText();
        n1605.fontName=FB;
        n1605.fontSize=10.0;
        n1605.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1605.x=16; n1605.y=85;
        n1605.characters='Pedidos';
        n1600.appendChild(n1605);}
      {const n1606=figma.createFrame();
        n1606.x=8.0; n1606.y=101.0;
        n1606.resize(Math.max(1,204),Math.max(1,34));
        n1606.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n1606.clipsContent=false;
        n1606.cornerRadius=8.0;
        n1600.appendChild(n1606);
        {const n1607=figma.createText();
          n1607.fontName=FB;
          n1607.fontSize=13.0;
          n1607.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1607.x=38; n1607.y=9;
          n1607.characters='Novo Pedido';
          n1606.appendChild(n1607);}
        {const n1608=figma.createFrame();
          n1608.x=160.4; n1608.y=10.5;
          n1608.resize(Math.max(1,33.6),Math.max(1,13));
          n1608.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n1608.clipsContent=false;
          n1608.cornerRadius=8.0;
          n1606.appendChild(n1608);
          {const n1609=figma.createText();
            n1609.fontName=FB;
            n1609.fontSize=9.0;
            n1609.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n1609.x=5; n1609.y=1;
            n1609.characters='Novo';
            n1608.appendChild(n1609);}
        }
      }
      {const n1610=figma.createText();
        n1610.fontName=FB;
        n1610.fontSize=10.0;
        n1610.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1610.x=16; n1610.y=145;
        n1610.characters='Consultas';
        n1600.appendChild(n1610);}
      {const n1611=figma.createText();
        n1611.fontName=FR;
        n1611.fontSize=13.0;
        n1611.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1611.x=46; n1611.y=170;
        n1611.characters='Produtos';
        n1600.appendChild(n1611);}
      {const n1612=figma.createText();
        n1612.fontName=FR;
        n1612.fontSize=13.0;
        n1612.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1612.x=46; n1612.y=206;
        n1612.characters='Entregas';
        n1600.appendChild(n1612);}
      {const n1613=figma.createText();
        n1613.fontName=FR;
        n1613.fontSize=13.0;
        n1613.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1613.x=46; n1613.y=242;
        n1613.characters='Verificar CPF';
        n1600.appendChild(n1613);}
      {const n1614=figma.createText();
        n1614.fontName=FB;
        n1614.fontSize=10.0;
        n1614.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1614.x=16; n1614.y=277;
        n1614.characters='Em breve';
        n1600.appendChild(n1614);}
      {const n1615=figma.createText();
        n1615.fontName=FR;
        n1615.fontSize=13.0;
        n1615.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1615.x=46; n1615.y=302;
        n1615.characters='Frete por CEP';
        n1600.appendChild(n1615);}
      {const n1616=figma.createFrame();
        n1616.x=169.2; n1616.y=303.5;
        n1616.resize(Math.max(1,32.8),Math.max(1,13));
        n1616.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1616.clipsContent=false;
        n1616.cornerRadius=8.0;
        n1616.opacity=0.36;
        n1600.appendChild(n1616);
        {const n1617=figma.createText();
          n1617.fontName=FB;
          n1617.fontSize=9.0;
          n1617.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1617.x=5; n1617.y=1;
          n1617.characters='Logo';
          n1616.appendChild(n1617);}
      }
      {const n1618=figma.createText();
        n1618.fontName=FR;
        n1618.fontSize=13.0;
        n1618.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1618.x=46; n1618.y=338;
        n1618.characters='Nota Fiscal';
        n1600.appendChild(n1618);}
      {const n1619=figma.createFrame();
        n1619.x=169.2; n1619.y=339.5;
        n1619.resize(Math.max(1,32.8),Math.max(1,13));
        n1619.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1619.clipsContent=false;
        n1619.cornerRadius=8.0;
        n1619.opacity=0.36;
        n1600.appendChild(n1619);
        {const n1620=figma.createText();
          n1620.fontName=FB;
          n1620.fontSize=9.0;
          n1620.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1620.x=5; n1620.y=1;
          n1620.characters='Logo';
          n1619.appendChild(n1620);}
      }
    }
    {const n1621=figma.createText();
      n1621.fontName=FB;
      n1621.fontSize=20.0;
      n1621.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1621.x=248; n1621.y=62;
      n1621.characters='Novo Pedido';
      F.appendChild(n1621);}
    {const n1622=figma.createText();
      n1622.fontName=FR;
      n1622.fontSize=13.0;
      n1622.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1622.x=248; n1622.y=88;
      n1622.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n1622);}
    {const n1623=figma.createFrame();
      n1623.x=265.0; n1623.y=133.0;
      n1623.resize(Math.max(1,20),Math.max(1,20));
      n1623.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1623.clipsContent=false;
      n1623.cornerRadius=50.0;
      F.appendChild(n1623);
      {const n1624=figma.createText();
        n1624.fontName=FB;
        n1624.fontSize=9.0;
        n1624.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1624.x=7.6; n1624.y=4.5;
        n1624.characters='1';
        n1623.appendChild(n1624);}
    }
    {const n1625=figma.createText();
      n1625.fontName=FB;
      n1625.fontSize=13.0;
      n1625.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1625.x=295; n1625.y=135;
      n1625.characters='Identificação do Pedido';
      F.appendChild(n1625);}
    {const n1626=figma.createText();
      n1626.fontName=FR;
      n1626.fontSize=11.0;
      n1626.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1626.x=265; n1626.y=178;
      n1626.characters='Nº Pedido';
      F.appendChild(n1626);}
    {const n1627=figma.createText();
      n1627.fontName=FR;
      n1627.fontSize=11.0;
      n1627.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1627.x=319.2; n1627.y=178;
      n1627.characters='*';
      F.appendChild(n1627);}
    {const n1628=figma.createText();
      n1628.fontName=FR;
      n1628.fontSize=13.0;
      n1628.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1628.x=274; n1628.y=201.5;
      n1628.characters='25862';
      F.appendChild(n1628);}
    {const n1629=figma.createText();
      n1629.fontName=FR;
      n1629.fontSize=11.0;
      n1629.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1629.x=757; n1629.y=178;
      n1629.characters='Como Conheceu';
      F.appendChild(n1629);}
    {const n1630=figma.createFrame();
      n1630.x=265.0; n1630.y=260.0;
      n1630.resize(Math.max(1,20),Math.max(1,20));
      n1630.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1630.clipsContent=false;
      n1630.cornerRadius=50.0;
      F.appendChild(n1630);
      {const n1631=figma.createText();
        n1631.fontName=FB;
        n1631.fontSize=9.0;
        n1631.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1631.x=7; n1631.y=4.5;
        n1631.characters='2';
        n1630.appendChild(n1631);}
    }
    {const n1632=figma.createText();
      n1632.fontName=FB;
      n1632.fontSize=13.0;
      n1632.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1632.x=295; n1632.y=262;
      n1632.characters='Comprador';
      F.appendChild(n1632);}
    {const n1633=figma.createText();
      n1633.fontName=FR;
      n1633.fontSize=11.0;
      n1633.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1633.x=265; n1633.y=305;
      n1633.characters='Nome do Comprador';
      F.appendChild(n1633);}
    {const n1634=figma.createText();
      n1634.fontName=FR;
      n1634.fontSize=11.0;
      n1634.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1634.x=378.2; n1634.y=305;
      n1634.characters='*';
      F.appendChild(n1634);}
    {const n1635=figma.createText();
      n1635.fontName=FR;
      n1635.fontSize=13.0;
      n1635.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1635.x=274; n1635.y=328.5;
      n1635.characters='Ana Pereira';
      F.appendChild(n1635);}
    {const n1636=figma.createText();
      n1636.fontName=FR;
      n1636.fontSize=11.0;
      n1636.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1636.x=265; n1636.y=361;
      n1636.characters='Parentesco';
      F.appendChild(n1636);}
    {const n1637=figma.createText();
      n1637.fontName=FR;
      n1637.fontSize=13.0;
      n1637.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1637.x=274; n1637.y=384.5;
      n1637.characters='Mãe';
      F.appendChild(n1637);}
    {const n1638=figma.createText();
      n1638.fontName=FR;
      n1638.fontSize=11.0;
      n1638.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1638.x=757; n1638.y=361;
      n1638.characters='Telefone';
      F.appendChild(n1638);}
    {const n1639=figma.createText();
      n1639.fontName=FR;
      n1639.fontSize=11.0;
      n1639.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1639.x=803.6; n1639.y=361;
      n1639.characters='*';
      F.appendChild(n1639);}
    {const n1640=figma.createText();
      n1640.fontName=FR;
      n1640.fontSize=13.0;
      n1640.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1640.x=766; n1640.y=384.5;
      n1640.characters='(11) 98765-4321';
      F.appendChild(n1640);}
    {const n1641=figma.createText();
      n1641.fontName=FR;
      n1641.fontSize=11.0;
      n1641.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1641.x=265; n1641.y=417;
      n1641.characters='CPF';
      F.appendChild(n1641);}
    {const n1642=figma.createText();
      n1642.fontName=FR;
      n1642.fontSize=11.0;
      n1642.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1642.x=757; n1642.y=417;
      n1642.characters='Email';
      F.appendChild(n1642);}
    {const n1643=figma.createFrame();
      n1643.x=265.0; n1643.y=499.0;
      n1643.resize(Math.max(1,20),Math.max(1,20));
      n1643.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1643.clipsContent=false;
      n1643.cornerRadius=50.0;
      F.appendChild(n1643);
      {const n1644=figma.createText();
        n1644.fontName=FB;
        n1644.fontSize=9.0;
        n1644.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1644.x=6.9; n1644.y=4.5;
        n1644.characters='3';
        n1643.appendChild(n1644);}
    }
    {const n1645=figma.createText();
      n1645.fontName=FB;
      n1645.fontSize=13.0;
      n1645.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1645.x=295; n1645.y=501;
      n1645.characters='Presenteado & Evento';
      F.appendChild(n1645);}
    {const n1646=figma.createText();
      n1646.fontName=FR;
      n1646.fontSize=11.0;
      n1646.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1646.x=265; n1646.y=544;
      n1646.characters='Nome do Presenteado';
      F.appendChild(n1646);}
    {const n1647=figma.createText();
      n1647.fontName=FR;
      n1647.fontSize=11.0;
      n1647.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1647.x=265; n1647.y=600;
      n1647.characters='Sexo';
      F.appendChild(n1647);}
    {const n1648=figma.createText();
      n1648.fontName=FR;
      n1648.fontSize=11.0;
      n1648.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1648.x=289.5; n1648.y=624.5;
      n1648.characters='Feminino';
      F.appendChild(n1648);}
    {const n1649=figma.createText();
      n1649.fontName=FR;
      n1649.fontSize=11.0;
      n1649.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1649.x=382.09999999999997; n1649.y=624.5;
      n1649.characters='Masculino';
      F.appendChild(n1649);}
    {const n1650=figma.createText();
      n1650.fontName=FR;
      n1650.fontSize=11.0;
      n1650.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1650.x=482.7; n1650.y=624.5;
      n1650.characters='Gêmeas';
      F.appendChild(n1650);}
    {const n1651=figma.createText();
      n1651.fontName=FR;
      n1651.fontSize=11.0;
      n1651.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1651.x=577.9000000000001; n1651.y=624.5;
      n1651.characters='Gêmeos';
      F.appendChild(n1651);}
    {const n1652=figma.createText();
      n1652.fontName=FR;
      n1652.fontSize=11.0;
      n1652.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1652.x=670.2; n1652.y=624.5;
      n1652.characters='Não sabe';
      F.appendChild(n1652);}
    {const n1653=figma.createText();
      n1653.fontName=FR;
      n1653.fontSize=11.0;
      n1653.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1653.x=757; n1653.y=600;
      n1653.characters='Tipo de Evento';
      F.appendChild(n1653);}
    {const n1654=figma.createText();
      n1654.fontName=FR;
      n1654.fontSize=11.0;
      n1654.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1654.x=265; n1654.y=656;
      n1654.characters='Data do Evento';
      F.appendChild(n1654);}
    {const n1655=figma.createFrame();
      n1655.x=265.0; n1655.y=738.0;
      n1655.resize(Math.max(1,20),Math.max(1,20));
      n1655.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1655.clipsContent=false;
      n1655.cornerRadius=50.0;
      F.appendChild(n1655);
      {const n1656=figma.createText();
        n1656.fontName=FB;
        n1656.fontSize=9.0;
        n1656.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1656.x=6.8; n1656.y=4.5;
        n1656.characters='4';
        n1655.appendChild(n1656);}
    }
    {const n1657=figma.createText();
      n1657.fontName=FB;
      n1657.fontSize=13.0;
      n1657.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1657.x=295; n1657.y=740;
      n1657.characters='Personalização';
      F.appendChild(n1657);}
    {const n1658=figma.createText();
      n1658.fontName=FR;
      n1658.fontSize=11.0;
      n1658.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1658.x=1138; n1658.y=741.5;
      n1658.characters='Arte & embalagem';
      F.appendChild(n1658);}
    {const n1659=figma.createText();
      n1659.fontName=FR;
      n1659.fontSize=11.0;
      n1659.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1659.x=265; n1659.y=783;
      n1659.characters='Nome da Etiqueta';
      F.appendChild(n1659);}
    {const n1660=figma.createText();
      n1660.fontName=FR;
      n1660.fontSize=11.0;
      n1660.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1660.x=757; n1660.y=783;
      n1660.characters='Tema da Etiqueta';
      F.appendChild(n1660);}
    {const n1661=figma.createText();
      n1661.fontName=FR;
      n1661.fontSize=11.0;
      n1661.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1661.x=265; n1661.y=839;
      n1661.characters='Nome na Caixa';
      F.appendChild(n1661);}
    {const n1662=figma.createText();
      n1662.fontName=FR;
      n1662.fontSize=11.0;
      n1662.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1662.x=757; n1662.y=839;
      n1662.characters='Arte / Tecido da Caixa';
      F.appendChild(n1662);}
    {const n1663=figma.createText();
      n1663.fontName=FR;
      n1663.fontSize=11.0;
      n1663.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1663.x=265; n1663.y=895;
      n1663.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n1663);}
    {const n1664=figma.createText();
      n1664.fontName=FR;
      n1664.fontSize=13.0;
      n1664.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1664.x=274; n1664.y=918.5;
      n1664.characters='0';
      F.appendChild(n1664);}
    {const n1665=figma.createFrame();
      n1665.x=265.0; n1665.y=977.0;
      n1665.resize(Math.max(1,20),Math.max(1,20));
      n1665.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1665.clipsContent=false;
      n1665.cornerRadius=50.0;
      F.appendChild(n1665);
      {const n1666=figma.createText();
        n1666.fontName=FB;
        n1666.fontSize=9.0;
        n1666.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1666.x=6.9; n1666.y=4.5;
        n1666.characters='5';
        n1665.appendChild(n1666);}
    }
    {const n1667=figma.createText();
      n1667.fontName=FB;
      n1667.fontSize=13.0;
      n1667.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1667.x=295; n1667.y=979;
      n1667.characters='Produtos';
      F.appendChild(n1667);}
    {const n1668=figma.createText();
      n1668.fontName=FR;
      n1668.fontSize=11.0;
      n1668.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1668.x=1203.9; n1668.y=980.5;
      n1668.characters='1 item';
      F.appendChild(n1668);}
    {const n1669=figma.createText();
      n1669.fontName=FB;
      n1669.fontSize=10.0;
      n1669.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1669.x=265; n1669.y=1022;
      n1669.characters='Produto';
      F.appendChild(n1669);}
    {const n1670=figma.createText();
      n1670.fontName=FB;
      n1670.fontSize=10.0;
      n1670.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1670.x=937; n1670.y=1022;
      n1670.characters='Qtd';
      F.appendChild(n1670);}
    {const n1671=figma.createText();
      n1671.fontName=FB;
      n1671.fontSize=10.0;
      n1671.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1671.x=1007; n1671.y=1022;
      n1671.characters='R$ Unit.';
      F.appendChild(n1671);}
    {const n1672=figma.createText();
      n1672.fontName=FB;
      n1672.fontSize=10.0;
      n1672.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1672.x=1113; n1672.y=1022;
      n1672.characters='Total';
      F.appendChild(n1672);}
    {const n1673=figma.createText();
      n1673.fontName=FR;
      n1673.fontSize=13.0;
      n1673.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1673.x=274; n1673.y=1054.5;
      n1673.characters='Kit Aniversário completo';
      F.appendChild(n1673);}
    {const n1674=figma.createText();
      n1674.fontName=FR;
      n1674.fontSize=13.0;
      n1674.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1674.x=946; n1674.y=1054.5;
      n1674.characters='1';
      F.appendChild(n1674);}
    {const n1675=figma.createText();
      n1675.fontName=FR;
      n1675.fontSize=13.0;
      n1675.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1675.x=1016; n1675.y=1054.5;
      n1675.characters='120,00';
      F.appendChild(n1675);}
    {const n1676=figma.createText();
      n1676.fontName=FR;
      n1676.fontSize=12.0;
      n1676.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1676.x=1123; n1676.y=1056;
      n1676.characters='R$ 120,00';
      F.appendChild(n1676);}
    {const n1677=figma.createText();
      n1677.fontName=FR;
      n1677.fontSize=12.0;
      n1677.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1677.x=292; n1677.y=1089.5;
      n1677.characters='Adicionar produto';
      F.appendChild(n1677);}
    {const n1678=figma.createText();
      n1678.fontName=FR;
      n1678.fontSize=11.0;
      n1678.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1678.x=265; n1678.y=1110;
      n1678.characters='Outros (descrição livre)';
      F.appendChild(n1678);}
    {const n1679=figma.createText();
      n1679.fontName=FR;
      n1679.fontSize=13.0;
      n1679.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1679.x=274; n1679.y=1133.5;
      n1679.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n1679);}
    {const n1680=figma.createText();
      n1680.fontName=FR;
      n1680.fontSize=11.0;
      n1680.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1680.x=1000.4; n1680.y=1174;
      n1680.characters='Subtotal dos produtos';
      F.appendChild(n1680);}
    {const n1681=figma.createText();
      n1681.fontName=FB;
      n1681.fontSize=13.0;
      n1681.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1681.x=1170.7; n1681.y=1174;
      n1681.characters='R$ 120,00';
      F.appendChild(n1681);}
    {const n1682=figma.createFrame();
      n1682.x=265.0; n1682.y=1224.0;
      n1682.resize(Math.max(1,20),Math.max(1,20));
      n1682.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1682.clipsContent=false;
      n1682.cornerRadius=50.0;
      F.appendChild(n1682);
      {const n1683=figma.createText();
        n1683.fontName=FB;
        n1683.fontSize=9.0;
        n1683.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1683.x=6.8; n1683.y=4.5;
        n1683.characters='6';
        n1682.appendChild(n1683);}
    }
    {const n1684=figma.createText();
      n1684.fontName=FB;
      n1684.fontSize=13.0;
      n1684.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1684.x=295; n1684.y=1226;
      n1684.characters='Financeiro';
      F.appendChild(n1684);}
    {const n1685=figma.createText();
      n1685.fontName=FR;
      n1685.fontSize=11.0;
      n1685.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1685.x=265; n1685.y=1269;
      n1685.characters='Desconto (R$)';
      F.appendChild(n1685);}
    {const n1686=figma.createText();
      n1686.fontName=FR;
      n1686.fontSize=13.0;
      n1686.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1686.x=274; n1686.y=1292.5;
      n1686.characters='0';
      F.appendChild(n1686);}
    {const n1687=figma.createText();
      n1687.fontName=FR;
      n1687.fontSize=11.0;
      n1687.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1687.x=757; n1687.y=1269;
      n1687.characters='Frete (R$)';
      F.appendChild(n1687);}
    {const n1688=figma.createText();
      n1688.fontName=FR;
      n1688.fontSize=13.0;
      n1688.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1688.x=766; n1688.y=1292.5;
      n1688.characters='0,00';
      F.appendChild(n1688);}
    {const n1689=figma.createText();
      n1689.fontName=FR;
      n1689.fontSize=11.0;
      n1689.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1689.x=265; n1689.y=1325;
      n1689.characters='Total do Pedido';
      F.appendChild(n1689);}
    {const n1690=figma.createText();
      n1690.fontName=FB;
      n1690.fontSize=20.0;
      n1690.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1690.x=281; n1690.y=1352.5;
      n1690.characters='R$ 120,00';
      F.appendChild(n1690);}
    {const n1691=figma.createFrame();
      n1691.x=265.0; n1691.y=1421.0;
      n1691.resize(Math.max(1,20),Math.max(1,20));
      n1691.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1691.clipsContent=false;
      n1691.cornerRadius=50.0;
      F.appendChild(n1691);
      {const n1692=figma.createText();
        n1692.fontName=FB;
        n1692.fontSize=9.0;
        n1692.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1692.x=7.2; n1692.y=4.5;
        n1692.characters='7';
        n1691.appendChild(n1692);}
    }
    {const n1693=figma.createText();
      n1693.fontName=FB;
      n1693.fontSize=13.0;
      n1693.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1693.x=295; n1693.y=1423;
      n1693.characters='Pagamento';
      F.appendChild(n1693);}
    {const n1694=figma.createText();
      n1694.fontName=FB;
      n1694.fontSize=10.0;
      n1694.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1694.x=265; n1694.y=1466;
      n1694.characters='Forma';
      F.appendChild(n1694);}
    {const n1695=figma.createText();
      n1695.fontName=FB;
      n1695.fontSize=10.0;
      n1695.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1695.x=411; n1695.y=1466;
      n1695.characters='Data Pgto';
      F.appendChild(n1695);}
    {const n1696=figma.createText();
      n1696.fontName=FB;
      n1696.fontSize=10.0;
      n1696.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1696.x=541; n1696.y=1466;
      n1696.characters='Valor (R$)';
      F.appendChild(n1696);}
    {const n1697=figma.createText();
      n1697.fontName=FB;
      n1697.fontSize=10.0;
      n1697.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1697.x=657; n1697.y=1466;
      n1697.characters='Confirm.';
      F.appendChild(n1697);}
    {const n1698=figma.createText();
      n1698.fontName=FR;
      n1698.fontSize=13.0;
      n1698.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1698.x=274; n1698.y=1498.5;
      n1698.characters='— Forma —';
      F.appendChild(n1698);}
    {const n1699=figma.createText();
      n1699.fontName=FR;
      n1699.fontSize=13.3;
      n1699.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1699.x=699; n1699.y=1498;
      n1699.characters='on';
      F.appendChild(n1699);}
    {const n1700=figma.createText();
      n1700.fontName=FR;
      n1700.fontSize=12.0;
      n1700.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1700.x=292; n1700.y=1533.5;
      n1700.characters='Adicionar parcela';
      F.appendChild(n1700);}
    {const n1701=figma.createText();
      n1701.fontName=FR;
      n1701.fontSize=12.0;
      n1701.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1701.x=280; n1701.y=1579;
      n1701.characters='Total do pedido';
      F.appendChild(n1701);}
    {const n1702=figma.createText();
      n1702.fontName=FR;
      n1702.fontSize=12.0;
      n1702.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1702.x=1160.6; n1702.y=1580.5;
      n1702.characters='R$ 120,00';
      F.appendChild(n1702);}
    {const n1703=figma.createText();
      n1703.fontName=FR;
      n1703.fontSize=12.0;
      n1703.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1703.x=280; n1703.y=1599;
      n1703.characters='Total pago';
      F.appendChild(n1703);}
    {const n1704=figma.createText();
      n1704.fontName=FR;
      n1704.fontSize=12.0;
      n1704.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1704.x=1173.8; n1704.y=1600.5;
      n1704.characters='R$ 0,00';
      F.appendChild(n1704);}
    {const n1705=figma.createText();
      n1705.fontName=FB;
      n1705.fontSize=12.0;
      n1705.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1705.x=280; n1705.y=1619.5;
      n1705.characters='Falta pagar';
      F.appendChild(n1705);}
    {const n1706=figma.createText();
      n1706.fontName=FB;
      n1706.fontSize=12.0;
      n1706.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1706.x=1152.6; n1706.y=1621;
      n1706.characters='R$ 120,00';
      F.appendChild(n1706);}
    {const n1707=figma.createText();
      n1707.fontName=FR;
      n1707.fontSize=13.3;
      n1707.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1707.x=289; n1707.y=1652.5;
      n1707.characters='on';
      F.appendChild(n1707);}
    {const n1708=figma.createText();
      n1708.fontName=FR;
      n1708.fontSize=12.0;
      n1708.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1708.x=300; n1708.y=1652;
      n1708.characters='Vai pagar na retirada';
      F.appendChild(n1708);}
    {const n1709=figma.createFrame();
      n1709.x=265.0; n1709.y=1716.0;
      n1709.resize(Math.max(1,20),Math.max(1,20));
      n1709.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1709.clipsContent=false;
      n1709.cornerRadius=50.0;
      F.appendChild(n1709);
      {const n1710=figma.createText();
        n1710.fontName=FB;
        n1710.fontSize=9.0;
        n1710.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1710.x=6.8; n1710.y=4.5;
        n1710.characters='8';
        n1709.appendChild(n1710);}
    }
    {const n1711=figma.createText();
      n1711.fontName=FB;
      n1711.fontSize=13.0;
      n1711.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1711.x=295; n1711.y=1718;
      n1711.characters='Entrega';
      F.appendChild(n1711);}
    {const n1712=figma.createText();
      n1712.fontName=FR;
      n1712.fontSize=11.0;
      n1712.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1712.x=265; n1712.y=1761;
      n1712.characters='Data de Entrega';
      F.appendChild(n1712);}
    {const n1713=figma.createText();
      n1713.fontName=FR;
      n1713.fontSize=11.0;
      n1713.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1713.x=352.7; n1713.y=1761;
      n1713.characters='*';
      F.appendChild(n1713);}
    {const n1714=figma.createText();
      n1714.fontName=FR;
      n1714.fontSize=11.0;
      n1714.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1714.x=757; n1714.y=1761;
      n1714.characters='Modalidade';
      F.appendChild(n1714);}
    {const n1715=figma.createText();
      n1715.fontName=FR;
      n1715.fontSize=11.0;
      n1715.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1715.x=820.4; n1715.y=1761;
      n1715.characters='*';
      F.appendChild(n1715);}
    {const n1716=figma.createText();
      n1716.fontName=FR;
      n1716.fontSize=13.0;
      n1716.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1716.x=766; n1716.y=1784.5;
      n1716.characters='SEDEX PLP';
      F.appendChild(n1716);}
    {const n1717=figma.createText();
      n1717.fontName=FB;
      n1717.fontSize=10.0;
      n1717.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1717.x=265; n1717.y=1822.5;
      n1717.characters='Destinatário';
      F.appendChild(n1717);}
    {const n1718=figma.createText();
      n1718.fontName=FR;
      n1718.fontSize=13.3;
      n1718.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1718.x=1083.7; n1718.y=1821.5;
      n1718.characters='on';
      F.appendChild(n1718);}
    {const n1719=figma.createText();
      n1719.fontName=FR;
      n1719.fontSize=12.0;
      n1719.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1719.x=1093.7; n1719.y=1821;
      n1719.characters='Mesmo que o comprador';
      F.appendChild(n1719);}
    {const n1720=figma.createText();
      n1720.fontName=FR;
      n1720.fontSize=11.0;
      n1720.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1720.x=265; n1720.y=1855;
      n1720.characters='Nome do Destinatário';
      F.appendChild(n1720);}
    {const n1721=figma.createText();
      n1721.fontName=FR;
      n1721.fontSize=11.0;
      n1721.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1721.x=383.5; n1721.y=1855;
      n1721.characters='*';
      F.appendChild(n1721);}
    {const n1722=figma.createText();
      n1722.fontName=FR;
      n1722.fontSize=13.0;
      n1722.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1722.x=274; n1722.y=1878.5;
      n1722.characters='Ana Pereira';
      F.appendChild(n1722);}
    {const n1723=figma.createText();
      n1723.fontName=FR;
      n1723.fontSize=11.0;
      n1723.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1723.x=265; n1723.y=1911;
      n1723.characters='Telefone';
      F.appendChild(n1723);}
    {const n1724=figma.createText();
      n1724.fontName=FR;
      n1724.fontSize=13.0;
      n1724.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1724.x=274; n1724.y=1934.5;
      n1724.characters='(11) 98765-4321';
      F.appendChild(n1724);}
    {const n1725=figma.createText();
      n1725.fontName=FR;
      n1725.fontSize=11.0;
      n1725.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1725.x=757; n1725.y=1911;
      n1725.characters='CPF';
      F.appendChild(n1725);}
    {const n1726=figma.createText();
      n1726.fontName=FR;
      n1726.fontSize=11.0;
      n1726.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1726.x=265; n1726.y=1967;
      n1726.characters='Email';
      F.appendChild(n1726);}
    {const n1727=figma.createText();
      n1727.fontName=FB;
      n1727.fontSize=10.0;
      n1727.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1727.x=265; n1727.y=2027;
      n1727.characters='Endereço';
      F.appendChild(n1727);}
    {const n1728=figma.createText();
      n1728.fontName=FR;
      n1728.fontSize=11.0;
      n1728.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1728.x=265; n1728.y=2058;
      n1728.characters='CEP';
      F.appendChild(n1728);}
    {const n1729=figma.createText();
      n1729.fontName=FR;
      n1729.fontSize=13.0;
      n1729.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1729.x=274; n1729.y=2081.5;
      n1729.characters='00000-000';
      F.appendChild(n1729);}
    {const n1730=figma.createText();
      n1730.fontName=FR;
      n1730.fontSize=10.0;
      n1730.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1730.x=265; n1730.y=2109;
      n1730.characters='CEP não encontrado. Preencha o endereço manualmente.';
      F.appendChild(n1730);}
    {const n1731=figma.createText();
      n1731.fontName=FR;
      n1731.fontSize=11.0;
      n1731.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1731.x=265; n1731.y=2131;
      n1731.characters='Logradouro';
      F.appendChild(n1731);}
    {const n1732=figma.createText();
      n1732.fontName=FR;
      n1732.fontSize=11.0;
      n1732.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1732.x=593; n1732.y=2131;
      n1732.characters='Número';
      F.appendChild(n1732);}
    {const n1733=figma.createText();
      n1733.fontName=FR;
      n1733.fontSize=11.0;
      n1733.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1733.x=265; n1733.y=2187;
      n1733.characters='Complemento';
      F.appendChild(n1733);}
    {const n1734=figma.createText();
      n1734.fontName=FR;
      n1734.fontSize=13.0;
      n1734.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1734.x=274; n1734.y=2210.5;
      n1734.characters='Apto, Bloco… (opcional)';
      F.appendChild(n1734);}
    {const n1735=figma.createText();
      n1735.fontName=FR;
      n1735.fontSize=11.0;
      n1735.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1735.x=511; n1735.y=2187;
      n1735.characters='Bairro';
      F.appendChild(n1735);}
    {const n1736=figma.createText();
      n1736.fontName=FR;
      n1736.fontSize=11.0;
      n1736.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1736.x=757; n1736.y=2187;
      n1736.characters='Cidade';
      F.appendChild(n1736);}
    {const n1737=figma.createText();
      n1737.fontName=FR;
      n1737.fontSize=11.0;
      n1737.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1737.x=265; n1737.y=2243;
      n1737.characters='UF';
      F.appendChild(n1737);}
    {const n1738=figma.createText();
      n1738.fontName=FR;
      n1738.fontSize=13.0;
      n1738.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1738.x=274; n1738.y=2266.5;
      n1738.characters='SP';
      F.appendChild(n1738);}
    {const n1739=figma.createText();
      n1739.fontName=FB;
      n1739.fontSize=10.0;
      n1739.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1739.x=265; n1739.y=2303;
      n1739.characters='Observações';
      F.appendChild(n1739);}
    {const n1740=figma.createText();
      n1740.fontName=FR;
      n1740.fontSize=11.0;
      n1740.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1740.x=265; n1740.y=2334;
      n1740.characters='Obs. Fábrica';
      F.appendChild(n1740);}
    {const n1741=figma.createText();
      n1741.fontName=FR;
      n1741.fontSize=11.0;
      n1741.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1741.x=757; n1741.y=2334;
      n1741.characters='Info Motoboy';
      F.appendChild(n1741);}
    {const n1742=figma.createText();
      n1742.fontName=FB;
      n1742.fontSize=9.0;
      n1742.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n1742.x=271.8; n1742.y=2448.5;
      n1742.characters='9';
      F.appendChild(n1742);}
    {const n1743=figma.createText();
      n1743.fontName=FR;
      n1743.fontSize=12.0;
      n1743.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1743.x=295; n1743.y=2446.5;
      n1743.characters='Controle Interno';
      F.appendChild(n1743);}
    {const n1744=figma.createText();
      n1744.fontName=FR;
      n1744.fontSize=11.0;
      n1744.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1744.x=1088.2; n1744.y=2447.5;
      n1744.characters='Uso interno da operação';
      F.appendChild(n1744);}
    {const n1745=figma.createText();
      n1745.fontName=FR;
      n1745.fontSize=10.0;
      n1745.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1745.x=1225.1; n1745.y=2450.1;
      n1745.characters='▼';
      F.appendChild(n1745);}
    {const n1746=figma.createText();
      n1746.fontName=FR;
      n1746.fontSize=10.0;
      n1746.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1746.x=248; n1746.y=1060;
      n1746.characters='Pedido';
      F.appendChild(n1746);}
    {const n1747=figma.createText();
      n1747.fontName=FB;
      n1747.fontSize=13.0;
      n1747.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1747.x=248; n1747.y=1074;
      n1747.characters='#25862';
      F.appendChild(n1747);}
    {const n1748=figma.createText();
      n1748.fontName=FR;
      n1748.fontSize=10.0;
      n1748.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1748.x=327.9; n1748.y=1060;
      n1748.characters='Total';
      F.appendChild(n1748);}
    {const n1749=figma.createText();
      n1749.fontName=FB;
      n1749.fontSize=13.0;
      n1749.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1749.x=327.9; n1749.y=1074;
      n1749.characters='R$ 120,00';
      F.appendChild(n1749);}
    {const n1750=figma.createText();
      n1750.fontName=FR;
      n1750.fontSize=10.0;
      n1750.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1750.x=429.2; n1750.y=1060;
      n1750.characters='Falta pagar';
      F.appendChild(n1750);}
    {const n1751=figma.createText();
      n1751.fontName=FB;
      n1751.fontSize=13.0;
      n1751.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1751.x=429.2; n1751.y=1074;
      n1751.characters='R$ 120,00';
      F.appendChild(n1751);}
    {const n1752=figma.createText();
      n1752.fontName=FR;
      n1752.fontSize=13.0;
      n1752.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1752.x=1018.7; n1752.y=1066;
      n1752.characters='Limpar';
      F.appendChild(n1752);}
    {const n1753=figma.createFrame();
      n1753.x=1083.2; n1753.y=1057.0;
      n1753.resize(Math.max(1,168.8),Math.max(1,34));
      n1753.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1753.clipsContent=false;
      n1753.cornerRadius=4.0;
      F.appendChild(n1753);
      {const n1754=figma.createText();
        n1754.fontName=FB;
        n1754.fontSize=13.0;
        n1754.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1754.x=39; n1754.y=9;
        n1754.characters='Cadastrar Pedido';
        n1753.appendChild(n1754);}
    }
    {const n1755=figma.createText();
      n1755.fontName=FR;
      n1755.fontSize=11.0;
      n1755.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1755.x=30; n1755.y=2564;
      n1755.characters='CEP 00000-000 não encontrado — preencha manualmente';
      F.appendChild(n1755);}
    {const n1756=figma.createText();
      n1756.fontName=FR;
      n1756.fontSize=11.0;
      n1756.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1756.x=1241.8; n1756.y=2565;
      n1756.characters='v4.2';
      F.appendChild(n1756);}
  }
  await Promise.resolve();

  // ── B4: CEP sendo consultado (loading)
  {const F=figma.createFrame();
    F.x=13600; F.y=0;
    F.resize(1280,2584);
    F.name='B4 — CEP sendo consultado (loading)';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n1757=figma.createFrame();
      n1757.x=0.0; n1757.y=0.0;
      n1757.resize(Math.max(1,1280),Math.max(1,38));
      n1757.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1757.clipsContent=false;
      F.appendChild(n1757);
      {const n1758=figma.createFrame();
        n1758.x=14.0; n1758.y=8.0;
        n1758.resize(Math.max(1,22),Math.max(1,22));
        n1758.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1758.clipsContent=false;
        n1758.cornerRadius=5.0;
        n1757.appendChild(n1758);
        {const n1759=figma.createText();
          n1759.fontName=FB;
          n1759.fontSize=10.0;
          n1759.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1759.x=2.5; n1759.y=5;
          n1759.characters='MC';
          n1758.appendChild(n1759);}
      }
      {const n1760=figma.createText();
        n1760.fontName=FR;
        n1760.fontSize=13.0;
        n1760.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1760.x=44; n1760.y=11;
        n1760.characters='Maria Cacau — Gestão de Pedidos';
        n1757.appendChild(n1760);}
    }
    {const n1761=figma.createFrame();
      n1761.x=0.0; n1761.y=38.0;
      n1761.resize(Math.max(1,220),Math.max(1,2518));
      n1761.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1761.clipsContent=false;
      F.appendChild(n1761);
      {const n1762=figma.createFrame();
        n1762.x=14.0; n1762.y=14.0;
        n1762.resize(Math.max(1,38),Math.max(1,38));
        n1762.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1762.clipsContent=false;
        n1762.cornerRadius=8.0;
        n1761.appendChild(n1762);
        {const n1763=figma.createText();
          n1763.fontName=FB;
          n1763.fontSize=14.0;
          n1763.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1763.x=7.5; n1763.y=10.5;
          n1763.characters='MC';
          n1762.appendChild(n1763);}
      }
      {const n1764=figma.createText();
        n1764.fontName=FB;
        n1764.fontSize=13.0;
        n1764.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1764.x=62; n1764.y=18.5;
        n1764.characters='Maria Cacau';
        n1761.appendChild(n1764);}
      {const n1765=figma.createText();
        n1765.fontName=FR;
        n1765.fontSize=10.0;
        n1765.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1765.x=62; n1765.y=35.5;
        n1765.characters='Gestão de Pedidos';
        n1761.appendChild(n1765);}
      {const n1766=figma.createText();
        n1766.fontName=FB;
        n1766.fontSize=10.0;
        n1766.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1766.x=16; n1766.y=85;
        n1766.characters='Pedidos';
        n1761.appendChild(n1766);}
      {const n1767=figma.createFrame();
        n1767.x=8.0; n1767.y=101.0;
        n1767.resize(Math.max(1,204),Math.max(1,34));
        n1767.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n1767.clipsContent=false;
        n1767.cornerRadius=8.0;
        n1761.appendChild(n1767);
        {const n1768=figma.createText();
          n1768.fontName=FB;
          n1768.fontSize=13.0;
          n1768.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1768.x=38; n1768.y=9;
          n1768.characters='Novo Pedido';
          n1767.appendChild(n1768);}
        {const n1769=figma.createFrame();
          n1769.x=160.4; n1769.y=10.5;
          n1769.resize(Math.max(1,33.6),Math.max(1,13));
          n1769.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n1769.clipsContent=false;
          n1769.cornerRadius=8.0;
          n1767.appendChild(n1769);
          {const n1770=figma.createText();
            n1770.fontName=FB;
            n1770.fontSize=9.0;
            n1770.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n1770.x=5; n1770.y=1;
            n1770.characters='Novo';
            n1769.appendChild(n1770);}
        }
      }
      {const n1771=figma.createText();
        n1771.fontName=FB;
        n1771.fontSize=10.0;
        n1771.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1771.x=16; n1771.y=145;
        n1771.characters='Consultas';
        n1761.appendChild(n1771);}
      {const n1772=figma.createText();
        n1772.fontName=FR;
        n1772.fontSize=13.0;
        n1772.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1772.x=46; n1772.y=170;
        n1772.characters='Produtos';
        n1761.appendChild(n1772);}
      {const n1773=figma.createText();
        n1773.fontName=FR;
        n1773.fontSize=13.0;
        n1773.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1773.x=46; n1773.y=206;
        n1773.characters='Entregas';
        n1761.appendChild(n1773);}
      {const n1774=figma.createText();
        n1774.fontName=FR;
        n1774.fontSize=13.0;
        n1774.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1774.x=46; n1774.y=242;
        n1774.characters='Verificar CPF';
        n1761.appendChild(n1774);}
      {const n1775=figma.createText();
        n1775.fontName=FB;
        n1775.fontSize=10.0;
        n1775.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1775.x=16; n1775.y=277;
        n1775.characters='Em breve';
        n1761.appendChild(n1775);}
      {const n1776=figma.createText();
        n1776.fontName=FR;
        n1776.fontSize=13.0;
        n1776.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1776.x=46; n1776.y=302;
        n1776.characters='Frete por CEP';
        n1761.appendChild(n1776);}
      {const n1777=figma.createFrame();
        n1777.x=169.2; n1777.y=303.5;
        n1777.resize(Math.max(1,32.8),Math.max(1,13));
        n1777.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1777.clipsContent=false;
        n1777.cornerRadius=8.0;
        n1777.opacity=0.36;
        n1761.appendChild(n1777);
        {const n1778=figma.createText();
          n1778.fontName=FB;
          n1778.fontSize=9.0;
          n1778.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1778.x=5; n1778.y=1;
          n1778.characters='Logo';
          n1777.appendChild(n1778);}
      }
      {const n1779=figma.createText();
        n1779.fontName=FR;
        n1779.fontSize=13.0;
        n1779.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1779.x=46; n1779.y=338;
        n1779.characters='Nota Fiscal';
        n1761.appendChild(n1779);}
      {const n1780=figma.createFrame();
        n1780.x=169.2; n1780.y=339.5;
        n1780.resize(Math.max(1,32.8),Math.max(1,13));
        n1780.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1780.clipsContent=false;
        n1780.cornerRadius=8.0;
        n1780.opacity=0.36;
        n1761.appendChild(n1780);
        {const n1781=figma.createText();
          n1781.fontName=FB;
          n1781.fontSize=9.0;
          n1781.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1781.x=5; n1781.y=1;
          n1781.characters='Logo';
          n1780.appendChild(n1781);}
      }
    }
    {const n1782=figma.createText();
      n1782.fontName=FB;
      n1782.fontSize=20.0;
      n1782.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1782.x=248; n1782.y=62;
      n1782.characters='Novo Pedido';
      F.appendChild(n1782);}
    {const n1783=figma.createText();
      n1783.fontName=FR;
      n1783.fontSize=13.0;
      n1783.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1783.x=248; n1783.y=88;
      n1783.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n1783);}
    {const n1784=figma.createFrame();
      n1784.x=265.0; n1784.y=133.0;
      n1784.resize(Math.max(1,20),Math.max(1,20));
      n1784.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1784.clipsContent=false;
      n1784.cornerRadius=50.0;
      F.appendChild(n1784);
      {const n1785=figma.createText();
        n1785.fontName=FB;
        n1785.fontSize=9.0;
        n1785.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1785.x=7.6; n1785.y=4.5;
        n1785.characters='1';
        n1784.appendChild(n1785);}
    }
    {const n1786=figma.createText();
      n1786.fontName=FB;
      n1786.fontSize=13.0;
      n1786.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1786.x=295; n1786.y=135;
      n1786.characters='Identificação do Pedido';
      F.appendChild(n1786);}
    {const n1787=figma.createText();
      n1787.fontName=FR;
      n1787.fontSize=11.0;
      n1787.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1787.x=265; n1787.y=178;
      n1787.characters='Nº Pedido';
      F.appendChild(n1787);}
    {const n1788=figma.createText();
      n1788.fontName=FR;
      n1788.fontSize=11.0;
      n1788.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1788.x=319.2; n1788.y=178;
      n1788.characters='*';
      F.appendChild(n1788);}
    {const n1789=figma.createText();
      n1789.fontName=FR;
      n1789.fontSize=13.0;
      n1789.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1789.x=274; n1789.y=201.5;
      n1789.characters='25863';
      F.appendChild(n1789);}
    {const n1790=figma.createText();
      n1790.fontName=FR;
      n1790.fontSize=11.0;
      n1790.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1790.x=757; n1790.y=178;
      n1790.characters='Como Conheceu';
      F.appendChild(n1790);}
    {const n1791=figma.createFrame();
      n1791.x=265.0; n1791.y=260.0;
      n1791.resize(Math.max(1,20),Math.max(1,20));
      n1791.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1791.clipsContent=false;
      n1791.cornerRadius=50.0;
      F.appendChild(n1791);
      {const n1792=figma.createText();
        n1792.fontName=FB;
        n1792.fontSize=9.0;
        n1792.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1792.x=7; n1792.y=4.5;
        n1792.characters='2';
        n1791.appendChild(n1792);}
    }
    {const n1793=figma.createText();
      n1793.fontName=FB;
      n1793.fontSize=13.0;
      n1793.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1793.x=295; n1793.y=262;
      n1793.characters='Comprador';
      F.appendChild(n1793);}
    {const n1794=figma.createText();
      n1794.fontName=FR;
      n1794.fontSize=11.0;
      n1794.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1794.x=265; n1794.y=305;
      n1794.characters='Nome do Comprador';
      F.appendChild(n1794);}
    {const n1795=figma.createText();
      n1795.fontName=FR;
      n1795.fontSize=11.0;
      n1795.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1795.x=378.2; n1795.y=305;
      n1795.characters='*';
      F.appendChild(n1795);}
    {const n1796=figma.createText();
      n1796.fontName=FR;
      n1796.fontSize=13.0;
      n1796.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1796.x=274; n1796.y=328.5;
      n1796.characters='Carlos Lima';
      F.appendChild(n1796);}
    {const n1797=figma.createText();
      n1797.fontName=FR;
      n1797.fontSize=11.0;
      n1797.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1797.x=265; n1797.y=361;
      n1797.characters='Parentesco';
      F.appendChild(n1797);}
    {const n1798=figma.createText();
      n1798.fontName=FR;
      n1798.fontSize=13.0;
      n1798.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1798.x=274; n1798.y=384.5;
      n1798.characters='Pai';
      F.appendChild(n1798);}
    {const n1799=figma.createText();
      n1799.fontName=FR;
      n1799.fontSize=11.0;
      n1799.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1799.x=757; n1799.y=361;
      n1799.characters='Telefone';
      F.appendChild(n1799);}
    {const n1800=figma.createText();
      n1800.fontName=FR;
      n1800.fontSize=11.0;
      n1800.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1800.x=803.6; n1800.y=361;
      n1800.characters='*';
      F.appendChild(n1800);}
    {const n1801=figma.createText();
      n1801.fontName=FR;
      n1801.fontSize=13.0;
      n1801.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1801.x=766; n1801.y=384.5;
      n1801.characters='(11) 91234-5678';
      F.appendChild(n1801);}
    {const n1802=figma.createText();
      n1802.fontName=FR;
      n1802.fontSize=11.0;
      n1802.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1802.x=265; n1802.y=417;
      n1802.characters='CPF';
      F.appendChild(n1802);}
    {const n1803=figma.createText();
      n1803.fontName=FR;
      n1803.fontSize=11.0;
      n1803.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1803.x=757; n1803.y=417;
      n1803.characters='Email';
      F.appendChild(n1803);}
    {const n1804=figma.createFrame();
      n1804.x=265.0; n1804.y=499.0;
      n1804.resize(Math.max(1,20),Math.max(1,20));
      n1804.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1804.clipsContent=false;
      n1804.cornerRadius=50.0;
      F.appendChild(n1804);
      {const n1805=figma.createText();
        n1805.fontName=FB;
        n1805.fontSize=9.0;
        n1805.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1805.x=6.9; n1805.y=4.5;
        n1805.characters='3';
        n1804.appendChild(n1805);}
    }
    {const n1806=figma.createText();
      n1806.fontName=FB;
      n1806.fontSize=13.0;
      n1806.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1806.x=295; n1806.y=501;
      n1806.characters='Presenteado & Evento';
      F.appendChild(n1806);}
    {const n1807=figma.createText();
      n1807.fontName=FR;
      n1807.fontSize=11.0;
      n1807.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1807.x=265; n1807.y=544;
      n1807.characters='Nome do Presenteado';
      F.appendChild(n1807);}
    {const n1808=figma.createText();
      n1808.fontName=FR;
      n1808.fontSize=11.0;
      n1808.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1808.x=265; n1808.y=600;
      n1808.characters='Sexo';
      F.appendChild(n1808);}
    {const n1809=figma.createText();
      n1809.fontName=FR;
      n1809.fontSize=11.0;
      n1809.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1809.x=289.5; n1809.y=624.5;
      n1809.characters='Feminino';
      F.appendChild(n1809);}
    {const n1810=figma.createText();
      n1810.fontName=FR;
      n1810.fontSize=11.0;
      n1810.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1810.x=382.09999999999997; n1810.y=624.5;
      n1810.characters='Masculino';
      F.appendChild(n1810);}
    {const n1811=figma.createText();
      n1811.fontName=FR;
      n1811.fontSize=11.0;
      n1811.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1811.x=482.7; n1811.y=624.5;
      n1811.characters='Gêmeas';
      F.appendChild(n1811);}
    {const n1812=figma.createText();
      n1812.fontName=FR;
      n1812.fontSize=11.0;
      n1812.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1812.x=577.9000000000001; n1812.y=624.5;
      n1812.characters='Gêmeos';
      F.appendChild(n1812);}
    {const n1813=figma.createText();
      n1813.fontName=FR;
      n1813.fontSize=11.0;
      n1813.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1813.x=670.2; n1813.y=624.5;
      n1813.characters='Não sabe';
      F.appendChild(n1813);}
    {const n1814=figma.createText();
      n1814.fontName=FR;
      n1814.fontSize=11.0;
      n1814.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1814.x=757; n1814.y=600;
      n1814.characters='Tipo de Evento';
      F.appendChild(n1814);}
    {const n1815=figma.createText();
      n1815.fontName=FR;
      n1815.fontSize=11.0;
      n1815.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1815.x=265; n1815.y=656;
      n1815.characters='Data do Evento';
      F.appendChild(n1815);}
    {const n1816=figma.createFrame();
      n1816.x=265.0; n1816.y=738.0;
      n1816.resize(Math.max(1,20),Math.max(1,20));
      n1816.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1816.clipsContent=false;
      n1816.cornerRadius=50.0;
      F.appendChild(n1816);
      {const n1817=figma.createText();
        n1817.fontName=FB;
        n1817.fontSize=9.0;
        n1817.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1817.x=6.8; n1817.y=4.5;
        n1817.characters='4';
        n1816.appendChild(n1817);}
    }
    {const n1818=figma.createText();
      n1818.fontName=FB;
      n1818.fontSize=13.0;
      n1818.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1818.x=295; n1818.y=740;
      n1818.characters='Personalização';
      F.appendChild(n1818);}
    {const n1819=figma.createText();
      n1819.fontName=FR;
      n1819.fontSize=11.0;
      n1819.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1819.x=1138; n1819.y=741.5;
      n1819.characters='Arte & embalagem';
      F.appendChild(n1819);}
    {const n1820=figma.createText();
      n1820.fontName=FR;
      n1820.fontSize=11.0;
      n1820.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1820.x=265; n1820.y=783;
      n1820.characters='Nome da Etiqueta';
      F.appendChild(n1820);}
    {const n1821=figma.createText();
      n1821.fontName=FR;
      n1821.fontSize=11.0;
      n1821.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1821.x=757; n1821.y=783;
      n1821.characters='Tema da Etiqueta';
      F.appendChild(n1821);}
    {const n1822=figma.createText();
      n1822.fontName=FR;
      n1822.fontSize=11.0;
      n1822.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1822.x=265; n1822.y=839;
      n1822.characters='Nome na Caixa';
      F.appendChild(n1822);}
    {const n1823=figma.createText();
      n1823.fontName=FR;
      n1823.fontSize=11.0;
      n1823.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1823.x=757; n1823.y=839;
      n1823.characters='Arte / Tecido da Caixa';
      F.appendChild(n1823);}
    {const n1824=figma.createText();
      n1824.fontName=FR;
      n1824.fontSize=11.0;
      n1824.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1824.x=265; n1824.y=895;
      n1824.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n1824);}
    {const n1825=figma.createText();
      n1825.fontName=FR;
      n1825.fontSize=13.0;
      n1825.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1825.x=274; n1825.y=918.5;
      n1825.characters='0';
      F.appendChild(n1825);}
    {const n1826=figma.createFrame();
      n1826.x=265.0; n1826.y=977.0;
      n1826.resize(Math.max(1,20),Math.max(1,20));
      n1826.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1826.clipsContent=false;
      n1826.cornerRadius=50.0;
      F.appendChild(n1826);
      {const n1827=figma.createText();
        n1827.fontName=FB;
        n1827.fontSize=9.0;
        n1827.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1827.x=6.9; n1827.y=4.5;
        n1827.characters='5';
        n1826.appendChild(n1827);}
    }
    {const n1828=figma.createText();
      n1828.fontName=FB;
      n1828.fontSize=13.0;
      n1828.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1828.x=295; n1828.y=979;
      n1828.characters='Produtos';
      F.appendChild(n1828);}
    {const n1829=figma.createText();
      n1829.fontName=FR;
      n1829.fontSize=11.0;
      n1829.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1829.x=1203.9; n1829.y=980.5;
      n1829.characters='1 item';
      F.appendChild(n1829);}
    {const n1830=figma.createText();
      n1830.fontName=FB;
      n1830.fontSize=10.0;
      n1830.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1830.x=265; n1830.y=1022;
      n1830.characters='Produto';
      F.appendChild(n1830);}
    {const n1831=figma.createText();
      n1831.fontName=FB;
      n1831.fontSize=10.0;
      n1831.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1831.x=937; n1831.y=1022;
      n1831.characters='Qtd';
      F.appendChild(n1831);}
    {const n1832=figma.createText();
      n1832.fontName=FB;
      n1832.fontSize=10.0;
      n1832.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1832.x=1007; n1832.y=1022;
      n1832.characters='R$ Unit.';
      F.appendChild(n1832);}
    {const n1833=figma.createText();
      n1833.fontName=FB;
      n1833.fontSize=10.0;
      n1833.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1833.x=1113; n1833.y=1022;
      n1833.characters='Total';
      F.appendChild(n1833);}
    {const n1834=figma.createText();
      n1834.fontName=FR;
      n1834.fontSize=13.0;
      n1834.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1834.x=274; n1834.y=1054.5;
      n1834.characters='Difusor Premium 30ml';
      F.appendChild(n1834);}
    {const n1835=figma.createText();
      n1835.fontName=FR;
      n1835.fontSize=13.0;
      n1835.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1835.x=946; n1835.y=1054.5;
      n1835.characters='1';
      F.appendChild(n1835);}
    {const n1836=figma.createText();
      n1836.fontName=FR;
      n1836.fontSize=13.0;
      n1836.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1836.x=1016; n1836.y=1054.5;
      n1836.characters='45,00';
      F.appendChild(n1836);}
    {const n1837=figma.createText();
      n1837.fontName=FR;
      n1837.fontSize=12.0;
      n1837.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1837.x=1123; n1837.y=1056;
      n1837.characters='R$ 45,00';
      F.appendChild(n1837);}
    {const n1838=figma.createText();
      n1838.fontName=FR;
      n1838.fontSize=12.0;
      n1838.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1838.x=292; n1838.y=1089.5;
      n1838.characters='Adicionar produto';
      F.appendChild(n1838);}
    {const n1839=figma.createText();
      n1839.fontName=FR;
      n1839.fontSize=11.0;
      n1839.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1839.x=265; n1839.y=1110;
      n1839.characters='Outros (descrição livre)';
      F.appendChild(n1839);}
    {const n1840=figma.createText();
      n1840.fontName=FR;
      n1840.fontSize=13.0;
      n1840.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1840.x=274; n1840.y=1133.5;
      n1840.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n1840);}
    {const n1841=figma.createText();
      n1841.fontName=FR;
      n1841.fontSize=11.0;
      n1841.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1841.x=1007.5; n1841.y=1174;
      n1841.characters='Subtotal dos produtos';
      F.appendChild(n1841);}
    {const n1842=figma.createText();
      n1842.fontName=FB;
      n1842.fontSize=13.0;
      n1842.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1842.x=1177.8; n1842.y=1174;
      n1842.characters='R$ 45,00';
      F.appendChild(n1842);}
    {const n1843=figma.createFrame();
      n1843.x=265.0; n1843.y=1224.0;
      n1843.resize(Math.max(1,20),Math.max(1,20));
      n1843.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1843.clipsContent=false;
      n1843.cornerRadius=50.0;
      F.appendChild(n1843);
      {const n1844=figma.createText();
        n1844.fontName=FB;
        n1844.fontSize=9.0;
        n1844.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1844.x=6.8; n1844.y=4.5;
        n1844.characters='6';
        n1843.appendChild(n1844);}
    }
    {const n1845=figma.createText();
      n1845.fontName=FB;
      n1845.fontSize=13.0;
      n1845.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1845.x=295; n1845.y=1226;
      n1845.characters='Financeiro';
      F.appendChild(n1845);}
    {const n1846=figma.createText();
      n1846.fontName=FR;
      n1846.fontSize=11.0;
      n1846.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1846.x=265; n1846.y=1269;
      n1846.characters='Desconto (R$)';
      F.appendChild(n1846);}
    {const n1847=figma.createText();
      n1847.fontName=FR;
      n1847.fontSize=13.0;
      n1847.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1847.x=274; n1847.y=1292.5;
      n1847.characters='0';
      F.appendChild(n1847);}
    {const n1848=figma.createText();
      n1848.fontName=FR;
      n1848.fontSize=11.0;
      n1848.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1848.x=757; n1848.y=1269;
      n1848.characters='Frete (R$)';
      F.appendChild(n1848);}
    {const n1849=figma.createText();
      n1849.fontName=FR;
      n1849.fontSize=13.0;
      n1849.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1849.x=766; n1849.y=1292.5;
      n1849.characters='0,00';
      F.appendChild(n1849);}
    {const n1850=figma.createText();
      n1850.fontName=FR;
      n1850.fontSize=11.0;
      n1850.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1850.x=265; n1850.y=1325;
      n1850.characters='Total do Pedido';
      F.appendChild(n1850);}
    {const n1851=figma.createText();
      n1851.fontName=FB;
      n1851.fontSize=20.0;
      n1851.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1851.x=281; n1851.y=1352.5;
      n1851.characters='R$ 45,00';
      F.appendChild(n1851);}
    {const n1852=figma.createFrame();
      n1852.x=265.0; n1852.y=1421.0;
      n1852.resize(Math.max(1,20),Math.max(1,20));
      n1852.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1852.clipsContent=false;
      n1852.cornerRadius=50.0;
      F.appendChild(n1852);
      {const n1853=figma.createText();
        n1853.fontName=FB;
        n1853.fontSize=9.0;
        n1853.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1853.x=7.2; n1853.y=4.5;
        n1853.characters='7';
        n1852.appendChild(n1853);}
    }
    {const n1854=figma.createText();
      n1854.fontName=FB;
      n1854.fontSize=13.0;
      n1854.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1854.x=295; n1854.y=1423;
      n1854.characters='Pagamento';
      F.appendChild(n1854);}
    {const n1855=figma.createText();
      n1855.fontName=FB;
      n1855.fontSize=10.0;
      n1855.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1855.x=265; n1855.y=1466;
      n1855.characters='Forma';
      F.appendChild(n1855);}
    {const n1856=figma.createText();
      n1856.fontName=FB;
      n1856.fontSize=10.0;
      n1856.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1856.x=411; n1856.y=1466;
      n1856.characters='Data Pgto';
      F.appendChild(n1856);}
    {const n1857=figma.createText();
      n1857.fontName=FB;
      n1857.fontSize=10.0;
      n1857.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1857.x=541; n1857.y=1466;
      n1857.characters='Valor (R$)';
      F.appendChild(n1857);}
    {const n1858=figma.createText();
      n1858.fontName=FB;
      n1858.fontSize=10.0;
      n1858.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1858.x=657; n1858.y=1466;
      n1858.characters='Confirm.';
      F.appendChild(n1858);}
    {const n1859=figma.createText();
      n1859.fontName=FR;
      n1859.fontSize=13.0;
      n1859.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1859.x=274; n1859.y=1498.5;
      n1859.characters='— Forma —';
      F.appendChild(n1859);}
    {const n1860=figma.createText();
      n1860.fontName=FR;
      n1860.fontSize=13.3;
      n1860.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1860.x=699; n1860.y=1498;
      n1860.characters='on';
      F.appendChild(n1860);}
    {const n1861=figma.createText();
      n1861.fontName=FR;
      n1861.fontSize=12.0;
      n1861.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1861.x=292; n1861.y=1533.5;
      n1861.characters='Adicionar parcela';
      F.appendChild(n1861);}
    {const n1862=figma.createText();
      n1862.fontName=FR;
      n1862.fontSize=12.0;
      n1862.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1862.x=280; n1862.y=1579;
      n1862.characters='Total do pedido';
      F.appendChild(n1862);}
    {const n1863=figma.createText();
      n1863.fontName=FR;
      n1863.fontSize=12.0;
      n1863.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1863.x=1167.2; n1863.y=1580.5;
      n1863.characters='R$ 45,00';
      F.appendChild(n1863);}
    {const n1864=figma.createText();
      n1864.fontName=FR;
      n1864.fontSize=12.0;
      n1864.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1864.x=280; n1864.y=1599;
      n1864.characters='Total pago';
      F.appendChild(n1864);}
    {const n1865=figma.createText();
      n1865.fontName=FR;
      n1865.fontSize=12.0;
      n1865.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1865.x=1173.8; n1865.y=1600.5;
      n1865.characters='R$ 0,00';
      F.appendChild(n1865);}
    {const n1866=figma.createText();
      n1866.fontName=FB;
      n1866.fontSize=12.0;
      n1866.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1866.x=280; n1866.y=1619.5;
      n1866.characters='Falta pagar';
      F.appendChild(n1866);}
    {const n1867=figma.createText();
      n1867.fontName=FB;
      n1867.fontSize=12.0;
      n1867.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1867.x=1159.2; n1867.y=1621;
      n1867.characters='R$ 45,00';
      F.appendChild(n1867);}
    {const n1868=figma.createText();
      n1868.fontName=FR;
      n1868.fontSize=13.3;
      n1868.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1868.x=289; n1868.y=1652.5;
      n1868.characters='on';
      F.appendChild(n1868);}
    {const n1869=figma.createText();
      n1869.fontName=FR;
      n1869.fontSize=12.0;
      n1869.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1869.x=300; n1869.y=1652;
      n1869.characters='Vai pagar na retirada';
      F.appendChild(n1869);}
    {const n1870=figma.createFrame();
      n1870.x=265.0; n1870.y=1716.0;
      n1870.resize(Math.max(1,20),Math.max(1,20));
      n1870.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1870.clipsContent=false;
      n1870.cornerRadius=50.0;
      F.appendChild(n1870);
      {const n1871=figma.createText();
        n1871.fontName=FB;
        n1871.fontSize=9.0;
        n1871.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1871.x=6.8; n1871.y=4.5;
        n1871.characters='8';
        n1870.appendChild(n1871);}
    }
    {const n1872=figma.createText();
      n1872.fontName=FB;
      n1872.fontSize=13.0;
      n1872.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1872.x=295; n1872.y=1718;
      n1872.characters='Entrega';
      F.appendChild(n1872);}
    {const n1873=figma.createText();
      n1873.fontName=FR;
      n1873.fontSize=11.0;
      n1873.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1873.x=265; n1873.y=1761;
      n1873.characters='Data de Entrega';
      F.appendChild(n1873);}
    {const n1874=figma.createText();
      n1874.fontName=FR;
      n1874.fontSize=11.0;
      n1874.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1874.x=352.7; n1874.y=1761;
      n1874.characters='*';
      F.appendChild(n1874);}
    {const n1875=figma.createText();
      n1875.fontName=FR;
      n1875.fontSize=11.0;
      n1875.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1875.x=757; n1875.y=1761;
      n1875.characters='Modalidade';
      F.appendChild(n1875);}
    {const n1876=figma.createText();
      n1876.fontName=FR;
      n1876.fontSize=11.0;
      n1876.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1876.x=820.4; n1876.y=1761;
      n1876.characters='*';
      F.appendChild(n1876);}
    {const n1877=figma.createText();
      n1877.fontName=FR;
      n1877.fontSize=13.0;
      n1877.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1877.x=766; n1877.y=1784.5;
      n1877.characters='SEDEX PLP';
      F.appendChild(n1877);}
    {const n1878=figma.createText();
      n1878.fontName=FB;
      n1878.fontSize=10.0;
      n1878.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1878.x=265; n1878.y=1822.5;
      n1878.characters='Destinatário';
      F.appendChild(n1878);}
    {const n1879=figma.createText();
      n1879.fontName=FR;
      n1879.fontSize=13.3;
      n1879.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n1879.x=1083.7; n1879.y=1821.5;
      n1879.characters='on';
      F.appendChild(n1879);}
    {const n1880=figma.createText();
      n1880.fontName=FR;
      n1880.fontSize=12.0;
      n1880.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1880.x=1093.7; n1880.y=1821;
      n1880.characters='Mesmo que o comprador';
      F.appendChild(n1880);}
    {const n1881=figma.createText();
      n1881.fontName=FR;
      n1881.fontSize=11.0;
      n1881.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1881.x=265; n1881.y=1855;
      n1881.characters='Nome do Destinatário';
      F.appendChild(n1881);}
    {const n1882=figma.createText();
      n1882.fontName=FR;
      n1882.fontSize=11.0;
      n1882.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1882.x=383.5; n1882.y=1855;
      n1882.characters='*';
      F.appendChild(n1882);}
    {const n1883=figma.createText();
      n1883.fontName=FR;
      n1883.fontSize=13.0;
      n1883.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1883.x=274; n1883.y=1878.5;
      n1883.characters='Carlos Lima';
      F.appendChild(n1883);}
    {const n1884=figma.createText();
      n1884.fontName=FR;
      n1884.fontSize=11.0;
      n1884.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1884.x=265; n1884.y=1911;
      n1884.characters='Telefone';
      F.appendChild(n1884);}
    {const n1885=figma.createText();
      n1885.fontName=FR;
      n1885.fontSize=13.0;
      n1885.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1885.x=274; n1885.y=1934.5;
      n1885.characters='(11) 91234-5678';
      F.appendChild(n1885);}
    {const n1886=figma.createText();
      n1886.fontName=FR;
      n1886.fontSize=11.0;
      n1886.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1886.x=757; n1886.y=1911;
      n1886.characters='CPF';
      F.appendChild(n1886);}
    {const n1887=figma.createText();
      n1887.fontName=FR;
      n1887.fontSize=11.0;
      n1887.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1887.x=265; n1887.y=1967;
      n1887.characters='Email';
      F.appendChild(n1887);}
    {const n1888=figma.createText();
      n1888.fontName=FB;
      n1888.fontSize=10.0;
      n1888.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1888.x=265; n1888.y=2027;
      n1888.characters='Endereço';
      F.appendChild(n1888);}
    {const n1889=figma.createText();
      n1889.fontName=FR;
      n1889.fontSize=11.0;
      n1889.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1889.x=265; n1889.y=2058;
      n1889.characters='CEP';
      F.appendChild(n1889);}
    {const n1890=figma.createText();
      n1890.fontName=FR;
      n1890.fontSize=13.0;
      n1890.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1890.x=274; n1890.y=2081.5;
      n1890.characters='04743-030';
      F.appendChild(n1890);}
    {const n1891=figma.createText();
      n1891.fontName=FR;
      n1891.fontSize=10.0;
      n1891.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1891.x=265; n1891.y=2109;
      n1891.characters='Buscando endereço…';
      F.appendChild(n1891);}
    {const n1892=figma.createText();
      n1892.fontName=FR;
      n1892.fontSize=11.0;
      n1892.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1892.x=265; n1892.y=2131;
      n1892.characters='Logradouro';
      F.appendChild(n1892);}
    {const n1893=figma.createText();
      n1893.fontName=FR;
      n1893.fontSize=11.0;
      n1893.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1893.x=593; n1893.y=2131;
      n1893.characters='Número';
      F.appendChild(n1893);}
    {const n1894=figma.createText();
      n1894.fontName=FR;
      n1894.fontSize=11.0;
      n1894.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1894.x=265; n1894.y=2187;
      n1894.characters='Complemento';
      F.appendChild(n1894);}
    {const n1895=figma.createText();
      n1895.fontName=FR;
      n1895.fontSize=13.0;
      n1895.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1895.x=274; n1895.y=2210.5;
      n1895.characters='Apto, Bloco… (opcional)';
      F.appendChild(n1895);}
    {const n1896=figma.createText();
      n1896.fontName=FR;
      n1896.fontSize=11.0;
      n1896.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1896.x=511; n1896.y=2187;
      n1896.characters='Bairro';
      F.appendChild(n1896);}
    {const n1897=figma.createText();
      n1897.fontName=FR;
      n1897.fontSize=11.0;
      n1897.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1897.x=757; n1897.y=2187;
      n1897.characters='Cidade';
      F.appendChild(n1897);}
    {const n1898=figma.createText();
      n1898.fontName=FR;
      n1898.fontSize=11.0;
      n1898.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1898.x=265; n1898.y=2243;
      n1898.characters='UF';
      F.appendChild(n1898);}
    {const n1899=figma.createText();
      n1899.fontName=FR;
      n1899.fontSize=13.0;
      n1899.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n1899.x=274; n1899.y=2266.5;
      n1899.characters='SP';
      F.appendChild(n1899);}
    {const n1900=figma.createText();
      n1900.fontName=FB;
      n1900.fontSize=10.0;
      n1900.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1900.x=265; n1900.y=2303;
      n1900.characters='Observações';
      F.appendChild(n1900);}
    {const n1901=figma.createText();
      n1901.fontName=FR;
      n1901.fontSize=11.0;
      n1901.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1901.x=265; n1901.y=2334;
      n1901.characters='Obs. Fábrica';
      F.appendChild(n1901);}
    {const n1902=figma.createText();
      n1902.fontName=FR;
      n1902.fontSize=11.0;
      n1902.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1902.x=757; n1902.y=2334;
      n1902.characters='Info Motoboy';
      F.appendChild(n1902);}
    {const n1903=figma.createText();
      n1903.fontName=FB;
      n1903.fontSize=9.0;
      n1903.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n1903.x=271.8; n1903.y=2448.5;
      n1903.characters='9';
      F.appendChild(n1903);}
    {const n1904=figma.createText();
      n1904.fontName=FR;
      n1904.fontSize=12.0;
      n1904.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1904.x=295; n1904.y=2446.5;
      n1904.characters='Controle Interno';
      F.appendChild(n1904);}
    {const n1905=figma.createText();
      n1905.fontName=FR;
      n1905.fontSize=11.0;
      n1905.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1905.x=1088.2; n1905.y=2447.5;
      n1905.characters='Uso interno da operação';
      F.appendChild(n1905);}
    {const n1906=figma.createText();
      n1906.fontName=FR;
      n1906.fontSize=10.0;
      n1906.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1906.x=1225.1; n1906.y=2450.1;
      n1906.characters='▼';
      F.appendChild(n1906);}
    {const n1907=figma.createText();
      n1907.fontName=FR;
      n1907.fontSize=10.0;
      n1907.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1907.x=248; n1907.y=1060;
      n1907.characters='Pedido';
      F.appendChild(n1907);}
    {const n1908=figma.createText();
      n1908.fontName=FB;
      n1908.fontSize=13.0;
      n1908.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1908.x=248; n1908.y=1074;
      n1908.characters='#25863';
      F.appendChild(n1908);}
    {const n1909=figma.createText();
      n1909.fontName=FR;
      n1909.fontSize=10.0;
      n1909.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1909.x=327.9; n1909.y=1060;
      n1909.characters='Total';
      F.appendChild(n1909);}
    {const n1910=figma.createText();
      n1910.fontName=FB;
      n1910.fontSize=13.0;
      n1910.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1910.x=327.9; n1910.y=1074;
      n1910.characters='R$ 45,00';
      F.appendChild(n1910);}
    {const n1911=figma.createText();
      n1911.fontName=FR;
      n1911.fontSize=10.0;
      n1911.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1911.x=422.1; n1911.y=1060;
      n1911.characters='Falta pagar';
      F.appendChild(n1911);}
    {const n1912=figma.createText();
      n1912.fontName=FB;
      n1912.fontSize=13.0;
      n1912.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1912.x=422.1; n1912.y=1074;
      n1912.characters='R$ 45,00';
      F.appendChild(n1912);}
    {const n1913=figma.createText();
      n1913.fontName=FR;
      n1913.fontSize=13.0;
      n1913.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1913.x=1018.7; n1913.y=1066;
      n1913.characters='Limpar';
      F.appendChild(n1913);}
    {const n1914=figma.createFrame();
      n1914.x=1083.2; n1914.y=1057.0;
      n1914.resize(Math.max(1,168.8),Math.max(1,34));
      n1914.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1914.clipsContent=false;
      n1914.cornerRadius=4.0;
      F.appendChild(n1914);
      {const n1915=figma.createText();
        n1915.fontName=FB;
        n1915.fontSize=13.0;
        n1915.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1915.x=39; n1915.y=9;
        n1915.characters='Cadastrar Pedido';
        n1914.appendChild(n1915);}
    }
    {const n1916=figma.createText();
      n1916.fontName=FR;
      n1916.fontSize=11.0;
      n1916.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1916.x=30; n1916.y=2564;
      n1916.characters='Consultando CEP 04743-030…';
      F.appendChild(n1916);}
    {const n1917=figma.createText();
      n1917.fontName=FR;
      n1917.fontSize=11.0;
      n1917.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1917.x=1241.8; n1917.y=2565;
      n1917.characters='v4.2';
      F.appendChild(n1917);}
  }
  await Promise.resolve();

  // ── B5: Cadastrando — loading geral
  {const F=figma.createFrame();
    F.x=14960; F.y=0;
    F.resize(1280,2567);
    F.name='B5 — Cadastrando — loading geral';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n1918=figma.createFrame();
      n1918.x=0.0; n1918.y=0.0;
      n1918.resize(Math.max(1,1280),Math.max(1,38));
      n1918.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1918.clipsContent=false;
      F.appendChild(n1918);
      {const n1919=figma.createFrame();
        n1919.x=14.0; n1919.y=8.0;
        n1919.resize(Math.max(1,22),Math.max(1,22));
        n1919.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1919.clipsContent=false;
        n1919.cornerRadius=5.0;
        n1918.appendChild(n1919);
        {const n1920=figma.createText();
          n1920.fontName=FB;
          n1920.fontSize=10.0;
          n1920.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1920.x=2.5; n1920.y=5;
          n1920.characters='MC';
          n1919.appendChild(n1920);}
      }
      {const n1921=figma.createText();
        n1921.fontName=FR;
        n1921.fontSize=13.0;
        n1921.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1921.x=44; n1921.y=11;
        n1921.characters='Maria Cacau — Gestão de Pedidos';
        n1918.appendChild(n1921);}
    }
    {const n1922=figma.createFrame();
      n1922.x=0.0; n1922.y=38.0;
      n1922.resize(Math.max(1,220),Math.max(1,2501));
      n1922.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1922.clipsContent=false;
      F.appendChild(n1922);
      {const n1923=figma.createFrame();
        n1923.x=14.0; n1923.y=14.0;
        n1923.resize(Math.max(1,38),Math.max(1,38));
        n1923.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n1923.clipsContent=false;
        n1923.cornerRadius=8.0;
        n1922.appendChild(n1923);
        {const n1924=figma.createText();
          n1924.fontName=FB;
          n1924.fontSize=14.0;
          n1924.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n1924.x=7.5; n1924.y=10.5;
          n1924.characters='MC';
          n1923.appendChild(n1924);}
      }
      {const n1925=figma.createText();
        n1925.fontName=FB;
        n1925.fontSize=13.0;
        n1925.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1925.x=62; n1925.y=18.5;
        n1925.characters='Maria Cacau';
        n1922.appendChild(n1925);}
      {const n1926=figma.createText();
        n1926.fontName=FR;
        n1926.fontSize=10.0;
        n1926.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1926.x=62; n1926.y=35.5;
        n1926.characters='Gestão de Pedidos';
        n1922.appendChild(n1926);}
      {const n1927=figma.createText();
        n1927.fontName=FB;
        n1927.fontSize=10.0;
        n1927.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1927.x=16; n1927.y=85;
        n1927.characters='Pedidos';
        n1922.appendChild(n1927);}
      {const n1928=figma.createFrame();
        n1928.x=8.0; n1928.y=101.0;
        n1928.resize(Math.max(1,204),Math.max(1,34));
        n1928.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n1928.clipsContent=false;
        n1928.cornerRadius=8.0;
        n1922.appendChild(n1928);
        {const n1929=figma.createText();
          n1929.fontName=FB;
          n1929.fontSize=13.0;
          n1929.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1929.x=38; n1929.y=9;
          n1929.characters='Novo Pedido';
          n1928.appendChild(n1929);}
        {const n1930=figma.createFrame();
          n1930.x=160.4; n1930.y=10.5;
          n1930.resize(Math.max(1,33.6),Math.max(1,13));
          n1930.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n1930.clipsContent=false;
          n1930.cornerRadius=8.0;
          n1928.appendChild(n1930);
          {const n1931=figma.createText();
            n1931.fontName=FB;
            n1931.fontSize=9.0;
            n1931.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n1931.x=5; n1931.y=1;
            n1931.characters='Novo';
            n1930.appendChild(n1931);}
        }
      }
      {const n1932=figma.createText();
        n1932.fontName=FB;
        n1932.fontSize=10.0;
        n1932.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1932.x=16; n1932.y=145;
        n1932.characters='Consultas';
        n1922.appendChild(n1932);}
      {const n1933=figma.createText();
        n1933.fontName=FR;
        n1933.fontSize=13.0;
        n1933.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1933.x=46; n1933.y=170;
        n1933.characters='Produtos';
        n1922.appendChild(n1933);}
      {const n1934=figma.createText();
        n1934.fontName=FR;
        n1934.fontSize=13.0;
        n1934.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1934.x=46; n1934.y=206;
        n1934.characters='Entregas';
        n1922.appendChild(n1934);}
      {const n1935=figma.createText();
        n1935.fontName=FR;
        n1935.fontSize=13.0;
        n1935.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1935.x=46; n1935.y=242;
        n1935.characters='Verificar CPF';
        n1922.appendChild(n1935);}
      {const n1936=figma.createText();
        n1936.fontName=FB;
        n1936.fontSize=10.0;
        n1936.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1936.x=16; n1936.y=277;
        n1936.characters='Em breve';
        n1922.appendChild(n1936);}
      {const n1937=figma.createText();
        n1937.fontName=FR;
        n1937.fontSize=13.0;
        n1937.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1937.x=46; n1937.y=302;
        n1937.characters='Frete por CEP';
        n1922.appendChild(n1937);}
      {const n1938=figma.createFrame();
        n1938.x=169.2; n1938.y=303.5;
        n1938.resize(Math.max(1,32.8),Math.max(1,13));
        n1938.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1938.clipsContent=false;
        n1938.cornerRadius=8.0;
        n1938.opacity=0.36;
        n1922.appendChild(n1938);
        {const n1939=figma.createText();
          n1939.fontName=FB;
          n1939.fontSize=9.0;
          n1939.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1939.x=5; n1939.y=1;
          n1939.characters='Logo';
          n1938.appendChild(n1939);}
      }
      {const n1940=figma.createText();
        n1940.fontName=FR;
        n1940.fontSize=13.0;
        n1940.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n1940.x=46; n1940.y=338;
        n1940.characters='Nota Fiscal';
        n1922.appendChild(n1940);}
      {const n1941=figma.createFrame();
        n1941.x=169.2; n1941.y=339.5;
        n1941.resize(Math.max(1,32.8),Math.max(1,13));
        n1941.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n1941.clipsContent=false;
        n1941.cornerRadius=8.0;
        n1941.opacity=0.36;
        n1922.appendChild(n1941);
        {const n1942=figma.createText();
          n1942.fontName=FB;
          n1942.fontSize=9.0;
          n1942.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n1942.x=5; n1942.y=1;
          n1942.characters='Logo';
          n1941.appendChild(n1942);}
      }
    }
    {const n1943=figma.createFrame();
      n1943.x=220.0; n1943.y=38.0;
      n1943.resize(Math.max(1,1060),Math.max(1,2501));
      n1943.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.620}];
      n1943.clipsContent=false;
      F.appendChild(n1943);
    }
    {const n1944=figma.createText();
      n1944.fontName=FB;
      n1944.fontSize=20.0;
      n1944.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1944.x=248; n1944.y=62;
      n1944.characters='Novo Pedido';
      F.appendChild(n1944);}
    {const n1945=figma.createText();
      n1945.fontName=FR;
      n1945.fontSize=13.0;
      n1945.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1945.x=248; n1945.y=88;
      n1945.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n1945);}
    {const n1946=figma.createFrame();
      n1946.x=265.0; n1946.y=133.0;
      n1946.resize(Math.max(1,20),Math.max(1,20));
      n1946.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1946.clipsContent=false;
      n1946.cornerRadius=50.0;
      F.appendChild(n1946);
      {const n1947=figma.createText();
        n1947.fontName=FB;
        n1947.fontSize=9.0;
        n1947.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1947.x=7.6; n1947.y=4.5;
        n1947.characters='1';
        n1946.appendChild(n1947);}
    }
    {const n1948=figma.createText();
      n1948.fontName=FB;
      n1948.fontSize=13.0;
      n1948.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1948.x=295; n1948.y=135;
      n1948.characters='Identificação do Pedido';
      F.appendChild(n1948);}
    {const n1949=figma.createText();
      n1949.fontName=FR;
      n1949.fontSize=11.0;
      n1949.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1949.x=265; n1949.y=178;
      n1949.characters='Nº Pedido';
      F.appendChild(n1949);}
    {const n1950=figma.createText();
      n1950.fontName=FR;
      n1950.fontSize=11.0;
      n1950.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1950.x=319.2; n1950.y=178;
      n1950.characters='*';
      F.appendChild(n1950);}
    {const n1951=figma.createText();
      n1951.fontName=FR;
      n1951.fontSize=13.0;
      n1951.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1951.x=274; n1951.y=201.5;
      n1951.characters='25864';
      F.appendChild(n1951);}
    {const n1952=figma.createText();
      n1952.fontName=FR;
      n1952.fontSize=11.0;
      n1952.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1952.x=757; n1952.y=178;
      n1952.characters='Como Conheceu';
      F.appendChild(n1952);}
    {const n1953=figma.createText();
      n1953.fontName=FR;
      n1953.fontSize=13.0;
      n1953.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1953.x=766; n1953.y=201.5;
      n1953.characters='Cliente';
      F.appendChild(n1953);}
    {const n1954=figma.createFrame();
      n1954.x=265.0; n1954.y=260.0;
      n1954.resize(Math.max(1,20),Math.max(1,20));
      n1954.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1954.clipsContent=false;
      n1954.cornerRadius=50.0;
      F.appendChild(n1954);
      {const n1955=figma.createText();
        n1955.fontName=FB;
        n1955.fontSize=9.0;
        n1955.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1955.x=7; n1955.y=4.5;
        n1955.characters='2';
        n1954.appendChild(n1955);}
    }
    {const n1956=figma.createText();
      n1956.fontName=FB;
      n1956.fontSize=13.0;
      n1956.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1956.x=295; n1956.y=262;
      n1956.characters='Comprador';
      F.appendChild(n1956);}
    {const n1957=figma.createText();
      n1957.fontName=FR;
      n1957.fontSize=11.0;
      n1957.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1957.x=265; n1957.y=305;
      n1957.characters='Nome do Comprador';
      F.appendChild(n1957);}
    {const n1958=figma.createText();
      n1958.fontName=FR;
      n1958.fontSize=11.0;
      n1958.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1958.x=378.2; n1958.y=305;
      n1958.characters='*';
      F.appendChild(n1958);}
    {const n1959=figma.createText();
      n1959.fontName=FR;
      n1959.fontSize=13.0;
      n1959.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1959.x=274; n1959.y=328.5;
      n1959.characters='Maria Fernanda';
      F.appendChild(n1959);}
    {const n1960=figma.createText();
      n1960.fontName=FR;
      n1960.fontSize=11.0;
      n1960.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1960.x=265; n1960.y=361;
      n1960.characters='Parentesco';
      F.appendChild(n1960);}
    {const n1961=figma.createText();
      n1961.fontName=FR;
      n1961.fontSize=13.0;
      n1961.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1961.x=274; n1961.y=384.5;
      n1961.characters='Mãe';
      F.appendChild(n1961);}
    {const n1962=figma.createText();
      n1962.fontName=FR;
      n1962.fontSize=11.0;
      n1962.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1962.x=757; n1962.y=361;
      n1962.characters='Telefone';
      F.appendChild(n1962);}
    {const n1963=figma.createText();
      n1963.fontName=FR;
      n1963.fontSize=11.0;
      n1963.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1963.x=803.6; n1963.y=361;
      n1963.characters='*';
      F.appendChild(n1963);}
    {const n1964=figma.createText();
      n1964.fontName=FR;
      n1964.fontSize=13.0;
      n1964.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1964.x=766; n1964.y=384.5;
      n1964.characters='(11) 99000-1122';
      F.appendChild(n1964);}
    {const n1965=figma.createText();
      n1965.fontName=FR;
      n1965.fontSize=11.0;
      n1965.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1965.x=265; n1965.y=417;
      n1965.characters='CPF';
      F.appendChild(n1965);}
    {const n1966=figma.createText();
      n1966.fontName=FR;
      n1966.fontSize=11.0;
      n1966.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1966.x=757; n1966.y=417;
      n1966.characters='Email';
      F.appendChild(n1966);}
    {const n1967=figma.createFrame();
      n1967.x=265.0; n1967.y=499.0;
      n1967.resize(Math.max(1,20),Math.max(1,20));
      n1967.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1967.clipsContent=false;
      n1967.cornerRadius=50.0;
      F.appendChild(n1967);
      {const n1968=figma.createText();
        n1968.fontName=FB;
        n1968.fontSize=9.0;
        n1968.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1968.x=6.9; n1968.y=4.5;
        n1968.characters='3';
        n1967.appendChild(n1968);}
    }
    {const n1969=figma.createText();
      n1969.fontName=FB;
      n1969.fontSize=13.0;
      n1969.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1969.x=295; n1969.y=501;
      n1969.characters='Presenteado & Evento';
      F.appendChild(n1969);}
    {const n1970=figma.createText();
      n1970.fontName=FR;
      n1970.fontSize=11.0;
      n1970.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1970.x=265; n1970.y=544;
      n1970.characters='Nome do Presenteado';
      F.appendChild(n1970);}
    {const n1971=figma.createText();
      n1971.fontName=FR;
      n1971.fontSize=13.0;
      n1971.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1971.x=274; n1971.y=567.5;
      n1971.characters='Beatriz';
      F.appendChild(n1971);}
    {const n1972=figma.createText();
      n1972.fontName=FR;
      n1972.fontSize=11.0;
      n1972.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1972.x=265; n1972.y=600;
      n1972.characters='Sexo';
      F.appendChild(n1972);}
    {const n1973=figma.createFrame();
      n1973.x=265.0; n1973.y=616.0;
      n1973.resize(Math.max(1,96.4),Math.max(1,30));
      n1973.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1973.clipsContent=false;
      n1973.strokes=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1973.strokeWeight=1.0; n1973.strokeAlign='INSIDE';
      n1973.topLeftRadius=4.0;n1973.topRightRadius=0.0;n1973.bottomLeftRadius=4.0;n1973.bottomRightRadius=0.0;
      F.appendChild(n1973);
      {const n1974=figma.createText();
        n1974.fontName=FR;
        n1974.fontSize=11.0;
        n1974.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1974.x=24.5; n1974.y=8.5;
        n1974.characters='Feminino';
        n1973.appendChild(n1974);}
    }
    {const n1975=figma.createText();
      n1975.fontName=FR;
      n1975.fontSize=11.0;
      n1975.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1975.x=382.09999999999997; n1975.y=624.5;
      n1975.characters='Masculino';
      F.appendChild(n1975);}
    {const n1976=figma.createText();
      n1976.fontName=FR;
      n1976.fontSize=11.0;
      n1976.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1976.x=482.7; n1976.y=624.5;
      n1976.characters='Gêmeas';
      F.appendChild(n1976);}
    {const n1977=figma.createText();
      n1977.fontName=FR;
      n1977.fontSize=11.0;
      n1977.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1977.x=577.9000000000001; n1977.y=624.5;
      n1977.characters='Gêmeos';
      F.appendChild(n1977);}
    {const n1978=figma.createText();
      n1978.fontName=FR;
      n1978.fontSize=11.0;
      n1978.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1978.x=670.2; n1978.y=624.5;
      n1978.characters='Não sabe';
      F.appendChild(n1978);}
    {const n1979=figma.createText();
      n1979.fontName=FR;
      n1979.fontSize=11.0;
      n1979.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1979.x=757; n1979.y=600;
      n1979.characters='Tipo de Evento';
      F.appendChild(n1979);}
    {const n1980=figma.createText();
      n1980.fontName=FR;
      n1980.fontSize=13.0;
      n1980.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1980.x=766; n1980.y=623.5;
      n1980.characters='Aniversário';
      F.appendChild(n1980);}
    {const n1981=figma.createText();
      n1981.fontName=FR;
      n1981.fontSize=11.0;
      n1981.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1981.x=265; n1981.y=656;
      n1981.characters='Data do Evento';
      F.appendChild(n1981);}
    {const n1982=figma.createText();
      n1982.fontName=FR;
      n1982.fontSize=13.0;
      n1982.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1982.x=274; n1982.y=679.5;
      n1982.characters='2026-02-14';
      F.appendChild(n1982);}
    {const n1983=figma.createFrame();
      n1983.x=265.0; n1983.y=738.0;
      n1983.resize(Math.max(1,20),Math.max(1,20));
      n1983.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1983.clipsContent=false;
      n1983.cornerRadius=50.0;
      F.appendChild(n1983);
      {const n1984=figma.createText();
        n1984.fontName=FB;
        n1984.fontSize=9.0;
        n1984.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1984.x=6.8; n1984.y=4.5;
        n1984.characters='4';
        n1983.appendChild(n1984);}
    }
    {const n1985=figma.createText();
      n1985.fontName=FB;
      n1985.fontSize=13.0;
      n1985.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1985.x=295; n1985.y=740;
      n1985.characters='Personalização';
      F.appendChild(n1985);}
    {const n1986=figma.createText();
      n1986.fontName=FR;
      n1986.fontSize=11.0;
      n1986.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1986.x=1138; n1986.y=741.5;
      n1986.characters='Arte & embalagem';
      F.appendChild(n1986);}
    {const n1987=figma.createText();
      n1987.fontName=FR;
      n1987.fontSize=11.0;
      n1987.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1987.x=265; n1987.y=783;
      n1987.characters='Nome da Etiqueta';
      F.appendChild(n1987);}
    {const n1988=figma.createText();
      n1988.fontName=FR;
      n1988.fontSize=13.0;
      n1988.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1988.x=274; n1988.y=806.5;
      n1988.characters='Beatriz';
      F.appendChild(n1988);}
    {const n1989=figma.createText();
      n1989.fontName=FR;
      n1989.fontSize=11.0;
      n1989.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1989.x=757; n1989.y=783;
      n1989.characters='Tema da Etiqueta';
      F.appendChild(n1989);}
    {const n1990=figma.createText();
      n1990.fontName=FR;
      n1990.fontSize=13.0;
      n1990.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1990.x=766; n1990.y=806.5;
      n1990.characters='floral';
      F.appendChild(n1990);}
    {const n1991=figma.createText();
      n1991.fontName=FR;
      n1991.fontSize=11.0;
      n1991.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1991.x=265; n1991.y=839;
      n1991.characters='Nome na Caixa';
      F.appendChild(n1991);}
    {const n1992=figma.createText();
      n1992.fontName=FR;
      n1992.fontSize=13.0;
      n1992.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1992.x=274; n1992.y=862.5;
      n1992.characters='Beatriz';
      F.appendChild(n1992);}
    {const n1993=figma.createText();
      n1993.fontName=FR;
      n1993.fontSize=11.0;
      n1993.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1993.x=757; n1993.y=839;
      n1993.characters='Arte / Tecido da Caixa';
      F.appendChild(n1993);}
    {const n1994=figma.createText();
      n1994.fontName=FR;
      n1994.fontSize=13.0;
      n1994.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1994.x=766; n1994.y=862.5;
      n1994.characters='rosas';
      F.appendChild(n1994);}
    {const n1995=figma.createText();
      n1995.fontName=FR;
      n1995.fontSize=11.0;
      n1995.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1995.x=265; n1995.y=895;
      n1995.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n1995);}
    {const n1996=figma.createText();
      n1996.fontName=FR;
      n1996.fontSize=13.0;
      n1996.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1996.x=274; n1996.y=918.5;
      n1996.characters='0';
      F.appendChild(n1996);}
    {const n1997=figma.createFrame();
      n1997.x=265.0; n1997.y=977.0;
      n1997.resize(Math.max(1,20),Math.max(1,20));
      n1997.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n1997.clipsContent=false;
      n1997.cornerRadius=50.0;
      F.appendChild(n1997);
      {const n1998=figma.createText();
        n1998.fontName=FB;
        n1998.fontSize=9.0;
        n1998.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n1998.x=6.9; n1998.y=4.5;
        n1998.characters='5';
        n1997.appendChild(n1998);}
    }
    {const n1999=figma.createText();
      n1999.fontName=FB;
      n1999.fontSize=13.0;
      n1999.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n1999.x=295; n1999.y=979;
      n1999.characters='Produtos';
      F.appendChild(n1999);}
    {const n2000=figma.createText();
      n2000.fontName=FR;
      n2000.fontSize=11.0;
      n2000.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2000.x=1203.9; n2000.y=980.5;
      n2000.characters='1 item';
      F.appendChild(n2000);}
    {const n2001=figma.createText();
      n2001.fontName=FB;
      n2001.fontSize=10.0;
      n2001.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2001.x=265; n2001.y=1022;
      n2001.characters='Produto';
      F.appendChild(n2001);}
    {const n2002=figma.createText();
      n2002.fontName=FB;
      n2002.fontSize=10.0;
      n2002.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2002.x=937; n2002.y=1022;
      n2002.characters='Qtd';
      F.appendChild(n2002);}
    {const n2003=figma.createText();
      n2003.fontName=FB;
      n2003.fontSize=10.0;
      n2003.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2003.x=1007; n2003.y=1022;
      n2003.characters='R$ Unit.';
      F.appendChild(n2003);}
    {const n2004=figma.createText();
      n2004.fontName=FB;
      n2004.fontSize=10.0;
      n2004.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2004.x=1113; n2004.y=1022;
      n2004.characters='Total';
      F.appendChild(n2004);}
    {const n2005=figma.createText();
      n2005.fontName=FR;
      n2005.fontSize=13.0;
      n2005.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2005.x=274; n2005.y=1054.5;
      n2005.characters='Kit Aniversário completo';
      F.appendChild(n2005);}
    {const n2006=figma.createText();
      n2006.fontName=FR;
      n2006.fontSize=13.0;
      n2006.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2006.x=946; n2006.y=1054.5;
      n2006.characters='20';
      F.appendChild(n2006);}
    {const n2007=figma.createText();
      n2007.fontName=FR;
      n2007.fontSize=13.0;
      n2007.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2007.x=1016; n2007.y=1054.5;
      n2007.characters='15,00';
      F.appendChild(n2007);}
    {const n2008=figma.createText();
      n2008.fontName=FR;
      n2008.fontSize=12.0;
      n2008.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2008.x=1123; n2008.y=1056;
      n2008.characters='R$ 300,00';
      F.appendChild(n2008);}
    {const n2009=figma.createText();
      n2009.fontName=FR;
      n2009.fontSize=12.0;
      n2009.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2009.x=292; n2009.y=1089.5;
      n2009.characters='Adicionar produto';
      F.appendChild(n2009);}
    {const n2010=figma.createText();
      n2010.fontName=FR;
      n2010.fontSize=11.0;
      n2010.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2010.x=265; n2010.y=1110;
      n2010.characters='Outros (descrição livre)';
      F.appendChild(n2010);}
    {const n2011=figma.createText();
      n2011.fontName=FR;
      n2011.fontSize=13.0;
      n2011.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2011.x=274; n2011.y=1133.5;
      n2011.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n2011);}
    {const n2012=figma.createText();
      n2012.fontName=FR;
      n2012.fontSize=11.0;
      n2012.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2012.x=1000.4; n2012.y=1174;
      n2012.characters='Subtotal dos produtos';
      F.appendChild(n2012);}
    {const n2013=figma.createText();
      n2013.fontName=FB;
      n2013.fontSize=13.0;
      n2013.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2013.x=1170.7; n2013.y=1174;
      n2013.characters='R$ 300,00';
      F.appendChild(n2013);}
    {const n2014=figma.createFrame();
      n2014.x=265.0; n2014.y=1224.0;
      n2014.resize(Math.max(1,20),Math.max(1,20));
      n2014.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2014.clipsContent=false;
      n2014.cornerRadius=50.0;
      F.appendChild(n2014);
      {const n2015=figma.createText();
        n2015.fontName=FB;
        n2015.fontSize=9.0;
        n2015.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2015.x=6.8; n2015.y=4.5;
        n2015.characters='6';
        n2014.appendChild(n2015);}
    }
    {const n2016=figma.createText();
      n2016.fontName=FB;
      n2016.fontSize=13.0;
      n2016.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2016.x=295; n2016.y=1226;
      n2016.characters='Financeiro';
      F.appendChild(n2016);}
    {const n2017=figma.createText();
      n2017.fontName=FR;
      n2017.fontSize=11.0;
      n2017.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2017.x=265; n2017.y=1269;
      n2017.characters='Desconto (R$)';
      F.appendChild(n2017);}
    {const n2018=figma.createText();
      n2018.fontName=FR;
      n2018.fontSize=13.0;
      n2018.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2018.x=274; n2018.y=1292.5;
      n2018.characters='0';
      F.appendChild(n2018);}
    {const n2019=figma.createText();
      n2019.fontName=FR;
      n2019.fontSize=11.0;
      n2019.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2019.x=757; n2019.y=1269;
      n2019.characters='Frete (R$)';
      F.appendChild(n2019);}
    {const n2020=figma.createText();
      n2020.fontName=FR;
      n2020.fontSize=13.0;
      n2020.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2020.x=766; n2020.y=1292.5;
      n2020.characters='25,00';
      F.appendChild(n2020);}
    {const n2021=figma.createText();
      n2021.fontName=FR;
      n2021.fontSize=11.0;
      n2021.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2021.x=265; n2021.y=1325;
      n2021.characters='Total do Pedido';
      F.appendChild(n2021);}
    {const n2022=figma.createText();
      n2022.fontName=FB;
      n2022.fontSize=20.0;
      n2022.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2022.x=281; n2022.y=1352.5;
      n2022.characters='R$ 325,00';
      F.appendChild(n2022);}
    {const n2023=figma.createFrame();
      n2023.x=265.0; n2023.y=1421.0;
      n2023.resize(Math.max(1,20),Math.max(1,20));
      n2023.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2023.clipsContent=false;
      n2023.cornerRadius=50.0;
      F.appendChild(n2023);
      {const n2024=figma.createText();
        n2024.fontName=FB;
        n2024.fontSize=9.0;
        n2024.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2024.x=7.2; n2024.y=4.5;
        n2024.characters='7';
        n2023.appendChild(n2024);}
    }
    {const n2025=figma.createText();
      n2025.fontName=FB;
      n2025.fontSize=13.0;
      n2025.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2025.x=295; n2025.y=1423;
      n2025.characters='Pagamento';
      F.appendChild(n2025);}
    {const n2026=figma.createText();
      n2026.fontName=FB;
      n2026.fontSize=10.0;
      n2026.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2026.x=265; n2026.y=1466;
      n2026.characters='Forma';
      F.appendChild(n2026);}
    {const n2027=figma.createText();
      n2027.fontName=FB;
      n2027.fontSize=10.0;
      n2027.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2027.x=411; n2027.y=1466;
      n2027.characters='Data Pgto';
      F.appendChild(n2027);}
    {const n2028=figma.createText();
      n2028.fontName=FB;
      n2028.fontSize=10.0;
      n2028.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2028.x=541; n2028.y=1466;
      n2028.characters='Valor (R$)';
      F.appendChild(n2028);}
    {const n2029=figma.createText();
      n2029.fontName=FB;
      n2029.fontSize=10.0;
      n2029.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2029.x=657; n2029.y=1466;
      n2029.characters='Confirm.';
      F.appendChild(n2029);}
    {const n2030=figma.createText();
      n2030.fontName=FR;
      n2030.fontSize=12.0;
      n2030.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2030.x=274; n2030.y=1499;
      n2030.characters='Inter';
      F.appendChild(n2030);}
    {const n2031=figma.createText();
      n2031.fontName=FR;
      n2031.fontSize=13.0;
      n2031.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2031.x=420; n2031.y=1498.5;
      n2031.characters='2026-01-20';
      F.appendChild(n2031);}
    {const n2032=figma.createText();
      n2032.fontName=FR;
      n2032.fontSize=13.0;
      n2032.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2032.x=550; n2032.y=1498.5;
      n2032.characters='325,00';
      F.appendChild(n2032);}
    {const n2033=figma.createText();
      n2033.fontName=FR;
      n2033.fontSize=13.3;
      n2033.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2033.x=699; n2033.y=1498;
      n2033.characters='on';
      F.appendChild(n2033);}
    {const n2034=figma.createText();
      n2034.fontName=FR;
      n2034.fontSize=12.0;
      n2034.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2034.x=292; n2034.y=1533.5;
      n2034.characters='Adicionar parcela';
      F.appendChild(n2034);}
    {const n2035=figma.createText();
      n2035.fontName=FR;
      n2035.fontSize=12.0;
      n2035.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2035.x=280; n2035.y=1579;
      n2035.characters='Total do pedido';
      F.appendChild(n2035);}
    {const n2036=figma.createText();
      n2036.fontName=FR;
      n2036.fontSize=12.0;
      n2036.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2036.x=1160.6; n2036.y=1580.5;
      n2036.characters='R$ 325,00';
      F.appendChild(n2036);}
    {const n2037=figma.createText();
      n2037.fontName=FR;
      n2037.fontSize=12.0;
      n2037.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2037.x=280; n2037.y=1599;
      n2037.characters='Total pago';
      F.appendChild(n2037);}
    {const n2038=figma.createText();
      n2038.fontName=FR;
      n2038.fontSize=12.0;
      n2038.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2038.x=1160.6; n2038.y=1600.5;
      n2038.characters='R$ 325,00';
      F.appendChild(n2038);}
    {const n2039=figma.createText();
      n2039.fontName=FB;
      n2039.fontSize=12.0;
      n2039.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2039.x=280; n2039.y=1619.5;
      n2039.characters='Falta pagar';
      F.appendChild(n2039);}
    {const n2040=figma.createText();
      n2040.fontName=FB;
      n2040.fontSize=12.0;
      n2040.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2040.x=1165.8; n2040.y=1621;
      n2040.characters='R$ 0,00';
      F.appendChild(n2040);}
    {const n2041=figma.createText();
      n2041.fontName=FR;
      n2041.fontSize=13.3;
      n2041.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2041.x=289; n2041.y=1652.5;
      n2041.characters='on';
      F.appendChild(n2041);}
    {const n2042=figma.createText();
      n2042.fontName=FR;
      n2042.fontSize=12.0;
      n2042.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2042.x=300; n2042.y=1652;
      n2042.characters='Vai pagar na retirada';
      F.appendChild(n2042);}
    {const n2043=figma.createFrame();
      n2043.x=265.0; n2043.y=1716.0;
      n2043.resize(Math.max(1,20),Math.max(1,20));
      n2043.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2043.clipsContent=false;
      n2043.cornerRadius=50.0;
      F.appendChild(n2043);
      {const n2044=figma.createText();
        n2044.fontName=FB;
        n2044.fontSize=9.0;
        n2044.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2044.x=6.8; n2044.y=4.5;
        n2044.characters='8';
        n2043.appendChild(n2044);}
    }
    {const n2045=figma.createText();
      n2045.fontName=FB;
      n2045.fontSize=13.0;
      n2045.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2045.x=295; n2045.y=1718;
      n2045.characters='Entrega';
      F.appendChild(n2045);}
    {const n2046=figma.createText();
      n2046.fontName=FR;
      n2046.fontSize=11.0;
      n2046.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2046.x=265; n2046.y=1761;
      n2046.characters='Data de Entrega';
      F.appendChild(n2046);}
    {const n2047=figma.createText();
      n2047.fontName=FR;
      n2047.fontSize=11.0;
      n2047.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2047.x=352.7; n2047.y=1761;
      n2047.characters='*';
      F.appendChild(n2047);}
    {const n2048=figma.createText();
      n2048.fontName=FR;
      n2048.fontSize=13.0;
      n2048.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2048.x=274; n2048.y=1784.5;
      n2048.characters='2026-02-10';
      F.appendChild(n2048);}
    {const n2049=figma.createText();
      n2049.fontName=FR;
      n2049.fontSize=11.0;
      n2049.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2049.x=757; n2049.y=1761;
      n2049.characters='Modalidade';
      F.appendChild(n2049);}
    {const n2050=figma.createText();
      n2050.fontName=FR;
      n2050.fontSize=11.0;
      n2050.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2050.x=820.4; n2050.y=1761;
      n2050.characters='*';
      F.appendChild(n2050);}
    {const n2051=figma.createText();
      n2051.fontName=FR;
      n2051.fontSize=13.0;
      n2051.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2051.x=766; n2051.y=1784.5;
      n2051.characters='JADLOG COM';
      F.appendChild(n2051);}
    {const n2052=figma.createText();
      n2052.fontName=FB;
      n2052.fontSize=10.0;
      n2052.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2052.x=265; n2052.y=1822.5;
      n2052.characters='Destinatário';
      F.appendChild(n2052);}
    {const n2053=figma.createText();
      n2053.fontName=FR;
      n2053.fontSize=13.3;
      n2053.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2053.x=1083.7; n2053.y=1821.5;
      n2053.characters='on';
      F.appendChild(n2053);}
    {const n2054=figma.createText();
      n2054.fontName=FR;
      n2054.fontSize=12.0;
      n2054.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2054.x=1093.7; n2054.y=1821;
      n2054.characters='Mesmo que o comprador';
      F.appendChild(n2054);}
    {const n2055=figma.createText();
      n2055.fontName=FR;
      n2055.fontSize=11.0;
      n2055.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2055.x=265; n2055.y=1855;
      n2055.characters='Nome do Destinatário';
      F.appendChild(n2055);}
    {const n2056=figma.createText();
      n2056.fontName=FR;
      n2056.fontSize=11.0;
      n2056.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2056.x=383.5; n2056.y=1855;
      n2056.characters='*';
      F.appendChild(n2056);}
    {const n2057=figma.createText();
      n2057.fontName=FR;
      n2057.fontSize=13.0;
      n2057.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2057.x=274; n2057.y=1878.5;
      n2057.characters='Maria Fernanda';
      F.appendChild(n2057);}
    {const n2058=figma.createText();
      n2058.fontName=FR;
      n2058.fontSize=11.0;
      n2058.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2058.x=265; n2058.y=1911;
      n2058.characters='Telefone';
      F.appendChild(n2058);}
    {const n2059=figma.createText();
      n2059.fontName=FR;
      n2059.fontSize=13.0;
      n2059.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2059.x=274; n2059.y=1934.5;
      n2059.characters='(11) 99000-1122';
      F.appendChild(n2059);}
    {const n2060=figma.createText();
      n2060.fontName=FR;
      n2060.fontSize=11.0;
      n2060.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2060.x=757; n2060.y=1911;
      n2060.characters='CPF';
      F.appendChild(n2060);}
    {const n2061=figma.createText();
      n2061.fontName=FR;
      n2061.fontSize=11.0;
      n2061.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2061.x=265; n2061.y=1967;
      n2061.characters='Email';
      F.appendChild(n2061);}
    {const n2062=figma.createText();
      n2062.fontName=FB;
      n2062.fontSize=10.0;
      n2062.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2062.x=265; n2062.y=2027;
      n2062.characters='Endereço';
      F.appendChild(n2062);}
    {const n2063=figma.createText();
      n2063.fontName=FR;
      n2063.fontSize=11.0;
      n2063.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2063.x=265; n2063.y=2058;
      n2063.characters='CEP';
      F.appendChild(n2063);}
    {const n2064=figma.createText();
      n2064.fontName=FR;
      n2064.fontSize=13.0;
      n2064.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2064.x=274; n2064.y=2081.5;
      n2064.characters='01310-100';
      F.appendChild(n2064);}
    {const n2065=figma.createText();
      n2065.fontName=FR;
      n2065.fontSize=11.0;
      n2065.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2065.x=265; n2065.y=2114;
      n2065.characters='Logradouro';
      F.appendChild(n2065);}
    {const n2066=figma.createText();
      n2066.fontName=FR;
      n2066.fontSize=13.0;
      n2066.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2066.x=274; n2066.y=2137.5;
      n2066.characters='Av. Paulista';
      F.appendChild(n2066);}
    {const n2067=figma.createText();
      n2067.fontName=FR;
      n2067.fontSize=11.0;
      n2067.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2067.x=593; n2067.y=2114;
      n2067.characters='Número';
      F.appendChild(n2067);}
    {const n2068=figma.createText();
      n2068.fontName=FR;
      n2068.fontSize=13.0;
      n2068.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2068.x=602; n2068.y=2137.5;
      n2068.characters='1000';
      F.appendChild(n2068);}
    {const n2069=figma.createText();
      n2069.fontName=FR;
      n2069.fontSize=11.0;
      n2069.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2069.x=265; n2069.y=2170;
      n2069.characters='Complemento';
      F.appendChild(n2069);}
    {const n2070=figma.createText();
      n2070.fontName=FR;
      n2070.fontSize=13.0;
      n2070.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2070.x=274; n2070.y=2193.5;
      n2070.characters='Apto, Bloco… (opcional)';
      F.appendChild(n2070);}
    {const n2071=figma.createText();
      n2071.fontName=FR;
      n2071.fontSize=11.0;
      n2071.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2071.x=511; n2071.y=2170;
      n2071.characters='Bairro';
      F.appendChild(n2071);}
    {const n2072=figma.createText();
      n2072.fontName=FR;
      n2072.fontSize=13.0;
      n2072.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2072.x=520; n2072.y=2193.5;
      n2072.characters='Bela Vista';
      F.appendChild(n2072);}
    {const n2073=figma.createText();
      n2073.fontName=FR;
      n2073.fontSize=11.0;
      n2073.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2073.x=757; n2073.y=2170;
      n2073.characters='Cidade';
      F.appendChild(n2073);}
    {const n2074=figma.createText();
      n2074.fontName=FR;
      n2074.fontSize=13.0;
      n2074.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2074.x=766; n2074.y=2193.5;
      n2074.characters='São Paulo';
      F.appendChild(n2074);}
    {const n2075=figma.createText();
      n2075.fontName=FR;
      n2075.fontSize=11.0;
      n2075.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2075.x=265; n2075.y=2226;
      n2075.characters='UF';
      F.appendChild(n2075);}
    {const n2076=figma.createText();
      n2076.fontName=FR;
      n2076.fontSize=13.0;
      n2076.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2076.x=274; n2076.y=2249.5;
      n2076.characters='SP';
      F.appendChild(n2076);}
    {const n2077=figma.createText();
      n2077.fontName=FB;
      n2077.fontSize=10.0;
      n2077.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2077.x=265; n2077.y=2286;
      n2077.characters='Observações';
      F.appendChild(n2077);}
    {const n2078=figma.createText();
      n2078.fontName=FR;
      n2078.fontSize=11.0;
      n2078.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2078.x=265; n2078.y=2317;
      n2078.characters='Obs. Fábrica';
      F.appendChild(n2078);}
    {const n2079=figma.createText();
      n2079.fontName=FR;
      n2079.fontSize=11.0;
      n2079.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2079.x=757; n2079.y=2317;
      n2079.characters='Info Motoboy';
      F.appendChild(n2079);}
    {const n2080=figma.createText();
      n2080.fontName=FB;
      n2080.fontSize=9.0;
      n2080.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n2080.x=271.8; n2080.y=2431.5;
      n2080.characters='9';
      F.appendChild(n2080);}
    {const n2081=figma.createText();
      n2081.fontName=FR;
      n2081.fontSize=12.0;
      n2081.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2081.x=295; n2081.y=2429.5;
      n2081.characters='Controle Interno';
      F.appendChild(n2081);}
    {const n2082=figma.createText();
      n2082.fontName=FR;
      n2082.fontSize=11.0;
      n2082.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2082.x=1088.2; n2082.y=2430.5;
      n2082.characters='Uso interno da operação';
      F.appendChild(n2082);}
    {const n2083=figma.createText();
      n2083.fontName=FR;
      n2083.fontSize=10.0;
      n2083.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2083.x=1225.1; n2083.y=2433.1;
      n2083.characters='▼';
      F.appendChild(n2083);}
    {const n2084=figma.createText();
      n2084.fontName=FR;
      n2084.fontSize=10.0;
      n2084.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2084.x=248; n2084.y=1060;
      n2084.characters='Pedido';
      F.appendChild(n2084);}
    {const n2085=figma.createText();
      n2085.fontName=FB;
      n2085.fontSize=13.0;
      n2085.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2085.x=248; n2085.y=1074;
      n2085.characters='#25864';
      F.appendChild(n2085);}
    {const n2086=figma.createText();
      n2086.fontName=FR;
      n2086.fontSize=10.0;
      n2086.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2086.x=327.9; n2086.y=1060;
      n2086.characters='Total';
      F.appendChild(n2086);}
    {const n2087=figma.createText();
      n2087.fontName=FB;
      n2087.fontSize=13.0;
      n2087.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2087.x=327.9; n2087.y=1074;
      n2087.characters='R$ 325,00';
      F.appendChild(n2087);}
    {const n2088=figma.createText();
      n2088.fontName=FR;
      n2088.fontSize=10.0;
      n2088.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2088.x=429.2; n2088.y=1060;
      n2088.characters='Falta pagar';
      F.appendChild(n2088);}
    {const n2089=figma.createText();
      n2089.fontName=FB;
      n2089.fontSize=13.0;
      n2089.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2089.x=429.2; n2089.y=1074;
      n2089.characters='R$ 0,00';
      F.appendChild(n2089);}
    {const n2090=figma.createText();
      n2090.fontName=FR;
      n2090.fontSize=13.0;
      n2090.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2090.x=1036.6; n2090.y=1066;
      n2090.characters='Limpar';
      F.appendChild(n2090);}
    {const n2091=figma.createFrame();
      n2091.x=1101.1; n2091.y=1057.0;
      n2091.resize(Math.max(1,150.8),Math.max(1,34));
      n2091.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2091.clipsContent=false;
      n2091.cornerRadius=4.0;
      n2091.opacity=0.55;
      F.appendChild(n2091);
      {const n2092=figma.createText();
        n2092.fontName=FB;
        n2092.fontSize=13.0;
        n2092.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2092.x=38; n2092.y=9;
        n2092.characters='Cadastrando…';
        n2091.appendChild(n2092);}
      {const n2093=figma.createFrame();
        n2093.x=17.8; n2093.y=8.8;
        n2093.resize(Math.max(1,16.4),Math.max(1,16.4));
        n2093.fills=[];
        n2093.clipsContent=false;
        n2093.strokes=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2093.strokeWeight=2.0; n2093.strokeAlign='INSIDE';
        n2093.cornerRadius=50.0;
        n2093.opacity=0.55;
        n2091.appendChild(n2093);
      }
    }
    {const n2094=figma.createText();
      n2094.fontName=FR;
      n2094.fontSize=11.0;
      n2094.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2094.x=30; n2094.y=2547;
      n2094.characters='Salvando na planilha…';
      F.appendChild(n2094);}
    {const n2095=figma.createText();
      n2095.fontName=FR;
      n2095.fontSize=11.0;
      n2095.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2095.x=1241.8; n2095.y=2548;
      n2095.characters='v4.2';
      F.appendChild(n2095);}
  }
  await Promise.resolve();

  // ── B6: Cadastro realizado com sucesso
  {const F=figma.createFrame();
    F.x=16320; F.y=0;
    F.resize(1280,2619);
    F.name='B6 — Cadastro realizado com sucesso';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n2096=figma.createFrame();
      n2096.x=0.0; n2096.y=0.0;
      n2096.resize(Math.max(1,1280),Math.max(1,38));
      n2096.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2096.clipsContent=false;
      F.appendChild(n2096);
      {const n2097=figma.createFrame();
        n2097.x=14.0; n2097.y=8.0;
        n2097.resize(Math.max(1,22),Math.max(1,22));
        n2097.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n2097.clipsContent=false;
        n2097.cornerRadius=5.0;
        n2096.appendChild(n2097);
        {const n2098=figma.createText();
          n2098.fontName=FB;
          n2098.fontSize=10.0;
          n2098.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n2098.x=2.5; n2098.y=5;
          n2098.characters='MC';
          n2097.appendChild(n2098);}
      }
      {const n2099=figma.createText();
        n2099.fontName=FR;
        n2099.fontSize=13.0;
        n2099.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2099.x=44; n2099.y=11;
        n2099.characters='Maria Cacau — Gestão de Pedidos';
        n2096.appendChild(n2099);}
    }
    {const n2100=figma.createFrame();
      n2100.x=0.0; n2100.y=38.0;
      n2100.resize(Math.max(1,220),Math.max(1,2553));
      n2100.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2100.clipsContent=false;
      F.appendChild(n2100);
      {const n2101=figma.createFrame();
        n2101.x=14.0; n2101.y=14.0;
        n2101.resize(Math.max(1,38),Math.max(1,38));
        n2101.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n2101.clipsContent=false;
        n2101.cornerRadius=8.0;
        n2100.appendChild(n2101);
        {const n2102=figma.createText();
          n2102.fontName=FB;
          n2102.fontSize=14.0;
          n2102.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n2102.x=7.5; n2102.y=10.5;
          n2102.characters='MC';
          n2101.appendChild(n2102);}
      }
      {const n2103=figma.createText();
        n2103.fontName=FB;
        n2103.fontSize=13.0;
        n2103.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2103.x=62; n2103.y=18.5;
        n2103.characters='Maria Cacau';
        n2100.appendChild(n2103);}
      {const n2104=figma.createText();
        n2104.fontName=FR;
        n2104.fontSize=10.0;
        n2104.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2104.x=62; n2104.y=35.5;
        n2104.characters='Gestão de Pedidos';
        n2100.appendChild(n2104);}
      {const n2105=figma.createText();
        n2105.fontName=FB;
        n2105.fontSize=10.0;
        n2105.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2105.x=16; n2105.y=85;
        n2105.characters='Pedidos';
        n2100.appendChild(n2105);}
      {const n2106=figma.createFrame();
        n2106.x=8.0; n2106.y=101.0;
        n2106.resize(Math.max(1,204),Math.max(1,34));
        n2106.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n2106.clipsContent=false;
        n2106.cornerRadius=8.0;
        n2100.appendChild(n2106);
        {const n2107=figma.createText();
          n2107.fontName=FB;
          n2107.fontSize=13.0;
          n2107.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n2107.x=38; n2107.y=9;
          n2107.characters='Novo Pedido';
          n2106.appendChild(n2107);}
        {const n2108=figma.createFrame();
          n2108.x=160.4; n2108.y=10.5;
          n2108.resize(Math.max(1,33.6),Math.max(1,13));
          n2108.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n2108.clipsContent=false;
          n2108.cornerRadius=8.0;
          n2106.appendChild(n2108);
          {const n2109=figma.createText();
            n2109.fontName=FB;
            n2109.fontSize=9.0;
            n2109.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n2109.x=5; n2109.y=1;
            n2109.characters='Novo';
            n2108.appendChild(n2109);}
        }
      }
      {const n2110=figma.createText();
        n2110.fontName=FB;
        n2110.fontSize=10.0;
        n2110.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2110.x=16; n2110.y=145;
        n2110.characters='Consultas';
        n2100.appendChild(n2110);}
      {const n2111=figma.createText();
        n2111.fontName=FR;
        n2111.fontSize=13.0;
        n2111.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2111.x=46; n2111.y=170;
        n2111.characters='Produtos';
        n2100.appendChild(n2111);}
      {const n2112=figma.createText();
        n2112.fontName=FR;
        n2112.fontSize=13.0;
        n2112.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2112.x=46; n2112.y=206;
        n2112.characters='Entregas';
        n2100.appendChild(n2112);}
      {const n2113=figma.createText();
        n2113.fontName=FR;
        n2113.fontSize=13.0;
        n2113.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2113.x=46; n2113.y=242;
        n2113.characters='Verificar CPF';
        n2100.appendChild(n2113);}
      {const n2114=figma.createText();
        n2114.fontName=FB;
        n2114.fontSize=10.0;
        n2114.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2114.x=16; n2114.y=277;
        n2114.characters='Em breve';
        n2100.appendChild(n2114);}
      {const n2115=figma.createText();
        n2115.fontName=FR;
        n2115.fontSize=13.0;
        n2115.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2115.x=46; n2115.y=302;
        n2115.characters='Frete por CEP';
        n2100.appendChild(n2115);}
      {const n2116=figma.createFrame();
        n2116.x=169.2; n2116.y=303.5;
        n2116.resize(Math.max(1,32.8),Math.max(1,13));
        n2116.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n2116.clipsContent=false;
        n2116.cornerRadius=8.0;
        n2116.opacity=0.36;
        n2100.appendChild(n2116);
        {const n2117=figma.createText();
          n2117.fontName=FB;
          n2117.fontSize=9.0;
          n2117.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n2117.x=5; n2117.y=1;
          n2117.characters='Logo';
          n2116.appendChild(n2117);}
      }
      {const n2118=figma.createText();
        n2118.fontName=FR;
        n2118.fontSize=13.0;
        n2118.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2118.x=46; n2118.y=338;
        n2118.characters='Nota Fiscal';
        n2100.appendChild(n2118);}
      {const n2119=figma.createFrame();
        n2119.x=169.2; n2119.y=339.5;
        n2119.resize(Math.max(1,32.8),Math.max(1,13));
        n2119.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n2119.clipsContent=false;
        n2119.cornerRadius=8.0;
        n2119.opacity=0.36;
        n2100.appendChild(n2119);
        {const n2120=figma.createText();
          n2120.fontName=FB;
          n2120.fontSize=9.0;
          n2120.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n2120.x=5; n2120.y=1;
          n2120.characters='Logo';
          n2119.appendChild(n2120);}
      }
    }
    {const n2121=figma.createText();
      n2121.fontName=FR;
      n2121.fontSize=13.0;
      n2121.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2121.x=285; n2121.y=73;
      n2121.characters='Pedido #25859 cadastrado com sucesso!';
      F.appendChild(n2121);}
    {const n2122=figma.createText();
      n2122.fontName=FB;
      n2122.fontSize=20.0;
      n2122.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2122.x=248; n2122.y=114;
      n2122.characters='Novo Pedido';
      F.appendChild(n2122);}
    {const n2123=figma.createText();
      n2123.fontName=FR;
      n2123.fontSize=13.0;
      n2123.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2123.x=248; n2123.y=140;
      n2123.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n2123);}
    {const n2124=figma.createFrame();
      n2124.x=265.0; n2124.y=185.0;
      n2124.resize(Math.max(1,20),Math.max(1,20));
      n2124.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2124.clipsContent=false;
      n2124.cornerRadius=50.0;
      F.appendChild(n2124);
      {const n2125=figma.createText();
        n2125.fontName=FB;
        n2125.fontSize=9.0;
        n2125.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2125.x=7.6; n2125.y=4.5;
        n2125.characters='1';
        n2124.appendChild(n2125);}
    }
    {const n2126=figma.createText();
      n2126.fontName=FB;
      n2126.fontSize=13.0;
      n2126.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2126.x=295; n2126.y=187;
      n2126.characters='Identificação do Pedido';
      F.appendChild(n2126);}
    {const n2127=figma.createText();
      n2127.fontName=FR;
      n2127.fontSize=11.0;
      n2127.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2127.x=265; n2127.y=230;
      n2127.characters='Nº Pedido';
      F.appendChild(n2127);}
    {const n2128=figma.createText();
      n2128.fontName=FR;
      n2128.fontSize=11.0;
      n2128.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2128.x=319.2; n2128.y=230;
      n2128.characters='*';
      F.appendChild(n2128);}
    {const n2129=figma.createText();
      n2129.fontName=FR;
      n2129.fontSize=13.0;
      n2129.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2129.x=274; n2129.y=253.5;
      n2129.characters='25860';
      F.appendChild(n2129);}
    {const n2130=figma.createText();
      n2130.fontName=FR;
      n2130.fontSize=11.0;
      n2130.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2130.x=757; n2130.y=230;
      n2130.characters='Como Conheceu';
      F.appendChild(n2130);}
    {const n2131=figma.createFrame();
      n2131.x=265.0; n2131.y=312.0;
      n2131.resize(Math.max(1,20),Math.max(1,20));
      n2131.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2131.clipsContent=false;
      n2131.cornerRadius=50.0;
      F.appendChild(n2131);
      {const n2132=figma.createText();
        n2132.fontName=FB;
        n2132.fontSize=9.0;
        n2132.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2132.x=7; n2132.y=4.5;
        n2132.characters='2';
        n2131.appendChild(n2132);}
    }
    {const n2133=figma.createText();
      n2133.fontName=FB;
      n2133.fontSize=13.0;
      n2133.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2133.x=295; n2133.y=314;
      n2133.characters='Comprador';
      F.appendChild(n2133);}
    {const n2134=figma.createText();
      n2134.fontName=FR;
      n2134.fontSize=11.0;
      n2134.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2134.x=265; n2134.y=357;
      n2134.characters='Nome do Comprador';
      F.appendChild(n2134);}
    {const n2135=figma.createText();
      n2135.fontName=FR;
      n2135.fontSize=11.0;
      n2135.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2135.x=378.2; n2135.y=357;
      n2135.characters='*';
      F.appendChild(n2135);}
    {const n2136=figma.createText();
      n2136.fontName=FR;
      n2136.fontSize=11.0;
      n2136.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2136.x=265; n2136.y=413;
      n2136.characters='Parentesco';
      F.appendChild(n2136);}
    {const n2137=figma.createText();
      n2137.fontName=FR;
      n2137.fontSize=11.0;
      n2137.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2137.x=757; n2137.y=413;
      n2137.characters='Telefone';
      F.appendChild(n2137);}
    {const n2138=figma.createText();
      n2138.fontName=FR;
      n2138.fontSize=11.0;
      n2138.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2138.x=803.6; n2138.y=413;
      n2138.characters='*';
      F.appendChild(n2138);}
    {const n2139=figma.createText();
      n2139.fontName=FR;
      n2139.fontSize=11.0;
      n2139.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2139.x=265; n2139.y=469;
      n2139.characters='CPF';
      F.appendChild(n2139);}
    {const n2140=figma.createText();
      n2140.fontName=FR;
      n2140.fontSize=11.0;
      n2140.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2140.x=757; n2140.y=469;
      n2140.characters='Email';
      F.appendChild(n2140);}
    {const n2141=figma.createFrame();
      n2141.x=265.0; n2141.y=551.0;
      n2141.resize(Math.max(1,20),Math.max(1,20));
      n2141.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2141.clipsContent=false;
      n2141.cornerRadius=50.0;
      F.appendChild(n2141);
      {const n2142=figma.createText();
        n2142.fontName=FB;
        n2142.fontSize=9.0;
        n2142.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2142.x=6.9; n2142.y=4.5;
        n2142.characters='3';
        n2141.appendChild(n2142);}
    }
    {const n2143=figma.createText();
      n2143.fontName=FB;
      n2143.fontSize=13.0;
      n2143.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2143.x=295; n2143.y=553;
      n2143.characters='Presenteado & Evento';
      F.appendChild(n2143);}
    {const n2144=figma.createText();
      n2144.fontName=FR;
      n2144.fontSize=11.0;
      n2144.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2144.x=265; n2144.y=596;
      n2144.characters='Nome do Presenteado';
      F.appendChild(n2144);}
    {const n2145=figma.createText();
      n2145.fontName=FR;
      n2145.fontSize=11.0;
      n2145.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2145.x=265; n2145.y=652;
      n2145.characters='Sexo';
      F.appendChild(n2145);}
    {const n2146=figma.createText();
      n2146.fontName=FR;
      n2146.fontSize=11.0;
      n2146.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2146.x=289.5; n2146.y=676.5;
      n2146.characters='Feminino';
      F.appendChild(n2146);}
    {const n2147=figma.createText();
      n2147.fontName=FR;
      n2147.fontSize=11.0;
      n2147.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2147.x=382.09999999999997; n2147.y=676.5;
      n2147.characters='Masculino';
      F.appendChild(n2147);}
    {const n2148=figma.createText();
      n2148.fontName=FR;
      n2148.fontSize=11.0;
      n2148.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2148.x=482.7; n2148.y=676.5;
      n2148.characters='Gêmeas';
      F.appendChild(n2148);}
    {const n2149=figma.createText();
      n2149.fontName=FR;
      n2149.fontSize=11.0;
      n2149.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2149.x=577.9000000000001; n2149.y=676.5;
      n2149.characters='Gêmeos';
      F.appendChild(n2149);}
    {const n2150=figma.createText();
      n2150.fontName=FR;
      n2150.fontSize=11.0;
      n2150.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2150.x=670.2; n2150.y=676.5;
      n2150.characters='Não sabe';
      F.appendChild(n2150);}
    {const n2151=figma.createText();
      n2151.fontName=FR;
      n2151.fontSize=11.0;
      n2151.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2151.x=757; n2151.y=652;
      n2151.characters='Tipo de Evento';
      F.appendChild(n2151);}
    {const n2152=figma.createText();
      n2152.fontName=FR;
      n2152.fontSize=11.0;
      n2152.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2152.x=265; n2152.y=708;
      n2152.characters='Data do Evento';
      F.appendChild(n2152);}
    {const n2153=figma.createFrame();
      n2153.x=265.0; n2153.y=790.0;
      n2153.resize(Math.max(1,20),Math.max(1,20));
      n2153.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2153.clipsContent=false;
      n2153.cornerRadius=50.0;
      F.appendChild(n2153);
      {const n2154=figma.createText();
        n2154.fontName=FB;
        n2154.fontSize=9.0;
        n2154.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2154.x=6.8; n2154.y=4.5;
        n2154.characters='4';
        n2153.appendChild(n2154);}
    }
    {const n2155=figma.createText();
      n2155.fontName=FB;
      n2155.fontSize=13.0;
      n2155.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2155.x=295; n2155.y=792;
      n2155.characters='Personalização';
      F.appendChild(n2155);}
    {const n2156=figma.createText();
      n2156.fontName=FR;
      n2156.fontSize=11.0;
      n2156.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2156.x=1138; n2156.y=793.5;
      n2156.characters='Arte & embalagem';
      F.appendChild(n2156);}
    {const n2157=figma.createText();
      n2157.fontName=FR;
      n2157.fontSize=11.0;
      n2157.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2157.x=265; n2157.y=835;
      n2157.characters='Nome da Etiqueta';
      F.appendChild(n2157);}
    {const n2158=figma.createText();
      n2158.fontName=FR;
      n2158.fontSize=11.0;
      n2158.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2158.x=757; n2158.y=835;
      n2158.characters='Tema da Etiqueta';
      F.appendChild(n2158);}
    {const n2159=figma.createText();
      n2159.fontName=FR;
      n2159.fontSize=11.0;
      n2159.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2159.x=265; n2159.y=891;
      n2159.characters='Nome na Caixa';
      F.appendChild(n2159);}
    {const n2160=figma.createText();
      n2160.fontName=FR;
      n2160.fontSize=11.0;
      n2160.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2160.x=757; n2160.y=891;
      n2160.characters='Arte / Tecido da Caixa';
      F.appendChild(n2160);}
    {const n2161=figma.createText();
      n2161.fontName=FR;
      n2161.fontSize=11.0;
      n2161.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2161.x=265; n2161.y=947;
      n2161.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n2161);}
    {const n2162=figma.createText();
      n2162.fontName=FR;
      n2162.fontSize=13.0;
      n2162.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2162.x=274; n2162.y=970.5;
      n2162.characters='0';
      F.appendChild(n2162);}
    {const n2163=figma.createFrame();
      n2163.x=265.0; n2163.y=1029.0;
      n2163.resize(Math.max(1,20),Math.max(1,20));
      n2163.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2163.clipsContent=false;
      n2163.cornerRadius=50.0;
      F.appendChild(n2163);
      {const n2164=figma.createText();
        n2164.fontName=FB;
        n2164.fontSize=9.0;
        n2164.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2164.x=6.9; n2164.y=4.5;
        n2164.characters='5';
        n2163.appendChild(n2164);}
    }
    {const n2165=figma.createText();
      n2165.fontName=FB;
      n2165.fontSize=13.0;
      n2165.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2165.x=295; n2165.y=1031;
      n2165.characters='Produtos';
      F.appendChild(n2165);}
    {const n2166=figma.createText();
      n2166.fontName=FR;
      n2166.fontSize=11.0;
      n2166.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2166.x=1203.9; n2166.y=1032.5;
      n2166.characters='1 item';
      F.appendChild(n2166);}
    {const n2167=figma.createText();
      n2167.fontName=FB;
      n2167.fontSize=10.0;
      n2167.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2167.x=265; n2167.y=1074;
      n2167.characters='Produto';
      F.appendChild(n2167);}
    {const n2168=figma.createText();
      n2168.fontName=FB;
      n2168.fontSize=10.0;
      n2168.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2168.x=937; n2168.y=1074;
      n2168.characters='Qtd';
      F.appendChild(n2168);}
    {const n2169=figma.createText();
      n2169.fontName=FB;
      n2169.fontSize=10.0;
      n2169.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2169.x=1007; n2169.y=1074;
      n2169.characters='R$ Unit.';
      F.appendChild(n2169);}
    {const n2170=figma.createText();
      n2170.fontName=FB;
      n2170.fontSize=10.0;
      n2170.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2170.x=1113; n2170.y=1074;
      n2170.characters='Total';
      F.appendChild(n2170);}
    {const n2171=figma.createText();
      n2171.fontName=FR;
      n2171.fontSize=13.0;
      n2171.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2171.x=274; n2171.y=1106.5;
      n2171.characters='Buscar produto ou código…';
      F.appendChild(n2171);}
    {const n2172=figma.createText();
      n2172.fontName=FR;
      n2172.fontSize=13.0;
      n2172.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2172.x=946; n2172.y=1106.5;
      n2172.characters='1';
      F.appendChild(n2172);}
    {const n2173=figma.createText();
      n2173.fontName=FR;
      n2173.fontSize=12.0;
      n2173.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2173.x=1123; n2173.y=1108;
      n2173.characters='R$ 0,00';
      F.appendChild(n2173);}
    {const n2174=figma.createText();
      n2174.fontName=FR;
      n2174.fontSize=12.0;
      n2174.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2174.x=292; n2174.y=1141.5;
      n2174.characters='Adicionar produto';
      F.appendChild(n2174);}
    {const n2175=figma.createText();
      n2175.fontName=FR;
      n2175.fontSize=11.0;
      n2175.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2175.x=265; n2175.y=1162;
      n2175.characters='Outros (descrição livre)';
      F.appendChild(n2175);}
    {const n2176=figma.createText();
      n2176.fontName=FR;
      n2176.fontSize=13.0;
      n2176.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2176.x=274; n2176.y=1185.5;
      n2176.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n2176);}
    {const n2177=figma.createText();
      n2177.fontName=FR;
      n2177.fontSize=11.0;
      n2177.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2177.x=1014.7; n2177.y=1226;
      n2177.characters='Subtotal dos produtos';
      F.appendChild(n2177);}
    {const n2178=figma.createText();
      n2178.fontName=FB;
      n2178.fontSize=13.0;
      n2178.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2178.x=1185; n2178.y=1226;
      n2178.characters='R$ 0,00';
      F.appendChild(n2178);}
    {const n2179=figma.createFrame();
      n2179.x=265.0; n2179.y=1276.0;
      n2179.resize(Math.max(1,20),Math.max(1,20));
      n2179.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2179.clipsContent=false;
      n2179.cornerRadius=50.0;
      F.appendChild(n2179);
      {const n2180=figma.createText();
        n2180.fontName=FB;
        n2180.fontSize=9.0;
        n2180.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2180.x=6.8; n2180.y=4.5;
        n2180.characters='6';
        n2179.appendChild(n2180);}
    }
    {const n2181=figma.createText();
      n2181.fontName=FB;
      n2181.fontSize=13.0;
      n2181.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2181.x=295; n2181.y=1278;
      n2181.characters='Financeiro';
      F.appendChild(n2181);}
    {const n2182=figma.createText();
      n2182.fontName=FR;
      n2182.fontSize=11.0;
      n2182.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2182.x=265; n2182.y=1321;
      n2182.characters='Desconto (R$)';
      F.appendChild(n2182);}
    {const n2183=figma.createText();
      n2183.fontName=FR;
      n2183.fontSize=13.0;
      n2183.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2183.x=274; n2183.y=1344.5;
      n2183.characters='0';
      F.appendChild(n2183);}
    {const n2184=figma.createText();
      n2184.fontName=FR;
      n2184.fontSize=11.0;
      n2184.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2184.x=757; n2184.y=1321;
      n2184.characters='Frete (R$)';
      F.appendChild(n2184);}
    {const n2185=figma.createText();
      n2185.fontName=FR;
      n2185.fontSize=13.0;
      n2185.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2185.x=766; n2185.y=1344.5;
      n2185.characters='0,00';
      F.appendChild(n2185);}
    {const n2186=figma.createText();
      n2186.fontName=FR;
      n2186.fontSize=11.0;
      n2186.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2186.x=265; n2186.y=1377;
      n2186.characters='Total do Pedido';
      F.appendChild(n2186);}
    {const n2187=figma.createText();
      n2187.fontName=FB;
      n2187.fontSize=20.0;
      n2187.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2187.x=281; n2187.y=1404.5;
      n2187.characters='R$ 0,00';
      F.appendChild(n2187);}
    {const n2188=figma.createFrame();
      n2188.x=265.0; n2188.y=1473.0;
      n2188.resize(Math.max(1,20),Math.max(1,20));
      n2188.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2188.clipsContent=false;
      n2188.cornerRadius=50.0;
      F.appendChild(n2188);
      {const n2189=figma.createText();
        n2189.fontName=FB;
        n2189.fontSize=9.0;
        n2189.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2189.x=7.2; n2189.y=4.5;
        n2189.characters='7';
        n2188.appendChild(n2189);}
    }
    {const n2190=figma.createText();
      n2190.fontName=FB;
      n2190.fontSize=13.0;
      n2190.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2190.x=295; n2190.y=1475;
      n2190.characters='Pagamento';
      F.appendChild(n2190);}
    {const n2191=figma.createText();
      n2191.fontName=FB;
      n2191.fontSize=10.0;
      n2191.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2191.x=265; n2191.y=1518;
      n2191.characters='Forma';
      F.appendChild(n2191);}
    {const n2192=figma.createText();
      n2192.fontName=FB;
      n2192.fontSize=10.0;
      n2192.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2192.x=411; n2192.y=1518;
      n2192.characters='Data Pgto';
      F.appendChild(n2192);}
    {const n2193=figma.createText();
      n2193.fontName=FB;
      n2193.fontSize=10.0;
      n2193.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2193.x=541; n2193.y=1518;
      n2193.characters='Valor (R$)';
      F.appendChild(n2193);}
    {const n2194=figma.createText();
      n2194.fontName=FB;
      n2194.fontSize=10.0;
      n2194.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2194.x=657; n2194.y=1518;
      n2194.characters='Confirm.';
      F.appendChild(n2194);}
    {const n2195=figma.createText();
      n2195.fontName=FR;
      n2195.fontSize=13.0;
      n2195.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2195.x=274; n2195.y=1550.5;
      n2195.characters='— Forma —';
      F.appendChild(n2195);}
    {const n2196=figma.createText();
      n2196.fontName=FR;
      n2196.fontSize=13.3;
      n2196.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2196.x=699; n2196.y=1550;
      n2196.characters='on';
      F.appendChild(n2196);}
    {const n2197=figma.createText();
      n2197.fontName=FR;
      n2197.fontSize=12.0;
      n2197.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2197.x=292; n2197.y=1585.5;
      n2197.characters='Adicionar parcela';
      F.appendChild(n2197);}
    {const n2198=figma.createText();
      n2198.fontName=FR;
      n2198.fontSize=12.0;
      n2198.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2198.x=280; n2198.y=1631;
      n2198.characters='Total do pedido';
      F.appendChild(n2198);}
    {const n2199=figma.createText();
      n2199.fontName=FR;
      n2199.fontSize=12.0;
      n2199.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2199.x=1173.8; n2199.y=1632.5;
      n2199.characters='R$ 0,00';
      F.appendChild(n2199);}
    {const n2200=figma.createText();
      n2200.fontName=FR;
      n2200.fontSize=12.0;
      n2200.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2200.x=280; n2200.y=1651;
      n2200.characters='Total pago';
      F.appendChild(n2200);}
    {const n2201=figma.createText();
      n2201.fontName=FR;
      n2201.fontSize=12.0;
      n2201.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2201.x=1173.8; n2201.y=1652.5;
      n2201.characters='R$ 0,00';
      F.appendChild(n2201);}
    {const n2202=figma.createText();
      n2202.fontName=FB;
      n2202.fontSize=12.0;
      n2202.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2202.x=280; n2202.y=1671.5;
      n2202.characters='Falta pagar';
      F.appendChild(n2202);}
    {const n2203=figma.createText();
      n2203.fontName=FB;
      n2203.fontSize=12.0;
      n2203.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2203.x=1165.8; n2203.y=1673;
      n2203.characters='R$ 0,00';
      F.appendChild(n2203);}
    {const n2204=figma.createText();
      n2204.fontName=FR;
      n2204.fontSize=13.3;
      n2204.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2204.x=289; n2204.y=1704.5;
      n2204.characters='on';
      F.appendChild(n2204);}
    {const n2205=figma.createText();
      n2205.fontName=FR;
      n2205.fontSize=12.0;
      n2205.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2205.x=300; n2205.y=1704;
      n2205.characters='Vai pagar na retirada';
      F.appendChild(n2205);}
    {const n2206=figma.createFrame();
      n2206.x=265.0; n2206.y=1768.0;
      n2206.resize(Math.max(1,20),Math.max(1,20));
      n2206.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2206.clipsContent=false;
      n2206.cornerRadius=50.0;
      F.appendChild(n2206);
      {const n2207=figma.createText();
        n2207.fontName=FB;
        n2207.fontSize=9.0;
        n2207.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2207.x=6.8; n2207.y=4.5;
        n2207.characters='8';
        n2206.appendChild(n2207);}
    }
    {const n2208=figma.createText();
      n2208.fontName=FB;
      n2208.fontSize=13.0;
      n2208.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2208.x=295; n2208.y=1770;
      n2208.characters='Entrega';
      F.appendChild(n2208);}
    {const n2209=figma.createText();
      n2209.fontName=FR;
      n2209.fontSize=11.0;
      n2209.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2209.x=265; n2209.y=1813;
      n2209.characters='Data de Entrega';
      F.appendChild(n2209);}
    {const n2210=figma.createText();
      n2210.fontName=FR;
      n2210.fontSize=11.0;
      n2210.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2210.x=352.7; n2210.y=1813;
      n2210.characters='*';
      F.appendChild(n2210);}
    {const n2211=figma.createText();
      n2211.fontName=FR;
      n2211.fontSize=11.0;
      n2211.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2211.x=757; n2211.y=1813;
      n2211.characters='Modalidade';
      F.appendChild(n2211);}
    {const n2212=figma.createText();
      n2212.fontName=FR;
      n2212.fontSize=11.0;
      n2212.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2212.x=820.4; n2212.y=1813;
      n2212.characters='*';
      F.appendChild(n2212);}
    {const n2213=figma.createText();
      n2213.fontName=FB;
      n2213.fontSize=10.0;
      n2213.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2213.x=265; n2213.y=1874.5;
      n2213.characters='Destinatário';
      F.appendChild(n2213);}
    {const n2214=figma.createText();
      n2214.fontName=FR;
      n2214.fontSize=13.3;
      n2214.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2214.x=1083.7; n2214.y=1873.5;
      n2214.characters='on';
      F.appendChild(n2214);}
    {const n2215=figma.createText();
      n2215.fontName=FR;
      n2215.fontSize=12.0;
      n2215.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2215.x=1093.7; n2215.y=1873;
      n2215.characters='Mesmo que o comprador';
      F.appendChild(n2215);}
    {const n2216=figma.createText();
      n2216.fontName=FR;
      n2216.fontSize=11.0;
      n2216.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2216.x=265; n2216.y=1907;
      n2216.characters='Nome do Destinatário';
      F.appendChild(n2216);}
    {const n2217=figma.createText();
      n2217.fontName=FR;
      n2217.fontSize=11.0;
      n2217.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2217.x=383.5; n2217.y=1907;
      n2217.characters='*';
      F.appendChild(n2217);}
    {const n2218=figma.createText();
      n2218.fontName=FR;
      n2218.fontSize=11.0;
      n2218.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2218.x=265; n2218.y=1963;
      n2218.characters='Telefone';
      F.appendChild(n2218);}
    {const n2219=figma.createText();
      n2219.fontName=FR;
      n2219.fontSize=11.0;
      n2219.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2219.x=757; n2219.y=1963;
      n2219.characters='CPF';
      F.appendChild(n2219);}
    {const n2220=figma.createText();
      n2220.fontName=FR;
      n2220.fontSize=11.0;
      n2220.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2220.x=265; n2220.y=2019;
      n2220.characters='Email';
      F.appendChild(n2220);}
    {const n2221=figma.createText();
      n2221.fontName=FB;
      n2221.fontSize=10.0;
      n2221.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2221.x=265; n2221.y=2079;
      n2221.characters='Endereço';
      F.appendChild(n2221);}
    {const n2222=figma.createText();
      n2222.fontName=FR;
      n2222.fontSize=11.0;
      n2222.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2222.x=265; n2222.y=2110;
      n2222.characters='CEP';
      F.appendChild(n2222);}
    {const n2223=figma.createText();
      n2223.fontName=FR;
      n2223.fontSize=13.0;
      n2223.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2223.x=274; n2223.y=2133.5;
      n2223.characters='00000-000';
      F.appendChild(n2223);}
    {const n2224=figma.createText();
      n2224.fontName=FR;
      n2224.fontSize=11.0;
      n2224.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2224.x=265; n2224.y=2166;
      n2224.characters='Logradouro';
      F.appendChild(n2224);}
    {const n2225=figma.createText();
      n2225.fontName=FR;
      n2225.fontSize=11.0;
      n2225.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2225.x=593; n2225.y=2166;
      n2225.characters='Número';
      F.appendChild(n2225);}
    {const n2226=figma.createText();
      n2226.fontName=FR;
      n2226.fontSize=11.0;
      n2226.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2226.x=265; n2226.y=2222;
      n2226.characters='Complemento';
      F.appendChild(n2226);}
    {const n2227=figma.createText();
      n2227.fontName=FR;
      n2227.fontSize=13.0;
      n2227.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2227.x=274; n2227.y=2245.5;
      n2227.characters='Apto, Bloco… (opcional)';
      F.appendChild(n2227);}
    {const n2228=figma.createText();
      n2228.fontName=FR;
      n2228.fontSize=11.0;
      n2228.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2228.x=511; n2228.y=2222;
      n2228.characters='Bairro';
      F.appendChild(n2228);}
    {const n2229=figma.createText();
      n2229.fontName=FR;
      n2229.fontSize=11.0;
      n2229.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2229.x=757; n2229.y=2222;
      n2229.characters='Cidade';
      F.appendChild(n2229);}
    {const n2230=figma.createText();
      n2230.fontName=FR;
      n2230.fontSize=11.0;
      n2230.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2230.x=265; n2230.y=2278;
      n2230.characters='UF';
      F.appendChild(n2230);}
    {const n2231=figma.createText();
      n2231.fontName=FR;
      n2231.fontSize=13.0;
      n2231.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2231.x=274; n2231.y=2301.5;
      n2231.characters='SP';
      F.appendChild(n2231);}
    {const n2232=figma.createText();
      n2232.fontName=FB;
      n2232.fontSize=10.0;
      n2232.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2232.x=265; n2232.y=2338;
      n2232.characters='Observações';
      F.appendChild(n2232);}
    {const n2233=figma.createText();
      n2233.fontName=FR;
      n2233.fontSize=11.0;
      n2233.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2233.x=265; n2233.y=2369;
      n2233.characters='Obs. Fábrica';
      F.appendChild(n2233);}
    {const n2234=figma.createText();
      n2234.fontName=FR;
      n2234.fontSize=11.0;
      n2234.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2234.x=757; n2234.y=2369;
      n2234.characters='Info Motoboy';
      F.appendChild(n2234);}
    {const n2235=figma.createText();
      n2235.fontName=FB;
      n2235.fontSize=9.0;
      n2235.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n2235.x=271.8; n2235.y=2483.5;
      n2235.characters='9';
      F.appendChild(n2235);}
    {const n2236=figma.createText();
      n2236.fontName=FR;
      n2236.fontSize=12.0;
      n2236.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2236.x=295; n2236.y=2481.5;
      n2236.characters='Controle Interno';
      F.appendChild(n2236);}
    {const n2237=figma.createText();
      n2237.fontName=FR;
      n2237.fontSize=11.0;
      n2237.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2237.x=1088.2; n2237.y=2482.5;
      n2237.characters='Uso interno da operação';
      F.appendChild(n2237);}
    {const n2238=figma.createText();
      n2238.fontName=FR;
      n2238.fontSize=10.0;
      n2238.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2238.x=1225.1; n2238.y=2485.1;
      n2238.characters='▼';
      F.appendChild(n2238);}
    {const n2239=figma.createText();
      n2239.fontName=FR;
      n2239.fontSize=10.0;
      n2239.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2239.x=248; n2239.y=1060;
      n2239.characters='Pedido';
      F.appendChild(n2239);}
    {const n2240=figma.createText();
      n2240.fontName=FB;
      n2240.fontSize=13.0;
      n2240.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2240.x=248; n2240.y=1074;
      n2240.characters='#25860';
      F.appendChild(n2240);}
    {const n2241=figma.createText();
      n2241.fontName=FR;
      n2241.fontSize=10.0;
      n2241.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2241.x=327.9; n2241.y=1060;
      n2241.characters='Total';
      F.appendChild(n2241);}
    {const n2242=figma.createText();
      n2242.fontName=FB;
      n2242.fontSize=13.0;
      n2242.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2242.x=327.9; n2242.y=1074;
      n2242.characters='R$ 0,00';
      F.appendChild(n2242);}
    {const n2243=figma.createText();
      n2243.fontName=FR;
      n2243.fontSize=10.0;
      n2243.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2243.x=414.9; n2243.y=1060;
      n2243.characters='Falta pagar';
      F.appendChild(n2243);}
    {const n2244=figma.createText();
      n2244.fontName=FB;
      n2244.fontSize=13.0;
      n2244.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2244.x=414.9; n2244.y=1074;
      n2244.characters='R$ 0,00';
      F.appendChild(n2244);}
    {const n2245=figma.createText();
      n2245.fontName=FR;
      n2245.fontSize=13.0;
      n2245.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2245.x=1018.7; n2245.y=1066;
      n2245.characters='Limpar';
      F.appendChild(n2245);}
    {const n2246=figma.createFrame();
      n2246.x=1083.2; n2246.y=1057.0;
      n2246.resize(Math.max(1,168.8),Math.max(1,34));
      n2246.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2246.clipsContent=false;
      n2246.cornerRadius=4.0;
      F.appendChild(n2246);
      {const n2247=figma.createText();
        n2247.fontName=FB;
        n2247.fontSize=13.0;
        n2247.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2247.x=39; n2247.y=9;
        n2247.characters='Cadastrar Pedido';
        n2246.appendChild(n2247);}
    }
    {const n2248=figma.createText();
      n2248.fontName=FR;
      n2248.fontSize=11.0;
      n2248.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2248.x=30; n2248.y=2599;
      n2248.characters='Pedido #25859 salvo na planilha · Nº atualizado para #25860';
      F.appendChild(n2248);}
    {const n2249=figma.createText();
      n2249.fontName=FR;
      n2249.fontSize=11.0;
      n2249.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2249.x=1241.8; n2249.y=2600;
      n2249.characters='v4.2';
      F.appendChild(n2249);}
  }
  await Promise.resolve();

  // ── B7: Autocomplete aberto — busca 'BIC'
  {const F=figma.createFrame();
    F.x=17680; F.y=0;
    F.resize(1280,2567);
    F.name='B7 — Autocomplete aberto — busca \'BIC\'';
    F.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
    F.clipsContent=true;
    pg.appendChild(F);
    {const n2250=figma.createFrame();
      n2250.x=0.0; n2250.y=0.0;
      n2250.resize(Math.max(1,1280),Math.max(1,38));
      n2250.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2250.clipsContent=false;
      F.appendChild(n2250);
      {const n2251=figma.createFrame();
        n2251.x=14.0; n2251.y=8.0;
        n2251.resize(Math.max(1,22),Math.max(1,22));
        n2251.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n2251.clipsContent=false;
        n2251.cornerRadius=5.0;
        n2250.appendChild(n2251);
        {const n2252=figma.createText();
          n2252.fontName=FB;
          n2252.fontSize=10.0;
          n2252.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n2252.x=2.5; n2252.y=5;
          n2252.characters='MC';
          n2251.appendChild(n2252);}
      }
      {const n2253=figma.createText();
        n2253.fontName=FR;
        n2253.fontSize=13.0;
        n2253.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2253.x=44; n2253.y=11;
        n2253.characters='Maria Cacau — Gestão de Pedidos';
        n2250.appendChild(n2253);}
    }
    {const n2254=figma.createFrame();
      n2254.x=0.0; n2254.y=38.0;
      n2254.resize(Math.max(1,220),Math.max(1,2501));
      n2254.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2254.clipsContent=false;
      F.appendChild(n2254);
      {const n2255=figma.createFrame();
        n2255.x=14.0; n2255.y=14.0;
        n2255.resize(Math.max(1,38),Math.max(1,38));
        n2255.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
        n2255.clipsContent=false;
        n2255.cornerRadius=8.0;
        n2254.appendChild(n2255);
        {const n2256=figma.createText();
          n2256.fontName=FB;
          n2256.fontSize=14.0;
          n2256.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
          n2256.x=7.5; n2256.y=10.5;
          n2256.characters='MC';
          n2255.appendChild(n2256);}
      }
      {const n2257=figma.createText();
        n2257.fontName=FB;
        n2257.fontSize=13.0;
        n2257.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2257.x=62; n2257.y=18.5;
        n2257.characters='Maria Cacau';
        n2254.appendChild(n2257);}
      {const n2258=figma.createText();
        n2258.fontName=FR;
        n2258.fontSize=10.0;
        n2258.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2258.x=62; n2258.y=35.5;
        n2258.characters='Gestão de Pedidos';
        n2254.appendChild(n2258);}
      {const n2259=figma.createText();
        n2259.fontName=FB;
        n2259.fontSize=10.0;
        n2259.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2259.x=16; n2259.y=85;
        n2259.characters='Pedidos';
        n2254.appendChild(n2259);}
      {const n2260=figma.createFrame();
        n2260.x=8.0; n2260.y=101.0;
        n2260.resize(Math.max(1,204),Math.max(1,34));
        n2260.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.140}];
        n2260.clipsContent=false;
        n2260.cornerRadius=8.0;
        n2254.appendChild(n2260);
        {const n2261=figma.createText();
          n2261.fontName=FB;
          n2261.fontSize=13.0;
          n2261.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n2261.x=38; n2261.y=9;
          n2261.characters='Novo Pedido';
          n2260.appendChild(n2261);}
        {const n2262=figma.createFrame();
          n2262.x=160.4; n2262.y=10.5;
          n2262.resize(Math.max(1,33.6),Math.max(1,13));
          n2262.fills=[{type:'SOLID',color:{r:0.9765,g:0.6588,b:0.4745}}];
          n2262.clipsContent=false;
          n2262.cornerRadius=8.0;
          n2260.appendChild(n2262);
          {const n2263=figma.createText();
            n2263.fontName=FB;
            n2263.fontSize=9.0;
            n2263.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
            n2263.x=5; n2263.y=1;
            n2263.characters='Novo';
            n2262.appendChild(n2263);}
        }
      }
      {const n2264=figma.createText();
        n2264.fontName=FB;
        n2264.fontSize=10.0;
        n2264.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2264.x=16; n2264.y=145;
        n2264.characters='Consultas';
        n2254.appendChild(n2264);}
      {const n2265=figma.createText();
        n2265.fontName=FR;
        n2265.fontSize=13.0;
        n2265.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2265.x=46; n2265.y=170;
        n2265.characters='Produtos';
        n2254.appendChild(n2265);}
      {const n2266=figma.createText();
        n2266.fontName=FR;
        n2266.fontSize=13.0;
        n2266.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2266.x=46; n2266.y=206;
        n2266.characters='Entregas';
        n2254.appendChild(n2266);}
      {const n2267=figma.createText();
        n2267.fontName=FR;
        n2267.fontSize=13.0;
        n2267.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2267.x=46; n2267.y=242;
        n2267.characters='Verificar CPF';
        n2254.appendChild(n2267);}
      {const n2268=figma.createText();
        n2268.fontName=FB;
        n2268.fontSize=10.0;
        n2268.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2268.x=16; n2268.y=277;
        n2268.characters='Em breve';
        n2254.appendChild(n2268);}
      {const n2269=figma.createText();
        n2269.fontName=FR;
        n2269.fontSize=13.0;
        n2269.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2269.x=46; n2269.y=302;
        n2269.characters='Frete por CEP';
        n2254.appendChild(n2269);}
      {const n2270=figma.createFrame();
        n2270.x=169.2; n2270.y=303.5;
        n2270.resize(Math.max(1,32.8),Math.max(1,13));
        n2270.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n2270.clipsContent=false;
        n2270.cornerRadius=8.0;
        n2270.opacity=0.36;
        n2254.appendChild(n2270);
        {const n2271=figma.createText();
          n2271.fontName=FB;
          n2271.fontSize=9.0;
          n2271.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n2271.x=5; n2271.y=1;
          n2271.characters='Logo';
          n2270.appendChild(n2271);}
      }
      {const n2272=figma.createText();
        n2272.fontName=FR;
        n2272.fontSize=13.0;
        n2272.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
        n2272.x=46; n2272.y=338;
        n2272.characters='Nota Fiscal';
        n2254.appendChild(n2272);}
      {const n2273=figma.createFrame();
        n2273.x=169.2; n2273.y=339.5;
        n2273.resize(Math.max(1,32.8),Math.max(1,13));
        n2273.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000},opacity:0.120}];
        n2273.clipsContent=false;
        n2273.cornerRadius=8.0;
        n2273.opacity=0.36;
        n2254.appendChild(n2273);
        {const n2274=figma.createText();
          n2274.fontName=FB;
          n2274.fontSize=9.0;
          n2274.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
          n2274.x=5; n2274.y=1;
          n2274.characters='Logo';
          n2273.appendChild(n2274);}
      }
    }
    {const n2275=figma.createText();
      n2275.fontName=FB;
      n2275.fontSize=20.0;
      n2275.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2275.x=248; n2275.y=62;
      n2275.characters='Novo Pedido';
      F.appendChild(n2275);}
    {const n2276=figma.createText();
      n2276.fontName=FR;
      n2276.fontSize=13.0;
      n2276.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2276.x=248; n2276.y=88;
      n2276.characters='Preencha os dados e clique em Cadastrar Pedido para salvar na planilha';
      F.appendChild(n2276);}
    {const n2277=figma.createFrame();
      n2277.x=265.0; n2277.y=133.0;
      n2277.resize(Math.max(1,20),Math.max(1,20));
      n2277.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2277.clipsContent=false;
      n2277.cornerRadius=50.0;
      F.appendChild(n2277);
      {const n2278=figma.createText();
        n2278.fontName=FB;
        n2278.fontSize=9.0;
        n2278.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2278.x=7.6; n2278.y=4.5;
        n2278.characters='1';
        n2277.appendChild(n2278);}
    }
    {const n2279=figma.createText();
      n2279.fontName=FB;
      n2279.fontSize=13.0;
      n2279.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2279.x=295; n2279.y=135;
      n2279.characters='Identificação do Pedido';
      F.appendChild(n2279);}
    {const n2280=figma.createText();
      n2280.fontName=FR;
      n2280.fontSize=11.0;
      n2280.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2280.x=265; n2280.y=178;
      n2280.characters='Nº Pedido';
      F.appendChild(n2280);}
    {const n2281=figma.createText();
      n2281.fontName=FR;
      n2281.fontSize=11.0;
      n2281.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2281.x=319.2; n2281.y=178;
      n2281.characters='*';
      F.appendChild(n2281);}
    {const n2282=figma.createText();
      n2282.fontName=FR;
      n2282.fontSize=13.0;
      n2282.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2282.x=274; n2282.y=201.5;
      n2282.characters='25865';
      F.appendChild(n2282);}
    {const n2283=figma.createText();
      n2283.fontName=FR;
      n2283.fontSize=11.0;
      n2283.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2283.x=757; n2283.y=178;
      n2283.characters='Como Conheceu';
      F.appendChild(n2283);}
    {const n2284=figma.createFrame();
      n2284.x=265.0; n2284.y=260.0;
      n2284.resize(Math.max(1,20),Math.max(1,20));
      n2284.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2284.clipsContent=false;
      n2284.cornerRadius=50.0;
      F.appendChild(n2284);
      {const n2285=figma.createText();
        n2285.fontName=FB;
        n2285.fontSize=9.0;
        n2285.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2285.x=7; n2285.y=4.5;
        n2285.characters='2';
        n2284.appendChild(n2285);}
    }
    {const n2286=figma.createText();
      n2286.fontName=FB;
      n2286.fontSize=13.0;
      n2286.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2286.x=295; n2286.y=262;
      n2286.characters='Comprador';
      F.appendChild(n2286);}
    {const n2287=figma.createText();
      n2287.fontName=FR;
      n2287.fontSize=11.0;
      n2287.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2287.x=265; n2287.y=305;
      n2287.characters='Nome do Comprador';
      F.appendChild(n2287);}
    {const n2288=figma.createText();
      n2288.fontName=FR;
      n2288.fontSize=11.0;
      n2288.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2288.x=378.2; n2288.y=305;
      n2288.characters='*';
      F.appendChild(n2288);}
    {const n2289=figma.createText();
      n2289.fontName=FR;
      n2289.fontSize=11.0;
      n2289.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2289.x=265; n2289.y=361;
      n2289.characters='Parentesco';
      F.appendChild(n2289);}
    {const n2290=figma.createText();
      n2290.fontName=FR;
      n2290.fontSize=11.0;
      n2290.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2290.x=757; n2290.y=361;
      n2290.characters='Telefone';
      F.appendChild(n2290);}
    {const n2291=figma.createText();
      n2291.fontName=FR;
      n2291.fontSize=11.0;
      n2291.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2291.x=803.6; n2291.y=361;
      n2291.characters='*';
      F.appendChild(n2291);}
    {const n2292=figma.createText();
      n2292.fontName=FR;
      n2292.fontSize=11.0;
      n2292.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2292.x=265; n2292.y=417;
      n2292.characters='CPF';
      F.appendChild(n2292);}
    {const n2293=figma.createText();
      n2293.fontName=FR;
      n2293.fontSize=11.0;
      n2293.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2293.x=757; n2293.y=417;
      n2293.characters='Email';
      F.appendChild(n2293);}
    {const n2294=figma.createFrame();
      n2294.x=265.0; n2294.y=499.0;
      n2294.resize(Math.max(1,20),Math.max(1,20));
      n2294.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2294.clipsContent=false;
      n2294.cornerRadius=50.0;
      F.appendChild(n2294);
      {const n2295=figma.createText();
        n2295.fontName=FB;
        n2295.fontSize=9.0;
        n2295.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2295.x=6.9; n2295.y=4.5;
        n2295.characters='3';
        n2294.appendChild(n2295);}
    }
    {const n2296=figma.createText();
      n2296.fontName=FB;
      n2296.fontSize=13.0;
      n2296.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2296.x=295; n2296.y=501;
      n2296.characters='Presenteado & Evento';
      F.appendChild(n2296);}
    {const n2297=figma.createText();
      n2297.fontName=FR;
      n2297.fontSize=11.0;
      n2297.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2297.x=265; n2297.y=544;
      n2297.characters='Nome do Presenteado';
      F.appendChild(n2297);}
    {const n2298=figma.createText();
      n2298.fontName=FR;
      n2298.fontSize=11.0;
      n2298.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2298.x=265; n2298.y=600;
      n2298.characters='Sexo';
      F.appendChild(n2298);}
    {const n2299=figma.createText();
      n2299.fontName=FR;
      n2299.fontSize=11.0;
      n2299.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2299.x=289.5; n2299.y=624.5;
      n2299.characters='Feminino';
      F.appendChild(n2299);}
    {const n2300=figma.createText();
      n2300.fontName=FR;
      n2300.fontSize=11.0;
      n2300.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2300.x=382.09999999999997; n2300.y=624.5;
      n2300.characters='Masculino';
      F.appendChild(n2300);}
    {const n2301=figma.createText();
      n2301.fontName=FR;
      n2301.fontSize=11.0;
      n2301.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2301.x=482.7; n2301.y=624.5;
      n2301.characters='Gêmeas';
      F.appendChild(n2301);}
    {const n2302=figma.createText();
      n2302.fontName=FR;
      n2302.fontSize=11.0;
      n2302.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2302.x=577.9000000000001; n2302.y=624.5;
      n2302.characters='Gêmeos';
      F.appendChild(n2302);}
    {const n2303=figma.createText();
      n2303.fontName=FR;
      n2303.fontSize=11.0;
      n2303.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2303.x=670.2; n2303.y=624.5;
      n2303.characters='Não sabe';
      F.appendChild(n2303);}
    {const n2304=figma.createText();
      n2304.fontName=FR;
      n2304.fontSize=11.0;
      n2304.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2304.x=757; n2304.y=600;
      n2304.characters='Tipo de Evento';
      F.appendChild(n2304);}
    {const n2305=figma.createText();
      n2305.fontName=FR;
      n2305.fontSize=11.0;
      n2305.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2305.x=265; n2305.y=656;
      n2305.characters='Data do Evento';
      F.appendChild(n2305);}
    {const n2306=figma.createFrame();
      n2306.x=265.0; n2306.y=738.0;
      n2306.resize(Math.max(1,20),Math.max(1,20));
      n2306.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2306.clipsContent=false;
      n2306.cornerRadius=50.0;
      F.appendChild(n2306);
      {const n2307=figma.createText();
        n2307.fontName=FB;
        n2307.fontSize=9.0;
        n2307.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2307.x=6.8; n2307.y=4.5;
        n2307.characters='4';
        n2306.appendChild(n2307);}
    }
    {const n2308=figma.createText();
      n2308.fontName=FB;
      n2308.fontSize=13.0;
      n2308.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2308.x=295; n2308.y=740;
      n2308.characters='Personalização';
      F.appendChild(n2308);}
    {const n2309=figma.createText();
      n2309.fontName=FR;
      n2309.fontSize=11.0;
      n2309.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2309.x=1138; n2309.y=741.5;
      n2309.characters='Arte & embalagem';
      F.appendChild(n2309);}
    {const n2310=figma.createText();
      n2310.fontName=FR;
      n2310.fontSize=11.0;
      n2310.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2310.x=265; n2310.y=783;
      n2310.characters='Nome da Etiqueta';
      F.appendChild(n2310);}
    {const n2311=figma.createText();
      n2311.fontName=FR;
      n2311.fontSize=11.0;
      n2311.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2311.x=757; n2311.y=783;
      n2311.characters='Tema da Etiqueta';
      F.appendChild(n2311);}
    {const n2312=figma.createText();
      n2312.fontName=FR;
      n2312.fontSize=11.0;
      n2312.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2312.x=265; n2312.y=839;
      n2312.characters='Nome na Caixa';
      F.appendChild(n2312);}
    {const n2313=figma.createText();
      n2313.fontName=FR;
      n2313.fontSize=11.0;
      n2313.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2313.x=757; n2313.y=839;
      n2313.characters='Arte / Tecido da Caixa';
      F.appendChild(n2313);}
    {const n2314=figma.createText();
      n2314.fontName=FR;
      n2314.fontSize=11.0;
      n2314.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2314.x=265; n2314.y=895;
      n2314.characters='Valor Rótulo Clássico (R$)';
      F.appendChild(n2314);}
    {const n2315=figma.createText();
      n2315.fontName=FR;
      n2315.fontSize=13.0;
      n2315.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2315.x=274; n2315.y=918.5;
      n2315.characters='0';
      F.appendChild(n2315);}
    {const n2316=figma.createFrame();
      n2316.x=265.0; n2316.y=977.0;
      n2316.resize(Math.max(1,20),Math.max(1,20));
      n2316.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2316.clipsContent=false;
      n2316.cornerRadius=50.0;
      F.appendChild(n2316);
      {const n2317=figma.createText();
        n2317.fontName=FB;
        n2317.fontSize=9.0;
        n2317.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2317.x=6.9; n2317.y=4.5;
        n2317.characters='5';
        n2316.appendChild(n2317);}
    }
    {const n2318=figma.createText();
      n2318.fontName=FB;
      n2318.fontSize=13.0;
      n2318.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2318.x=295; n2318.y=979;
      n2318.characters='Produtos';
      F.appendChild(n2318);}
    {const n2319=figma.createText();
      n2319.fontName=FR;
      n2319.fontSize=11.0;
      n2319.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2319.x=1203.9; n2319.y=980.5;
      n2319.characters='1 item';
      F.appendChild(n2319);}
    {const n2320=figma.createText();
      n2320.fontName=FB;
      n2320.fontSize=10.0;
      n2320.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2320.x=265; n2320.y=1022;
      n2320.characters='Produto';
      F.appendChild(n2320);}
    {const n2321=figma.createText();
      n2321.fontName=FB;
      n2321.fontSize=10.0;
      n2321.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2321.x=937; n2321.y=1022;
      n2321.characters='Qtd';
      F.appendChild(n2321);}
    {const n2322=figma.createText();
      n2322.fontName=FB;
      n2322.fontSize=10.0;
      n2322.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2322.x=1007; n2322.y=1022;
      n2322.characters='R$ Unit.';
      F.appendChild(n2322);}
    {const n2323=figma.createText();
      n2323.fontName=FB;
      n2323.fontSize=10.0;
      n2323.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2323.x=1113; n2323.y=1022;
      n2323.characters='Total';
      F.appendChild(n2323);}
    {const n2324=figma.createText();
      n2324.fontName=FR;
      n2324.fontSize=13.0;
      n2324.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2324.x=274; n2324.y=1054.5;
      n2324.characters='BIC';
      F.appendChild(n2324);}
    {const n2325=figma.createText();
      n2325.fontName=FR;
      n2325.fontSize=11.0;
      n2325.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2325.x=276; n2325.y=1090;
      n2325.characters='BIC001';
      F.appendChild(n2325);}
    {const n2326=figma.createText();
      n2326.fontName=FR;
      n2326.fontSize=12.0;
      n2326.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2326.x=320.3; n2326.y=1086;
      n2326.characters='Bichinho Virtual personalizado + Cordão';
      F.appendChild(n2326);}
    {const n2327=figma.createText();
      n2327.fontName=FR;
      n2327.fontSize=11.0;
      n2327.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2327.x=276; n2327.y=1119;
      n2327.characters='BIC002';
      F.appendChild(n2327);}
    {const n2328=figma.createText();
      n2328.fontName=FR;
      n2328.fontSize=12.0;
      n2328.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2328.x=320.3; n2328.y=1115;
      n2328.characters='Bichinho Virtual com Caixinha Acetato + Cordão';
      F.appendChild(n2328);}
    {const n2329=figma.createText();
      n2329.fontName=FR;
      n2329.fontSize=13.0;
      n2329.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2329.x=946; n2329.y=1054.5;
      n2329.characters='1';
      F.appendChild(n2329);}
    {const n2330=figma.createText();
      n2330.fontName=FR;
      n2330.fontSize=12.0;
      n2330.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2330.x=1123; n2330.y=1056;
      n2330.characters='R$ 0,00';
      F.appendChild(n2330);}
    {const n2331=figma.createText();
      n2331.fontName=FR;
      n2331.fontSize=12.0;
      n2331.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2331.x=292; n2331.y=1089.5;
      n2331.characters='Adicionar produto';
      F.appendChild(n2331);}
    {const n2332=figma.createText();
      n2332.fontName=FR;
      n2332.fontSize=11.0;
      n2332.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2332.x=265; n2332.y=1110;
      n2332.characters='Outros (descrição livre)';
      F.appendChild(n2332);}
    {const n2333=figma.createText();
      n2333.fontName=FR;
      n2333.fontSize=13.0;
      n2333.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2333.x=274; n2333.y=1133.5;
      n2333.characters='Produtos fora da lista ou observações adicionais';
      F.appendChild(n2333);}
    {const n2334=figma.createText();
      n2334.fontName=FR;
      n2334.fontSize=11.0;
      n2334.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2334.x=1014.7; n2334.y=1174;
      n2334.characters='Subtotal dos produtos';
      F.appendChild(n2334);}
    {const n2335=figma.createText();
      n2335.fontName=FB;
      n2335.fontSize=13.0;
      n2335.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2335.x=1185; n2335.y=1174;
      n2335.characters='R$ 0,00';
      F.appendChild(n2335);}
    {const n2336=figma.createFrame();
      n2336.x=265.0; n2336.y=1224.0;
      n2336.resize(Math.max(1,20),Math.max(1,20));
      n2336.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2336.clipsContent=false;
      n2336.cornerRadius=50.0;
      F.appendChild(n2336);
      {const n2337=figma.createText();
        n2337.fontName=FB;
        n2337.fontSize=9.0;
        n2337.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2337.x=6.8; n2337.y=4.5;
        n2337.characters='6';
        n2336.appendChild(n2337);}
    }
    {const n2338=figma.createText();
      n2338.fontName=FB;
      n2338.fontSize=13.0;
      n2338.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2338.x=295; n2338.y=1226;
      n2338.characters='Financeiro';
      F.appendChild(n2338);}
    {const n2339=figma.createText();
      n2339.fontName=FR;
      n2339.fontSize=11.0;
      n2339.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2339.x=265; n2339.y=1269;
      n2339.characters='Desconto (R$)';
      F.appendChild(n2339);}
    {const n2340=figma.createText();
      n2340.fontName=FR;
      n2340.fontSize=13.0;
      n2340.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2340.x=274; n2340.y=1292.5;
      n2340.characters='0';
      F.appendChild(n2340);}
    {const n2341=figma.createText();
      n2341.fontName=FR;
      n2341.fontSize=11.0;
      n2341.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2341.x=757; n2341.y=1269;
      n2341.characters='Frete (R$)';
      F.appendChild(n2341);}
    {const n2342=figma.createText();
      n2342.fontName=FR;
      n2342.fontSize=13.0;
      n2342.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2342.x=766; n2342.y=1292.5;
      n2342.characters='0,00';
      F.appendChild(n2342);}
    {const n2343=figma.createText();
      n2343.fontName=FR;
      n2343.fontSize=11.0;
      n2343.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2343.x=265; n2343.y=1325;
      n2343.characters='Total do Pedido';
      F.appendChild(n2343);}
    {const n2344=figma.createText();
      n2344.fontName=FB;
      n2344.fontSize=20.0;
      n2344.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2344.x=281; n2344.y=1352.5;
      n2344.characters='R$ 0,00';
      F.appendChild(n2344);}
    {const n2345=figma.createFrame();
      n2345.x=265.0; n2345.y=1421.0;
      n2345.resize(Math.max(1,20),Math.max(1,20));
      n2345.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2345.clipsContent=false;
      n2345.cornerRadius=50.0;
      F.appendChild(n2345);
      {const n2346=figma.createText();
        n2346.fontName=FB;
        n2346.fontSize=9.0;
        n2346.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2346.x=7.2; n2346.y=4.5;
        n2346.characters='7';
        n2345.appendChild(n2346);}
    }
    {const n2347=figma.createText();
      n2347.fontName=FB;
      n2347.fontSize=13.0;
      n2347.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2347.x=295; n2347.y=1423;
      n2347.characters='Pagamento';
      F.appendChild(n2347);}
    {const n2348=figma.createText();
      n2348.fontName=FB;
      n2348.fontSize=10.0;
      n2348.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2348.x=265; n2348.y=1466;
      n2348.characters='Forma';
      F.appendChild(n2348);}
    {const n2349=figma.createText();
      n2349.fontName=FB;
      n2349.fontSize=10.0;
      n2349.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2349.x=411; n2349.y=1466;
      n2349.characters='Data Pgto';
      F.appendChild(n2349);}
    {const n2350=figma.createText();
      n2350.fontName=FB;
      n2350.fontSize=10.0;
      n2350.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2350.x=541; n2350.y=1466;
      n2350.characters='Valor (R$)';
      F.appendChild(n2350);}
    {const n2351=figma.createText();
      n2351.fontName=FB;
      n2351.fontSize=10.0;
      n2351.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2351.x=657; n2351.y=1466;
      n2351.characters='Confirm.';
      F.appendChild(n2351);}
    {const n2352=figma.createText();
      n2352.fontName=FR;
      n2352.fontSize=13.0;
      n2352.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2352.x=274; n2352.y=1498.5;
      n2352.characters='— Forma —';
      F.appendChild(n2352);}
    {const n2353=figma.createText();
      n2353.fontName=FR;
      n2353.fontSize=13.3;
      n2353.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2353.x=699; n2353.y=1498;
      n2353.characters='on';
      F.appendChild(n2353);}
    {const n2354=figma.createText();
      n2354.fontName=FR;
      n2354.fontSize=12.0;
      n2354.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2354.x=292; n2354.y=1533.5;
      n2354.characters='Adicionar parcela';
      F.appendChild(n2354);}
    {const n2355=figma.createText();
      n2355.fontName=FR;
      n2355.fontSize=12.0;
      n2355.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2355.x=280; n2355.y=1579;
      n2355.characters='Total do pedido';
      F.appendChild(n2355);}
    {const n2356=figma.createText();
      n2356.fontName=FR;
      n2356.fontSize=12.0;
      n2356.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2356.x=1173.8; n2356.y=1580.5;
      n2356.characters='R$ 0,00';
      F.appendChild(n2356);}
    {const n2357=figma.createText();
      n2357.fontName=FR;
      n2357.fontSize=12.0;
      n2357.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2357.x=280; n2357.y=1599;
      n2357.characters='Total pago';
      F.appendChild(n2357);}
    {const n2358=figma.createText();
      n2358.fontName=FR;
      n2358.fontSize=12.0;
      n2358.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2358.x=1173.8; n2358.y=1600.5;
      n2358.characters='R$ 0,00';
      F.appendChild(n2358);}
    {const n2359=figma.createText();
      n2359.fontName=FB;
      n2359.fontSize=12.0;
      n2359.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2359.x=280; n2359.y=1619.5;
      n2359.characters='Falta pagar';
      F.appendChild(n2359);}
    {const n2360=figma.createText();
      n2360.fontName=FB;
      n2360.fontSize=12.0;
      n2360.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2360.x=1165.8; n2360.y=1621;
      n2360.characters='R$ 0,00';
      F.appendChild(n2360);}
    {const n2361=figma.createText();
      n2361.fontName=FR;
      n2361.fontSize=13.3;
      n2361.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2361.x=289; n2361.y=1652.5;
      n2361.characters='on';
      F.appendChild(n2361);}
    {const n2362=figma.createText();
      n2362.fontName=FR;
      n2362.fontSize=12.0;
      n2362.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2362.x=300; n2362.y=1652;
      n2362.characters='Vai pagar na retirada';
      F.appendChild(n2362);}
    {const n2363=figma.createFrame();
      n2363.x=265.0; n2363.y=1716.0;
      n2363.resize(Math.max(1,20),Math.max(1,20));
      n2363.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2363.clipsContent=false;
      n2363.cornerRadius=50.0;
      F.appendChild(n2363);
      {const n2364=figma.createText();
        n2364.fontName=FB;
        n2364.fontSize=9.0;
        n2364.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2364.x=6.8; n2364.y=4.5;
        n2364.characters='8';
        n2363.appendChild(n2364);}
    }
    {const n2365=figma.createText();
      n2365.fontName=FB;
      n2365.fontSize=13.0;
      n2365.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2365.x=295; n2365.y=1718;
      n2365.characters='Entrega';
      F.appendChild(n2365);}
    {const n2366=figma.createText();
      n2366.fontName=FR;
      n2366.fontSize=11.0;
      n2366.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2366.x=265; n2366.y=1761;
      n2366.characters='Data de Entrega';
      F.appendChild(n2366);}
    {const n2367=figma.createText();
      n2367.fontName=FR;
      n2367.fontSize=11.0;
      n2367.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2367.x=352.7; n2367.y=1761;
      n2367.characters='*';
      F.appendChild(n2367);}
    {const n2368=figma.createText();
      n2368.fontName=FR;
      n2368.fontSize=11.0;
      n2368.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2368.x=757; n2368.y=1761;
      n2368.characters='Modalidade';
      F.appendChild(n2368);}
    {const n2369=figma.createText();
      n2369.fontName=FR;
      n2369.fontSize=11.0;
      n2369.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2369.x=820.4; n2369.y=1761;
      n2369.characters='*';
      F.appendChild(n2369);}
    {const n2370=figma.createText();
      n2370.fontName=FB;
      n2370.fontSize=10.0;
      n2370.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2370.x=265; n2370.y=1822.5;
      n2370.characters='Destinatário';
      F.appendChild(n2370);}
    {const n2371=figma.createText();
      n2371.fontName=FR;
      n2371.fontSize=13.3;
      n2371.fills=[{type:'SOLID',color:{r:0.0000,g:0.0000,b:0.0000}}];
      n2371.x=1083.7; n2371.y=1821.5;
      n2371.characters='on';
      F.appendChild(n2371);}
    {const n2372=figma.createText();
      n2372.fontName=FR;
      n2372.fontSize=12.0;
      n2372.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2372.x=1093.7; n2372.y=1821;
      n2372.characters='Mesmo que o comprador';
      F.appendChild(n2372);}
    {const n2373=figma.createText();
      n2373.fontName=FR;
      n2373.fontSize=11.0;
      n2373.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2373.x=265; n2373.y=1855;
      n2373.characters='Nome do Destinatário';
      F.appendChild(n2373);}
    {const n2374=figma.createText();
      n2374.fontName=FR;
      n2374.fontSize=11.0;
      n2374.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2374.x=383.5; n2374.y=1855;
      n2374.characters='*';
      F.appendChild(n2374);}
    {const n2375=figma.createText();
      n2375.fontName=FR;
      n2375.fontSize=11.0;
      n2375.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2375.x=265; n2375.y=1911;
      n2375.characters='Telefone';
      F.appendChild(n2375);}
    {const n2376=figma.createText();
      n2376.fontName=FR;
      n2376.fontSize=11.0;
      n2376.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2376.x=757; n2376.y=1911;
      n2376.characters='CPF';
      F.appendChild(n2376);}
    {const n2377=figma.createText();
      n2377.fontName=FR;
      n2377.fontSize=11.0;
      n2377.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2377.x=265; n2377.y=1967;
      n2377.characters='Email';
      F.appendChild(n2377);}
    {const n2378=figma.createText();
      n2378.fontName=FB;
      n2378.fontSize=10.0;
      n2378.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2378.x=265; n2378.y=2027;
      n2378.characters='Endereço';
      F.appendChild(n2378);}
    {const n2379=figma.createText();
      n2379.fontName=FR;
      n2379.fontSize=11.0;
      n2379.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2379.x=265; n2379.y=2058;
      n2379.characters='CEP';
      F.appendChild(n2379);}
    {const n2380=figma.createText();
      n2380.fontName=FR;
      n2380.fontSize=13.0;
      n2380.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2380.x=274; n2380.y=2081.5;
      n2380.characters='00000-000';
      F.appendChild(n2380);}
    {const n2381=figma.createText();
      n2381.fontName=FR;
      n2381.fontSize=11.0;
      n2381.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2381.x=265; n2381.y=2114;
      n2381.characters='Logradouro';
      F.appendChild(n2381);}
    {const n2382=figma.createText();
      n2382.fontName=FR;
      n2382.fontSize=11.0;
      n2382.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2382.x=593; n2382.y=2114;
      n2382.characters='Número';
      F.appendChild(n2382);}
    {const n2383=figma.createText();
      n2383.fontName=FR;
      n2383.fontSize=11.0;
      n2383.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2383.x=265; n2383.y=2170;
      n2383.characters='Complemento';
      F.appendChild(n2383);}
    {const n2384=figma.createText();
      n2384.fontName=FR;
      n2384.fontSize=13.0;
      n2384.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2384.x=274; n2384.y=2193.5;
      n2384.characters='Apto, Bloco… (opcional)';
      F.appendChild(n2384);}
    {const n2385=figma.createText();
      n2385.fontName=FR;
      n2385.fontSize=11.0;
      n2385.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2385.x=511; n2385.y=2170;
      n2385.characters='Bairro';
      F.appendChild(n2385);}
    {const n2386=figma.createText();
      n2386.fontName=FR;
      n2386.fontSize=11.0;
      n2386.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2386.x=757; n2386.y=2170;
      n2386.characters='Cidade';
      F.appendChild(n2386);}
    {const n2387=figma.createText();
      n2387.fontName=FR;
      n2387.fontSize=11.0;
      n2387.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2387.x=265; n2387.y=2226;
      n2387.characters='UF';
      F.appendChild(n2387);}
    {const n2388=figma.createText();
      n2388.fontName=FR;
      n2388.fontSize=13.0;
      n2388.fills=[{type:'SOLID',color:{r:0.7500,g:0.6900,b:0.6600}}];
      n2388.x=274; n2388.y=2249.5;
      n2388.characters='SP';
      F.appendChild(n2388);}
    {const n2389=figma.createText();
      n2389.fontName=FB;
      n2389.fontSize=10.0;
      n2389.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2389.x=265; n2389.y=2286;
      n2389.characters='Observações';
      F.appendChild(n2389);}
    {const n2390=figma.createText();
      n2390.fontName=FR;
      n2390.fontSize=11.0;
      n2390.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2390.x=265; n2390.y=2317;
      n2390.characters='Obs. Fábrica';
      F.appendChild(n2390);}
    {const n2391=figma.createText();
      n2391.fontName=FR;
      n2391.fontSize=11.0;
      n2391.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2391.x=757; n2391.y=2317;
      n2391.characters='Info Motoboy';
      F.appendChild(n2391);}
    {const n2392=figma.createText();
      n2392.fontName=FB;
      n2392.fontSize=9.0;
      n2392.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
      n2392.x=271.8; n2392.y=2431.5;
      n2392.characters='9';
      F.appendChild(n2392);}
    {const n2393=figma.createText();
      n2393.fontName=FR;
      n2393.fontSize=12.0;
      n2393.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2393.x=295; n2393.y=2429.5;
      n2393.characters='Controle Interno';
      F.appendChild(n2393);}
    {const n2394=figma.createText();
      n2394.fontName=FR;
      n2394.fontSize=11.0;
      n2394.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2394.x=1088.2; n2394.y=2430.5;
      n2394.characters='Uso interno da operação';
      F.appendChild(n2394);}
    {const n2395=figma.createText();
      n2395.fontName=FR;
      n2395.fontSize=10.0;
      n2395.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2395.x=1225.1; n2395.y=2433.1;
      n2395.characters='▼';
      F.appendChild(n2395);}
    {const n2396=figma.createText();
      n2396.fontName=FR;
      n2396.fontSize=10.0;
      n2396.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2396.x=248; n2396.y=1060;
      n2396.characters='Pedido';
      F.appendChild(n2396);}
    {const n2397=figma.createText();
      n2397.fontName=FB;
      n2397.fontSize=13.0;
      n2397.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2397.x=248; n2397.y=1074;
      n2397.characters='#25865';
      F.appendChild(n2397);}
    {const n2398=figma.createText();
      n2398.fontName=FR;
      n2398.fontSize=10.0;
      n2398.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2398.x=327.9; n2398.y=1060;
      n2398.characters='Total';
      F.appendChild(n2398);}
    {const n2399=figma.createText();
      n2399.fontName=FB;
      n2399.fontSize=13.0;
      n2399.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2399.x=327.9; n2399.y=1074;
      n2399.characters='R$ 0,00';
      F.appendChild(n2399);}
    {const n2400=figma.createText();
      n2400.fontName=FR;
      n2400.fontSize=10.0;
      n2400.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2400.x=414.9; n2400.y=1060;
      n2400.characters='Falta pagar';
      F.appendChild(n2400);}
    {const n2401=figma.createText();
      n2401.fontName=FB;
      n2401.fontSize=13.0;
      n2401.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2401.x=414.9; n2401.y=1074;
      n2401.characters='R$ 0,00';
      F.appendChild(n2401);}
    {const n2402=figma.createText();
      n2402.fontName=FR;
      n2402.fontSize=13.0;
      n2402.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2402.x=1018.7; n2402.y=1066;
      n2402.characters='Limpar';
      F.appendChild(n2402);}
    {const n2403=figma.createFrame();
      n2403.x=1083.2; n2403.y=1057.0;
      n2403.resize(Math.max(1,168.8),Math.max(1,34));
      n2403.fills=[{type:'SOLID',color:{r:0.2235,g:0.1059,b:0.0627}}];
      n2403.clipsContent=false;
      n2403.cornerRadius=4.0;
      F.appendChild(n2403);
      {const n2404=figma.createText();
        n2404.fontName=FB;
        n2404.fontSize=13.0;
        n2404.fills=[{type:'SOLID',color:{r:1.0000,g:1.0000,b:1.0000}}];
        n2404.x=39; n2404.y=9;
        n2404.characters='Cadastrar Pedido';
        n2403.appendChild(n2404);}
    }
    {const n2405=figma.createText();
      n2405.fontName=FR;
      n2405.fontSize=11.0;
      n2405.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2405.x=30; n2405.y=2547;
      n2405.characters='Autocomplete aberto · 2 resultados para "BIC"';
      F.appendChild(n2405);}
    {const n2406=figma.createText();
      n2406.fontName=FR;
      n2406.fontSize=11.0;
      n2406.fills=[{type:'SOLID',color:{r:0.1220,g:0.0630,b:0.0310}}];
      n2406.x=1241.8; n2406.y=2548;
      n2406.characters='v4.2';
      F.appendChild(n2406);}
  }
  await Promise.resolve();

  figma.viewport.scrollAndZoomIntoView([...pg.children]);
  console.log('✅ HTML Vetorial v2 — 14 frame(s) com hierarquia DOM');
}

main().catch(e => console.error('❌ Erro:', e.message, '\n', e.stack));