import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const SearchMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  return `<form class="${"search"}"><input name="${"search_movie"}" type="${"text"}" placeholder="${"Pesquise pelo filme"}" class="${"input input-bordered"}"${add_attribute("value", inputValue, 0)}>
    <button class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></button></form>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-100"}"><div class="${"flex-1"}"><a class="${"btn btn-ghost normal-case text-xl"}" href="${"/"}">Popular Movies</a></div>
    <div class="${"flex-none gap-2"}"><div class="${"form-control"}">${validate_component(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const app = "";
const global = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    margin: 0 5%;\n}";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1vmitvj_START -->${$$result.title = `<title>Movie DB</title>`, ""}<!-- HEAD_svelte-1vmitvj_END -->`, ""}

${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
