import{B as b,C as A,D as E,s as R,E as v}from"./index-70fdfb68.js";const f=[];function T(e,t){return{subscribe:d(e,t).subscribe}}function d(e,t=b){let n;const r=new Set;function o(i){if(R(e,i)&&(e=i,n)){const u=!f.length;for(const a of r)a[1](),f.push(a,e);if(u){for(let a=0;a<f.length;a+=2)f[a][0](f[a+1]);f.length=0}}}function c(i){o(i(e))}function s(i,u=b){const a=[i,u];return r.add(a),r.size===1&&(n=t(o)||b),i(e),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:o,update:c,subscribe:s}}function $(e,t,n){const r=!Array.isArray(e),o=r?[e]:e,c=t.length<2;return T(n,s=>{let i=!1;const u=[];let a=0,p=b;const _=()=>{if(a)return;p();const l=t(r?u[0]:u,s);c?s(l):p=v(l)?l:b},w=o.map((l,h)=>A(l,U=>{u[h]=U,a&=~(1<<h),i&&_()},()=>{a|=1<<h}));return i=!0,_(),function(){E(w),p()}})}let m="",k="";function j(e){m=e.base,k=e.assets||m}function x(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function z(){return{x:pageXOffset,y:pageYOffset}}function B(e){let t,n=null,r=null,o=null;for(const s of e.composedPath())s instanceof Element&&(!t&&s.nodeName.toUpperCase()==="A"&&(t=s),n===null&&(n=g(s,"data-sveltekit-noscroll")),r===null&&(r=g(s,"data-sveltekit-prefetch")),o===null&&(o=g(s,"data-sveltekit-reload")));const c=t&&new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI);return{a:t,url:c,options:{noscroll:n,prefetch:r,reload:o}}}function g(e,t){const n=e.getAttribute(t);return n===null?n:n===""?!0:(n==="off",!1)}function y(e){const t=d(e);let n=!0;function r(){n=!0,t.update(s=>s)}function o(s){n=!1,t.set(s)}function c(s){let i;return t.subscribe(u=>{(i===void 0||n&&u!==i)&&s(i=u)})}return{notify:r,set:o,subscribe:c}}function q(){const{set:e,subscribe:t}=d(!1);let n;async function r(){clearTimeout(n);const o=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const{version:c}=await o.json(),s=c!=="1715706340415";return s&&(e(!0),clearTimeout(n)),s}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:r}}let I;function C(e){I=e.client}const L={url:y({}),page:y({}),navigating:d(null),updated:q()};export{z as a,j as b,I as c,$ as d,B as f,x as g,C as i,L as s,d as w};
