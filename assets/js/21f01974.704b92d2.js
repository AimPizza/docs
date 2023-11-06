"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(n),u=i,m=k["".concat(d,".").concat(u)]||k[u]||c[u]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const l={sidebar_position:4},r="Links",o={unversionedId:"Usage/links",id:"Usage/links",title:"Links",description:"Link, also known as Bookmark, Webpage, or URL is one of the core components of Linkwarden (hence the name).",source:"@site/docs/Usage/links.md",sourceDirName:"Usage",slug:"/Usage/links",permalink:"/Usage/links",draft:!1,editUrl:"https://github.com/linkwarden/docs/blob/main/docs/Usage/links.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Collections",permalink:"/Usage/collections"},next:{title:"Profile Settings",permalink:"/Usage/profile-settings"}},d={},s=[{value:"Adding a Link",id:"adding-a-link",level:2},{value:"Viewing a Link",id:"viewing-a-link",level:2},{value:"Editing a Link",id:"editing-a-link",level:2},{value:"Pin a Link to your Dashboard",id:"pin-a-link-to-your-dashboard",level:2},{value:"Delete a Link",id:"delete-a-link",level:2},{value:"What data will each Link hold?",id:"what-data-will-each-link-hold",level:2}],p={toc:s},k="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(k,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"links"},"Links"),(0,i.kt)("p",null,"Link, also known as Bookmark, Webpage, or URL is one of the core components of Linkwarden (hence the name)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"All Links",src:n(6373).Z,width:"1684",height:"968"})),(0,i.kt)("h2",{id:"adding-a-link"},"Adding a Link"),(0,i.kt)("p",null,'You can add a new Link by clicking the "',(0,i.kt)("strong",{parentName:"p"},"+ New Link"),'" button on the top-right of the screen.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Link",src:n(7333).Z,width:"899",height:"782"})),(0,i.kt)("p",null,"A couple of things to consider:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "Address" field is mandatory.'),(0,i.kt)("li",{parentName:"ul"},'The "Collection" field is also mandatory, BUT will be set as "',(0,i.kt)("strong",{parentName:"li"},"Unorganized"),'" if nothing is provided. So a new Collection (named "Unorganized") will be created.'),(0,i.kt)("li",{parentName:"ul"},'The "Description" field will be autogenerated based on the webpage title if nothing is provided.'),(0,i.kt)("li",{parentName:"ul"},'The "Name" field overwrights the "Description" field while being displayed in the Link card.')),(0,i.kt)("h2",{id:"viewing-a-link"},"Viewing a Link"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Link details",src:n(8199).Z,width:"1031",height:"789"})),(0,i.kt)("h2",{id:"editing-a-link"},"Editing a Link"),(0,i.kt)("p",null,'To edit a Link, click on the menu dropdown of the Link and click on "',(0,i.kt)("strong",{parentName:"p"},"Edit"),'" to open the edit modal.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit Link",src:n(4561).Z,width:"754",height:"935"})),(0,i.kt)("h2",{id:"pin-a-link-to-your-dashboard"},"Pin a Link to your Dashboard"),(0,i.kt)("p",null,'To pin a Link to the dashboard, click on the menu dropdown of the Link and click on "',(0,i.kt)("strong",{parentName:"p"},"Pin to Dashboard"),'" to pin the Link.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As of now, only Collection owners can pin Links to their dashboard.")),(0,i.kt)("h2",{id:"delete-a-link"},"Delete a Link"),(0,i.kt)("p",null,'To delete a Link, click on the menu dropdown of the Link and click on "',(0,i.kt)("strong",{parentName:"p"},"Delete"),'" to delete the Link.'),(0,i.kt)("h2",{id:"what-data-will-each-link-hold"},"What data will each Link hold?"),(0,i.kt)("p",null,"Each Link consists the following data:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Necessity"),(0,i.kt)("th",{parentName:"tr",align:null},"Additional Info"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Address (URL)"),(0,i.kt)("td",{parentName:"tr",align:null},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the website.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Collection"),(0,i.kt)("td",{parentName:"tr",align:null},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Default: Unorganized")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tags"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Default: Autogenerated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Is Pinned"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates if the Link is pinned.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Screenshot"),(0,i.kt)("td",{parentName:"tr",align:null},"Autogenerated"),(0,i.kt)("td",{parentName:"tr",align:null},"Will be autogenerated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PDF"),(0,i.kt)("td",{parentName:"tr",align:null},"Autogenerated"),(0,i.kt)("td",{parentName:"tr",align:null},"Will be autogenerated.")))))}c.isMDXComponent=!0},7333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add_link-52265e771f9174f7a791aaaf6673be58.png"},6373:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/all_links-55346e773fe47d4ee9a0f8d21851ec21.png"},4561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit_link-5be55f9c5f4a43aafa4b737fe6e0e0bc.png"},8199:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/link_details-38677ab5e72850f8ba81b805014e30d5.png"}}]);