"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[8314],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return c}});var n=i(7294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=u(i),c=s,h=m["".concat(o,".").concat(c)]||m[c]||p[c]||a;return i?n.createElement(h,l(l({ref:t},d),{},{components:i})):n.createElement(h,l({ref:t},d))}));function c(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=i.length,l=new Array(a);l[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var u=2;u<a;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6510:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p}});var n=i(7462),s=i(3366),a=(i(7294),i(3905)),l=["components"],r={id:"automated-testing",title:"Automated Testing",hide_title:!0},o="Automated Testing",u={unversionedId:"systems/automated-testing",id:"systems/automated-testing",title:"Automated Testing",description:"ClientSim has many different tests to verify the behaviour of the program. The majority of the tests are Integration tests, but support for Unit tests is available. See Unity\u2019s TestRunner to view all tests. When importing ClientSim as a package, tests can be enabled by adding the following line to the project\u2019s package manifest after the \u201cdependencies\u201d",source:"@site/docs/systems/automated-testing.md",sourceDirName:"systems",slug:"/systems/automated-testing",permalink:"/systems/automated-testing",editUrl:"https://github.com/vrchat-community/ClientSim/Docs/Source/docs/systems/automated-testing.md",tags:[],version:"current",frontMatter:{id:"automated-testing",title:"Automated Testing",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/systems/architecture"},next:{title:"Editor",permalink:"/systems/editor/"}},d={},p=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Test Setup",id:"test-setup",level:3},{value:"Test Helpers",id:"test-helpers",level:3},{value:"ClientSimTestBase",id:"clientsimtestbase",level:3},{value:"Initialization Tests",id:"initialization-tests",level:4},{value:"Helper Tests",id:"helper-tests",level:4},{value:"Interact Tests",id:"interact-tests",level:4},{value:"Pickup Tests",id:"pickup-tests",level:4},{value:"Player Api Tests",id:"player-api-tests",level:4},{value:"Player Controller Tests",id:"player-controller-tests",level:4},{value:"Station Tests",id:"station-tests",level:4},{value:"UI Tests",id:"ui-tests",level:4},{value:"ClientSimWorldTestBase",id:"clientsimworldtestbase",level:3},{value:"No world descriptor",id:"no-world-descriptor",level:4},{value:"Two Players",id:"two-players",level:4},{value:"WorldTestExample",id:"worldtestexample",level:4}],m={toc:p};function c(e){var t=e.components,r=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automated-testing"},"Automated Testing"),(0,a.kt)("p",null,"ClientSim has many different tests to verify the behaviour of the program. The majority of the tests are Integration tests, but support for Unit tests is available. See Unity\u2019s TestRunner to view all tests. When importing ClientSim as a package, tests can be enabled by adding the following line to the project\u2019s package manifest after the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u201cdependencies\u201d :{}")," section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"testables": [\n  "com.unity.inputsystem",\n  "com.vrchat.clientsim"\n]\n')),(0,a.kt)("p",null,"Once added, Unity will import the tests and you will see them populated in the Test Runner Window."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test Runner",src:i(3002).Z,width:"822",height:"755"})),(0,a.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"ClientSim has a few Unit Tests that can verify items outside of Unity Playmode. More items can be refactored to split away from MonoBehaviours to be more Unit Testable."),(0,a.kt)("h2",{id:"integration-tests"},"Integration Tests"),(0,a.kt)("p",null,"ClientSim now has a full integration test framework that tests the majority of the features included. This framework allows for sending input events and listening for ClientSim events to verify if the proper action happened. This framework can also be used for worlds to verify specific behaviours, allowing users to create their own tests."),(0,a.kt)("h3",{id:"test-setup"},"Test Setup"),(0,a.kt)("p",null,"Due to the nature of how ClientSim starts using the InitializeOnLoad, testing requires modifying Unity editor settings to properly validate behaviour. In the test environment, InitializeOnLoad happens before playmode starts. The default Unity setting has Domain Reloading enabled on entering playmode. This means that on switching to playmode, all variable data is cleared. In order to get around this, all ClientSim tests must run with Domain Reloading disabled. This is handled automatically for any test written that derives from either of the two test fixture base classes: ClientSimTestBase and ClientSimWorldTestBase. "),(0,a.kt)("h3",{id:"test-helpers"},"Test Helpers"),(0,a.kt)("p",null,"Both Integration Test Fixtures come with helper methods in verifying specific behaviour."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ClientSimTestHelpers")," - This class contains helper methods to perform useful actions as well as listens to different ClientSim Events to verify actions have occurred.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ClientSimTestInput")," - This class allows the user to set the value of any Desktop based Input event."))),(0,a.kt)("h3",{id:"clientsimtestbase"},"ClientSimTestBase"),(0,a.kt)("p",null,"Tests fixtures that derive from this class are for testing individual prefabs and not for testing entire worlds. On test begin, ClientSim\u2019s default behaviour is disabled. It is possible to load a world or spawn a prefab, but ClientSim must be started manually. Depending on the order, behaviour will be different compared to starting ClientSim normally through playmode. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If a world or prefab is loaded before starting ClientSim, then any VRC SDK component will not link into ClientSim and start as if ClientSim is disabled. Player spawn points will work as expected in this case as the VRC_SceneDescriptor is needed to start ClientSim and spawn a player."),(0,a.kt)("li",{parentName:"ol"},"If a world or prefab is loaded after starting ClientSim, then all VRC SDK components will initialize with ClientSim behaviours as in normal playmode. In this case though, the player will have already spawned and will not be placed at the loaded world\u2019s spawn point. ")),(0,a.kt)("p",null,"The majority of ClientSim tests are written in this format. A scene with the minimum components needed to start ClientSim is loaded, ClientSim is started, and then from there the tests perform what is needed, such as calling the appropriate SDK API or spawning prefabs while simulating input events. "),(0,a.kt)("p",null,"Here is the list of integration tests:"),(0,a.kt)("h4",{id:"initialization-tests"},"Initialization Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test the behaviour of ClientSim startup given different settings and initial scene objects.")),(0,a.kt)("h4",{id:"helper-tests"},"Helper Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test the behaviour of various ClientSim SDK helper classes. AudioSpatializer, AVProVideoPlayer, ObjectPool, ObjectSync, Udon component without program, UIShape.")),(0,a.kt)("h4",{id:"interact-tests"},"Interact Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test the interact system for handling interactable objects. Note that since Udon cannot be properly included in packages due to needing external references and are compiled often, this test uses a mock interactable object script")),(0,a.kt)("h4",{id:"pickup-tests"},"Pickup Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test the interaction system, player hand, and input on different pickup situations.")),(0,a.kt)("h4",{id:"player-api-tests"},"Player Api Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test behaviour for all exposed methods relating to VRCPlayerApi")),(0,a.kt)("h4",{id:"player-controller-tests"},"Player Controller Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test Player locomotion settings.")),(0,a.kt)("h4",{id:"station-tests"},"Station Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tests using stations and expected behaviour with them.")),(0,a.kt)("h4",{id:"ui-tests"},"UI Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test interactions with Unity UI using the VRC_UIShape component.")),(0,a.kt)("h3",{id:"clientsimworldtestbase"},"ClientSimWorldTestBase"),(0,a.kt)("p",null,"Test fixtures that derive from this class are for testing full worlds and verifying the startup of ClientSim for the given world. The test is required to load a given world in the setup phase of the test, and then ClientSim will start normally as it would outside of the test environment by entering playmode. Due to ClientSim being started normally, only one test may be run at a time as playmode is only started once for all tests. If multiple tests are run together, they will all immediately fail with a warning mentioning that only one test can run at a time."),(0,a.kt)("p",null,"Three World tests are provided by default:"),(0,a.kt)("h4",{id:"no-world-descriptor"},"No world descriptor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test that ClientSim will fail to start if a scene is loaded without a world descriptor")),(0,a.kt)("h4",{id:"two-players"},"Two Players"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start ClientSim normally in a basic world, spawn a remote player and verify all data on both players.")),(0,a.kt)("h4",{id:"worldtestexample"},"WorldTestExample"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is an example test showing what it would be like for a user to write tests for their world. Test is included as a Sample for the ClientSim package and must be imported. Test shows how one would verify a simple \u201cPuzzle\u201d world.")))}c.isMDXComponent=!0},3002:function(e,t,i){t.Z=i.p+"assets/images/test-runner-b0dbe17f064a97bf7a3e70626c2ad210.png"}}]);