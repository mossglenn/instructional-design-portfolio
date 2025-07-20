import type { Project } from '@/types/project';
import AgileCycle from '@assets/featured/agile-cycle-featured.png';
import Engage from '@assets/featured/engage-featured.png';

const testProjectTypes: Project[] = [
  {
    id: 'genetics-training-one',
    link: '/projects/genetics-training',
    featuredImagePath: 'featured/agile-cycle-featured.png',
    featuredImage: AgileCycle,
    title: 'Genetics Essentials: Fast-Track Training',
    owner: { content: 'NIH', url: 'https://nih.gov' },
    partners: [
      { content: 'University of Learning' },
      { content: 'Genome Alliance', url: 'https://genomealliance.org' },
    ],
    releaseDate: '2024-06',
    relatedProjects: ['ethics-training'],
    learningObjects: ['genetics-quiz', 'interactive-dna'],
    display: {
      headlineHTML: '<strong>Train Fast. Learn Deep.</strong>',
      subheadingHTML:
        'Empowering healthcare staff to handle real-world genetics questions',
      hookHTML:
        'Designed for rapid deployment, this course met urgent national training needs.',
      leaderHTML:
        'Discover how an agile-inspired design process delivered a complete course in just weeks.',
      relatedCourseTitle: 'Genetics for Everyone: Essentials and Ethics',
      audience: 'National health program staff and call center teams',
      myRole:
        'Led design strategy, collaborated with subject matter experts, and directed implementation.',
      summaryHTML:
        '<p>This fast-track training included case-based activities and a visual glossary of key terms.</p>',
    },
    metadata: {
      tags: ['rapid-development', 'national-priority'],
      roles: ['instructional-designer', 'team-leader'],
      type: ['online-modules'],
      delivery: ['xapi'],
      subject: ['healthcare'],
      format: ['self-paced-online'],
      tools: ['articulate-storyline', 'adobe-illustrator'],
      accessibility: ['aa'],
    },
  },
  {
    id: 'leadership-101-two',
    link: '/projects/leadership-101',
    featuredImagePath: 'featured/engage-featured.png',
    featuredImage: Engage,
    title: 'Leadership 101: Foundations for New Managers',
    owner: { content: 'Corporate Learning Hub' },
    partners: [{ content: 'PeopleFirst Training' }],
    releaseDate: '2023-09',
    relatedProjects: [],
    learningObjects: ['feedback-scenario', 'leadership-assessment'],
    display: {
      headlineHTML: 'From Individual Contributor to Inspiring Leader',
      subheadingHTML:
        'Helping new managers build foundational leadership skills',
      hookHTML:
        'Interactive modules, real-world case studies, and practical tools. Interactive modules, real-world case studies, and practical tools. Interactive modules, real-world case studies, and practical tools. Interactive modules, real-world case studies, and practical tools.',
      leaderHTML:
        'This program helps learners shift from task-based thinking to strategic leadership. This program helps learners shift from task-based thinking to strategic leadership. This program helps learners shift from task-based thinking to strategic leadership. This program helps learners shift from task-based thinking to strategic leadership. This program helps learners shift from task-based thinking to strategic leadership. This program helps learners shift from task-based thinking to strategic leadership.',
      relatedCourseTitle: 'Core Leadership Skills',
      audience: 'Newly promoted managers across departments',
      myRole:
        'Designed scenario-based learning and built the adaptive assessment tools.',
      summaryHTML:
        '<p>Course design emphasized transfer of learning with structured reflection and job aids.</p>',
    },
    metadata: {
      tags: ['leadership', 'professional-development'],
      roles: ['instructional-designer'],
      type: ['workshop'],
      delivery: ['html5', 'pdf'],
      subject: ['leadership-and-management'],
      format: ['online-cohort'],
      tools: ['microsoft-powerpoint', 'h5p'],
      accessibility: ['none'],
    },
  },
  {
    id: 'genetics-training-three',
    link: '/projects/genetics-training',
    featuredImagePath: 'featured/agile-cycle-featured.png',
    featuredImage: AgileCycle,
    title: 'Genetics Essentials: Fast-Track Training',
    owner: { content: 'NIH', url: 'https://nih.gov' },
    partners: [
      { content: 'University of Learning' },
      { content: 'Genome Alliance', url: 'https://genomealliance.org' },
    ],
    releaseDate: '2024-06',
    relatedProjects: ['ethics-training'],
    learningObjects: ['genetics-quiz', 'interactive-dna'],
    display: {
      headlineHTML: '<strong>Train Fast. Learn Deep.</strong>',
      subheadingHTML:
        'Empowering healthcare staff to handle real-world genetics questions',
      hookHTML:
        'Designed for rapid deployment, this course met urgent national training needs.',
      leaderHTML:
        'Discover how an agile-inspired design process delivered a complete course in just weeks.',
      relatedCourseTitle: 'Genetics for Everyone: Essentials and Ethics',
      audience: 'National health program staff and call center teams',
      myRole:
        'Led design strategy, collaborated with subject matter experts, and directed implementation.',
      summaryHTML:
        '<p>This fast-track training included case-based activities and a visual glossary of key terms.</p>',
    },
    metadata: {
      tags: ['rapid-development', 'national-priority'],
      roles: ['instructional-designer', 'team-leader'],
      type: ['online-modules'],
      delivery: ['xapi'],
      subject: ['healthcare'],
      format: ['self-paced-online'],
      tools: ['articulate-storyline', 'adobe-illustrator'],
      accessibility: ['aa'],
    },
  },
  {
    id: 'leadership-101-four',
    link: '/projects/leadership-101',
    featuredImagePath: 'featured/engage-featured.png',
    featuredImage: Engage,
    title: 'Leadership 101: Foundations for New Managers',
    owner: { content: 'Corporate Learning Hub' },
    partners: [{ content: 'PeopleFirst Training' }],
    releaseDate: '2023-09',
    relatedProjects: [],
    learningObjects: ['feedback-scenario', 'leadership-assessment'],
    display: {
      headlineHTML: 'From Individual Contributor to Inspiring Leader',
      subheadingHTML:
        'Helping new managers build foundational leadership skills',
      hookHTML:
        'Interactive modules, real-world case studies, and practical tools.',
      leaderHTML:
        'This program helps learners shift from task-based thinking to strategic leadership.',
      relatedCourseTitle: 'Core Leadership Skills',
      audience: 'Newly promoted managers across departments',
      myRole:
        'Designed scenario-based learning and built the adaptive assessment tools.',
      summaryHTML:
        '<p>Course design emphasized transfer of learning with structured reflection and job aids.</p>',
    },
    metadata: {
      tags: ['leadership', 'professional-development'],
      roles: ['instructional-designer'],
      type: ['workshop'],
      delivery: ['html5', 'pdf'],
      subject: ['leadership-and-management'],
      format: ['online-cohort'],
      tools: ['microsoft-powerpoint', 'h5p'],
      accessibility: ['none'],
    },
  },
];
export default testProjectTypes;
