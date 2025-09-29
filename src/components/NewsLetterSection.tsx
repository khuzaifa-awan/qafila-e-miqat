"use client";

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
  placeholder = "Type your Email Address",
  buttonText = "Send Now",
  onSubmit,
  emailValidation = /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
  className = ""
}: NewsletterProps) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    
    if (onSubmit) {
      onSubmit(emailInput);
    } else {
      // Default behavior
      if (emailValidation.test(emailInput)) {
        alert("Subscribed successfully with: " + emailInput);
      } else {
        alert("Please enter a valid Gmail address (e.g., example@gmail.com)");
      }
    }
  };

  return (
    <section className={`w-full bg-[var(--accent)] py-16 text-center ${className}`}>
      <div className="max-w-3xl mx-auto">
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
          className="flex items-center bg-white rounded-none max-w-2xl mx-auto px-4"
          style={{ boxShadow: "0 8px 20px -4px rgba(0,0,0,0.15)" }}
        >
          <input
            type="email"
            name="email"
            placeholder={placeholder}
            required
            className="flex-1 px-6 py-8 text-gray-600 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="button-name cursor-pointer"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}