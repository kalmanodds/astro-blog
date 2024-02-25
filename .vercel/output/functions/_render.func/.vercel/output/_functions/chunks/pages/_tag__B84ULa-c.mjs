/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BGXLXoF4.mjs';
import 'kleur/colors';
import { g as getCollection } from './_ogTitle__CNmDLd8P.mjs';
import { $ as $$Header, b as $$Footer, S as SITE, c as $$Layout } from './404_CUc_-rlo.mjs';
import { s as slugifyPost, a as slugifyProject, b as slugifyStr, c as slugifyAll, d as sortItemsByDate, $ as $$Main, e as $$Card } from './_slug__BWFQBMlB.mjs';

const getItemUrl = (item) => {
  if (item.collection === "blog") {
    return `/posts/${slugifyPost(item.data)}`;
  } else {
    return `/projects/${slugifyProject(item.data)}`;
  }
};

const getUniqueTags = (posts) => {
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  const tags = filteredPosts.flatMap((post) => post.data.tags).map((tag) => slugifyStr(tag)).filter(
    (value, index, self) => self.indexOf(value) === index
  ).sort((tagA, tagB) => tagA.localeCompare(tagB));
  return tags;
};

const filterPostsByTag = (posts, tag) => {
  const filteredPosts = posts.filter((post) => slugifyAll(post.data.tags).includes(tag));
  return filteredPosts;
};
const filterProjectsByTag = (projects, tag) => {
  const filteredPosts = projects.filter((project) => slugifyAll(project.data.tags).includes(tag));
  return filteredPosts;
};

const $$Astro = createAstro("https://www.kalmanodds.com/");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const projects = await getCollection("portfolio");
  const tags = getUniqueTags([...posts, ...projects]);
  return tags.map((tag) => {
    return {
      params: { tag },
      props: { tag }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const taggedPosts = filterPostsByTag(posts, tag);
  const projects = await getCollection("portfolio");
  const taggedProjects = filterProjectsByTag(projects, tag);
  const taggedItems = [...taggedPosts, ...taggedProjects];
  const sortedTaggedItems = sortItemsByDate(taggedItems);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag:${tag} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": `Tag:${tag}`, "pageDesc": "All the projects and posts with the tag ", "trailingTag": tag }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<span></span> <ul> ${sortedTaggedItems.map((item) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "href": getItemUrl(item), "frontmatter": item.data })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/sigur/Documents/dev/astro-blog/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _tag_ as _, getItemUrl as a, getUniqueTags as g };
