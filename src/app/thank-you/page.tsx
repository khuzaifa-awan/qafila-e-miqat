"use client";

import Image from "next/image";
import { CircleCheckBig, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { HeaderT } from "@/components/HeaderT";

export default function ThankYouPage() {
  return (
    <div className="font-sans bg-[url('/thank-you-bg.svg')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col relative">
      <HeaderT />

      {/* ✅ Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-5 lg:gap-20 px-6 sm:px-10 lg:px-20 pt-2 lg:pt-4 flex-grow">
        
        {/* ✅ Illustration (Top on mobile, Right on desktop) */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 relative flex justify-center">
          {/* Illustration */}
          <Image
            src="/islamic-new-year-animate.svg"
            alt="Booking Illustration"
            width={600}
            height={600}
            className="relative z-10 w-54 sm:w-80 lg:w-[600px] h-auto"
          />
        </div>

        {/* ✅ Text Content (Below illustration on mobile, Left on desktop) */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2 space-y-1 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
          <h2 className="text-foreground text-normal space-y-1 sm:text-xl font-bold">
            Alhumdulillah! We’ve got your details
          </h2>

          <h1 className="flex items-center justify-center lg:justify-start gap-3 text-xl sm:text-4xl lg:text-5xl font-extrabold text-foreground drop-shadow">
            <CircleCheckBig className="w-12 h-12 text-green-600" />
            <span className="drop-shadow">Thank You for Booking!</span>
          </h1>

          <p className="text-foreground text-left text-base sm:text-lg leading-relaxed">
            We’re truly honored to be part of your spiritual journey!
            <br />
            One of our Umrah experts will reach out shortly to finalize your package and guide you through the next steps. JazakAllahu Khair for choosing Qafila-e-Miqat Travel & Tours.
            <br />
            <br />
            If you have any questions prior to your journey feel free to contact us
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a
              href="mailto:qafilaemiqat@gmail.com"
              className="flex items-center gap-2 bg-[#AD5628] text-white font-medium px-5 py-3 rounded-md shadow-md hover:opacity-90 transition"
            >
              <Mail className="w-5 h-5" />
              qafilaemiqat@gmail.com
            </a>
            <a
              href="https://wa.me/923455631563"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#AD5628] text-[#AD5628] font-medium px-5 py-3 rounded-md shadow-md hover:bg-[#AD5628] hover:text-white transition"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              Chat with us
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Dua */}
      <div className="absolute bottom-2 w-full mb-4 px-2 pb-4 text-center">
        <p className="text-foreground text-sm sm:text-base italic">
          <b> Allahumma Taqabbal</b> - May Allah accept your intention and grant you a blessed Umrah journey!
        </p>
      </div>
    </div>
  );
}
