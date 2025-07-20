import type { ImageMetadata } from 'astro';

export type TextBlock = {
  content: string;
  url?: string | null;
};

export type ProjectTypeSlug =
  | 'multi-course-curriculum'
  | 'online-modules'
  | 'webinare'
  | 'workshop'
  | 'other';

export type ProjectDeliverySlug =
  | 'xapi'
  | 'scorm'
  | 'html5'
  | 'pdf'
  | 'video'
  | 'print'
  | 'other';

export type ProjectSubjectSlug =
  | 'compliance-and-ethics'
  | 'customer-service'
  | 'stem'
  | 'healthcare'
  | 'leadership-and-management'
  | 'data-science'
  | 'technology'
  | 'other';

export type ProjectFormatSlug =
  | 'self-paced-online'
  | 'online-cohort'
  | 'in-person-cohort'
  | 'in-person-workshop'
  | 'other';

export type DevelopmentToolSlug =
  | 'articulate-storyline'
  | 'adobe-illustrator'
  | 'adobe-photoshop'
  | 'adobe-premiere'
  | 'adobe-audition'
  | 'adobe-captivate'
  | 'camtasia'
  | 'microsoft-powerpoint'
  | 'h5p'
  | 'other';

export type RoleSlug =
  | 'design-manager'
  | 'team-leader'
  | 'instructional-designer'
  | 'developer'
  | 'other';

export type AccessibilitySlug = 'aa' | 'aaa' | 'none';

/**
 * Project represents the metadata for a project as presented in the portfolio. Used for display (and eventually filtering) ProjectCard components and displaying CourseCard components.
 */
export type Project = {
  /*
   * unique identifier for the project
   */
  id: string;

  /*
   * project url that can contain SEO-friendly slug
   */
  link: string;

  /*
   * featured image url--used only in project cards at the moment
   */
  featuredImagePath?: string;

  /*
   * featured image url--used only in project cards at the moment
   */
  featuredImage: ImageMetadata;

  /*
   * portfolio project title; titles with colons may be split into title and subtitle
   */
  title?: string;

  /*
   * Name of the organization paying for or sponsoring the project
   */
  owner?: TextBlock;

  /*
   * array of names of groups involved
   */
  partners?: TextBlock[];

  /*
   * Most significant month and year of project publication
   */
  releaseDate?: string;

  /*
   *  project id array for directing to similar projects
   */
  relatedProjects?: string[];

  /*
   *  learning object id array for directing to demos
   */
  learningObjects?: string[];

  /*
   * information used only for display
   */
  display: {
    /*
     * headline used mainly in hero sections--may include html tags
     */
    headlineHTML?: string;

    /*
     * subheading used mainly in hero sections--may include html tags
     */
    subheadingHTML?: string;

    /*
     * hook used mainly in project cards--may include html tags
     */
    hookHTML?: string;

    /*
     * Additional content to draw the user from the hook into the project page
     */
    leaderHTML?: string;

    /*
     * title of course associated with project; titles with colons may be split into title and subtitle
     */
    relatedCourseTitle?: string;

    /*
     * Description of the target learners
     */
    audience?: string;

    /*
     * Description of my role in design and development
     */
    myRole?: string;

    /*
     * Description of the process used during design
     */
    summaryHTML?: string;
  };

  metadata: {
    /*
     * array of tags used for filtering projects
     */
    tags?: string[];

    /*
     * array of roles played in the project
     */
    roles?: RoleSlug[];

    /*
     * Phrase describing the important aspects of the course (e.g., "Multi-Course Curriculum", "Online Modules")
     * may take only one value in the array
     */
    type?: ProjectTypeSlug[];

    /*
     * Used for filtering by technical method of distributing course (e.g., "xAPI", "SCORM", "HTML5")
     * may take only one value in the array
     */
    delivery?: ProjectDeliverySlug[];

    /*
     * Used for filtering by general topic (e.g., "Compliance and Ethics", "Customer Service", "STEM")
     * may take only one value in the array
     */
    subject?: ProjectSubjectSlug[];

    /*
     * Used for filtering by general format (e.g., "Self-paced Online", "Online Cohort")
     * may take only one value in the array
     */
    format?: ProjectFormatSlug[];

    /*
     * Used for filtering by development tools (e.g., "Articulate Storyline", "Adobe Illustrator")
     */
    tools?: DevelopmentToolSlug[];

    /*
     * Used for filtering by level of web accessibility guide
     * may take only one value in the array
     */
    accessibility?: AccessibilitySlug[];
  };
};
