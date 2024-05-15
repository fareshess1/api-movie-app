import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { P as PopularMovies } from "../../../../chunks/PopularMovies.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let content;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  content = Object.keys(data).map((key) => data[key]);
  return `${validate_component(PopularMovies, "PopularMovies").$$render($$result, { listMovies: content }, {}, {})}`;
});
export {
  Page as default
};
