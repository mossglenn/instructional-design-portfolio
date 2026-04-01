import { defineCollection, z } from 'astro:content';

// =============================================================================
// Enum Definitions (matching existing types in src/types/project.ts)
// =============================================================================

const projectCategoryEnum = z.enum([
  'ai',
  'agile',
  'adaptive',
  'games',
  'compliance',
  'research',
  'digital',
  'scalable',
]);

const roleEnum = z.enum([
  'design-manager',
  'team-leader',
  'instructional-designer',
  'developer',
  'subject-matter-expert',
  'other',
]);

const projectTypeEnum = z.enum([
  'multi-course-curriculum',
  'online-modules',
  'webinar',
  'workshop',
  'text',
  'other',
]);

const deliveryEnum = z.enum([
  'xapi',
  'scorm',
  'html5',
  'pdf',
  'video',
  'print',
  'other',
]);

const subjectEnum = z.enum([
  'compliance-and-ethics',
  'customer-service',
  'stem',
  'healthcare',
  'leadership-and-management',
  'data-science',
  'technology',
  'adaptive-learning',
  'learning-sciences',
  'other',
]);

const formatEnum = z.enum([
  'self-paced-online',
  'online-cohort',
  'in-person-cohort',
  'in-person-workshop',
  'other',
]);

const toolEnum = z.enum([
  'articulate-storyline',
  'adobe-illustrator',
  'adobe-photoshop',
  'adobe-premiere',
  'adobe-audition',
  'adobe-captivate',
  'camtasia',
  'microsoft-powerpoint',
  'h5p',
  'other',
]);

const accessibilityEnum = z.enum(['aa', 'aaa', 'none']);

// =============================================================================
// Icon Registry Enum
// Icons are referenced by name in frontmatter and resolved via IconRegistry.astro
// =============================================================================

const iconNameEnum = z.enum([
  'MotivationStar',
  'Xray',
  'Brain',
  'ForkRoad',
  'UserCentered',
  'Minimalist',
  'StopHand',
  'Loop',
  'Bridge',
  'BookmarkIcon',
  'PenCircle',
  'DesignProblem',
  'DesignSolution',
  'QuestionMark',
  'AgileLoop',
  'Scale',
  'AiSparkle',
  'Llm',
  'ParallelVectors',
  'Rocket',
  'Scientist',
  'Accomplished',
  'Retake',
  'BinaryData',
  'Iceberg',
  'StackingRings',
  'Translator',
]);

// =============================================================================
// Shared Schemas
// =============================================================================

/** Highlight item for the 3-column highlights section */
const highlightSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: iconNameEnum.optional(),
});

/** Learning object data (for the data collection) */
const learningObjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  path: z.string().describe('Path to the HTML5 package entry point'),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  thumbnailAlt: z.string().optional(),
  defaultOpen: z.boolean().default(false),
});

// =============================================================================
// Collection Definitions
// =============================================================================

export const collections = {
  /**
   * Projects Collection
   * MDX files with structured frontmatter for portfolio projects
   */
  projects: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        // === Core Identity ===
        title: z.string(),
        // Note: 'slug' is reserved by Astro and auto-generated from file path
        // Use 'permalink' for custom URL paths if needed
        permalink: z.string().optional().describe('Custom URL path (defaults to folder name)'),
        order: z.string().optional().describe('Sort order (alphabetical)'),
        draft: z.boolean().default(false),

        // === Hero Section ===
        hero: z.object({
          headline: z.string().describe('Main headline, can include HTML spans'),
          subheading: z.string().optional(),
          featuredImage: image().optional(),
          featuredImageAlt: z.string().optional(),
        }),

        // === Project Metadata (for cards & filtering) ===
        hook: z.string().describe('Short description for project cards'),
        owner: z
          .object({
            name: z.string(),
            url: z.string().url().optional(),
          })
          .optional(),
        partners: z
          .array(
            z.object({
              name: z.string(),
              url: z.string().url().optional(),
            })
          )
          .optional(),
        releaseDate: z.string().optional().describe('e.g., "January 2017"'),
        audience: z.string().optional(),
        myRole: z.string().optional(),

        // === Highlights Section ===
        highlights: z.array(highlightSchema).length(3).optional(),

        // === Page Layout Configuration ===
        layout: z
          .object({
            sections: z
              .array(
                z.enum([
                  'highlights',
                  'challenge',
                  'solution',
                  'narrative',
                  'results',
                  'details',
                ])
              )
              .default(['highlights', 'challenge', 'solution', 'results']),
          })
          .optional(),

        // === Interactive Content ===
        learningObjects: z
          .array(z.string())
          .optional()
          .describe('IDs referencing learningObjects collection'),
        relatedProjects: z
          .array(z.string())
          .optional()
          .describe('Slugs of related projects'),

        // === Filterable Metadata ===
        category: z.array(projectCategoryEnum).optional(),
        type: z.array(projectTypeEnum).optional(),
        delivery: z.array(deliveryEnum).optional(),
        subject: z.array(subjectEnum).optional(),
        format: z.array(formatEnum).optional(),
        tools: z.array(toolEnum).optional(),
        roles: z.array(roleEnum).optional(),
        accessibility: z.array(accessibilityEnum).optional(),
        tags: z.array(z.string()).optional(),
      }),
  }),

  /**
   * Learning Objects Collection
   * JSON/YAML data files for interactive learning demos
   * Note: Collection name must match directory name (learning-objects)
   */
  'learning-objects': defineCollection({
    type: 'data',
    schema: () => learningObjectSchema,
  }),
};
