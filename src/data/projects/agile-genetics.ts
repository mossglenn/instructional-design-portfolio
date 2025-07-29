import type { Project } from '@/types/project';
import Featured from '@assets/featured/agile-iso.png';
/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
const ProjectAgileGenetics: Project = {
  id: 'agile-genetics',
  link: 'coming-soon',
  order: 'aaa',
  featuredImagePath: 'agile-iso.png',
  featuredImage: Featured,
  title: 'Agile approaches power fast, scalable training for large audiences.',
  owner: {
    content:
      'Network of the National Library of Medicine, National Institutes of Health',
    url: 'https://www.nnlm.gov/',
  },

  display: {
    headlineHTML: 'Agile Design for Rapid, High-Impact Curriculum Development',
    subheadingHTML:
      'Quickly delivering essential learning material for a complex, technical subjects by continuously iterating based on learner feedback.',
    leaderHTML:
      'Learning material for a large and complex topic (Genetics) was needed right away. Since a waterfall approach (like ADDIE) would have taken months to analyze, I used an agile-inspired, collaborative approach launching an MVP curriculum in weeks, and refining it based on real-time learner feedback.',
  },
  metadata: {
    category: ['agile'],
  },
};
export default ProjectAgileGenetics;
