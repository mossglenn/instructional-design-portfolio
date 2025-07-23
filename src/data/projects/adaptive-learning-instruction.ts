import type { Project } from '@/types/project';
import HandBookCover from '@assets/featured/handbook-featured.png';

/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
const ProjectHandbook: Project = {
  id: 'handbook',
  link: 'adaptive-learning-instruction',
  featuredImagePath: 'handbook-2-cover.png',
  featuredImage: HandBookCover,
  title: ' Instruction Based on Adaptive Learning Technologies',
  partners: [
    {
      content:
        'Carnegie Mellon University, Human-Computer Interaction Institute',
      url: 'https://www.hcii.cmu.edu/',
    },
  ],
  releaseDate: '2016',
  display: {
    headlineHTML: 'Personalizing Learning Experiences',
    subheadingHTML:
      'Co-author of Chapter 24: Instruction Based on Adaptive Learning Technologies',
    hookHTML:
      'Which learner charactaristics should we adapt to? Wwhich loops are effective at adapting to available data?',
    leaderHTML:
      "Recent advances in adaptive learning sciences are transforming a designer's ability to personalize instruction. In this chapter I discuss:<br /><span class='italic'>•Which learner charactaristics should we adapt to?<br />•Which loops are effective at adapting to available data?'</span>",
    audience:
      'graduate students, researchers, and practitioners interested in an evidence-based approach to learning and instruction',
    myRole: 'Coauthor',
    summaryHTML:
      " Recent advances in adaptive learning sciences (such as machine learning, natural language processing, and Bayesian knowledge tracing) are transforming a designer's ability to personalize instruction. For this reason a new chapter was added to the second edition of The Handbook on Learning and Instruction discussing the current state of the science and how practitioners can apply it effectively .",
  },
  metadata: {
    roles: ['subject-matter-expert'],
    type: ['text'],
    delivery: ['print'],
    subject: ['adaptive-learning', 'learning-sciences'],
  },
};

export default ProjectHandbook;
