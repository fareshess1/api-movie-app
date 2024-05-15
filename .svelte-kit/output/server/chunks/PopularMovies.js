import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "./index.js";
const MovieCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-1scef9v{width:90%;-o-object-fit:cover;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h2.svelte-1scef9v{font-size:0.8rem}p.svelte-1scef9v{font-size:0.7rem}",
  map: null
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css$1);
  return `<div class="${"card lg:card-side bg-base-100 shadow-xl"}"><a${add_attribute("href", "/movie/" + movie.id, 0)}><figure><img${add_attribute("src", "https://image.tmdb.org/t/p/w500" + movie.poster_path, 0)}${add_attribute("alt", movie.title, 0)} class="${"svelte-1scef9v"}"></figure></a>
    <div class="${"card-body"}"><h2 class="${"card-title svelte-1scef9v"}">${escape(movie.title)}</h2>
      <p class="${"svelte-1scef9v"}"></p>
      <div class="${"card-actions justify-end"}"><button class="${"btn btn-primary"}">See More</button></div></div>
  </div>`;
});
const PopularMovies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".popular-movies.svelte-aecvz7{display:grid;grid-template-columns:repeat(auto-fit, minmax(350px,1fr));grid-column-gap:0rem;grid-row-gap:2rem;padding:2%}",
  map: null
};
const PopularMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listMovies } = $$props;
  if ($$props.listMovies === void 0 && $$bindings.listMovies && listMovies !== void 0)
    $$bindings.listMovies(listMovies);
  $$result.css.add(css);
  return `<div class="${"popular-movies svelte-aecvz7"}">${each(listMovies, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
export {
  PopularMovies as P
};
