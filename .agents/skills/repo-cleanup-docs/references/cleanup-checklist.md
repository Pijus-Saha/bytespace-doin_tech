# Repository Cleanup Checklist & Deletion Rules

Guidelines and safety rules for identifying what files can be safely deleted versus files that must always be retained in this repository.

---

## 🟢 Safe to Delete (Unused & Redundant)

| File Category | Examples in this Codebase | Why Safe to Delete |
|---|---|---|
| **Explicit Duplicates** | `3d-white-torus-duplicate.png` | Redundant copy of `3d-white-torus.png`. |
| **Unused Hero Composites** | `hero-center-illustration-transparent.png`, `hero-center-illustration.png`, `student-female-tablet.png` | Early composite prototypes superseded by modular student + arch layers. |
| **Legacy Raster Widgets** | `badge-level-beginner.png`, `badge-rating-stars.png`, `tag-category-uiux.png`, `widget-happy-students.png`, `widget-learning-progress.png` | Replaced by pure responsive Tailwind CSS components. |
| **Alternate / Unreferenced Avatars** | `avatar-stack-users-2.png` | Single avatar stack `avatar-stack-users.png` is used across all course cards. |
| **Build Artifacts & Temp Files** | `tsconfig.tsbuildinfo`, `*.log`, `.DS_Store`, `Thumbs.db` | Local cache and build state ignored by Git. |
| **Leftover Test & Crop Files** | `test_*.png`, `hero_crop_*.png`, `scratch_*` | Temporary debugging assets created during visual QA. |

---

## 🔴 Never Delete (Protected Files)

| File Category | Examples in this Codebase | Why Protected |
|---|---|---|
| **Specification & Mockups** | `public/assets/designs/*.png` | Required for visual verification against assessment requirements. |
| **Active Course Thumbnails** | `public/assets/courses/course-*.png` | Rendered on both Home (`FeaturedCoursesSection`) and Search (`SearchPageContent`). |
| **Active 3D Decorations** | `3d-lime-zigzag.png`, `3d-white-torus.png`, `bg-arch-lime.png`, etc. | Core 3D visual anchors across Hero and CTA banners. |
| **Brand Assets** | `logo-bytespace-header.png`, `logo-mark-bytespace.svg`, social icons | Header, footer, layout metadata, and favicon. |
| **Partner Logos** | `partner-logoipsum-1.png` to `partner-logoipsum-5.png` | Rendered in `PartnersSection`. |
| **Active Student Cutouts & Models** | `student-female-cutout.png`, `student-male-cutout.png`, `student-male-tablet.png` | Rendered in `FeaturesSection` and `HeroSection` on Home Page. |
| **Creator Profile & Reviewer Avatars** | `creator-purepearl-profile.png`, `creator-purepearl.png`, `reviewer-*.png` | Rendered in `CreatorProfileView` and `CourseDetailsView`. |
| **Testimonial Avatars** | `avatar-male-senior.png`, `avatar-female-yellow-bg.png`, `avatar-male-glasses.png` | Rendered in `TestimonialsSection`. |
| **Core Source Code** | `src/**/*`, `package.json`, configuration files | Essential application logic and routes. |

---

## 🛡️ Pre-Deletion Validation Protocol

1. Perform a text search across `src/` and `public/` for the filename (basename and relative path).
2. **Strict In-Use Invariant**: If a file is referenced anywhere in `src/` or configuration files, it is strictly PROTECTED and must NEVER be deleted.
3. If 0 occurrences found and file is not a design spec, brand asset, or protected cutout model, flag for removal.
4. Execute `npm run cleanup:dry` first to verify candidate files.
5. Execute `npm run cleanup` (with `--fix`) only after manual review.
6. Execute `npm run lint` and `npm run build`.
7. If build succeeds without errors, proceed to document changes in `README.md`.
