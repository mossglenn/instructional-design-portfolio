import type { CourseMetadata } from '@/types/course';

/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
export const RcrMetadata: CourseMetadata = {
  title: {
    content: 'Responsible Conduct of Research',
  },
  summary: {
    content:
      'Key concepts of research ethics and policies as well as clarifying how All of Us applies these concepts in the effort to catalyze positive change in research.',
  },
  type: {
    content: 'Multi-Course Curriculum',
  },
  delivery: {
    content: 'xAPI modules',
  },
  format: {
    content: 'Self-paced online',
  },
  subject: {
    content: 'Compliance and Ethics',
  },
  audience: {
    content:
      'Researchers (from around the world) Requesting Data from the All of Us Research Program',
  },
  releaseDate: {
    content: 'November 2020',
  },
  structure: {
    content:
      'Part 1: Registered Tier Data<br />Part 2 Controlled Tier Data<br />A curriculum of two cumulative courses with five modules each. Courses lead to certification for access to a data tier.',
  },
  owner: {
    content: 'All of Us Research Program, National Institutes of Health (NIH)',
    url: 'https://www.researchallofus.org/',
  },
  myRole: {
    content: 'Instructional Design Lead',
  },
  tools: {
    content: 'Articulate Storyline',
  },
  partners: [
    {
      content:
        'All of Us Research Program, National Institutes of Health (NIH)',
      url: 'https://www.researchallofus.org/',
    },
    {
      content: 'Sage Bionetworks',
      url: 'https://sagebionetworks.org/',
    },
    {
      content: 'Vanderbilt Institute for Clinical and Translational Research',
      url: 'https://victr.vumc.org/',
    },
  ],
  timeline: {
    content: '2018 - 2020',
  },
};
