(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{6664:function(t,e,n){"use strict";n.d(e,{v:function(){return u}});var o=n(7294),r=n(2798);n(3469),n(1688);function i(t){return"state"in t}var a=function(t,e){return t===e},s=function(t){return"state"in(n=t)&&"machine"in n?0!==(e=t).status?e.state:e.machine.initialState:i(t)?t.state:void 0;var e,n};function u(t,e,n,i){void 0===n&&(n=a),void 0===i&&(i=s);var u=(0,o.useCallback)((function(e){return t.subscribe(e).unsubscribe}),[t]),l=(0,o.useCallback)((function(){return i(t)}),[t,i]);return(0,r.useSyncExternalStoreWithSelector)(u,l,l,e,n)}},466:function(t){t.exports=function(){"use strict";var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function n(t){return"function"===typeof t}function o(t){return e(t)?"array":typeof t}function r(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(t,e){return null!=t&&"object"===typeof t&&e in t}function a(t,e){return null!=t&&"object"!==typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var s=RegExp.prototype.test;function u(t,e){return s.call(t,e)}var l=/\S/;function c(t){return!u(l,t)}var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function f(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return p[t]}))}var d=/\s*/,h=/\s+/,g=/\s*=/,m=/\s*\}/,v=/#|\^|\/|>|\{|&|=|!/;function y(t,n){if(!t)return[];var o,i,a,s=!1,u=[],l=[],p=[],f=!1,y=!1,E="",x=0;function C(){if(f&&!y)for(;p.length;)delete l[p.pop()];else p=[];f=!1,y=!1}function L(t){if("string"===typeof t&&(t=t.split(h,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);o=new RegExp(r(t[0])+"\\s*"),i=new RegExp("\\s*"+r(t[1])),a=new RegExp("\\s*"+r("}"+t[1]))}L(n||S.tags);for(var P,M,T,k,R,A,j=new b(t);!j.eos();){if(P=j.pos,T=j.scanUntil(o))for(var z=0,O=T.length;z<O;++z)c(k=T.charAt(z))?(p.push(l.length),E+=k):(y=!0,s=!0,E+=" "),l.push(["text",k,P,P+1]),P+=1,"\n"===k&&(C(),E="",x=0,s=!1);if(!j.scan(o))break;if(f=!0,M=j.scan(v)||"name",j.scan(d),"="===M?(T=j.scanUntil(g),j.scan(g),j.scanUntil(i)):"{"===M?(T=j.scanUntil(a),j.scan(m),j.scanUntil(i),M="&"):T=j.scanUntil(i),!j.scan(i))throw new Error("Unclosed tag at "+j.pos);if(R=">"==M?[M,T,P,j.pos,E,x,s]:[M,T,P,j.pos],x++,l.push(R),"#"===M||"^"===M)u.push(R);else if("/"===M){if(!(A=u.pop()))throw new Error('Unopened section "'+T+'" at '+P);if(A[1]!==T)throw new Error('Unclosed section "'+A[1]+'" at '+P)}else"name"===M||"{"===M||"&"===M?y=!0:"="===M&&L(T)}if(C(),A=u.pop())throw new Error('Unclosed section "'+A[1]+'" at '+j.pos);return _(w(l))}function w(t){for(var e,n,o=[],r=0,i=t.length;r<i;++r)(e=t[r])&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(o.push(e),n=e));return o}function _(t){for(var e,n=[],o=n,r=[],i=0,a=t.length;i<a;++i)switch((e=t[i])[0]){case"#":case"^":o.push(e),r.push(e),o=e[4]=[];break;case"/":r.pop()[5]=e[2],o=r.length>0?r[r.length-1][4]:n;break;default:o.push(e)}return n}function b(t){this.string=t,this.tail=t,this.pos=0}function E(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function x(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}b.prototype.eos=function(){return""===this.tail},b.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},b.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},E.prototype.push=function(t){return new E(t,this)},E.prototype.lookup=function(t){var e,o=this.cache;if(o.hasOwnProperty(t))e=o[t];else{for(var r,s,u,l=this,c=!1;l;){if(t.indexOf(".")>0)for(r=l.view,s=t.split("."),u=0;null!=r&&u<s.length;)u===s.length-1&&(c=i(r,s[u])||a(r,s[u])),r=r[s[u++]];else r=l.view[t],c=i(l.view,t);if(c){e=r;break}l=l.parent}o[t]=e}return n(e)&&(e=e.call(this.view)),e},x.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(t,e){var n=this.templateCache,o=t+":"+(e||S.tags).join(":"),r="undefined"!==typeof n,i=r?n.get(o):void 0;return void 0==i&&(i=y(t,e),r&&n.set(o,i)),i},x.prototype.render=function(t,e,n,o){var r=this.getConfigTags(o),i=this.parse(t,r),a=e instanceof E?e:new E(e,void 0);return this.renderTokens(i,a,n,t,o)},x.prototype.renderTokens=function(t,e,n,o,r){for(var i,a,s,u="",l=0,c=t.length;l<c;++l)s=void 0,"#"===(a=(i=t[l])[0])?s=this.renderSection(i,e,n,o,r):"^"===a?s=this.renderInverted(i,e,n,o,r):">"===a?s=this.renderPartial(i,e,n,r):"&"===a?s=this.unescapedValue(i,e):"name"===a?s=this.escapedValue(i,e,r):"text"===a&&(s=this.rawValue(i)),void 0!==s&&(u+=s);return u},x.prototype.renderSection=function(t,o,r,i,a){var s=this,u="",l=o.lookup(t[1]);function c(t){return s.render(t,o,r,a)}if(l){if(e(l))for(var p=0,f=l.length;p<f;++p)u+=this.renderTokens(t[4],o.push(l[p]),r,i,a);else if("object"===typeof l||"string"===typeof l||"number"===typeof l)u+=this.renderTokens(t[4],o.push(l),r,i,a);else if(n(l)){if("string"!==typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(o.view,i.slice(t[3],t[5]),c))&&(u+=l)}else u+=this.renderTokens(t[4],o,r,i,a);return u}},x.prototype.renderInverted=function(t,n,o,r,i){var a=n.lookup(t[1]);if(!a||e(a)&&0===a.length)return this.renderTokens(t[4],n,o,r,i)},x.prototype.indentPartial=function(t,e,n){for(var o=e.replace(/[^ \t]/g,""),r=t.split("\n"),i=0;i<r.length;i++)r[i].length&&(i>0||!n)&&(r[i]=o+r[i]);return r.join("\n")},x.prototype.renderPartial=function(t,e,o,r){if(o){var i=this.getConfigTags(r),a=n(o)?o(t[1]):o[t[1]];if(null!=a){var s=t[6],u=t[5],l=t[4],c=a;0==u&&l&&(c=this.indentPartial(a,l,s));var p=this.parse(c,i);return this.renderTokens(p,e,o,c,r)}}},x.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},x.prototype.escapedValue=function(t,e,n){var o=this.getConfigEscape(n)||S.escape,r=e.lookup(t[1]);if(null!=r)return"number"===typeof r&&o===S.escape?String(r):o(r)},x.prototype.rawValue=function(t){return t[1]},x.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"===typeof t?t.tags:void 0},x.prototype.getConfigEscape=function(t){return t&&"object"===typeof t&&!e(t)?t.escape:void 0};var S={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){C.templateCache=t},get templateCache(){return C.templateCache}},C=new x;return S.clearCache=function(){return C.clearCache()},S.parse=function(t,e){return C.parse(t,e)},S.render=function(t,e,n,r){if("string"!==typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+o(t)+'" was given as the first argument for mustache#render(template, view, partials)');return C.render(t,e,n,r)},S.escape=f,S.Scanner=b,S.Context=E,S.Writer=x,S}()},7039:function(t,e,n){var o=n(1163),r=n(7294),i=n(8917),a=n(466);function s(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var u=s(r),l=s(a);const c=()=>{const t=i;if(Object.keys(t.translations).length<1)throw new Error("Missing translations. Did you import and add the tranlations in 'i18n/index.js'?");if(0===t.defaultLang.length)throw new Error("Missing default language. Did you set 'defaultLang' in 'i18n/index.js'?");if(!t.translations[t.defaultLang])throw new Error(`Invalid default language '${t.defaultLang}'. Check your 'defaultLang' in 'i18n/index.js'?`);return t.defaultLang=(t=>{let e="";return t.useBrowserDefault&&"undefined"!==typeof window&&window&&window.navigator&&(window.navigator.languages||window.navigator.language)&&(e=(window.navigator.languages&&window.navigator.languages[0]||window.navigator.language).split("-")[0].toLowerCase()),t.useBrowserDefault&&e&&t.translations[e]?e:t.defaultLang})(t),t};function p(){let t;t=c();const e=t.defaultLang,n=t.translations,i=o.useRouter(),[a,s]=r.useState(e);return r.useEffect((()=>{if(i.query.lang&&i.query.lang!==a&&n&&n[i.query.lang]){let t=i.query.lang;s(t)}}),[a,i.query.lang]),{lang:a,setLang:s}}let f;function d(t){const{lang:e}=p(),n=o.useRouter(),[i,a]=r.useState();if(f={},n.query){let t=n.query;Object.keys(t).forEach(((e,n)=>{f[e]=t[e]}))}return r.useEffect((()=>{a({...f,lang:t||e||f.lang})}),[t,e]),[i]}function h(t){let e;e=c();const n=e.defaultLang,i=o.useRouter(),[a,s]=r.useState(!1);return r.useEffect((()=>{let e=!1;e=i.query&&i.query.lang?i.query.lang===t:n===t,s(e)}),[t,n,i.query]),{isActive:a}}e.$G=()=>{let t;o.useRouter(),t=c();const e=t.translations;t.defaultLang;const{lang:n}=p();return{t:(t,o)=>{let r=t.split(".").reduce(((t,e)=>t&&t[e]||null),e[n])||t;try{return l.default.render(r,o)}catch(i){return r}}}}},7329:function(){},9008:function(t,e,n){t.exports=n(3121)},1163:function(t,e,n){t.exports=n(880)},3545:function(t,e,n){"use strict";n.d(e,{ZP:function(){return C}});var o=n(7294);const r=o.createContext(null);function i(t){return{longitude:t.center.lng,latitude:t.center.lat,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,padding:t.padding}}function a(t,e){const n=e.viewState||e;let o=!1;if("longitude"in n&&"latitude"in n){const e=t.center;t.center=new e.constructor(n.longitude,n.latitude),o=o||e!==t.center}if("zoom"in n){const e=t.zoom;t.zoom=n.zoom,o=o||e!==t.zoom}if("bearing"in n){const e=t.bearing;t.bearing=n.bearing,o=o||e!==t.bearing}if("pitch"in n){const e=t.pitch;t.pitch=n.pitch,o=o||e!==t.pitch}return n.padding&&!t.isPaddingEqual(n.padding)&&(o=!0,t.padding=n.padding),o}const s=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function u(t){if(!t)return null;if("string"===typeof t)return t;if("toJS"in t&&(t=t.toJS()),!t.layers)return t;const e={};for(const o of t.layers)e[o.id]=o;const n=t.layers.map((t=>{const n=e[t.ref];let o=null;if("interactive"in t&&(o={...t},delete o.interactive),n){o=o||{...t},delete o.ref;for(const t of s)t in n&&(o[t]=n[t])}return o||t}));return{...t,layers:n}}function l(t,e){if(t===e)return!0;if(!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!l(t[n],e[n]))return!1;return!0}if(Array.isArray(e))return!1;if("object"===typeof t&&"object"===typeof e){const n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(const r of n){if(!e.hasOwnProperty(r))return!1;if(!l(t[r],e[r]))return!1}return!0}return!1}var c=n(3454);const p={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},f={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},d={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},h=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],g=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class m{constructor(t,e,n){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=t=>{const e=this.props[d[t.type]];e&&e(t)},this._onPointerEvent=t=>{"mousemove"!==t.type&&"mouseout"!==t.type||this._updateHover(t);const e=this.props[p[t.type]];if(e){if(this.props.interactiveLayerIds&&"mouseover"!==t.type&&"mouseout"!==t.type){const e=this._hoveredFeatures||this._map.queryRenderedFeatures(t.point,{layers:this.props.interactiveLayerIds});t.features=e}e(t),delete t.features}},this._onCameraEvent=t=>{if(!this._internalUpdate){const e=this.props[f[t.type]];e&&e(t)}t.type in this._deferredEvents&&(this._deferredEvents[t.type]=!1)},this._MapClass=t,this.props=e,this._initialize(n)}get map(){return this._map}get transform(){return this._renderTransform}setProps(t){const e=this.props;this.props=t;const n=this._updateSettings(t,e);n&&this._createShadowTransform(this._map);const o=this._updateSize(t),r=this._updateViewState(t,!0);this._updateStyle(t,e),this._updateStyleComponents(t,e),this._updateHandlers(t,e),(n||o||r&&!this._map.isMoving())&&this.redraw()}static reuse(t,e){const n=m.savedMaps.pop();if(!n)return null;const o=n.map,r=o.getContainer();for(e.className=r.className;r.childNodes.length>0;)e.appendChild(r.childNodes[0]);return o._container=e,t.initialViewState&&n._updateViewState(t.initialViewState,!1),o.resize(),n.setProps({...t,styleDiffing:!1}),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(()=>o.fire("load"))),n}_initialize(t){const{props:e}=this,n={...e,...e.initialViewState,accessToken:e.mapboxAccessToken||v()||null,container:t,style:u(e.mapStyle)},o=n.initialViewState||n.viewState||n;if(Object.assign(n,{center:[o.longitude||0,o.latitude||0],zoom:o.zoom||0,pitch:o.pitch||0,bearing:o.bearing||0}),e.gl){const t=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=t,e.gl)}const r=new this._MapClass(n);o.padding&&r.setPadding(o.padding),e.cursor&&(r.getCanvas().style.cursor=e.cursor),this._createShadowTransform(r);const i=r._render;r._render=t=>{this._inRender=!0,i.call(r,t),this._inRender=!1};const a=r._renderTaskQueue.run;r._renderTaskQueue.run=t=>{a.call(r._renderTaskQueue,t),this._onBeforeRepaint()},r.on("render",(()=>this._onAfterRepaint()));const s=r.fire;r.fire=this._fireEvent.bind(this,s),r.on("resize",(()=>{this._renderTransform.resize(r.transform.width,r.transform.height)})),r.on("styledata",(()=>this._updateStyleComponents(this.props,{}))),r.on("sourcedata",(()=>this._updateStyleComponents(this.props,{})));for(const u in p)r.on(u,this._onPointerEvent);for(const u in f)r.on(u,this._onCameraEvent);for(const u in d)r.on(u,this._onEvent);this._map=r}recycle(){m.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const t=this._map;!this._inRender&&t.style&&(t._frame&&(t._frame.cancel(),t._frame=null),t._render())}_createShadowTransform(t){const e=function(t){const e=t.clone();return e.pixelsToGLUnits=t.pixelsToGLUnits,e}(t.transform);t.painter.transform=e;const n=e.updateElevation;n&&(e.updateElevation=o=>{t.transform.elevation=e.elevation,n.call(e,o),n.call(t.transform,o)}),this._renderTransform=e}_updateSize(t){const{viewState:e}=t;if(e){const t=this._map;if(e.width!==t.transform.width||e.height!==t.transform.height)return t.resize(),!0}return!1}_updateViewState(t,e){if(this._internalUpdate)return!1;const n=this._map,o=this._renderTransform,{zoom:r,pitch:s,bearing:u}=o,l=n.isMoving();l&&(o.cameraElevationReference="sea");const c=a(o,{...i(n.transform),...t});if(l&&(o.cameraElevationReference="ground"),c&&e){const t=this._deferredEvents;t.move=!0,t.zoom||(t.zoom=r!==o.zoom),t.rotate||(t.rotate=u!==o.bearing),t.pitch||(t.pitch=s!==o.pitch)}return l||a(n.transform,t),c}_updateSettings(t,e){const n=this._map;let o=!1;for(const r of h)r in t&&!l(t[r],e[r])&&(o=!0,n[`set${r[0].toUpperCase()}${r.slice(1)}`](t[r]));return o}_updateStyle(t,e){if(t.cursor!==e.cursor&&(this._map.getCanvas().style.cursor=t.cursor),t.mapStyle!==e.mapStyle){const e={diff:t.styleDiffing};return"localIdeographFontFamily"in t&&(e.localIdeographFontFamily=t.localIdeographFontFamily),this._map.setStyle(u(t.mapStyle),e),!0}return!1}_updateStyleComponents(t,e){const n=this._map;let o=!1;return n.style.loaded()&&("light"in t&&!l(t.light,e.light)&&(o=!0,n.setLight(t.light)),"fog"in t&&!l(t.fog,e.fog)&&(o=!0,n.setFog(t.fog)),"terrain"in t&&!l(t.terrain,e.terrain)&&(t.terrain&&!n.getSource(t.terrain.source)||(o=!0,n.setTerrain(t.terrain)))),o}_updateHandlers(t,e){const n=this._map;let o=!1;for(const r of g){const i=t[r];l(i,e[r])||(o=!0,i?n[r].enable(i):n[r].disable())}return o}_updateHover(t){var e;const{props:n}=this;if(n.interactiveLayerIds&&(n.onMouseMove||n.onMouseEnter||n.onMouseLeave)){const r=t.type,i=(null===(e=this._hoveredFeatures)||void 0===e?void 0:e.length)>0;let a;if("mousemove"===r)try{a=this._map.queryRenderedFeatures(t.point,{layers:n.interactiveLayerIds})}catch(o){a=[]}else a=[];const s=a.length>0;!s&&i&&(t.type="mouseleave",this._onPointerEvent(t)),this._hoveredFeatures=a,s&&!i&&(t.type="mouseenter",this._onPointerEvent(t)),t.type=r}else this._hoveredFeatures=null}_fireEvent(t,e,n){const o=this._map,r=o.transform,a="string"===typeof e?e:e.type;return"move"===a&&this._updateViewState(this.props,!1),a in f&&("object"===typeof e&&(e.viewState=i(r)),this._map.isMoving())?(o.transform=this._renderTransform,t.call(o,e,n),o.transform=r,o):(t.call(o,e,n),o)}_onBeforeRepaint(){const t=this._map;this._internalUpdate=!0;for(const n in this._deferredEvents)this._deferredEvents[n]&&t.fire(n);this._internalUpdate=!1;const e=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=()=>{this._map.transform=e}}}function v(){let t=null;if("undefined"!==typeof location){const e=/access_token=([^&\/]*)/.exec(location.search);t=e&&e[1]}try{t=t||c.env.MapboxAccessToken}catch(e){}try{t=t||c.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return t}m.savedMaps=[];const y=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function w(t,e){if(!t)return null;const n=t.map,o={getMap:()=>n,getCenter:()=>t.transform.center,getZoom:()=>t.transform.zoom,getBearing:()=>t.transform.bearing,getPitch:()=>t.transform.pitch,getPadding:()=>t.transform.padding,getBounds:()=>t.transform.getBounds(),project:n=>t.transform.locationPoint(e.LngLat.convert(n)),unproject:n=>t.transform.pointLocation(e.Point.convert(n))};for(const r of function(t){const e=new Set;let n=t;for(;n;){for(const o of Object.getOwnPropertyNames(n))"_"!==o[0]&&"function"===typeof t[o]&&"fire"!==o&&"setEventedParent"!==o&&e.add(o);n=Object.getPrototypeOf(n)}return Array.from(e)}(n))r in o||y.includes(r)||(o[r]=n[r].bind(n));return o}var _="undefined"!==typeof document?o.useLayoutEffect:o.useEffect;const b=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];const E=o.createContext(null),x={minZoom:0,maxZoom:22,minPitch:0,maxPitch:60,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,mapStyle:{version:8,sources:{},layers:[]},styleDiffing:!0,projection:"mercator",renderWorldCopies:!0,onError:t=>console.error(t.error),RTLTextPlugin:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"},S=(0,o.forwardRef)(((t,e)=>{const i=(0,o.useContext)(r),[a,s]=(0,o.useState)(null),u=(0,o.useRef)(),{current:l}=(0,o.useRef)({mapLib:null,map:null});(0,o.useEffect)((()=>{const e=t.mapLib;let o,r=!0;return Promise.resolve(e||n.e(634).then(n.t.bind(n,6158,23))).then((e=>{if(r){if(e.Map||(e=e.default),!e||!e.Map)throw new Error("Invalid mapLib");if(!e.supported(t))throw new Error("Map is not supported by this browser");!function(t,e){for(const n of b)n in e&&(t[n]=e[n]);e.RTLTextPlugin&&t.getRTLTextPluginStatus&&"unavailable"===t.getRTLTextPluginStatus()&&t.setRTLTextPlugin(e.RTLTextPlugin,(t=>{t&&console.error(t)}),!1)}(e,t),t.reuseMaps&&(o=m.reuse(t,u.current)),o||(o=new m(e.Map,t,u.current)),l.map=w(o,e),l.mapLib=e,s(o),null===i||void 0===i||i.onMapMount(l.map,t.id)}})).catch((e=>{t.onError({type:"error",target:null,originalEvent:null,error:e})})),()=>{r=!1,o&&(null===i||void 0===i||i.onMapUnmount(t.id),t.reuseMaps?o.recycle():o.destroy())}}),[]),_((()=>{a&&a.setProps(t)})),(0,o.useImperativeHandle)(e,(()=>l.map),[a]);const c=(0,o.useMemo)((()=>({position:"relative",width:"100%",height:"100%",...t.style})),[t.style]);return o.createElement("div",{id:t.id,ref:u,style:c},a&&o.createElement(E.Provider,{value:l},t.children))}));S.displayName="Map",S.defaultProps=x;var C=S,L=n(3935);const P=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function M(t,e){if(!t||!e)return;const n=t.style;for(const o in e){const t=e[o];Number.isFinite(t)&&!P.test(o)?n[o]=`${t}px`:n[o]=t}}function T(t){const{map:e,mapLib:n}=(0,o.useContext)(E),r=(0,o.useRef)({props:t});r.current.props=t;const i=(0,o.useMemo)((()=>{let e=!1;o.Children.forEach(t.children,(t=>{t&&(e=!0)}));const a={...t,element:e?document.createElement("div"):null},s=new n.Marker(a).setLngLat([t.longitude,t.latitude]);return s.getElement().addEventListener("click",(t=>{var e,n;null===(n=(e=r.current.props).onClick)||void 0===n||n.call(e,{type:"click",target:s,originalEvent:t})})),s.on("dragstart",(t=>{var e,n;const o=t;o.lngLat=i.getLngLat(),null===(n=(e=r.current.props).onDragStart)||void 0===n||n.call(e,o)})),s.on("drag",(t=>{var e,n;const o=t;o.lngLat=i.getLngLat(),null===(n=(e=r.current.props).onDrag)||void 0===n||n.call(e,o)})),s.on("dragend",(t=>{var e,n;const o=t;o.lngLat=i.getLngLat(),null===(n=(e=r.current.props).onDragEnd)||void 0===n||n.call(e,o)})),s}),[]);return(0,o.useEffect)((()=>(i.addTo(e.getMap()),()=>{i.remove()})),[]),(0,o.useEffect)((()=>{M(i.getElement(),t.style)}),[t.style]),i.getLngLat().lng===t.longitude&&i.getLngLat().lat===t.latitude||i.setLngLat([t.longitude,t.latitude]),t.offset&&!function(t,e){const n=Array.isArray(t)?t[0]:t?t.x:0,o=Array.isArray(t)?t[1]:t?t.y:0,r=Array.isArray(e)?e[0]:e?e.x:0,i=Array.isArray(e)?e[1]:e?e.y:0;return n===r&&o===i}(i.getOffset(),t.offset)&&i.setOffset(t.offset),i.isDraggable()!==t.draggable&&i.setDraggable(t.draggable),i.getRotation()!==t.rotation&&i.setRotation(t.rotation),i.getRotationAlignment()!==t.rotationAlignment&&i.setRotationAlignment(t.rotationAlignment),i.getPitchAlignment()!==t.pitchAlignment&&i.setPitchAlignment(t.pitchAlignment),i.getPopup()!==t.popup&&i.setPopup(t.popup),(0,L.createPortal)(t.children,i.getElement())}T.defaultProps={draggable:!1,popup:null,rotation:0,rotationAlignment:"auto",pitchAlignment:"auto"};o.memo(T);function k(t){return new Set(t?t.trim().split(/\s+/):[])}o.memo((function(t){const{map:e,mapLib:n}=(0,o.useContext)(E),r=(0,o.useMemo)((()=>document.createElement("div")),[]),i=(0,o.useRef)({props:t});i.current.props=t;const a=(0,o.useMemo)((()=>{const e={...t},o=new n.Popup(e).setLngLat([t.longitude,t.latitude]);return o.once("open",(t=>{var e,n;null===(n=(e=i.current.props).onOpen)||void 0===n||n.call(e,t)})),o}),[]);if((0,o.useEffect)((()=>{const t=t=>{var e,n;null===(n=(e=i.current.props).onClose)||void 0===n||n.call(e,t)};return a.on("close",t),a.setDOMContent(r).addTo(e.getMap()),()=>{a.off("close",t),a.isOpen()&&a.remove()}}),[]),(0,o.useEffect)((()=>{M(a.getElement(),t.style)}),[t.style]),a.isOpen()&&(a.getLngLat().lng===t.longitude&&a.getLngLat().lat===t.latitude||a.setLngLat([t.longitude,t.latitude]),t.offset&&!l(a.options.offset,t.offset)&&a.setOffset(t.offset),a.options.anchor===t.anchor&&a.options.maxWidth===t.maxWidth||(a.options.anchor=t.anchor,a.setMaxWidth(t.maxWidth)),a.options.className!==t.className)){const e=k(a.options.className),n=k(t.className);for(const t of e)n.has(t)||a.removeClassName(t);for(const t of n)e.has(t)||a.addClassName(t);a.options.className=t.className}return(0,L.createPortal)(t.children,r)}));function R(t,e,n){const r=(0,o.useContext)(E),i=(0,o.useMemo)((()=>t(r)),[]);return(0,o.useEffect)((()=>{var t;const{map:o}=r;return o.hasControl(i)||o.addControl(i,null===(t=n||e)||void 0===t?void 0:t.position),()=>{"function"===typeof e&&e(r),o.hasControl(i)&&o.removeControl(i)}}),[]),i}o.memo((function(t){const e=R((({mapLib:e})=>new e.AttributionControl(t)),{position:t.position});return(0,o.useEffect)((()=>{M(e._container,t.style)}),[t.style]),null}));o.memo((function(t){const e=R((({mapLib:e})=>new e.FullscreenControl({container:t.containerId&&document.getElementById(t.containerId)})),{position:t.position});return(0,o.useEffect)((()=>{M(e._controlContainer,t.style)}),[t.style]),null}));const A=(0,o.forwardRef)(((t,e)=>{const n=(0,o.useRef)({props:t}),r=R((({mapLib:e})=>{const o=new e.GeolocateControl(t),r=o._setupUI;return o._setupUI=t=>{o._container.hasChildNodes()||r(t)},o.on("geolocate",(t=>{var e,o;null===(o=(e=n.current.props).onGeolocate)||void 0===o||o.call(e,t)})),o.on("error",(t=>{var e,o;null===(o=(e=n.current.props).onError)||void 0===o||o.call(e,t)})),o.on("outofmaxbounds",(t=>{var e,o;null===(o=(e=n.current.props).onOutOfMaxBounds)||void 0===o||o.call(e,t)})),o.on("trackuserlocationstart",(t=>{var e,o;null===(o=(e=n.current.props).onTrackUserLocationStart)||void 0===o||o.call(e,t)})),o.on("trackuserlocationend",(t=>{var e,o;null===(o=(e=n.current.props).onTrackUserLocationEnd)||void 0===o||o.call(e,t)})),o}),{position:t.position});return n.current.props=t,(0,o.useImperativeHandle)(e,(()=>({trigger:()=>r.trigger()})),[]),(0,o.useEffect)((()=>{M(r._container,t.style)}),[t.style]),null}));A.displayName="GeolocateControl";o.memo(A);o.memo((function(t){const e=R((({mapLib:e})=>new e.NavigationControl(t)),{position:t.position});return(0,o.useEffect)((()=>{M(e._container,t.style)}),[t.style]),null}));function j(t){const e=R((({mapLib:e})=>new e.ScaleControl(t)),{position:t.position});return e.options.unit===t.unit&&e.options.maxWidth===t.maxWidth||(e.options.maxWidth=t.maxWidth,e.setUnit(t.unit)),(0,o.useEffect)((()=>{M(e._container,t.style)}),[t.style]),null}j.defaultProps={unit:"metric",maxWidth:100};o.memo(j)},3250:function(t,e,n){"use strict";var o=n(7294);var r="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},i=o.useState,a=o.useEffect,s=o.useLayoutEffect,u=o.useDebugValue;function l(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!r(t,n)}catch(o){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),o=i({inst:{value:n,getSnapshot:e}}),r=o[0].inst,c=o[1];return s((function(){r.value=n,r.getSnapshot=e,l(r)&&c({inst:r})}),[t,n,e]),a((function(){return l(r)&&c({inst:r}),t((function(){l(r)&&c({inst:r})}))}),[t]),u(n),n};e.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:c},6742:function(t,e,n){"use strict";var o=n(7294),r=n(1688);var i="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},a=r.useSyncExternalStore,s=o.useRef,u=o.useEffect,l=o.useMemo,c=o.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var p=s(null);if(null===p.current){var f={hasValue:!1,value:null};p.current=f}else f=p.current;p=l((function(){function t(t){if(!u){if(u=!0,a=t,t=o(t),void 0!==r&&f.hasValue){var e=f.value;if(r(e,t))return s=e}return s=t}if(e=s,i(a,t))return e;var n=o(t);return void 0!==r&&r(e,n)?e:(a=t,s=n)}var a,s,u=!1,l=void 0===n?null:n;return[function(){return t(e())},null===l?void 0:function(){return t(l())}]}),[e,n,o,r]);var d=a(t,p[0],p[1]);return u((function(){f.hasValue=!0,f.value=d}),[d]),c(d),d}},1688:function(t,e,n){"use strict";t.exports=n(3250)},2798:function(t,e,n){"use strict";t.exports=n(6742)}}]);