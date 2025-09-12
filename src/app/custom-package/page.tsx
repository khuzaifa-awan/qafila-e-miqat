"use client";

import { useState, useEffect } from "react";
import { CircleCheckBig, CircleArrowDown } from "lucide-react";
import Image from "next/image";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CustomPackagePage() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isStepValid, setIsStepValid] = useState(false);

  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [dateError, setDateError] = useState<string | null>(null);

  const [nameError, setNameError] = useState<string | null>(null);

  const router = useRouter();

  // Steps and progress calculation
  const steps = ["Preferences", "Travel", "Details"];
  const totalSteps = steps.length + 1;
  const progressSteps = ["17%", "50%", "85%", "100%"];
  const progressWidth = submitted ? "100%" : progressSteps[currentStep];

  // Validate inputs for the current step
 const validateStep = () => {
  const form = document.querySelector("form") as HTMLFormElement;
  if (!form) return;

  const inputs = form.querySelectorAll(
    `[data-step="${currentStep}"] input[required], [data-step="${currentStep}"] select[required], [data-step="${currentStep}"] textarea[required]`
  );

  let isValid = true;

  inputs.forEach((input: any) => {
    if (!input.value.trim()) {
      isValid = false;
    }
  });

  // ✅ Validate phone number on step 3
  if (currentStep === 2 && (!phoneNumber || !isValidPhoneNumber(phoneNumber))) {
    isValid = false;
  }

  // ✅ Validate name on step 3
  if (currentStep === 2 && nameError) {
    isValid = false;
  }

  // ✅ Validate dates on step 2
  if (
    currentStep === 1 &&
    (!departureDate ||
      !arrivalDate ||
      new Date(arrivalDate) <= new Date(departureDate))
  ) {
    isValid = false;
  }

  setIsStepValid(isValid);
};


  // Handle next step
  const handleNext = () => {
    if (currentStep < totalSteps - 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle previous step
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Convert to E.164 format
  const parsedPhone = phoneNumber ? parsePhoneNumber(phoneNumber) : null;
  const formattedPhone = parsedPhone ? parsedPhone.number : phoneNumber;

  console.log("Submitted Phone:", formattedPhone);

    setCurrentStep(totalSteps - 1);
    setTimeout(() => setSubmitted(true), 500);
    router.push("/thank-you?from=custom-package");
  };

  useEffect(() => {
    validateStep();
  }, [currentStep]);

  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const announcements: string[] = [
    "✨ October Packages Are Live 🕋",
    "⏳ Limited seats for October Umrah. Reserve today!",
    "🎉 Special Group Discounts Available",
    "🌟 VIP Services Available for Premium Experience"
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentAnnouncementIndex(
        (prevIndex) => (prevIndex + 1) % announcements.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="font-sans">
      {/* ✅ Hero Section */}
        <section className="relative w-full h-screen bg-center flex flex-col items-center justify-center">
            {/* ✅ Announcement Bar */}
            <div className="absolute top-0 left-0 w-full z-30">
              <div className="bg-[#C69C4F] text-[#FCF6EC] text-center py-2.5">
                <div
                  key={currentAnnouncementIndex}
                  className="animate-slideIn text-sm sm:text-base font-medium"
                >
                  {announcements[currentAnnouncementIndex]}
                </div>
              </div>
            </div>

            {/* ✅ Header */}
            <header className="absolute top-12 left-0 w-full px-8 sm:px-14 lg:px-24 flex justify-between items-center z-30">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="Qafila-e-Miqat Travel and Tours"
                  width={60}
                  height={90}
                  priority
                  className={`${
                    isVisible ? "animate-zoom" : "opacity-0"
                  } w-12 h-16 sm:w-16 sm:h-24`}
                />
              </Link>

              {/* Home Button */}
              <Link href="/custom-package">
                <button
                  style={{ backgroundColor: "#AD5628", color: "#FCF6EC" }}
                  className="px-4 py-2 sm:px-8 sm:py-3.5 rounded-md font-medium text-sm sm:text-base 
                            transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg"
                >
                  Home
                </button>
              </Link>
          </header>
            {/* ✅ Hero Image */}
            <div className="absolute inset-0 w-full h-full z-10">
              <Image
                src="/images/hero-second.svg"
                alt="Umrah Journey Images"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

             <h1
                className="absolute z-20 text-accent 
                          text-6xl sm:text-6xl md:text-9xl font-bold text-center tracking-wide 
                          top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          animate-fadeIn whitespace-pre-line
                          drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]
                          sm:drop-shadow-[0_6px_14px_rgba(0,0,0,0.4)]"
              >
                MADE JUST{"\n"}FOR YOU
              </h1>

              {/* ✅ Customized My Journey Button */}
              <button onClick={() => {
                      const formSection = document.getElementById("form-section");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                className="absolute 
                          top-[55%] left-1/2 transform -translate-x-1/2 
                          flex items-center gap-3 
                          bg-[#FCF6EC] text-gray-800 font-medium 
                          text-base sm:text-lg 
                          px-4 sm:px-8 py-2.5 sm:py-3.5 
                          rounded-full shadow-lg 
                          transition-all duration-300 
                          hover:scale-105 hover:shadow-2xl 
                          min-w-[280px] sm:min-w-[320px] 
                          whitespace-nowrap z-20"
              >
                Customized My Journey
                <CircleArrowDown className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" />
              </button>
             
          </section>


      {/* ✅ Form Section */}
      <div id="form-section" className="flex justify-center items-center py-10 radial-background">
        <div className="bg-white w-[95%] sm:w-[800px] md:w-[1000px] lg:w-[1138px] max-h-[90vh] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826] overflow-y-auto">
          {/* Progress Tracker */}
          <div className="relative flex justify-between items-center mb-8">
            <div className="absolute top-[15px] left-0 w-full h-[6px] bg-[#f1e7de] rounded-full"></div>
            <div
              className="absolute top-[15px] left-0 h-[6px] bg-[#AD5628] rounded-full transition-all duration-500"
              style={{ width: progressWidth }}
            ></div>

            {steps.map((label, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative z-10 w-full"
              >
                <div
                  className={`w-9 h-9 flex justify-center items-center rounded-full font-semibold transition-all duration-300 ${
                    index === currentStep
                      ? "bg-[#AD5628] text-white shadow-lg"
                      : index < currentStep
                      ? "bg-[#AD5628] text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="mt-2 text-xs font-semibold text-gray-700">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {!submitted ? (
            <>
              <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {currentStep === 0 && (
                <div data-step="0" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Your Preferences</h2>

                  <label className="block mb-2 font-semibold">Transport Choice*</label>
                  <select
                    name="transport_choice"
                    required
                    onChange={validateStep}
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  >
                    <option value="">Select transport</option>
                    <option value="public">Public Shuttle</option>
                    <option value="private">Private Car</option>
                  </select>

                  <label className="block mb-2 font-semibold">Special Requests (optional)</label>
                  <textarea
                    name="special_requests"
                    rows={3}
                    placeholder="Wheelchair, meals, ziyarah, etc..."
                    onChange={validateStep}
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  <label className="block mb-3 font-semibold">What's most important for you in this Umrah trip?</label>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {[
                      { value: "near_haram", label: "Staying close to Haram" },
                      { value: "luxury", label: "Luxury and comfort" },
                      { value: "budget-friendly", label: "Budget-friendly options" },
                      { value: "private-transport", label: "Private transport" },
                      { value: "guided-ziyarah", label: "Guided ziyarah experience" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2">
                        <input type="radio" name="priority" value={option.value} required onChange={validateStep} />
                        {option.label}
                      </label>
                    ))}
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid}
                      className={`px-5 py-3 rounded-lg font-semibold transition-all ${
                        isStepValid ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 1 && (
                <div data-step="1" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Travel Details</h2>

                  {/* Departure Date */}
                  <label className="block mb-2 font-semibold">Preferred Departure Date*</label>
                  <input
                    type="date"
                    name="travel_date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={departureDate}
                    onChange={(e) => {
                      setDepartureDate(e.target.value);
                      // Reset arrival date if invalid
                      if (arrivalDate && new Date(arrivalDate) <= new Date(e.target.value)) {
                        setArrivalDate("");
                        setDateError("Arrival date must be after departure date");
                      } else {
                        setDateError(null);
                      }
                      validateStep();
                    }}
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {/* Arrival Date */}
                  <label className="block mb-2 font-semibold">Preferred Arrival Date*</label>
                  <input
                    type="date"
                    name="arrival_date"
                    required
                    min={
                      departureDate
                        ? new Date(new Date(departureDate).setDate(new Date(departureDate).getDate() + 1))
                            .toISOString()
                            .split("T")[0]
                        : new Date().toISOString().split("T")[0]
                    }
                    value={arrivalDate}
                    onChange={(e) => {
                      if (new Date(e.target.value) <= new Date(departureDate)) {
                        setDateError("Arrival date must be after departure date");
                      } else {
                        setDateError(null);
                      }
                      setArrivalDate(e.target.value);
                      validateStep();
                    }}
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {dateError && <p className="text-red-500 text-sm">{dateError}</p>}
                  <label className="block mb-2 font-semibold">Number of Travelers*</label>
                  <input type="number" name="travelers" min="1" placeholder="Total travelers" required onChange={validateStep} className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]" />

                  <label className="block mb-2 font-semibold">Preferred Hotel Category*</label>
                  <select name="hotel_category" required onChange={validateStep} className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]">
                    <option value="">Select category</option>
                    <option value="3-star">3 Star</option>
                    <option value="4-star">4 Star</option>
                    <option value="5-star">5 Star</option>
                  </select>

                  <label className="block mb-2 font-semibold">Room Preference*</label>
                  <select name="room_preference" required onChange={validateStep} className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]">
                    <option value="">Select room</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="triple">Triple</option>
                    <option value="quad">Quad</option>
                  </select>

                  <div className="flex justify-between gap-3">
                    <button type="button" onClick={handlePrev} className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all">Back</button>
                    <button type="button" onClick={handleNext} disabled={!isStepValid} className={`px-5 py-3 rounded-lg font-semibold transition-all ${isStepValid ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>Next</button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {currentStep === 2 && (
                <div data-step="2" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Your Details</h2>

                  <label className="block mb-2 font-semibold">Full Name*</label>
<input
  type="text"
  name="fullname"
  placeholder="Enter your full name"
  required
  onChange={(e) => {
    const value = e.target.value;
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(value)) {
      setNameError("Name can only contain letters and spaces");
    } else {
      setNameError(null);
    }
    validateStep();
  }}
  className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
/>
{nameError && <p className="text-red-500 text-sm">{nameError}</p>}


                  <label className="block mb-2 font-semibold">Contact Number*(WhatsApp preferred)</label>
                    <PhoneInput
                        defaultCountry="PK"
                        international
                        placeholder="03XX XXXXXXX or +92 XXX XXXXXXX"
                        value={phoneNumber}
                        onChange={(value) => {
                          setPhoneNumber(value || "");
                          if (value && isValidPhoneNumber(value)) {
                            setPhoneError(null);
                          } else {
                            setPhoneError("Please enter a valid phone number");
                          }
                          validateStep();
                        }}
                        className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                      />
                      {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

                  <label className="block mb-2 font-semibold">Email Address*</label>
                  <input type="email" name="email" placeholder="Enter your email" required onChange={validateStep} className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]" />

                  <label className="block mb-2 font-semibold">Departure City*</label>
                  <input type="text" name="departure_city" placeholder="Enter city" required onChange={validateStep} className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#AD5628]" />

                  <div className="flex gap-3">
                    <button type="button" onClick={handlePrev} className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all">Back</button>
                    <button type="submit" disabled={!isStepValid} className={`flex-1 py-3 rounded-lg font-semibold transition-all ${isStepValid ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>Submit</button>
                  </div>
                </div>
              )}
            </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CircleCheckBig size={80} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold">Booking Reserved</h3>
              <p className="text-gray-600 mt-2">
                We look forward to guiding you on your sacred journey.
              </p>
              <Link href="/">
                <button
                  style={{ backgroundColor: "#AD5628", color: "#FCF6EC" }}
                  className="px-4 py-2 sm:px-8 sm:py-3.5 mt-12 rounded-md font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg"
                >
                  Back to Home
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

