/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent, f as renderSlot, n as renderTransition, F as Fragment, u as unescapeHTML } from '../astro_BGXLXoF4.mjs';
import 'kleur/colors';
import { g as getCollection } from './_ogTitle__CNmDLd8P.mjs';
import { L as LOCALE, $ as $$Header, a as $$LinkButton, b as $$Footer, S as SITE, c as $$Layout } from './404_CUc_-rlo.mjs';
/* empty css                           */
/* empty css                           */
/* empty css                           */
import { slug } from 'github-slugger';
import 'clsx';
/* empty css                           */
import { FaCode, FaNewspaper } from 'react-icons/fa6';
import { marked } from 'marked';
/* empty css                           */

const $$Astro$b = createAstro("https://www.kalmanodds.com/");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1);
  breadcrumbList[0] === "posts" && breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumb" aria-label="breadcrumb" data-astro-cid-ilhxcym7> <ul data-astro-cid-ilhxcym7> <li data-astro-cid-ilhxcym7> <a href="/" data-astro-cid-ilhxcym7>Home</a> <span aria-hidden="true" data-astro-cid-ilhxcym7>${" > "}</span> </li> ${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li data-astro-cid-ilhxcym7> <span${addAttribute(`${index > 0 ? "lowercase" : "capitalize"}`, "class")} aria-current="page" data-astro-cid-ilhxcym7>  ${` ${breadcrumb} `} </span> </li>` : renderTemplate`<li data-astro-cid-ilhxcym7> <a${addAttribute(`/${breadcrumb}`, "href")} data-astro-cid-ilhxcym7>${breadcrumb}</a> <span aria-hidden="true" data-astro-cid-ilhxcym7>${" > "}</span> </li>`
  )} </ul> </nav> `;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/components/Breadcrumbs.astro", void 0);

function getTailwindTagColor(tag) {
  switch (tag) {
    case "astro":
      return "bg-tag-astro";
    case "docker":
      return "bg-tag-docker";
    case "nextjs":
      return "bg-tag-nextjs";
    case "postgres":
      return "bg-tag-postgres";
    case "tailwindcss":
      return "bg-tag-tailwindcss";
    case "typescript":
      return "bg-tag-typescript";
    default:
      return "bg-skin-accent";
  }
}

const $$Astro$a = createAstro("https://www.kalmanodds.com/");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Tag;
  const { name, class: className, size = "sm" } = Astro2.props;
  const backgroundColorStyle = getTailwindTagColor(name);
  const marginStyles = size === "sm" ? "my-1 mr-2" : "my-3 mr-4";
  const sizeStyles = size === "sm" ? "text-sm" : "text-lg";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/tags/${name.toLowerCase()}`, "href")}${addAttribute(`${className} ${backgroundColorStyle} ${marginStyles} ${sizeStyles} rounded-full py-1 px-2 leading-none bg-opacity-50 hover:bg-opacity-70 transition-all`, "class")}> ${name.toLowerCase()} </a>`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/components/Tag.astro", void 0);

const $$Astro$9 = createAstro("https://www.kalmanodds.com/");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Main;
  const { pageTitle, pageDesc, trailingTag } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "data-astro-cid-hsp6otuf": true })} ${maybeRenderHead()}<main id="main-content" data-astro-cid-hsp6otuf> <h1 data-astro-cid-hsp6otuf>${pageTitle}</h1> <p data-astro-cid-hsp6otuf> ${pageDesc} ${trailingTag && renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "class": "hover:bg-opacity-50", "name": trailingTag, "data-astro-cid-hsp6otuf": true })}`} </p> ${renderSlot($$result, $$slots["default"])} </main> `;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/layouts/Main.astro", void 0);

const $$Astro$8 = createAstro("https://www.kalmanodds.com/");
const $$IconShell = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$IconShell;
  const { icon: Icon, size, className } = Astro2.props;
  const heightStyle = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return renderTemplate`${renderComponent($$result, "Icon", Icon, { "className": `${heightStyle} ${className ?? ""}` })}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/components/IconShell.astro", void 0);

const $$Astro$7 = createAstro("https://www.kalmanodds.com/");
const $$Datetime = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Datetime;
  const { datetime, postTitle, size = "sm", className, type } = Astro2.props;
  const myDatetime = new Date(datetime);
  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const icon = type === "project" ? FaCode : FaNewspaper;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex items-center space-x-2 opacity-80 ${className}`, "class")}${addAttribute(renderTransition($$result, "ikuuck4t", "", `date-${postTitle}`), "data-astro-transition-scope")}> ${renderComponent($$result, "IconShell", $$IconShell, { "icon": icon, "size": size })} <span class="sr-only">Posted on:</span> <span${addAttribute(`italic ${size === "sm" ? "text-sm" : "text-base"}`, "class")}> ${date} </span> </div>`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/components/Datetime.astro", "self");

const $$Astro$6 = createAstro("https://www.kalmanodds.com/");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, frontmatter, secHeading } = Astro2.props;
  const { title, publishedAt, description, type } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<li class="my-6"> <a${addAttribute(href, "href")} class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"> ${secHeading ? renderTemplate`<h2 class="text-lg font-medium decoration-dashed hover:underline"${addAttribute(renderTransition($$result, "dycb3fq2", "", title), "data-astro-transition-scope")}> ${title} </h2>` : renderTemplate`<h3 class="text-lg font-medium decoration-dashed hover:underline"${addAttribute(renderTransition($$result, "4kid6szu", "", title), "data-astro-transition-scope")}> ${title} </h3>`} </a> ${renderComponent($$result, "Datetime", $$Datetime, { "datetime": publishedAt, "postTitle": title, "type": type })} <p>${description}</p> </li>`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/components/Card.astro", "self");

const slugifyStr = (str) => slug(str);
const slugifyAll = (arr) => arr.map((str) => slugifyStr(str));
const slugifyPost = (post) => post.postSlug ? slug(post.postSlug) : slug(post.title);
const slugifyProject = (project) => project.projectSlug ? slug(project.projectSlug) : slug(project.title);

const $$Astro$5 = createAstro("https://www.kalmanodds.com/");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Posts;
  const { pageNumber, totalPages, posts } = Astro2.props;
  const prev = pageNumber > 1 ? "" : "disabled";
  const next = pageNumber < totalPages ? "" : "disabled";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts | ${SITE.title}`, "data-astro-cid-eenky23y": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "posts", "data-astro-cid-eenky23y": true })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Posts", "pageDesc": "All the articles I've posted.", "data-astro-cid-eenky23y": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-eenky23y> ${posts.map(({ data }) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "href": `/posts/${slugifyPost(data)}`, "frontmatter": data, "data-astro-cid-eenky23y": true })}`)} </ul> ` })} ${totalPages > 1 && renderTemplate`<nav class="pagination-wrapper" aria-label="Pagination" data-astro-cid-eenky23y> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "disabled": prev === "disabled", "href": `/posts${pageNumber - 1 !== 1 ? "/" + (pageNumber - 1) : ""}`, "className": `mr-4 select-none ${prev}`, "ariaLabel": "Previous", "data-astro-cid-eenky23y": true }, { "default": ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${prev}-svg`, "class")} data-astro-cid-eenky23y> <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" data-astro-cid-eenky23y></path> </svg>
Prev
` })} ${renderComponent($$result2, "LinkButton", $$LinkButton, { "disabled": next === "disabled", "href": `/posts/${pageNumber + 1}`, "className": `ml-4 select-none ${next}`, "ariaLabel": "Next", "data-astro-cid-eenky23y": true }, { "default": ($$result3) => renderTemplate`
Next
<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${next}-svg`, "class")} data-astro-cid-eenky23y> <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" data-astro-cid-eenky23y></path> </svg> ` })} </nav>`}${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": totalPages > 1, "data-astro-cid-eenky23y": true })} ` })} `;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/layouts/Posts.astro", void 0);

const $$Astro$4 = createAstro("https://www.kalmanodds.com/");
const $$PostDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const { post } = Astro2.props;
  const { title, author, description, ogImage, canonicalURL, publishedAt, tags } = post.data;
  const { Content } = await post.render();
  const ogUrl = new URL(ogImage ? ogImage : `${title}.png`, Astro2.url.origin).href;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "author": author, "description": description, "ogImage": ogUrl, "canonicalURL": canonicalURL, "data-astro-cid-vj4tpspi": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-vj4tpspi": true })} ${maybeRenderHead()}<div class="mx-auto flex w-full max-w-3xl justify-start px-2" data-astro-cid-vj4tpspi> <button class="focus-outline mb-2 mt-8 flex hover:opacity-75" onclick="history.back()" data-astro-cid-vj4tpspi> <svg xmlns="http://www.w3.org/2000/svg" data-astro-cid-vj4tpspi><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" data-astro-cid-vj4tpspi></path> </svg><span data-astro-cid-vj4tpspi>Go back</span> </button> </div> <main id="main-content" data-astro-cid-vj4tpspi> <h1 class="post-title" data-astro-cid-vj4tpspi${addAttribute(renderTransition($$result2, "plk3gbjq", "", title), "data-astro-transition-scope")}>${title}</h1> ${renderComponent($$result2, "Datetime", $$Datetime, { "datetime": publishedAt, "type": "post", "size": "lg", "className": "my-2", "postTitle": title, "data-astro-cid-vj4tpspi": true })} <ul class="mt-4 mb-8" data-astro-cid-vj4tpspi> ${tags.map((tag) => renderTemplate`<li class="inline" data-astro-cid-vj4tpspi>${renderComponent($$result2, "Tag", $$Tag, { "name": slugifyStr(tag), "data-astro-cid-vj4tpspi": true })}</li>`)} </ul> <article id="article" role="article" class="prose mx-auto mt-8 max-w-3xl" data-astro-cid-vj4tpspi> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-vj4tpspi": true })} </article> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-vj4tpspi": true })} ` })} `;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/layouts/PostDetails.astro", "self");

const getPageNumbers = (numberOfPosts) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  return pageNumbers;
};

const sortPostsByDate = (posts) => {
  const sortedPosts = posts.sort(
    (a, b) => Math.floor(new Date(b.data.publishedAt).getTime() / 1e3) - Math.floor(new Date(a.data.publishedAt).getTime() / 1e3)
  );
  return sortedPosts;
};
const sortItemsByDate = (items) => {
  const sortedItems = items.sort(
    (a, b) => Math.floor(new Date(b.data.publishedAt).getTime() / 1e3) - Math.floor(new Date(a.data.publishedAt).getTime() / 1e3)
  );
  return sortedItems;
};

const $$Astro$3 = createAstro("https://www.kalmanodds.com/");
async function getStaticPaths$1() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postResult = posts.map((post) => ({
    params: { slug: slugifyPost(post.data) },
    props: { post }
  }));
  const pagePaths = getPageNumbers(posts.length).map((pageNum) => ({
    params: { slug: String(pageNum) }
  }));
  return [...postResult, ...pagePaths];
}
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$slug$1;
  const { slug } = Astro2.params;
  const { post } = Astro2.props;
  const posts = await getCollection("blog");
  const sortedPosts = sortPostsByDate(posts);
  const totalPages = getPageNumbers(sortedPosts.length);
  const currentPage = slug && !isNaN(Number(slug)) && totalPages.includes(Number(slug)) ? Number(slug) : 0;
  const lastPost = currentPage * SITE.postPerPage;
  const startPost = lastPost - SITE.postPerPage;
  const paginatedPosts = sortedPosts.slice(startPost, lastPost);
  return renderTemplate`${post ? renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post })}` : renderTemplate`${renderComponent($$result, "Posts", $$Posts, { "posts": paginatedPosts, "pageNumber": currentPage, "totalPages": totalPages.length })}`}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/pages/posts/[slug].astro", void 0);

const $$file$1 = "C:/Users/sigur/Documents/dev/astro-blog/src/pages/posts/[slug].astro";
const $$url$1 = "/posts/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://www.kalmanodds.com/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projects;
  const { pageNumber, totalPages, projects } = Astro2.props;
  const prev = pageNumber > 1 ? "" : "disabled";
  const next = pageNumber < totalPages ? "" : "disabled";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Portfolio | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "projects" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Projects", "pageDesc": "Featured projects." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${projects.map(({ data }) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "href": `/projects/${slugifyProject(data)}`, "frontmatter": data })}`)} </ul> ` })} ${totalPages > 1 && renderTemplate`<nav class="pagination-wrapper" aria-label="Pagination"> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "disabled": prev === "disabled", "href": `/posts${pageNumber - 1 !== 1 ? "/" + (pageNumber - 1) : ""}`, "className": `mr-4 select-none ${prev}`, "ariaLabel": "Previous" }, { "default": ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${prev}-svg`, "class")}> <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path> </svg>
Prev
` })} ${renderComponent($$result2, "LinkButton", $$LinkButton, { "disabled": next === "disabled", "href": `/posts/${pageNumber + 1}`, "className": `ml-4 select-none ${next}`, "ariaLabel": "Next" }, { "default": ($$result3) => renderTemplate`
Next
<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${next}-svg`, "class")}> <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path> </svg> ` })} </nav>`}${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": totalPages > 1 })} ` })}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/layouts/Projects.astro", void 0);

const $$Astro$1 = createAstro("https://www.kalmanodds.com/");
const $$ProjectDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectDetails;
  const { project } = Astro2.props;
  const { title, description, image, url, readmeUrl, publishedAt, tags } = project.data;
  const { Content } = await project.render();
  const ogUrl = new URL(image ? image : `${title}.png`, Astro2.url.origin).href;
  const readmeResponse = await fetch(readmeUrl);
  const readmeMarkdown = await readmeResponse.text();
  const readmeContent = marked.parse(readmeMarkdown);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "ogImage": ogUrl, "canonicalURL": url, "data-astro-cid-rztq2yfn": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-rztq2yfn": true })} ${maybeRenderHead()}<div class="mx-auto flex w-full max-w-3xl justify-start px-2" data-astro-cid-rztq2yfn> <button class="focus-outline mb-2 mt-8 flex hover:opacity-75" onclick="history.back()" data-astro-cid-rztq2yfn> <svg xmlns="http://www.w3.org/2000/svg" data-astro-cid-rztq2yfn><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" data-astro-cid-rztq2yfn></path> </svg><span data-astro-cid-rztq2yfn>Go back</span> </button> </div> <main id="main-content" data-astro-cid-rztq2yfn> <h1 class="project-title" data-astro-cid-rztq2yfn${addAttribute(renderTransition($$result2, "w4nzicni", "", title), "data-astro-transition-scope")}>${title}</h1> ${renderComponent($$result2, "Datetime", $$Datetime, { "datetime": publishedAt, "type": "project", "size": "lg", "className": "my-2", "postTitle": title, "data-astro-cid-rztq2yfn": true })} <ul class="mt-4 mb-8" data-astro-cid-rztq2yfn> ${tags.map((tag) => renderTemplate`<li class="inline" data-astro-cid-rztq2yfn>${renderComponent($$result2, "Tag", $$Tag, { "name": slugifyStr(tag), "data-astro-cid-rztq2yfn": true })}</li>`)} </ul> <article id="article" role="article" class="prose mx-auto mt-8 max-w-3xl" data-astro-cid-rztq2yfn> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-rztq2yfn": true })} <p data-astro-cid-rztq2yfn>See more on <a target="_blank"${addAttribute(url, "href")} data-astro-cid-rztq2yfn>Github</a>.</p> <strong data-astro-cid-rztq2yfn>README.md:</strong> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(readmeContent)}` })} </article> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-rztq2yfn": true })} ` })} `;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/layouts/ProjectDetails.astro", "self");

const $$Astro = createAstro("https://www.kalmanodds.com/");
async function getStaticPaths() {
  const projects = await getCollection("portfolio");
  const projectResult = projects.map((project) => ({
    params: { slug: slugifyProject(project.data) },
    props: { project }
  }));
  const pagePaths = getPageNumbers(projects.length).map((pageNum) => ({
    params: { slug: String(pageNum) }
  }));
  return [...projectResult, ...pagePaths];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { project } = Astro2.props;
  const projects = await getCollection("portfolio");
  const totalPages = getPageNumbers(projects.length);
  const currentPage = slug && !isNaN(Number(slug)) && totalPages.includes(Number(slug)) ? Number(slug) : 0;
  const lastPost = currentPage * SITE.postPerPage;
  const startPost = lastPost - SITE.postPerPage;
  const paginatedPosts = projects.slice(startPost, lastPost);
  return renderTemplate`${project ? renderTemplate`${renderComponent($$result, "ProjectDetails", $$ProjectDetails, { "project": project })}` : renderTemplate`${renderComponent($$result, "Projects", $$Projects, { "projects": paginatedPosts, "pageNumber": currentPage, "totalPages": totalPages.length })}`}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/pages/projects/[slug].astro", void 0);

const $$file = "C:/Users/sigur/Documents/dev/astro-blog/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Main as $, _slug_$1 as _, slugifyProject as a, slugifyStr as b, slugifyAll as c, sortItemsByDate as d, $$Card as e, sortPostsByDate as f, getPageNumbers as g, $$Posts as h, $$Projects as i, $$Tag as j, _slug_ as k, slugifyPost as s };
