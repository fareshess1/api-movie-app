import{S as N,i as O,s as K,k as d,a as V,q as U,l as m,m as p,h as _,c as q,r as j,R as x,n,b as L,H as u,J as Q,u as W,B as A,f as k,g as X,d as Y,t as B,T as Z,w as ee,x as te,y as se,z as ae}from"./index-70fdfb68.js";function le(i){let t,r,s,e,f,a,o,l,c,b,E=i[0].title+"",w,I,y,D,M,g,P,S,C;return{c(){t=d("div"),r=d("a"),s=d("figure"),e=d("img"),l=V(),c=d("div"),b=d("h2"),w=U(E),I=V(),y=d("p"),D=V(),M=d("div"),g=d("button"),P=U("See More"),this.h()},l(h){t=m(h,"DIV",{class:!0});var v=p(t);r=m(v,"A",{href:!0});var T=p(r);s=m(T,"FIGURE",{});var z=p(s);e=m(z,"IMG",{src:!0,alt:!0,class:!0}),z.forEach(_),T.forEach(_),l=q(v),c=m(v,"DIV",{class:!0});var $=p(c);b=m($,"H2",{class:!0});var G=p(b);w=j(G,E),G.forEach(_),I=q($),y=m($,"P",{class:!0}),p(y).forEach(_),D=q($),M=m($,"DIV",{class:!0});var H=p(M);g=m(H,"BUTTON",{class:!0});var R=p(g);P=j(R,"See More"),R.forEach(_),H.forEach(_),$.forEach(_),v.forEach(_),this.h()},h(){x(e.src,f="https://image.tmdb.org/t/p/w500"+i[0].poster_path)||n(e,"src",f),n(e,"alt",a=i[0].title),n(e,"class","svelte-1scef9v"),n(r,"href",o="/movie/"+i[0].id),n(b,"class","card-title svelte-1scef9v"),n(y,"class","svelte-1scef9v"),n(g,"class","btn btn-primary"),n(M,"class","card-actions justify-end"),n(c,"class","card-body"),n(t,"class","card lg:card-side bg-base-100 shadow-xl")},m(h,v){L(h,t,v),u(t,r),u(r,s),u(s,e),u(t,l),u(t,c),u(c,b),u(b,w),u(c,I),u(c,y),u(c,D),u(c,M),u(M,g),u(g,P),S||(C=Q(g,"click",i[1]),S=!0)},p(h,[v]){v&1&&!x(e.src,f="https://image.tmdb.org/t/p/w500"+h[0].poster_path)&&n(e,"src",f),v&1&&a!==(a=h[0].title)&&n(e,"alt",a),v&1&&o!==(o="/movie/"+h[0].id)&&n(r,"href",o),v&1&&E!==(E=h[0].title+"")&&W(w,E)},i:A,o:A,d(h){h&&_(t),S=!1,C()}}}function re(i,t,r){let{movie:s}=t;const e=()=>{window.location.href="/movie/"+s.id};return i.$$set=f=>{"movie"in f&&r(0,s=f.movie)},[s,e]}class oe extends N{constructor(t){super(),O(this,t,re,le,K,{movie:0})}}function F(i,t,r){const s=i.slice();return s[1]=t[r],s}function J(i){let t,r;return t=new oe({props:{movie:i[1]}}),{c(){ee(t.$$.fragment)},l(s){te(t.$$.fragment,s)},m(s,e){se(t,s,e),r=!0},p(s,e){const f={};e&1&&(f.movie=s[1]),t.$set(f)},i(s){r||(k(t.$$.fragment,s),r=!0)},o(s){B(t.$$.fragment,s),r=!1},d(s){ae(t,s)}}}function ie(i){let t,r,s=i[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=J(F(i,s,a));const f=a=>B(e[a],1,1,()=>{e[a]=null});return{c(){t=d("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=m(a,"DIV",{class:!0});var o=p(t);for(let l=0;l<e.length;l+=1)e[l].l(o);o.forEach(_),this.h()},h(){n(t,"class","popular-movies svelte-aecvz7")},m(a,o){L(a,t,o);for(let l=0;l<e.length;l+=1)e[l].m(t,null);r=!0},p(a,[o]){if(o&1){s=a[0];let l;for(l=0;l<s.length;l+=1){const c=F(a,s,l);e[l]?(e[l].p(c,o),k(e[l],1)):(e[l]=J(c),e[l].c(),k(e[l],1),e[l].m(t,null))}for(X(),l=s.length;l<e.length;l+=1)f(l);Y()}},i(a){if(!r){for(let o=0;o<s.length;o+=1)k(e[o]);r=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)B(e[o]);r=!1},d(a){a&&_(t),Z(e,a)}}}function ne(i,t,r){let{listMovies:s}=t;return i.$$set=e=>{"listMovies"in e&&r(0,s=e.listMovies)},[s]}class ue extends N{constructor(t){super(),O(this,t,ne,ie,K,{listMovies:0})}}export{ue as P};
