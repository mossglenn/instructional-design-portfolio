import type { Project } from '@/types/project';
import Featured from '@assets/featured/hugging-face-iso.png';
/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
const ProjectHuggingFace: Project = {
  id: 'hugging-face',
  link: 'coming-soon',
  order: 'a',
  featuredImagePath: 'hugging-face-featured.png',
  featuredImage: Featured,
  title: 'AI-enabled Practice Answering FAQs',
  owner: {
    content: 'Proof of Concept',
    url: 'https://huggingface.co/spaces/mossglenn/answering-questions-demo',
  },

  display: {
    headlineHTML: 'Using AI to Practice Answering FAQs with Precision',
    subheadingHTML:
      'How to reach learners with low digital literacy skills though a national, scalable, online program to teach digital literacy skills.',
    leaderHTML:
      "<span class='italic'>This proof of concept project was not been implemented.</span> It is essential for the staff of a biomedical research program to provide accurate and complete answers to difficult questions from the public. This Ai-enabled tool compares the learner's answer to an IRB-approved answer, scoring it based on semantic similarity of the two answers.",
  },
  metadata: {
    category: ['ai'],
  },
};
export default ProjectHuggingFace;
