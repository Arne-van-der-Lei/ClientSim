"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[5625],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(a,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],c={id:"architecture",title:"Architecture",hide_title:!0},a="Architecture",l={unversionedId:"systems/architecture",id:"systems/architecture",title:"Architecture",description:"The architecture of ClientSim has a focus on small components with an event based observer pattern, mixed with manual dependency injection where each class is initialized only with the dependencies it needs. The included player controller is based on generic dependency providers, which allows for the eventual extension to using VR without rewriting the core systems.",source:"@site/docs/systems/architecture.md",sourceDirName:"systems",slug:"/systems/architecture",permalink:"/systems/architecture",editUrl:"https://github.com/vrchat-community/ClientSim/Docs/Source/docs/systems/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Systems",permalink:"/systems/"},next:{title:"Automated Testing",permalink:"/systems/automated-testing"}},u={},d=[{value:"Observer Pattern",id:"observer-pattern",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The architecture of ClientSim has a focus on small components with an event based observer pattern, mixed with manual dependency injection where each class is initialized only with the dependencies it needs. The included player controller is based on generic dependency providers, which allows for the eventual extension to using VR without rewriting the core systems."),(0,o.kt)("h2",{id:"observer-pattern"},"Observer Pattern"),(0,o.kt)("p",null,"ClientSim uses the observer pattern to send events within the system that anything can listen to without knowing what handles them. Events help decouple the different systems, improving testability as one system does not need to directly depend on another just to send messages when something happens. See ",(0,o.kt)("a",{parentName:"p",href:"/systems/runtime/event-dispatcher"},"EventDispatcher")," for specific details."),(0,o.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,o.kt)("p",null,"ClientSim\u2019s architecture uses a manually-handled dependency injection. On creation of a system, all dependencies are passed to it, either through its constructor or through an initialization method. Dependencies are structured as providers, and must extend an interface that declares what methods it provides. When a class needs a specific item, it depends on the provider interface instead of the class that implements it. This allows for different implementations of the provider without the dependent code needing to change. The provider pattern allows for dependencies to easily be mocked in tests."))}h.isMDXComponent=!0}}]);