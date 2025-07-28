import type { Project } from '@/types/project';
import RCRFeatured from '@assets/featured/rcr-iso.png';

/**
 * Project metadata for: My Project Name
 * Used in the Course Details table and other structured components.
 */
const ProjectRCR: Project = {
  id: 'rcr',
  link: 'compliance-training-impact',
  order: 'bb',
  featuredImagePath: 'rcr-wings-featured.png',
  featuredImage: RCRFeatured,
  title: 'Responsible Conduct of Research',
  owner: {
    content: 'All of Us Research Program, National Institutes of Health (NIH)',
    url: 'https://www.researchallofus.org/',
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
  releaseDate: 'November 2020',
  display: {
    headlineHTML: 'From Red Tape to Real Impact',
    subheadingHTML:
      'Can compliance training be more than a task to check off? Can it encourage researchers to reflect on their role in ethical research, not just memorize rules and policies?',
    hookHTML:
      'How can we turn compliance training into a meaningful, thought-provoking experience—one that encourages researchers to reflect on their role in ethical research, not just memorize rules and poplicies?',
    leaderHTML:
      "This training was designed to shift a researcher's mindset from checking off a bureaucratic task to thinking about rules and policies as strategies and guardrails that protect the integrity of their work and the privacy of research participants.",
    relatedCourseTitle: 'Responsible Conduct of Research',
    audience:
      'Researchers (from around the world) Requesting Data from the All of Us Research Program',
    myRole: 'Instructional Design Lead',
    summaryHTML:
      'Key concepts of research ethics and policies as well as clarifying how All of Us applies these concepts in the effort to catalyze positive change in research. Part 1: Registered Tier Data<br />Part 2 Controlled Tier Data<br />A curriculum of two cumulative courses with five modules each. Courses lead to certification for access to a data tier.',
  },
  metadata: {
    category: ['compliance'],
    type: ['multi-course-curriculum'],
    delivery: ['xapi'],
    format: ['self-paced-online'],
    subject: ['compliance-and-ethics'],
    tools: ['articulate-storyline'],
  },
};
export default ProjectRCR;
