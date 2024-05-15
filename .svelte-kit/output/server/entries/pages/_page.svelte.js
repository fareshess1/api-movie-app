import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index.js";
import { P as PopularMovies } from "../../chunks/PopularMovies.js";
import { d as derived, w as writable } from "../../chunks/index3.js";
const apiData = writable([]);
derived(apiData, ($apiData) => {
  if ($apiData) {
    return $apiData;
  }
  return [];
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $apiData, $$unsubscribe_apiData;
  $$unsubscribe_apiData = subscribe(apiData, (value) => $apiData = value);
  $$unsubscribe_apiData();
  return `<section data-theme="${"dark"}">${validate_component(PopularMovies, "PopularMovies").$$render($$result, { listMovies: $apiData }, {}, {})}</section>`;
});
export {
  Page as default
};
