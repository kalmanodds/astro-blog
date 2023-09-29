import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

export const filterPostsByTag = (posts: CollectionEntry<"blog">[], tag: string) => {
  const filteredPosts = posts.filter(post => slugifyAll(post.data.tags).includes(tag));
  return filteredPosts;
}

export const filterProjectsByTag = (projects: CollectionEntry<"portfolio">[], tag: string) => {
  const filteredPosts = projects.filter(project => slugifyAll(project.data.tags).includes(tag));
  return filteredPosts;
}

export const filterItemsByTag = (items: CollectionEntry<"blog" | "portfolio">[], tag: string) => {
  const filteredItems = items.filter(item => slugifyAll(item.data.tags).includes(tag));
  return filteredItems;
}

