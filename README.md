# ByteSpace - Online Learning & Course Platform

A modern, responsive, high-performance web platform for discovering, exploring, and enrolling in digital courses. Built with **Next.js 16 (App Router & Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Overview

ByteSpace delivers a modern, engaging learning experience inspired by contemporary 3D design trends (glassmorphic badges, vibrant lime accents `#d4fb20`, electric blue branding `#003be2`, and a modular 120px grid layout).

### Key Highlights

- **Landing Page (`/`)**:
  - **Hero Section**: Dynamic typography, 3D interactive floating decorations (torus rings, ribbons, pyramids, cones), live search input, CTA actions, and social proof badges.
  - **Partner Showcase**: Integrated partner badges and brand sponsors.
  - **Featured Courses**: Interactive course catalog with frosted glass lesson tags, ratings, instructor details, difficulty labels, and lifetime pricing.
  - **Learning Paths**: Guided career roadmaps spanning Development, Design, Data, and Business.
  - **Platform Features**: Interactive feature breakdown highlighting self-paced learning, high-definition videos, and progress tracking.
  - **Creator CTA Banner (`#creators`)**: Dedicated full-bleed conversion section matching [`section-cta.png`](public/assets/designs/section-cta.png) with 7 custom 3D floating shapes anchored across desktop and mobile viewports.
  - **Testimonials Section**: Community feedback cards with student and creator ratings.
  - **Header & Navigation**: Sticky responsive navbar with mobile drawer and quick action links.
  - **Footer**: Multi-column platform directory, newsletter signup, and social links.

- **Authentication Suite**:
  - **Registration Page (`/register`)**:
    - Pixel-perfect implementation matching Figma specifications ([`mockup-register-page.png`](public/assets/designs/mockup-register-page.png)).
    - 120px modular grid background with electric blue brand styling.
    - **3D Course Cluster**: Composed of native interactive UI elements and layered 3D assets (*"Build Digital Asset"*, *"The Power of Big Data"*, Happy Students avatar rating card, 3D lime torus, pyramid, and squiggle ribbon).
    - Client-side form validation with real-time feedback (minimum 8-character password constraint).
    - Social sign-up with Google and Facebook buttons.
    - Responsive viewport auto-scaling for desktop and mobile displays.
  - **Login Page (`/login`)**:
    - Companion authentication route matching Figma design ([`mockup-login-page.png`](public/assets/designs/mockup-login-page.png)).
    - 72×72px squircle social buttons for Google and Facebook login.
    - Quick sign-in with email and password validation.
    - Persistent layout alignment and responsive scaling.

- **Error Page (`/not-found`, `/404`, `/error-404`)**:
  - Custom 404 page matching design specifications ([`mock-404-not-found.png`](public/assets/designs/mock-404-not-found.png)).
  - Massive gradient `404` background display with modular grid pattern.
  - Clear recovery navigation directing users back to the homepage.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
bytespace-doin_tech/
├── public/
│   └── assets/
│       ├── avatars/          # User avatar stacks and student testimonials
│       ├── brand/            # ByteSpace logos and social provider icons
│       ├── courses/          # Course thumbnails and covers
│       ├── decorations/      # 3D assets (torus rings, ribbons, pyramids, cones, cylinders)
│       ├── designs/          # Figma design mockups and reference specifications
│       └── widgets/          # Badges and widget graphics
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata and global font configuration
│   │   ├── globals.css       # Tailwind v4 theme, custom grid utilities, and animations
│   │   ├── page.tsx          # Homepage combining all landing sections
│   │   ├── not-found.tsx     # Custom 404 error page matching Figma design
│   │   ├── 404/
│   │   │   └── page.tsx      # Route alias to 404 handler
│   │   ├── error-404/
│   │   │   └── page.tsx      # Route alias to 404 handler
│   │   ├── cart/
│   │   │   └── page.tsx      # Cart route handler
│   │   ├── login/
│   │   │   └── page.tsx      # Login page with social login & course cluster
│   │   └── register/
│   │       └── page.tsx      # Registration page with validation & course cluster
│   └── components/
│       ├── Navbar.tsx                  # Header navigation & responsive drawer
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

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (`v20+` recommended)
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pijus-Saha/bytespace-doin_tech.git
   cd bytespace-doin_tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server with Turbopack:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` with Turbopack |
| `npm run build` | Compiles the production bundle with type checking |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🎨 Design System

- **Primary Electric Blue**: `#003be2` / `#0047ff`
- **Accent Neon Lime**: `#d4fb20` / `#cbfc01`
- **Neutral Dark**: `#111827` / `#1a1d1f`
- **Neutral Light**: `#f4f4f5` / `#ffffff`
- **Modular Grid**: 120px × 120px subtle pattern overlay
- **Typography**: Inter / Outfit / Sans-serif variable font hierarchy
- **Responsiveness**: Designed for mobile (375px+), tablet (768px), desktop (1440px), and ultra-wide screens (1920px+)
