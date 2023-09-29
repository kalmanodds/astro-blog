import type { CollectionEntry } from "astro:content";

export const sortPostsByDate = (posts: CollectionEntry<"blog">[]) => {
  const sortedPosts = posts.sort(
    (a, b) =>
      Math.floor(new Date(b.data.publishedAt).getTime() / 1000)
        - Math.floor(new Date(a.data.publishedAt).getTime() / 1000)
  );
  return sortedPosts;
}

export const sortProjectsByDate = (projects: CollectionEntry<"portfolio">[]) => {
  const sortedProjects = projects.sort(
    (a, b) =>
      Math.floor(new Date(b.data.publishedAt).getTime() / 1000)
        - Math.floor(new Date(a.data.publishedAt).getTime() / 1000)
  );
  return sortedProjects;
}

export const sortItemsByDate = (items: CollectionEntry<"blog" | "portfolio">[]) => {
  const sortedItems = items.sort(
    (a, b) =>
      Math.floor(new Date(b.data.publishedAt).getTime() / 1000)
        - Math.floor(new Date(a.data.publishedAt).getTime() / 1000)
  );
  return sortedItems;
}
