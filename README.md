# ByteSpace - Online Learning & Course Platform

A modern, high-performance web platform for discovering, exploring, and enrolling in digital courses. Built with **Next.js 16 (App Router & Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Overview

ByteSpace provides a clean, engaging learning experience inspired by modern 3D design trends (glassmorphic badges, vibrant lime accents `#d4fb20`, electric blue branding `#003be2`, and modular grid aesthetics).

### Key Highlights
- **Landing Page (`/`)**:
  - **Hero Section**: Dynamic typography, 3D interactive decorations (torus rings, ribbons, pyramids), CTA buttons, and social proof counters.
  - **Partner Showcase**: Integrated partner badges and brand sponsors.
  - **Featured Courses**: Filterable course cards with frosted glass lesson tags, ratings, author details, difficulty tags, and lifetime pricing.
  - **Platform Features**: Interactive feature breakdown highlighting self-paced learning, high-definition videos, and progress tracking.
  - **Learning Paths & Testimonials**: Curated roadmaps for career development.
  - **Footer & Navigation**: Responsive sticky navigation with mobile drawer and comprehensive directory footer.
- **Registration Page (`/register`)**:
  - Pixel-perfect implementation matching Figma specifications ([mockup-register-page.png](public/assets/designs/mockup-register-page.png)).
  - 120px modular grid background with electric blue brand styling.
  - **3D Course Cluster**: Composed entirely of native interactive UI elements and layered 3D assets (Course 2 *"Build Digital Asset"*, Course 3 *"the Power of Big Data"*, Happy Students avatar rating card, 3D lime torus, pyramid, and squiggle ribbon).
  - Validation: Minimum 8-character password constraint with real-time feedback.
  - Display Fit: Responsive viewport auto-scaling to fit comfortably on any laptop or desktop screen without vertical scrolling.
- **Login Page (`/login`)**:
  - Companion authentication route matching Figma design ([mockup-login-page.png](public/assets/designs/mockup-login-page.png)).
  - Native 72×72px squircle social buttons for Google and Facebook login.
  - Quick sign-in with email and minimum 8-character password validation.
  - Responsive viewport scaling to maintain exact layout proportions across all devices.

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
│       ├── decorations/      # 3D assets (torus rings, ribbons, pyramids)
│       ├── designs/          # Design mockups and reference specifications
│       └── widgets/          # Badges and widget graphics
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with fonts and metadata
│   │   ├── page.tsx          # Homepage combining all landing sections
│   │   ├── login/
│   │   │   └── page.tsx      # Login page with social login & course cluster
│   │   └── register/
│   │       └── page.tsx      # Sign up page with validation & course cluster
│   └── components/
│       ├── FeaturedCoursesSection.tsx  # Interactive course catalog
│       ├── FeaturesSection.tsx         # Platform features & benefits
│       ├── Footer.tsx                  # Global website footer
│       ├── HeroSection.tsx             # Hero banner with 3D elements & CTAs
│       ├── LearningPathsSection.tsx    # Guided curriculum tracks
│       ├── Navbar.tsx                  # Header navigation & action buttons
│       ├── PartnersSection.tsx         # Brand partners and sponsors
│       └── RegisterCourseCluster.tsx   # Reusable 3D course card stack
├── package.json
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or higher (v20+ recommended)
- **Package Manager**: npm, pnpm, yarn, or bun

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
| `npm run dev` | Runs the development server at `http://localhost:3000` with Turbopack |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🎨 Design System

- **Primary Electric Blue**: `#003be2` / `#0047ff`
- **Accent Neon Lime**: `#d4fb20` / `#cbfc01`
- **Neutral Dark**: `#111827` / `#1a1d1f`
- **Neutral Light**: `#f4f4f5` / `#ffffff`
- **Grid Pattern**: 120px × 120px modular layout grid
- **Typography**: Inter / Outfit / Sans-serif variable font hierarchy
