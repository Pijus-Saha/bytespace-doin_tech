"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(1);

  return (
    <header className="w-full relative z-40">
      <nav className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16 pt-8 pb-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]">
          <Image
            src="/assets/brand/logo-bytespace-header.png"
            alt="ByteSpace"
            width={171}
            height={37}
            priority
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/"
            className="text-white/95 hover:text-[#d4fb20] font-medium text-base transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#courses"
            className="text-white/80 hover:text-[#d4fb20] font-medium text-base transition-colors duration-200"
          >
            Courses
          </Link>
          <Link
            href="#creators"
            className="text-white/80 hover:text-[#d4fb20] font-medium text-base transition-colors duration-200"
          >
            Creators
          </Link>
        </div>

        {/* Right CTA / Auth controls */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/login"
            className="text-white font-medium text-base hover:text-[#d4fb20] transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-white font-medium text-base hover:text-[#d4fb20] transition-colors duration-200"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative p-2 text-white hover:text-[#d4fb20] transition-colors duration-200 rounded-full hover:bg-white/10"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#d4fb20] rounded-full ring-2 ring-[#0043ff]" />
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative p-1.5 text-white hover:text-[#d4fb20]"
          >
            <ShoppingBag className="w-6 h-6 stroke-[2]" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#d4fb20] rounded-full" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white hover:text-[#d4fb20] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#003be2] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-lg font-medium py-1"
            >
              Home
            </Link>
            <Link
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#d4fb20] text-lg font-medium py-1"
            >
              Courses
            </Link>
            <Link
              href="#creators"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#d4fb20] text-lg font-medium py-1"
            >
              Creators
            </Link>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center gap-4">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full bg-[#d4fb20] text-black font-semibold hover:bg-[#cbfc01]"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
