import type { Metadata } from "next";
import CourseDetailsView from "@/components/CourseDetailsView";

export const metadata: Metadata = {
  title: "Lessons - Build Digital Asset - ByteSpace",
  description:
    "Explore modules and lessons for Build Digital Asset on ByteSpace.",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDynamicLessonsPage({ params }: PageProps) {
  const { id } = await params;
  return <CourseDetailsView initialTab="lessons" courseId={id} />;
}
