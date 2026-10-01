import type { Metadata } from "next";
import CreatorProfileView from "@/components/CreatorProfileView";

export const metadata: Metadata = {
  title: "PurePearl Studio - Creator Profile | ByteSpace",
  description:
    "Explore courses, digital products, and design tutorials by PurePearl Studio on ByteSpace. Learn UI/UX design, Figma, digital assets, and data visualization.",
};

export default function CreatorsPage() {
  return <CreatorProfileView />;
}
