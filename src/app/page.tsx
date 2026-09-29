import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import LearningPathsSection from "@/components/LearningPathsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Section with Top Navigation & 3D Decorations */}
      <HeroSection />

      {/* 2. Partners / Sponsors Bar */}
      <PartnersSection />

      {/* 3. Discover Your Passion, Build Your Skills (Featured Courses) */}
      <FeaturedCoursesSection />

      {/* 4. Explore Diverse Learning Paths at Bytespace (Categories) */}
      <LearningPathsSection />

      {/* 5. Features & Value Proposition (Professional Growth & Course Management) */}
      <FeaturesSection />

      {/* 6. Unlock Your Potential as a Creator (CTA Banner) */}
      <CtaBannerSection />

      {/* 7. Discover What Our Community Is Saying (Testimonials) */}
      <TestimonialsSection />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
