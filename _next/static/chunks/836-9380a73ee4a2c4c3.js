(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{303:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(4252)._(n(4232)).default.createContext({})},1312:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let r=n(4232),o=n(6959),u="function"==typeof IntersectionObserver,l=new Map,a=[];function f(e){let{rootRef:t,rootMargin:n,disabled:f}=e,i=f||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3207:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3776:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(4232),o=r.useLayoutEffect,u=r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),u(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5039:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=u(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=u(t,n));return t}(n)))}return e}function u(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=(function(){return o}).apply(t,[]))||(e.exports=n)}()},5553:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(4232);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=u(e,r)),t&&(o.current=u(t,r))},[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5679:(e,t,n)=>{"use strict";var r=n(5364);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},defaultHead:function(){return d}});let o=n(4252),u=n(8365),l=n(7876),a=u._(n(4232)),f=o._(n(3776)),i=n(303),c=n(8831),s=n(6807);function d(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(6079);let y=["name","httpEquiv","charSet","itemProp"];function b(e,t){let{inAmpMode:n}=t;return e.reduce(p,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let u=!0,l=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){l=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?u=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?u=!1:t.add(o.type);break;case"meta":for(let e=0,t=y.length;e<t;e++){let t=y[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?u=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?u=!1:(n.add(e),r[t]=n)}}}return u}}()).reverse().map((e,t)=>{let o=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:o})})}let v=function(e){let{children:t}=e,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return(0,l.jsx)(f.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,s.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5939:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return O},useLinkStatus:function(){return j}});let r=n(8365),o=n(7876),u=r._(n(4232)),l=n(1921),a=n(1533),f=n(8480),i=n(2746),c=n(4591),s=n(9948),d=n(1312),p=n(6041),y=n(2092),b=n(5553);n(3207);let v=new Set;function h(e,t,n,r){if((0,a.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let _=u.default.forwardRef(function(e,t){let n,r,{href:f,as:v,children:_,prefetch:m=null,passHref:j,replace:O,shallow:x,scroll:M,locale:P,onClick:C,onNavigate:k,onMouseEnter:S,onTouchStart:w,legacyBehavior:E=!1,...I}=e;n=_,E&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let A=u.default.useContext(s.RouterContext),R=!1!==m,{href:U,as:L}=u.default.useMemo(()=>{if(!A){let e=g(f);return{href:e,as:v?g(v):e}}let[e,t]=(0,l.resolveHref)(A,f,!0);return{href:e,as:v?(0,l.resolveHref)(A,v):t||e}},[A,f,v]),T=u.default.useRef(U),N=u.default.useRef(L);E&&(r=u.default.Children.only(n));let D=E?r&&"object"==typeof r&&r.ref:t,[H,K,B]=(0,d.useIntersection)({rootMargin:"200px"}),q=u.default.useCallback(e=>{(N.current!==L||T.current!==U)&&(B(),N.current=L,T.current=U),H(e)},[L,U,B,H]),z=(0,b.useMergedRef)(q,D);u.default.useEffect(()=>{A&&K&&R&&h(A,U,L,{locale:P})},[L,U,K,P,R,null==A?void 0:A.locale,A]);let F={ref:z,onClick(e){E||"function"!=typeof C||C(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&(e.defaultPrevented||function(e,t,n,r,o,u,l,f,i){let{nodeName:c}=e.currentTarget;if(!("A"===c.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||e.currentTarget.hasAttribute("download"))){if(!(0,a.isLocalURL)(n)){o&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:f,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})()}}(e,A,U,L,O,x,M,P,k))},onMouseEnter(e){E||"function"!=typeof S||S(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&h(A,U,L,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){E||"function"!=typeof w||w(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&h(A,U,L,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,i.isAbsoluteUrl)(L))F.href=L;else if(!E||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==P?P:null==A?void 0:A.locale;F.href=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales)||(0,y.addBasePath)((0,c.addLocale)(L,e,null==A?void 0:A.defaultLocale))}return E?u.default.cloneElement(r,F):(0,o.jsx)("a",{...I,...F,children:n})}),m=(0,u.createContext)({pending:!1}),j=()=>(0,u.useContext)(m),O=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6041:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8205),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6079:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6516:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5039),o=n.n(r),u=n(4232),l=n(7876);let a=u.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:f,Provider:i}=a,c=u.forwardRef((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:f="div",className:i,...c}=e,s=function(e,t){let{prefixes:n}=(0,u.useContext)(a);return e||n[t]||t}(n,"container");return(0,l.jsx)(f,{ref:t,...c,className:o()(i,r?"".concat(s).concat("string"==typeof r?"-".concat(r):"-fluid"):s)})});c.displayName="Container";let s=c},6807:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},7328:(e,t,n)=>{e.exports=n(5679)},8230:(e,t,n)=>{e.exports=n(5939)},9099:(e,t,n)=>{e.exports=n(4294)}}]);