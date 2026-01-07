Recommendation: Flowbite (Not DaisyUI)
Why Flowbite for You:
You already have it installed:
json// Your package.json probably has:
"flowbite": "^x.x.x"
Better fit:

✅ Tailwind-native (utilities, not semantic classes)
✅ Vanilla JS (no framework lock-in)
✅ Free and open source
✅ Large component library
✅ Works with Astro out-of-box

DaisyUI downsides:

Semantic classes (btn-primary vs bg-primary-500)
Harder to customize granularly
Different mental model from Tailwind


Phased Migration Plan
Phase 0: Preparation (30 min)
Create migration branch:
bashcd /Users/amosglenn/Dev/instructional-design-portfolio
git checkout -b rebuild-with-flowbite
Document current content:
bash# Inventory what needs to migrate
ls -R src/pages/
Phase 1: New Layout Foundation (2-3 hours)
Goal: Working layout with proper navigation
1. Install/verify Flowbite:
bashnpm list flowbite
# If not installed: npm install flowbite
2. Create new base layout using Flowbite:
astro---
// src/layouts/FlowbiteBase.astro
import { ViewTransitions } from 'astro:transitions';
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Astro.props.title}</title>
  <ViewTransitions />
</head>
<body>
  <!-- Flowbite Navbar -->
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <!-- Use Flowbite navbar component -->
  </nav>
  
  <main>
    <slot />
  </main>
  
  <!-- Flowbite Footer -->
  <footer class="bg-gray-50 dark:bg-gray-800">
    <!-- Use Flowbite footer component -->
  </footer>
  
  <script>
    import 'flowbite';
  </script>
</body>
</html>
```

**3. Copy Flowbite navbar directly from docs:**

Go to: https://flowbite.com/docs/components/navbar/
- Pick the navbar with mobile hamburger menu
- Copy the exact HTML
- Paste into your layout
- Customize links to match your nav structure

**This solves your mobile menu immediately.**

### **Phase 2: Migrate Content (1-2 hours)**

**Content stays mostly the same:**
```
Your current structure:
src/content/
├── config.ts          # Keep as-is
├── essays/            # Keep as-is
└── notes/             # Keep as-is

src/pages/
├── index.astro        # Rebuild with Flowbite components
├── portfolio/         # Keep, update layout wrapper
└── writing/           # Keep, update layout wrapper
Strategy:

Keep all markdown content
Keep Content Collections config
Rebuild page layouts using Flowbite components
Swap layout reference: Layout.astro → FlowbiteBase.astro

Phase 3: Portfolio Pages (2-4 hours)
Use Flowbite card components:
From: https://flowbite.com/docs/components/card/
astro---
// src/pages/portfolio/index.astro
import FlowbiteBase from '@/layouts/FlowbiteBase.astro';
import { getCollection } from 'astro:content';

const projects = await getCollection('portfolio');
---

<FlowbiteBase title="Portfolio">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Portfolio
      </h1>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Learning solutions that make a difference
      </p>
    </div>
    
    <div class="grid gap-8 lg:grid-cols-2">
      {projects.map((project) => (
        <!-- Flowbite card component here -->
        <a href={`/portfolio/${project.slug}`} 
           class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
               src={project.data.image} 
               alt={project.data.title}>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.data.title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.data.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  </div>
</FlowbiteBase>
Copy-paste from Flowbite, adapt content.
Phase 4: Apply Your Theme (1-2 hours)
After Flowbite structure works, add your aesthetic:
1. Dark theme by default:
html<html lang="en" class="dark">
2. Your color palette:
Update tailwind.config.cjs to use your colors:
jstheme: {
  extend: {
    colors: {
      primary: {
        50: '#c1adeb',
        // ... your full scale from color-swatch.json
      }
    }
  }
}
3. Add text-shadow utilities (from alfadev extraction)
4. Increase spacing (py-8 → py-16)
5. Typography scale (larger headings)

Migration Checklist
Content to Preserve:

 Content Collections config (src/content/config.ts)
 All markdown content (src/content/)
 Your color palette (color-swatch.json)
 Portfolio project data
 Writing feature structure

Components to Replace:

 ❌ Current Header/Navigation
 ❌ Custom mobile menu
 ❌ Current footer
 ❌ Custom card components
 ✅ Use Flowbite navbar
 ✅ Use Flowbite footer
 ✅ Use Flowbite cards
 ✅ Use Flowbite buttons

Features to Maintain:

 Content Collections for writing
 Portfolio project showcase
 About page
 Contact information
 RSS feed (when implemented)


Time Estimate
Realistic timeline:
PhaseTimeWhat You Get0. Prep30 minBranch, inventory1. Foundation2-3 hrsWorking nav, layout2. Content migration1-2 hrsPages rendering3. Portfolio polish2-4 hrsProduction-ready portfolio4. Theme application1-2 hrsYour aesthetic appliedTotal7-12 hrsReliable, production site
Could be done in a focused weekend.

What You Keep vs Replace
Keep (Your Work):
✅ Content Collections architecture
✅ All written content
✅ Portfolio project structure
✅ Color palette and design decisions
✅ Understanding of what you need
Replace (Buggy Custom Code):
❌ Custom navigation
❌ Custom responsive behavior
❌ Custom components with edge cases
❌ Debug burden
Gain:
✨ Mobile-first components
✨ Accessibility built-in
✨ Battle-tested code
✨ Time to focus on content
✨ Maintenance-free updates