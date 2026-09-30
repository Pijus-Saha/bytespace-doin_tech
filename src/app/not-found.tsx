import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 – Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main 404 Hero Section */}
      <main
        className="relative w-full bg-[#003be2] overflow-hidden flex flex-col items-center justify-start"
        style={{ minHeight: "960px" }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.11) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.11) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
            backgroundPosition: "center top",
          }}
        />

        {/* Massive 404 Background Text */}
        <div
          aria-hidden="true"
          className="select-none pointer-events-none absolute left-1/2 -translate-x-1/2 font-heading font-bold leading-none tracking-normal z-0 whitespace-nowrap"
          style={{
            top: "100px",
            fontSize: "clamp(160px, 36vw, 520px)",
            background:
              "linear-gradient(to bottom, #d4fb20 0%, #8bb830 40%, rgba(0,59,226,0) 85%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        {/* Foreground Content Stack */}
        <div
          className="relative z-10 flex flex-col items-center text-center px-4 max-w-[1440px] mx-auto w-full"
          style={{ paddingTop: "clamp(380px, 46vw, 540px)" }}
        >
          {/* Main Error Headline */}
          <h1
            className="font-heading font-bold text-white text-center"
            style={{
              fontSize: "clamp(32px, 5.5vw, 72px)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h1>

          {/* Subtitle */}
          <p
            className="text-white text-center"
            style={{
              marginTop: "clamp(24px, 3vw, 40px)",
              fontSize: "clamp(14px, 1.3vw, 18px)",
              lineHeight: "1.6",
              opacity: 0.9,
            }}
          >
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home CTA Button */}
          <div style={{ marginTop: "clamp(20px, 2.5vw, 32px)" }}>
            <Link
              href="/"
              id="btn-back-to-home"
              className="inline-flex items-center justify-center rounded-full bg-[#d4fb20] hover:bg-[#cbfc01] text-black font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                width: "163px",
                height: "46px",
                fontSize: "16px",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
