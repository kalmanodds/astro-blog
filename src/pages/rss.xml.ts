import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/sortByDate";
import { slugifyPost } from "@utils/slugify";
import { SITE } from "@config";

export async function get() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data }) => ({
      link: `posts/${slugifyPost(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.publishedAt),
    })),
  });
}
