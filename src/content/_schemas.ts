import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    publishedAt: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;

export const projectSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    image: z.string(),
    url: z.string(),
    readmeUrl: z.string(),
    tags: z.array(z.string()).default(["others"]),
  })
  .strict();

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
