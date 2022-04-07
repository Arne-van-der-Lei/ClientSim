"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[9224],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"helpers",title:"VRCSDK Helpers",hide_title:!0},p="VRCSDK Helpers",s={unversionedId:"systems/runtime/helpers",id:"systems/runtime/helpers",title:"VRCSDK Helpers",description:"The Helper components are added to an object to help with handling the behavior of VRC SDK components. The role of these components remains the same compared to CyanEmu and Phase 2, although some logic not specific to the function of the object itself has been stripped out. As an example, in CyanEmu the CyanEmuPickupHelper script handled the logic for holding pickups. Now this behavior has been moved outside the pickup helper class, and into the pickup management system. The PickupHelper code now only provides data for how the PlayerHand should handle the pickup.",source:"@site/docs/systems/runtime/helpers.md",sourceDirName:"systems/runtime",slug:"/systems/runtime/helpers",permalink:"/systems/runtime/helpers",tags:[],version:"current",frontMatter:{id:"helpers",title:"VRCSDK Helpers",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Event Dispatcher and Events",permalink:"/systems/runtime/event-dispatcher"},next:{title:"HighlightManager",permalink:"/systems/runtime/highlight-manager"}},c={},u=[{value:"Usable Interfaces",id:"usable-interfaces",level:2},{value:"Handler Interfaces",id:"handler-interfaces",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vrcsdk-helpers"},"VRCSDK Helpers"),(0,l.kt)("p",null,"The Helper components are added to an object to help with handling the behavior of VRC SDK components. The role of these components remains the same compared to CyanEmu and Phase 2, although some logic not specific to the function of the object itself has been stripped out. As an example, in CyanEmu the CyanEmuPickupHelper script handled the logic for holding pickups. Now this behavior has been moved outside the pickup helper class, and into the pickup management system. The PickupHelper code now only provides data for how the PlayerHand should handle the pickup."),(0,l.kt)("p",null,"Helper classes may also extend interfaces that are used in ClientSim. There are two categories of interfaces: ",(0,l.kt)("a",{parentName:"p",href:"#usable-interfaces"},"Usables")," and ",(0,l.kt)("a",{parentName:"p",href:"#handler-interfaces"},"Handlers"),". "),(0,l.kt)("h2",{id:"usable-interfaces"},"Usable Interfaces"),(0,l.kt)("p",null,"Usable interfaces normally end in \u201cable\u201d, and represent items that can be used somehow within ClientSim. They provide information on how they can be used, but do not include the methods to use them."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IClientSimInteractable"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents an object that can be interacted with")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IClientSimPickupable"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents an object that can be picked up, Extends Interactable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IClientSimStation"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents an object that the player can use to sit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IClientSimSyncable"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents an object that can have an owner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IClientSimPositionSyncable"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents an object that syncs its position, Extends Syncable")))),(0,l.kt)("h2",{id:"handler-interfaces"},"Handler Interfaces"),(0,l.kt)("p",null,"Using these two interface types, the Helper classes are ways of wrapping VRChat SDK component information to provide it to ClientSim."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PositionSyncedHelperBase"),(0,l.kt)("td",{parentName:"tr",align:null},"Helper for VRCObjectSync,  Extends PositionSyncedHelperBase. Syncable, PositionSyncable, RespawnHandler")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ObjectSyncHelper"),(0,l.kt)("td",{parentName:"tr",align:null},"Helper for VRCObjectSync, Extends PositionSyncedHelperBase. Syncable, PositionSyncable, RespawnHandler")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UdonHelper"),(0,l.kt)("td",{parentName:"tr",align:null},"Helper for UdonBehaviour, Extends PositionSyncedHelperBase. Syncable, PositionSyncable, RespawnHandler, Interactable, PickupHandler, StationHandler, SyncableHandler")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PickupHelper"),(0,l.kt)("td",{parentName:"tr",align:null},"Helper for VRCPickup. Pickupable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StationHelper"),(0,l.kt)("td",{parentName:"tr",align:null},"Helper for VRCStation. Implements IClientSimStation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ObjectPoolHelper"),(0,l.kt)("td",{parentName:"tr",align:null},"Helper for VRCObjectPool. Syncable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CombatSystemHelper"),(0,l.kt)("td",{parentName:"tr",align:null},"Helper for Udon CombatSetup. Implements IVRC_Destructible. Helper component is added to the player object directly when initialized.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SpatialAudioHelper"),(0,l.kt)("td",{parentName:"tr",align:null},"Helper for VRCSpatialAudioSource")))))}m.isMDXComponent=!0}}]);