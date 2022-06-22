(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5367)}])},8917:function(e,n,t){"use strict";var r={translations:{en:t(6992),srp:t(20)},defaultLang:"en",useBrowserDefault:!0};e.exports=r},5367:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return We}});var r=t(5893),o=t(7294),i=t(6664),a=function(e,n){return e.some(n.matches)},c=t(3503),u=function(e){var n=(0,o.useContext)(c.P).selectionService;return(0,i.v)(n,(function(n){return function(e,n){return"string"===typeof n?e[n]:n.map((function(n){return e[n]}))}(n.context,e)}))},s=function(){return(0,o.useContext)(c.P).selectionService.send},l=function(e){var n=e.children;return function(e){var n=(0,o.useContext)(c.P).selectionService;return(0,i.v)(n,(function(n){return a(e,n)}))}(e.states)?n:null},f=t(3811),d=t.n(f),p=function(){return(0,r.jsx)(l,{states:m,children:(0,r.jsx)("div",{className:d().backdrop,children:(0,r.jsx)(v,{})})})},m=["error.active"],v=function(){return(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsx)("h2",{children:"Error!"}),(0,r.jsx)("p",{children:"Sorry we ran into a problem..."}),(0,r.jsx)(y,{}),(0,r.jsx)("small",{children:" ...to start over"})]})},y=function(){var e=s();return(0,r.jsx)("button",{onClick:function(){e("RESET")},children:"Reset"})},h=t(7039),j=t(8541),b=t.n(j),x=function(){var e=(0,h.$G)().t;return(0,r.jsx)("header",{className:b().container,children:e("site.title")})},g=t(2851),O=t.n(g),S=t(6614),w=t.n(S),_=["rent","buy"],P=function(e){var n=e.description,t=e.highlight;return(0,r.jsxs)("small",{children:[(0,r.jsx)("em",{children:t})," ",n]})},E=function(){return(0,r.jsx)(l,{states:C,children:(0,r.jsx)("div",{children:_.map((function(e){return(0,r.jsx)(N,{category:e},e)}))})})},C=["menu.mode_scenario.menu_category","menu.mode_options.menu_category"],N=function(e){var n=e.category,t=s(),o=(0,h.$G)().t,i=o("".concat(n,".description")),a=o("".concat(n,".highlight"));return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:(0,r.jsx)("button",{onClick:function(){t({type:"SELECT_CATEGORY",category:n})},children:o("".concat(n,".categoryConfirm"))})}),(0,r.jsx)(P,{description:i,highlight:a})]})},k=function(e){var n=e.translationKey,t=void 0===n?"categorySelect":n,o=(0,h.$G)().t,i=u("category"),a=s();return(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:function(){a("OPEN_MENU_CATEGORY")},children:o("".concat(i,".").concat(t))})})},K=function(){var e=(0,h.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"inlineDivs",children:[e("menuOverview.categorySelect1")," ",(0,r.jsx)(k,{})," ",e("menuOverview.categorySelect2")]}),(0,r.jsx)("small",{children:e("menuOverview.categorySelectExplainer")})]})},M=t(8116),A=function(){var e=(0,h.$G)().t,n=(0,o.useContext)(c.P).selectionService,t=(0,i.v)(n,(function(e){return!(0,M.Wf)(e.context)})),a=s();return(0,r.jsx)("button",{onClick:function(){a("CONFIRM_SELECTION")},disabled:t,children:e("menuOverview.confirm")})},z=function(){var e=(0,h.$G)().t,n=s(),t=T();return(0,r.jsxs)("div",{children:[e("menuOverview.scenarioSelect")," ",(0,r.jsx)("button",{onClick:function(){n("OPEN_MENU_SCENARIO")},children:t})]})};function B(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function G(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return B(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=function(){var e=(0,h.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:(0,r.jsx)(z,{})}),(0,r.jsx)("small",{children:e("menuOverview.scenarioSelectExplainer")})]})},T=function(){var e=(0,h.$G)().t,n=G(u(["income","size"]),2),t=n[0],r=n[1];return t&&r?e("menuOverview.scenarioSelectButton",{income:t,size:r}):e("menuOverview.scenarioSelectButtonEmpty")},$=function(){var e=(0,h.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e("menuOverview.title")}),(0,r.jsx)("small",{children:e("menuOverview.titleExplainer")})]})},D=function(){return(0,r.jsx)(l,{states:L,children:(0,r.jsxs)("div",{children:[(0,r.jsx)($,{}),(0,r.jsx)(K,{}),(0,r.jsx)(I,{}),(0,r.jsx)(A,{})]})})},L=["menu.mode_options.menu_overview","menu.mode_scenario.menu_overview"],R=[{size:1,income:1e3,translateKey:"scenarios.singleArtist"},{size:2,income:500,translateKey:"scenarios.generic"}];function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Z=function(){return(0,r.jsx)(l,{states:U,children:(0,r.jsx)("div",{children:R.map((function(e){var n=e.size,t=e.income,o=e.translateKey;return(0,r.jsx)(V,{size:n,income:t,translateKey:o},o)}))})})},U=["menu.mode_scenario.menu_scenario"],V=function(e){var n,t=e.size,o=e.income,i=e.translateKey,a=s(),c=function(e){a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){X(e,n,t[n])}))}return e}({type:"SELECT_SCENARIO"},e))},u=(0,h.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:function(){c({size:t,income:o})},children:[t," ",u("person".concat((n=t,n>1?".plural":".singular")))," ",u(i)]})," ","(",o," ",u("units.euroPerMonth"),")"]})},Y=["menu.mode_options.menu_off","menu.mode_scenario.menu_off"],F=function(){var e=(0,o.useContext)(c.P).selectionService,n=(0,i.v)(e,(function(e){return function(e,n){return a(e,n)?"closed":""}(Y,e)}));return(0,r.jsxs)("div",{className:w().menu,"data-state":n,children:[(0,r.jsx)(D,{}),(0,r.jsx)(Z,{}),(0,r.jsx)(E,{})]})},H=t(1824),J=t.n(H),W=["menu.mode_options.menu_off","menu.mode_scenario.menu_off"],q=function(){return(0,r.jsx)(l,{states:W,children:(0,r.jsxs)("nav",{className:J().navigation,children:[(0,r.jsx)(k,{translationKey:"navigation"}),(0,r.jsx)(z,{})]})})},Q=(t(7329),t(3403));function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ne=(0,t(6902).ZP)((function(e){return{point:{x:0,y:0},feature:null,updateEvent:function(n){var t=n.point,r=te(n);return e((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}({},e,{point:t,feature:r})}))}}})),te=function(e){if(e.features&&e.features.length>re)return e.features[re]},re=0,oe=t(1632);function ie(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ae=[20.23,44.6,20.68,45],ce={longitude:20.457273,latitude:44.787197,zoom:11,pitch:0,bearing:0,padding:{bottom:0,left:0,top:0,right:0}},ue=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ie(e,n,t[n])}))}return e}({},ce,{height:500,width:500}),se={initialViewState:ce,interactiveLayerIds:["data"],mapStyle:"mapbox://styles/mapbox/streets-v9",mapboxAccessToken:oe.cM,minZoom:7,maxZoom:14,maxBounds:ae},le=0,fe=t(772),de=t.n(fe);function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function me(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){pe(e,n,t[n])}))}return e}function ve(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ye=function(e){var n=e.featurePropertiesKey,t=ne((function(e){return e.point})),o=ne((function(e){return e.feature})),i=xe(!!o),a=me({},t,{data:be(o,n),state:i});return(0,r.jsx)(he,me({},a))},he=function(e){var n=e.data,t=e.state,o=e.translateKey,i=void 0===o?"map.tooltipDescription":o,a=ve(e,["data","state","translateKey"]),c=(0,h.$G)().t,u=null!==n&&"active"===t?"".concat(n," ").concat(c(i)):"";return(0,r.jsx)(je,me({state:t,text:u},a))},je=function(e){var n=e.state,t=e.text,o=e.x,i=e.y,a={transform:"translateX(".concat(o,"px) translateY(").concat(i,"px)")};return(0,r.jsx)("div",{className:de().container,"data-state":n,style:a,children:t})},be=function(e,n){return e?e.properties[n]:null},xe=function(e){return e?"active":"disabled"},ge=t(935),Oe=t.n(ge),Se=function(e){var n=u("data");if(n)return n.metadata[e]},we=function(e){var n=e.featurePropertiesKey,t=Se(n);return"undefined"===typeof t?null:(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:t}),(0,r.jsx)("small",{children:(0,r.jsx)(_e,{featurePropertiesKey:n})})]})},_e=function(e){var n=e.featurePropertiesKey;return(0,(0,h.$G)().t)(n+"."+"countLegend"+(u("size")?"Selected":"Null"))};function Pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Pe(e,n,t[n])}))}return e}var Ce=0,Ne=0,ke=500,Ke=2e3,Me={id:"data",source:"data"},Ae={"circle-opacity":.3},ze=function(e){return function(e){var n=e.color,t=e.featurePropertiesKey;return Ee({},Me,{type:"circle",filter:["has",t],paint:Ee({},Ae,{"circle-color":n,"circle-radius":["interpolate",["linear"],["sqrt",["get",t]],Ce,Ne,ke,Ke]})})}({color:e.color,featurePropertiesKey:e.featurePropertiesKey})};function Be(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Ge=function(e){var n=e.color,t=e.featurePropertiesKey,o=ze({color:n,featurePropertiesKey:t});return(0,r.jsx)(Q.mh,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Be(e,n,t[n])}))}return e}({},o))};function Ie(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Te(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Ie(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ie(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $e=function(e){var n=e.children,t=Te(u(["data"]),1)[0];return(0,r.jsx)(Q.Hw,{id:"data",type:"geojson",data:t,children:n})},De=function(e){var n=e.featurePropertiesKey,t=Se(n),o=Array.from(Array(t).keys());return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"How many offers are presented in Belgrade?"}),(0,r.jsx)("div",{children:o.map((function(e){return(0,r.jsx)("div",{children:"."},e)}))})]})};function Le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Le(e,n,t[n])}))}return e}var Xe,Ze=[{id:"reference",featurePropertiesKey:"suitable",color:"red"},{id:"comparison",featurePropertiesKey:"affordable",color:"green"}],Ue=(Xe="id",Ze.map((function(e){return e[Xe]}))),Ve=function(){var e=function(e){var n=(0,o.useState)(ue),t=n[0],r=n[1],i=(0,o.useState)(e[le]),a=i[0],c=i[1],u=(0,o.useCallback)((function(e){return r(e.viewState)}),[]);return{viewState:t,onMove:(0,o.useMemo)((function(){return e.map((function(e){return a===e&&u}))}),[a,e,u]),onMoveStart:(0,o.useMemo)((function(){return e.map((function(e){return function(){return c(e)}}))}),[e])}}(Ue),n=e.viewState,t=e.onMove,i=e.onMoveStart,a=ne((function(e){return e.updateEvent}));return(0,r.jsx)("main",{className:Oe().container,children:Ze.map((function(e,o){var c=e.id,u=e.color,s=e.featurePropertiesKey,l=Re({},se,n,{onMouseMove:a,onMove:t[o],onMoveStart:i[o]});return(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:Oe().map,children:[(0,r.jsx)(Q.ZP,Re({},l,{children:(0,r.jsx)($e,{children:(0,r.jsx)(Ge,{color:u,featurePropertiesKey:s})})})),(0,r.jsx)(ye,{featurePropertiesKey:s})]}),(0,r.jsxs)("div",{className:Oe().info,children:[(0,r.jsx)(De,{featurePropertiesKey:s}),(0,r.jsx)(we,{featurePropertiesKey:s})]})]},c)}))})},Ye=function(){return(0,r.jsxs)("div",{className:O().layout,children:[(0,r.jsx)(x,{}),(0,r.jsx)(q,{}),(0,r.jsx)(Ve,{}),(0,r.jsx)(F,{}),(0,r.jsx)(p,{})]})},Fe=t(9008),He=t.n(Fe),Je=function(){return(0,r.jsxs)(He(),{children:[(0,r.jsx)("title",{children:"CMMM"}),(0,r.jsx)("meta",{name:"description",content:"CMMM Site title"}),(0,r.jsx)("link",{rel:"icon",href:"".concat(oe.um,"/favicon.ico")})]})},We=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Je,{}),(0,r.jsx)(Ye,{})]})}},3811:function(e){e.exports={backdrop:"error_backdrop__0V8bc",container:"error_container__3P8vz"}},8541:function(e){e.exports={container:"header_container__3WCsZ"}},6614:function(e){e.exports={menu:"menu_menu__VR0EO"}},1824:function(e){e.exports={navigation:"navigation_navigation__4iCpf"}},772:function(e){e.exports={container:"tooltip_container__skvBN"}},935:function(e){e.exports={container:"visualization_container__1nDQX",map:"visualization_map__S_cNM",info:"visualization_info__XMeT6"}},2851:function(e){e.exports={layout:"layout_layout___bEEs"}},6992:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Site Title"},"ui":{"languageSwitcher":"Choose Language: "},"buy":{"categorySelect":"buying","categoryConfirm":"Buying","highlight":"Small Explanation","description":"lorem ipsum","navigation":"Buy"},"rent":{"categorySelect":"renting","categoryConfirm":"Renting","highlight":"Small Explanation","description":"lorem ipsum","navigation":"Rent"},"person":{"plural":"people","singular":"person"},"units":{"euroPerMonth":"Euro per month"},"menuOverview":{"confirm":"Show offers","title":"Select the case information you want to compare","titleExplainer":"Small explainer here, half sentence","categorySelect1":"I am interested in","categorySelect2":"offers in Belgrade","categorySelectExplainer":"Small explainer here, half sentence","scenarioSelect":"I have ","scenarioSelectExplainer":"Small explainer here, half sentence","scenarioSelectButton":" a household of {{size}} with an income of {{income}} Euro/month","scenarioSelectButtonEmpty":"select a scenario here"},"scenarios":{"singleArtist":"working as an artist","generic":"working"},"map":{"tooltipDescription":"Offers"},"suitable":{"countLegendNull":"existing offers in Belgrade","countLegendSelected":"suitable offers in Belgrade"},"affordable":{"countLegendNull":"affordable offers in Belgrade","countLegendSelected":"affordable offers in Belgrade"}}')},20:function(e){"use strict";e.exports=JSON.parse('{"ui":{"languageSwitcher":"Test "}}')}},function(e){e.O(0,[557,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);