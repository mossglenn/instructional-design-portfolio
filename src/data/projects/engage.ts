import type { Project } from '@/types/project';
import EngageFeatured from '@assets/featured/engage-featured.png';
/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
const ProjectEngage: Project = {
  id: 'engage',
  link: 'game-based-learning-design',
  featuredImagePath: 'problemsets-mockup-floating.png',
  featuredImage: EngageFeatured,
  title: 'Game-Based Learning Design',
  owner: {
    content:
      'Carnegie Mellon University / Human-Computer Interaction Institute',
    url: 'https://www.hcii.cmu.edu',
  },

  display: {
    headlineHTML: 'Designing Games for Learning What’s Hard to Teach',
    subheadingHTML:
      'Bridging the learning sciences and game development to help players grasp abstract concepts through inquiry',
    hookHTML:
      'How can we optimize learning and keep learners engaged while practicing a complex, multi-step skill? ',
    leaderHTML:
      'As part of the interdisciplanary ENAGE team, I designed and developed games for young learners that use instructional strategies, interactive problem-solving, and scaffolded learning mechanics to teach STEM subjects plus scientific inquiry and critical thinking skills.',
  },
  metadata: {},
};
export default ProjectEngage;
