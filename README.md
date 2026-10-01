# ByteSpace New — Frontend Technical Assessment

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat&logo=vercel)](https://vercel.com/)

> **Technical Assessment Submission for Doin Tech Limited**  
> **Position:** Jr. Software Engineer (Frontend)  
> **Candidate:** Pijus Saha  
> **Figma Design Reference:** [ByteSpace New — Figma Community / Design File](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)  
> **GitHub Repository:** [https://github.com/Pijus-Saha/bytespace-doin_tech](https://github.com/Pijus-Saha/bytespace-doin_tech)  
> **Live Deployment:** [https://bytespace-doin-tech.vercel.app](https://bytespace-doin-tech.vercel.app) *(or your deployed Vercel URL)*

---

## 📌 Assessment Overview & Deliverables

This repository contains the complete, production-ready implementation of the **"ByteSpace New"** web application built according to the official specifications provided by **Doin Tech Limited**.

### 1. Landing Page (`/`) — [Required: Completed ✅]
Complete, pixel-accurate implementation of the entire landing page matching the Figma design:
- **Header & Navigation (`Navbar.tsx`)**: Fixed blur-backdrop navbar with brand logo, smooth navigation anchors (`/#courses`, `/#creators`), quick auth buttons, mobile responsive drawer, and cart icon.
- **Hero Section (`HeroSection.tsx`)**: High-impact hero with 3D decorations (zigzag, ribbon, torus, cylinder, cone, spiral), interactive search bar, centered lime arch, cutout student graphic, and floating interactive badges (*UI/UX Design*, *Learning Progress 55%*, *Happy Students 4.5★*).
- **Brand Partners (`PartnersSection.tsx`)**: Responsive sponsor logo showcase.
- **Featured Courses (`FeaturedCoursesSection.tsx`)**: Category pill filters, interactive course cards with frosted glass lesson badges, star ratings, instructor tags, difficulty badges, and lifetime price tags.
- **Learning Paths (`LearningPathsSection.tsx`)**: Guided category tracks spanning Design, Development, IT & Software, Business, Marketing, and Photography.
- **Platform Features (`FeaturesSection.tsx`)**: Double-block feature showcase for learners and creators with verified metric counters (12K students, 70+ courses, 16 creators), interactive visual composites, and key benefit checklists.
- **Creator CTA Banner (`CtaBannerSection.tsx`)**: Full-bleed electric blue conversion banner with 7 custom 3D floating decorations anchored across desktop and mobile screens matching `section-cta.png` pixel-for-pixel.
- **Testimonials Section (`TestimonialsSection.tsx`)**: Community feedback cards from active students and instructors with avatar badges and ratings.
- **Global Footer (`Footer.tsx`)**: Multi-column platform directory, interactive newsletter subscription with validation, legal links, and social copyright bar.

### 2. Login & Sign Up Pages — [Bonus / Extra Credit: Completed ✅]
Both bonus pages were implemented at **true 1:1 design scale** matching Figma mockups:
- **Sign Up Page (`/register`)**:
  - Figma specification: [`mockup-register-page.png`](public/assets/designs/mockup-register-page.png).
  - 120px modular grid background with electric blue brand palette.
  - **Interactive 3D Course Cluster (`RegisterCourseCluster.tsx`)**: Real UI composite featuring layered course cards (*"Build Digital Asset"*, *"The Power of Big Data"*), floating *Happy Students* avatar widget, 3D lime torus, pyramid, and squiggle ribbon.
  - Client-side form validation (full name, email, minimum 8-character password constraint).
  - One-click social auth buttons (Google & Facebook).
  - Full natural responsive layout without artificial scale reduction.
- **Sign In Page (`/login`)**:
  - Figma specification: [`mockup-login-page.png`](public/assets/designs/mockup-login-page.png).
  - 72×72px squircle social buttons for Google and Facebook sign-in.
  - Email and password validation with instant user feedback.
  - Symmetrical 1:1 scale matching the registration layout.

### 3. Error 404 Page & Routing — [Bonus: Completed ✅]
- **Custom 404 Error Page (`/error-404`, `/404`, `/_not-found`)**:
  - Figma specification: [`mock-404-not-found.png`](public/assets/designs/mock-404-not-found.png).
  - Massive gradient `404` background display with modular grid pattern and prominent *"Back to Home"* navigation.
- **Comprehensive 404 Linking**: Every unavailable page and placeholder route across the platform (shopping cart icon, footer category directories, legal/policy pages, company links, and extra catalog items) is linked directly to `/error-404`.
- Visiting `/cart` automatically redirects (`307`) to `/error-404`.

### 4. Search & Courses Catalog Page (`/search`, `/courses`) — [Completed ✅]
- **Figma specification**: [`mock-search-page.png`](public/assets/designs/mock-search-page.png).
- **Hero & Search Header**: Full-bleed electric blue banner with 120px modular grid, *"Find Your Next Course"* header, integrated search input with live debounced filtering, and lime *"Courses ⌵"* dropdown selector.
- **Interactive Controls & Filter Bar**:
  - Funnel filter button with popover controls (skill level, price range, reset/apply).
  - Skill level selector dropdown (All Levels, Beginner, Intermediate, Advanced).
  - Category selector dropdown (All Categories, Design, Development, Business, Marketing, etc.).
  - Left-aligned 3-line sort dropdown (Most relevant, Highest rated, Price low-to-high, Price high-to-low, Newest).
- **Category Tag Pills**:
  - 9 exact category tags (*Featured*, *Music*, *Drawing & Painting*, *Marketing*, *Animation*, *Social Media*, *UI/UX Design*, *Creative Marketing*, *Cooking*).
  - Active lime pill styling with instant category filtering.
- **18-Course Card Grid (6 rows × 3 columns)**:
  - Exact design match with frosted glass overlay badges (*17 Lessons*, *2 hours 16 mins*, *59 Comments*).
  - Title, star rating, verified creator attribution (*by purepearl studio*).
  - Skill level indicator with icon and user avatar cluster (*26+*).
  - Clean lifetime pricing display (*$25 /lifetime*).
- **Pagination & 404 Routing**:
  - Active page 1 with smooth scroll-to-top.
  - Numbered pages 2–5 and next arrow (`>`) link directly to `/error-404`.
  - Direct URL access to `/search?page=2-5` renders the custom 404 page directly.

### 5. Course Details, Lessons & Reviews Suite — [Completed ✅]
Complete, 1:1 pixel-accurate implementation of the three course views from Figma:
- **Course Details / About (`/courses/details`, `/courses/build-digital-asset`)**:
  - Figma specification: [`mock-course-details.png`](public/assets/designs/mock-course-details.png).
  - Electric blue grid hero with course title, subtitle, author link, skill level badge (*Intermediate*), review score (*4.8 (172 reviews)*), enrolled count (*199 Students*), and interactive lime *Share* button with copy toast.
  - High-res video preview player with frosted glass play button and modal video player.
  - Floating sticky enrollment card: lesson breakdown (`112 Lessons (24 hours)`), top 3 video topics with timestamps, `$25/lifetime` price, lime *Enroll Now* button, course inclusions with blue icons, and creator profile card (*PurePearl Studio*).
  - *About* tab content: 3 in-depth course description paragraphs, 4 *Sneak Peak* preview cards, and 8 *Key Points* with custom blue circle checkmarks.
- **Course Lessons (`/courses/lessons`, `/courses/build-digital-asset/lessons`)**:
  - Figma specification: [`mock-course-lessons.png`](public/assets/designs/mock-course-lessons.png).
  - *Explore the Modules* introduction and *Lesson List* featuring 6 detailed curriculum modules with lime video camera badges.
  - *Lesson Content* overview and *Lesson Progress Tracking* card with 55% progress indicator and lime progress bar.
- **Course Reviews (`/courses/reviews`, `/courses/build-digital-asset/reviews`)**:
  - Figma specification: [`mock-course-reviews.png`](public/assets/designs/mock-course-reviews.png).
  - *What Learners Are Saying* header and 4.7 lime rating badge with 5-star distribution bars (720, 120, 21, 12, 16 counts).
  - Interactive star rating filters (`All rating`, `★ 5`, `★ 4`, `★ 3`, `★ 2`, `★ 1`).
  - 4 individual review cards with circular avatars, reviewer roles, dates, dark 5-star ratings, and complete testimonial text.
- **Dynamic Routing & Seamless Tab Switching**:
  - The unified [CourseDetailsView.tsx](src/components/CourseDetailsView.tsx) component supports instantaneous client-side tab switching with synchronized URL states, while dedicated page routes provide direct server-side rendering for each tab.

### 6. Repository Cleanup & Agent Skill — [Completed ✅]
- **Agent Skill**: [`.agents/skills/repo-cleanup-docs/SKILL.md`](.agents/skills/repo-cleanup-docs/SKILL.md).
- **Automated CLI Runner**: [`.agents/skills/repo-cleanup-docs/scripts/cleanup.mjs`](.agents/skills/repo-cleanup-docs/scripts/cleanup.mjs) (`--dry-run` and `--fix`).
- **Safety Protocol**: [`.agents/skills/repo-cleanup-docs/references/cleanup-checklist.md`](.agents/skills/repo-cleanup-docs/references/cleanup-checklist.md).
- **Audit & Cleanup Results**:
  - Automatically audited public assets against source code references.
  - Safely eliminated unreferenced, redundant, and duplicate assets (superseded prototype illustrations, unreferenced raster widgets, temporary crops, and build caches).
  - Reclaimed over **24 MB** across cleanup runs.
  - Zero broken imports: verified with `npm run lint` (0 errors) and `npm run build` (all 14 routes statically compiled).

---

## 🌿 Git Branching Workflow

As instructed in the assessment guidelines, all development followed a clean, professional Git branching strategy:

- `master`: Production-ready branch containing merged, stable code.
- `feature/home-page`: Landing page implementation (Hero, Courses, Features, CTA, Testimonials, Footer).
- `feature/signup-login-pages`: Authentication suite (Register, Login, 3D Course Cluster).
- `feature/error-page`: 404 Not Found error page implementation.
- `feature/minor-ui-fix`: Design fidelity adjustments, responsive scale fixes, and comprehensive 404 link routing.
- `feature/search-page`: Search & Course catalog page, error-404 pagination routing, and repository cleanup skill.
- `feature/course-details-suite`: Course Details, Lessons, and Reviews suite with dynamic routing and verified 1:1 design scale.

All commits are atomic and descriptive, and ready for Pull Request (PR) review.

---

## 🛠️ Tech Stack & Architecture Decisions

| Technology | Purpose |
|---|---|
| **Next.js 16 (App Router)** | Modern React framework with Turbopack for lightning-fast compilation and static generation |
| **React 19** | Latest React primitives for performant component rendering |
| **TypeScript 5** | Strict type safety across all components, interfaces, and routes |
| **Tailwind CSS v4** | Modern utility-first styling with native CSS variables and modular grid utilities |
| **Lucide React** | Lightweight, accessible iconography matching the Figma design |

---

## 📁 Project Structure

```text
bytespace-doin_tech/
├── .agents/
│   └── skills/
│       └── repo-cleanup-docs/
│           ├── SKILL.md                # Agent skill workflow & cleanup runbook
│           ├── scripts/
│           │   └── cleanup.mjs         # Automated cleanup & audit CLI runner
│           └── references/
│               └── cleanup-checklist.md # Safe deletion checklist & protection rules
├── public/
│   └── assets/
│       ├── avatars/          # User avatar stacks and student testimonials
│       ├── brand/            # ByteSpace logos and social provider icons
│       ├── categories/       # Category thumbnail icons
│       ├── course-details/   # Video player thumbnail, sneak peaks, creator and reviewer avatars
│       ├── courses/          # Course thumbnails and cover graphics
│       ├── decorations/      # 3D assets (torus rings, ribbons, pyramids, cones, cylinders)
│       ├── designs/          # Figma design mockups and reference specifications
│       ├── heroes/           # Hero student cutout graphic
│       ├── partners/         # Brand partner logos
│       └── widgets/          # Badges and widget graphics
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata and global font configuration
│   │   ├── globals.css       # Tailwind v4 theme, custom grid utilities, and animations
│   │   ├── page.tsx          # Complete landing page combining all sections
│   │   ├── not-found.tsx     # Custom 404 error page matching Figma design
│   │   ├── 404/
│   │   │   └── page.tsx      # Route alias to 404 handler
│   │   ├── error-404/
│   │   │   └── page.tsx      # Route alias to 404 handler
│   │   ├── cart/
│   │   │   └── page.tsx      # Redirect handler to /error-404
│   │   ├── courses/
│   │   │   ├── page.tsx      # Courses catalog route matching search design
│   │   │   ├── details/
│   │   │   │   └── page.tsx  # Course Details (About) route
│   │   │   ├── lessons/
│   │   │   │   └── page.tsx  # Course Lessons route
│   │   │   ├── reviews/
│   │   │   │   └── page.tsx  # Course Reviews route
│   │   │   └── [id]/
│   │   │       ├── page.tsx          # Dynamic course route with tab query support
│   │   │       ├── lessons/page.tsx  # Dynamic course lessons route
│   │   │       └── reviews/page.tsx  # Dynamic course reviews route
│   │   ├── search/
│   │   │   └── page.tsx      # Interactive search & filter page matching Figma
│   │   ├── login/
│   │   │   └── page.tsx      # Login page with social login & course cluster
│   │   └── register/
│   │       └── page.tsx      # Registration page with validation & course cluster
│   └── components/
│       ├── Navbar.tsx                  # Fixed header navigation & mobile drawer
│       ├── HeroSection.tsx             # Hero banner with 3D elements, search & CTAs
│       ├── CourseDetailsView.tsx       # Unified course details, lessons, and reviews component
│       ├── SearchPageContent.tsx       # Search hero, filter bar, 18-course grid & pagination
│       ├── PartnersSection.tsx         # Brand partners and sponsor badges
│       ├── FeaturedCoursesSection.tsx  # Course catalog with difficulty & rating badges
│       ├── LearningPathsSection.tsx    # Guided curriculum tracks
│       ├── FeaturesSection.tsx         # Platform features, value proposition & stats
│       ├── CtaBannerSection.tsx        # Creator CTA banner with anchored 3D shapes
│       ├── TestimonialsSection.tsx     # Community feedback cards
│       ├── Footer.tsx                  # Global website directory footer
│       └── RegisterCourseCluster.tsx   # Reusable 3D course card stack
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js**: `v18.18.0` or higher (`v20+` recommended)
- **npm**: `v9+` (or `pnpm` / `yarn` / `bun`)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Pijus-Saha/bytespace-doin_tech.git
   cd bytespace-doin_tech
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:  
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` with Turbopack |
| `npm run build` | Compiles the production bundle with TypeScript type-checking |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |
| `npm run cleanup` | Safely removes unused files and cleans build cache via `repo-cleanup-docs` skill |
| `npm run cleanup:dry` | Audits the repository and reports unreferenced files without deleting |

---

## 🚢 Deployment to Vercel

The application is fully optimized for Vercel deployment:
1. Connect the GitHub repository `Pijus-Saha/bytespace-doin_tech` to [Vercel](https://vercel.com).
2. Framework preset: **Next.js**.
3. Build command: `npm run build` (or `next build`).
4. Output directory: `.next`.
5. Deploy — zero configuration required.

---

## 📝 Notes for the Reviewer

1. **Pixel-Perfect Fidelity**: All typography sizes, letter-spacings, card dimensions, shadows, and color codes (`#0043ff`, `#003be2`, `#d4fb20`, `#111827`, `#f4f4f5`) were extracted directly from the Figma artboards.
2. **True 1:1 Scale on Auth & Course Pages**: The auth and course pages render at native 1:1 scale with responsive behavior across mobile, tablet, and desktop viewports.
3. **Comprehensive 404 Routing**: Any unbuilt page, placeholder directory link, or cart action consistently redirects to the custom 404 page (`/error-404`).
4. **Code Quality**: Built with 100% modular, reusable React components, strong TypeScript typing, and zero lint warnings.

---

**Submitted by:** [Pijus Saha](https://github.com/Pijus-Saha)  
**Position Applied:** Jr. Software Engineer (Frontend) at **Doin Tech Limited**
