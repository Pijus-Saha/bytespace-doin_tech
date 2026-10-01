import type { Metadata } from "next";
import CourseDetailsView from "@/components/CourseDetailsView";

export const metadata: Metadata = {
  title: "Course Lessons - Build Digital Asset - ByteSpace",
  description:
    "Explore the modules and lessons for Build Digital Asset: A Comprehensive Guide on ByteSpace.",
};

export default function CourseLessonsPage() {
  return <CourseDetailsView initialTab="lessons" />;
}
