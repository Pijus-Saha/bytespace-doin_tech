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
    <section className="relative w-full bg-[#003be2] bg-grid-pattern text-white overflow-hidden pt-28 sm:pt-32 lg:pt-[175px] lg:h-[1024px]">
      
      {/* ================= 3D DECORATIONS (ANCHORED TO FULL SCREEN EDGES) ================= */}

      {/* 1. Top Left: Lime 3D Zigzag (Hugging the left screen edge, no blank space) */}
      <div className="hidden sm:block absolute left-0 -translate-x-[15%] lg:translate-x-0 top-[160px] sm:top-[175px] lg:top-[185px] w-[140px] sm:w-[175px] lg:w-[210px] pointer-events-none select-none z-10">
        <Image
          src="/assets/decorations/3d-lime-zigzag.png"
          alt="3D Lime Zigzag"
          width={267}
          height={387}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* 2. Mid Left: White 3D Ribbon / Squiggle */}
      <div className="hidden sm:block absolute left-[8%] sm:left-[11%] lg:left-[13%] top-[370px] sm:top-[390px] lg:top-[410px] w-[85px] sm:w-[105px] lg:w-[120px] pointer-events-none select-none z-10">
        <Image
          src="/assets/decorations/3d-white-ribbon-hero.png"
          alt="3D White Ribbon Squiggle"
          width={456}
          height={480}
          className="w-full h-auto drop-shadow-xl"
        />
      </div>

      {/* 3. Bottom Left: White 3D Torus (In front of Lime Arch, no blank space) */}
      <div className="hidden sm:block absolute left-0 -translate-x-[10%] lg:translate-x-0 sm:left-[1%] lg:left-[3%] bottom-[25px] sm:bottom-[35px] lg:bottom-[45px] w-[200px] sm:w-[260px] lg:w-[320px] pointer-events-none select-none z-20">
        <Image
          src="/assets/decorations/3d-white-torus.png"
          alt="3D White Torus"
          width={346}
          height={343}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* 4. Top Right: Lime 3D Cylinder / Ribbon (Hugging the right screen edge, no blank space) */}
      <div className="hidden sm:block absolute right-0 translate-x-[15%] lg:translate-x-0 top-[140px] sm:top-[150px] lg:top-[160px] w-[125px] sm:w-[150px] lg:w-[180px] pointer-events-none select-none z-10">
        <Image
          src="/assets/decorations/3d-lime-ribbon.png"
          alt="3D Lime Cylinder"
          width={213}
          height={372}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* 5. Mid Right: White 3D Cone / Tetrahedron */}
      <div className="hidden sm:block absolute right-[8%] sm:right-[10%] lg:right-[12%] top-[350px] sm:top-[375px] lg:top-[395px] w-[85px] sm:w-[105px] lg:w-[125px] pointer-events-none select-none z-10">
        <Image
          src="/assets/decorations/3d-white-cone.png"
          alt="3D White Cone"
          width={190}
          height={189}
          className="w-full h-auto drop-shadow-xl"
        />
      </div>

      {/* 6. Bottom Right: White 3D Spiral Coil (Hugging bottom right) */}
      <div className="hidden sm:block absolute right-0 sm:right-[1%] lg:right-[3%] bottom-[25px] sm:bottom-[35px] lg:bottom-[45px] w-[130px] sm:w-[165px] lg:w-[200px] pointer-events-none select-none z-20">
        <Image
          src="/assets/decorations/3d-white-spiral.png"
          alt="3D White Spiral Coil"
          width={317}
          height={332}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* ================= CENTER CONTENT CONTAINER ================= */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col items-center">
        
        {/* Main Heading */}
        <h1 className="text-center font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.12] tracking-tight max-w-4xl text-white relative z-20 px-2">
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
          className="mt-6 sm:mt-9 w-full max-w-xl bg-white rounded-full p-1.5 sm:p-2 pl-4 sm:pl-6 flex items-center shadow-2xl relative z-30 focus-within:ring-4 focus-within:ring-[#d4fb20]/40 transition-all"
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

        {/* ================= CENTER STAGE (ARCH + STUDENT + BADGES) ================= */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 w-full max-w-[1240px] mt-6 sm:mt-10 lg:mt-0 h-[340px] sm:h-[480px] lg:h-[530px] flex justify-center items-end select-none">
          {/* Lime Arch Background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[720px] sm:w-[980px] lg:w-[1180px] pointer-events-none select-none z-0">
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
          <div className="relative z-10 w-[340px] sm:w-[520px] lg:w-[620px] pointer-events-none select-none flex justify-center items-end">
            <Image
              src="/assets/heroes/student-male-tablet.png"
              alt="ByteSpace Student with Laptop"
              width={722}
              height={515}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Floating Widget 1: UI/UX Design Pill (Top Left of Student) */}
          <div className="hidden sm:block absolute left-[4%] sm:left-[10%] lg:left-[16%] top-[22%] sm:top-[26%] bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] px-6 sm:px-8 py-3.5 sm:py-5 shadow-[0_20px_45px_rgba(0,0,0,0.12)] text-[#1a1d1f] z-30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.16)] select-none">
            <p className="font-heading font-semibold text-base sm:text-lg lg:text-[22px] text-[#1a1d1f] leading-snug tracking-tight">
              UI/UX Design
            </p>
            <p className="text-xs sm:text-sm text-[#72777a] font-normal mt-1 flex items-center gap-1.5">
              <span>200 Courses</span>
              <span className="text-[#a0a4a8]">•</span>
              <span>1000+ Students</span>
            </p>
          </div>

          {/* Floating Widget 2: Learning Progress (Top Right of Student) */}
          <div className="hidden sm:block absolute right-[3%] sm:right-[9%] lg:right-[15%] top-[20%] sm:top-[24%] bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] px-6 sm:px-7 py-5 sm:py-6 shadow-[0_20px_45px_rgba(0,0,0,0.12)] text-[#1a1d1f] w-[190px] sm:w-[230px] lg:w-[260px] z-30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.16)] select-none">
            <span className="text-xs sm:text-sm lg:text-[15px] font-normal text-[#1a1d1f] block tracking-tight">
              Learning Progress
            </span>
            <span className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl lg:text-[44px] block my-1.5 sm:my-2 tracking-tight leading-none">
              55%
            </span>
            <div className="w-full h-2 sm:h-2.5 lg:h-3 bg-[#eef0f4] rounded-full overflow-hidden mt-2.5">
              <div className="h-full bg-[#d4fb20] rounded-full w-[55%]" />
            </div>
          </div>

          {/* Floating Widget 3: Happy Students (Bottom Left of Student) */}
          <div className="absolute left-[2%] sm:left-[8%] lg:left-[13%] bottom-[6%] sm:bottom-[10%] scale-90 sm:scale-100 origin-bottom-left bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] px-5 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-5 shadow-[0_20px_45px_rgba(0,0,0,0.12)] text-[#1a1d1f] w-[210px] sm:w-[250px] lg:w-[280px] z-30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.16)] select-none">
            <p className="font-heading font-semibold text-sm sm:text-base lg:text-[18px] text-[#1a1d1f] leading-snug tracking-tight">
              Happy Students
            </p>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm mt-1 mb-2.5">
              <span className="font-medium text-[#1a1d1f]">4.5</span>
              <span className="text-[#72777a]">(240)</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4fb20] fill-[#d4fb20] ml-0.5" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="w-full">
              <Image
                src="/assets/widgets/avatars-happy-students.png"
                alt="Happy Students"
                width={928}
                height={172}
                className="w-full h-auto object-contain drop-shadow-sm"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
