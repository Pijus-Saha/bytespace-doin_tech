import type { Metadata } from "next";
import CourseDetailsView, { TabType } from "@/components/CourseDetailsView";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}

const COURSE_TITLES: Record<string, string> = {
  "1": "Learn Figma from Basic",
  "2": "Build Digital Asset: A Comprehensive Guide",
  "build-digital-asset": "Build Digital Asset: A Comprehensive Guide",
  "3": "The Power of Big Data",
  "4": "Balancing Productivity and Creativity",
  "5": "Mastering Money Management",
  "6": "From Idea to Startup Success",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const courseTitle =
    COURSE_TITLES[id] ||
    id
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

  return {
    title: `${courseTitle} - ByteSpace`,
    description:
      "Unlock the Power of Digital Creation with Expert Guidance. Learn on ByteSpace with industry leaders.",
  };
}

export default async function CourseDynamicPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const tabParam = resolvedSearchParams?.tab?.toLowerCase();

  let initialTab: TabType = "about";
  if (tabParam === "lessons" || tabParam === "lesson") {
    initialTab = "lessons";
  } else if (tabParam === "reviews" || tabParam === "review") {
    initialTab = "reviews";
  }

  const courseTitle =
    COURSE_TITLES[id] ||
    id
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

  return (
    <CourseDetailsView
      initialTab={initialTab}
      courseId={id}
      courseTitle={courseTitle}
    />
  );
}
