import Image from "next/image";
import { Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full relative overflow-hidden bg-white py-16 sm:py-20 lg:pt-[76px] lg:pb-[76px]">
      {/* Ambient background glows matching Figma design */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 45% 10%, rgba(212, 251, 32, 0.18) 0%, transparent 40%),
            radial-gradient(circle at 12% 85%, rgba(212, 251, 32, 0.22) 0%, transparent 35%),
            radial-gradient(circle at 8% 40%, rgba(0, 67, 255, 0.05) 0%, transparent 35%),
            radial-gradient(circle at 92% 80%, rgba(0, 67, 255, 0.06) 0%, transparent 40%)
          `
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-[120px] space-y-20 sm:space-y-24 lg:space-y-[100px]">
        
        {/* ================= BLOCK 1: FOR LEARNERS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] xl:text-[46px] leading-[1.15] text-[#111827] tracking-tight">
              Your Path to Professional<br className="hidden sm:inline" /> Growth Starts Here!
            </h2>
            <p className="mt-5 sm:mt-6 text-[#6b7280] font-normal text-base lg:text-[17px] leading-[1.65] max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics */}
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-14 mt-8 sm:mt-10 lg:mt-12">
              <div>
                <p className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0043ff] leading-none tracking-tight">
                  12K
                </p>
                <p className="text-[#6b7280] font-normal text-sm sm:text-base mt-2">
                  Students
                </p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0043ff] leading-none tracking-tight">
                  70+
                </p>
                <p className="text-[#6b7280] font-normal text-sm sm:text-base mt-2">
                  Courses
                </p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0043ff] leading-none tracking-tight">
                  16
                </p>
                <p className="text-[#6b7280] font-normal text-sm sm:text-base mt-2">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Element Composite */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center lg:justify-end items-center select-none">
            <div className="relative w-full max-w-[500px] lg:max-w-[560px] xl:max-w-[600px] aspect-[650/610]">
              {/* 1. Lime 3D Spring Decoration (z-30, on top of Learning Progress widget) */}
              <div className="absolute left-[75%] top-[24%] w-[18%] z-30 pointer-events-none select-none">
                <Image
                  src="/assets/decorations/3d-lime-spiral.png"
                  alt="3D Lime Decoration"
                  width={191}
                  height={251}
                  priority
                  className="w-full h-auto drop-shadow-sm"
                />
              </div>

              {/* 2. Course Card: Learn Figma from Scratch (z-0) */}
              <div className="absolute left-[6%] top-[8%] w-[58%] bg-white rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-gray-100 z-0 flex flex-col transition-transform duration-300 hover:scale-[1.015]">
                {/* Thumbnail */}
                <div className="relative w-full aspect-[338/190] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/courses/course-figma-basics.png"
                    alt="Learn Figma from Scratch"
                    fill
                    sizes="(max-width: 768px) 50vw, 360px"
                    className="object-cover"
                  />
                  {/* Badges on thumbnail */}
                  <div className="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 flex items-center gap-1.5 z-10">
                    <span className="bg-black/50 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full whitespace-nowrap">
                      17 Lessons
                    </span>
                    <span className="bg-black/50 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full whitespace-nowrap">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="mt-2.5 sm:mt-3 flex flex-col">
                  <h4 className="font-heading font-bold text-xs sm:text-base lg:text-[17px] leading-snug text-[#111827]">
                    Learn Figma from Scratch
                  </h4>
                  <p className="text-[#0043ff] font-medium text-[10px] sm:text-xs mt-0.5 sm:mt-1">
                    by purepearl studio
                  </p>

                  <div className="flex items-center justify-between mt-2.5 sm:mt-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="inline-flex items-center gap-1 bg-[#f3f4f6] text-[#4b5563] text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#4b5563]" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="3" y="12" width="4" height="8" rx="1" />
                          <rect x="10" y="8" width="4" height="12" rx="1" />
                          <rect x="17" y="4" width="4" height="16" rx="1" />
                        </svg>
                        Beginner
                      </span>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden border border-white">
                        <Image
                          src="/assets/avatars/avatar-female-yellow-bg.png"
                          alt="Author"
                          width={20}
                          height={20}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 sm:mt-2.5 pt-1.5 sm:pt-2 border-t border-gray-100 flex items-baseline">
                    <span className="font-heading font-bold text-sm sm:text-lg text-[#0043ff]">$25</span>
                    <span className="text-[#9ca3af] text-[9px] sm:text-xs font-medium ml-1">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* 3. Student Male Cutout (z-10) */}
              <div className="absolute left-[18%] top-[10%] w-[76%] z-10 pointer-events-none select-none">
                <Image
                  src="/assets/heroes/student-male-cutout.png"
                  alt="Student learning on laptop"
                  width={514}
                  height={547}
                  priority
                  className="w-full h-auto"
                />
              </div>

              {/* 4. Learning Progress Widget (z-20) */}
              <div className="absolute left-[60%] top-[44%] w-[36%] bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 z-20 transition-transform duration-300 hover:scale-[1.02]">
                <p className="text-[#374151] font-semibold text-[9px] sm:text-xs leading-none">
                  Learning Progress
                </p>
                <p className="font-heading font-extrabold text-xl sm:text-3xl lg:text-[34px] text-[#111827] mt-1 sm:mt-1.5 leading-none">
                  55%
                </p>
                <div className="w-full h-1.5 sm:h-2.5 bg-[#f3f4f6] rounded-full mt-2 sm:mt-3 overflow-hidden">
                  <div className="h-full bg-[#d4fb20] rounded-full w-[55%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 2: FOR CREATORS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left Visual Element Composite */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start items-center select-none order-2 lg:order-1">
            <div className="relative w-full max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] aspect-[640/670]">
              {/* 1. Total Revenue Widget (z-0) */}
              <div className="absolute left-[4%] top-[8%] w-[36%] bg-[#0043ff] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-white shadow-[0_16px_40px_rgba(0,67,255,0.22)] z-0 transition-transform duration-300 hover:scale-[1.02]">
                <p className="text-white text-[10px] sm:text-[13px] font-medium leading-none">
                  Total Revenue
                </p>
                <p className="text-white/70 text-[8px] sm:text-[11px] mt-0.5 sm:mt-1">
                  July 1-28
                </p>
                <p className="font-heading font-bold text-base sm:text-2xl lg:text-[26px] text-white mt-1 sm:mt-2 leading-none">
                  $120.29
                </p>
                <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full mt-2 sm:mt-3 overflow-hidden">
                  <div className="h-full bg-[#d4fb20] rounded-full w-[65%]" />
                </div>
              </div>

              {/* 2. Year to Date Widget (z-0) */}
              <div className="absolute left-[4%] top-[30%] w-[28%] bg-[#0043ff] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-white shadow-[0_16px_40px_rgba(0,67,255,0.22)] z-0 transition-transform duration-300 hover:scale-[1.02]">
                <p className="text-white text-[10px] sm:text-[13px] font-medium leading-none">
                  Year to Date
                </p>
                <p className="text-white/70 text-[8px] sm:text-[11px] mt-0.5 sm:mt-1">
                  2023
                </p>
                <p className="font-heading font-bold text-sm sm:text-xl lg:text-[22px] text-white mt-1 sm:mt-2 leading-none">
                  $1,200.38
                </p>
                <div className="mt-1.5 sm:mt-2.5">
                  <span className="inline-block bg-[#d4fb20] text-black text-[8px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full">
                    +12$
                  </span>
                </div>
              </div>

              {/* 3. Lime 3D Spring Decoration (z-20, on top of student cutout) */}
              <div className="absolute left-[56%] top-[20%] w-[39%] z-20 pointer-events-none select-none">
                <Image
                  src="/assets/decorations/3d-lime-spiral-creator-full.png"
                  alt="3D Lime Decoration"
                  width={868}
                  height={864}
                  unoptimized
                  priority
                  className="w-full h-auto drop-shadow-sm"
                />
              </div>

              {/* 4. Student Female Cutout (z-10) */}
              <div className="absolute left-[15%] top-[5%] w-[66%] z-10 pointer-events-none select-none">
                <Image
                  src="/assets/heroes/student-female-cutout.png"
                  alt="Course creator with tablet"
                  width={1641}
                  height={2421}
                  priority
                  className="w-full h-auto"
                />
              </div>

              {/* 5. Happy Students Widget (z-30) */}
              <div className="absolute left-[48%] top-[60%] w-[42%] bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 z-30 transition-transform duration-300 hover:scale-[1.02]">
                <p className="font-heading font-bold text-[#111827] text-[11px] sm:text-sm">
                  Happy Students
                </p>
                <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#374151] font-semibold mt-0.5">
                  <span>4.5</span>
                  <span className="text-[#9ca3af] font-normal">(240)</span>
                  <span className="text-yellow-400">★</span>
                </div>
                <div className="w-full mt-2 sm:mt-2.5">
                  <Image
                    src="/assets/widgets/avatars-happy-students.png"
                    alt="Happy Students Avatars"
                    width={928}
                    height={172}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] xl:text-[46px] leading-[1.15] text-[#111827] tracking-tight">
              Create & Manage<br className="hidden sm:inline" /> Courses Easily.
            </h2>
            <p className="mt-5 sm:mt-6 text-[#6b7280] font-normal text-base lg:text-[17px] leading-[1.65] max-w-xl">
              <strong className="text-[#111827] font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="space-y-4 sm:space-y-4.5 mt-8 sm:mt-10">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#0043ff] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                  <span className="font-heading font-medium text-[#111827] text-base lg:text-[18px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
