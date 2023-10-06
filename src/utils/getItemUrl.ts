import type { CollectionEntry } from "astro:content";

export const getItemUrl = (item: CollectionEntry<"blog" | "portfolio">) => {
  if (item.collection === "blog") {
    return `/posts/${item.slug}`;
  } else {
    return `/projects/${item.slug}`;
  }
}