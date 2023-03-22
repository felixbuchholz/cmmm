(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[420],{6664:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var r=n(7294),o=n(2798);n(3469);var a=function(e,t){return e===t},u=function(e,t){if("state"in e&&"machine"in e){if(0===e.status&&t.current)return t.current;var n=0!==e.status?e.getSnapshot():e.machine.initialState;return t.current=0===e.status?n:null,n}return"state"in e?e.state:void 0};function i(e,t,n,i){void 0===n&&(n=a);var l=(0,r.useRef)(null),s=(0,r.useCallback)(function(t){return e.subscribe(t).unsubscribe},[e]),c=(0,r.useCallback)(function(){return i?i(e):u(e,l)},[e,i]);return(0,o.useSyncExternalStoreWithSelector)(s,c,c,t,n)}},5340:function(e){e.exports=function(){"use strict";/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"==typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}var a=RegExp.prototype.test,u=/\S/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},l=/\s*/,s=/\s+/,c=/\s*=/,f=/\s*\}/,p=/#|\^|\/|>|\{|&|=|!/;function d(e){this.string=e,this.tail=e,this.pos=0}function h(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function g(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},d.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case -1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},h.prototype.push=function(e){return new h(e,this)},h.prototype.lookup=function(e){var t=this.cache;if(t.hasOwnProperty(e))u=t[e];else{for(var r,a,u,i,l,s,c=this,f=!1;c;){if(e.indexOf(".")>0)for(i=c.view,l=e.split("."),s=0;null!=i&&s<l.length;)s===l.length-1&&(f=o(i,l[s])||(r=i,a=l[s],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(a))),i=i[l[s++]];else i=c.view[e],f=o(c.view,e);if(f){u=i;break}c=c.parent}t[e]=u}return n(u)&&(u=u.call(this.view)),u},g.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},g.prototype.parse=function(e,n){var o=this.templateCache,i=e+":"+(n||v.tags).join(":"),h=void 0!==o,g=h?o.get(i):void 0;return void 0==g&&(g=function(e,n){if(!e)return[];var o,i,h,g,y,b,w,m,C,E=!1,k=[],x=[],S=[],j=!1,_=!1,O="",L=0;function M(){if(j&&!_)for(;S.length;)delete x[S.pop()];else S=[];j=!1,_=!1}function P(e){if("string"==typeof e&&(e=e.split(s,2)),!t(e)||2!==e.length)throw Error("Invalid tags: "+e);o=RegExp(r(e[0])+"\\s*"),i=RegExp("\\s*"+r(e[1])),h=RegExp("\\s*"+r("}"+e[1]))}P(n||v.tags);for(var R=new d(e);!R.eos();){if(g=R.pos,b=R.scanUntil(o))for(var T,U=0,q=b.length;U<q;++U){(T=w=b.charAt(U),a.call(u,T))?(_=!0,E=!0,O+=" "):(S.push(x.length),O+=w),x.push(["text",w,g,g+1]),g+=1,"\n"===w&&(M(),O="",L=0,E=!1)}if(!R.scan(o))break;if(j=!0,y=R.scan(p)||"name",R.scan(l),"="===y?(b=R.scanUntil(c),R.scan(c),R.scanUntil(i)):"{"===y?(b=R.scanUntil(h),R.scan(f),R.scanUntil(i),y="&"):b=R.scanUntil(i),!R.scan(i))throw Error("Unclosed tag at "+R.pos);if(m=">"==y?[y,b,g,R.pos,O,L,E]:[y,b,g,R.pos],L++,x.push(m),"#"===y||"^"===y)k.push(m);else if("/"===y){if(!(C=k.pop()))throw Error('Unopened section "'+b+'" at '+g);if(C[1]!==b)throw Error('Unclosed section "'+C[1]+'" at '+g)}else"name"===y||"{"===y||"&"===y?_=!0:"="===y&&P(b)}if(M(),C=k.pop())throw Error('Unclosed section "'+C[1]+'" at '+R.pos);return function(e){for(var t,n=[],r=n,o=[],a=0,u=e.length;a<u;++a)switch((t=e[a])[0]){case"#":case"^":r.push(t),o.push(t),r=t[4]=[];break;case"/":o.pop()[5]=t[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],o=0,a=e.length;o<a;++o)(t=e[o])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(x))}(e,n),h&&o.set(i,g)),g},g.prototype.render=function(e,t,n,r){var o=this.getConfigTags(r),a=this.parse(e,o),u=t instanceof h?t:new h(t,void 0);return this.renderTokens(a,u,n,e,r)},g.prototype.renderTokens=function(e,t,n,r,o){for(var a,u,i,l="",s=0,c=e.length;s<c;++s)i=void 0,"#"===(u=(a=e[s])[0])?i=this.renderSection(a,t,n,r,o):"^"===u?i=this.renderInverted(a,t,n,r,o):">"===u?i=this.renderPartial(a,t,n,o):"&"===u?i=this.unescapedValue(a,t):"name"===u?i=this.escapedValue(a,t,o):"text"===u&&(i=this.rawValue(a)),void 0!==i&&(l+=i);return l},g.prototype.renderSection=function(e,r,o,a,u){var i=this,l="",s=r.lookup(e[1]);if(s){if(t(s))for(var c=0,f=s.length;c<f;++c)l+=this.renderTokens(e[4],r.push(s[c]),o,a,u);else if("object"==typeof s||"string"==typeof s||"number"==typeof s)l+=this.renderTokens(e[4],r.push(s),o,a,u);else if(n(s)){if("string"!=typeof a)throw Error("Cannot use higher-order sections without the original template");null!=(s=s.call(r.view,a.slice(e[3],e[5]),function(e){return i.render(e,r,o,u)}))&&(l+=s)}else l+=this.renderTokens(e[4],r,o,a,u);return l}},g.prototype.renderInverted=function(e,n,r,o,a){var u=n.lookup(e[1]);if(!u||t(u)&&0===u.length)return this.renderTokens(e[4],n,r,o,a)},g.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),o=e.split("\n"),a=0;a<o.length;a++)o[a].length&&(a>0||!n)&&(o[a]=r+o[a]);return o.join("\n")},g.prototype.renderPartial=function(e,t,r,o){if(r){var a=this.getConfigTags(o),u=n(r)?r(e[1]):r[e[1]];if(null!=u){var i=e[6],l=e[5],s=e[4],c=u;0==l&&s&&(c=this.indentPartial(u,s,i));var f=this.parse(c,a);return this.renderTokens(f,t,r,c,o)}}},g.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},g.prototype.escapedValue=function(e,t,n){var r=this.getConfigEscape(n)||v.escape,o=t.lookup(e[1]);if(null!=o)return"number"==typeof o&&r===v.escape?String(o):r(o)},g.prototype.rawValue=function(e){return e[1]},g.prototype.getConfigTags=function(e){return t(e)?e:e&&"object"==typeof e?e.tags:void 0},g.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!t(e)?e.escape:void 0};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(cache){y.templateCache=cache},get templateCache(){return y.templateCache}},y=new g;return v.clearCache=function(){return y.clearCache()},v.parse=function(e,t){return y.parse(e,t)},v.render=function(e,n,r,o){if("string"!=typeof e)throw TypeError('Invalid template! Template should be a "string" but "'+(t(e)?"array":typeof e)+'" was given as the first argument for mustache#render(template, view, partials)');return y.render(e,n,r,o)},v.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return i[e]})},v.Scanner=d,v.Context=h,v.Writer=g,v}()},7039:function(e,t,n){let r;var o=n(1163),a=n(7294),u=n(2831),i=n(5340);function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=l(a),c=l(i);let f=e=>{let t="";return(e.useBrowserDefault&&"undefined"!=typeof window&&window&&window.navigator&&(window.navigator.languages||window.navigator.language)&&(t=(window.navigator.languages&&window.navigator.languages[0]||window.navigator.language).split("-")[0].toLowerCase()),e.useBrowserDefault&&t&&e.translations[t])?t:e.defaultLang},p=()=>{let e=u;if(Object.keys(e.translations).length<1)throw Error("Missing translations. Did you import and add the tranlations in 'i18n/index.js'?");if(0===e.defaultLang.length)throw Error("Missing default language. Did you set 'defaultLang' in 'i18n/index.js'?");if(!e.translations[e.defaultLang])throw Error(`Invalid default language '${e.defaultLang}'. Check your 'defaultLang' in 'i18n/index.js'?`);return e.defaultLang=f(e),e};function d(){let e;e=p();let t=e.defaultLang,n=e.translations,r=o.useRouter(),[u,i]=a.useState(t);return a.useEffect(()=>{r.query.lang&&r.query.lang!==u&&n&&n[r.query.lang]&&i(r.query.lang)},[u,r.query.lang]),{lang:u,setLang:i}}function h(e){let{lang:t}=d(),n=o.useRouter(),[u,i]=a.useState();if(r={},n.query){let e=n.query,t=Object.keys(e);t.forEach((t,n)=>{r[t]=e[t]})}return a.useEffect(()=>{i({...r,lang:e||t||r.lang})},[e,t]),[u]}let g=()=>{let e;o.useRouter(),e=p();let t=e.translations;e.defaultLang;let{lang:n}=d();return{t:(e,r)=>{let o=e.split(".").reduce((e,t)=>e&&e[t]||null,t[n])||e;try{return c.default.render(o,r)}catch(e){return o}}}},v=({lang:e,children:t,shallow:n=!1})=>{let{isActive:r}=function(e){let t;t=p();let n=t.defaultLang,r=o.useRouter(),[u,i]=a.useState(!1);return a.useEffect(()=>{i(r.query&&r.query.lang?r.query.lang===e:n===e)},[e,n,r.query]),{isActive:u}}(e),u=o.useRouter(),[i]=h(e),l=()=>{u.push({pathname:u.pathname,query:i},void 0,{shallow:n})};return s.default.isValidElement(t)?s.default.cloneElement(t,{onClick:()=>{t&&t.props&&"function"==typeof t.props.onClick&&t.props.onClick(),l()},"data-language-switcher":"true","data-is-current":r,role:"button","aria-label":`set language to ${e}`}):s.default.createElement("span",{role:"button","aria-label":`set language to ${e}`,"data-language-switcher":"true","data-is-current":r,onClick:()=>{l()}},t)};t.Ww=v,t.cQ=h,t.$G=g},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,a=r(n(7294)),u=n(4532),i=n(3353),l=n(1410),s=n(9064),c=n(370),f=n(9955),p=n(4224),d=n(508),h=n(1516),g=n(4266);let v=new Set;function y(e,t,n,r,o){if(o||i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(v.has(a))return;v.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function b(e){return"string"==typeof e?e:l.formatUrl(e)}let w=a.default.forwardRef(function(e,t){let n,r;let{href:l,as:v,children:w,prefetch:m,passHref:C,replace:E,shallow:k,scroll:x,locale:S,onClick:j,onMouseEnter:_,onTouchStart:O,legacyBehavior:L=!1}=e,M=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=w,L&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let P=!1!==m,R=a.default.useContext(f.RouterContext),T=a.default.useContext(p.AppRouterContext),U=null!=R?R:T,q=!R,{href:I,as:V}=a.default.useMemo(()=>{if(!R){let e=b(l);return{href:e,as:v?b(v):e}}let[e,t]=u.resolveHref(R,l,!0);return{href:e,as:v?u.resolveHref(R,v):t||e}},[R,l,v]),D=a.default.useRef(I),A=a.default.useRef(V);L&&(r=a.default.Children.only(n));let $=L?r&&"object"==typeof r&&r.ref:t,[W,B,K]=d.useIntersection({rootMargin:"200px"}),N=a.default.useCallback(e=>{(A.current!==V||D.current!==I)&&(K(),A.current=V,D.current=I),W(e),$&&("function"==typeof $?$(e):"object"==typeof $&&($.current=e))},[V,$,I,K,W]);a.default.useEffect(()=>{U&&B&&P&&y(U,I,V,{locale:S},q)},[V,I,B,S,P,null==R?void 0:R.locale,U,q]);let H={ref:N,onClick(e){L||"function"!=typeof j||j(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,n,r,o,u,l,s,c,f){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:s,scroll:l}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?a.default.startTransition(h):h()}(e,U,I,V,E,k,x,S,q,P)},onMouseEnter(e){L||"function"!=typeof _||_(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),U&&(P||!q)&&y(U,I,V,{locale:S,priority:!0,bypassPrefetchedCheck:!0},q)},onTouchStart(e){L||"function"!=typeof O||O(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),U&&(P||!q)&&y(U,I,V,{locale:S,priority:!0,bypassPrefetchedCheck:!0},q)}};if(s.isAbsoluteUrl(V))H.href=V;else if(!L||C||"a"===r.type&&!("href"in r.props)){let e=void 0!==S?S:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(V,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);H.href=t||g.addBasePath(c.addLocale(V,e,null==R?void 0:R.defaultLocale))}return L?a.default.cloneElement(r,H):a.default.createElement("a",Object.assign({},M,H),n)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:l}=e,s=l||!a,[c,f]=r.useState(!1),p=r.useRef(null),d=r.useCallback(e=>{p.current=e},[]);r.useEffect(()=>{if(a){if(s||c)return;let e=p.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},i.push(n),u.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[s,n,t,c,p.current]);let h=r.useCallback(()=>{f(!1)},[]);return[d,c,h]};var r=n(7294),o=n(29);let a="function"==typeof IntersectionObserver,u=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,u=r.useEffect,i=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),o=r[0].inst,c=r[1];return i(function(){o.value=n,o.getSnapshot=t,s(o)&&c({inst:o})},[e,n,t]),u(function(){return s(o)&&c({inst:o}),e(function(){s(o)&&c({inst:o})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},139:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),o=n(1688),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=o.useSyncExternalStore,i=r.useRef,l=r.useEffect,s=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=i(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;f=s(function(){function e(e){if(!l){if(l=!0,u=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return i=t}return i=e}if(t=i,a(u,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(u=e,i=n)}var u,i,l=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,n,r,o]);var d=u(e,f[0],f[1]);return l(function(){p.hasValue=!0,p.value=d},[d]),c(d),d}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(139)}}]);