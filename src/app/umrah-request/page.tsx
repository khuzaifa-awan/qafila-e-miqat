"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckBig, Plane } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { parsePhoneNumber } from "react-phone-number-input";
import { HeaderL } from "@/components/HeaderL";
import Link from "next/link";

// Zod validation schema
const travelFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
  
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (value) => {
        // Accept formats: 03XXXXXXXXX (11 digits) or +92XXXXXXXXXX (with country code)
        if (!value) return false;
        
        // Remove all spaces and dashes for validation
        const cleanNumber = value.replace(/[\s-]/g, '');
        
        // Check for Pakistani formats
        if (/^03\d{9}$/.test(cleanNumber)) return true; // 03XXXXXXXXX format
        if (/^\+923\d{9}$/.test(cleanNumber)) return true; // +923XXXXXXXXX format
        
        // Fallback to libphonenumber validation for other international formats
        return isValidPhoneNumber(value);
      },
      "Please enter a valid Pakistani phone number (03XXXXXXXXX or +923XXXXXXXXX)"
    ),
  
  preferredMonth: z
    .string()
    .min(1, "Please select your preferred travel month"),
  
  groupSize: z
    .number({ message: "Group size must be a valid number" })
    .min(1, "Group size must be at least 1 person")
    .max(20, "Group size cannot exceed 20 people"),
  
  budgetRange: z
    .string()
    .min(1, "Please select your budget range"),

  hotelStar: z
    .string()
    .min(1, "Please select your preferred Hotel Star Rating"),
});

type TravelFormData = z.infer<typeof travelFormSchema>;

export default function TravelInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<TravelFormData>({
    resolver: zodResolver(travelFormSchema),
    mode: "onChange",
  });

  const months = [
    "January (2026)", "February (2026)", "March (2026)", "April (2026)", "May (2026)", "June (2026)",
    "July (2026)", "August (2026)", "September (2026)", "October", "November", "December"
  ];

  const budgetRanges = [
    "PKR 150,000 - 250,000",
    "PKR 250,000 - 350,000",
    "PKR 350,000 - 550,000",
    "Above 500,000"
  ];
  const hotelStar = [
    "3 Star",
    "4 Star",
    "5 Star",
  ];

  const onSubmit = async (data: TravelFormData) => {
  try {
    // ✅ Convert phone into E.164 format if possible
    const parsedPhone = data.phoneNumber ? parsePhoneNumber(data.phoneNumber) : null;
    const formattedPhone = parsedPhone ? parsedPhone.number : data.phoneNumber;

    const submissionData = {
      name: data.name, // ✅ fixed (was data.fullName)
      phoneNumber: formattedPhone,
      preferredMonth: data.preferredMonth,
      groupSize: data.groupSize,
      budgetRange: data.budgetRange,
      hotelStar: data.hotelStar,
    };

    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "UmrahLeads", // ✅ must match your Google Sheet tab
        data: submissionData,
      }),
    });

    const result = await res.json();

    if (result.success) {
      console.log("✅ Umrah request form submitted:", result);
      setSubmitted(true);
    } else {
      console.error("❌ Submission failed:", result.error);
      alert("Something went wrong while submitting. Please try again.");
    }
  } catch (error) {
    console.error("❌ API error:", error);
    alert("Server error while submitting. Please try again.");
  }
};


  const handlePhoneChange = (value: string | undefined) => {
    const phoneValue = value || "";
    setPhoneNumber(phoneValue);
    setValue("phoneNumber", phoneValue, { shouldValidate: true });
  };

  

  if (submitted) {
    return (
      <div className="font-sans">
        <div className="flex justify-center items-center py-10 radial-background min-h-screen">
          <div className="bg-white/70 w-[95%] sm:w-[600px] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826]">
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CircleCheckBig size={80} className="text-green-500 mb-4" />
             <h3 className="text-2xl font-semibold text-[#AD5628] mb-6">Alhamdulillah! Your Umrah request is received.</h3>
              <p className="text-forground mb-3">JazakAllahu Khair for choosing Qafila-e-Miqat Travel & Tours.</p>
              <p className="!text-forground mb-6">Our team will guide you step by step until your Umrah is fully arranged."</p>
              <Link href="/"> 
              <button
                style={{ backgroundColor: "#AD5628", color: "#FCF6EC" }}
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg"
              >
                Go Home
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
        <HeaderL/>
      <div 
        className="flex justify-center items-center py-10 min-h-screen radial-background"
      >
        <div className="bg-white/70 w-[95%] sm:w-[600px] lg:w-[700px] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826]">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#AD5628] rounded-full flex items-center justify-center">
                <Plane size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#AD5628] mb-2">Put your details below</h2>
            <p className="text-gray-600">We’ll arrange everything.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Full Name*</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628] focus:border-[#AD5628] transition-all"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Phone Number (WhatsApp preferred)*</label>
              <div className="phone-input-container">
                <PhoneInput
                  defaultCountry="PK"
                  international
                  placeholder="03XX XXXXXXX or +92 XXX XXXXXXX"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="w-full"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Preferred Month */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Preferred Travel Month*</label>
              <select
                {...register("preferredMonth")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628] focus:border-[#AD5628] transition-all bg-white font-sans"
              >
                <option value="" className="font-sans">Select a month</option>
                {months.map((month) => (
                  <option key={month} value={month} className="font-sans">
                    {month}
                  </option>
                ))}
              </select>
              {errors.preferredMonth && (
                <p className="text-red-500 text-sm mt-1">{errors.preferredMonth.message}</p>
              )}
            </div>

            {/* Group Size */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Group Size*</label>
              <input
                type="number"
                {...register("groupSize", { valueAsNumber: true })}
                placeholder="How many people will be traveling?"
                min="1"
                max="20"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628] focus:border-[#AD5628] transition-all"
              />
              {errors.groupSize && (
                <p className="text-red-500 text-sm mt-1">{errors.groupSize.message}</p>
              )}
            </div>

            {/* Budget Range */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Budget Range (per person)*</label>
              <select
                {...register("budgetRange")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628] focus:border-[#AD5628] transition-all bg-white font-sans"
              >
                <option value="" className="font-sans">Select your budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="font-sans">
                    {range}
                  </option>
                ))}
              </select>
              {errors.budgetRange && (
                <p className="text-red-500 text-sm mt-1">{errors.budgetRange.message}</p>
              )}
            </div>

            {/* Hotel Star Ratings */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Hotel Preference*</label>
              <select
                {...register("hotelStar")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628] focus:border-[#AD5628] transition-all bg-white font-sans"
              >
                <option value="" className="font-sans">Select Hotel Star Rating</option>
                {hotelStar.map((range) => (
                  <option key={range} value={range} className="font-sans">
                    {range}
                  </option>
                ))}
              </select>
              {errors.hotelStar && (
                <p className="text-red-500 text-sm mt-1">{errors.hotelStar.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!isValid}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isValid
                    ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b] hover:shadow-lg transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Submit Travel Inquiry
              </button>
            </div>

            {/* Note */}
            <div className="text-center">
              <p className="text-sm text-gray-500 italic">
                * All fields are required. Your details help us design the perfect Umrah package for you.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Global styles for phone input */}
      <style jsx global>{`
        .phone-input-container .PhoneInputInput {
          padding: 12px !important;
          border: 1px solid #d1d5db !important;
          border-radius: 8px !important;
          font-size: 16px !important;
          transition: all 0.2s !important;
          width: 100% !important;
        }
        .phone-input-container .PhoneInputInput:focus {
          outline: none !important;
          border-color: #AD5628 !important;
          box-shadow: 0 0 0 2px rgba(173, 86, 40, 0.2) !important;
        }
        .phone-input-container .PhoneInputCountrySelect {
          border: 1px solid #d1d5db !important;
          border-radius: 8px 0 0 8px !important;
          padding: 12px 8px !important;
        }
        .phone-input-container .PhoneInputCountrySelect:focus {
          border-color: #AD5628 !important;
          box-shadow: 0 0 0 2px rgba(173, 86, 40, 0.2) !important;
        }
      `}</style>
    </div>
  );
}