import type { Metadata } from "next";
import CourseDetailsView from "@/components/CourseDetailsView";

export const metadata: Metadata = {
  title: "Course Reviews - Build Digital Asset - ByteSpace",
  description:
    "Read real student reviews and ratings for Build Digital Asset: A Comprehensive Guide on ByteSpace.",
};

export default function CourseReviewsPage() {
  return <CourseDetailsView initialTab="reviews" />;
}
