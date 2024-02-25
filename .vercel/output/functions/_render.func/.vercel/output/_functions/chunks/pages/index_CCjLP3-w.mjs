/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, F as Fragment } from '../astro_BGXLXoF4.mjs';
import 'kleur/colors';
import { S as SITE, $ as $$Header, b as $$Footer, c as $$Layout, d as SOCIALS, a as $$LinkButton, e as $$Socials, f as $$Hr } from './404_CUc_-rlo.mjs';
import { f as sortPostsByDate, g as getPageNumbers, h as $$Posts, i as $$Projects, $ as $$Main, j as $$Tag, d as sortItemsByDate, e as $$Card } from './_slug__BWFQBMlB.mjs';
import { g as getCollection } from './_ogTitle__CNmDLd8P.mjs';
import { g as getUniqueTags, a as getItemUrl } from './_tag__B84ULa-c.mjs';
/* empty css                          */

const $$Astro$3 = createAstro("https://www.kalmanodds.com/");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = sortPostsByDate(posts);
  const totalPages = getPageNumbers(sortedPosts.length);
  const paginatedPosts = sortedPosts.slice(0, SITE.postPerPage);
  return renderTemplate`${renderComponent($$result, "Posts", $$Posts, { "posts": paginatedPosts, "pageNumber": 1, "totalPages": totalPages.length })}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/pages/posts/index.astro", void 0);

const $$file$3 = "C:/Users/sigur/Documents/dev/astro-blog/src/pages/posts/index.astro";
const $$url$3 = "/posts";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://www.kalmanodds.com/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const projects = await getCollection("portfolio", ({ data }) => !data.draft);
  return renderTemplate`${renderComponent($$result, "Projects", $$Projects, { "projects": projects, "pageNumber": 1, "totalPages": projects.length })}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/pages/projects/index.astro", void 0);

const $$file$2 = "C:/Users/sigur/Documents/dev/astro-blog/src/pages/projects/index.astro";
const $$url$2 = "/projects";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://www.kalmanodds.com/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const projects = await getCollection("portfolio", ({ data }) => !data.draft);
  let tags = getUniqueTags([...posts, ...projects]);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in projects and posts." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row flex-wrap"> ${tags.map((tag) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "name": tag, "size": "lg" })}`)} </div> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/pages/tags/index.astro", void 0);

const $$file$1 = "C:/Users/sigur/Documents/dev/astro-blog/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://www.kalmanodds.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog", ({ data }) => !data.draft && data.featured);
  const projects = await getCollection("portfolio", ({ data }) => !data.draft && data.featured);
  const featuredItems = sortItemsByDate([...posts, ...projects]);
  const socialCount = SOCIALS.filter((social) => social.active).length;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main id="main-content" data-astro-cid-j7pv25f6> <section id="hero" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>kalmanodds</h1> <p data-astro-cid-j7pv25f6>
I am a software engineer from Iceland, specializing in payment
        integrations and other business critical back-end development. I also
        have a growing interest in the full-stack TypeScript ecosystem.
</p> <p data-astro-cid-j7pv25f6>
Read my ${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "hover:text-skin-accent underline underline-offset-4 decoration-dashed", "href": "/posts", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
blog posts
` })} or check out my ${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "hover:text-skin-accent underline underline-offset-4 decoration-dashed", "href": "/projects", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
portfolio
` })} to see what I've been up to!
</p> ${// only display if at least one social link is enabled
  socialCount > 0 && renderTemplate`<div class="social-wrapper" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Socials", $$Socials, { "data-astro-cid-j7pv25f6": true })} </div>`} </section> ${renderComponent($$result2, "Hr", $$Hr, { "data-astro-cid-j7pv25f6": true })} ${featuredItems.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <section id="featured" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Featured</h2> <ul data-astro-cid-j7pv25f6> ${featuredItems.map((item) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "href": getItemUrl(item), "frontmatter": item.data, "secHeading": false, "data-astro-cid-j7pv25f6": true })}`)} </ul> </section> ` })}`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/sigur/Documents/dev/astro-blog/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
