(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{8300:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info",function(){return t(1481)}])},8917:function(e,n,t){"use strict";var r={translations:{en:t(6992),srp:t(20)},defaultLang:"en",useBrowserDefault:!0};e.exports=r},1481:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u}});var r=t(5893),o=t(3194),i=t(1163),c=t(7294),a=t(749),s=t(7173),u=!0;n.default=function(e){var n=e.code,t=(0,i.useRouter)().query,u=t.lang?t.lang:"en",l=(0,c.useMemo)((function(){return(0,o.getMDXComponent)(n[u])}),[n,u]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.N,{}),(0,r.jsx)(a.A,{children:(0,r.jsx)("div",{className:"mdx",children:(0,r.jsx)(l,{})})})]})}},749:function(e,n,t){"use strict";t.d(n,{A:function(){return k}});var r=t(5893),o=(t(7294),t(624)),i=t(3439),c=t(3811),a=t.n(c),s=function(){return(0,r.jsx)(i.d,{states:u,children:(0,r.jsx)("div",{className:a().backdrop,children:(0,r.jsx)(l,{})})})},u=["error.active"],l=function(){return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)("h2",{children:"Error!"}),(0,r.jsx)("p",{children:"Sorry we ran into a problem..."}),(0,r.jsx)(f,{}),(0,r.jsx)("small",{children:" ...to start over"})]})},f=function(){var e=(0,o.Qj)();return(0,r.jsx)("button",{onClick:function(){e("RESET")},children:"Reset"})},d=t(7039),h=t(8541),p=t.n(h),m=t(1664),g=t.n(m),v=t(1163),x=t(1632),y=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",children:(0,r.jsx)("path",{fill:"currentColor",d:"M250 0a250 250 0 1 0 0 500 250 250 0 0 0 0-500Zm2 79c23 0 39 16 39 37s-16 37-39 37-39-16-39-37 16-37 39-37Zm96 326H164v-45h62V244h-60v-46h126v162h56v45Z"})})};function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(s){a=!0,o=s}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(){var e=j((0,d.cQ)(),1)[0],n=(0,v.useRouter)().pathname,t=b[n],o=_[n],i=E[n];return(0,r.jsx)("span",{className:p()[i],children:(0,r.jsx)(g(),{href:{pathname:t,query:e},children:(0,r.jsx)("span",{className:"link",children:o})})})},b={"/":x.WW+"/info","/info":x.WW+"/"},_={"/":(0,r.jsx)(y,{}),"/info":(0,r.jsx)(y,{})},E={"/":"info","/info":"close"},O=function(){var e=(0,d.$G)().t;return(0,r.jsx)("header",{className:p().container,children:(0,r.jsxs)("h1",{className:"subheadline",children:[(0,r.jsx)(w,{})," ",e("site.title")]})})},N=t(2851),M=t.n(N),k=function(e){var n=e.children;return(0,r.jsxs)("div",{className:M().layout,children:[(0,r.jsx)(O,{}),n,(0,r.jsx)(s,{})]})}},2093:function(e,n,t){"use strict";t.d(n,{Y9:function(){return o},fH:function(){return r}});var r=function(e,n){return e.some(n.matches)},o=function(e,n){return r(e,n)?"closed":""}},7173:function(e,n,t){"use strict";t.d(n,{N:function(){return a}});var r=t(5893),o=t(9008),i=t.n(o),c=t(1632),a=function(){return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"CMMM"}),(0,r.jsx)("meta",{name:"description",content:"CMMM Site title"}),(0,r.jsx)("link",{rel:"icon",href:"".concat(c.zO,"/favicon.ico")})]})}},3439:function(e,n,t){"use strict";t.d(n,{d:function(){return o}});var r=t(624),o=function(e){var n=e.children,t=e.states;return(0,r.LH)(t)?n:null}},624:function(e,n,t){"use strict";t.d(n,{LH:function(){return a},Qj:function(){return u},jg:function(){return s}});var r=t(6664),o=t(7294),i=t(2093),c=t(3503),a=function(e){var n=(0,o.useContext)(c.P).selectionService;return(0,r.v)(n,(function(n){return(0,i.fH)(e,n)}))},s=function(e){var n=(0,o.useContext)(c.P).selectionService;return(0,r.v)(n,(function(n){return function(e,n){return"string"===typeof n?e[n]:n.map((function(n){return e[n]}))}(n.context,e)}))},u=function(){return(0,o.useContext)(c.P).selectionService.send}},3811:function(e){e.exports={backdrop:"error_backdrop__0V8bc",container:"error_container__3P8vz"}},8541:function(e){e.exports={container:"header_container__3WCsZ",close:"header_close__hW0nM"}},2851:function(e){e.exports={layout:"layout_layout___bEEs"}},3194:function(e,n,t){e.exports=t(8773)},8773:function(e,n,t){"use strict";n.getMDXComponent=function(e,n){return s(e,n).default};var r=a(t(7294)),o=a(t(5893)),i=a(t(3935));function c(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}function a(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function s(e,n){const t={React:r,ReactDOM:i,_jsx_runtime:o,...n};return new Function(...Object.keys(t),e)(...Object.values(t))}},6992:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Site Title"},"ui":{"languageSwitcher":"Choose Language:"},"buy":{"categorySelect":"buying","categoryConfirm":"Buying","highlight":"Small Explanation","description":"lorem ipsum","navigation":"Buy"},"rent":{"categorySelect":"renting","categoryConfirm":"Renting","highlight":"Small Explanation","description":"lorem ipsum","navigation":"Rent"},"person":{"plural":"people","singular":"person"},"units":{"euroPerMonth":"Euro/month"},"menuOverview":{"confirm":"Show offers","title":"Select the case information you want to compare","titleExplainer":"Small explainer here, half sentence","categorySelect1":"I am interested in","categorySelect2":"offers in Belgrade","categorySelectExplainer":"Small explainer here, half sentence","scenarioSelect":"I have","scenarioSelectExplainer":"Small explainer here, half sentence","scenarioSelectEmpty":"select a scenario","scenarioSelectSize":" a household of {{size}}","scenarioSelectIncome":"with an income of {{income}} Euro/month","optionsSelectExplainer":"Small explainer here, half sentence","sizeSelect":"I have a household of","sizeSelectButtonEmpty":"select household size","incomeSelect":"with a monthly income of","incomeSelectButtonEmpty":"select monthly income","modeToggleTooltipOptions":"Switch to select options","modeToggleTooltipScenario":"Switch to select scenarios","disclaimerEmphasis":"This page shows","disclaimerBody":"Lorem ipsum"},"scenarios":{"singleArtist":"working as an artist","generic":"working"},"map":{"tooltipDescription":"Offers"},"suitable":{"countLegendNull":"existing offers in Belgrade","countLegendSelected":"suitable offers in Belgrade"},"affordable":{"countLegendNull":"affordable offers in Belgrade","countLegendSelected":"affordable offers in Belgrade"},"info":{"referenceHeadline":"How many offers are presented in Belgrade?","comparisonHeadline":"How many offers are affordable for me?"}}')},20:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"\u041d\u0430\u0441\u043b\u043e\u0432 \u0441\u0430\u0458\u0442\u0430"},"ui":{"languageSwitcher":"\u0418\u0437\u0430\u0431\u0435\u0440\u0438 \u0458\u0435\u0437\u0438\u043a:"}}')}},function(e){e.O(0,[420,774,888,179],(function(){return n=8300,e(e.s=n);var n}));var n=e.O();_N_E=n}]);