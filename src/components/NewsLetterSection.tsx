"use client";
import { useState } from "react";

interface NewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  emailValidation?: RegExp;
  className?: string;
}

export default function Newsletter({
  title = "Get Our Newsletter",
  description = "Receive fresh Packages straight in your inbox. Join now and never miss a thing.",
  placeholder = "Enter email address",
  buttonText = "Send Now",
  onSubmit,
  emailValidation = /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
  className = ""
}: NewsletterProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailInput = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    if (!emailValidation.test(emailInput)) {
      alert("Please enter a valid Gmail address (e.g., example@gmail.com)");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "NewsLetterSubscribers",
          data: { email: emailInput },
        }),
      });

      const result = await res.json();

      if (result.success) {
        console.log("✅ Newsletter subscription saved:", result);
        alert("Subscribed successfully with: " + emailInput);
      } else {
        console.error("❌ Submission failed:", result.error);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ API error:", error);
      alert("Server error while subscribing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`w-full bg-[var(--accent)] py-16 text-center ${className}`}>
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
          {title}
        </h2>
        <p className="text-lg text-[var(--foreground)] mb-10">
          {description}
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-none max-w-2xl mx-auto overflow-hidden gap-3 sm:gap-0 p-3 sm:p-0"
          style={{ boxShadow: "0 8px 20px -4px rgba(0,0,0,0.15)" }}
        >
          <input
            type="email"
            name="email"
            placeholder={placeholder}
            required
            className="flex-1 py-4 sm:py-8 px-4 text-gray-600 placeholder-gray-400 focus:outline-none min-w-0"
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 sm:py-4 whitespace-nowrap rounded-lg sm:rounded-none font-semibold transition-all flex items-center justify-center gap-2 shadow-md sm:shadow-none ${
              !isSubmitting
                ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 !text-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="hidden sm:inline">Sending...</span>
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>
    </section>
  );
}