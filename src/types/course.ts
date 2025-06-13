import { fieldOrder } from '@/data/courseFields';

/**
 * CourseMetadata represents the metadata for a course. Used mainly in Course Details sections.
 */
export type CourseMetadata = {
  /*
   * titles with colons may be split into title and subtitle
   */
  title?: { content: string; url?: string };

  /*
   * Brief description of the purpose and content of the course
   */
  summary?: { content: string; url?: string };

  /*
   * Name of the organization paying for or sponsoring the course
   */
  owner?: { content: string; url?: string };
  /*
   * Single name or array of names of groups involved
   */
  partners?:
    | { content: string; url?: string }
    | { content: string; url?: string }[];

  /*
   * Description of the target learners
   */
  audience?: { content: string; url?: string };

  /*
   * Most significant month and year of course publication
   */
  releaseDate?: { content: string; url?: string };

  /*
   * Description of my role in design and development
   */
  myRole?: { content: string; url?: string };

  /*
   * Description of the process used during design
   */
  designStrategy?: { content: string; url?: string };

  /*
   * Description of curriculum or content structure--not technical or delivery
   */
  structure?: { content: string; url?: string };

  /*
   * Not used yet, but will be used to display important design events
   */
  timeline?: { content: string; url?: string };

  /*
   * Description of instrumentation and analytics used
   */
  analytics?: { content: string; url?: string };

  /*
   * Phrase describing the important aspects of the course (e.g., "Multi-Course Curriculum", "Online Modules")
   */
  type?: { content: string; url?: string };

  /*
   * Used for filtering by technical method of distributing course (e.g., "xAPI", "SCORM", "HTML5")
   */
  delivery?: { content: string; url?: string };

  /*
   * Used for filtering by general topic (e.g., "Compliance and Ethics", "Customer Service", "STEM")
   */
  subject?: { content: string; url?: string };

  /*
   * Used for filtering by general format (e.g., "Self-paced Online", "Online Cohort")
   */
  format?: { content: string; url?: string };

  /*
   * Used for filtering by development tools (e.g., "Articulate Storyline", "Adobe Illustrator")
   */
  tools?: { content: string; url?: string };

  /*
   * Used for filtering by level of web accessibility guide
   */
  accessibility?: { content: string; url?: string };
};

export type GroupKey = (typeof fieldOrder)[number]['group'] | 'custom';
export type Field =
  | (typeof fieldOrder)[number]['showFields'][number]
  | (typeof fieldOrder)[number]['hideFields'][number];

export type FieldKey = Field['key'];
export type GroupEntry = {
  group: GroupKey;
  showFields: Field[];
  hideFields: Field[];
};
export type Groups = GroupEntry[];

export type CustomGroup = {
  group: 'custom';
  showFields: Field[];
  hideFields: Field[];
};
