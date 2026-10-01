import type { Metadata } from "next";
import CourseDetailsView, { TabType } from "@/components/CourseDetailsView";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const title =
    id === "build-digital-asset" || id === "2"
      ? "Build Digital Asset: A Comprehensive Guide - ByteSpace"
      : `Course Details - ${id} - ByteSpace`;

  return {
    title,
    description:
      "Unlock the Power of Digital Creation with Expert Guidance. Learn digital asset creation on ByteSpace.",
  };
}

export default async function CourseDynamicPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const tabParam = resolvedSearchParams?.tab?.toLowerCase();

  let initialTab: TabType = "about";
  if (tabParam === "lessons" || tabParam === "lesson") {
    initialTab = "lessons";
  } else if (tabParam === "reviews" || tabParam === "review") {
    initialTab = "reviews";
  }

  return <CourseDetailsView initialTab={initialTab} />;
}
