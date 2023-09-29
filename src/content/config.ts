import { defineCollection } from "astro:content";
import { blogSchema, projectSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});

const portfolio = defineCollection({
  schema: projectSchema,
});

export const collections = { blog, portfolio };
