"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  ChevronDown,
  Filter,
  BarChart2,
  Shapes,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  RotateCcw,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/app/not-found";

// Tag categories matching Figma exact list
const CATEGORY_TAGS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const SEARCH_TYPE_OPTIONS = ["Courses", "Creators", "Topics", "All Content"];

const SORT_OPTIONS = [
  "Most relevant",
  "Highest rated",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
];

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export interface Course {
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

// 6 base courses directly from the design
const BASE_COURSES: Course[] = [
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
    category: "Drawing & Painting",
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
    category: "Marketing",
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
    category: "Social Media",
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
    category: "Creative Marketing",
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
    category: "Animation",
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

// Generate 18 courses per page to match mock-search-page.png (6 rows x 3 columns)
const ALL_COURSES: Course[] = Array.from({ length: 90 }, (_, index) => {
  const base = BASE_COURSES[index % BASE_COURSES.length];
  // Assign variety of categories and levels across pages while keeping page 1 exact to mock
  const tagCategories = [
    "UI/UX Design",
    "Drawing & Painting",
    "Marketing",
    "Social Media",
    "Creative Marketing",
    "Animation",
    "Music",
    "Cooking",
  ];
  const assignedCategory =
    index < 18 ? base.category : tagCategories[index % tagCategories.length];

  return {
    ...base,
    id: index + 1,
    category: assignedCategory,
  };
});

export default function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Search query & options
  const urlQuery = searchParams.get("q") ?? "";
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [prevUrlQuery, setPrevUrlQuery] = useState(urlQuery);

  if (urlQuery !== prevUrlQuery) {
    setPrevUrlQuery(urlQuery);
    setSearchQuery(urlQuery);
  }

  const [selectedSearchType, setSelectedSearchType] = useState("Courses");
  const [isSearchTypeOpen, setIsSearchTypeOpen] = useState(false);

  // Filters state
  const [activeTag, setActiveTag] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("Most relevant");

  // Dropdown open states
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Pagination state (18 items per page = 6 rows x 3 cols, exactly like Figma)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  // Refs for closing dropdowns when clicking outside
  const searchTypeRef = useRef<HTMLDivElement>(null);
  const levelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchTypeRef.current &&
        !searchTypeRef.current.contains(e.target as Node)
      ) {
        setIsSearchTypeOpen(false);
      }
      if (levelRef.current && !levelRef.current.contains(e.target as Node)) {
        setIsLevelOpen(false);
      }
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter & sort logic
  const filteredCourses = useMemo(() => {
    let list = [...ALL_COURSES];

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.author.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    // Filter by Tag Pill
    if (activeTag !== "Featured") {
      list = list.filter(
        (c) => c.category.toLowerCase() === activeTag.toLowerCase()
      );
    }

    // Filter by Level Dropdown
    if (selectedLevel !== "All Levels") {
      list = list.filter((c) => c.level === selectedLevel);
    }

    // Filter by Category Dropdown
    if (selectedCategory !== "All Categories") {
      list = list.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sorting
    if (selectedSort === "Highest rated") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Price: Low to High") {
      list.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "Price: High to Low") {
      list.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "Newest") {
      list.sort((a, b) => b.id - a.id);
    }

    return list;
  }, [searchQuery, activeTag, selectedLevel, selectedCategory, selectedSort]);

  // Paginated slice
  const currentCourses = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCourses.slice(start, start + itemsPerPage);
  }, [filteredCourses, currentPage, itemsPerPage]);

  // Handle Search Submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/search");
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setActiveTag("Featured");
    setSelectedLevel("All Levels");
    setSelectedCategory("All Categories");
    setSelectedSort("Most relevant");
    setCurrentPage(1);
    router.push("/search");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    activeTag !== "Featured" ||
    selectedLevel !== "All Levels" ||
    selectedCategory !== "All Categories" ||
    selectedSort !== "Most relevant";

  // If page query parameter is 2, 3, 4, 5 (or >= 2), render 404 page
  const pageParam = searchParams.get("page");
  if (pageParam && parseInt(pageParam, 10) >= 2) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Search Hero Section with Blue Background & Grid Pattern */}
      <section className="relative w-full bg-[#003be2] bg-grid-pattern text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col items-center">
          {/* Main Title */}
          <h1 className="text-center font-heading font-bold text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] text-white tracking-tight leading-tight mb-7 sm:mb-8">
            Find Your Next Course
          </h1>

          {/* Search Bar + Courses Dropdown Pill Container */}
          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-[660px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-30"
          >
            {/* White Search Pill */}
            <div className="relative flex-1 w-full max-w-[460px] bg-white rounded-full h-[52px] sm:h-[54px] px-5 sm:px-6 flex items-center shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#d4fb20]">
              <Search className="w-5 h-5 text-[#82868e] shrink-0 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="w-full bg-transparent text-neutral-800 placeholder-[#82868e] text-base focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="p-1 hover:bg-neutral-100 rounded-full text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Lime "Courses ⌵" Dropdown Pill */}
            <div className="relative" ref={searchTypeRef}>
              <button
                type="button"
                onClick={() => setIsSearchTypeOpen(!isSearchTypeOpen)}
                className="h-[52px] sm:h-[54px] px-6 bg-[#d4fb20] hover:bg-[#cbfc01] text-black font-semibold text-base rounded-full flex items-center justify-between gap-3 shadow-md shrink-0 cursor-pointer transition-all duration-200 select-none active:scale-95"
              >
                <span>{selectedSearchType}</span>
                <ChevronDown
                  className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${
                    isSearchTypeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Search Type Dropdown Menu */}
              {isSearchTypeOpen && (
                <div className="absolute right-0 sm:left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {SEARCH_TYPE_OPTIONS.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setSelectedSearchType(type);
                        setIsSearchTypeOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        selectedSearchType === type
                          ? "bg-neutral-50 text-[#0043ff] font-semibold"
                          : "text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{type}</span>
                      {selectedSearchType === type && (
                        <Check className="w-4 h-4 text-[#0043ff]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* 3. Controls & Filter Bar (Matching Figma Controls Exactly) */}
      <section className="w-full bg-white pt-8 sm:pt-10 pb-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
          {/* Row 1: Filter, Level, Category Buttons (Left) & Most Relevant (Right) */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            {/* Left Filter Group */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
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
                        Filter Courses
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsFilterModalOpen(false)}
                        className="text-neutral-400 hover:text-neutral-600 p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Filter Option 1: Level */}
                    <div className="mb-4">
                      <label className="text-xs font-semibold uppercase text-neutral-400 tracking-wider block mb-2">
                        Skill Level
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {LEVEL_OPTIONS.map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => {
                              setSelectedLevel(level);
                              setCurrentPage(1);
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium border text-center transition-all cursor-pointer ${
                              selectedLevel === level
                                ? "bg-[#d4fb20] border-[#d4fb20] text-black font-semibold"
                                : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Filter Option 2: Price */}
                    <div className="mb-5">
                      <label className="text-xs font-semibold uppercase text-neutral-400 tracking-wider block mb-2">
                        Price Range
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#0043ff]">
                          $0 - $50
                        </span>
                        <span className="text-xs text-neutral-400">
                          (All current courses $25)
                        </span>
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

              {/* 2. Level Button */}
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
                  <BarChart2 className="w-4 h-4 text-neutral-800" strokeWidth={2} />
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
                          setCurrentPage(1);
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

              {/* 3. Category Button */}
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
                  <Shapes className="w-4 h-4 text-neutral-800" strokeWidth={2} />
                  <span>
                    {selectedCategory !== "All Categories"
                      ? selectedCategory
                      : "Category"}
                  </span>
                </button>

                {isCategoryOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 max-h-72 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory("All Categories");
                        setIsCategoryOpen(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        selectedCategory === "All Categories"
                          ? "bg-neutral-50 text-[#0043ff] font-semibold"
                          : "text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      <span>All Categories</span>
                      {selectedCategory === "All Categories" && (
                        <Check className="w-4 h-4 text-[#0043ff]" />
                      )}
                    </button>
                    {CATEGORY_TAGS.filter((t) => t !== "Featured").map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryOpen(false);
                          setCurrentPage(1);
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

            {/* Right: Most relevant Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800 text-sm font-medium inline-flex items-center gap-2 cursor-pointer transition-all duration-200 select-none hover:shadow-xs"
              >
                {/* 3-line sort icon exactly matching Figma */}
                <svg
                  className="w-4 h-4 text-neutral-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M3 12h12" />
                  <path d="M3 18h6" />
                </svg>
                <span>{selectedSort}</span>
              </button>

              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedSort(opt);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        selectedSort === opt
                          ? "bg-neutral-50 text-[#0043ff] font-semibold"
                          : "text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{opt}</span>
                      {selectedSort === opt && (
                        <Check className="w-4 h-4 text-[#0043ff]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Row 2: Category Tag Pills (Exact sequence and layout from Figma) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pb-2">
            {CATEGORY_TAGS.map((tag) => {
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setActiveTag(tag);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#d4fb20] text-neutral-900 font-semibold shadow-xs"
                      : "bg-[#f4f4f5] hover:bg-[#e4e4e7] text-neutral-700 border border-transparent"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Course Cards Grid (3 Columns x 6 Rows = 18 Cards per page) */}
      <section className="w-full bg-white pb-12 sm:pb-16 flex-1">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
          {currentCourses.length === 0 ? (
            /* Empty State */
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                No courses found
              </h3>
              <p className="text-neutral-500 text-sm max-w-md mb-6">
                We couldn&apos;t find any courses matching your current filters. Try
                broadening your search query or resetting filters.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="px-6 py-2.5 bg-[#0043ff] hover:bg-[#003be2] text-white rounded-full font-medium text-sm transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-[24px] sm:rounded-[28px] p-3 sm:p-3.5 border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,67,255,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Thumbnail Container */}
                  <Link
                    href="/courses/build-digital-asset"
                    className="block relative w-full aspect-[341/196] rounded-[20px] overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay Badges: 17 Lessons, 2 hours 16 mins, 59 Comments */}
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
                        <Link href="/courses/build-digital-asset">{course.title}</Link>
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className="text-[#71717a] text-[15px] font-medium">
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

                    {/* Price */}
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="font-heading font-bold text-2xl text-[#0043ff] leading-none">
                        ${course.price}
                      </span>
                      <span className="text-[#71717a] text-xs font-normal">
                        /lifetime
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 5. Pagination Bar (Pages 2-5 and Next arrow link to /error-404) */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 pt-12 sm:pt-16 pb-4">
            {/* Previous Arrow Button (disabled on page 1) */}
            <button
              type="button"
              disabled
              aria-label="Previous Page"
              className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center transition-all opacity-60 cursor-not-allowed text-neutral-400"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Page 1 (Current active page) */}
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base text-neutral-300 cursor-pointer select-none"
            >
              1
            </button>

            {/* Pages 2, 3, 4, 5 link to /error-404 */}
            {[2, 3, 4, 5].map((pageNum) => (
              <Link
                key={pageNum}
                href="/error-404"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base text-neutral-900 hover:text-[#0043ff] transition-colors cursor-pointer select-none"
              >
                {pageNum}
              </Link>
            ))}

            {/* Next Arrow Button links to /error-404 */}
            <Link
              href="/error-404"
              aria-label="Next Page"
              className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center transition-all hover:border-neutral-400 hover:bg-neutral-50 text-neutral-800 cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5 stroke-[2]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Global Website Footer */}
      <Footer />
    </div>
  );
}
