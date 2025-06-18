import type { CourseMetadata } from '@/types/course';

/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
export const myProjectMetadata: CourseMetadata = {
  title: {
    content: 'My Project Title',
    url: '/projects/my-project-id', // optional
  },

  summary: {
    content: 'Brief summary of the course purpose and learning goals.',
  },

  owner: {
    content: 'Sponsoring Organization or Department',
  },

  partners: [
    { content: 'Partner One' },
    { content: 'Partner Two', url: 'https://example.com' },
  ],

  audience: {
    content: 'Who this course is for (e.g., Researchers, Frontline Staff)',
  },

  releaseDate: {
    content: 'June 2024',
  },

  myRole: {
    content: 'Brief description of your design/development role',
  },

  designStrategy: {
    content: 'e.g., Agile collaboration, learner interviews, rapid prototyping',
  },

  structure: {
    content: 'How content is organized (e.g., 3 modules with assessments)',
  },

  timeline: {
    content: 'Optional — used for visualizing key milestones',
  },

  analytics: {
    content: 'Optional — e.g., embedded xAPI tracking, pre/post testing',
  },

  type: {
    content: 'e.g., Online Course, Interactive Training, Microlearning Series',
  },

  delivery: {
    content: 'e.g., xAPI, SCORM, Web App',
  },

  subject: {
    content: 'e.g., Compliance, Data Security, STEM Education',
  },

  format: {
    content: 'e.g., Self-paced Online, Facilitated Workshop, Blended',
  },

  tools: {
    content: 'e.g., Articulate Storyline, Illustrator, ChatGPT',
  },

  accessibility: {
    content: 'e.g., WCAG 2.1 AA — supports screen readers, captions, etc.',
  },
};
