(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9057)}])},8917:function(e,n,t){"use strict";var r={translations:{en:t(6992),srp:t(20)},defaultLang:"en",useBrowserDefault:!0};e.exports=r},9057:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return gn}});var r=t(5893),o=t(7294),i=t(6664),a=function(e,n){return e.some(n.matches)},c=t(3503),u=function(e){var n=(0,o.useContext)(c.P).selectionService;return(0,i.v)(n,(function(n){return a(e,n)}))},s=function(e){var n=(0,o.useContext)(c.P).selectionService;return(0,i.v)(n,(function(n){return function(e,n){return"string"===typeof n?e[n]:n.map((function(n){return e[n]}))}(n.context,e)}))},l=function(){return(0,o.useContext)(c.P).selectionService.send},f=function(e){var n=e.children,t=e.states;return u(t)?n:null},m=t(3811),d=t.n(m),p=function(){return(0,r.jsx)(f,{states:v,children:(0,r.jsx)("div",{className:d().backdrop,children:(0,r.jsx)(y,{})})})},v=["error.active"],y=function(){return(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsx)("h2",{children:"Error!"}),(0,r.jsx)("p",{children:"Sorry we ran into a problem..."}),(0,r.jsx)(h,{}),(0,r.jsx)("small",{children:" ...to start over"})]})},h=function(){var e=l();return(0,r.jsx)("button",{onClick:function(){e("RESET")},children:"Reset"})},b=t(7039),j=t(8541),x=t.n(j),g=function(){var e=(0,b.$G)().t;return(0,r.jsx)("header",{className:x().container,children:e("site.title")})},O=t(2851),S=t.n(O),w=t(6614),_=t.n(w),P=["rent","buy"],E=function(e){var n=e.description,t=e.highlight;return(0,r.jsxs)("small",{children:[(0,r.jsx)("em",{children:t})," ",n]})},C=function(){return(0,r.jsx)(f,{states:N,children:(0,r.jsx)("div",{children:P.map((function(e){return(0,r.jsx)(M,{category:e},e)}))})})},N=["menu.mode_scenario.menu_category","menu.mode_options.menu_category"],M=function(e){var n=e.category,t=l(),o=(0,b.$G)().t,i=o("".concat(n,".description")),a=o("".concat(n,".highlight"));return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:(0,r.jsx)("button",{onClick:function(){t({type:"SELECT_CATEGORY",category:n})},children:o("".concat(n,".categoryConfirm"))})}),(0,r.jsx)(E,{description:i,highlight:a})]})},z=t(7565),k=t.n(z),K=function(){var e=l(),n=u(["menu.mode_scenario"])?(0,r.jsx)(A,{}):(0,r.jsx)(B,{});return(0,r.jsx)("aside",{children:(0,r.jsx)("button",{className:k().button,onClick:function(){e("TOGGLE_SELECTION_MODE")},children:n})})},A=function(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:"1em",height:"1em",children:[(0,r.jsx)("path",{d:"M250 25a224 224 0 0 1 225 225 224 224 0 0 1-225 225A224 224 0 0 1 25 250 224 224 0 0 1 250 25m0-25a250 250 0 1 0 0 500 250 250 0 0 0 0-500Z"}),(0,r.jsx)("path",{fill:"currentColor",d:"M393 249 154 111v276l239-138z"})]})},B=function(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:"1em",height:"1em",children:[(0,r.jsx)("path",{d:"M250 25a224 224 0 0 1 225 225 224 224 0 0 1-225 225A224 224 0 0 1 25 250 224 224 0 0 1 250 25m0-25a250 250 0 1 0 0 500 250 250 0 0 0 0-500Z"}),(0,r.jsx)("path",{fill:"currentColor",d:"M315 187 158 96v181l157-90zM185 326l157 91V236l-157 90z"})]})},I=function(e){var n=e.translationKey,t=void 0===n?"categorySelect":n,o=(0,b.$G)().t,i=s("category"),a=l();return(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"triangle",onClick:function(){a("OPEN_MENU_CATEGORY")},children:o("".concat(i,".").concat(t))})})},G=function(){var e=(0,b.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"inlineDivs",children:[e("menuOverview.categorySelect1")," ",(0,r.jsx)(I,{})," ",e("menuOverview.categorySelect2")]}),(0,r.jsx)("small",{children:e("menuOverview.categorySelectExplainer")})]})},T=t(8116),$=function(){var e=(0,b.$G)().t,n=(0,o.useContext)(c.P).selectionService,t=(0,i.v)(n,(function(e){return!(0,T.Wf)(e.context)})),a=l();return(0,r.jsx)("button",{className:"padded",onClick:function(){a("CONFIRM_SELECTION")},disabled:t,children:e("menuOverview.confirm")})},D=function(e){return e>1?".plural":".singular"};function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=function(){var e=(0,b.$G)().t,n=Z(),t=U(),o=l(),i=function(e){o("OPEN_MENU_".concat(e))};return(0,r.jsx)(f,{states:["menu.mode_options"],children:(0,r.jsxs)("div",{children:[e("menuOverview.sizeSelect")," ",(0,r.jsx)("button",{className:"triangle",onClick:function(){return i("SIZE")},children:n})," ",e("menuOverview.incomeSelect")," ",(0,r.jsx)("button",{className:"triangle",onClick:function(){return i("INCOME")},children:t})]})})},Z=function(){var e=(0,b.$G)().t,n=q(s(["size"]),1)[0];return n?n+" "+e("person".concat(D(n))):e("menuOverview.sizeSelectButtonEmpty")},U=function(){var e=(0,b.$G)().t,n=q(s(["income"]),1)[0];return n?n+" "+e("units.euroPerMonth"):e("menuOverview.incomeSelectButtonEmpty")};function X(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return X(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=function(){var e=(0,b.$G)().t,n=l(),t=W();return(0,r.jsx)(f,{states:["menu.mode_scenario"],children:(0,r.jsxs)("div",{children:[e("menuOverview.scenarioSelect")," ",(0,r.jsx)("button",{className:"triangle",onClick:function(){n("OPEN_MENU_SCENARIO")},children:t})]})})},W=function(){var e=(0,b.$G)().t,n=F(s(["income","size"]),2),t=n[0],r=n[1];return t&&r?e("menuOverview.scenarioSelectButton",{income:t,size:r}):e("menuOverview.scenarioSelectButtonEmpty")},Y=function(e){var n=e.activeStates,t=e.children,o=e.translateKey,i=(0,b.$G)().t;return(0,r.jsx)(f,{states:n,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:t}),(0,r.jsx)("small",{children:i(o)})]})})};function H(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var J=function(){return(0,r.jsx)(r.Fragment,{children:Q.map((function(e){return(0,r.jsx)(Y,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){H(e,n,t[n])}))}return e}({},e),e.translateKey)}))})},Q=[{translateKey:"menuOverview.scenarioSelectExplainer",activeStates:["menu.mode_scenario"],children:(0,r.jsx)(V,{})},{translateKey:"menuOverview.optionsSelectExplainer",activeStates:["menu.mode_options"],children:(0,r.jsx)(R,{})}],ee=function(){var e=(0,b.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e("menuOverview.title")}),(0,r.jsx)("small",{children:e("menuOverview.titleExplainer")})]})},ne=function(){return(0,r.jsx)(f,{states:te,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(ee,{}),(0,r.jsx)(G,{}),(0,r.jsx)(K,{}),(0,r.jsx)(J,{}),(0,r.jsx)($,{})]})})},te=["menu.mode_options.menu_overview","menu.mode_scenario.menu_overview"];function re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){re(e,n,t[n])}))}return e}var ie=function(e){var n=e.size,t=e.income,o=e.translateKey;return"number"===typeof n&&"number"===typeof t?(0,r.jsx)(ae,{size:n,income:t,translateKey:o}):"number"===typeof n?(0,r.jsx)(ce,{size:n}):"number"===typeof t?(0,r.jsx)(ue,{income:t}):null},ae=function(e){var n=e.size,t=e.income,o=e.translateKey,i=l(),a=(0,b.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:function(){i(oe({type:"SELECT_SCENARIO"},{size:n,income:t}))},children:[n," ",a("person".concat(D(n)))," ",a(o)]})," ","(",t," ",a("units.euroPerMonth"),")"]})},ce=function(e){var n=e.size,t=l(),o=(0,b.$G)().t;return(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:function(){t(oe({type:"SELECT_SIZE"},{size:n}))},children:[n," ",o("person".concat(D(n)))]})})},ue=function(e){var n=e.income,t=l(),o=(0,b.$G)().t;return(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:function(){t(oe({type:"SELECT_INCOME"},{income:n}))},children:[n," ",o("units.euroPerMonth")]})})};function se(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var le=function(e){var n=e.activeStates,t=e.parameters;return(0,r.jsx)(f,{states:n,children:(0,r.jsx)("div",{children:t.map((function(e){return(0,r.jsx)(ie,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){se(e,n,t[n])}))}return e}({},e),"".concat(e.size,"-").concat(e.income))}))})})};function fe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var me=function(){return(0,r.jsx)(r.Fragment,{children:de.map((function(e,n){return(0,r.jsx)(le,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){fe(e,n,t[n])}))}return e}({},e),n)}))})},de=[{parameters:[{size:1,income:1e3,translateKey:"scenarios.singleArtist"},{size:2,income:500,translateKey:"scenarios.generic"}],activeStates:["menu.mode_scenario.menu_scenario"]},{parameters:[{size:1},{size:2}],activeStates:["menu.mode_options.menu_size"]},{parameters:[{income:500},{income:1e3}],activeStates:["menu.mode_options.menu_income"]}],pe=["menu.mode_options.menu_off","menu.mode_scenario.menu_off"],ve=function(){var e=(0,o.useContext)(c.P).selectionService,n=(0,i.v)(e,(function(e){return function(e,n){return a(e,n)?"closed":""}(pe,e)}));return(0,r.jsxs)("div",{className:_().menu,"data-state":n,children:[(0,r.jsx)(ne,{}),(0,r.jsx)(me,{}),(0,r.jsx)(C,{})]})},ye=t(1824),he=t.n(ye),be=["menu.mode_options.menu_off","menu.mode_scenario.menu_off"],je=function(){return(0,r.jsx)(f,{states:be,children:(0,r.jsxs)("nav",{className:he().navigation,children:[(0,r.jsx)(I,{translationKey:"navigation"}),(0,r.jsx)(K,{}),(0,r.jsx)(V,{}),(0,r.jsx)(R,{})]})})},xe=(t(7329),t(3403));function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Oe=(0,t(6902).ZP)((function(e){return{point:{x:0,y:0},feature:null,updateEvent:function(n){var t=n.point,r=Se(n);return e((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ge(e,n,t[n])}))}return e}({},e,{point:t,feature:r})}))}}})),Se=function(e){if(e.features&&e.features.length>we)return e.features[we]},we=0,_e=t(1632);function Pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Ee=[20.23,44.6,20.68,45],Ce={longitude:20.457273,latitude:44.787197,zoom:11,pitch:0,bearing:0,padding:{bottom:0,left:0,top:0,right:0}},Ne=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Pe(e,n,t[n])}))}return e}({},Ce,{height:500,width:500}),Me={initialViewState:Ce,interactiveLayerIds:["data"],mapStyle:"mapbox://styles/mapbox/streets-v9",mapboxAccessToken:_e.cM,minZoom:7,maxZoom:14,maxBounds:Ee},ze=0,ke=t(772),Ke=t.n(ke);function Ae(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Ae(e,n,t[n])}))}return e}function Ie(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Ge=function(e){var n=e.featurePropertiesKey,t=Oe((function(e){return e.point})),o=Oe((function(e){return e.feature})),i=Le(!!o),a=Be({},t,{data:De(o,n),state:i});return(0,r.jsx)(Te,Be({},a))},Te=function(e){var n=e.data,t=e.state,o=e.translateKey,i=void 0===o?"map.tooltipDescription":o,a=Ie(e,["data","state","translateKey"]),c=(0,b.$G)().t,u=null!==n&&"active"===t?"".concat(n," ").concat(c(i)):"";return(0,r.jsx)($e,Be({state:t,text:u},a))},$e=function(e){var n=e.state,t=e.text,o=e.x,i=e.y,a={transform:"translateX(".concat(o,"px) translateY(").concat(i,"px)")};return(0,r.jsx)("div",{className:Ke().container,"data-state":n,style:a,children:t})},De=function(e,n){return e?e.properties[n]:null},Le=function(e){return e?"active":"disabled"},qe=t(935),Re=t.n(qe),Ze=function(e){var n=s("data");if(n)return n.metadata[e]},Ue=function(e){var n=e.featurePropertiesKey,t=Ze(n);return"undefined"===typeof t?null:(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:t}),(0,r.jsx)("small",{children:(0,r.jsx)(Xe,{featurePropertiesKey:n})})]})},Xe=function(e){var n=e.featurePropertiesKey;return(0,(0,b.$G)().t)(n+"."+"countLegend"+(s("size")?"Selected":"Null"))};function Fe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ve(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Fe(e,n,t[n])}))}return e}var We=0,Ye=0,He=500,Je=2e3,Qe={id:"data",source:"data"},en={"circle-opacity":.3},nn=function(e){return function(e){var n=e.color,t=e.featurePropertiesKey;return Ve({},Qe,{type:"circle",filter:["has",t],paint:Ve({},en,{"circle-color":n,"circle-radius":["interpolate",["linear"],["sqrt",["get",t]],We,Ye,He,Je]})})}({color:e.color,featurePropertiesKey:e.featurePropertiesKey})};function tn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var rn=function(e){var n=e.color,t=e.featurePropertiesKey,o=nn({color:n,featurePropertiesKey:t});return(0,r.jsx)(xe.mh,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){tn(e,n,t[n])}))}return e}({},o))};function on(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function an(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return on(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return on(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var cn=function(e){var n=e.children,t=an(s(["data"]),1)[0];return(0,r.jsx)(xe.Hw,{id:"data",type:"geojson",data:t,children:n})},un=t(9530),sn=t.n(un),ln=function(e){var n=e.featurePropertiesKey,t=Ze(n),o=Array.from(Array(t).keys());return(0,r.jsxs)("div",{className:sn().container,children:[(0,r.jsx)("div",{className:sn().headline,children:"How many offers are presented in Belgrade?"}),(0,r.jsxs)("div",{className:sn().chart,children:[(0,r.jsx)("div",{className:sn().squareContainer,children:o.map((function(e){return(0,r.jsx)("div",{className:sn().square},e)}))}),(0,r.jsx)("div",{className:sn().fade})]})]})};function fn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function mn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){fn(e,n,t[n])}))}return e}var dn,pn=[{id:"reference",featurePropertiesKey:"suitable",color:"red"},{id:"comparison",featurePropertiesKey:"affordable",color:"green"}],vn=(dn="id",pn.map((function(e){return e[dn]}))),yn=function(){var e=function(e){var n=(0,o.useState)(Ne),t=n[0],r=n[1],i=(0,o.useState)(e[ze]),a=i[0],c=i[1],u=(0,o.useCallback)((function(e){return r(e.viewState)}),[]);return{viewState:t,onMove:(0,o.useMemo)((function(){return e.map((function(e){return a===e&&u}))}),[a,e,u]),onMoveStart:(0,o.useMemo)((function(){return e.map((function(e){return function(){return c(e)}}))}),[e])}}(vn),n=e.viewState,t=e.onMove,i=e.onMoveStart,a=Oe((function(e){return e.updateEvent}));return(0,r.jsx)("main",{className:Re().container,children:pn.map((function(e,o){var c=e.id,u=e.color,s=e.featurePropertiesKey,l=mn({},Me,n,{onMouseMove:a,onMove:t[o],onMoveStart:i[o]});return(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:Re().map,children:[(0,r.jsx)(xe.ZP,mn({},l,{children:(0,r.jsx)(cn,{children:(0,r.jsx)(rn,{color:u,featurePropertiesKey:s})})})),(0,r.jsx)(Ge,{featurePropertiesKey:s})]}),(0,r.jsxs)("div",{className:Re().info,children:[(0,r.jsx)(ln,{featurePropertiesKey:s}),(0,r.jsx)(Ue,{featurePropertiesKey:s})]})]},c)}))})},hn=function(){return(0,r.jsxs)("div",{className:S().layout,children:[(0,r.jsx)(g,{}),(0,r.jsx)(je,{}),(0,r.jsx)(yn,{}),(0,r.jsx)(ve,{}),(0,r.jsx)(p,{})]})},bn=t(9008),jn=t.n(bn),xn=function(){return(0,r.jsxs)(jn(),{children:[(0,r.jsx)("title",{children:"CMMM"}),(0,r.jsx)("meta",{name:"description",content:"CMMM Site title"}),(0,r.jsx)("link",{rel:"icon",href:"".concat(_e.zO,"/favicon.ico")})]})},gn=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(xn,{}),(0,r.jsx)(hn,{})]})}},3811:function(e){e.exports={backdrop:"error_backdrop__0V8bc",container:"error_container__3P8vz"}},8541:function(e){e.exports={container:"header_container__3WCsZ"}},6614:function(e){e.exports={menu:"menu_menu__VR0EO"}},7565:function(e){e.exports={button:"modeToggleButton_button__BWjNm"}},1824:function(e){e.exports={navigation:"navigation_navigation__4iCpf"}},772:function(e){e.exports={container:"tooltip_container__skvBN"}},935:function(e){e.exports={container:"visualization_container__1nDQX",map:"visualization_map__S_cNM",info:"visualization_info__XMeT6"}},9530:function(e){e.exports={container:"visualizationSquareChart_container__jM505",headline:"visualizationSquareChart_headline__T12b9",chart:"visualizationSquareChart_chart__IBGDp",squareContainer:"visualizationSquareChart_squareContainer__OEO1K",square:"visualizationSquareChart_square__tlq54",fade:"visualizationSquareChart_fade__p7b8o"}},2851:function(e){e.exports={layout:"layout_layout___bEEs"}},6992:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Site Title"},"ui":{"languageSwitcher":"Choose Language: "},"buy":{"categorySelect":"buying","categoryConfirm":"Buying","highlight":"Small Explanation","description":"lorem ipsum","navigation":"Buy"},"rent":{"categorySelect":"renting","categoryConfirm":"Renting","highlight":"Small Explanation","description":"lorem ipsum","navigation":"Rent"},"person":{"plural":"people","singular":"person"},"units":{"euroPerMonth":"Euro per month"},"menuOverview":{"confirm":"Show offers","title":"Select the case information you want to compare","titleExplainer":"Small explainer here, half sentence","categorySelect1":"I am interested in","categorySelect2":"offers in Belgrade","categorySelectExplainer":"Small explainer here, half sentence","scenarioSelect":"I have ","scenarioSelectExplainer":"Small explainer here, half sentence","scenarioSelectButton":" a household of {{size}} with an income of {{income}} Euro/month","scenarioSelectButtonEmpty":"select a scenario here","optionsSelectExplainer":"Small explainer here, half sentence","sizeSelect":"I have a household of","sizeSelectButtonEmpty":"select household size here ...","incomeSelect":"with a monthly income of","incomeSelectButtonEmpty":"select monthly income here"},"scenarios":{"singleArtist":"working as an artist","generic":"working"},"map":{"tooltipDescription":"Offers"},"suitable":{"countLegendNull":"existing offers in Belgrade","countLegendSelected":"suitable offers in Belgrade"},"affordable":{"countLegendNull":"affordable offers in Belgrade","countLegendSelected":"affordable offers in Belgrade"}}')},20:function(e){"use strict";e.exports=JSON.parse('{"ui":{"languageSwitcher":"Test "}}')}},function(e){e.O(0,[557,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);