"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[9947],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={id:"settings",title:"Settings",hide_title:!0},s="Settings",u={unversionedId:"systems/runtime/settings",id:"systems/runtime/settings",title:"Settings",description:"The ClientSim Settings are not a system, but data on how to run ClientSim.",source:"@site/docs/systems/runtime/settings.md",sourceDirName:"systems/runtime",slug:"/systems/runtime/settings",permalink:"/systems/runtime/settings",tags:[],version:"current",frontMatter:{id:"settings",title:"Settings",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Scene Manager",permalink:"/systems/runtime/scene-manager"},next:{title:"SyncedObjectManager",permalink:"/systems/runtime/synced-object-manager"}},c={},p=[{value:"Enable ClientSim",id:"enable-clientsim",level:3},{value:"Enable Console Logging",id:"enable-console-logging",level:3},{value:"Remove \u201cEditorOnly\u201d",id:"remove-editoronly",level:3},{value:"Set Target FrameRate",id:"set-target-framerate",level:3},{value:"Target FrameRate",id:"target-framerate",level:3},{value:"Startup Delay",id:"startup-delay",level:3},{value:"Spawn Player Controller",id:"spawn-player-controller",level:3},{value:"Show Desktop Reticle",id:"show-desktop-reticle",level:3},{value:"Show Tooltips",id:"show-tooltips",level:3},{value:"Invert Mouse Look",id:"invert-mouse-look",level:3},{value:"Player Height",id:"player-height",level:3},{value:"Local Player Name",id:"local-player-name",level:3},{value:"Local Player Is Master",id:"local-player-is-master",level:3},{value:"Is Instance Owner",id:"is-instance-owner",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"settings"},"Settings"),(0,a.kt)("p",null,"The ClientSim Settings are not a system, but data on how to run ClientSim."),(0,a.kt)("h3",{id:"enable-clientsim"},"Enable ClientSim"),(0,a.kt)("p",null,"Should ClientSim be enabled when entering playmode? ClientSim is forced disabled when uploading worlds."),(0,a.kt)("h3",{id:"enable-console-logging"},"Enable Console Logging"),(0,a.kt)("p",null,"Should Debug information be logged to the console?"),(0,a.kt)("h3",{id:"remove-editoronly"},"Remove \u201cEditorOnly\u201d"),(0,a.kt)("p",null,"On enter playmode, should all objects tagged with \u201cEditorOnly\u201d be deleted?"),(0,a.kt)("h3",{id:"set-target-framerate"},"Set Target FrameRate"),(0,a.kt)("p",null,"Should ClientSim set the Application target framerate?"),(0,a.kt)("h3",{id:"target-framerate"},"Target FrameRate"),(0,a.kt)("p",null,"The expected framerate for Unity while in playmode. This will set both Application.TargetFramerate and the FixedTimeDelta."),(0,a.kt)("h3",{id:"startup-delay"},"Startup Delay"),(0,a.kt)("p",null,"How long should ClientSim wait before starting and initializing Udon? Use this as a way to simulate long world loading times and verify Unity component behavior."),(0,a.kt)("h3",{id:"spawn-player-controller"},"Spawn Player Controller"),(0,a.kt)("p",null,"Spawn a controllable player when starting ClientSim. If disabled, a local player is still created to prevent Udon Programs crashing."),(0,a.kt)("h3",{id:"show-desktop-reticle"},"Show Desktop Reticle"),(0,a.kt)("p",null,"Should the desktop reticle be displayed or not?"),(0,a.kt)("h3",{id:"show-tooltips"},"Show Tooltips"),(0,a.kt)("p",null,"Show tooltips above interactable objects"),(0,a.kt)("h3",{id:"invert-mouse-look"},"Invert Mouse Look"),(0,a.kt)("p",null,"Should the mouse Y be inverted"),(0,a.kt)("h3",{id:"player-height"},"Player Height"),(0,a.kt)("p",null,"The height of the player in unity units. This is clamped between 0.2 and 80."),(0,a.kt)("h3",{id:"local-player-name"},"Local Player Name"),(0,a.kt)("p",null,"What is the name of the local player, used for VRCPlayerApi.displayName"),(0,a.kt)("h3",{id:"local-player-is-master"},"Local Player Is Master"),(0,a.kt)("p",null,"When set to false, a remote player is spawned and set as master."),(0,a.kt)("h3",{id:"is-instance-owner"},"Is Instance Owner"),(0,a.kt)("p",null,"Is the local player the instance owner?"))}m.isMDXComponent=!0}}]);