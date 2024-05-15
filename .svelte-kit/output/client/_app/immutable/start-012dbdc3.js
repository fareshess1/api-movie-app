import{S as Ye,i as Xe,s as Ze,a as Qe,e as C,c as xe,b as H,g as de,t as F,d as he,f as J,h as G,j as et,o as Re,k as tt,l as nt,m as rt,n as Ee,p as V,q as at,r as st,u as ot,v as Y,w as X,x as $e,y as Z,z as Q,A as Ce}from"./chunks/index-70fdfb68.js";import{g as Fe,f as Je,s as z,a as Se,b as it,i as lt}from"./chunks/singletons-6dc7e6ac.js";import{R as Ge,H as Oe}from"./chunks/control-03134885.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const n=new URL(r);for(const s of ut){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return dt(n),n}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ht(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;pe.delete(s)}return me(r,e)};const pe=new Map;function mt(r,e,n){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(i+=`[data-hash="${ht(n.body)}"]`);const l=document.querySelector(i);if(l!=null&&l.textContent){const{body:t,...u}=JSON.parse(l.textContent),g=l.getAttribute("data-ttl");return g&&pe.set(e,{body:t,init:u,ttl:1e3*Number(g)}),Promise.resolve(new Response(t,u))}return me(r,n)}function _t(r,e){const n=pe.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);pe.delete(r)}return me(r,e)}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function yt(r){const e=[],n=[],s=[];let i=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${bt(r).map((t,u,g)=>{const p=decodeURIComponent(t),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);if(m)return e.push(m[1]),n.push(m[2]),s.push(!1),"(?:/(.*))?";const y=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(p);if(y)return e.push(y[1]),n.push(y[2]),s.push(!0),"(?:/([^/]+))?";const S=u===g.length-1;return p?"/"+p.split(/\[(.+?)\](?!\])/).map((T,D)=>{if(D%2){const B=gt.exec(T);if(!B)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,K,se,x,oe]=B;return e.push(x),n.push(oe),s.push(!!K),se?"(.*?)":K?"([^/]*)?":"([^/]+?)"}return S&&T.includes(".")&&(i=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${i?"/?":""}$`),names:e,types:n,optional:s}}function wt(r){return!/^\([^)]+\)$/.test(r)}function bt(r){return r.slice(1).split("/").filter(wt)}function vt(r,{names:e,types:n,optional:s},i){const l={};for(let t=0;t<e.length;t+=1){const u=e[t],g=n[t];let p=r[t+1];if(p||!s[t]){if(g){const m=i[g];if(!m)throw new Error(`Missing "${g}" param matcher`);if(!m(p))return}l[u]=p!=null?p:""}}return l}function Et(r,e,n,s){const i=new Set(e);return Object.entries(n).map(([u,[g,p,m]])=>{const{pattern:y,names:S,types:U,optional:M}=yt(u),T={id:u,exec:D=>{const B=y.exec(D);if(B)return vt(B,{names:S,types:U,optional:M},s)},errors:[1,...m||[]].map(D=>r[D]),layouts:[0,...p||[]].map(t),leaf:l(g)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function l(u){const g=u<0;return g&&(u=~u),[g,r[u]]}function t(u){return u===void 0?u:[i.has(u),r[u]]}}function kt(r){let e,n,s;var i=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),n=C()},l(t){e&&$e(e.$$.fragment,t),n=C()},m(t,u){e&&Z(e,t,u),H(t,n,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&2&&(g.form=t[1]),i!==(i=t[0][0])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Q(p,1)}),he()}i?(e=Y(i,l(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Q(e,t)}}}function Rt(r){let e,n,s;var i=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[St]},$$scope:{ctx:t}}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),n=C()},l(t){e&&$e(e.$$.fragment,t),n=C()},m(t,u){e&&Z(e,t,u),H(t,n,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&523&&(g.$$scope={dirty:u,ctx:t}),i!==(i=t[0][0])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Q(p,1)}),he()}i?(e=Y(i,l(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Q(e,t)}}}function St(r){let e,n,s;var i=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),n=C()},l(t){e&&$e(e.$$.fragment,t),n=C()},m(t,u){e&&Z(e,t,u),H(t,n,u),s=!0},p(t,u){const g={};if(u&8&&(g.data=t[3]),u&2&&(g.form=t[1]),i!==(i=t[0][1])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Q(p,1)}),he()}i?(e=Y(i,l(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Q(e,t)}}}function Ke(r){let e,n=r[5]&&ze(r);return{c(){e=tt("div"),n&&n.c(),this.h()},l(s){e=nt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=rt(e);n&&n.l(i),i.forEach(G),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(s,i){H(s,e,i),n&&n.m(e,null)},p(s,i){s[5]?n?n.p(s,i):(n=ze(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function ze(r){let e;return{c(){e=at(r[6])},l(n){e=st(n,r[6])},m(n,s){H(n,e,s)},p(n,s){s&64&&ot(e,n[6])},d(n){n&&G(e)}}}function Ot(r){let e,n,s,i,l;const t=[Rt,kt],u=[];function g(m,y){return m[0][1]?0:1}e=g(r),n=u[e]=t[e](r);let p=r[4]&&Ke(r);return{c(){n.c(),s=Qe(),p&&p.c(),i=C()},l(m){n.l(m),s=xe(m),p&&p.l(m),i=C()},m(m,y){u[e].m(m,y),H(m,s,y),p&&p.m(m,y),H(m,i,y),l=!0},p(m,[y]){let S=e;e=g(m),e===S?u[e].p(m,y):(de(),F(u[S],1,1,()=>{u[S]=null}),he(),n=u[e],n?n.p(m,y):(n=u[e]=t[e](m),n.c()),J(n,1),n.m(s.parentNode,s)),m[4]?p?p.p(m,y):(p=Ke(m),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null)},i(m){l||(J(n),l=!0)},o(m){F(n),l=!1},d(m){u[e].d(m),m&&G(s),p&&p.d(m),m&&G(i)}}}function Lt(r,e,n){let{stores:s}=e,{page:i}=e,{components:l}=e,{form:t}=e,{data_0:u=null}=e,{data_1:g=null}=e;et(s.page.notify);let p=!1,m=!1,y=null;return Re(()=>{const S=s.page.subscribe(()=>{p&&(n(5,m=!0),n(6,y=document.title||"untitled page"))});return n(4,p=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,i=S.page),"components"in S&&n(0,l=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,u=S.data_0),"data_1"in S&&n(3,g=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[l,t,u,g,p,m,y,s,i]}class It extends Ye{constructor(e){super(),Xe(this,e,Lt,Ot,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const $t=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),At=function(r,e){return new URL(r,e).href},He={},ne=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=At(l,s),l in He)return;He[l]=!0;const t=l.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!s)for(let m=i.length-1;m>=0;m--){const y=i[m];if(y.href===l&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":$t,t||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),t)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},jt={},_e=[()=>ne(()=>import("./chunks/0-31558343.js"),["./chunks/0-31558343.js","./components/pages/_layout.svelte-e7405421.js","./chunks/index-70fdfb68.js","./chunks/navigation-ab3663ac.js","./chunks/singletons-6dc7e6ac.js","./assets/_layout-c6bf5664.css"],import.meta.url),()=>ne(()=>import("./chunks/1-15b31634.js"),["./chunks/1-15b31634.js","./components/error.svelte-1fe3fe63.js","./chunks/index-70fdfb68.js","./chunks/singletons-6dc7e6ac.js"],import.meta.url),()=>ne(()=>import("./chunks/2-4e080ad0.js"),["./chunks/2-4e080ad0.js","./components/pages/_page.svelte-24dfc680.js","./chunks/index-70fdfb68.js","./chunks/PopularMovies-6cbe7519.js","./assets/PopularMovies-f3e6ed87.css","./chunks/singletons-6dc7e6ac.js","./chunks/navigation-ab3663ac.js"],import.meta.url),()=>ne(()=>import("./chunks/3-6d6d5f5b.js"),["./chunks/3-6d6d5f5b.js","./chunks/_page-f9ea2edb.js","./chunks/index-e9ed3a62.js","./chunks/control-03134885.js","./components/pages/movie/_movie_/_page.svelte-71346cde.js","./chunks/index-70fdfb68.js","./assets/_page-59d1c16d.css"],import.meta.url),()=>ne(()=>import("./chunks/4-e454a6d9.js"),["./chunks/4-e454a6d9.js","./chunks/_page-d9040409.js","./chunks/index-e9ed3a62.js","./chunks/control-03134885.js","./components/pages/search/_search_/_page.svelte-a1e6fc66.js","./chunks/index-70fdfb68.js","./chunks/PopularMovies-6cbe7519.js","./assets/PopularMovies-f3e6ed87.css"],import.meta.url)],Nt=[],Pt={"/":[2],"/movie/[movie]":[3],"/search/[search]":[4]},Ut={handleError:({error:r})=>{console.error(r)}},Tt="/__data.json";async function Dt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,i])=>[s,await i])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Vt=-1,Bt=-2,qt=-3,Ct=-4,Ft=-5,Jt=-6;function Gt(r){const e=JSON.parse(r);if(typeof e=="number")return i(e);const n=e,s=Array(n.length);function i(l){if(l===Vt)return;if(l===qt)return NaN;if(l===Ct)return 1/0;if(l===Ft)return-1/0;if(l===Jt)return-0;if(l in s)return s[l];const t=n[l];if(!t||typeof t!="object")s[l]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":s[l]=new Date(t[1]);break;case"Set":const g=new Set;s[l]=g;for(let y=1;y<t.length;y+=1)g.add(i(t[y]));break;case"Map":const p=new Map;s[l]=p;for(let y=1;y<t.length;y+=2)p.set(i(t[y]),i(t[y+1]));break;case"RegExp":s[l]=new RegExp(t[1],t[2]);break;case"Object":s[l]=Object(t[1]);break;case"BigInt":s[l]=BigInt(t[1]);break;case"null":const m=Object.create(null);s[l]=m;for(let y=1;y<t.length;y+=2)m[t[y]]=i(t[y+1]);break}else{const u=new Array(t.length);s[l]=u;for(let g=0;g<t.length;g+=1){const p=t[g];p!==Bt&&(u[g]=i(p))}}else{const u={};s[l]=u;for(const g in t){const p=t[g];u[g]=i(p)}}return s[l]}return i(0)}const We="sveltekit:scroll",q="sveltekit:index",ce=Et(_e,Nt,Pt,jt),Le=_e[0],Ie=_e[1];Le();Ie();let ae={};try{ae=JSON.parse(sessionStorage[We])}catch{}function ke(r){ae[r]=Se()}function Kt({target:r,base:e,trailing_slash:n}){var Ve;const s=[];let i=null;const l={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,g=!1,p=!0,m=!1,y=!1,S,U=(Ve=history.state)==null?void 0:Ve[q];U||(U=Date.now(),history.replaceState({...history.state,[q]:U},"",location.href));const M=ae[U];M&&(history.scrollRestoration="manual",scrollTo(M.x,M.y));let T=!1,D,B,K;async function se(){K=K||Promise.resolve(),await K,K=null;const a=new URL(location.href),f=we(a,!0);i=null,await Ae(f,a,[])}async function x(a,{noscroll:f=!1,replaceState:d=!1,keepfocus:o=!1,state:c={},invalidateAll:h=!1},_,E){return typeof a=="string"&&(a=new URL(a,Fe(document))),be({url:a,scroll:f?Se():null,keepfocus:o,redirect_chain:_,details:{state:c,replaceState:d},nav_token:E,accepted:()=>{h&&(y=!0)},blocked:()=>{},type:"goto"})}async function oe(a){const f=we(a,!1);if(!f)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return i={id:f.id,promise:Pe(f)},i.promise}async function Ae(a,f,d,o,c={},h){var E,k;B=c;let _=a&&await Pe(a);if(_||(_=await De(f,null,re(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,B!==c)return!1;if(_.type==="redirect")if(d.length>10||d.includes(f.pathname))_=await ie({status:500,error:re(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return x(new URL(_.location,f).href,{},[...d,f.pathname],c),!1;else((k=(E=_.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await z.updated.check()&&await le(f);if(s.length=0,y=!1,m=!0,o&&o.details){const{details:b}=o,v=b.replaceState?0:1;b.state[q]=U+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",f)}if(i=null,g){t=_.state,_.props.page&&(_.props.page.url=f);const b=ue();S.$set(_.props),b()}else je(_);if(o){const{scroll:b,keepfocus:v}=o;if(!v){const O=document.body,I=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),I!==null?O.setAttribute("tabindex",I):O.removeAttribute("tabindex")}if(await Ce(),p){const O=f.hash&&document.getElementById(f.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();p=!0,_.props.page&&(D=_.props.page),h&&h(),m=!1}function je(a){var c,h;t=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),D=a.props.page;const d=ue();S=new It({target:r,props:{...a.props,stores:z},hydrate:!0}),d();const o={from:null,to:fe("to",{params:t.params,routeId:(h=(c=t.route)==null?void 0:c.id)!=null?h:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(_=>_(o)),g=!0}async function ee({url:a,params:f,branch:d,status:o,error:c,route:h,form:_}){var I;const E=d.filter(Boolean),k={type:"loaded",state:{url:a,params:f,branch:d,error:c,route:h},props:{components:E.map($=>$.node.component)}};_!==void 0&&(k.props.form=_);let b={},v=!D;for(let $=0;$<E.length;$+=1){const N=E[$];b={...b,...N.data},(v||!t.branch.some(P=>P===N))&&(k.props[`data_${$}`]=b,v=v||Object.keys((I=N.data)!=null?I:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!t.url||a.href!==t.url.href||t.error!==c||_!==void 0||v){k.props.page={error:c,params:f,routeId:h&&h.id,status:o,url:a,form:_,data:v?b:D.data};const $=(N,P)=>{Object.defineProperty(k.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return k}async function ge({loader:a,parent:f,url:d,params:o,routeId:c,server_data_node:h}){var b,v,O,I,$;let _=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let N=function(...L){for(const w of L){const{href:R}=new URL(w,d);E.dependencies.add(R)}};const P={routeId:c,params:new Proxy(o,{get:(L,w)=>(E.params.add(w),L[w])}),data:(v=h==null?void 0:h.data)!=null?v:null,url:pt(d,()=>{E.url=!0}),async fetch(L,w){let R;L instanceof Request?(R=L.url,w={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...w}):R=L;const j=new URL(R,d).href;return N(j),g?_t(j,w):mt(R,j,w)},setHeaders:()=>{},depends:N,parent(){return E.parent=!0,f()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(O=await k.shared.load.call(null,P))!=null?O:null,_=_?await Dt(_):null}return{node:k,loader:a,server:h,shared:(I=k.shared)!=null&&I.load?{type:"data",data:_,uses:E}:null,data:($=_!=null?_:h==null?void 0:h.data)!=null?$:null}}function Ne(a,f,d,o){if(y)return!0;if(!d)return!1;if(d.parent&&f||d.url&&a)return!0;for(const c of d.params)if(o[c]!==t.params[c])return!0;for(const c of d.dependencies)if(s.some(h=>h(new URL(c))))return!0;return!1}function ye(a,f){var d,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Pe({id:a,invalidating:f,url:d,params:o,route:c}){var L;if((i==null?void 0:i.id)===a)return i.promise;const{errors:h,layouts:_,leaf:E}=c,k=[..._,E];h.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=t.url?a!==t.url.pathname+t.url.search:!1,O=k.reduce((w,R,j)=>{var te;const A=t.branch[j],W=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||Ne(v,w.some(Boolean),(te=A.server)==null?void 0:te.uses,o));return w.push(W),w},[]);if(O.some(Boolean)){try{b=await Me(d,O)}catch(w){return ie({status:500,error:re(w,{url:d,params:o,routeId:c.id}),url:d,routeId:c.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let $=!1;const N=k.map(async(w,R)=>{var te;if(!w)return;const j=t.branch[R],A=I==null?void 0:I[R];if((!A||A.type==="skip")&&w[1]===(j==null?void 0:j.loader)&&!Ne(v,$,(te=j.shared)==null?void 0:te.uses,o))return j;if($=!0,(A==null?void 0:A.type)==="error")throw A;return ge({loader:w[1],url:d,params:o,routeId:c.id,parent:async()=>{var qe;const Be={};for(let ve=0;ve<R;ve+=1)Object.assign(Be,(qe=await N[ve])==null?void 0:qe.data);return Be},server_data_node:ye(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,j==null?void 0:j.server)})});for(const w of N)w.catch(()=>{});const P=[];for(let w=0;w<k.length;w+=1)if(k[w])try{P.push(await N[w])}catch(R){if(R instanceof Ge)return{type:"redirect",location:R.location};let j=500,A;I!=null&&I.includes(R)?(j=(L=R.status)!=null?L:j,A=R.error):R instanceof Oe?(j=R.status,A=R.body):A=re(R,{params:o,url:d,routeId:c.id});const W=await Ue(w,P,h);return W?await ee({url:d,params:o,branch:P.slice(0,W.idx).concat(W.node),status:j,error:A,route:c}):await De(d,c.id,A,j)}else P.push(void 0);return await ee({url:d,params:o,branch:P,status:200,error:null,route:c,form:f?void 0:null})}async function Ue(a,f,d){for(;a--;)if(d[a]){let o=a;for(;!f[o];)o-=1;try{return{idx:o+1,node:{node:await d[a](),loader:d[a],data:{},server:null,shared:null}}}catch{continue}}}async function ie({status:a,error:f,url:d,routeId:o}){var b;const c={},h=await Le();let _=null;if(h.server)try{const v=await Me(d,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;_=(b=v.nodes[0])!=null?b:null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||u)&&await le(d)}const E=await ge({loader:Le,url:d,params:c,routeId:o,parent:()=>Promise.resolve({}),server_data_node:ye(_)}),k={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await ee({url:d,params:c,branch:[E,k],status:a,error:f,route:null})}function we(a,f){if(Te(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const o of ce){const c=o.exec(d);if(c){const h=new URL(a.origin+ct(a.pathname,n)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:f,route:o,params:ft(c),url:h}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function be({url:a,scroll:f,keepfocus:d,redirect_chain:o,details:c,type:h,delta:_,nav_token:E,accepted:k,blocked:b}){var N,P,L,w;let v=!1;const O=we(a,!1),I={from:fe("from",{params:t.params,routeId:(P=(N=t.route)==null?void 0:N.id)!=null?P:null,url:t.url}),to:fe("to",{params:(L=O==null?void 0:O.params)!=null?L:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:a}),type:h};_!==void 0&&(I.delta=_);const $={...I,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R($)),v){b();return}ke(U),k(),g&&z.navigating.set(I),await Ae(O,a,o,{scroll:f,keepfocus:d,details:c},E,()=>{l.after_navigate.forEach(R=>R(I)),z.navigating.set(null)})}async function De(a,f,d,o){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await ie({status:o,error:d,url:a,routeId:f}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(l.after_navigate.push(a),()=>{const f=l.after_navigate.indexOf(a);l.after_navigate.splice(f,1)}))},before_navigate:a=>{Re(()=>(l.before_navigate.push(a),()=>{const f=l.before_navigate.indexOf(a);l.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(m||!g)&&(p=!1)},goto:(a,f={})=>x(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:f}=new URL(a,location.href);s.push(d=>d.href===f)}return se()},invalidateAll:()=>(y=!0,se()),prefetch:async a=>{const f=new URL(a,Fe(document));await oe(f)},prefetch_routes:async a=>{const d=(a?ce.filter(o=>a.some(c=>o.exec(c))):ce).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:d,route:o}=t;if(!o)return;const c=await Ue(t.branch.length,d,o.errors);if(c){const h=await ee({url:f,params:t.params,branch:d.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:o});t=h.state;const _=ue();S.$set(h.props),_()}}else if(a.type==="redirect")x(a.location,{invalidateAll:!0},[]);else{const f={form:a.data,page:{...D,form:a.data,status:a.status}},d=ue();S.$set(f),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var _,E;let c=!1;const h={from:fe("from",{params:t.params,routeId:(E=(_=t.route)==null?void 0:_.id)!=null?E:null,url:t.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(k=>k(h)),c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(U);try{sessionStorage[We]=JSON.stringify(ae)}catch{}}});const a=o=>{const{url:c,options:h}=Je(o);if(c&&h.prefetch){if(Te(c))return;oe(c)}};let f;const d=o=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:c,url:h,options:_}=Je(o);if(!c||!h)return;const E=c instanceof SVGAElement;if(!E&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||k.includes("external")||_.reload||(E?c.target.baseVal:c.target))return;const[b,v]=h.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){T=!0,ke(U),t.url=h,z.page.set({...D,url:h}),z.page.notify();return}be({url:h,scroll:_.noscroll?Se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[q]===U)return;const c=o.state[q]-U;be({url:new URL(location.href),scroll:ae[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[q]:++U},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:d,params:o,routeId:c,data:h,form:_})=>{var b;u=!0;const E=new URL(location.href);let k;try{const v=d.map(async(O,I)=>{const $=h[I];return ge({loader:_e[O],url:E,params:o,routeId:c,parent:async()=>{const N={};for(let P=0;P<I;P+=1)Object.assign(N,(await v[P]).data);return N},server_data_node:ye($)})});k=await ee({url:E,params:o,branch:await Promise.all(v),status:a,error:f,form:_,route:(b=ce.find(O=>O.id===c))!=null?b:null})}catch(v){if(v instanceof Ge){await le(new URL(v.location,location.href));return}k=await ie({status:v instanceof Oe?v.status:500,error:re(v,{url:E,params:o,routeId:c}),url:E,routeId:c})}je(k)}}}async function Me(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Tt;const s=await me(n.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),i=await s.text();if(!s.ok)throw new Error(JSON.parse(i));return Gt(i)}function re(r,e){var n;return r instanceof Oe?r.body:(n=Ut.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const zt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const n of zt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function ue(){return()=>{}}async function Yt({env:r,hydrate:e,paths:n,target:s,trailing_slash:i}){it(n);const l=Kt({target:s,base:n.base,trailing_slash:i});lt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Yt as start};