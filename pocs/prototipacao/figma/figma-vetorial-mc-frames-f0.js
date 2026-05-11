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

  figma.viewport.scrollAndZoomIntoView([...pg.children]);
  console.log('✅ HTML Vetorial v2 — 1 frame(s) com hierarquia DOM');
}

main().catch(e => console.error('❌ Erro:', e.message, '\n', e.stack));