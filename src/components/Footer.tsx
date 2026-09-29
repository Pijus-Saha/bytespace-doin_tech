"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white border-t border-neutral-200/80 pt-16 sm:pt-20 pb-12">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <Image
                src="/assets/brand/logo-mark-bytespace.svg"
                alt="ByteSpace Logo Mark"
                width={29}
                height={32}
                className="w-7 h-auto"
              />
              <span className="font-heading font-bold text-2xl tracking-tight text-neutral-900">
                ByteSpace
              </span>
            </Link>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-sm mb-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-neutral-300 text-neutral-800 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#0043ff] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#d4fb20] hover:bg-[#cbfc01] text-black font-semibold text-sm px-7 py-3 rounded-full transition-colors cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            {subscribed && (
              <p className="text-sm font-medium text-emerald-600 mt-2">
                Thank you for subscribing to our updates!
              </p>
            )}

            <p className="text-xs text-neutral-400 mt-4 leading-relaxed max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-2 lg:pl-10">
            {/* Column 1 */}
            <div className="space-y-4">
              <ul className="space-y-3.5">
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    IT
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <ul className="space-y-3.5">
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <ul className="space-y-3.5">
                <li>
                  <Link href="#creators" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link href="#creators" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-700 hover:text-[#0043ff] text-sm sm:text-base transition-colors font-medium">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
