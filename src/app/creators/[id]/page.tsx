import type { Metadata } from "next";
import CreatorProfileView from "@/components/CreatorProfileView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const name =
    id === "purepearl" || id === "purepearl-studio"
      ? "PurePearl Studio"
      : id
          .split("-")
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" ");

  return {
    title: `${name} - Creator Profile | ByteSpace`,
    description: `Explore courses, digital products, and design tutorials by ${name} on ByteSpace.`,
  };
}

export default function CreatorDetailPage() {
  return <CreatorProfileView />;
}
