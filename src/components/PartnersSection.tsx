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
    <section className="w-full bg-white py-12 sm:py-16 border-b border-neutral-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-105"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
