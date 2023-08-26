import{a as Ne}from"../chunks/products.e35fa5d1.js";import{H as je}from"../chunks/control.e7f5239e.js";import{S as Me,i as Be,s as Ae,k as f,a as y,q as M,l as h,m as g,c as D,r as B,h as i,n,L as te,b as le,F as r,N as Pe,u as J,J as de,M as xe,D as ye,E as De,y as qe,z as ze,A as Oe,g as $e,d as He,B as Le}from"../chunks/index.11549266.js";function Ge(o,e){return new je(o,e)}new TextEncoder;function Fe({params:o}){let e=Ne.get(o.slug);if(e===void 0)throw Ge(404,"Not found");return{product:e}}const tt=Object.freeze(Object.defineProperty({__proto__:null,load:Fe},Symbol.toStringTag,{value:"Module"}));function Se(o,e,l){const t=o.slice();return t[6]=e[l],t}function ke(o,e,l){const t=o.slice();return t[9]=e[l][0],t[10]=e[l][1],t}function Te(o){let e,l,t,c,d,m;return{c(){e=f("div"),l=ye("svg"),t=ye("path"),c=y(),d=f("p"),m=M(o[2]),this.h()},l(v){e=h(v,"DIV",{class:!0,role:!0});var u=g(e);l=De(u,"svg",{class:!0,xmlns:!0,viewBox:!0});var _=g(l);t=De(_,"path",{d:!0}),g(t).forEach(i),_.forEach(i),c=D(u),d=h(u,"P",{});var p=g(d);m=B(p,o[2]),p.forEach(i),u.forEach(i),this.h()},h(){n(t,"d","M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"),n(l,"class","fill-current w-4 h-4 mr-2"),n(l,"xmlns","http://www.w3.org/2000/svg"),n(l,"viewBox","0 0 20 20"),n(e,"class","flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 box-overlay"),n(e,"role","alert")},m(v,u){le(v,e,u),r(e,l),r(l,t),r(e,c),r(e,d),r(d,m)},p(v,u){u&4&&J(m,v[2])},d(v){v&&i(e)}}}function Ve(o){let e,l,t=o[9]+"",c,d,m,v=o[10]+"",u,_;return{c(){e=f("tr"),l=f("td"),c=M(t),d=y(),m=f("td"),u=M(v),_=y(),this.h()},l(p){e=h(p,"TR",{});var w=g(e);l=h(w,"TD",{class:!0});var S=g(l);c=B(S,t),S.forEach(i),d=D(w),m=h(w,"TD",{class:!0});var j=g(m);u=B(j,v),j.forEach(i),_=D(w),w.forEach(i),this.h()},h(){n(l,"class","border px-4 py-2 text-gray-700"),n(m,"class","border px-4 py-2 text-gray-700")},m(p,w){le(p,e,w),r(e,l),r(l,c),r(e,d),r(e,m),r(m,u),r(e,_)},p(p,w){w&1&&t!==(t=p[9]+"")&&J(c,t),w&1&&v!==(v=p[10]+"")&&J(u,v)},d(p){p&&i(e)}}}function Ce(o){let e,l;return{c(){e=f("img"),this.h()},l(t){e=h(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){n(e,"alt","additional"),te(e.src,l=o[6])||n(e,"src",l),n(e,"class","w-full object-cover")},m(t,c){le(t,e,c)},p(t,c){c&1&&!te(e.src,l=t[6])&&n(e,"src",l)},d(t){t&&i(e)}}}function Je(o){let e,l,t,c,d,m,v,u,_,p,w,S,j,re,se,T,V,P,q,Q=o[0].title+"",X,ae,z,R=o[0].price+"",Y,oe,O,$,U,K=o[0].description+"",Z,ce,W,H,ne,A,ie,ue,I=o[1]&&Te(o),L=[...o[0].stats],b=[];for(let a=0;a<L.length;a+=1)b[a]=Ve(ke(o,L,a));let G=o[0].images,E=[];for(let a=0;a<G.length;a+=1)E[a]=Ce(Se(o,G,a));return{c(){e=f("section"),l=f("div"),t=f("div"),c=f("div"),d=f("img"),v=y(),u=f("a"),_=M("Buy Now"),w=y(),S=f("button"),j=M("Add to Cart"),re=y(),I&&I.c(),se=y(),T=f("div"),V=f("div"),P=f("div"),q=f("h1"),X=M(Q),ae=y(),z=f("p"),Y=M(R),oe=y(),O=f("div"),$=f("div"),U=f("p"),Z=M(K),ce=y(),W=f("div"),H=f("table");for(let a=0;a<b.length;a+=1)b[a].c();ne=y(),A=f("div");for(let a=0;a<E.length;a+=1)E[a].c();this.h()},l(a){e=h(a,"SECTION",{});var x=g(e);l=h(x,"DIV",{class:!0});var s=g(l);t=h(s,"DIV",{class:!0});var k=g(t);c=h(k,"DIV",{class:!0});var C=g(c);d=h(C,"IMG",{alt:!0,src:!0,class:!0}),v=D(C),u=h(C,"A",{href:!0,class:!0});var fe=g(u);_=B(fe,"Buy Now"),fe.forEach(i),w=D(C),S=h(C,"BUTTON",{class:!0});var he=g(S);j=B(he,"Add to Cart"),he.forEach(i),re=D(C),I&&I.l(C),C.forEach(i),se=D(k),T=h(k,"DIV",{});var F=g(T);V=h(F,"DIV",{class:!0});var ee=g(V);P=h(ee,"DIV",{class:!0});var ge=g(P);q=h(ge,"H1",{class:!0});var _e=g(q);X=B(_e,Q),_e.forEach(i),ge.forEach(i),ae=D(ee),z=h(ee,"P",{class:!0});var me=g(z);Y=B(me,R),me.forEach(i),ee.forEach(i),oe=D(F),O=h(F,"DIV",{class:!0});var ve=g(O);$=h(ve,"DIV",{class:!0});var pe=g($);U=h(pe,"P",{});var be=g(U);Z=B(be,K),be.forEach(i),pe.forEach(i),ve.forEach(i),ce=D(F),W=h(F,"DIV",{});var Ee=g(W);H=h(Ee,"TABLE",{});var we=g(H);for(let N=0;N<b.length;N+=1)b[N].l(we);we.forEach(i),Ee.forEach(i),F.forEach(i),k.forEach(i),ne=D(s),A=h(s,"DIV",{class:!0});var Ie=g(A);for(let N=0;N<E.length;N+=1)E[N].l(Ie);Ie.forEach(i),s.forEach(i),x.forEach(i),this.h()},h(){n(d,"alt","primary"),te(d.src,m=o[0].image)||n(d,"src",m),n(d,"class","aspect-square w-full object-cover"),n(u,"href",p=o[0].stripe_link),n(u,"class","bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded text-center"),n(S,"class","bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded text-center"),n(c,"class","grid grid-cols-1 gap-4 md:grid-cols-1"),n(q,"class","text-xl font-bold sm:text-2xl"),n(P,"class","max-w-[35ch] space-y-2"),n(z,"class","text-lg font-bold"),n(V,"class","mt-8 flex justify-between"),n($,"class","prose max-w-none text-justify"),n(O,"class","mt-4 mb-6"),n(t,"class","grid grid-cols-1 items-start gap-8 md:grid-cols-2"),n(A,"class","grid gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"),n(l,"class","relative mx-auto max-w-screen-xl px-4 py-8")},m(a,x){le(a,e,x),r(e,l),r(l,t),r(t,c),r(c,d),r(c,v),r(c,u),r(u,_),r(c,w),r(c,S),r(S,j),r(c,re),I&&I.m(c,null),r(t,se),r(t,T),r(T,V),r(V,P),r(P,q),r(q,X),r(V,ae),r(V,z),r(z,Y),r(T,oe),r(T,O),r(O,$),r($,U),r(U,Z),r(T,ce),r(T,W),r(W,H);for(let s=0;s<b.length;s+=1)b[s]&&b[s].m(H,null);r(l,ne),r(l,A);for(let s=0;s<E.length;s+=1)E[s]&&E[s].m(A,null);ie||(ue=Pe(S,"click",o[4]),ie=!0)},p(a,[x]){if(x&1&&!te(d.src,m=a[0].image)&&n(d,"src",m),x&1&&p!==(p=a[0].stripe_link)&&n(u,"href",p),a[1]?I?I.p(a,x):(I=Te(a),I.c(),I.m(c,null)):I&&(I.d(1),I=null),x&1&&Q!==(Q=a[0].title+"")&&J(X,Q),x&1&&R!==(R=a[0].price+"")&&J(Y,R),x&1&&K!==(K=a[0].description+"")&&J(Z,K),x&1){L=[...a[0].stats];let s;for(s=0;s<L.length;s+=1){const k=ke(a,L,s);b[s]?b[s].p(k,x):(b[s]=Ve(k),b[s].c(),b[s].m(H,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=L.length}if(x&1){G=a[0].images;let s;for(s=0;s<G.length;s+=1){const k=Se(a,G,s);E[s]?E[s].p(k,x):(E[s]=Ce(k),E[s].c(),E[s].m(A,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=G.length}},i:de,o:de,d(a){a&&i(e),I&&I.d(),xe(b,a),xe(E,a),ie=!1,ue()}}}const Qe=2500;function Re(){console.log(localStorage)}function Ue(o,e,l){let{product:t}=e;function c(_,p){if(_ in localStorage){let w=Number(localStorage.getItem(_));localStorage.setItem(_,String(w+1))}else localStorage.setItem(_,"1");v(),Re()}let d=!1,m="";function v(){l(1,d=!0),l(2,m="Quantity in your cart: "+localStorage.getItem(t.slug));let _=localStorage.getItem(t.slug);setTimeout(()=>{_==localStorage.getItem(t.slug)&&l(1,d=!1)},Qe)}const u=()=>c(t.slug,t.title);return o.$$set=_=>{"product"in _&&l(0,t=_.product)},[t,d,m,c,u]}class Ke extends Me{constructor(e){super(),Be(this,e,Ue,Je,Ae,{product:0})}}function We(o){let e,l;return e=new Ke({props:{product:o[0]}}),{c(){qe(e.$$.fragment)},l(t){ze(e.$$.fragment,t)},m(t,c){Oe(e,t,c),l=!0},p:de,i(t){l||($e(e.$$.fragment,t),l=!0)},o(t){He(e.$$.fragment,t),l=!1},d(t){Le(e,t)}}}function Xe(o,e,l){let{data:t}=e;const c=t.product;return o.$$set=d=>{"data"in d&&l(1,t=d.data)},[c,t]}class lt extends Me{constructor(e){super(),Be(this,e,Xe,We,Ae,{data:1})}}export{lt as component,tt as universal};
