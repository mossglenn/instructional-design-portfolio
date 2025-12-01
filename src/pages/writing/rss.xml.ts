import rss from '@astrojs/rss';
import { getAllPosts } from '@utilities/writing';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getAllPosts();

  return rss({
    title: 'Amos Glenn - Writing',
    description: 'Essays on instructional design, learning science, and human-centered design. Notes on ideas worth exploring.',
    site: context.site || 'https://amosglenn.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/writing/${post.slug}`,
      pubDate: post.data.publishDate,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
