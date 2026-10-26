import type { Metadata } from "next";
import CourseDetailsView from "@/components/CourseDetailsView";

export const metadata: Metadata = {
  title: "Reviews - Build Digital Asset - ByteSpace",
  description:
    "Student reviews and ratings for Build Digital Asset on ByteSpace.",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDynamicReviewsPage({ params }: PageProps) {
  const { id } = await params;
  return <CourseDetailsView initialTab="reviews" courseId={id} />;
}
