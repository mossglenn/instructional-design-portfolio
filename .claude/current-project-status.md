# Current Status of the Instructional Design Portfolio website

**Current Focus**: Rebuilding with Flowbite

## Rebuilding with Flowbite Project Tracker

Information about theme preferences and plans are at: .claude/inspiration/THEME-ANALYSIS.md


### Phase 1: Prep

- [x] Create migration branch
- [x] Document current content
- [x] Verify Flowbite

### Phase 2: Create base layout

- [ ] Create new base layout using Flowbite
- [ ] Create Navbar component from Flowbite navbar directly

### Phase 3: Migrate Content

- [ ] Rebuild `src/pages/index.astro` with Flowbite components

#### **Swap layout reference** in `src/pages/`: Layout.astro → FlowbiteBase.astro

- [ ] 404.astro
- [ ] compliance-training-impact.astro
- [ ] gamified-statistics-tutor.astro
- [ ] adaptive-learning-instruction.astro
- [ ] contact.astro
- [ ] agile-genetics-curriculum.astro
- [ ] digital-literacy-microlearning.astro
- [ ] portfolio.astro
- [ ] ai-powered-learning-practice.astro
- [ ] game-based-learning-design.astro

### Phase 4: Portfolio Page

- [ ] Swap layout reference
- [ ] Use Flowbote cards to rebuild project cards
- [ ] Use flowbite to rebuild project page layout
**Use Flowbite components to update content:**

#### adaptive-learning-instruction

- [ ] DesignNarrative.astro
- [ ] Hero.astro
- [ ] Highlights.astro
- [ ] Results.astro

#### **agile-genetics-curriculum**

- [ ] DesignChallenge.astro
- [ ] DesignSolution.astro
- [ ] Hero.astro
- [ ] Highlights.astro
- [ ] Results.astro

#### **ai-powered-learning-practice**

- [ ] Carousel.astro
- [ ] DesignChallenge.astro
- [ ] DesignSolution.astro
- [ ] Hero.astro
- [ ] Highlights.astro
- [ ] Results.astro

#### **compliance-training-impact**

- [ ] DesignChallenge.astro
- [ ] DesignSolution.astro
- [ ] Hero.astro
- [ ] Highlights.astro
- [ ] ProjectDetails.astro
- [ ] Results.astro
- [ ] Tags.astro

#### **digital-literacy-microlearning**

- [ ] DesignChallenge.astro
- [ ] DesignSolution.astro
- [ ] Hero.astro
- [ ] Highlights.astro
- [ ] ProjectDetails.astro
- [ ] Results.astro
- [ ] Tags.astro

#### **game-based-learning-design**

- [ ] DesignChallenge.astro
- [ ] DesignSolution.astro
- [ ] Hero.astro
- [ ] Highlights.astro
- [ ] Results.astro

#### **gamified-statistics-tutor**

- [ ] Carousel.astro
- [ ] DesignChallenge.astro
- [ ] DesignSolution.astro
- [ ] Hero.astro
- [ ] Highlights.astro
- [ ] ProjectDetails.astro
- [ ] Results.astro
- [ ] Tags.astro

#### **home**

- [ ] Content.astro
- [ ] ContentOne.astro
- [ ] Hero.astro
- [ ] HeroCarousel.astro
- [ ] ProjectOne.astro
- [ ] ProjectOneCarousel.astro
- [ ] ProjectTwo.astro
- [ ] Welcome.astro

#### **portfolio**

- [ ] ProjectGrid.astro

### Phase 5: Theme

[ ] extract theme elements from alfadev
[ ] update tailwind.config.cjs
[ ] Add text-shadow utilities (from alfadev extraction)
[ ] Increase spacing (py-8 → py-16)
[ ] adjust Typography scale (larger headings)
