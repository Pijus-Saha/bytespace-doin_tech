import Image from "next/image";
import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section
      id="creators"
      className="w-full bg-[#003be2] text-white py-20 lg:py-0 lg:h-[488px] relative overflow-hidden flex items-center justify-center scroll-mt-20"
    >
      {/* Grid Pattern Background matching Figma 120px grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* 1440px Canvas Container matching Figma Artboard */}
      <div className="w-full max-w-[1440px] h-full mx-auto relative flex flex-col items-center justify-center px-6 sm:px-12">
        {/* Floating 3D Decorations - strictly matching section-cta.png */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          {/* 1. Top-Left: Lime Zigzag Spring */}
          <div className="absolute left-0 top-0 w-[110px] sm:w-[135px] lg:w-[165px] h-auto">
            <Image
              src="/assets/decorations/cta_top_left_zigzag.png"
              alt="3D Lime Zigzag"
              width={658}
              height={681}
              priority
              className="w-full h-auto drop-shadow-sm"
            />
          </div>

          {/* 2. Top-Left Mid: White Spring Coil */}
          <div className="hidden sm:block absolute left-[12%] lg:left-[211px] top-[24px] lg:top-[34px] w-[75px] sm:w-[95px] lg:w-[115px] h-auto">
            <Image
              src="/assets/decorations/cta_top_left_spring.png"
              alt="3D White Spring"
              width={461}
              height={488}
              className="w-full h-auto drop-shadow-sm"
            />
          </div>

          {/* 3. Bottom-Left: White Cone */}
          <div className="hidden md:block absolute left-0 top-[210px] lg:top-[242px] w-[80px] lg:w-[115px] h-auto">
            <Image
              src="/assets/decorations/cta_bottom_left_cone.png"
              alt="3D White Cone"
              width={460}
              height={609}
              className="w-full h-auto drop-shadow-sm"
            />
          </div>

          {/* 4. Bottom-Left: Lime Torus Ring */}
          <div className="hidden sm:block absolute left-[3%] lg:left-[70px] bottom-0 w-[160px] sm:w-[195px] lg:w-[238px] h-auto">
            <Image
              src="/assets/decorations/cta_bottom_left_torus.png"
              alt="3D Lime Torus"
              width={951}
              height={518}
              className="w-full h-auto drop-shadow-sm"
            />
          </div>

          {/* 5. Top-Right: Lime Pyramid / Tetrahedron */}
          <div className="hidden sm:block absolute right-[12%] lg:right-[210px] top-[16px] lg:top-[22px] w-[80px] sm:w-[100px] lg:w-[125px] h-auto">
            <Image
              src="/assets/decorations/cta_top_right_pyramid.png"
              alt="3D Lime Pyramid"
              width={499}
              height={549}
              className="w-full h-auto drop-shadow-sm"
            />
          </div>

          {/* 6. Top-Right Far: White Cylinder */}
          <div className="hidden md:block absolute right-0 top-[30px] lg:top-[41px] w-[115px] lg:w-[169px] h-auto">
            <Image
              src="/assets/decorations/cta_top_right_cylinder.png"
              alt="3D White Cylinder"
              width={677}
              height={1198}
              className="w-full h-auto drop-shadow-sm"
            />
          </div>

          {/* 7. Bottom-Right: Lime Zigzag Spring */}
          <div className="hidden sm:block absolute right-[3%] lg:right-[70px] bottom-0 w-[130px] sm:w-[155px] lg:w-[190px] h-auto">
            <Image
              src="/assets/decorations/cta_bottom_right_zigzag.png"
              alt="3D Lime Zigzag"
              width={761}
              height={642}
              className="w-full h-auto drop-shadow-sm"
            />
          </div>
        </div>

        {/* Centered Main Content matching typography & layout in section-cta.png */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-[640px] pointer-events-auto">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] leading-tight text-white max-w-[560px]">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>

          <p className="mt-5 text-white/80 font-normal text-sm sm:text-base leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <Link
            href="/register"
            className="mt-7 inline-flex items-center justify-center bg-[#d4fb20] hover:bg-[#cbfc01] text-black font-semibold text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-200 hover:shadow-[0_8px_30px_rgba(212,251,32,0.4)] hover:scale-105 active:scale-95"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
