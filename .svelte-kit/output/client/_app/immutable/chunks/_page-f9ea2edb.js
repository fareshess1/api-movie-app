import{e as r}from"./index-e9ed3a62.js";async function n({params:o}){let t=`
          https://api.themoviedb.org/3/movie/${o.movie}?api_key=6dc03fe0c37d258befe025cda87bda81&language=en-US
            `;const e=await fetch(t),a=await e.json();if(e.ok)return a;throw r(404,"Not found")}const c=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{c as _,n as l};
