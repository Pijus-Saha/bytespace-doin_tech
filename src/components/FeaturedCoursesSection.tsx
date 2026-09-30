"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";

const CATEGORIES = [
  // Row 1
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  // Row 2
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  // Row 3
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

interface Course {
  id: number;
  title: string;
  category: string;
  author: string;
  rating: number;
  price: number;
  image: string;
  level: string;
  studentsCount: string;
  lessons: string;
  duration: string;
  comments: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/assets/courses/course-figma-basics.png",
    level: "Beginner",
    studentsCount: "26+",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    category: "Web Development",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/assets/courses/course-ui-ux-design.png",
    level: "Beginner",
    studentsCount: "26+",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    category: "Data Science",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/assets/courses/course-dashboard-analytics.png",
    level: "Beginner",
    studentsCount: "26+",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    category: "Productivity",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/assets/courses/course-productivity-work.png",
    level: "Beginner",
    studentsCount: "26+",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    category: "Business",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/assets/courses/course-stock-market-finance.png",
    level: "Beginner",
    studentsCount: "26+",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    category: "Freelance & Entrepreneurship",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/assets/courses/course-team-collaboration.png",
    level: "Beginner",
    studentsCount: "26+",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
];

export default function FeaturedCoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses =
    activeCategory === "Featured"
      ? COURSES
      : COURSES.filter((c) => c.category === activeCategory || true);

  return (
    <section id="courses" className="w-full bg-white pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-[76px] lg:pb-[76px] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[42px] leading-tight text-neutral-900">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-3.5 text-neutral-500 font-normal text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Pills matching 2-row layout in Figma */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-[1120px] mx-auto mb-10 sm:mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#d4fb20] text-neutral-900 shadow-sm font-semibold"
                    : "bg-[#f4f4f5] hover:bg-[#e4e4e7] text-neutral-700 border border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <Link
            href="/error-404"
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#f4f4f5] hover:bg-[#e4e4e7] text-neutral-700 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span className="text-[#0043ff] font-semibold">+</span> More
          </Link>
        </div>

        {/* Courses Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-[1160px] mx-auto">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-[24px] sm:rounded-[28px] p-3 sm:p-3.5 border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,67,255,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <Link href="/error-404" className="block relative w-full aspect-[341/196] rounded-[20px] overflow-hidden bg-neutral-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Actual Content Boxes: Lessons, Duration, Comments */}
                <div className="absolute bottom-3 left-2.5 right-2.5 sm:left-3 sm:right-3 flex items-center justify-between gap-1 sm:gap-1.5 z-10 select-none">
                  <span className="px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-md text-[#242528] text-[11px] font-medium border border-white/40 shadow-xs whitespace-nowrap text-center">
                    {course.lessons}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-md text-[#242528] text-[11px] font-medium border border-white/40 shadow-xs whitespace-nowrap text-center">
                    {course.duration}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-md text-[#242528] text-[11px] font-medium border border-white/40 shadow-xs whitespace-nowrap text-center">
                    {course.comments}
                  </span>
                </div>
              </Link>

              {/* Course Info */}
              <div className="pt-4 pb-2 px-1">
                {/* Title & Rating */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading font-bold text-[18px] text-[#111827] leading-snug group-hover:text-[#0043ff] transition-colors truncate">
                    <Link href="/error-404">
                      {course.title}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[#71717a] text-[15px] font-medium">{course.rating}</span>
                    <Star className="w-4 h-4 fill-[#b0b5be] text-[#b0b5be]" />
                  </div>
                </div>

                {/* Author */}
                <p className="text-[#71717a] text-xs sm:text-sm mt-1">
                  by <Link href="/error-404" className="text-[#0043ff] font-medium hover:underline cursor-pointer">{course.author}</Link>
                </p>

                {/* Level Badge and Avatars Stack */}
                <div className="flex items-center justify-between mt-5">
                  {/* Beginner pill badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f4f5] text-[#52525b] text-xs font-medium">
                    <BarChart2 className="w-3.5 h-3.5 text-[#71717a]" />
                    <span>{course.level}</span>
                  </div>

                  {/* Avatars Stack matching Figma exact asset */}
                  <div className="relative w-[120px] h-[30px] shrink-0">
                    <Image
                      src="/assets/avatars/avatar-stack-users.png"
                      alt="Enrolled students"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Price (Clean without divider line, exactly matching Figma) */}
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-heading font-bold text-2xl text-[#0043ff] leading-none">
                    ${course.price}
                  </span>
                  <span className="text-[#71717a] text-xs font-normal">/lifetime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
