(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{8917:function(e,n,t){"use strict";var r={translations:{en:t(6992),srp:t(20)},defaultLang:"en",useBrowserDefault:!0};e.exports=r},2956:function(e,n,t){"use strict";t.d(n,{A:function(){return $n},Y:function(){return Bn}});var r=t(5893),o=t(7294),i=t(6664),a=function(e,n){return e.some(n.matches)},c=t(3503),u=function(e){var n=(0,o.useContext)(c.P).selectionService;return(0,i.v)(n,(function(n){return a(e,n)}))},s=function(e){var n=(0,o.useContext)(c.P).selectionService;return(0,i.v)(n,(function(n){return function(e,n){return"string"===typeof n?e[n]:n.map((function(n){return e[n]}))}(n.context,e)}))},l=function(){return(0,o.useContext)(c.P).selectionService.send},f=function(e){var n=e.children,t=e.states;return u(t)?n:null},m=t(3811),d=t.n(m),p=function(){return(0,r.jsx)(f,{states:v,children:(0,r.jsx)("div",{className:d().backdrop,children:(0,r.jsx)(y,{})})})},v=["error.active"],y=function(){return(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsx)("h2",{children:"Error!"}),(0,r.jsx)("p",{children:"Sorry we ran into a problem..."}),(0,r.jsx)(h,{}),(0,r.jsx)("small",{children:" ...to start over"})]})},h=function(){var e=l();return(0,r.jsx)("button",{onClick:function(){e("RESET")},children:"Reset"})},j=t(7039),b=t(8541),x=t.n(b),g=t(1664),O=t.n(g),S=t(1163),w=t(1632);function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(){var e=P((0,j.cQ)(),1)[0],n=(0,S.useRouter)().pathname,t=C[n],o=N[n];return(0,r.jsx)(O(),{href:{pathname:t,query:e},children:o})},C={"/":w.WW+"/info","/info":w.WW+"/"},N={"/":"\u24d8","/info":"\u2715"},z=function(){var e=(0,j.$G)().t;return(0,r.jsx)("header",{className:x().container,children:(0,r.jsxs)("h1",{className:"subheadline",children:[(0,r.jsx)(E,{})," ",e("site.title")]})})},M=t(2851),k=t.n(M),A=t(6614),I=t.n(A),K=["rent","buy"],T=function(e){var n=e.description,t=e.highlight;return(0,r.jsxs)("small",{children:[(0,r.jsx)("em",{children:t})," ",n]})},G=function(){return(0,r.jsx)(f,{states:$,children:(0,r.jsx)("div",{children:K.map((function(e){return(0,r.jsx)(B,{category:e},e)}))})})},$=["menu.mode_scenario.menu_category","menu.mode_options.menu_category"],B=function(e){var n=e.category,t=l(),o=(0,j.$G)().t,i=o("".concat(n,".description")),a=o("".concat(n,".highlight"));return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:(0,r.jsx)("button",{onClick:function(){t({type:"SELECT_CATEGORY",category:n})},children:o("".concat(n,".categoryConfirm"))})}),(0,r.jsx)(T,{description:i,highlight:a})]})},D=t(7565),L=t.n(D),R=function(){var e=(0,j.$G)().t,n=l(),t=u(["menu.mode_scenario"]),o=t?(0,r.jsx)(Z,{}):(0,r.jsx)(q,{}),i="menuOverview.modeToggleTooltip"+(t?"Options":"Scenario");return(0,r.jsx)("aside",{children:(0,r.jsxs)("button",{className:L().button,onClick:function(){n("TOGGLE_SELECTION_MODE")},children:[(0,r.jsx)("span",{className:L().tooltipText,children:e(i)}),o]})})},q=function(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:"1em",height:"1em",children:[(0,r.jsx)("path",{d:"M250 25a224 224 0 0 1 225 225 224 224 0 0 1-225 225A224 224 0 0 1 25 250 224 224 0 0 1 250 25m0-25a250 250 0 1 0 0 500 250 250 0 0 0 0-500Z"}),(0,r.jsx)("path",{fill:"currentColor",d:"M393 249 154 111v276l239-138z"})]})},Z=function(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:"1em",height:"1em",children:[(0,r.jsx)("path",{d:"M250 25a224 224 0 0 1 225 225 224 224 0 0 1-225 225A224 224 0 0 1 25 250 224 224 0 0 1 250 25m0-25a250 250 0 1 0 0 500 250 250 0 0 0 0-500Z"}),(0,r.jsx)("path",{fill:"currentColor",d:"M315 187 158 96v181l157-90zM185 326l157 91V236l-157 90z"})]})},W=t(175),U=t.n(W),H=function(e){var n=e.translationKey,t=void 0===n?"categorySelect":n,o=(0,j.$G)().t,i=s("category"),a=l();return(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"triangle",onClick:function(){a("OPEN_MENU_CATEGORY")},children:o("".concat(i,".").concat(t))})})},F=function(){var e=(0,j.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"inlineDivs",children:[e("menuOverview.categorySelect1")," ",(0,r.jsx)(H,{})," ",e("menuOverview.categorySelect2")]}),(0,r.jsx)("small",{children:e("menuOverview.categorySelectExplainer")})]})},J=t(8116),V=function(){var e=(0,j.$G)().t,n=(0,o.useContext)(c.P).selectionService,t=(0,i.v)(n,(function(e){return!(0,J.Wf)(e.context)})),a=l();return(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"padded",onClick:function(){a("CONFIRM_SELECTION")},disabled:t,children:e("menuOverview.confirm")})})},Y=function(){var e=(0,j.$G)().t;return(0,r.jsxs)("small",{children:[(0,r.jsx)("em",{children:e("menuOverview.disclaimerEmphasis")})," ",e("menuOverview.disclaimerBody")]})},Q=function(e){return e>1?".plural":".singular"};function X(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ee(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return X(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ne=function(){var e=(0,j.$G)().t,n=te(),t=re(),o=l(),i=function(e){o("OPEN_MENU_".concat(e))};return(0,r.jsx)(f,{states:["menu.mode_options"],children:(0,r.jsxs)("div",{children:[e("menuOverview.sizeSelect")," ",(0,r.jsx)("button",{className:"triangle",onClick:function(){return i("SIZE")},children:n})," ",e("menuOverview.incomeSelect")," ",(0,r.jsx)("button",{className:"triangle",onClick:function(){return i("INCOME")},children:t})]})})},te=function(){var e=(0,j.$G)().t,n=ee(s(["size"]),1)[0];return n?n+" "+e("person".concat(Q(n))):e("menuOverview.sizeSelectButtonEmpty")},re=function(){var e=(0,j.$G)().t,n=ee(s(["income"]),1)[0];return n?n+" "+e("units.euroPerMonth"):e("menuOverview.incomeSelectButtonEmpty")};function oe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ie(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return oe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return oe(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ae=function(){return(0,r.jsx)(f,{states:["menu.mode_scenario"],children:(0,r.jsxs)("div",{children:[(0,r.jsx)(ce,{}),(0,r.jsx)(ue,{})]})})},ce=function(){return(0,(0,j.$G)().t)("menuOverview.scenarioSelect")},ue=function(){var e=ie(s(["income","size"]),2),n=e[0],t=e[1];return n&&t?(0,r.jsx)(fe,{}):(0,r.jsx)(se,{})},se=function(){var e=(0,j.$G)().t,n=le();return(0,r.jsx)("button",{className:"triangle",onClick:n,children:e("menuOverview.scenarioSelectEmpty")})},le=function(){var e=l();return function(){e("OPEN_MENU_SCENARIO")}},fe=function(){var e=(0,j.$G)().t,n=le(),t=ie(s(["income","size"]),2),o=t[0],i=t[1];return(0,r.jsxs)("div",{className:"connectButtons",children:[(0,r.jsx)("button",{className:"triangle",onClick:n,children:e("menuOverview.scenarioSelectSize",{size:i})})," ",(0,r.jsx)("button",{onClick:n,children:e("menuOverview.scenarioSelectIncome",{income:o})})]})},me=function(e){var n=e.activeStates,t=e.children,o=e.translateKey,i=(0,j.$G)().t;return(0,r.jsx)(f,{states:n,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:t}),(0,r.jsx)("small",{children:i(o)})]})})};function de(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var pe=function(){return(0,r.jsx)("div",{children:ve.map((function(e){return(0,r.jsx)(me,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){de(e,n,t[n])}))}return e}({},e),e.translateKey)}))})},ve=[{translateKey:"menuOverview.scenarioSelectExplainer",activeStates:["menu.mode_scenario"],children:(0,r.jsx)(ae,{})},{translateKey:"menuOverview.optionsSelectExplainer",activeStates:["menu.mode_options"],children:(0,r.jsx)(ne,{})}],ye=function(){var e=(0,j.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"subheadline",children:e("menuOverview.title")}),(0,r.jsx)("small",{children:e("menuOverview.titleExplainer")})]})},he=function(){return(0,r.jsx)(f,{states:je,children:(0,r.jsxs)("div",{className:U().container,children:[(0,r.jsx)(ye,{}),(0,r.jsx)(F,{}),(0,r.jsx)(R,{}),(0,r.jsx)(pe,{}),(0,r.jsx)(V,{}),(0,r.jsx)(Y,{})]})})},je=["menu.mode_options.menu_overview","menu.mode_scenario.menu_overview"],be=t(3966),xe=t.n(be);function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ge(e,n,t[n])}))}return e}var Se=function(e){var n=e.size,t=e.income,o=e.translateKey;return"number"===typeof n&&"number"===typeof t?(0,r.jsx)(we,{size:n,income:t,translateKey:o}):"number"===typeof n?(0,r.jsx)(_e,{size:n}):"number"===typeof t?(0,r.jsx)(Pe,{income:t}):null},we=function(e){var n=e.size,t=e.income,o=e.translateKey,i=l(),a=(0,j.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:function(){i(Oe({type:"SELECT_SCENARIO"},{size:n,income:t}))},children:[n," ",a("person".concat(Q(n)))," ",a(o)]})," ","(",t," ",a("units.euroPerMonth"),")"]})},_e=function(e){var n=e.size,t=l(),o=(0,j.$G)().t;return(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:function(){t(Oe({type:"SELECT_SIZE"},{size:n}))},children:[n," ",o("person".concat(Q(n)))]})})},Pe=function(e){var n=e.income,t=l(),o=(0,j.$G)().t;return(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:function(){t(Oe({type:"SELECT_INCOME"},{income:n}))},children:[n," ",o("units.euroPerMonth")]})})};function Ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Ce=function(e){var n=e.activeStates,t=e.parameters;return(0,r.jsx)(f,{states:n,children:(0,r.jsx)("div",{className:xe().container,children:t.map((function(e){return(0,r.jsx)(Se,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Ee(e,n,t[n])}))}return e}({},e),"".concat(e.size,"-").concat(e.income))}))})})};function Ne(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ze=function(){return(0,r.jsx)("div",{children:Me.map((function(e,n){return(0,r.jsx)(Ce,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Ne(e,n,t[n])}))}return e}({},e),n)}))})},Me=[{parameters:[{size:1,income:1e3,translateKey:"scenarios.singleArtist"},{size:2,income:500,translateKey:"scenarios.generic"}],activeStates:["menu.mode_scenario.menu_scenario"]},{parameters:[{size:1},{size:2}],activeStates:["menu.mode_options.menu_size"]},{parameters:[{income:500},{income:1e3}],activeStates:["menu.mode_options.menu_income"]}],ke=["menu.mode_options.menu_off","menu.mode_scenario.menu_off"],Ae=function(){var e=(0,o.useContext)(c.P).selectionService,n=(0,i.v)(e,(function(e){return function(e,n){return a(e,n)?"closed":""}(ke,e)}));return(0,r.jsxs)("div",{className:I().container,"data-state":n,children:[(0,r.jsx)(he,{}),(0,r.jsx)(ze,{}),(0,r.jsx)(G,{})]})},Ie=t(1824),Ke=t.n(Ie),Te=["menu.mode_options.menu_off","menu.mode_scenario.menu_off"],Ge=function(){return(0,r.jsx)(f,{states:Te,children:(0,r.jsxs)("nav",{className:Ke().container,children:[(0,r.jsx)(H,{translationKey:"navigation"}),(0,r.jsx)(R,{}),(0,r.jsx)(ae,{}),(0,r.jsx)(ne,{})]})})},$e=(t(7329),t(3403));function Be(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var De=(0,t(6902).ZP)((function(e){return{point:{x:0,y:0},feature:null,updateEvent:function(n){var t=n.point,r=Le(n);return e((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Be(e,n,t[n])}))}return e}({},e,{point:t,feature:r})}))}}})),Le=function(e){if(e.features&&e.features.length>Re)return e.features[Re]},Re=0;function qe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Ze=[20.23,44.6,20.68,45],We={longitude:20.457273,latitude:44.787197,zoom:11,pitch:0,bearing:0,padding:{bottom:0,left:0,top:0,right:0}},Ue=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){qe(e,n,t[n])}))}return e}({},We,{height:500,width:500}),He={initialViewState:We,interactiveLayerIds:["data"],mapStyle:"mapbox://styles/cmmm/cl0tpnok2000215o0jm9e2w8g",mapboxAccessToken:w.cM,minZoom:7,maxZoom:14,maxBounds:Ze},Fe=0,Je=t(772),Ve=t.n(Je);function Ye(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Qe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Ye(e,n,t[n])}))}return e}function Xe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var en=function(e){var n=e.featurePropertiesKey,t=De((function(e){return e.point})),o=De((function(e){return e.feature})),i=on(!!o),a=Qe({},t,{data:rn(o,n),state:i});return(0,r.jsx)(nn,Qe({},a))},nn=function(e){var n=e.data,t=e.state,o=e.translateKey,i=void 0===o?"map.tooltipDescription":o,a=Xe(e,["data","state","translateKey"]),c=(0,j.$G)().t,u=null!==n&&"active"===t?"".concat(n," ").concat(c(i)):"";return(0,r.jsx)(tn,Qe({state:t,text:u},a))},tn=function(e){var n=e.state,t=e.text,o=e.x,i=e.y,a={transform:"translateX(".concat(o,"px) translateY(").concat(i,"px)")};return(0,r.jsx)("div",{className:Ve().container,"data-state":n,style:a,children:t})},rn=function(e,n){return e?e.properties[n]:null},on=function(e){return e?"active":"disabled"},an=t(935),cn=t.n(an),un=function(e){var n=s("data");if(n)return n.metadata[e]},sn=t(2456),ln=t.n(sn),fn=function(e){var n=e.featurePropertiesKey,t=un(n);return"undefined"===typeof t?null:(0,r.jsxs)("div",{className:ln().container,children:[(0,r.jsx)("h3",{className:"number",children:t}),(0,r.jsx)("small",{children:(0,r.jsx)(mn,{featurePropertiesKey:n})})]})},mn=function(e){var n=e.featurePropertiesKey;return(0,(0,j.$G)().t)(n+"."+"countLegend"+(s("size")?"Selected":"Null"))},dn=t(6430),pn=t.n(dn),vn=t(9530),yn=t.n(vn),hn=function(e){var n=e.featurePropertiesKey,t=un(n),o=Array(t).fill("\u25fc").join("");return(0,r.jsx)("div",{className:yn().container,children:(0,r.jsxs)("div",{className:yn().chart,children:[(0,r.jsx)("div",{className:yn().squareContainer,children:o}),(0,r.jsx)("div",{className:yn().fade})]})})},jn=function(e){var n=e.id,t=e.featurePropertiesKey;return(0,r.jsxs)("div",{className:"".concat(n," ").concat(pn().container),children:[(0,r.jsx)(bn,{id:n}),(0,r.jsxs)("div",{className:pn().info,children:[(0,r.jsx)(hn,{featurePropertiesKey:t}),(0,r.jsx)(fn,{featurePropertiesKey:t})]})]})},bn=function(e){var n=e.id,t=(0,j.$G)().t;return(0,r.jsx)("div",{className:pn().headline,children:(0,r.jsx)("h2",{className:"subheadline",children:t("info.".concat(n,"Headline"))})})};function xn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var gn=function(e){var n=e.color,t=e.colorOpacity,r=e.featurePropertiesKey;return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){xn(e,n,t[n])}))}return e}({},Pn,{type:"circle",filter:["has",r],paint:{"circle-opacity":t,"circle-color":n,"circle-radius":["interpolate",["linear"],["sqrt",["get",r]],On,Sn,wn,_n]}})},On=0,Sn=0,wn=500,_n=2e3,Pn={id:"data",source:"data"};function En(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Cn=function(e){var n=e.color,t=e.colorOpacity,o=e.featurePropertiesKey,i=gn({color:n,colorOpacity:t,featurePropertiesKey:o});return(0,r.jsx)($e.mh,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){En(e,n,t[n])}))}return e}({},i))};function Nn(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function zn(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Nn(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Nn(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Mn=function(e){var n=e.children,t=zn(s(["data"]),1)[0];return(0,r.jsx)($e.Hw,{id:"data",type:"geojson",data:t,children:n})};function kn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function An(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){kn(e,n,t[n])}))}return e}var In,Kn=[An({id:"reference",featurePropertiesKey:"suitable"},{color:"#d24f40",colorOpacity:.35}),An({id:"comparison",featurePropertiesKey:"affordable"},{color:"#008b4a",colorOpacity:.4})],Tn=(In="id",Kn.map((function(e){return e[In]}))),Gn=function(){var e=function(e){var n=(0,o.useState)(Ue),t=n[0],r=n[1],i=(0,o.useState)(e[Fe]),a=i[0],c=i[1],u=(0,o.useCallback)((function(e){return r(e.viewState)}),[]);return{viewState:t,onMove:(0,o.useMemo)((function(){return e.map((function(e){return a===e&&u}))}),[a,e,u]),onMoveStart:(0,o.useMemo)((function(){return e.map((function(e){return function(){return c(e)}}))}),[e])}}(Tn),n=e.viewState,t=e.onMove,i=e.onMoveStart,a=De((function(e){return e.updateEvent}));return(0,r.jsx)("main",{className:cn().container,children:Kn.map((function(e,o){var c=e.id,u=e.color,s=e.colorOpacity,l=e.featurePropertiesKey,f=An({},He,n,{onMouseMove:a,onMove:t[o],onMoveStart:i[o]});return(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:cn().map,children:[(0,r.jsx)($e.ZP,An({},f,{children:(0,r.jsx)(Mn,{children:(0,r.jsx)(Cn,{color:u,colorOpacity:s,featurePropertiesKey:l})})})),(0,r.jsx)(en,{featurePropertiesKey:l})]}),(0,r.jsx)(jn,{id:c,featurePropertiesKey:l})]},c)}))})},$n=function(e){var n=e.children;return(0,r.jsxs)("div",{className:k().layout,children:[(0,r.jsx)(z,{}),n,(0,r.jsx)(p,{})]})},Bn=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ge,{}),(0,r.jsx)(Gn,{}),(0,r.jsx)(Ae,{})]})}},7173:function(e,n,t){"use strict";t.d(n,{N:function(){return c}});var r=t(5893),o=t(9008),i=t.n(o),a=t(1632),c=function(){return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"CMMM"}),(0,r.jsx)("meta",{name:"description",content:"CMMM Site title"}),(0,r.jsx)("link",{rel:"icon",href:"".concat(a.zO,"/favicon.ico")})]})}},3811:function(e){e.exports={backdrop:"error_backdrop__0V8bc",container:"error_container__3P8vz"}},8541:function(e){e.exports={container:"header_container__3WCsZ"}},6614:function(e){e.exports={container:"menu_container__Co1Kl"}},175:function(e){e.exports={container:"menuOverview_container__jA94n"}},3966:function(e){e.exports={container:"menuParameter_container__WgVDJ"}},7565:function(e){e.exports={button:"modeToggleButton_button__BWjNm",tooltipText:"modeToggleButton_tooltipText__C05sj"}},1824:function(e){e.exports={container:"navigation_container__vv8Rb"}},772:function(e){e.exports={container:"tooltip_container__skvBN"}},935:function(e){e.exports={container:"visualization_container__1nDQX",map:"visualization_map__S_cNM"}},2456:function(e){e.exports={container:"visualizationCount_container__eJZ9m"}},6430:function(e){e.exports={container:"visualizationInfo_container__3rPAe",headline:"visualizationInfo_headline__hAFaF",info:"visualizationInfo_info__qTi3s"}},9530:function(e){e.exports={container:"visualizationSquareChart_container__jM505",chart:"visualizationSquareChart_chart__IBGDp",squareContainer:"visualizationSquareChart_squareContainer__OEO1K",fade:"visualizationSquareChart_fade__p7b8o"}},2851:function(e){e.exports={layout:"layout_layout___bEEs"}},6992:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Site Title"},"ui":{"languageSwitcher":"Choose Language:"},"buy":{"categorySelect":"buying","categoryConfirm":"Buying","highlight":"Small Explanation","description":"lorem ipsum","navigation":"Buy"},"rent":{"categorySelect":"renting","categoryConfirm":"Renting","highlight":"Small Explanation","description":"lorem ipsum","navigation":"Rent"},"person":{"plural":"people","singular":"person"},"units":{"euroPerMonth":"Euro/month"},"menuOverview":{"confirm":"Show offers","title":"Select the case information you want to compare","titleExplainer":"Small explainer here, half sentence","categorySelect1":"I am interested in","categorySelect2":"offers in Belgrade","categorySelectExplainer":"Small explainer here, half sentence","scenarioSelect":"I have","scenarioSelectExplainer":"Small explainer here, half sentence","scenarioSelectEmpty":"select a scenario","scenarioSelectSize":" a household of {{size}}","scenarioSelectIncome":"with an income of {{income}} Euro/month","optionsSelectExplainer":"Small explainer here, half sentence","sizeSelect":"I have a household of","sizeSelectButtonEmpty":"select household size","incomeSelect":"with a monthly income of","incomeSelectButtonEmpty":"select monthly income","modeToggleTooltipOptions":"Switch to select options","modeToggleTooltipScenario":"Switch to select scenarios","disclaimerEmphasis":"This page shows","disclaimerBody":"Lorem ipsum"},"scenarios":{"singleArtist":"working as an artist","generic":"working"},"map":{"tooltipDescription":"Offers"},"suitable":{"countLegendNull":"existing offers in Belgrade","countLegendSelected":"suitable offers in Belgrade"},"affordable":{"countLegendNull":"affordable offers in Belgrade","countLegendSelected":"affordable offers in Belgrade"},"info":{"referenceHeadline":"How many offers are presented in Belgrade?","comparisonHeadline":"How many offers are affordable for me?"}}')},20:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"\u041d\u0430\u0441\u043b\u043e\u0432 \u0441\u0430\u0458\u0442\u0430"},"ui":{"languageSwitcher":"\u0418\u0437\u0430\u0431\u0435\u0440\u0438 \u0458\u0435\u0437\u0438\u043a:"}}')}}]);