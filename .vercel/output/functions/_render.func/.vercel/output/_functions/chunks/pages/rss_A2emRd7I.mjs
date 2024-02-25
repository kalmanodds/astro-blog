import rss from '@astrojs/rss';
import { g as getCollection } from './_ogTitle__CNmDLd8P.mjs';
import { f as sortPostsByDate, s as slugifyPost } from './_slug__BWFQBMlB.mjs';
import { S as SITE } from './404_CUc_-rlo.mjs';

async function get() {
  const posts = await getCollection("blog");
  const sortedPosts = sortPostsByDate(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data }) => ({
      link: `posts/${slugifyPost(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.publishedAt)
    }))
  });
}

export { get };
