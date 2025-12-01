import type { CollectionEntry } from 'astro:content';

export type WritingPost = CollectionEntry<'writing'>;

export type PostType = 'essay' | 'note';

export interface PostWithRelated extends WritingPost {
  related?: WritingPost[];
}
