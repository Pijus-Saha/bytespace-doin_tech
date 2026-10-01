import { Suspense } from "react";
import type { Metadata } from "next";
import SearchPageContent from "@/components/SearchPageContent";

export const metadata: Metadata = {
  title: "Explore Courses - ByteSpace",
  description:
    "Explore our complete catalog of industry-leading courses on ByteSpace. Build your skills with top creators.",
};

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#0043ff] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
