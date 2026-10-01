"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Filter, Check, RotateCcw, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface CreatorCourse {
  id: number;
  title: string;
  category: string;
  author: string;
  rating: number;
  price: number;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  studentsCount: string;
  lessons: string;
  duration: string;
  comments: string;
}

const CREATOR_COURSES: CreatorCourse[] = [
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
    category: "UI/UX Design",
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
    category: "Data & Tech",
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
    category: "Business",
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

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const CATEGORY_OPTIONS = [
  "All Categories",
  "UI/UX Design",
  "Data & Tech",
  "Productivity",
  "Business",
];
const SORT_OPTIONS = [
  "Most relevant",
  "Highest rated",
  "Price: Low to High",
  "Price: High to Low",
];

export default function CreatorProfileView() {
  // Follower state
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(12);

  // Filter & Sort state
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("Most relevant");

  // Dropdown open states
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Refs for click outside
  const levelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (levelRef.current && !levelRef.current.contains(e.target as Node)) {
        setIsLevelOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setIsCategoryOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => Math.max(12, prev - 1));
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

  const resetFilters = () => {
    setSelectedLevel("All Levels");
    setSelectedCategory("All Categories");
    setSelectedSort("Most relevant");
    setIsFilterModalOpen(false);
  };

  const hasActiveFilters =
    selectedLevel !== "All Levels" ||
    selectedCategory !== "All Categories" ||
    selectedSort !== "Most relevant";

  // Filtered and sorted courses
  const filteredCourses = useMemo(() => {
    let list = [...CREATOR_COURSES];

    if (selectedLevel !== "All Levels") {
      list = list.filter((c) => c.level === selectedLevel);
    }

    if (selectedCategory !== "All Categories") {
      list = list.filter((c) => c.category === selectedCategory);
    }

    if (selectedSort === "Highest rated") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Price: Low to High") {
      list.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "Price: High to Low") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedLevel, selectedCategory, selectedSort]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#d4fb20] selection:text-black">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* 1. Creator Profile Hero Section (Full-bleed Electric Blue with 120px Modular Grid) */}
      <section className="relative w-full bg-[#003be2] overflow-hidden">
        {/* 120px Modular Grid Pattern Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
            backgroundPosition: "left top",
          }}
        />

        {/* Hero Content Frame */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-[120px] pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 text-white">
          {/* Creator Profile Top: Avatar + Name + Creator Badge + Subtitle */}
          <div className="flex items-start gap-6 sm:gap-7">
            {/* Squircle Avatar with rounded-[24px] */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-[104px] lg:h-[104px] rounded-[24px] overflow-hidden shrink-0 shadow-xl bg-transparent">
              <Image
                src="/assets/avatars/creator-purepearl-profile.png"
                alt="PurePearl Studio"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Creator Title & Meta */}
            <div className="flex-1 pt-1 sm:pt-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[36px] leading-tight text-white tracking-tight">
                  PurePearl Studio
                </h1>
                <span className="px-4 py-1 rounded-full bg-[#d4fb20] text-black font-semibold text-xs sm:text-sm tracking-wide shadow-xs select-none">
                  Creator
                </span>
              </div>
              <p className="text-white/90 text-sm sm:text-base font-normal mt-1.5 sm:mt-2">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Creator Bio Description */}
          <div className="mt-8 sm:mt-9 max-w-5xl text-white/95 text-sm sm:text-base leading-[1.65] space-y-2.5 font-normal">
            <p>
              Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Stats Badges and Follow CTA Button */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
            {/* Stats Badges (Left) */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Products Stat Pill */}
              <div className="bg-white rounded-full px-6 py-2.5 inline-flex items-center gap-2 shadow-xs select-none">
                <span className="text-[#0043ff] font-bold text-base sm:text-lg">
                  3
                </span>
                <span className="text-neutral-900 font-medium text-base sm:text-lg">
                  Products
                </span>
              </div>

              {/* Followers Stat Pill */}
              <div className="bg-white rounded-full px-6 py-2.5 inline-flex items-center gap-2 shadow-xs select-none">
                <span className="text-[#0043ff] font-bold text-base sm:text-lg">
                  {followersCount}
                </span>
                <span className="text-neutral-900 font-medium text-base sm:text-lg">
                  Followers
                </span>
              </div>
            </div>

            {/* Follow Button (Right) */}
            <div>
              <button
                type="button"
                onClick={handleFollowToggle}
                className={`px-8 sm:px-9 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-[17px] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-95 select-none ${
                  isFollowing
                    ? "bg-white text-[#003be2] ring-2 ring-[#d4fb20]"
                    : "bg-[#d4fb20] hover:bg-[#cbfc01] text-black"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Controls & Filters Bar */}
      <section className="w-full bg-white pt-10 sm:pt-12 pb-7">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-[120px]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Filter Buttons Group */}
            <div className="flex flex-wrap items-center gap-3">
              {/* 1. Filter Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium inline-flex items-center gap-2 cursor-pointer transition-all duration-200 select-none ${
                    isFilterModalOpen || hasActiveFilters
                      ? "border-neutral-900 bg-neutral-900 text-white shadow-xs"
                      : "border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800"
                  }`}
                >
                  <Filter className="w-4 h-4" strokeWidth={2} />
                  <span>Filter</span>
                  {hasActiveFilters && (
                    <span className="w-2 h-2 rounded-full bg-[#d4fb20]" />
                  )}
                </button>

                {/* Filter Popover Modal */}
                {isFilterModalOpen && (
                  <div className="absolute left-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-neutral-200 p-5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                      <span className="font-heading font-semibold text-neutral-900 text-base">
                        Filter Creator Courses
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsFilterModalOpen(false)}
                        className="text-neutral-400 hover:text-neutral-600 p-1 cursor-pointer"
                        aria-label="Close filters"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-4 mb-5">
                      {/* Skill Level Filter */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                          Skill Level
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {LEVEL_OPTIONS.map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => setSelectedLevel(lvl)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                                selectedLevel === lvl
                                  ? "bg-[#0043ff] text-white"
                                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                              }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                          Category
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {CATEGORY_OPTIONS.map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setSelectedCategory(cat)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                                selectedCategory === cat
                                  ? "bg-[#0043ff] text-white"
                                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="flex-1 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 border border-neutral-200 rounded-full hover:bg-neutral-50 cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Reset
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFilterModalOpen(false)}
                        className="flex-1 py-2 text-xs font-semibold bg-[#0043ff] hover:bg-[#003be2] text-white rounded-full cursor-pointer shadow-sm"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Level Button (3 vertical signal bars matching Figma) */}
              <div className="relative" ref={levelRef}>
                <button
                  type="button"
                  onClick={() => setIsLevelOpen(!isLevelOpen)}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium inline-flex items-center gap-2 cursor-pointer transition-all duration-200 select-none ${
                    selectedLevel !== "All Levels"
                      ? "border-[#0043ff] text-[#0043ff] bg-blue-50/50"
                      : "border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800"
                  }`}
                >
                  <svg
                    className="w-3.5 h-3.5 text-neutral-800"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <rect x="2" y="9" width="2.5" height="7" rx="1" />
                    <rect x="6.75" y="5" width="2.5" height="11" rx="1" />
                    <rect x="11.5" y="1" width="2.5" height="15" rx="1" />
                  </svg>
                  <span>{selectedLevel !== "All Levels" ? selectedLevel : "Level"}</span>
                </button>

                {isLevelOpen && (
                  <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {LEVEL_OPTIONS.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setIsLevelOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                          selectedLevel === lvl
                            ? "bg-neutral-50 text-[#0043ff] font-semibold"
                            : "text-neutral-700 hover:bg-neutral-50"
                        }`}
                      >
                        <span>{lvl}</span>
                        {selectedLevel === lvl && (
                          <Check className="w-4 h-4 text-[#0043ff]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Category Button (Triangle + square + circle icon matching Figma) */}
              <div className="relative" ref={categoryRef}>
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium inline-flex items-center gap-2 cursor-pointer transition-all duration-200 select-none ${
                    selectedCategory !== "All Categories"
                      ? "border-[#0043ff] text-[#0043ff] bg-blue-50/50"
                      : "border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800"
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-neutral-800"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="10 2, 14 9, 6 9" strokeLinejoin="round" />
                    <rect x="3" y="12" width="6" height="6" rx="1" />
                    <circle cx="15" cy="15" r="3" />
                  </svg>
                  <span>
                    {selectedCategory !== "All Categories"
                      ? selectedCategory
                      : "Category"}
                  </span>
                </button>

                {isCategoryOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {CATEGORY_OPTIONS.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-neutral-50 text-[#0043ff] font-semibold"
                            : "text-neutral-700 hover:bg-neutral-50"
                        }`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && (
                          <Check className="w-4 h-4 text-[#0043ff]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Most Relevant Sort Button (3 horizontal lines) */}
            <div className="relative" ref={sortRef}>
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800 text-sm font-medium inline-flex items-center gap-2 cursor-pointer transition-all duration-200 select-none hover:shadow-xs"
              >
                <svg
                  className="w-4 h-4 text-neutral-800"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10.5" x2="13" y2="10.5" />
                  <line x1="3" y1="15" x2="7" y2="15" />
                </svg>
                <span>{selectedSort}</span>
              </button>

              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {SORT_OPTIONS.map((sort) => (
                    <button
                      key={sort}
                      type="button"
                      onClick={() => {
                        setSelectedSort(sort);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        selectedSort === sort
                          ? "bg-neutral-50 text-[#0043ff] font-semibold"
                          : "text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{sort}</span>
                      {selectedSort === sort && (
                        <Check className="w-4 h-4 text-[#0043ff]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Creator Course Cards Grid (3 Columns x 2 Rows) */}
      <section className="w-full bg-white pb-20 sm:pb-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-[120px]">
          {filteredCourses.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-neutral-500 text-base">
                No courses match your selected filter criteria.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 px-6 py-2 rounded-full bg-[#0043ff] text-white text-sm font-medium hover:bg-[#003be2] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-[32px] sm:rounded-[36px] border border-neutral-200/90 p-4 sm:p-4.5 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Thumbnail Container */}
                  <Link
                    href="/courses/build-digital-asset"
                    className="block relative w-full aspect-[341/200] rounded-[22px] sm:rounded-[24px] overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Content Badges Overlaid on Bottom of Thumbnail */}
                    <div className="absolute bottom-3 left-2.5 right-2.5 sm:left-3 sm:right-3 flex items-center justify-between gap-1 sm:gap-1.5 z-10 select-none">
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] text-[11px] sm:text-xs font-medium border border-white/60 shadow-xs whitespace-nowrap text-center">
                        {course.lessons}
                      </span>
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] text-[11px] sm:text-xs font-medium border border-white/60 shadow-xs whitespace-nowrap text-center">
                        {course.duration}
                      </span>
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] text-[11px] sm:text-xs font-medium border border-white/60 shadow-xs whitespace-nowrap text-center">
                        {course.comments}
                      </span>
                    </div>
                  </Link>

                  {/* Course Details Info */}
                  <div className="pt-4 pb-1 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title & Rating */}
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-heading font-bold text-[19px] sm:text-[20px] text-neutral-900 leading-snug group-hover:text-[#0043ff] transition-colors truncate">
                          <Link href="/courses/build-digital-asset">
                            {course.title}
                          </Link>
                        </h3>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-[#71717a] text-[15px] sm:text-[16px] font-normal">
                            {course.rating}
                          </span>
                          <Star className="w-4 h-4 fill-[#b0b5be] text-[#b0b5be]" />
                        </div>
                      </div>

                      {/* Author */}
                      <p className="text-[#71717a] text-xs sm:text-sm mt-1">
                        by{" "}
                        <Link
                          href="/creators"
                          className="text-[#0043ff] font-medium hover:underline cursor-pointer"
                        >
                          {course.author}
                        </Link>
                      </p>
                    </div>

                    <div>
                      {/* Level Badge and Student Avatars Stack */}
                      <div className="flex items-center justify-between mt-5">
                        {/* Beginner pill badge */}
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f2f3f5] text-neutral-700 text-xs font-medium">
                          <svg
                            className="w-3.5 h-3.5 text-neutral-700"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <rect x="2" y="9" width="2.5" height="7" rx="1" />
                            <rect x="6.75" y="5" width="2.5" height="11" rx="1" />
                            <rect x="11.5" y="1" width="2.5" height="15" rx="1" />
                          </svg>
                          <span>{course.level}</span>
                        </div>

                        {/* Avatars Stack */}
                        <div className="relative w-[130px] h-[32px] shrink-0">
                          <Image
                            src="/assets/avatars/avatar-stack-users.png"
                            alt="Enrolled students"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Lifetime Price */}
                      <div className="mt-5 flex items-baseline gap-1">
                        <span className="font-heading font-bold text-[26px] sm:text-[28px] text-[#0043ff] leading-none">
                          ${course.price}
                        </span>
                        <span className="text-[#71717a] text-xs font-normal">
                          /lifetime
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Global ByteSpace Footer */}
      <Footer />
    </div>
  );
}
