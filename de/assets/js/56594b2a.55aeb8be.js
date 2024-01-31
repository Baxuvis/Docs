"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7673],{9604:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>g});var r=i(5893),s=i(1151);const d={btn:"btn_JQqO","btn-hover-out":"btn-hover-out_iYUA","btn-hover-in":"btn-hover-in_HPLa"};var t=i(8704);function l(e){let{text:n,url:i}=e;return(0,r.jsxs)("a",{className:d.btn,href:i,children:[(0,r.jsx)(t.Miv,{size:20})," ",n]})}var a=i(2091);const o={sidebar_position:2},c="PDK Einrichtung & Konfiguration - Teil 2",h={id:"palworld-modding-kit/install-part-2",title:"PDK Einrichtung & Konfiguration - Teil 2",description:"Nun da die Voraussetzungen erf\xfcllt sind k\xf6nnen wir mit dem download der SDK starten.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/palworld-modding-kit/install-part-2.mdx",sourceDirName:"palworld-modding-kit",slug:"/palworld-modding-kit/install-part-2",permalink:"/de/docs/palworld-modding-kit/install-part-2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/palworld-modding-kit/install-part-2.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Voraussetzungen - Teil 1",permalink:"/de/docs/palworld-modding-kit/install-part-1"},next:{title:"Starten der PDK - Teil 3",permalink:"/de/docs/palworld-modding-kit/launching-the-pdk"}},u={},g=[{value:"Repository Einrichtung",id:"repository-einrichtung",level:2},{value:"Klonen von git",id:"klonen-von-git",level:3},{value:"Herunterladen als zip",id:"herunterladen-als-zip",level:3},{value:"Kontrollieren",id:"kontrollieren",level:3},{value:"Wwise Integration",id:"wwise-integration",level:2},{value:"Abschluss",id:"abschluss",level:3},{value:"build tools von VS 2019 zu VS 2022 \xe4ndern",id:"build-tools-von-vs-2019-zu-vs-2022-\xe4ndern",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:d}=n;return d||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pdk-einrichtung--konfiguration---teil-2",children:"PDK Einrichtung & Konfiguration - Teil 2"}),"\n",(0,r.jsx)(n.p,{children:"Nun da die Voraussetzungen erf\xfcllt sind k\xf6nnen wir mit dem download der SDK starten."}),"\n",(0,r.jsx)(n.h2,{id:"repository-einrichtung",children:"Repository Einrichtung"}),"\n",(0,r.jsx)(n.p,{children:"Es gibt zwei Wege das Repository einzurichten:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Klonen von git"}),"\n",(0,r.jsx)(n.li,{children:"Herunterladen als zip"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Klonen von git hat den Vorteil, das Updates leichter zu installieren sind, ben\xf6tigt allerdings Vorwissen von git. Diese Anleitung zeigt beide M\xf6glichkeiten."}),"\n",(0,r.jsx)(n.h3,{id:"klonen-von-git",children:"Klonen von git"}),"\n",(0,r.jsxs)(n.p,{children:["Um das Repository von Git zu klonen, nutze diesen Link: ",(0,r.jsx)(n.a,{href:"https://github.com/localcc/PalworldModdingKit",children:"https://github.com/localcc/PalworldModdingKit"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["F\xfchre mit ",(0,r.jsx)(n.code,{children:"git clone"})," aus:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Git"',children:"git clone https://github.com/localcc/PalworldModdingKit\n"})}),"\n",(0,r.jsx)(n.h3,{id:"herunterladen-als-zip",children:"Herunterladen als zip"}),"\n",(0,r.jsx)(n.p,{children:"Wenn kein Git verwendet wird, kann die Zip-Datei \xfcber die Schaltfl\xe4che unten herunterladen werden:"}),"\n","\n",(0,r.jsx)(l,{text:"PDK Herunterladen",url:"https://github.com/localcc/PalworldModdingKit/archive/HEAD.zip"}),"\n",(0,r.jsx)(n.p,{children:"Nach dem Herunterladen muss die zip Datei entpackt werden."}),"\n",(0,r.jsx)(n.h3,{id:"kontrollieren",children:"Kontrollieren"}),"\n",(0,r.jsx)(n.p,{children:"Nachdem das Repository heruntergeladen wurde, sollte der Ordner so aussehen:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Repo Structure",src:i(6130).Z+"",width:"616",height:"313"})}),"\n",(0,r.jsx)(n.h2,{id:"wwise-integration",children:"Wwise Integration"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Bevor wir mit dem \xd6ffnen des SDKs in Unreal fortfahren, m\xfcssen wir Wwise manuell integrieren. Das liegt daran, dass die Wwise-Version, die das Spiel verwendet, nicht offiziell mit der Engine-Version kompatibel ist, also m\xfcssen wir sie manuell kopieren."})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\xd6ffnen das Verzeichnis, in dem die Offline-Installationsdateien f\xfcr Wwise heruntergeladen sind ( ",(0,r.jsx)(n.a,{href:"./install-part-1#finished",children:"Zur\xfcck am Ende von Teil 1"})," ), Es sollte die folgende Struktur vorhanden sein:"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Offline installation files structure",src:i(3423).Z+"",width:"619",height:"251"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Entpacke das ",(0,r.jsx)(n.code,{children:"Unreal.5.0.tar.xz"})," Archiv."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Es kann sein das du dies zweimal machen musst, nach dem ersten Entpacken kannst du eine ",(0,r.jsx)(n.code,{children:".tar"})," Datei bekommen, entpacke auch diese."]})}),"\n","\n","\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Kopiere den Entpackten ",(0,r.jsx)(n.code,{children:"Wwise"})," Ordner ( ",(0,r.jsx)(a.$nz,{})," ) in den ",(0,r.jsx)(n.code,{children:"Plugins"})," Order der SDK."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fast fertig mit der Wwise Integration, nun m\xfcssen nur noch die ben\xf6tigten dlls kopiert werden."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\xd6ffne den ",(0,r.jsx)(n.code,{children:"Wwise"})," Ordner ( ",(0,r.jsx)(a.$nz,{})," ) im Ordner der SDK und erstelle einen ",(0,r.jsx)(n.code,{children:"ThirdParty"})," Ordner."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Nun gehe zum Ordner ( ",(0,r.jsx)(a.$nz,{})," ) in dem die Wwise SDK installiert ist"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Dies ist nicht der Ordner, in dem die Integrationsdateien installiert sind, sondern der Ordner, in dem die SDK installiert ist"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="Standart Wwise SDK Pfad"',children:"C:\\Program Files (x86)\\Audiokinetic\\Wwise 2021.1.11.7933\\SDK\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In diesem Ordner ( ",(0,r.jsx)(a.$nz,{})," ), w\xe4hle:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Win32_vc170"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"x64_vc170"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"include"})}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Kopiere die oben gelisteten Ordner ( ",(0,r.jsx)(a.$nz,{})," ) in den ",(0,r.jsx)(n.code,{children:"ThirdParty"})," Ordner den du erstellt hast."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Nach dem Kopieren dieser Ordner kopiere die ",(0,r.jsx)(n.code,{children:"vc170"})," Ordner und benenne Sie um zu ",(0,r.jsx)(n.code,{children:"vc160"}),", die Ordnerstruktur wird wie folgt aussehen:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"VC160 Copies",src:i(8908).Z+"",width:"688",height:"289"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Wenn ohne die folgende \xc4nderung fortfahren wird, muss jedes Mal, wenn der Editor geladen wird, in einem Dialogfeld auf OK geklickt werden. Das Dialogfeld sagt, dass Wwise nicht mit der aktuellen Version von Unreal Engine kompatibel ist."}),(0,r.jsxs)(n.p,{children:["Um dies zu beheben, gehe zu ",(0,r.jsx)(n.code,{children:"Plugins\\Wwise"})," und \xf6ffne ",(0,r.jsx)(n.code,{children:"Wwise.uplugin"})," mit einem Texteditor."]}),(0,r.jsxs)(n.p,{children:["Dann \xc4ndere den Eintrag ",(0,r.jsx)(n.code,{children:'"EngineVersion" : "5.0.0",'})," zu ",(0,r.jsx)(n.code,{children:'"EngineVersion" : "5.1",'}),"."]})]}),"\n",(0,r.jsx)(n.h3,{id:"abschluss",children:"Abschluss"}),"\n",(0,r.jsx)(n.p,{children:"Yay! Nun haben wir Wwise integriert!"}),"\n",(0,r.jsx)(n.h2,{id:"build-tools-von-vs-2019-zu-vs-2022-\xe4ndern",children:"build tools von VS 2019 zu VS 2022 \xe4ndern"}),"\n",(0,r.jsx)(n.p,{children:"In Unreal Engine 5.1, wird standardm\xe4\xdfig Visual Studio 2019 build tools benutzt wenn diese installiert sind."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Die folgenden \xc4nderungen sollten nur gemacht werden, wenn Visual Studio 2019 neben Visual Studio 2022 auch installiert ist."})}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)("summary",{children:['Falls du "Unreal Engine" nicht in ',(0,r.jsx)(n.code,{children:"%APPDATA%"})," siehst"]}),(0,r.jsx)("div",{children:(0,r.jsxs)(n.p,{children:["Wenn Sie ",(0,r.jsx)(n.code,{children:"Unreal Engine"})," nicht in ",(0,r.jsx)(n.code,{children:"%APPDATA%"})," sehen, bedeutet das, dass Unreal Engine noch nicht gestartet wurde.",(0,r.jsx)("br",{}),"\r\nGehe zu ",(0,r.jsx)(n.code,{children:"Epic Games Launcher -> Unreal Engine -> Library 0 >"}),' Klicke auf "Starten" bei der Unreal Engine Version die du heruntergeladen hast (5.1.x).',(0,r.jsx)("br",{}),"\r\n",(0,r.jsx)(n.img,{alt:"UnrealEditorLaunchFirst",src:i(166).Z+"",width:"859",height:"422"}),(0,r.jsx)("br",{}),'\r\nLass es laden bis du den "Neues Projekt erstellen" Bildschirm siehst, dann kannst du mit der Anleitung fortfahren.',(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["Um dies zu \xe4ndern, gehe zu ",(0,r.jsx)(n.code,{children:"%APPDATA%\\Unreal Engine\\UnrealBuildTool"})," und \xf6ffne ",(0,r.jsx)(n.code,{children:"BuildConfiguration.xml"})," mit deinem Lieblings-XML-Editor."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="Standard Configuration"',children:'<?xml version="1.0" encoding="utf-8" ?>\r\n<Configuration xmlns="https://www.unrealengine.com/BuildConfiguration">\r\n</Configuration>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="\xc4ndere dies wie folgt:"',children:'<?xml version="1.0" encoding="utf-8" ?>\r\n<Configuration xmlns="https://www.unrealengine.com/BuildConfiguration">\r\n    <VCProjectFileGenerator>\r\n        <Version>VisualStudio2022</Version>\r\n    </VCProjectFileGenerator>\r\n    <WindowsPlatform>\r\n        <Compiler>VisualStudio2022</Compiler>\r\n    </WindowsPlatform>\r\n</Configuration>\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Gl\xfcckwunsch, du hast es durch die Konfiguration geschafft!"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},166:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/LaunchUnrealEditor-a26da6df568b960b2ad6d228c9eabc51.png"},6130:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/RepoStructure-dcfaf07a05580ea70c5ad18386a93c93.png"},8908:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/Vc160Incident-054e21043204202ca971f56a4fda2a74.png"},3423:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/WwiseOfflineIntegrationStructure-1b825135256c41fd6e5a95eab6c7c039.png"}}]);