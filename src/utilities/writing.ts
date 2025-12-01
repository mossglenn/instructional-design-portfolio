import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingPost = CollectionEntry<'writing'>;

/**
 * Get all published writing posts, sorted by date (newest first)
 */
export async function getAllPosts(): Promise<WritingPost[]> {
  const posts = await getCollection('writing', ({ data }) => {
    return data.draft !== true;
  });

  return posts.sort((a, b) => {
    return b.data.publishDate.getTime() - a.data.publishDate.getTime();
  });
}

/**
 * Get posts filtered by type (essay or note)
 */
export async function getPostsByType(type: 'essay' | 'note'): Promise<WritingPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.data.type === type);
}

/**
 * Get posts filtered by tag
 */
export async function getPostsByTag(tag: string): Promise<WritingPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.data.tags.includes(tag));
}

/**
 * Get all unique tags from published posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagSet = new Set<string>();
  
  posts.forEach(post => {
    post.data.tags.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}

/**
 * Get related posts based on tag overlap and recency
 * Returns up to `limit` posts (default 3)
 */
export async function getRelatedPosts(
  currentPost: WritingPost,
  limit: number = 3
): Promise<WritingPost[]> {
  const allPosts = await getAllPosts();
  
  // Filter out current post
  const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug);
  
  // Score posts based on tag overlap
  const scoredPosts = otherPosts.map(post => {    const sharedTags = post.data.tags.filter(tag => 
      currentPost.data.tags.includes(tag)
    );
    
    // Score: shared tags count + recency bonus
    // Recency bonus: newer posts get slight preference
    const daysSincePublish = Math.floor(
      (Date.now() - post.data.publishDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const recencyBonus = Math.max(0, (365 - daysSincePublish) / 365) * 0.5;
    
    return {
      post,
      score: sharedTags.length + recencyBonus
    };
  });
  
  // Sort by score (highest first) and return top N
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

/**
 * Format a date for display
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Get reading time estimate (words per minute = 200)
 */
export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

/**
 * Get tag display label (formats kebab-case to Title Case)
 */
export function formatTagLabel(tag: string): string {
  return tag
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
