/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_BGXLXoF4.mjs';
import 'kleur/colors';
import { g as getCollection } from './_ogTitle__CNmDLd8P.mjs';
import { L as LOCALE, $ as $$Header, b as $$Footer, S as SITE, c as $$Layout } from './404_CUc_-rlo.mjs';
import { s as slugifyPost, d as sortItemsByDate, $ as $$Main } from './_slug__BWFQBMlB.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import Fuse from 'fuse.js';
import { useRef, useState, useMemo, useEffect } from 'react';
import { a as getItemUrl } from './_tag__B84ULa-c.mjs';

const SearchDateTime = ({ datetime, size = "sm", classNameName }) => {
  const myDatetime = new Date(datetime);
  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center space-x-2 opacity-80 ${classNameName}`, children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: `${size === "sm" ? "scale-90" : "scale-100"} inline-block h-6 w-6 fill-skin-base`,
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Posted on:" }),
    /* @__PURE__ */ jsx("span", { className: `italic ${size === "sm" ? "text-sm" : "text-base"}`, children: date })
  ] });
};

const SearchCard = ({ href, frontmatter, secHeading }) => {
  const { title, publishedAt, description } = frontmatter;
  return /* @__PURE__ */ jsxs("li", { className: "my-6", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href,
        className: "inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0",
        children: secHeading ? /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium decoration-dashed hover:underline", children: title }) : /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium decoration-dashed hover:underline", children: title })
      }
    ),
    /* @__PURE__ */ jsx(SearchDateTime, { datetime: publishedAt }),
    /* @__PURE__ */ jsx("p", { children: description })
  ] });
};

function SearchBar({ searchList }) {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState(
    null
  );
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };
  const fuse = useMemo(
    () => new Fuse(searchList, {
      keys: ["data.title", "data.description"],
      includeMatches: true,
      minMatchCharLength: 2,
      threshold: 0.5
    }),
    [searchList]
  );
  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr)
      setInputVal(searchStr);
    setTimeout(function() {
      inputRef.current.selectionStart = inputRef.current.selectionEnd = searchStr?.length || 0;
    }, 50);
  }, []);
  useEffect(() => {
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
      history.replaceState(null, "", newRelativePathQuery);
    } else {
      history.replaceState(null, "", window.location.pathname);
    }
  }, [inputVal]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("label", { className: "relative block", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-2 opacity-75", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" }) }) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "block w-full rounded border border-skin-fill \n        border-opacity-40 bg-skin-fill py-3 pl-10\n        pr-3 placeholder:italic placeholder:text-opacity-75 \n        focus:border-skin-accent focus:outline-none",
          placeholder: "Search for anything...",
          type: "text",
          name: "search",
          value: inputVal,
          onChange: handleChange,
          autoComplete: "off",
          autoFocus: true,
          ref: inputRef
        }
      )
    ] }),
    inputVal.length > 1 && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      "Found ",
      searchResults?.length,
      searchResults?.length && searchResults?.length === 1 ? " result" : " results",
      " ",
      "for '",
      inputVal,
      "'"
    ] }),
    /* @__PURE__ */ jsx("ul", { children: searchResults && searchResults.map(({ item, refIndex }) => /* @__PURE__ */ jsx(
      SearchCard,
      {
        href: getItemUrl(item),
        frontmatter: item.data
      },
      `${refIndex}-${slugifyPost(item.data)}`
    )) })
  ] });
}

const $$Astro = createAstro("https://www.kalmanodds.com/");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const projects = await getCollection("portfolio", ({ data }) => !data.draft);
  const searchList = [...posts, ...projects];
  const sortedSearchList = sortItemsByDate(searchList);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "search" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Search", "pageDesc": "Search any project or blog post." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SearchBar", SearchBar, { "client:load": true, "searchList": sortedSearchList, "client:component-hydration": "load", "client:component-path": "@components/SearchBar", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/sigur/Documents/dev/astro-blog/src/pages/search.astro", void 0);

const $$file = "C:/Users/sigur/Documents/dev/astro-blog/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
