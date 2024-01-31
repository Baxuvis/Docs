"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1129],{3203:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>A,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(5893),d=i(1151),r=i(2091);const t={sidebar_position:1},a="Erstellung einer Lua Mod",l={id:"lua-interop/creating-a-lua-mod",title:"Erstellung einer Lua Mod",description:"Bevor wir anfangen, um eine Lua Mod zu erstellen, m\xfcssen wir in den Ordner in dem UE4SS installiert ist gehen, und den Mods Ordner \xf6ffnen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/lua-interop/creating-a-lua-mod.mdx",sourceDirName:"lua-interop",slug:"/lua-interop/creating-a-lua-mod",permalink:"/de/docs/lua-interop/creating-a-lua-mod",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-interop/creating-a-lua-mod.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lua Interop",permalink:"/de/docs/category/lua-interop"},next:{title:"Funktionen von Lua hooken",permalink:"/de/docs/lua-interop/hooking-functions"}},o={},c=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"erstellung-einer-lua-mod",children:"Erstellung einer Lua Mod"}),"\n",(0,s.jsxs)(n.p,{children:["Bevor wir anfangen, um eine Lua Mod zu erstellen, m\xfcssen wir in den Ordner in dem UE4SS installiert ist gehen, und den ",(0,s.jsx)(n.code,{children:"Mods"})," Ordner \xf6ffnen."]}),"\n",(0,s.jsxs)(n.p,{children:["In diesem Ordner erstellen wir nun einen neuen Ordner mit dem Namen ",(0,s.jsx)(n.code,{children:"TestLuaInteropMod"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\xd6ffne diesen Ordner und erstelle:"}),"\n","\n","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r.pPO,{})," Datei ",(0,s.jsx)(n.code,{children:"enabled.txt"})," - diese Datei wird verwendet, um ue4ss mitzuteilen, dass die Mod aktiviert werden soll"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r.$nz,{})," Ordner ",(0,s.jsx)(n.code,{children:"Scripts"})," - hier werden alle unsere Lua-Skripte der Mod gespeichert"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\xd6ffne den ",(0,s.jsx)(n.code,{children:"Scripts"})," ordner, und erstelle die ",(0,s.jsx)(n.code,{children:"main.lua"})," Datei. Diese Datei ist der Einstiegspunkt unserer Mod. Hier wird all unsere Logik eingebaut."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Du kannst deine Mod in mehrere Dateien teilen, dies wird aber nicht in diesem Tutorial behandelt"})}),"\n",(0,s.jsx)(n.p,{children:"Deine Ordnerstruktur sollte nun wie folgt aussehen:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mod Structure",src:i(6081).Z+"",width:"251",height:"97"})}),"\n",(0,s.jsxs)(n.p,{children:["\xd6ffne nun deine ",(0,s.jsx)(n.code,{children:"main.lua"})," Datei in deinem Lieblings-Code-Editor, jetzt k\xf6nnen wir mit dem Code schreiben beginnen!"]})]})}function A(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},6081:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/png;base64,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"}}]);