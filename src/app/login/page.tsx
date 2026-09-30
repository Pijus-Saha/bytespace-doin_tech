"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import RegisterCourseCluster from "@/components/RegisterCourseCluster";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }
    setPasswordError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-[#003be2] relative overflow-x-hidden flex flex-col justify-between selection:bg-[#d4fb20] selection:text-black">
      {/* 120px Modular Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "left top",
        }}
      />

      {/* Main 1440px Container Frame */}
      <div className="relative z-10 w-full max-w-[1440px] min-h-screen mx-auto px-6 sm:px-12 lg:px-[120px] pt-[35px] pb-10 lg:pb-[122px] flex flex-col">
        
        {/* Top Header: ByteSpace Brand Logo */}
        <header className="w-full flex items-center">
          <Link
            href="/"
            className="inline-flex items-center group transition-transform duration-200 hover:scale-105 focus:outline-none"
            aria-label="ByteSpace Home"
          >
            <Image
              src="/assets/brand/logo-mark-bytespace.svg"
              alt="ByteSpace Logo"
              width={29}
              height={32}
              priority
              className="w-[29px] h-[32px] object-contain drop-shadow-sm"
            />
          </Link>
        </header>

        {/* Main Content Area: Split 2-Column Grid */}
        <main className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mt-6 lg:mt-[53px]">
          
          {/* Left Column: Heading, Subtitle & Course Cluster */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Headline */}
            <h1 className="font-heading font-semibold text-2xl sm:text-[32px] lg:text-[32px] text-white tracking-tight leading-snug">
              Sign in with ease
            </h1>

            {/* Description */}
            <p className="mt-3.5 sm:mt-4 text-white/80 font-normal text-sm sm:text-base leading-[1.65] max-w-[430px]">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>

            {/* 3D Composite Graphic Stack Composed of Real Elements */}
            <div className="mt-6 sm:mt-8 lg:mt-[72px] relative -ml-[24px]">
              <RegisterCourseCluster />
            </div>
          </div>

          {/* Right Column: Login Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[576px] lg:w-[576px] lg:h-[782px] bg-white rounded-[36px] sm:rounded-[40px] lg:rounded-[44px] px-8 sm:px-12 lg:px-[60px] pt-10 sm:pt-12 lg:pt-[56px] pb-10 sm:pb-12 lg:pb-[56px] shadow-[0_35px_80px_rgba(0,18,80,0.38)] relative flex flex-col justify-between">
              
              {isSubmitted ? (
                /* Success State */
                <div className="my-auto flex flex-col items-center text-center py-10 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#d4fb20]/30 flex items-center justify-center text-[#003be2] mb-5">
                    <CheckCircle2 className="w-10 h-10 text-[#003be2]" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">
                    Welcome Back!
                  </h2>
                  <p className="mt-3 text-neutral-600 max-w-sm text-sm sm:text-base leading-relaxed">
                    You have successfully signed in to ByteSpace.
                  </p>
                  <Link
                    href="/"
                    className="mt-8 inline-flex items-center justify-center bg-[#d4fb20] hover:bg-[#cbfc01] text-neutral-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Go to Dashboard
                  </Link>
                </div>
              ) : (
                /* Main Login Form */
                <div>
                  {/* Top Caption Link */}
                  <span className="text-[#0047ff] font-medium text-base sm:text-[16px] tracking-normal inline-block">
                    Sign In
                  </span>

                  {/* Heading */}
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[48px] text-neutral-900 tracking-tight leading-[1.12] mt-2.5 mb-8 sm:mb-10">
                    Welcome Back
                  </h2>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="login-email"
                        className="block text-sm sm:text-[15px] font-medium text-neutral-800 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="login-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="designer@example.com"
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-[16px] border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#003be2] focus:ring-2 focus:ring-[#003be2]/20 transition-all text-sm sm:text-base bg-white"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label
                        htmlFor="login-password"
                        className="block text-sm sm:text-[15px] font-medium text-neutral-800 mb-2"
                      >
                        Password
                      </label>
                      <input
                        id="login-password"
                        type="password"
                        required
                        minLength={8}
                        value={formData.password}
                        onChange={(e) => {
                          setFormData({ ...formData, password: e.target.value });
                          if (passwordError && e.target.value.length >= 8) {
                            setPasswordError("");
                          }
                        }}
                        placeholder="********"
                        className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-[16px] border ${
                          passwordError ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-neutral-200 focus:border-[#003be2] focus:ring-[#003be2]/20"
                        } text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all text-sm sm:text-base bg-white tracking-widest`}
                      />
                      {passwordError && (
                        <p className="mt-1.5 text-xs text-red-500 font-medium">
                          {passwordError}
                        </p>
                      )}
                    </div>

                    {/* Action Button: Aligned to Right */}
                    <div className="flex justify-end pt-3 sm:pt-4">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#d4fb20] hover:bg-[#cbfc01] text-neutral-950 font-semibold text-base sm:text-[17px] px-9 sm:px-11 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_4px_22px_rgba(212,251,32,0.45)] hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                      </button>
                    </div>
                  </form>

                  {/* Or divider */}
                  <div className="relative my-8 sm:my-10 flex items-center justify-center">
                    <div className="border-t border-neutral-200 w-full" />
                    <span className="bg-white px-3 text-xs sm:text-sm text-neutral-400 absolute">
                      or
                    </span>
                  </div>

                  {/* Social Buttons: 72x72 Squircle Figma assets */}
                  <div className="flex items-center justify-center gap-5">
                    <button
                      type="button"
                      aria-label="Continue with Facebook"
                      className="w-[72px] h-[72px] relative transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
                    >
                      <Image
                        src="/assets/brand/icon-social-facebook.png"
                        alt="Facebook"
                        width={72}
                        height={72}
                        priority
                        className="w-full h-full object-contain"
                      />
                    </button>
                    <button
                      type="button"
                      aria-label="Continue with Google"
                      className="w-[72px] h-[72px] relative transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
                    >
                      <Image
                        src="/assets/brand/icon-social-google.png"
                        alt="Google"
                        width={72}
                        height={72}
                        priority
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>
                </div>
              )}

              {/* Card Footer: New user? Create an account */}
              <div className="mt-8 text-center text-sm sm:text-[15px] text-neutral-600">
                New user?{" "}
                <Link
                  href="/register"
                  className="text-[#0047ff] hover:text-[#003be2] font-semibold hover:underline transition-colors ml-1"
                >
                  Create an account
                </Link>
              </div>

            </div>
          </div>

        </main>

        {/* Bottom padding anchor */}
        <div className="w-full h-1" />
      </div>
    </div>
  );
}
