(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{303:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(4252)._(n(4232)).default.createContext({})},1249:e=>{e.exports={shows:"Shows_shows__7vJhS",grid:"Shows_grid__KFKK8",card:"Shows_card__uRDOP"}},1312:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=n(4232),o=n(6959),a="function"==typeof IntersectionObserver,l=new Map,i=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!a,[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(c||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),l.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!u){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,u,f.current]),[p,u,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2936:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7181)}])},3207:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3776:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(4232),o=r.useLayoutEffect,a=r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4151:e=>{e.exports={hero:"Hero_hero___IAT2",image:"Hero_image__1AfLg",overlay:"Hero_overlay__pG2nN",text:"Hero_text__EvAOv"}},5039:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}(n)))}return e}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=(function(){return o}).apply(t,[]))||(e.exports=n)}()},5041:e=>{e.exports={gallery:"Gallery_gallery__lvUp_",grid:"Gallery_grid__UTKsu",item:"Gallery_item__Vtno6"}},5553:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(4232);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=a(e,r)),t&&(o.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5679:(e,t,n)=>{"use strict";var r=n(5364);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return _},defaultHead:function(){return f}});let o=n(4252),a=n(8365),l=n(7876),i=a._(n(4232)),s=o._(n(3776)),c=n(303),u=n(8831),d=n(6807);function f(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(6079);let h=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(p,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let a=!0,l=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){l=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?a=!1:(n.add(e),r[t]=n)}}}return a}}()).reverse().map((e,t)=>{let o=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:o})})}let _=function(e){let{children:t}=e,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5939:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},useLinkStatus:function(){return g}});let r=n(8365),o=n(7876),a=r._(n(4232)),l=n(1921),i=n(1533),s=n(8480),c=n(2746),u=n(4591),d=n(9948),f=n(1312),p=n(6041),h=n(2092),m=n(5553);n(3207);let _=new Set;function y(e,t,n,r){if((0,i.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(_.has(o))return;_.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let j=a.default.forwardRef(function(e,t){let n,r,{href:s,as:_,children:j,prefetch:x=null,passHref:g,replace:b,shallow:k,scroll:w,locale:M,onClick:O,onNavigate:N,onMouseEnter:C,onTouchStart:P,legacyBehavior:S=!1,...z}=e;n=j,S&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let E=a.default.useContext(d.RouterContext),T=!1!==x,{href:A,as:I}=a.default.useMemo(()=>{if(!E){let e=v(s);return{href:e,as:_?v(_):e}}let[e,t]=(0,l.resolveHref)(E,s,!0);return{href:e,as:_?(0,l.resolveHref)(E,_):t||e}},[E,s,_]),L=a.default.useRef(A),U=a.default.useRef(I);S&&(r=a.default.Children.only(n));let R=S?r&&"object"==typeof r&&r.ref:t,[H,K,D]=(0,f.useIntersection)({rootMargin:"200px"}),F=a.default.useCallback(e=>{(U.current!==I||L.current!==A)&&(D(),U.current=I,L.current=A),H(e)},[I,A,D,H]),G=(0,m.useMergedRef)(F,R);a.default.useEffect(()=>{E&&K&&T&&y(E,A,I,{locale:M})},[I,A,K,M,T,null==E?void 0:E.locale,E]);let B={ref:G,onClick(e){S||"function"!=typeof O||O(e),S&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),E&&(e.defaultPrevented||function(e,t,n,r,o,a,l,s,c){let{nodeName:u}=e.currentTarget;if(!("A"===u.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||e.currentTarget.hasAttribute("download"))){if(!(0,i.isLocalURL)(n)){o&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(c){let e=!1;if(c({preventDefault:()=>{e=!0}}),e)return}let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})()}}(e,E,A,I,b,k,w,M,N))},onMouseEnter(e){S||"function"!=typeof C||C(e),S&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),E&&y(E,A,I,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){S||"function"!=typeof P||P(e),S&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),E&&y(E,A,I,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if((0,c.isAbsoluteUrl)(I))B.href=I;else if(!S||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==E?void 0:E.locale;B.href=(null==E?void 0:E.isLocaleDomain)&&(0,p.getDomainLocale)(I,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales)||(0,h.addBasePath)((0,u.addLocale)(I,e,null==E?void 0:E.defaultLocale))}return S?a.default.cloneElement(r,B):(0,o.jsx)("a",{...z,...B,children:n})}),x=(0,a.createContext)({pending:!1}),g=()=>(0,a.useContext)(x),b=j;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6041:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8205),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6079:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6807:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},7181:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var r=n(7876),o=n(4151),a=n.n(o);let l={src:"/ctmmovimento//_next/static/media/main.c3fe2373.jpeg"};function i(){return(0,r.jsxs)("section",{className:a().hero,children:[(0,r.jsx)("img",{src:l.src,alt:"Teatr Movimento",className:a().image}),(0,r.jsx)("div",{className:a().overlay,children:(0,r.jsxs)("div",{className:a().text,children:[(0,r.jsx)("h1",{children:"Czechowicki Teatr Muzyczny Movimento"}),(0,r.jsx)("p",{children:"Pasja. Muzyka. Teatr."})]})})]})}var s=n(5039),c=n.n(s),u=n(4232);let d=u.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:f,Provider:p}=d,h=u.forwardRef((e,t)=>{let{bsPrefix:n,fluid:o=!1,as:a="div",className:l,...i}=e,s=function(e,t){let{prefixes:n}=(0,u.useContext)(d);return e||n[t]||t}(n,"container");return(0,r.jsx)(a,{ref:t,...i,className:c()(l,o?"".concat(s).concat("string"==typeof o?"-".concat(o):"-fluid"):s)})});h.displayName="Container";var m=n(7433),_=n.n(m);function y(){return(0,r.jsx)(h,{children:(0,r.jsxs)("section",{className:_().about,children:[(0,r.jsxs)("div",{className:_().text,children:[(0,r.jsx)("h2",{children:"O Teatrze"}),(0,r.jsx)("p",{children:"Czechowicki Teatr Muzyczny Movimento to pasja, muzyka i emocje zamknięte w światłach sceny. Od lat tworzymy wyjątkowe spektakle, angażując utalentowanych artyst\xf3w z regionu. Nasza scena tętni życiem, a każda premiera to święto dla widz\xf3w."})]}),(0,r.jsx)("img",{src:l.src,className:_().image})]})})}var v=n(1249),j=n.n(v);function x(){return(0,r.jsx)(h,{children:(0,r.jsxs)("section",{className:j().shows,children:[(0,r.jsx)("h2",{children:"Nadchodzące spektakle"}),(0,r.jsx)("div",{className:j().grid,children:[{title:"Romeo i Julia",date:"25 kwietnia 2025",desc:"Nowa interpretacja klasycznej historii miłosnej."},{title:"W rytmie serca",date:"10 maja 2025",desc:"Musical o emocjach, dźwiękach i marzeniach."},{title:"Człowiek z La Manchy",date:"22 czerwca 2025",desc:"Spektakl o sile wyobraźni i nieugiętości ducha."}].map((e,t)=>(0,r.jsxs)("div",{className:j().card,children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:e.date})}),(0,r.jsx)("p",{children:e.desc})]},t))})]})})}var g=n(5041),b=n.n(g);function k(){return(0,r.jsxs)("section",{className:b().gallery,children:[(0,r.jsx)("h2",{children:"Galeria"}),(0,r.jsx)("div",{className:b().grid})]})}var w=n(7665),M=n.n(w),O=n(8230),N=n.n(O);function C(){return(0,r.jsxs)("footer",{className:M().footer,children:[(0,r.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Movimento – Czechowicki Teatr Muzyczny"]}),(0,r.jsxs)("div",{className:M().socials,children:[(0,r.jsx)(N(),{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fa-brands fa-facebook"})}),(0,r.jsx)(N(),{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fa-brands fa-instagram"})}),(0,r.jsx)(N(),{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fa-brands fa-twitter"})})]})]})}let P=e=>{let{loading:t}=e;return(0,r.jsx)("div",{style:{opacity:+!!t,zIndex:t?9999:-1},className:"preloader",children:(0,r.jsx)(h,{className:"text-center position-relative",children:(0,r.jsx)("div",{className:"spinner-container",children:(0,r.jsx)("div",{className:"spinner"})})})})};var S=n(7328),z=n.n(S),E=n(7307),T=n.n(E);let A={src:"/ctmmovimento//_next/static/media/movimento_White.288c00ff.png"};function I(){let[e,t]=(0,u.useState)(!1),[n,o]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let a=()=>{o(!1)};return(0,r.jsxs)("nav",{className:"".concat(T().nav," ").concat(e?T().scrolled:""),children:[(0,r.jsx)(N(),{href:"/",onClick:a,children:(0,r.jsx)("img",{src:A.src,className:T().logo,alt:"Logo Movimento"})}),(0,r.jsx)("button",{className:T().hamburger,onClick:()=>{o(!n)},"aria-label":"Menu",children:"☰"}),(0,r.jsxs)("div",{className:"".concat(T().links," ").concat(n?T().menuOpen:""),children:[(0,r.jsx)(N(),{href:"/",onClick:a,children:"Strona Gł\xf3wna"}),(0,r.jsx)(N(),{href:"/spektakle",onClick:a,children:"Spektakle"}),(0,r.jsx)(N(),{href:"/kontakt",onClick:a,children:"Kontakt"})]})]})}let L=e=>{let{children:t,seo:n}=e,[o,a]=(0,u.useState)(!0);return(0,u.useEffect)(()=>{let e=setTimeout(()=>{a(!1)},1e3);return()=>clearTimeout(e)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(z(),{children:[(0,r.jsx)("title",{children:"Czechowicki Teatr Muzyczny Movimento"}),(0,r.jsx)("meta",{name:"description",content:"Oficjalna strona Czechowickiego Teatru Muzycznego Movimento"})]}),(0,r.jsx)(P,{loading:o}),(0,r.jsxs)("main",{style:{opacity:+!o},className:"main-layout",children:[(0,r.jsx)(I,{}),t,(0,r.jsx)(C,{})]})]})};function U(){return(0,r.jsxs)(L,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(y,{}),(0,r.jsx)(x,{}),(0,r.jsx)("div",{style:{background:"var(--burgundy)",height:"250px"},children:(0,r.jsx)("p",{style:{color:"white",textAlign:"center",paddingTop:"100px"},children:"tu będzie coś"})}),(0,r.jsx)(k,{})]})}},7307:e=>{e.exports={nav:"Navbar_nav__hyIPO",logo:"Navbar_logo__l7h41",links:"Navbar_links__8BJfF",hamburger:"Navbar_hamburger__dkvYk",menuOpen:"Navbar_menuOpen__j8eWV"}},7328:(e,t,n)=>{e.exports=n(5679)},7433:e=>{e.exports={about:"About_about__cynjU",text:"About_text__bhue4",image:"About_image__wBpYo"}},7665:e=>{e.exports={footer:"Footer_footer__kHNNQ",socials:"Footer_socials__2m0S4"}},8230:(e,t,n)=>{e.exports=n(5939)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(2936)),_N_E=e.O()}]);