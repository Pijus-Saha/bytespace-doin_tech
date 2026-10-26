import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shopping Cart | ByteSpace",
  description: "View and manage items in your ByteSpace shopping cart.",
};

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Cart Banner */}
      <main className="flex-1 bg-white pt-28 sm:pt-36 pb-20">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-neutral-500 text-sm sm:text-base mt-2">
              Review your selected courses and proceed to checkout
            </p>
          </div>

          {/* Empty Cart State */}
          <div className="max-w-md mx-auto bg-neutral-50 border border-neutral-200/90 rounded-3xl p-8 sm:p-12 text-center shadow-xs flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#0043ff]/10 flex items-center justify-center text-[#0043ff] mb-6">
              <ShoppingBag className="w-10 h-10 stroke-[1.8]" />
            </div>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900">
              Your cart is empty
            </h2>
            <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
              Looks like you haven&apos;t added any courses yet. Discover our top courses and start learning today!
            </p>

            <Link
              href="/search"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[#d4fb20] hover:bg-[#cbfc01] text-black font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
