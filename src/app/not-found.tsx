"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="min-h-screen font-sans  flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <Image
              src="/not-found.svg"
              alt="404 Not Found"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* Content */}
        <div className="space-y-6">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            Lost on Your Journey?
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--foreground)" }}
          >
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/umrah-packages"
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
              style={{ backgroundColor: "var(--primary)" }}
            >
              View Umrah Packages
            </Link>

            <Link
              href="/"
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto border-2"
              style={{
                color: "var(--primary)",
                borderColor: "var(--primary)",
                backgroundColor: "transparent",
              }}
            >
              Return Home
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div
          className="mt-8 pt-4 border-t"
          style={{ borderColor: "var(--primary)", opacity: 0.6 }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--foreground)", opacity: 1 }}
          >
            Error 404 - Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
}
