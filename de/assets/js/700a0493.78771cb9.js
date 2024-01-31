"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[701],{1323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var s=t(5893),i=t(1151);const d={sidebar_position:1},r="Mod Kn\xf6pfe",o={id:"creating-blueprint-mods/mod-setup-buttons",title:"Mod Kn\xf6pfe",description:"- Erstelle in deinem ModActor eine String-Variable mit dem Namen ModButtons, \xe4ndern in der Eigenschaftsleiste die folgenden Angaben zu den 9 Quadraten in einem Kasten",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/creating-blueprint-mods/mod-setup-buttons.mdx",sourceDirName:"creating-blueprint-mods",slug:"/creating-blueprint-mods/mod-setup-buttons",permalink:"/de/docs/creating-blueprint-mods/mod-setup-buttons",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creating-blueprint-mods/mod-setup-buttons.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Erstellung einer simplen Mod",permalink:"/de/docs/creating-blueprint-mods/mod-setup-1"},next:{title:"Lua Interop",permalink:"/de/docs/category/lua-interop"}},c={},a=[{value:"Simples Beispiel mit ModButtons &amp; PrintToModLoader",id:"simples-beispiel-mit-modbuttons--printtomodloader",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mod-kn\xf6pfe",children:"Mod Kn\xf6pfe"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Erstelle in deinem ModActor eine String-Variable mit dem Namen ModButtons, \xe4ndern in der Eigenschaftsleiste die folgenden Angaben zu den 9 Quadraten in einem Kasten"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModButtonsArray",src:t(6807).Z+"",width:"468",height:"476"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstellen Sie ein neues benutzerdefiniertes Ereignis namens ",(0,s.jsx)(n.code,{children:"ModMenuButtonPressed"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModMenuButtonPressed",src:t(8553).Z+"",width:"304",height:"127"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["F\xfcgen Sie unter dem neu erstellten Ereignis eine Eingabevariable mit der Bezeichnung ",(0,s.jsx)(n.code,{children:"Index"})," und dem Typen ",(0,s.jsx)(n.code,{children:"Integer"})," ein. ",(0,s.jsx)(n.img,{alt:"ModMenuInt",src:t(3997).Z+"",width:"489",height:"368"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Als N\xe4chstes f\xfcge eine ",(0,s.jsx)(n.code,{children:"Switch on Int"})," Aktion ein, diese wird mit dem ",(0,s.jsx)(n.code,{children:"ModMenuButtonPressed"})," event verbunden."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["F\xfcr jeden Knopf, den du haben m\xf6chtest, muss ein weiterer pin zum ",(0,s.jsx)(n.code,{children:"Switch On Int"})," hinzugef\xfcgt werden"]}),"\n",(0,s.jsxs)(n.li,{children:["Deine pin's m\xfcssen zum ",(0,s.jsx)(n.code,{children:"ModButtons String Array"})," passen ",(0,s.jsx)(n.img,{alt:"ModButtonSwitchOnInt",src:t(7464).Z+"",width:"806",height:"247"})]}),"\n",(0,s.jsxs)(n.li,{children:["Wenn ein ",(0,s.jsx)(n.code,{children:"ModButton"})," geklickt wird, wird ein Ausf\xfchrsignal mit einem ",(0,s.jsx)(n.code,{children:"Integer"})," als Parameter gesendet."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"simples-beispiel-mit-modbuttons--printtomodloader",children:"Simples Beispiel mit ModButtons & PrintToModLoader"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example",src:t(7016).Z+"",width:"1134",height:"543"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6807:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModButtonsArray-05d42c5c76e9911b061f93f92ff67a7c.png"},8553:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModMenuButtonPressed-785a0e8a070d103ed02f1f4f83223825.png"},7464:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModSwitchOnEvent-69bb2aeb1551a0cd531f8db1fa160d88.png"},3997:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/MonMenuButtonPRessedInt-aaedc8521031257bafc9b9543e0cc1a4.png"},7016:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/example-bef74471c445053a22ec678e8506a8bc.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const i={},d=s.createContext(i);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);