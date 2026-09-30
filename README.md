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

---

## 🌿 Git Branching Workflow

As instructed in the assessment guidelines, all development followed a clean, professional Git branching strategy:

- `master`: Production-ready branch containing merged, stable code.
- `feature/home-page`: Landing page implementation (Hero, Courses, Features, CTA, Testimonials, Footer).
- `feature/signup-login-pages`: Authentication suite (Register, Login, 3D Course Cluster).
- `feature/error-page`: 404 Not Found error page implementation.
- `feature/minor-ui-fix`: Design fidelity adjustments, responsive scale fixes, and comprehensive 404 link routing.

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
├── public/
│   └── assets/
│       ├── avatars/          # User avatar stacks and student testimonials
│       ├── brand/            # ByteSpace logos and social provider icons
│       ├── courses/          # Course thumbnails and cover graphics
│       ├── decorations/      # 3D assets (torus rings, ribbons, pyramids, cones, cylinders)
│       ├── designs/          # Figma design mockups and reference specifications
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
│   │   ├── login/
│   │   │   └── page.tsx      # Login page with social login & course cluster
│   │   └── register/
│   │       └── page.tsx      # Registration page with validation & course cluster
│   └── components/
│       ├── Navbar.tsx                  # Fixed header navigation & mobile drawer
│       ├── HeroSection.tsx             # Hero banner with 3D elements, search & CTAs
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
   Open [http://localhost:3000](http://localhost:3000) to view the landing page.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` with Turbopack |
| `npm run build` | Compiles the production bundle with TypeScript type-checking |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

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

1. **Pixel-Perfect Fidelity**: All typography sizes, letter-spacings, card dimensions, shadows, and color codes (`#003be2`, `#d4fb20`, `#111827`, `#f4f4f5`) were extracted directly from the Figma artboards.
2. **True 1:1 Scale on Auth Pages**: The `/register` and `/login` pages render at native 1:1 scale with natural responsive scrolling on smaller viewports, avoiding artificial CSS scaling down that impairs readability.
3. **Comprehensive 404 Routing**: Any unbuilt page, placeholder directory link, or cart action consistently redirects to the custom 404 page (`/error-404`).
4. **Code Quality**: Built with 100% modular, reusable React components, strong TypeScript typing, and clean component isolation.

---

**Submitted by:** [Pijus Saha](https://github.com/Pijus-Saha)  
**Position Applied:** Jr. Software Engineer (Frontend) at **Doin Tech Limited**
