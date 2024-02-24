import type { CollectionEntry } from "astro:content";
import { slugifyPost, slugifyProject } from "./slugify";

export const getItemUrl = (item: CollectionEntry<"blog" | "portfolio">) => {
  if (item.collection === "blog") {
    return `/posts/${slugifyPost(item.data)}`;
  } else {
    return `/projects/${slugifyProject(item.data)}`;
  }
}