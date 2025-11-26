import type { Project } from '@/types/project';
import Featured from '@assets/featured/hugging-face-iso.png';
/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
const ProjectHuggingFace: Project = {
  id: 'hugging-face',
  link: 'ai-powered-learning-practice',
  order: 'a',
  featuredImagePath: 'hugging-face-featured.png',
  featuredImage: Featured,
  title: 'AI-Powered Learning Practice',
  owner: {
    content: 'Proof of Concept',
    url: 'https://huggingface.co/spaces/mossglenn/answering-questions-demo',
  },

  display: {
    headlineHTML: 'Using AI to Learn with Precision and Confidence',
    subheadingHTML: 'Scaling individualized feedback to help staff practice communicating complex information accurately and confidently.',
    leaderHTML:
      "<span class='italic'>This proof of concept project was not been implemented.</span> Staff in biomedical research programs often field complex and sensitive questions from the public. To help them practice communicating clearly and accurately, this AI-enabled tool evaluates how closely their response aligns with an IRB-approved answer and offers feedback based on semantic similarity.",
  },
  metadata: {
    category: ['ai'],
  },
};
export default ProjectHuggingFace;
