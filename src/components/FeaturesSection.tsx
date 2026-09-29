import Image from "next/image";
import { Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full ambient-glow-section py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16 space-y-24 sm:space-y-32 lg:space-y-36">
        
        {/* ================= BLOCK 1: FOR LEARNERS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[46px] leading-[1.18] text-neutral-900 tracking-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 text-neutral-500 font-normal text-base sm:text-lg leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-10 sm:mt-12 pt-4">
              <div>
                <p className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#0043ff]">
                  12K
                </p>
                <p className="text-neutral-500 font-medium text-sm sm:text-base mt-1">
                  Students
                </p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#0043ff]">
                  70+
                </p>
                <p className="text-neutral-500 font-medium text-sm sm:text-base mt-1">
                  Courses
                </p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#0043ff]">
                  16
                </p>
                <p className="text-neutral-500 font-medium text-sm sm:text-base mt-1">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Composite */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[540px] pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/assets/heroes/hero-student-male-composite.png"
                alt="Student learning with Figma course and progress widget"
                width={703}
                height={697}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* ================= BLOCK 2: FOR CREATORS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composite */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[500px] pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/assets/heroes/hero-student-female-composite.png"
                alt="Course Creator analytics and student review widgets"
                width={587}
                height={719}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[46px] leading-[1.18] text-neutral-900 tracking-tight">
              Create & Manage Courses Easily.
            </h2>
            <p className="mt-6 text-neutral-500 font-normal text-base sm:text-lg leading-relaxed max-w-xl">
              <strong className="text-neutral-900 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#0043ff] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-heading font-medium text-neutral-900 text-base sm:text-lg">
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
