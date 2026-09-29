import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    id: 1,
    name: "Design",
    image: "/assets/categories/category-ui-ux-design.png",
    href: "#courses",
  },
  {
    id: 2,
    name: "Development",
    image: "/assets/categories/category-programming-code.png",
    href: "#courses",
  },
  {
    id: 3,
    name: "IT & Software",
    image: "/assets/categories/category-web-development.png",
    href: "#courses",
  },
  {
    id: 4,
    name: "Business",
    image: "/assets/categories/category-business-finance.png",
    href: "#courses",
  },
  {
    id: 5,
    name: "Marketing",
    image: "/assets/categories/category-marketing-advertising.png",
    href: "#courses",
  },
  {
    id: 6,
    name: "Photography",
    image: "/assets/categories/category-photography-video.png",
    href: "#courses",
  },
];

export default function LearningPathsSection() {
  return (
    <section id="categories" className="w-full bg-white py-20 sm:py-24 border-t border-neutral-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[44px] leading-tight text-neutral-900">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-neutral-500 font-normal text-base sm:text-lg leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-7">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group block transition-transform duration-300 hover:-translate-y-2 hover:drop-shadow-[0_12px_24px_rgba(212,251,32,0.25)] cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-[24px] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={167}
                  height={167}
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
