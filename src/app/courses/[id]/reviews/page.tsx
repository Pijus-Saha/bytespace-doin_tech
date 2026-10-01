import type { Metadata } from "next";
import CourseDetailsView from "@/components/CourseDetailsView";

export const metadata: Metadata = {
  title: "Reviews - Build Digital Asset - ByteSpace",
  description:
    "Student reviews and ratings for Build Digital Asset on ByteSpace.",
};

export default function CourseDynamicReviewsPage() {
  return <CourseDetailsView initialTab="reviews" />;
}
