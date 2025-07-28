import type { Project } from '@/types/project';
import Featured from '@assets/featured/digital-literacy-iso.png';
/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
const ProjectDigitalLiteracy: Project = {
  id: 'digital-literacy',
  link: 'coming-soon',
  order: 'b',
  featuredImagePath: 'problemsets-mockup-floating.png',
  featuredImage: Featured,
  title: 'Solving a Design Dilemma with Microlearning',
  owner: {
    content:
      'Network of the National Library of Medicine, National Institutes of Health',
    url: 'https://www.nnlm.gov/',
  },

  display: {
    headlineHTML: 'A Digital Bridge over the Digital Divide',
    subheadingHTML:
      'How to reach learners with low digital literacy skills though a national, scalable, online program to teach digital literacy skills.',
    leaderHTML:
      'Digital learning platforms are essential to a national-level learning program. <span class="font-bold">But how can we leverage the scalability of digital learning platforms if the primary audience does not have all the skills and knowledge to ineract in digital spaces efficiently and safely?</span>',
  },
  metadata: {
    category: ['digital'],
  },
};
export default ProjectDigitalLiteracy;
