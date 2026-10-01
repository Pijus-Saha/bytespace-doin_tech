import type { Metadata } from "next";
import CourseDetailsView from "@/components/CourseDetailsView";

export const metadata: Metadata = {
  title: "Build Digital Asset: A Comprehensive Guide - ByteSpace",
  description:
    "Unlock the Power of Digital Creation with Expert Guidance. Comprehensive course on digital asset creation by PurePearl Studio.",
};

export default function CourseDetailsPage() {
  return <CourseDetailsView initialTab="about" />;
}
