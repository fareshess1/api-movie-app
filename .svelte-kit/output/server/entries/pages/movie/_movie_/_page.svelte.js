import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1ifbluz{padding:1rem 0rem 2rem}p.svelte-1ifbluz{padding:1rem 0rem}img.svelte-1ifbluz{width:100%;border-radius:1rem}.movie-details.svelte-1ifbluz{margin:2rem 20%}span.svelte-1ifbluz{font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"movie-details svelte-1ifbluz"}"><div class="${"img-container"}"><a${add_attribute("href", "https://image.tmdb.org/t/p/original" + data.backdrop_path, 0)}><img${add_attribute("src", "https://image.tmdb.org/t/p/original" + data.backdrop_path, 0)}${add_attribute("alt", data.original_title, 0)} class="${"svelte-1ifbluz"}"></a></div>
  <div class="${"txt-container"}"><h1 class="${"svelte-1ifbluz"}">${escape(data.original_title)}</h1>
    <p class="${"overview svelte-1ifbluz"}">${escape(data.overview)}</p>
    <p class="${"svelte-1ifbluz"}"><span class="${"svelte-1ifbluz"}">Release data:</span>
      ${escape(data.release_date)} <br>
      <span class="${"svelte-1ifbluz"}">Budget:</span> $${escape(data.budget)} <br>
      <span class="${"svelte-1ifbluz"}">Rating:</span>
      ${escape(data.vote_avarage)} <br>
      <span class="${"svelte-1ifbluz"}">Runtime:</span>
      ${escape(data.runtime)}mins <br></p></div>
</div>`;
});
export {
  Page as default
};
