"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4077],{9593:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>z,contentTitle:()=>V,default:()=>T,frontMatter:()=>y,metadata:()=>N,toc:()=>D});var s=r(5893),t=r(1151),i=r(2091),l=r(80),d=r(7294),a=r(512),o=r(2466),c=r(6550),u=r(469),h=r(1980),m=r(7392),g=r(12);function p(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:r}=e;return(0,d.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,m.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const s=(0,c.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,h._X)(t),(0,d.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,t=b(e),[i,l]=(0,d.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[a,o]=j({queryString:r,groupId:s}),[c,h]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,g.Nk)(r);return[s,(0,d.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),m=(()=>{const e=a??c;return x({value:e,tabValues:t})?e:null})();(0,u.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,d.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),h(e)}),[o,h,t]),tabValues:t}}var v=r(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function M(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,r=d.indexOf(n),s=l[r].value;s!==t&&(c(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...i,className:(0,a.Z)("tabs__item",w.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function E(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,d.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function k(e){const n=f(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container",w.tabList),children:[(0,s.jsx)(M,{...e,...n}),(0,s.jsx)(E,{...e,...n})]})}function A(e){const n=(0,v.Z)();return(0,s.jsx)(k,{...e,children:p(e.children)},String(n))}const S={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(S.tabItem,t),hidden:r,children:n})}const y={sidebar_position:1},V="Erstellung einer simplen Mod",N={id:"creating-blueprint-mods/mod-setup-1",title:"Erstellung einer simplen Mod",description:"Wo wir grade aufgeh\xf6rt haben sollte Pal.uproject doppel klicken sein. Dieser Bildschirm sollte sichtbar sein",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/creating-blueprint-mods/mod-setup-1.mdx",sourceDirName:"creating-blueprint-mods",slug:"/creating-blueprint-mods/mod-setup-1",permalink:"/de/docs/creating-blueprint-mods/mod-setup-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creating-blueprint-mods/mod-setup-1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating A Blueprint Mod",permalink:"/de/docs/category/creating-a-blueprint-mod"},next:{title:"Mod Kn\xf6pfe",permalink:"/de/docs/creating-blueprint-mods/mod-setup-buttons"}},z={},D=[{value:"<MdInstallDesktop></MdInstallDesktop> ModActor Einrichten",id:"-modactor-einrichten",level:2},{value:"<MdEvent></MdEvent> ModActor Events",id:"-modactor-events",level:2},{value:"ModActor Variablen",id:"modactor-variablen",level:2}];function P(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"erstellung-einer-simplen-mod",children:"Erstellung einer simplen Mod"}),"\n",(0,s.jsxs)(n.p,{children:["Wo wir grade aufgeh\xf6rt haben sollte ",(0,s.jsx)(n.code,{children:"Pal.uproject"})," doppel klicken sein. Dieser Bildschirm sollte sichtbar sein\r\n",(0,s.jsx)(n.img,{alt:"PDKNewProject",src:r(8504).Z+"",width:"1920",height:"1048"})]}),"\n","\n",(0,s.jsxs)(n.h2,{id:"-modactor-einrichten",children:[(0,s.jsx)(l.RUY,{})," ModActor Einrichten"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Sollte in deinem ",(0,s.jsx)(n.code,{children:"Content Browser"})," kein Ordner ( ",(0,s.jsx)(i.$nz,{})," ) mit dem Namen ",(0,s.jsx)(n.code,{children:"Content"})," sein erstelle ihn."]}),"\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"Content"})," erstelle einen Ordner ( ",(0,s.jsx)(i.$nz,{})," ) mit dem Namen ",(0,s.jsx)(n.code,{children:"Mods"}),". Hier werden alle Mods die wir erstellen sein."]}),"\n",(0,s.jsxs)(n.li,{children:["Deine Ordnerstruktur sollte wie folgt aussehen. (",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ignoriere dabzQOL und dabzReflex"})}),") ",(0,s.jsx)(n.img,{alt:"NewModStruct",src:r(969).Z+"",width:"538",height:"234"})]}),"\n",(0,s.jsxs)(n.li,{children:["Erstelle einen Ordner ( ",(0,s.jsx)(i.$nz,{})," ) in ",(0,s.jsx)(n.code,{children:"Mods"})," mit dem selben Namen den deine pak Datei sp\xe4ter haben soll. (In diesem Fall nutze Ich ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.em,{children:"dabzReflex"})}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["In diesem Ordner ( ",(0,s.jsx)(i.$nz,{})," ) werden wir eine neue ",(0,s.jsx)(n.code,{children:"Blueprint Class"})," die ein ",(0,s.jsx)(n.code,{children:"Actor"})," ist erstellen. Sie muss den Namen ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"ModActor"})})," tragen ",(0,s.jsx)(n.img,{alt:"NewModActor",src:r(3105).Z+"",width:"616",height:"747"})]}),"\n",(0,s.jsxs)(n.li,{children:["Nun sollte dein ",(0,s.jsx)(n.code,{children:"Content Browser"})," wie folgt aussehen, als n\xe4chstes doppel-klicke deinen ",(0,s.jsx)(n.code,{children:"ModActor"})," und stelle sicher das du im ",(0,s.jsx)(n.code,{children:"Event Graph"})," tab bist ",(0,s.jsx)(n.img,{alt:"NewActorMade",src:r(2030).Z+"",width:"720",height:"238"})]}),"\n",(0,s.jsx)(n.li,{children:"Jetzt ist der ModActor technisch eingerichtet, aber es gibt noch einige weitere Informationen, die im Folgenden zu finden sind."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"-modactor-events",children:[(0,s.jsx)(l.mbS,{})," ModActor Events"]}),"\n","\n","\n",(0,s.jsxs)(A,{children:[(0,s.jsx)(I,{value:"usedevents",label:"Used Events",attributes:{className:"usedevents"},default:!0,children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"PreBeginPlay"})})," - Dieses Ereignis ist zu fr\xfch, um es f\xfcr die Initialisierung der Mods zu verwenden. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(Funktioniert nur in ModActor)"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"PostBeginPlay"})})," - Dieses Ereignis wird ausgel\xf6st, wenn der Player Controller Begin Play aufgerufen wird ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(Funktioniert nur in ModActor)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Das empfohlene Ereignis f\xfcr die Initialisierung der meisten Dinge in Ihrer Mod."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Event Tick"})})," - Dieses Ereignis wird bei jedem einzelnen Tick ausgel\xf6st.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dies wird \xfcblicherweise verwendet, wenn ein Ereignis ben\xf6tigt wird, das bei jedem einzelnen Tick aktualisiert wird."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"PrintToModLoader"})})," - Erlaubt es \xfcber einen Blueprint in die UE4SS-Konsole auszugeben. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(Funktioniert nur in ModActor)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Um dieses Ereignis zu verwenden, erstelle im ",(0,s.jsx)(n.code,{children:"ModActor"})," ein ",(0,s.jsx)(n.code,{children:"Custom Event"})," mit dem genauen Namen ",(0,s.jsx)(n.code,{children:"PrintToModLoader"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["F\xfcge diesem Ereignis eine anf\xe4ngliche String-Variable mit dem Namen ",(0,s.jsx)(n.code,{children:"Message"})," hinzu. Lassen das Ereignis jetzt in Ruhe."]}),"\n",(0,s.jsx)(n.li,{children:'Es kann nun die Funktion "Print To Mod Loader" \xfcberall aufrufen werden.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ModMenuButtonPressed"})})," - Wird verwendet, um Mod-Kn\xf6pfe im Mod-Listenbereich von UE4SS zu aktivieren. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(Funktioniert nur in ModActor)"})})," ",(0,s.jsx)(n.a,{href:"./mod-setup-buttons",children:"Mod-Kn\xf6pfe Tutorial"})]}),"\n"]})}),(0,s.jsxs)(I,{value:"unusedevents",label:"Unused Events",attributes:{className:"unusedevents"},children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"EventBeginPlay"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"EventActorBeginOverlap"})})}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorEvents",src:r(5836).Z+"",width:"716",height:"581"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"modactor-variablen",children:"ModActor Variablen"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"ModActor-Variablen werden verwendet, um Informationen \xfcber deine Mod im Tab der geladenen Mods von UE4SS anzuzeigen."}),(0,s.jsx)(n.p,{children:"Dies sind einfach nur Variablen, die zum Blueprint hinzugef\xfcgt werden, die aber nicht vom Blueprint verwendet werden, sondern nur von UE4SS."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorVars",src:r(4645).Z+"",width:"374",height:"220"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorVarsSetup",src:r(8587).Z+"",width:"444",height:"217"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ModAuthor"})})," - Zeigt den Mod-Autor im UE4SS Mods Panel an"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ModDescription"})})," - Zeigt die Mod-Beschreibung im UE4SS Mods Panel an"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ModVersion"})})," - Zeigt die Mod-Version im UE4SS Mods Panel an"]}),"\n"]})]})}function T(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(P,{...e})}):P(e)}},969:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/ContentBrowserNewMod-f26aa46be4c2453963c1e8d50731fdea.png"},5836:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/ModActorEvents-440be08b0f7ef85567759b92dc5dbae9.png"},2030:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/ModActorMade-c6e33e74d0062364995acd1607f58c45.png"},4645:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/ModActorVariables-0c03b4b678e3c6fce1be35c7da8e078d.png"},8587:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/ModActorVariablesWorking-013a84ffa3a06bd95344528ce25cc476.png"},3105:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/NewModActor-a569132f8f307f54f5dbd43d0faa989e.png"},8504:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/NewPMKInstance-a94408301a3a545ab83858b84c297654.png"}}]);