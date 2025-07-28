import type { Project } from '@/types/project';
import StatisticsTutorFeatured from '@assets/featured/statistics-problem-sets-iso.png';
/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
const ProjectStatisticsTutor: Project = {
  id: 'statistics-tutor',
  link: 'gamified-statistics-tutor',
  order: 'd',
  featuredImagePath: 'problemsets-mockup-floating.png',
  featuredImage: StatisticsTutorFeatured,
  title: 'Gamified Statistics Tutor',
  owner: {
    content:
      'University of Pittsburgh / Institute for Clinical Research Education',
    url: 'https://www.icre.pitt.edu',
  },

  releaseDate: 'January 2017',
  display: {
    headlineHTML: 'Gamified Learning with Real-Time Personalization ',
    subheadingHTML:
      'Gamification and personalization transform an arduous subject into engaging and accessible learning experiences.',
    hookHTML:
      'How can we optimize learning and keep learners engaged while practicing a complex, multi-step skill? ',
    leaderHTML:
      '<span class="italic">Can we optimize learning and keep learners engaged while practicing a complex, multi-step skill?</span> Like many complex subjects, Statistics problems are often multi-step and complex; a single mistake can send learners down the wrong path with no way to recover. Without help, learners are left stuck and frustrated. ',
    relatedCourseTitle: 'Applied Biostatistics',
    audience: 'Early career physicians focusing on clinical research',
    myRole: 'Instructional Designer',
    summaryHTML:
      'designed an interactive, gamified statistics tutor that immersed the student in an entertaining scenario and provided personalized help when they needed it and at the level they needed. The system focused each student’s time and energy on the sections they were still learning.',
  },
  metadata: {
    category: ['adaptive'],
    type: ['online-modules'],
    delivery: ['scorm'],
    format: ['self-paced-online'],
    subject: ['data-science'],
    tools: ['adobe-captivate'],
  },
};
export default ProjectStatisticsTutor;
