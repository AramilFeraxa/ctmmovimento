(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{2439:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(4252),a=r(8365),n=r(7876),s=a._(r(4232)),l=i._(r(8477)),o=i._(r(9836)),c=r(4915),u=r(6904),d=r(72);r(546);let f=r(8265),m=i._(r(3829)),g=r(1026),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/ctmmovimento/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,i,a,n,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function A(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:a,height:l,width:o,decoding:c,className:u,style:d,fetchPriority:f,placeholder:m,loading:h,unoptimized:v,fill:_,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:x,sizesInput:y,onLoad:E,onError:N,...C}=e,k=(0,s.useCallback)(e=>{e&&(N&&(e.src=e.src),e.complete&&p(e,m,b,w,j,v,y))},[r,m,b,w,j,N,v,y]),z=(0,g.useMergedRef)(t,k);return(0,n.jsx)("img",{...C,...A(f),loading:h,width:o,height:l,decoding:c,"data-nimg":_?"fill":"1",className:u,style:d,sizes:a,srcSet:i,src:r,ref:z,onLoad:e=>{p(e.currentTarget,m,b,w,j,v,y)},onError:e=>{x(!0),"empty"!==m&&j(!0),N&&N(e)}})});function _(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...A(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,n.jsx)(o.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(d.ImageConfigContext),a=(0,s.useMemo)(()=>{var e;let t=h||i||u.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),a=t.deviceSizes.sort((e,t)=>e-t),n=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:a,qualities:n}},[i]),{onLoad:l,onLoadingComplete:o}=e,g=(0,s.useRef)(l);(0,s.useEffect)(()=>{g.current=l},[l]);let p=(0,s.useRef)(o);(0,s.useEffect)(()=>{p.current=o},[o]);let[A,b]=(0,s.useState)(!1),[w,j]=(0,s.useState)(!1),{props:x,meta:y}=(0,c.getImgProps)(e,{defaultLoader:m.default,imgConf:a,blurComplete:A,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{...x,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:g,onLoadingCompleteRef:p,setBlurComplete:b,setShowAltText:j,sizesInput:e.sizes,ref:t}),y.priority?(0,n.jsx)(_,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2539:e=>{e.exports={wrapper:"GalleryPage_wrapper__XxhLU",grid:"GalleryPage_grid__uaCoQ",imageWrapper:"GalleryPage_imageWrapper__igE7X",backButton:"GalleryPage_backButton__uoyMe"}},3236:e=>{e.exports={footer:"Footer_footer__kHNNQ",socials:"Footer_socials__2m0S4"}},3657:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return l}});let i=r(4252),a=r(4915),n=r(2439),s=i._(r(3829));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/ctmmovimento/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=n.Image},3829:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:a,quality:n}=e,s=n||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+a+"&q="+s+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},4122:e=>{e.exports={nav:"Navbar_nav__hyIPO",scrolled:"Navbar_scrolled__9Je_A",logo:"Navbar_logo__l7h41",links:"Navbar_links__8BJfF",active:"Navbar_active__e3srB",linkGroup:"Navbar_linkGroup__QpQVR",linkWithArrow:"Navbar_linkWithArrow__sGhtt",arrowButton:"Navbar_arrowButton__tW_Xy",open:"Navbar_open__v8v6r",submenu:"Navbar_submenu__wTq0g",subLink:"Navbar_subLink__nelTK",hamburger:"Navbar_hamburger__dkvYk",menuOpen:"Navbar_menuOpen__j8eWV"}},4587:(e,t,r)=>{r(3657)},4702:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});let i={src:"/ctmmovimento//_next/static/media/example.6dbd4dca.jpg",height:360,width:580,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAAqYo//8QAHRAAAwAABwAAAAAAAAAAAAAAAQIDAAUREhQhIv/aAAgBAQABPwDhXs2+2YWKimqzTwOjj//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAgEBPwB03//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AAL/2Q==",blurWidth:8,blurHeight:5}},4915:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(546);let i=r(5284),a=r(6904),n=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r,o;let c,u,d,{src:f,sizes:m,unoptimized:g=!1,priority:h=!1,loading:p,className:A,quality:v,width:_,height:b,fill:w=!1,style:j,overrideSrc:x,onLoad:y,onLoadingComplete:E,placeholder:N="empty",blurDataURL:C,fetchPriority:k,decoding:z="async",layout:P,objectFit:S,objectPosition:R,lazyBoundary:O,lazyRoot:M,...I}=e,{imgConf:B,showAltText:D,blurComplete:G,defaultLoader:Q}=t,F=B||a.imageConfigDefault;if("allSizes"in F)c=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),i=null==(r=F.qualities)?void 0:r.sort((e,t)=>e-t);c={...F,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===Q)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let L=I.loader||Q;delete I.loader,delete I.srcSet;let T="__next_img_default"in L;if(T){if("custom"===c.loader)throw Object.defineProperty(Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(P){"fill"===P&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!m&&(m=t)}let W="",U=l(_),X=l(b);if((o=f)&&"object"==typeof o&&(s(o)||void 0!==o.src)){let e=s(f)?f.default:f;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(u=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,W=e.src,!w)if(U||X){if(U&&!X){let t=U/e.width;X=Math.round(e.height*t)}else if(!U&&X){let t=X/e.height;U=Math.round(e.width*t)}}else U=e.width,X=e.height}let Y=!h&&("lazy"===p||void 0===p);(!(f="string"==typeof f?f:W)||f.startsWith("data:")||f.startsWith("blob:"))&&(g=!0,Y=!1),c.unoptimized&&(g=!0),T&&!c.dangerouslyAllowSVG&&f.split("?",1)[0].endsWith(".svg")&&(g=!0);let q=l(v),K=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:R}:{},D?{}:{color:"transparent"},j),V=G||"empty"===N?null:"blur"===N?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:U,heightInt:X,blurWidth:u,blurHeight:d,blurDataURL:C||"",objectFit:K.objectFit})+'")':'url("'+N+'")',H=n.includes(K.objectFit)?"fill"===K.objectFit?"100% 100%":"cover":K.objectFit,J=V?{backgroundSize:H,backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Z=function(e){let{config:t,src:r,unoptimized:i,width:a,quality:n,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))],kind:"x"}}(t,a,s),u=o.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:o.map((e,i)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:l({config:t,src:r,quality:n,width:o[u]})}}({config:c,src:f,unoptimized:g,width:U,quality:q,sizes:m,loader:L});return{props:{...I,loading:Y?"lazy":p,fetchPriority:k,width:U,height:X,decoding:z,className:A,style:{...K,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:x||Z.src},meta:{unoptimized:g,priority:h,placeholder:N,fill:w}}}},5284:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:a,blurDataURL:n,objectFit:s}=e,l=i?40*i:t,o=a?40*a:r,c=l&&o?"viewBox='0 0 "+l+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5561:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__N_SSG:()=>c,default:()=>u});var i=r(7876),a=r(9099);r(4587);var n=r(2539),s=r.n(n);r(4702);var l=r(9361),o=r(8827),c=!0;function u(e){let{gallery:t}=e,r=(0,a.useRouter)();return t?(0,i.jsx)(l.A,{children:(0,i.jsx)(o.A,{children:(0,i.jsxs)("section",{className:s().wrapper,children:[(0,i.jsxs)("button",{className:"".concat(s().backButton," button"),onClick:()=>r.push("/"),children:[(0,i.jsx)("i",{className:"fa-solid fa-arrow-left"})," Powr\xf3t"]}),(0,i.jsx)("p",{children:"Galeria zdjęć"}),(0,i.jsx)("h1",{children:t.title}),(0,i.jsx)("div",{className:s().grid,children:t.images.map((e,t)=>(0,i.jsx)("div",{className:s().imageWrapper,children:(0,i.jsx)("img",{src:e.src,alt:"Zdjęcie ".concat(t+1)})},t))})]})})}):(0,i.jsx)("p",{style:{padding:"2rem"},children:"Galeria nie została znaleziona."})}},6792:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/galeria/[slug]",function(){return r(5561)}])},9361:(e,t,r)=>{"use strict";r.d(t,{A:()=>b});var i=r(7876),a=r(4232),n=r(8827);let s=e=>{let{loading:t}=e;return(0,i.jsx)("div",{style:{opacity:+!!t,zIndex:t?9999:-1},className:"preloader",children:(0,i.jsx)(n.A,{className:"text-center position-relative",children:(0,i.jsx)("div",{className:"spinner-container",children:(0,i.jsx)("div",{className:"spinner"})})})})};var l=r(7328),o=r.n(l),c=r(8230),u=r.n(c),d=r(9099),f=r(4122),m=r.n(f);let g={src:"/ctmmovimento//_next/static/media/movimento_White.288c00ff.png"},h=[{href:"/",label:"Strona Gł\xf3wna"},{href:"/kalendarz",label:"Kalendarz",subitems:[{href:"/kalendarz/aktualne",label:"Aktualne"},{href:"/kalendarz/archiwalne",label:"Archiwalne"}]},{href:"/o-nas",label:"O nas"},{href:"/instruktorzy",label:"Instruktorzy"},{href:"/galeria",label:"Galeria"}];function p(){let[e,t]=(0,a.useState)(!1),[r,n]=(0,a.useState)(!1),[s,l]=(0,a.useState)(null),[o,c]=(0,a.useState)(!1),f=(0,a.useRef)(null),p=(0,d.useRouter)();(0,a.useEffect)(()=>{let e=()=>t(window.scrollY>50);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.useEffect)(()=>{let e=()=>c(window.innerWidth<=768);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.useEffect)(()=>{let e=e=>{var t;(null==(t=f.current)?void 0:t.contains(e.target))||(n(!1),l(null))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let A=()=>{n(!1),l(null)},v=e=>"/"===e?"/"===p.pathname?m().active:"":p.pathname.startsWith(e)?m().active:"";return(0,i.jsxs)("nav",{ref:f,className:"".concat(m().nav," ").concat(e?m().scrolled:""),children:[(0,i.jsx)("div",{style:{marginLeft:"10%",marginRight:"10%"},children:(0,i.jsx)(u(),{href:"/",onClick:A,children:(0,i.jsx)("img",{src:g.src,className:m().logo,alt:"Logo Movimento"})})}),(0,i.jsxs)("button",{className:"".concat(m().hamburger," ").concat(r?m().open:""),onClick:()=>n(e=>!e),"aria-label":"Menu",children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]}),(0,i.jsx)("div",{className:"".concat(m().links," ").concat(r?m().menuOpen:""),children:h.map((e,t)=>{let r=s===t,a=!!e.subitems;return(0,i.jsxs)("div",{className:"".concat(m().linkGroup," ").concat(o&&r?m().menuOpen:""),children:[(0,i.jsxs)("div",{className:m().linkWithArrow,children:[(0,i.jsx)(u(),{href:e.href,className:"".concat(m().link," ").concat(v(e.href)),onClick:A,children:e.label}),a&&o&&(0,i.jsx)("button",{type:"button",className:"".concat(m().arrowButton," ").concat(r?m().open:""),onClick:e=>{e.preventDefault(),e.stopPropagation(),l(r?null:t)},children:"▼"})]}),a&&(0,i.jsx)("div",{className:m().submenu,children:e.subitems.map((e,t)=>(0,i.jsx)(u(),{href:e.href,className:m().subLink,onClick:A,children:e.label},t))})]},t)})})]})}var A=r(3236),v=r.n(A);function _(){return(0,i.jsxs)("footer",{className:v().footer,children:[(0,i.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," CTM Movimento"]}),(0,i.jsxs)("div",{className:v().socials,children:[(0,i.jsx)(u(),{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fa-brands fa-facebook"})}),(0,i.jsx)(u(),{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fa-brands fa-instagram"})}),(0,i.jsx)(u(),{href:"https://tiktok.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fa-brands fa-tiktok"})})]})]})}let b=e=>{let{children:t,seo:r}=e,[n,l]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=setTimeout(()=>{l(!1)},1e3);return()=>clearTimeout(e)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Czechowicki Teatr Muzyczny Movimento"}),(0,i.jsx)("meta",{name:"description",content:"Oficjalna strona Czechowickiego Teatru Muzycznego Movimento"})]}),(0,i.jsx)(s,{loading:n}),(0,i.jsxs)("main",{style:{opacity:+!n},className:"main-layout",children:[(0,i.jsx)(p,{}),t,(0,i.jsx)(_,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[723,636,593,792],()=>t(6792)),_N_E=e.O()}]);