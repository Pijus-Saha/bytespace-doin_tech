"use client";

import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

export default function RegisterCourseCluster() {
  return (
    <div className="relative w-[552px] h-[586px] select-none scale-[0.82] sm:scale-[0.92] lg:scale-100 origin-top-left">
      
      {/* ================= 1. BACK CARD (Course 2: Build Digital Asset) ================= */}
      {/* Exact card structure and styling from FeaturedCoursesSection.tsx */}
      <div 
        className="absolute bg-white rounded-[24px] sm:rounded-[28px] p-3 sm:p-3.5 border border-[#e5e7eb] shadow-[0_16px_45px_rgba(0,18,80,0.14)] z-10 transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
        style={{ left: "28px", top: "80px", width: "379px", height: "391px" }}
      >
        {/* Thumbnail Container matching FeaturedCoursesSection */}
        <div className="relative w-full aspect-[341/196] rounded-[20px] overflow-hidden bg-neutral-100">
          <Image
            src="/assets/courses/course-ui-ux-design.png"
            alt="Build Digital Asset"
            fill
            unoptimized
            className="object-cover"
          />

          {/* Actual Content Box: Lessons Pill */}
          <div className="absolute bottom-3 left-2.5 right-2.5 sm:left-3 sm:right-3 flex items-center justify-between gap-1 sm:gap-1.5 z-10 select-none">
            <span className="px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-md text-[#242528] text-[11px] font-medium border border-white/40 shadow-xs whitespace-nowrap text-center">
              17 Lessons
            </span>
          </div>
        </div>

        {/* Course Info matching FeaturedCoursesSection */}
        <div className="pt-3 pb-1 px-1">
          {/* Title & Rating */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-[18px] text-[#111827] leading-snug truncate">
              Build Digit...
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[#71717a] text-[15px] font-medium">4.5</span>
              <Star className="w-4 h-4 fill-[#b0b5be] text-[#b0b5be]" />
            </div>
          </div>

          {/* Author */}
          <p className="text-[#71717a] text-xs sm:text-sm mt-1">
            by <span className="text-[#0043ff] font-medium">purepearl studio</span>
          </p>

          {/* Level Badge and Avatars Stack */}
          <div className="flex items-center justify-between mt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f4f5] text-[#52525b] text-xs font-medium">
              <BarChart2 className="w-3.5 h-3.5 text-[#71717a]" />
              <span>Beginner</span>
            </div>

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
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-heading font-bold text-2xl text-[#0043ff] leading-none">
              $25
            </span>
            <span className="text-[#71717a] text-xs font-normal">/lifetime</span>
          </div>
        </div>
      </div>

      {/* ================= 2. FRONT MAIN CARD (Course 3: the Power of Big Data) ================= */}
      {/* Exact card structure and styling from FeaturedCoursesSection.tsx */}
      <div 
        className="absolute bg-white rounded-[24px] sm:rounded-[28px] p-3 sm:p-3.5 border border-[#e5e7eb] shadow-[0_25px_60px_rgba(0,18,80,0.26)] z-20 transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
        style={{ left: "130px", top: "0px", width: "379px", height: "388px" }}
      >
        {/* Thumbnail Container matching FeaturedCoursesSection */}
        <div className="relative w-full aspect-[341/196] rounded-[20px] overflow-hidden bg-neutral-100">
          <Image
            src="/assets/courses/course-dashboard-analytics.png"
            alt="the Power of Big Data"
            fill
            unoptimized
            priority
            className="object-cover"
          />

          {/* Actual Content Boxes: Lessons, Duration, Comments */}
          <div className="absolute bottom-3 left-2.5 right-2.5 sm:left-3 sm:right-3 flex items-center justify-between gap-1 sm:gap-1.5 z-10 select-none">
            <span className="px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-md text-[#242528] text-[11px] font-medium border border-white/40 shadow-xs whitespace-nowrap text-center">
              17 Lessons
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-md text-[#242528] text-[11px] font-medium border border-white/40 shadow-xs whitespace-nowrap text-center">
              2 hours 16 mins
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-md text-[#242528] text-[11px] font-medium border border-white/40 shadow-xs whitespace-nowrap text-center">
              59 Comments
            </span>
          </div>
        </div>

        {/* Course Info matching FeaturedCoursesSection */}
        <div className="pt-3 pb-1 px-1">
          {/* Title & Rating */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-[18px] text-[#111827] leading-snug truncate">
              the Power of Big Data
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[#1a1d1f] text-[15px] font-medium">4.5</span>
              <Star className="w-4 h-4 fill-[#d4fb20] text-[#d4fb20]" />
            </div>
          </div>

          {/* Author */}
          <p className="text-[#71717a] text-xs sm:text-sm mt-1">
            by <span className="text-[#0043ff] font-medium">purepearl studio</span>
          </p>

          {/* Level Badge and Avatars Stack */}
          <div className="flex items-center justify-between mt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f4f5] text-[#52525b] text-xs font-medium">
              <BarChart2 className="w-3.5 h-3.5 text-[#71717a]" />
              <span>Beginner</span>
            </div>

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
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-heading font-bold text-2xl text-[#0043ff] leading-none">
              $25
            </span>
            <span className="text-[#71717a] text-xs font-normal">/lifetime</span>
          </div>
        </div>
      </div>

      {/* ================= 3. HAPPY STUDENTS WIDGET ================= */}
      <div 
        className="absolute bg-[#d4fb20] rounded-[24px] px-4.5 py-3.5 shadow-[0_18px_45px_rgba(0,15,70,0.22)] z-30 transition-transform duration-300 hover:scale-[1.03]"
        style={{ left: "253px", top: "435px", width: "257px", height: "122px" }}
      >
        <h4 className="font-heading font-bold text-[15px] text-[#111827] leading-snug">
          Happy Students
        </h4>
        <div className="flex items-center gap-1.5 text-xs mt-0.5 mb-2">
          <span className="font-bold text-[#111827] text-[13px]">4.5</span>
          <span className="text-[#4b5563] text-[12px]">(240)</span>
          <Star className="w-3.5 h-3.5 fill-[#003be2] text-[#003be2] ml-0.5" />
        </div>
        <div className="w-full">
          <Image
            src="/assets/widgets/avatars-happy-students.png"
            alt="Happy Students Avatars"
            width={928}
            height={172}
            priority
            className="w-full h-auto object-contain drop-shadow-xs"
          />
        </div>
      </div>

      {/* ================= 4. 3D DECORATION: Lime Torus Ring (Top Left) ================= */}
      <div 
        className="absolute z-40 pointer-events-none drop-shadow-xl"
        style={{ left: "77px", top: "40px", width: "100px", height: "92px" }}
      >
        <Image
          src="/assets/decorations/3d-lime-torus-ring.png"
          alt="3D Lime Torus"
          width={100}
          height={92}
          priority
          className="w-full h-auto object-contain hover:rotate-6 transition-transform duration-300"
        />
      </div>

      {/* ================= 5. 3D DECORATION: Lime Pyramid / Tetrahedron (Bottom Left) ================= */}
      <div 
        className="absolute z-40 pointer-events-none drop-shadow-2xl"
        style={{ left: "27px", top: "419px", width: "124px", height: "136px" }}
      >
        <Image
          src="/assets/decorations/cta_top_right_pyramid.png"
          alt="3D Lime Pyramid"
          width={499}
          height={549}
          priority
          className="w-full h-auto object-contain hover:-rotate-3 transition-transform duration-300"
        />
      </div>

      {/* ================= 6. 3D DECORATION: White Squiggle Ribbon (Right) ================= */}
      <div 
        className="absolute z-40 pointer-events-none drop-shadow-xl"
        style={{ left: "400px", top: "330px", width: "122px", height: "141px" }}
      >
        <Image
          src="/assets/decorations/3d-white-ribbon-hero.png"
          alt="3D White Ribbon Squiggle"
          width={456}
          height={480}
          priority
          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

    </div>
  );
}
