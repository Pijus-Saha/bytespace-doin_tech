"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Share2,
  BarChart2,
  Star,
  Users,
  Play,
  FileText,
  Video,
  Award,
  Headphones,
  CheckCircle2,
  X,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type TabType = "about" | "lessons" | "reviews";

interface CourseDetailsViewProps {
  initialTab?: TabType;
  courseId?: string;
  courseTitle?: string;
}

const LESSON_MODULES = [
  {
    moduleNumber: "Module 1",
    title: "Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    moduleNumber: "Module 2",
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    moduleNumber: "Module 3",
    title: "Advanced Techniques in Digital Creation",
    description:
      "Explore advanced vector drafting, scalable component design, and modular layout systems. Learn how to streamline your digital asset workflow from start to finish.",
  },
  {
    moduleNumber: "Module 4",
    title: "User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    moduleNumber: "Module 5",
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    moduleNumber: "Module 6",
    title: "Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    moduleNumber: "Module 7",
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Eleanor Vance",
    role: "Product Designer",
    time: "2 months ago",
    avatar: "/assets/course-details/reviewer-1.png",
    rating: 5,
    comment:
      "\"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\"",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "5 months ago",
    avatar: "/assets/course-details/reviewer-2.png",
    rating: 4,
    comment:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "Visual Designer",
    time: "8 months ago",
    avatar: "/assets/course-details/reviewer-3.png",
    rating: 5,
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "Design Lead",
    time: "a year ago",
    avatar: "/assets/course-details/reviewer-4.png",
    rating: 4,
    comment:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
  {
    id: 5,
    name: "Devon Lane",
    role: "Junior Designer",
    time: "a year ago",
    avatar: "/assets/avatars/avatar-male-senior.png",
    rating: 3,
    comment:
      "Solid foundational content with practical step-by-step guidance. Would have appreciated extra time spent on interactive animation, but definitely a high-value course overall.",
  },
];

const SNEAK_PEAKS = [
  { src: "/assets/course-details/sneak-peak-1.png", alt: "Wireframe sketching process" },
  { src: "/assets/course-details/sneak-peak-2.png", alt: "MacBook design UI workspace" },
  { src: "/assets/course-details/sneak-peak-3.png", alt: "iMac desktop dashboard layout" },
  { src: "/assets/course-details/sneak-peak-4.png", alt: "Mobile app interfaces showcase" },
];

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const RATING_DISTRIBUTION = [
  { stars: 5, percentage: 80, count: 138 },
  { stars: 4, percentage: 15, count: 26 },
  { stars: 3, percentage: 3, count: 5 },
  { stars: 2, percentage: 1, count: 2 },
  { stars: 1, percentage: 1, count: 1 },
];

export default function CourseDetailsView({
  initialTab = "about",
  courseId,
  courseTitle = "Build Digital Asset: A Comprehensive Guide",
}: CourseDetailsViewProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | "all">("all");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (courseId && courseId !== "details" && courseId !== "build-digital-asset") {
      router.push(`/courses/${courseId}?tab=${tab}`, { scroll: false });
    } else {
      if (tab === "about") {
        router.push("/courses/details", { scroll: false });
      } else if (tab === "lessons") {
        router.push("/courses/lessons", { scroll: false });
      } else if (tab === "reviews") {
        router.push("/courses/reviews", { scroll: false });
      }
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const filteredReviews =
    selectedRatingFilter === "all"
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.rating === selectedRatingFilter);

  const renderEnrollmentCard = () => (
    <div className="bg-white rounded-[28px] sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-xl border border-neutral-100/90 text-neutral-900">
      {/* Header: Lessons count */}
      <h2 className="font-heading font-bold text-lg sm:text-xl text-neutral-900 tracking-tight">
        112 Lessons (24 hours)
      </h2>

      {/* Lesson Snippets */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-800">01</span>
            <span className="text-neutral-700 font-normal truncate max-w-[190px]">
              Introduction to Digital Assets
            </span>
          </div>
          <span className="text-[#0043ff] font-medium shrink-0">12 mins</span>
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-800">02</span>
            <span className="text-neutral-700 font-normal truncate max-w-[190px]">
              Design Principles for Impacts
            </span>
          </div>
          <span className="text-[#0043ff] font-medium shrink-0">21 mins</span>
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-800">03</span>
            <span className="text-neutral-700 font-normal truncate max-w-[190px]">
              Advanced Techniques in Digital Creation
            </span>
          </div>
          <span className="text-[#0043ff] font-medium shrink-0">16 mins</span>
        </div>
      </div>

      <p className="text-xs text-neutral-400 font-medium mt-2">
        99 more videos
      </p>

      {/* Callout message */}
      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mt-5">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-1.5 mt-4">
        <span className="text-3xl sm:text-4xl font-extrabold text-[#0043ff] font-heading">
          $25
        </span>
        <span className="text-neutral-500 text-xs sm:text-sm font-medium">
          /lifetime
        </span>
      </div>

      {/* Enroll Button */}
      <button
        type="button"
        onClick={() => setEnrolled(true)}
        className="w-full mt-4 bg-[#d4fb20] hover:bg-[#cbfc01] text-neutral-950 font-bold text-sm sm:text-base py-3.5 px-6 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99] text-center"
      >
        {enrolled ? "Enrolled Successfully!" : "Enroll Now"}
      </button>

      {/* Features included */}
      <div className="mt-7">
        <h3 className="font-heading font-bold text-sm sm:text-base text-neutral-900 mb-3.5">
          This course include
        </h3>
        <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
          <li className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-[#0043ff]" />
            <span>Learning Resources</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Video className="w-4 h-4 text-[#0043ff]" />
            <span>Quality Lesson Videos</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-[#0043ff]" />
            <span>Certificate of Completion</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Headphones className="w-4 h-4 text-[#0043ff]" />
            <span>Private Consultation</span>
          </li>
        </ul>
      </div>

      {/* Creator Profile Section */}
      <div className="mt-6 pt-6 border-t border-neutral-200/80">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image
              src="/assets/course-details/creator-purepearl.png"
              alt="PurePearl Studio"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm sm:text-base text-neutral-900 leading-tight">
              PurePearl Studio
            </h4>
            <p className="text-neutral-500 text-xs mt-0.5">Professional Creator</p>
          </div>
        </div>

        <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mt-4">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="mt-4">
          <Link
            href="/creators/purepearl-studio"
            className="inline-block border border-neutral-300 hover:border-neutral-400 bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-xs sm:text-sm px-5 py-2 rounded-full transition-colors"
          >
            See Full Profile
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#d4fb20] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Content Wrapper with Blue Background Banner */}
      <div className="relative w-full">
        {/* Blue Grid Background for the Hero + Video Section */}
        <div className="absolute top-0 left-0 right-0 h-[560px] sm:h-[680px] lg:h-[825px] bg-[#0043ff] bg-grid-pattern z-0" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 xl:px-[120px] pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28">
          
          {/* Header Row: Title, Subtitle, Author on Left & Share Button on Right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 sm:gap-6 mb-7 sm:mb-8 text-white">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-[44px] lg:text-[46px] leading-[1.18] tracking-tight text-white mb-2.5 sm:mb-3">
                {courseTitle}
              </h1>
              <p className="text-white/90 text-sm sm:text-lg md:text-[19px] font-normal leading-relaxed mb-3 sm:mb-4">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-white/85 text-xs sm:text-base font-normal">
                by{" "}
                <Link
                  href="/creators/purepearl-studio"
                  className="text-[#d4fb20] font-semibold hover:underline transition-colors"
                >
                  purepearl studio
                </Link>
              </p>
            </div>

            {/* Share Button Top Right */}
            <div className="shrink-0 flex items-center">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-[#d4fb20] hover:bg-[#cbfc01] text-neutral-950 font-semibold text-xs sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 stroke-[2.5]" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3.5 mb-8 sm:mb-10">
            {/* Level Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-neutral-900 font-medium text-xs sm:text-sm px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-xs">
              <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0043ff]" />
              <span>Intermediate</span>
            </div>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-neutral-900 font-medium text-xs sm:text-sm px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-xs">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0043ff] text-[#0043ff]" />
              <span>4.8 (172 reviews)</span>
            </div>

            {/* Students Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-neutral-900 font-medium text-xs sm:text-sm px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-xs">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0043ff]" />
              <span>199 Students</span>
            </div>
          </div>

          {/* Unified 2-Column Grid: Left (Video + Tabs + Content) & Right (Sticky Sidebar Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: Video Player, Tabs, Content */}
            <div className="lg:col-span-8">
              
              {/* Video Player Card */}
              <div
                onClick={() => setIsPlayingVideo(true)}
                className="relative w-full aspect-[16/10] bg-[#e7e9e8] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl cursor-pointer group border border-white/20 select-none mb-8 sm:mb-12"
              >
                {/* Video Image */}
                <Image
                  src="/assets/course-details/course-video-player.png"
                  alt="Build Digital Asset Video Lecture Preview"
                  fill
                  priority
                  unoptimized
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl bg-black/35 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-2xl group-hover:scale-110 group-hover:bg-black/50 transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 fill-white text-white ml-0.5 sm:ml-1" />
                  </div>
                </div>
              </div>

              {/* Mobile View: Floating Enrollment Card Directly Below Video */}
              <div className="block lg:hidden mb-10">
                {renderEnrollmentCard()}
              </div>

              {/* Tabs Navigation (On White Background) */}
              <div className="flex overflow-x-auto no-scrollbar items-center gap-2 sm:gap-3 mb-8 sm:mb-10 pb-1">
                <button
                  type="button"
                  onClick={() => handleTabChange("about")}
                  className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeTab === "about"
                      ? "bg-[#d4fb20] text-neutral-950 shadow-xs"
                      : "bg-[#f4f4f5] hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  About
                </button>

                <button
                  type="button"
                  onClick={() => handleTabChange("lessons")}
                  className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeTab === "lessons"
                      ? "bg-[#d4fb20] text-neutral-950 shadow-xs"
                      : "bg-[#f4f4f5] hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  {activeTab === "lessons" ? "Lesson" : "Lessons"}
                </button>

                <button
                  type="button"
                  onClick={() => handleTabChange("reviews")}
                  className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeTab === "reviews"
                      ? "bg-[#d4fb20] text-neutral-950 shadow-xs"
                      : "bg-[#f4f4f5] hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* TAB 1: ABOUT (mock-course-details.png) */}
              {activeTab === "about" && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Description Section */}
                  <div>
                    <h2 className="font-heading font-bold text-2xl sm:text-[26px] text-neutral-900 mb-4">
                      Description
                    </h2>
                    <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation
                        with our comprehensive course, &ldquo;Build Digital Assets: A
                        Comprehensive Guide.&rdquo; This transformative learning experience invites
                        you to delve deep into the intricacies of crafting impactful digital
                        content. From laying the groundwork with foundational concepts to mastering
                        advanced techniques, this guide is meticulously curated to empower you with
                        the skills essential for navigating the dynamic landscape of digital asset
                        creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing
                        yourself in the foundational concepts that form the backbone of digital asset
                        creation. Understand the fundamental elements that constitute compelling
                        digital content and gain proficiency in leveraging these elements to
                        communicate effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of
                        expertise, delving into the nuances of design principles that drive
                        impactful creations. Uncover the secrets behind effective visual
                        communication, exploring color theory, typography, and layout strategies
                        that elevate your digital assets to new heights. Engage in hands-on exercises
                        that reinforce your understanding, allowing you to apply these principles in
                        practical scenarios.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peak Section */}
                  <div className="pt-4">
                    <h3 className="font-heading font-bold text-xl sm:text-[22px] text-neutral-900 mb-4">
                      Sneak Peak
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {SNEAK_PEAKS.map((peak, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow border border-neutral-100 bg-neutral-100"
                        >
                          <Image
                            src={peak.src}
                            alt={peak.alt}
                            fill
                            unoptimized
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points Section */}
                  <div className="pt-4">
                    <h3 className="font-heading font-bold text-xl sm:text-[22px] text-neutral-900 mb-4">
                      Key Points
                    </h3>
                    <ul className="space-y-3.5">
                      {KEY_POINTS.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-neutral-700 text-sm sm:text-base">
                          <CheckCircle2 className="w-5 h-5 text-[#0043ff] shrink-0 fill-[#0043ff] text-white" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 2: LESSONS (mock-course-lessons.png) */}
              {activeTab === "lessons" && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Explore the Modules */}
                  <div>
                    <h2 className="font-heading font-bold text-2xl sm:text-[26px] text-neutral-900 mb-2">
                      Explore the Modules
                    </h2>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                      Immerse yourself in the course content as we break down each module into
                      comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Lesson List */}
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-[22px] text-neutral-900 mb-5">
                      Lesson List
                    </h3>
                    <div className="space-y-5">
                      {LESSON_MODULES.map((mod, idx) => (
                        <div key={idx} className="flex items-start gap-4 sm:gap-5">
                          {/* Lime Video Icon */}
                          <div className="w-12 h-12 rounded-2xl bg-[#d4fb20] flex items-center justify-center shrink-0 shadow-xs">
                            <Video className="w-5 h-5 text-neutral-950" />
                          </div>

                          {/* Module Text Details */}
                          <div>
                            <h4 className="font-heading font-bold text-sm sm:text-base text-neutral-900">
                              {mod.moduleNumber}: {mod.title}
                            </h4>
                            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mt-1">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Content Section */}
                  <div className="pt-2">
                    <h3 className="font-heading font-bold text-xl sm:text-[22px] text-neutral-900 mb-2">
                      Lesson Content
                    </h3>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                      Engage with each lesson through captivating video content, detailed textual
                      explanations, and interactive elements. Download resources, complete
                      assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  {/* Lesson Progress Tracking */}
                  <div className="pt-2">
                    <h3 className="font-heading font-bold text-xl sm:text-[22px] text-neutral-900 mb-2">
                      Lesson Progress Tracking
                    </h3>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-4">
                      Witness your growth as you complete lessons, with an intuitive progress
                      tracking feature guiding you through your learning journey.
                    </p>

                    {/* Progress Card */}
                    <div className="border border-neutral-200/90 rounded-2xl p-6 sm:p-7 max-w-xl bg-white shadow-xs">
                      <p className="text-xs font-semibold text-neutral-500">
                        Learning Progress
                      </p>
                      <h4 className="font-heading font-extrabold text-3xl sm:text-4xl text-neutral-900 my-1">
                        55%
                      </h4>
                      <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden mt-3">
                        <div
                          className="h-full bg-[#d4fb20] rounded-full transition-all duration-700 ease-out"
                          style={{ width: "55%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: REVIEWS (mock-course-reviews.png) */}
              {activeTab === "reviews" && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Reviews Heading */}
                  <div>
                    <h2 className="font-heading font-bold text-2xl sm:text-[26px] text-neutral-900 mb-2">
                      What Learners Are Saying
                    </h2>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                      Discover what our learners have to say about their experience with &lsquo;Build
                      Digital Assets: A Comprehensive Guide.&rsquo; Read reviews and ratings from
                      individuals who have embarked on the transformative journey of mastering
                      digital asset creation.
                    </p>
                  </div>

                  {/* Ratings Summary Card */}
                  <div className="border border-neutral-200/90 rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 max-w-xl bg-white shadow-xs">
                    {/* Left Lime Rating Badge */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#d4fb20] rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-xs">
                      <span className="text-xs font-semibold text-neutral-800">Ratings</span>
                      <span className="font-heading font-extrabold text-3xl sm:text-[42px] text-neutral-950 leading-none mt-1">
                        4.8
                      </span>
                    </div>

                    {/* Right Bars */}
                    <div className="flex-1 w-full space-y-2">
                      {RATING_DISTRIBUTION.map((item) => (
                        <div key={item.stars} className="flex items-center gap-2 sm:gap-3 text-xs">
                          {/* Progress track */}
                          <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#d4fb20] rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>

                          {/* 5 star icons */}
                          <div className="flex items-center gap-0.5 shrink-0">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-neutral-800 text-neutral-800"
                              />
                            ))}
                          </div>

                          {/* Count */}
                          <span className="w-7 sm:w-8 text-right font-medium text-neutral-600 shrink-0">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews Filter Buttons */}
                  <div>
                    <h3 className="font-heading font-bold text-xl text-neutral-900 mb-4">
                      Individual Reviews:
                    </h3>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <button
                        type="button"
                        onClick={() => setSelectedRatingFilter("all")}
                        className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          selectedRatingFilter === "all"
                            ? "bg-[#d4fb20] text-neutral-950 shadow-xs"
                            : "bg-[#f4f4f5] hover:bg-neutral-200 text-neutral-700"
                        }`}
                      >
                        All rating
                      </button>

                      {[5, 4, 3, 2, 1].map((stars) => (
                        <button
                          key={stars}
                          type="button"
                          onClick={() => setSelectedRatingFilter(stars)}
                          className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                            selectedRatingFilter === stars
                              ? "bg-[#d4fb20] text-neutral-950 font-semibold shadow-xs"
                              : "border border-neutral-200 bg-[#f4f4f5] hover:bg-neutral-200 text-neutral-700"
                          }`}
                        >
                          <Star className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800" />
                          <span>{stars}</span>
                        </button>
                      ))}
                    </div>

                    {/* Review Cards List */}
                    <div className="space-y-4">
                      {filteredReviews.length === 0 ? (
                        <div className="py-12 px-6 text-center bg-neutral-50 rounded-2xl border border-neutral-200/80">
                          <p className="text-neutral-600 text-sm font-medium">
                            No reviews found for {selectedRatingFilter}-star rating.
                          </p>
                          <button
                            type="button"
                            onClick={() => setSelectedRatingFilter("all")}
                            className="mt-3 px-5 py-2 rounded-full bg-[#0043ff] text-white text-xs font-semibold hover:bg-[#003be2] transition-colors cursor-pointer"
                          >
                            Show All Reviews
                          </button>
                        </div>
                      ) : (
                        filteredReviews.map((rev) => (
                        <div
                          key={rev.id}
                          className="border border-neutral-200/90 rounded-2xl p-5 sm:p-7 bg-white shadow-xs hover:border-neutral-300 transition-colors"
                        >
                          {/* Top Reviewer Info */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                                <Image
                                  src={rev.avatar}
                                  alt={rev.name}
                                  fill
                                  unoptimized
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-heading font-bold text-sm sm:text-base text-neutral-900 leading-tight">
                                  {rev.name}
                                </h4>
                                <p className="text-neutral-500 text-xs mt-0.5">{rev.role}</p>
                              </div>
                            </div>
                            <span className="text-neutral-400 text-xs">{rev.time}</span>
                          </div>

                          {/* Stars Row */}
                          <div className="flex items-center gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= rev.rating
                                    ? "fill-neutral-900 text-neutral-900"
                                    : "fill-neutral-300 text-neutral-300"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Review Comment */}
                          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                            {rev.comment}
                          </p>
                        </div>
                      )))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Floating Enrollment Card for desktop */}
            <div className="hidden lg:block lg:col-span-4 sticky top-24">
              {renderEnrollmentCard()}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Enrollment Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div>
          <div className="text-[11px] text-neutral-500 font-medium uppercase tracking-wider">Lifetime Access</div>
          <div className="text-xl font-heading font-extrabold text-[#0043ff] leading-none">$25</div>
        </div>
        <button
          type="button"
          onClick={() => setEnrolled(true)}
          className="bg-[#d4fb20] hover:bg-[#cbfc01] text-black font-bold text-sm px-6 py-2.5 rounded-full transition-all active:scale-95 shadow-xs cursor-pointer"
        >
          {enrolled ? "Enrolled!" : "Enroll Now"}
        </button>
      </div>

      {/* Video Modal Player */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              type="button"
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full flex items-center justify-center bg-neutral-900">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/L_LUpnjgPso?autoplay=1"
                title="Course Lecture Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
