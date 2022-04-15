"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[2813],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return y}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=h(a),y=n,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var h=2;h<i;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1242:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"player",title:"Player",hide_title:!0},s="Player",h={unversionedId:"systems/runtime/player",id:"systems/runtime/player",title:"Player",description:"The ClientSim representation of a player has been split into many components compared to CyanEmu. Each component handles a different aspect of the player. Below you can see the hierarchy of both the Local and Remote player prefabs.",source:"@site/docs/systems/runtime/player.md",sourceDirName:"systems/runtime",slug:"/systems/runtime/player",permalink:"/systems/runtime/player",editUrl:"https://github.com/vrchat-community/ClientSim/Docs/Source/docs/systems/runtime/player.md",tags:[],version:"current",frontMatter:{id:"player",title:"Player",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Player Spawner",permalink:"/systems/runtime/player-spawner"},next:{title:"RuntimeLoader",permalink:"/systems/runtime/runtime-loader"}},c={},p=[{value:"ClientSimPlayer",id:"clientsimplayer",level:2},{value:"TrackingProvider",id:"trackingprovider",level:2},{value:"DesktopTrackingProvider",id:"desktoptrackingprovider",level:3},{value:"PlayerController",id:"playercontroller",level:2},{value:"PlayerStationManager",id:"playerstationmanager",level:2},{value:"InteractManager",id:"interactmanager",level:2},{value:"Raycaster",id:"raycaster",level:2},{value:"RayProvider",id:"rayprovider",level:3},{value:"CameraRayProvider",id:"camerarayprovider",level:4},{value:"TransformRayProvider",id:"transformrayprovider",level:4},{value:"PlayerRaycaster",id:"playerraycaster",level:2},{value:"PlayerHand",id:"playerhand",level:2},{value:"PlayerAvatarManager",id:"playeravatarmanager",level:2},{value:"Reticle",id:"reticle",level:2}],d={toc:p};function y(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"player"},"Player"),(0,i.kt)("p",null,"The ClientSim representation of a player has been split into many components compared to CyanEmu. Each component handles a different aspect of the player. Below you can see the hierarchy of both the Local and Remote player prefabs.\n",(0,i.kt)("img",{alt:"Local Player Hierarchy",src:a(8842).Z,width:"379",height:"409"}),(0,i.kt)("img",{alt:"Remote Player Hierarchy",src:a(9885).Z,width:"376",height:"122"})),(0,i.kt)("h2",{id:"clientsimplayer"},"ClientSimPlayer"),(0,i.kt)("p",null,"The ClientSimPlayer class is the container that holds all the systems for the player. While both local and remote players have a ClientSimPlayer, it is only initialized for the local player. All systems for the remote player are left blank, other than the [Avatar}(#avatar) and VRCPlayerApi changeable data. The ClientSimPlayer is the first component on the top level object on the Player prefabs. In the inspector, you can view and modify VRCPlayerApi data such as Locomotion Settings and Audio Settings at runtime."),(0,i.kt)("h2",{id:"trackingprovider"},"TrackingProvider"),(0,i.kt)("p",null,"The TrackingProvider interface is a generic way to define how tracking data for the player should be controlled. The abstract TrackingProviderBase class provides data on the head, hands, and playspace position, and also determines the player\u2019s current stance based on the head height. The tracking provider can be scaled to move the player camera up or down, helping test various player avatar scenarios. It will listen to PlayerHeightUpdate events and calculate a new tracking scale based on the requested player height. The default avatar height is 1.9, which represents TrackingScale 1. Since this class is abstract, it must be extended to be used in ClientSim. Currently only the DesktopTrackingProvider is included in ClientSim. Implementing VR in ClientSim would need a new VRTrackingProvider. The tracking provider is expected to be a child of the ",(0,i.kt)("a",{parentName:"p",href:"#playercontroller"},"PlayerController"),", but will need to be reconsidered when implementing VR as playspace x/z offset is not applied to the player controller."),(0,i.kt)("h3",{id:"desktoptrackingprovider"},"DesktopTrackingProvider"),(0,i.kt)("p",null,"Currently the only implemented TrackingProvider for ClientSim. This tracking provider locks the hand positions relative to the camera. Camera height is modified based on ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/input"},"Crouch and Prone Input Events"),". On every frame, this tracking provider checks for look input changes and updates the Camera\u2019s x rotation (up/down). If the player is sitting in a station, then the head y rotation is unlocked to allow the player to look left and right, up to 90 degrees off the playspace rotation."),(0,i.kt)("h2",{id:"playercontroller"},"PlayerController"),(0,i.kt)("p",null,"The PlayerController now only controls the movement of the player. In CyanEmu, the PlayerController class contained everything related to the player. Now these systems have been split off, making the PlayerController focused on simply handling the player\u2019s movement. Every frame, the controller will check for movement input as well as ",(0,i.kt)("a",{parentName:"p",href:"#trackingprovider"},"TrackingProvider")," stance to know how much the player should move that frame."),(0,i.kt)("h2",{id:"playerstationmanager"},"PlayerStationManager"),(0,i.kt)("p",null,"The PlayerStationManager manages how players interact with stations. It stores the current station the player is in, as well if the player is locked to the station. While locked to a station, at the end of the frame, for all Update, LateUpdate, and FixedUpdate methods, the ",(0,i.kt)("a",{parentName:"p",href:"#playercontroller"},"PlayerController\u2019s")," position is updated to the station\u2019s. This happens at the end of the frame to ensure that any other script modifying the station\u2019s position happens first. "),(0,i.kt)("h2",{id:"interactmanager"},"InteractManager"),(0,i.kt)("p",null,"The InteractManager is responsible for determining if a given GameObject can be interacted with and performing the interaction. It calculates the current distance the player can interact with using the ",(0,i.kt)("a",{parentName:"p",href:"#trackingprovider"},"TrackingProvider\u2019s")," current TrackingScale and each Interact\u2019s proximity value."),(0,i.kt)("h2",{id:"raycaster"},"Raycaster"),(0,i.kt)("p",null,"ClientSim interact detection is handled through the Raycasters. This system will search for Interactables based on a provided ray used in Physics.Raycast. The ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/interactive-layer-provider"},"InteractiveLayerProvider")," is used to know what layers to consider when raycasting. All the hit objects are then filtered based on the components found. Objects with UIShape are always prioritized first. The InteractManager is used to determine the components on the object which can be interacted with. For each raycast, a RaycastResult is returned. This contains information about the ray, the object hit, and the type of interactable, if there is one."),(0,i.kt)("h3",{id:"rayprovider"},"RayProvider"),(0,i.kt)("p",null,"The Raycaster uses a RayProvider to know what direction and origin to raycast. RayProviders are a generic way to supply the ray without knowing exact detail. ClientSim implements two RayProviders:"),(0,i.kt)("h4",{id:"camerarayprovider"},"CameraRayProvider"),(0,i.kt)("p",null,"Given a camera and the current mouse position, create a ray that goes through the mouse from the camera. This is the RayProvider used when TrackingProvider is set to not VR."),(0,i.kt)("h4",{id:"transformrayprovider"},"TransformRayProvider"),(0,i.kt)("p",null,"Given a transform, create a Ray based on the position of the transform and the forward direction. This is used to raycast from the hands when the TrackingProvider is set to VR."),(0,i.kt)("h2",{id:"playerraycaster"},"PlayerRaycaster"),(0,i.kt)("p",null,"The PlayerRaycaster is responsible for searching the world for interacts and sending events based on what it finds. It will also update the ",(0,i.kt)("a",{parentName:"p",href:"#playerhand"},"PlayerHand")," system for both the left and right hands. When initialized, the PlayerRaycaster will create two ",(0,i.kt)("a",{parentName:"p",href:"#raycaster"},"Raycasters"),", one for the left and another for the right hand. If the TrackingProvider is not VR (is desktop), then the right hand uses a Raycaster with a mouse based ",(0,i.kt)("a",{parentName:"p",href:"#rayprovider"},"RayProvider"),". The left hand is left uninitialized as it will never be used when not in VR. If the ",(0,i.kt)("a",{parentName:"p",href:"#trackingprovider"},"TrackingProvider")," is in VR, then the left and right Raycasters are initialized with a transform-based ray provider using the TrackingProvider\u2019s hand transforms. Every frame, both hand Raycaster systems are updated to search for Interactables and the results are sent through the ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/event-dispatcher"},"EventDispatcher"),". The last found interact is saved for each hand as the hovered interact. If a hovered interact is a Pickupable, that Pickupable is set as the hovered Pickupable for the given PlayerHand. If the Use Input action occurs for a given hand while hovering over an interact, then the hovered object will be interacted with."),(0,i.kt)("h2",{id:"playerhand"},"PlayerHand"),(0,i.kt)("p",null,"The PlayerHand system is responsible for managing Pickupable objects. The ",(0,i.kt)("a",{parentName:"p",href:"#playerraycaster"},"PlayerRaycaster")," will set the current hovered pickup. Then the PlayerHand will listen for the Grab Input Events on when to pickup the hovered Pickupable. PlayerHand will also listen to Use and Drop events to perform actions on the currently held pickup. If the pickup is kinematic, then the position of the pickup will be directly set every frame to match the PlayerHand\u2019s rigidbody transform. If the pickup is non kinematic, it will be attached to the PlayerHand\u2019s rigidbody using a fixed joint. When holding a pickup in the right hand, the pickup can be manipulated using the different Manipulate bindings. "),(0,i.kt)("h2",{id:"playeravatarmanager"},"PlayerAvatarManager"),(0,i.kt)("p",null,"The PlayerAvatarManager manages items related to the player\u2019s avatar. Both local and remote players have an Avatar Manager. The avatar for all players is the VRChat Default Robot. The manager is responsible for providing avatar information to the VRCPlayerApi. GetBonePosition and GetBoneRotation are implemented here as wrappers over Animator.GetBoneTransform. The local player\u2019s avatar manager is the only one that is properly initialized, which allows it to listen to ",(0,i.kt)("a",{parentName:"p",href:"#trackingprovider"},"TrackingScale")," change ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/event-dispatcher"},"Events"),", which then update the scale of the avatar to match the new tracking scale."),(0,i.kt)("h2",{id:"reticle"},"Reticle"),(0,i.kt)("p",null,"The ClientSimReticle system is responsible for displaying a reticle icon in the center of Unity Game Window. This system should only be available for ",(0,i.kt)("a",{parentName:"p",href:"#desktoptrackingprovider"},"DesktopTrackingProvider"),". The reticle can be disabled through the settings menu. In addition to the center reticle, whenever the ",(0,i.kt)("a",{parentName:"p",href:"#playerraycaster"},"PlayerRaycaster")," hovers over an object with a UIShape, it will display a pointer over the mouse position. This pointer is not limited to the center of the screen and will still be displayed when the mouse is released. The location of the mouse is provided by ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/input"},"ClientSimBaseInput"),"."))}y.isMDXComponent=!0},8842:function(e,t,a){t.Z=a.p+"assets/images/player-local-hierarchy-141bb86b648173f4219d8db09671ac24.png"},9885:function(e,t,a){t.Z=a.p+"assets/images/player-remote-hierarchy-4faf127e26b6c498a97d4e2e4fd38125.png"}}]);