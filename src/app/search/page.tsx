import { Suspense } from "react";
import type { Metadata } from "next";
import SearchPageContent from "@/components/SearchPageContent";

export const metadata: Metadata = {
  title: "Search Courses - ByteSpace",
  description:
    "Find your next course on ByteSpace. Browse hundreds of courses across design, web development, data science, marketing, business, and more.",
};

export default function SearchPage() {
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
