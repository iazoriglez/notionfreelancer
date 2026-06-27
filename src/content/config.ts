import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export const collections = {
  'blog-es': defineCollection({ type: 'content', schema: blogSchema }),
  'blog-en': defineCollection({ type: 'content', schema: blogSchema }),
};
