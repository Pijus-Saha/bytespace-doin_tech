import Image from "next/image";

const PARTNERS = [
  { id: 1, src: "/assets/partners/partner-logoipsum-1.png", alt: "Partner Logo 1", width: 167, height: 41 },
  { id: 2, src: "/assets/partners/partner-logoipsum-2.png", alt: "Partner Logo 2", width: 168, height: 41 },
  { id: 3, src: "/assets/partners/partner-logoipsum-3.png", alt: "Partner Logo 3", width: 170, height: 41 },
  { id: 4, src: "/assets/partners/partner-logoipsum-4.png", alt: "Partner Logo 4", width: 170, height: 41 },
  { id: 5, src: "/assets/partners/partner-logoipsum-5.png", alt: "Partner Logo 5", width: 169, height: 42 },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-[#f5f5f6] py-16 lg:py-[80px]">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 overflow-x-auto no-scrollbar sm:overflow-visible py-1">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                unoptimized
                className="h-7 sm:h-9 lg:h-[42px] w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
