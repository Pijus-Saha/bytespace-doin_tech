import Image from "next/image";
import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section id="creators" className="w-full bg-[#0043ff] text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* Floating 3D Shapes */}
      {/* Top Left: Lime Zigzag */}
      <div className="absolute -left-10 sm:-left-4 top-0 w-32 sm:w-44 lg:w-56 pointer-events-none select-none z-0">
        <Image
          src="/assets/decorations/3d-lime-zigzag.png"
          alt="3D Lime Zigzag"
          width={267}
          height={387}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Top Left Mid: White Spring */}
      <div className="absolute left-8 sm:left-24 lg:left-36 top-16 sm:top-24 w-16 sm:w-20 lg:w-28 pointer-events-none select-none z-0">
        <Image
          src="/assets/decorations/3d-white-spring-cutout.png"
          alt="3D Spring"
          width={176}
          height={176}
          className="w-full h-auto drop-shadow-xl"
        />
      </div>

      {/* Bottom Left: White Cone */}
      <div className="absolute -left-6 sm:left-6 bottom-16 sm:bottom-20 w-20 sm:w-28 lg:w-36 pointer-events-none select-none z-0">
        <Image
          src="/assets/decorations/3d-white-cone.png"
          alt="3D Cone"
          width={190}
          height={189}
          className="w-full h-auto drop-shadow-xl"
        />
      </div>

      {/* Bottom Left: White Torus */}
      <div className="absolute left-6 sm:left-16 -bottom-12 sm:-bottom-8 w-32 sm:w-44 lg:w-52 pointer-events-none select-none z-0">
        <Image
          src="/assets/decorations/3d-white-torus.png"
          alt="3D Torus"
          width={346}
          height={343}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Top Right: White Cone */}
      <div className="absolute right-12 sm:right-28 top-8 sm:top-14 w-24 sm:w-32 lg:w-40 pointer-events-none select-none z-0">
        <Image
          src="/assets/decorations/3d-white-cone.png"
          alt="3D Cone"
          width={190}
          height={189}
          className="w-full h-auto drop-shadow-xl"
        />
      </div>

      {/* Top Right Far: White Torus / Spring */}
      <div className="absolute -right-10 sm:-right-4 top-2 sm:top-8 w-36 sm:w-48 lg:w-56 pointer-events-none select-none z-0">
        <Image
          src="/assets/decorations/3d-white-torus.png"
          alt="3D Torus"
          width={346}
          height={343}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Bottom Right: Lime Zigzag */}
      <div className="absolute -right-6 sm:right-8 bottom-4 sm:bottom-8 w-32 sm:w-44 lg:w-52 pointer-events-none select-none z-0">
        <Image
          src="/assets/decorations/3d-lime-zigzag.png"
          alt="3D Lime Zigzag"
          width={267}
          height={387}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Centered Main Content */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 text-center flex flex-col items-center">
        <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight max-w-2xl text-white">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-6 text-white/80 font-normal text-base sm:text-lg leading-relaxed max-w-3xl">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link
          href="/register"
          className="mt-8 sm:mt-10 inline-block bg-[#d4fb20] hover:bg-[#cbfc01] text-black font-semibold text-base sm:text-lg px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_8px_30px_rgba(212,251,32,0.4)] hover:scale-105"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
