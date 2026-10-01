import type { Metadata } from "next";
import CourseDetailsView from "@/components/CourseDetailsView";

export const metadata: Metadata = {
  title: "Lessons - Build Digital Asset - ByteSpace",
  description:
    "Explore modules and lessons for Build Digital Asset on ByteSpace.",
};

export default function CourseDynamicLessonsPage() {
  return <CourseDetailsView initialTab="lessons" />;
}
