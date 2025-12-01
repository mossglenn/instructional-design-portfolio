import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    type: z.enum(['essay', 'note']),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    relatedProjects: z.array(z.string()).optional(),
    externalLinks: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

export const collections = {
  writing: writingCollection,
};
