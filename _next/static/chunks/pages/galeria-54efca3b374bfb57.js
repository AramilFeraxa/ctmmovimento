(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{573:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var r=s(7876),t=s(6558),n=s(6285),A=s(6927);function i(){return(0,r.jsxs)(n.A,{children:[(0,r.jsx)(A.A,{}),(0,r.jsx)(t.A,{})]})}},4151:e=>{e.exports={hero:"Hero_hero___IAT2",image:"Hero_image__1AfLg",overlay:"Hero_overlay__pG2nN",text:"Hero_text__EvAOv"}},5041:e=>{e.exports={gallery:"Gallery_gallery__lvUp_",grid:"Gallery_grid__UTKsu",card:"Gallery_card__b55Nf"}},5433:(e,a,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/galeria",function(){return s(573)}])},6285:(e,a,s)=>{"use strict";s.d(a,{A:()=>j});var r=s(7876),t=s(4232),n=s(6516);let A=e=>{let{loading:a}=e;return(0,r.jsx)("div",{style:{opacity:+!!a,zIndex:a?9999:-1},className:"preloader",children:(0,r.jsx)(n.A,{className:"text-center position-relative",children:(0,r.jsx)("div",{className:"spinner-container",children:(0,r.jsx)("div",{className:"spinner"})})})})};var i=s(7328),l=s.n(i),c=s(9099),o=s(8230),m=s.n(o),d=s(7307),h=s.n(d);let _={src:"/ctmmovimento//_next/static/media/movimento_White.288c00ff.png"};function g(){let[e,a]=(0,t.useState)(!1),[s,A]=(0,t.useState)(!1);(0,t.useEffect)(()=>{let e=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let i=()=>{A(!1)},l=e=>{let a=(0,c.useRouter)();return"/"===e?(console.log(a.pathname),a.pathname===e?h().active:""):a.pathname.startsWith(e)?h().active:""};return(0,r.jsxs)("nav",{className:"".concat(h().nav," ").concat(e?h().scrolled:""),children:[(0,r.jsx)(m(),{href:"/",onClick:i,children:(0,r.jsx)("img",{src:_.src,className:h().logo,alt:"Logo Movimento"})}),(0,r.jsx)("button",{className:h().hamburger,onClick:()=>{A(!s)},"aria-label":"Menu",children:"☰"}),(0,r.jsx)(n.A,{children:(0,r.jsxs)("div",{className:"".concat(h().links," ").concat(s?h().menuOpen:""),children:[(0,r.jsx)(m(),{href:"/",className:l("/"),onClick:i,children:"Strona Gł\xf3wna"}),(0,r.jsx)(m(),{href:"/galeria",className:l("/galeria"),onClick:i,children:"Galeria"}),(0,r.jsx)(m(),{href:"/o-nas",className:l("/o-nas"),onClick:i,children:"O nas"})]})})]})}var u=s(7665),x=s.n(u);function v(){return(0,r.jsxs)("footer",{className:x().footer,children:[(0,r.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," CTM Movimento"]}),(0,r.jsxs)("div",{className:x().socials,children:[(0,r.jsx)(m(),{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fa-brands fa-facebook"})}),(0,r.jsx)(m(),{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fa-brands fa-instagram"})}),(0,r.jsx)(m(),{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fa-brands fa-twitter"})})]})]})}let j=e=>{let{children:a,seo:s}=e,[n,i]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{let e=setTimeout(()=>{i(!1)},1e3);return()=>clearTimeout(e)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Czechowicki Teatr Muzyczny Movimento"}),(0,r.jsx)("meta",{name:"description",content:"Oficjalna strona Czechowickiego Teatru Muzycznego Movimento"})]}),(0,r.jsx)(A,{loading:n}),(0,r.jsxs)("main",{style:{opacity:+!n},className:"main-layout",children:[(0,r.jsx)(g,{}),a,(0,r.jsx)(v,{})]})]})}},6558:(e,a,s)=>{"use strict";s.d(a,{A:()=>o});var r=s(7876),t=s(8230),n=s.n(t),A=s(5041),i=s.n(A),l=s(7275);let c=[{slug:"koncert-wiosenny",title:"Majowy Bzik Miłosny",cover:l.A.src,images:[l.A,l.A,l.A]},{slug:"muzyka-filmowa",title:"Usta Milczą, Dusza Śpiewa - Chybie 2025",cover:l.A.src,images:[l.A,l.A,l.A]},{slug:"zakonnica-w-przebraniu",title:"Zakonnica w przebraniu",cover:l.A.src,images:[l.A,l.A,l.A]},{slug:"koncert-swiateczny",title:"Koncert Świąteczny",cover:l.A.src,images:[l.A,l.A,l.A]}];function o(){return(0,r.jsxs)("section",{className:i().gallery,children:[(0,r.jsx)("h2",{children:"Galeria wydarzeń"}),(0,r.jsx)("div",{className:i().grid,children:c.map(e=>(0,r.jsxs)(n(),{href:"/galeria/".concat(e.slug),className:i().card,children:[(0,r.jsx)("img",{src:e.cover,alt:e.title}),(0,r.jsx)("p",{children:e.title})]},e.slug))})]})}},6927:(e,a,s)=>{"use strict";s.d(a,{A:()=>i});var r=s(7876),t=s(4151),n=s.n(t);let A={src:"/ctmmovimento//_next/static/media/zakonnica.9887397a.jpg"};function i(){return(0,r.jsxs)("section",{className:n().hero,children:[(0,r.jsx)("img",{src:A.src,alt:"Teatr Movimento",className:n().image}),(0,r.jsx)("div",{className:n().overlay,children:(0,r.jsxs)("div",{className:n().text,children:[(0,r.jsx)("h1",{children:"Czechowicki Teatr Muzyczny Movimento"}),(0,r.jsx)("p",{children:"Muzyka. Sztuka. Pasja."})]})})]})}},7275:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r={src:"/ctmmovimento//_next/static/media/example.6dbd4dca.jpg",height:360,width:580,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAAqYo//8QAHRAAAwAABwAAAAAAAAAAAAAAAQIDAAUREhQhIv/aAAgBAQABPwDhXs2+2YWKimqzTwOjj//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAgEBPwB03//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AAL/2Q==",blurWidth:8,blurHeight:5}},7307:e=>{e.exports={nav:"Navbar_nav__hyIPO",scrolled:"Navbar_scrolled__9Je_A",logo:"Navbar_logo__l7h41",links:"Navbar_links__8BJfF",active:"Navbar_active__e3srB",hamburger:"Navbar_hamburger__dkvYk",menuOpen:"Navbar_menuOpen__j8eWV"}},7665:e=>{e.exports={footer:"Footer_footer__kHNNQ",socials:"Footer_socials__2m0S4"}}},e=>{var a=a=>e(e.s=a);e.O(0,[836,636,593,792],()=>a(5433)),_N_E=e.O()}]);