import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/avatars/avatar-female-yellow-bg.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/avatars/avatar-male-senior.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/avatars/avatar-male-glasses.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full ambient-glow-section py-24 sm:py-32 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[46px] leading-[1.18] text-neutral-900 tracking-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-neutral-500 font-normal text-base sm:text-lg leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100 flex flex-col justify-start hover:shadow-[0_16px_40px_rgba(0,67,255,0.07)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* User Avatar */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden relative mb-6 shrink-0 ring-4 ring-neutral-50">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-heading font-semibold text-xl text-neutral-900">
                {t.name}
              </h3>
              <p className="text-[#0043ff] font-medium text-sm mt-0.5 mb-6">
                {t.role}
              </p>

              {/* Quote */}
              <p className="text-neutral-600 font-normal text-base sm:text-base leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
