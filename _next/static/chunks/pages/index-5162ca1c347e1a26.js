(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8160)}])},7645:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};u=e,c=Promise,(null!=c&&"undefined"!==typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](u):u instanceof c)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var u,c;var l=r=o({},r,n);0;if(l.suspense)return t(l);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,a(t,r);delete r.ssr}return t(r)},n.noSSR=a;u(t(7294));var i=u(t(4588));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n){return delete n.webpack,delete n.modules,e(n)}("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},3644:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n.LoadableContext=void 0;var o=((r=t(7294))&&r.__esModule?r:{default:r}).default.createContext(null);n.LoadableContext=o},4588:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u,a=(u=t(7294))&&u.__esModule?u:{default:u},c=t(2021),l=t(3644);var s=[],f=[],d=!1;function m(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var y=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=n,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var n,t,o;return n=e,(t=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,t=this._opts;if(n.loading){if("number"===typeof t.delay)if(0===t.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),t.delay)}if("number"===typeof t.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),t.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(n){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}])&&r(n.prototype,t),o&&r(n,o),e}();function v(e){return function(e,n){var t=function(){if(!o){var n=new y(e,r);o={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},n);r.suspense&&(r.lazy=a.default.lazy(r.loader));var o=null;if(!d&&!r.suspense){var u=r.webpack?r.webpack():r.modules;u&&f.push((function(e){var n=!0,r=!1,o=void 0;try{for(var i,a=u[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;if(-1!==e.indexOf(c))return t()}}catch(l){r=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}))}var s=r.suspense?function(e,n){return a.default.createElement(r.lazy,i({},e,{ref:n}))}:function(e,n){t();var i=a.default.useContext(l.LoadableContext),u=c.useSubscription(o);return a.default.useImperativeHandle(n,(function(){return{retry:o.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),a.default.useMemo((function(){return u.loading||u.error?a.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:o.retry}):u.loaded?a.default.createElement(function(e){return e&&e.__esModule?e.default:e}(u.loaded),e):null}),[e,u])};return s.preload=function(){return!r.suspense&&t()},s.displayName="LoadableComponent",a.default.forwardRef(s)}(m,e)}function p(e,n){for(var t=[];e.length;){var r=e.pop();t.push(r(n))}return Promise.all(t).then((function(){if(e.length)return p(e,n)}))}v.preloadAll=function(){return new Promise((function(e,n){p(s).then(e,n)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(n){var t=function(){return d=!0,n()};p(f,e).then(t,t)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var b=v;n.default=b},8160:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Xe}});var r=t(5893),o=t(5412),i=t(5152),u=t.n(i),a=t(7294),c=t(6664),l=t(3503),s=t(7039),f=t(5620),d=t.n(f),m=function(){var e=(0,s.$G)().t;return(0,r.jsxs)("nav",{className:d().container,children:[e("ui.languageSwitcher")," ",(0,r.jsx)(s.Ww,{lang:"srp",className:"link",children:"Srpski"})," ","| ",(0,r.jsx)(s.Ww,{lang:"en",children:"English"})]})},y=t(6614),v=t.n(y),p=["rent","buy"],b=t(624),h=t(3439),j=function(e){var n=e.description,t=e.highlight;return(0,r.jsxs)("small",{children:[(0,r.jsx)("em",{children:t})," ",n]})},g=t(3966),x=t.n(g),_=function(){return(0,r.jsx)(h.do,{states:O,children:(0,r.jsx)("div",{className:x().container,children:p.map((function(e){return(0,r.jsx)(w,{category:e},e)}))})})},O=["menu.mode_scenario.menu_category","menu.mode_options.menu_category"],w=function(e){var n=e.category,t=(0,b.Qj)(),o=(0,s.$G)().t,i=o("".concat(n,".description")),u=o("".concat(n,".highlight"));return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:(0,r.jsx)("button",{onClick:function(){t({type:"SELECT_CATEGORY",category:n})},children:o("".concat(n,".categoryConfirm"))})}),(0,r.jsx)(j,{description:i,highlight:u})]})},S=t(175),E=t.n(S),P=function(e){var n=e.translationKey,t=void 0===n?"categorySelect":n,o=(0,s.$G)().t,i=(0,b.jg)("category"),u=(0,b.Qj)();return(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"triangle",onClick:function(){u("OPEN_MENU_CATEGORY")},children:o("".concat(i,".").concat(t))})})},C=function(){var e=(0,s.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"inlineDivs",children:[e("menuOverview.categorySelect1")," ",(0,r.jsx)(P,{})," ",e("menuOverview.categorySelect2")]}),(0,r.jsx)("small",{children:e("menuOverview.categorySelectExplainer")})]})},N=t(8116),k=function(){var e=(0,s.$G)().t,n=(0,a.useContext)(l.P).selectionService,t=(0,c.v)(n,(function(e){return!(0,N.Wf)(e.context)})),o=(0,b.Qj)();return(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"padded",onClick:function(){o("CONFIRM_SELECTION")},disabled:t,children:e("menuOverview.confirm")})})},A=function(){var e=(0,s.$G)().t;return(0,r.jsxs)("small",{children:[(0,r.jsx)("em",{children:e("menuOverview.disclaimerEmphasis")})," ",e("menuOverview.disclaimerBody")]})},z=function(e){return e>1?".plural":".singular"};function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(){var e=(0,s.$G)().t,n=M(),t=$(),o=(0,b.Qj)(),i=function(e){o("OPEN_MENU_".concat(e))};return(0,r.jsxs)("div",{children:[e("menuOverview.sizeSelect")," ",(0,r.jsx)("button",{className:"triangle",onClick:function(){return i("SIZE")},children:(0,r.jsx)("span",{className:"buttonSpan",children:n})}),(0,r.jsx)("br",{}),e("menuOverview.incomeSelect")," ",(0,r.jsx)("button",{className:"triangle",onClick:function(){return i("INCOME")},children:(0,r.jsx)("span",{className:"buttonSpan",children:t})})]})},M=function(){var e=(0,s.$G)().t,n=I((0,b.jg)(["size"]),1)[0];return n?n+" "+e("person".concat(z(n))):e("menuOverview.sizeSelectButtonEmpty")},$=function(){var e=(0,s.$G)().t,n=I((0,b.jg)(["income"]),1)[0];return n?n+" "+e("units.euroPerMonth"):e("menuOverview.incomeSelectButtonEmpty")},K=JSON.parse("[200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1600,1650,1700,1750,1800,1850,1900,1950,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4500,5000,5500,6000,6500,7000,7500,8000]"),D=JSON.parse('[{"income":600,"size":1,"translateKey":"scenarios.teacherAlone"},{"income":1200,"size":2,"translateKey":"scenarios.workingInEducationCouple"},{"income":1600,"size":5,"translateKey":"scenarios.averageFamily3Kids"},{"income":450,"size":2,"translateKey":"scenarios.singleMomGroceryStore1Kid"},{"income":350,"size":1,"translateKey":"scenarios.retiredFirefighter"}]'),R=[1,2,3,4,5,6];function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function V(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=D,Q=R.map((function(e){return{size:e}})),U=K.map((function(e){return{income:e}})),q={category:["buy","rent"],size:V(new Set(V(R).concat(V(D.map((function(e){return e.size})))))),income:V(new Set(V(K).concat(V(D.map((function(e){return e.income}))))))};function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function B(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(X,{})})},J=function(){return(0,(0,s.$G)().t)("menuOverview.scenarioSelect")},X=function(){var e=(0,b.LH)(["menu.mode_options"]),n=B((0,b.jg)(["income","size"]),2),t=n[0],o=n[1];if(!t||!o||e)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(J,{}),(0,r.jsx)(Z,{})]});var i=F.find((function(e){return e.income==t&&e.size===o})).translateKey;return(0,r.jsx)(ee,{translateKey:i})},Z=function(){var e=(0,s.$G)().t,n=H();return(0,r.jsx)("button",{className:"triangle",onClick:n,children:(0,r.jsx)("span",{className:"buttonSpan",children:e("menuOverview.scenarioSelectEmpty")})})},H=function(){var e=(0,b.Qj)();return function(){e("OPEN_MENU_SCENARIO")}},ee=function(e){var n=e.translateKey,t=(0,s.$G)().t,o=H(),i=B((0,b.jg)(["income","size"]),2),u=i[0],a=i[1];return(0,r.jsx)("div",{children:(0,r.jsxs)("button",{className:"triangle",onClick:o,children:[(0,r.jsx)("span",{className:"buttonSpan",children:t(n)}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{className:"text-black",children:["(",a," ",t("person".concat(z(a))),", ",u," ",t("units.euroPerMonth"),")"]})]})})},ne=function(e){var n=e.activeStates,t=e.children,o=e.translateKey,i=(0,s.$G)().t;return(0,r.jsxs)(h.do,{states:n,useDataState:!0,children:[(0,r.jsx)("h3",{children:t}),(0,r.jsx)("small",{children:i(o)})]})};function te(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){te(e,n,t[n])}))}return e}var oe=function(){return(0,r.jsx)(r.Fragment,{children:ue.map((function(e,n){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(ne,re({},e)),n===ie&&(0,r.jsx)("div",{className:E().snug,children:(0,r.jsx)("h3",{children:"or"})},n)]},e.translateKey)}))})},ie=0,ue=[{translateKey:"menuOverview.optionsSelectExplainer",activeStates:["menu.mode_options"],children:(0,r.jsx)(G,{})},{translateKey:"menuOverview.scenarioSelectExplainer",activeStates:["menu.mode_scenario"],children:(0,r.jsx)(W,{})}],ae=function(){var e=(0,s.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"subheadline",children:e("menuOverview.title")}),(0,r.jsx)("small",{children:e("menuOverview.titleExplainer")})]})},ce=function(){return(0,r.jsx)(h.do,{states:le,children:(0,r.jsxs)("div",{className:E().container,children:[(0,r.jsx)(ae,{}),(0,r.jsx)(C,{}),(0,r.jsx)(oe,{}),(0,r.jsx)(k,{}),(0,r.jsx)(A,{})]})})},le=["menu.mode_options.menu_overview","menu.mode_scenario.menu_overview"];function se(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){se(e,n,t[n])}))}return e}var de=function(e){var n=e.size,t=e.income,o=e.translateKey;return"number"===typeof n&&"number"===typeof t?(0,r.jsx)(me,{size:n,income:t,translateKey:o}):"number"===typeof n?(0,r.jsx)(ye,{size:n}):"number"===typeof t?(0,r.jsx)(ve,{income:t}):null},me=function(e){var n=e.size,t=e.income,o=e.translateKey,i=(0,b.Qj)(),u=(0,s.$G)().t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:function(){i(fe({type:"SELECT_SCENARIO"},{size:n,income:t}))},children:u(o)})," ","(",n," ",u("person".concat(z(n))),", ",t," ",u("units.euroPerMonth"),")"]})},ye=function(e){var n=e.size,t=(0,b.Qj)(),o=(0,s.$G)().t;return(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:function(){t(fe({type:"SELECT_SIZE"},{size:n}))},children:[n," ",o("person".concat(z(n)))]})})},ve=function(e){var n=e.income,t=(0,b.Qj)(),o=(0,s.$G)().t;return(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:function(){t(fe({type:"SELECT_INCOME"},{income:n}))},children:[n," ",o("units.euroPerMonth")]})})};function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var be=function(e){var n=e.activeStates,t=e.parameters;return(0,r.jsx)(h.do,{states:n,children:(0,r.jsx)("div",{className:x().container,children:t.map((function(e,n){return(0,r.jsx)(de,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){pe(e,n,t[n])}))}return e}({},e),"".concat(e.size,"-").concat(e.income,"-").concat(n))}))})})};function he(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var je=function(){return(0,r.jsx)("div",{children:ge.map((function(e,n){return(0,r.jsx)(be,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){he(e,n,t[n])}))}return e}({},e),n)}))})},ge=[{parameters:F,activeStates:["menu.mode_scenario.menu_scenario"]},{parameters:Q,activeStates:["menu.mode_options.menu_size"]},{parameters:U,activeStates:["menu.mode_options.menu_income"]}],xe=t(2093),_e=["menu.mode_options.menu_off","menu.mode_scenario.menu_off"],Oe=function(){var e=(0,a.useContext)(l.P).selectionService,n=(0,c.v)(e,(function(e){return(0,xe.Y9)(_e,e)}));return(0,r.jsxs)("div",{className:v().container,"data-state":n,children:[(0,r.jsx)(m,{}),(0,r.jsx)(ce,{}),(0,r.jsx)(je,{}),(0,r.jsx)(_,{})]})},we=t(1824),Se=t.n(we),Ee=["menu.mode_options.menu_off","menu.mode_scenario.menu_off"],Pe=function(){return(0,r.jsx)(h.do,{states:Ee,children:(0,r.jsxs)("nav",{className:Se().container,children:[(0,r.jsx)(P,{translationKey:"navigation"}),(0,r.jsx)(h.do,{states:["menu.mode_scenario"],children:(0,r.jsx)(W,{})}),(0,r.jsx)(h.do,{states:["menu.mode_options"],children:(0,r.jsx)(G,{})})]})})},Ce=t(1163);function Ne(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ke(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ae(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ke(e,n,t[n])}))}return e}function ze(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Ne(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ne(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Te=1e3,Ie=function(){var e=ze((0,b.jg)(Ge),3);return{category:e[0],income:e[1],size:e[2]}},Ge=["category","income","size"],Me=["buy","rent"],$e=function(e){return"undefined"===typeof e||Array.isArray(e)?null:"buy"===e||"rent"===e?e:Ke(e)},Ke=function(e){var n=+e;return isNaN(n)?null:n},De=function(e,n){var t=Ge.map((function(t){return function(e,n){return $e(e)===n}(e[t],n[t])}));return t.every((function(e){return e}))},Re=function(e){var n=e.router,t=e.context;return!De(n.query,t)},Le=function(e){var n=e.context,t=e.router,r=function(e){var n,t={category:"",income:"",size:""};for(var r in e)t[r]=null===(n=e[r])?"null":"string"===typeof n&&Me.includes(n)?n:n.toString();return t}(n);t.replace({query:Ae({},t.query,r)},null,{shallow:!0})},Ve=function(e){var n=e.router,t=e.context,r=Ue(t),o=Fe(n.query);return r&&o},Fe=function(e){return Ge.map((function(n){return Qe(e,n)})).every((function(e){return e}))},Qe=function(e,n){var t=$e(e[n]);return q[n].includes(t)},Ue=function(e){return Ge.map((function(n){return e[n]===qe[n]})).every((function(e){return e}))},qe={category:"rent",size:null,income:null},Ye=function(e){var n=Ae({},qe);for(var t in qe)n[t]=$e(e[t]);return n},Be=u()((function(){return Promise.all([t.e(635),t.e(683)]).then(t.bind(t,2794)).then((function(e){return e.Visualization}))}),{loadableGenerated:{webpack:function(){return[2794]}}}),We=function(){return function(){var e=(0,Ce.useRouter)(),n=Ie(),t=(0,b.Qj)();(0,a.useEffect)((function(){e.isReady&&(Ve({router:e,context:n})?setTimeout((function(){t(Ae({type:"ENTER_QUERY_PARAMS"},Ye(e.query)))}),Te):Re({router:e,context:n})&&Le({context:n,router:e}))}),[n,e,t])}(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Pe,{}),(0,r.jsx)(Be,{}),(0,r.jsx)(Oe,{})]})},Je=t(7173),Xe=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Je.N,{}),(0,r.jsx)(o.A,{children:(0,r.jsx)(We,{})})]})}},5620:function(e){e.exports={container:"languagePicker_container___PZS9"}},6614:function(e){e.exports={container:"menu_container__Co1Kl"}},175:function(e){e.exports={container:"menuOverview_container__jA94n",snug:"menuOverview_snug__BCt31"}},3966:function(e){e.exports={container:"menuParameter_container__WgVDJ"}},1824:function(e){e.exports={container:"navigation_container__vv8Rb"}},2021:function(e,n,t){!function(){"use strict";var n={800:function(e){var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(n).map((function(e){return n[e]}));if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var u,a,c=o(e),l=1;l<arguments.length;l++){for(var s in u=Object(arguments[l]))t.call(u,s)&&(c[s]=u[s]);if(n){a=n(u);for(var f=0;f<a.length;f++)r.call(u,a[f])&&(c[a[f]]=u[a[f]])}}return c}},569:function(e,n,t){0},403:function(e,n,t){var r=t(800),o=t(522);n.useSubscription=function(e){var n=e.getCurrentValue,t=e.subscribe,i=o.useState((function(){return{getCurrentValue:n,subscribe:t,value:n()}}));e=i[0];var u=i[1];return i=e.value,e.getCurrentValue===n&&e.subscribe===t||(i=n(),u({getCurrentValue:n,subscribe:t,value:i})),o.useDebugValue(i),o.useEffect((function(){function e(){if(!o){var e=n();u((function(o){return o.getCurrentValue!==n||o.subscribe!==t||o.value===e?o:r({},o,{value:e})}))}}var o=!1,i=t(e);return e(),function(){o=!0,i()}}),[n,t]),i}},138:function(e,n,t){e.exports=t(403)},522:function(e){e.exports=t(7294)}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}},u=!0;try{n[e](i,i.exports,o),u=!1}finally{u&&delete r[e]}return i.exports}o.ab="//";var i=o(138);e.exports=i}()},5152:function(e,n,t){e.exports=t(7645)}},function(e){e.O(0,[420,26,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);