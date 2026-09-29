"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const coursesEl = document.getElementById("courses");
      if (coursesEl) {
        coursesEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full bg-[#003be2] bg-grid-pattern text-white overflow-hidden pt-24 sm:pt-32 lg:pt-36">
      {/* Hero Content */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-12 lg:px-16 relative z-10 flex flex-col items-center">
        {/* Floating 3D Shapes (Left Side - hidden on smallest mobile to prevent text clash) */}
        {/* Top Left: 3D Lime Zigzag */}
        <div className="hidden sm:block absolute left-2 sm:left-6 lg:left-8 top-0 sm:top-2 w-20 sm:w-32 lg:w-44 pointer-events-none select-none z-10">
          <Image
            src="/assets/decorations/3d-lime-zigzag.png"
            alt="3D Lime Zigzag"
            width={267}
            height={387}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Mid Left: 3D White Spiral */}
        <div className="hidden md:block absolute left-4 sm:left-12 lg:left-16 top-[34%] w-14 sm:w-20 lg:w-28 pointer-events-none select-none z-10">
          <Image
            src="/assets/decorations/3d-white-spiral.png"
            alt="3D White Spiral"
            width={317}
            height={332}
            className="w-full h-auto drop-shadow-xl opacity-90"
          />
        </div>

        {/* Bottom Left: 3D White Torus */}
        <div className="hidden sm:block absolute -left-6 sm:left-2 lg:left-6 bottom-4 sm:bottom-12 w-28 sm:w-44 lg:w-56 pointer-events-none select-none z-10">
          <Image
            src="/assets/decorations/3d-white-torus.png"
            alt="3D White Torus"
            width={346}
            height={343}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Floating 3D Shapes (Right Side) */}
        {/* Top Right: 3D Lime Ribbon/Cylinder */}
        <div className="hidden sm:block absolute right-2 sm:right-6 lg:right-8 -top-2 sm:top-0 w-24 sm:w-36 lg:w-48 pointer-events-none select-none z-10">
          <Image
            src="/assets/decorations/3d-lime-ribbon.png"
            alt="3D Lime Ribbon"
            width={213}
            height={372}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Mid Right: 3D White Cone */}
        <div className="hidden md:block absolute right-4 sm:right-12 lg:right-16 top-[30%] w-14 sm:w-20 lg:w-28 pointer-events-none select-none z-10">
          <Image
            src="/assets/decorations/3d-white-cone.png"
            alt="3D White Cone"
            width={190}
            height={189}
            className="w-full h-auto drop-shadow-xl opacity-90"
          />
        </div>

        {/* Bottom Right: 3D White Spring Coil */}
        <div className="hidden sm:block absolute -right-4 sm:right-4 lg:right-8 bottom-4 sm:bottom-12 w-24 sm:w-36 lg:w-48 pointer-events-none select-none z-10">
          <Image
            src="/assets/decorations/3d-white-spring-cutout.png"
            alt="3D White Spring"
            width={176}
            height={176}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-center font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.14] tracking-tight max-w-4xl text-white relative z-20 px-2">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-center text-white/80 font-normal text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed relative z-20 px-4">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-6 sm:mt-10 w-full max-w-xl bg-white rounded-full p-1.5 sm:p-2 pl-4 sm:pl-6 flex items-center shadow-2xl relative z-30 focus-within:ring-4 focus-within:ring-[#d4fb20]/40 transition-all"
        >
          <Search className="w-4 sm:w-5 h-4 sm:h-5 text-[#82868e] mr-2.5 sm:mr-3 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-neutral-800 placeholder-[#82868e] text-sm sm:text-base focus:outline-none"
          />
          <button
            type="submit"
            className="ml-1 sm:ml-2 bg-[#d4fb20] hover:bg-[#cbfc01] text-black font-semibold text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:shadow-md cursor-pointer shrink-0"
          >
            Search
          </button>
        </form>

        {/* Hero Center Illustration & Cards Stage */}
        <div className="relative w-full max-w-5xl mt-6 sm:mt-12 h-[280px] sm:h-[460px] lg:h-[560px] flex justify-center items-end select-none">
          {/* Lime Arch Background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] sm:w-[900px] lg:w-[1100px] pointer-events-none select-none z-0">
            <Image
              src="/assets/decorations/bg-arch-lime.png"
              alt="Arch Background"
              width={1149}
              height={442}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Student Cutout */}
          <div className="relative z-10 w-[300px] sm:w-[500px] lg:w-[600px] pointer-events-none select-none flex justify-center items-end">
            <Image
              src="/assets/heroes/student-male-tablet.png"
              alt="ByteSpace Student with Laptop"
              width={722}
              height={515}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Floating Widget 1: UI/UX Design Pill (Top Left of Student - hidden on tiny mobile) */}
          <div className="hidden sm:block absolute left-[2%] sm:left-[8%] lg:left-[10%] top-[22%] sm:top-[26%] bg-white rounded-2xl py-3 px-5 shadow-2xl border border-white/60 text-neutral-900 z-20 transition-all duration-300 hover:-translate-y-1">
            <p className="font-heading font-semibold text-sm sm:text-base text-neutral-900 leading-snug">UI/UX Design</p>
            <p className="text-xs text-neutral-500 font-medium mt-0.5">200 Courses • 1000+ Students</p>
          </div>

          {/* Floating Widget 2: Learning Progress (Top Right of Student) */}
          <div className="hidden sm:block absolute right-[2%] sm:right-[6%] lg:right-[8%] top-[20%] sm:top-[24%] bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/60 text-neutral-900 w-[170px] sm:w-[210px] z-20 transition-all duration-300 hover:-translate-y-1">
            <span className="text-xs sm:text-sm font-medium text-neutral-600 block">Learning Progress</span>
            <span className="font-heading font-bold text-neutral-950 text-2xl sm:text-3xl block my-1">55%</span>
            <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-[#d4fb20] rounded-full w-[55%]" />
            </div>
          </div>

          {/* Floating Widget 3: Happy Students (Bottom Left of Student) */}
          <div className="absolute left-[1%] sm:left-[5%] lg:left-[6%] bottom-[8%] sm:bottom-[16%] scale-80 sm:scale-100 origin-bottom-left bg-white rounded-2xl py-2.5 sm:py-3.5 px-3.5 sm:px-4.5 shadow-2xl border border-white/60 text-neutral-900 z-20 transition-all duration-300 hover:-translate-y-1">
            <p className="font-heading font-semibold text-xs sm:text-sm text-neutral-900 leading-none">Happy Students</p>
            <div className="flex items-center gap-1 text-xs text-neutral-600 mt-1 mb-2">
              <span className="font-medium">4.5 (240)</span>
              <span className="text-amber-400">★</span>
            </div>
            <div className="flex items-center -space-x-2">
              <Image src="/assets/avatars/avatar-male-glasses.png" alt="Student" width={26} height={26} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="/assets/avatars/avatar-male-senior.png" alt="Student" width={26} height={26} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="/assets/avatars/avatar-female-yellow-bg.png" alt="Student" width={26} height={26} className="rounded-full ring-2 ring-white object-cover" />
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#d4fb20] text-neutral-950 font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
