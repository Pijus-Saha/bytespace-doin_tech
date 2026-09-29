import Image from "next/image";
import { Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
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

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-[120px] space-y-20 sm:space-y-28 lg:space-y-24">
        
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

          {/* Right Visual Composite */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center lg:justify-end items-center select-none">
            <div className="relative w-full max-w-[540px] lg:max-w-[620px] xl:max-w-[703px] transition-transform duration-500 hover:scale-[1.015]">
              <Image
                src="/assets/heroes/hero-student-male-composite.png"
                alt="Student learning with Figma course and progress widget"
                width={703}
                height={697}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* ================= BLOCK 2: FOR CREATORS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left Visual Composite */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start items-center select-none order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] xl:max-w-[587px] transition-transform duration-500 hover:scale-[1.015]">
              <Image
                src="/assets/heroes/hero-student-female-composite.png"
                alt="Course Creator analytics and student review widgets"
                width={587}
                height={719}
                priority
                className="w-full h-auto object-contain"
              />
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
