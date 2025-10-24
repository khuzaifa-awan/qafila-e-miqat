// "use client";

// import { useState, useEffect } from "react";
// import { CircleCheckBig, CircleArrowDown } from "lucide-react";
// import Image from "next/image";
// import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function CustomPackagePage() {
//   const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
//   const [phoneError, setPhoneError] = useState<string | null>(null);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const [isStepValid, setIsStepValid] = useState(false);

//   const [departureDate, setDepartureDate] = useState<string>("");
//   const [arrivalDate, setArrivalDate] = useState<string>("");
//   const [dateError, setDateError] = useState<string | null>(null);
//   const [nameError, setNameError] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);


//   // Form data state
//   const [formData, setFormData] = useState({
//     transport_choice: "",
//     special_requests: "",
//     priority: "",
//     adults: "",
//     children: "",
//     infants: "",
//     hotel_category: "",
//     room_preference: "",
//     fullname: "",
//     email: "",
//     departure_city: "",
//   });

//   const router = useRouter();

//   const steps = ["Preferences", "Travel", "Details"];
//   const totalSteps = steps.length + 1;
//   const progressSteps = ["17%", "50%", "85%", "100%"];
//   const progressWidth = submitted ? "100%" : progressSteps[currentStep];

//   // Handle input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Special validation for fullname
//     if (name === "fullname") {
//       const nameRegex = /^[A-Za-z ]+$/;
//       if (value && !nameRegex.test(value)) {
//         setNameError("Name can only contain letters and spaces");
//       } else {
//         setNameError(null);
//       }
//     }
//   };

//   // Validate current step
//   const validateStep = () => {
//     let isValid = true;

//     if (currentStep === 0) {
//       // Step 1: Preferences
//       if (!formData.transport_choice || !formData.priority) {
//         isValid = false;
//       }
//     } else if (currentStep === 1) {
//       // Step 2: Travel Details
//       if (
//         !departureDate ||
//         !arrivalDate ||
//         !formData.adults ||
//         !formData.hotel_category ||
//         !formData.room_preference ||
//         new Date(arrivalDate) <= new Date(departureDate)
//       ) {
//         isValid = false;
//       }
//     } else if (currentStep === 2) {
//       // Step 3: Personal Details
//       if (
//         !formData.fullname ||
//         !formData.email ||
//         !formData.departure_city ||
//         !phoneNumber ||
//         !isValidPhoneNumber(phoneNumber) ||
//         nameError
//       ) {
//         isValid = false;
//       }
//     }

//     setIsStepValid(isValid);
//   };

//   const handleNext = () => {
//     if (currentStep < totalSteps - 2) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   const parsedPhone = phoneNumber ? parsePhoneNumber(phoneNumber) : null;
//   const formattedPhone = parsedPhone ? parsedPhone.number : phoneNumber;

//   setIsSubmitting(true); // ⭐ Start loading

//   const submissionData = {
//     transport_choice: formData.transport_choice,
//     special_requests: formData.special_requests || "None",
//     priority: formData.priority,
//     travel_date: departureDate,
//     arrival_date: arrivalDate,
//     adults: formData.adults,
//     children: formData.children || "0",
//     infants: formData.infants || "0",
//     hotel_category: formData.hotel_category,
//     room_preference: formData.room_preference,
//     fullname: formData.fullname,
//     phoneNumber: formattedPhone,
//     email: formData.email,
//     departure_city: formData.departure_city,
//   };

//   console.log("🔍 Submission data being sent:", submissionData);

//   try {
//     // 1. Send data to Google Sheets
//     const sheetsRes = await fetch("/api/submit-form", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         formType: "CustomPackage",
//         data: submissionData,
//       }),
//     });

//     const sheetsResult = await sheetsRes.json();
//     if (!sheetsResult.success) {
//       console.error("❌ Google Sheets submission failed:", sheetsResult.error);
//       // Don't stop here - continue to send email
//     } else {
//       console.log("✅ Data saved to Google Sheets");
//     }

//     // 2. Send emails
//     const emailRes = await fetch("/api/send-email-custom", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(submissionData),
//     });

//     const emailResult = await emailRes.json();

//     if (emailResult.success) {
//       console.log("✅ Custom package form submitted successfully");
//       setCurrentStep(totalSteps - 1);
//       setTimeout(() => setSubmitted(true), 500);
//       router.push("/thank-you?from=custom-package");
//     } else {
//       console.error("❌ Email sending failed:", emailResult.error);
//       alert("Form submitted but email notification failed. We'll contact you soon!");
//     }
//   } catch (error) {
//     console.error("❌ API error:", error);
//     alert("Server error while submitting. Please try again or contact us directly.");
//   }finally {
//     setIsSubmitting(false); // ⭐ Stop loading
//   }

// };

//   useEffect(() => {
//     validateStep();
//   }, [currentStep, formData, departureDate, arrivalDate, phoneNumber, nameError]);

//   const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState<number>(0);
//   const [isVisible, setIsVisible] = useState<boolean>(false);

//   const announcements: string[] = [
//     "✨ October Packages Are Live 🕋",
//     "⏳ Limited seats for October Umrah. Reserve today!",
//     "🎉 Special Group Discounts Available",
//     "🌟 VIP Services Available for Premium Experience"
//   ];

//   useEffect(() => {
//     setIsVisible(true);

//     const interval = setInterval(() => {
//       setCurrentAnnouncementIndex(
//         (prevIndex) => (prevIndex + 1) % announcements.length
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="font-sans">
//       <section className="relative w-full h-screen bg-center flex flex-col items-center justify-center">
//         <div className="absolute top-0 left-0 w-full z-30">
//           <div className="bg-[#C69C4F] text-[#FCF6EC] text-center py-2.5">
//             <div
//               key={currentAnnouncementIndex}
//               className="animate-slideIn text-sm sm:text-base font-medium"
//             >
//               {announcements[currentAnnouncementIndex]}
//             </div>
//           </div>
//         </div>

//         <header className="absolute top-12 left-0 w-full px-8 sm:px-14 lg:px-24 flex justify-between items-center z-30">
//           <Link href="/">
//             <Image
//               src="/images/logo.svg"
//               alt="Qafila-e-Miqat Travel and Tours"
//               width={60}
//               height={90}
//               priority
//               className={`${
//                 isVisible ? "animate-zoom" : "opacity-0"
//               } w-12 h-16 sm:w-16 sm:h-24`}
//             />
//           </Link>

//           <Link href="/">
//             <button
//               style={{ backgroundColor: "#AD5628", color: "#FCF6EC" }}
//               className="px-4 py-2 sm:px-8 sm:py-3.5 rounded-md font-medium text-sm sm:text-base
//                         transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg"
//             >
//               Home
//             </button>
//           </Link>
//         </header>

//         <div className="absolute inset-0 w-full h-full z-10">
//           <Image
//             src="/images/hero-second.svg"
//             alt="Umrah Journey Images"
//             fill
//             priority
//             className="object-cover object-center"
//           />
//         </div>

//         <h1
//           className="absolute z-20 text-accent
//                     text-6xl sm:text-6xl md:text-9xl font-bold text-center tracking-wide
//                     top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                     animate-fadeIn whitespace-pre-line
//                     drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]
//                     sm:drop-shadow-[0_6px_14px_rgba(0,0,0,0.4)]"
//         >
//           MADE JUST{"\n"}FOR YOU
//         </h1>

//         <button
//           onClick={() => {
//             const formSection = document.getElementById("form-section");
//             if (formSection) {
//               formSection.scrollIntoView({ behavior: "smooth" });
//             }
//           }}
//           className="absolute
//                     top-[55%] left-1/2 transform -translate-x-1/2
//                     flex items-center gap-3
//                     bg-[#FCF6EC] text-gray-800 font-medium
//                     text-base sm:text-lg
//                     px-4 sm:px-8 py-2.5 sm:py-3.5
//                     rounded-full shadow-lg
//                     transition-all duration-300
//                     hover:scale-105 hover:shadow-2xl
//                     min-w-[280px] sm:min-w-[320px]
//                     whitespace-nowrap z-20"
//         >
//           Customized My Journey
//           <CircleArrowDown className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" />
//         </button>
//       </section>

//       <div id="form-section" className="flex justify-center items-center py-10 radial-background">
//         <div className="bg-white/65 w-[95%] sm:w-[800px] md:w-[1000px] lg:w-[1138px] max-h-[90vh] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826] overflow-y-auto">
//           <div className="relative flex justify-between items-center mb-8">
//             <div className="absolute top-[15px] left-0 w-full h-[6px] bg-[#f1e7de] rounded-full"></div>
//             <div
//               className="absolute top-[15px] left-0 h-[6px] bg-[#AD5628] rounded-full transition-all duration-500"
//               style={{ width: progressWidth }}
//             ></div>

//             {steps.map((label, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center relative z-10 w-full"
//               >
//                 <div
//                   className={`w-9 h-9 flex justify-center items-center rounded-full font-semibold transition-all duration-300 ${
//                     index === currentStep
//                       ? "bg-[#AD5628] text-white shadow-lg"
//                       : index < currentStep
//                       ? "bg-[#AD5628] text-white"
//                       : "bg-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {index + 1}
//                 </div>
//                 <span className="mt-2 text-xs font-semibold text-gray-700">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {!submitted ? (
//             <form onSubmit={handleSubmit}>
//               {/* STEP 1 */}
//               {currentStep === 0 && (
//                 <div data-step="0" className="animate-fadeIn">
//                   <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Your Preferences</h2>

//                   <label className="block mb-2 font-semibold">Transport Choice*</label>
//                   <select
//                     name="transport_choice"
//                     value={formData.transport_choice}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   >
//                     <option value="">Select transport</option>
//                     <option value="public">Public Shuttle</option>
//                     <option value="private">Private Car</option>
//                   </select>

//                   <label className="block mb-2 font-semibold">Special Requests (optional)</label>
//                   <textarea
//                     name="special_requests"
//                     value={formData.special_requests}
//                     onChange={handleInputChange}
//                     rows={3}
//                     placeholder="Wheelchair, meals, ziyarah, etc..."
//                     className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   />

//                   <label className="block mb-3 font-semibold">What's most important for you in this Umrah trip?</label>
//                   <div className="flex flex-wrap gap-4 mb-4">
//                     {[
//                       { value: "near_haram", label: "Staying close to Haram" },
//                       { value: "luxury", label: "Luxury and comfort" },
//                       { value: "budget-friendly", label: "Budget-friendly options" },
//                       { value: "private-transport", label: "Private transport" },
//                       { value: "guided-ziyarah", label: "Guided ziyarah experience" },
//                     ].map((option) => (
//                       <label key={option.value} className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="priority"
//                           value={option.value}
//                           checked={formData.priority === option.value}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         {option.label}
//                       </label>
//                     ))}
//                   </div>

//                   <div className="flex justify-end gap-3">
//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={!isStepValid}
//                       className={`px-5 py-3 rounded-lg font-semibold transition-all ${
//                         isStepValid ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       }`}
//                     >
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* STEP 2 */}
//               {currentStep === 1 && (
//                 <div data-step="1" className="animate-fadeIn">
//                   <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Travel Details</h2>

//                   <label className="block mb-2 font-semibold">Preferred Departure Date*</label>
//                   <input
//                     type="date"
//                     name="travel_date"
//                     required
//                     min={new Date().toISOString().split("T")[0]}
//                     value={departureDate}
//                     onChange={(e) => {
//                       setDepartureDate(e.target.value);
//                       if (arrivalDate && new Date(arrivalDate) <= new Date(e.target.value)) {
//                         setArrivalDate("");
//                         setDateError("Arrival date must be after departure date");
//                       } else {
//                         setDateError(null);
//                       }
//                     }}
//                     className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   />

//                   <label className="block mb-2 font-semibold">Preferred Arrival Date*</label>
//                   <input
//                     type="date"
//                     name="arrival_date"
//                     required
//                     min={
//                       departureDate
//                         ? new Date(new Date(departureDate).setDate(new Date(departureDate).getDate() + 1))
//                             .toISOString()
//                             .split("T")[0]
//                         : new Date().toISOString().split("T")[0]
//                     }
//                     value={arrivalDate}
//                     onChange={(e) => {
//                       if (new Date(e.target.value) <= new Date(departureDate)) {
//                         setDateError("Arrival date must be after departure date");
//                       } else {
//                         setDateError(null);
//                       }
//                       setArrivalDate(e.target.value);
//                     }}
//                     className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   />
//                   {dateError && <p className="text-red-500 text-sm mb-4">{dateError}</p>}

//                   <label className="block mb-2 font-semibold">Number of Travellers*</label>
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                     <input
//                       type="number"
//                       name="adults"
//                       value={formData.adults}
//                       onChange={handleInputChange}
//                       min="0"
//                       placeholder="Adults"
//                       required
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />

//                     <input
//                       type="number"
//                       name="children"
//                       value={formData.children}
//                       onChange={handleInputChange}
//                       min="0"
//                       placeholder="Child"
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />

//                     <input
//                       type="number"
//                       name="infants"
//                       value={formData.infants}
//                       onChange={handleInputChange}
//                       min="0"
//                       placeholder="Infants"
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />
//                   </div>

//                   <label className="block mb-2 font-semibold">Preferred Hotel Category*</label>
//                   <select
//                     name="hotel_category"
//                     value={formData.hotel_category}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   >
//                     <option value="">Select category</option>
//                     <option value="3-star">3 Star</option>
//                     <option value="4-star">4 Star</option>
//                     <option value="5-star">5 Star</option>
//                   </select>

//                   <label className="block mb-2 font-semibold">Room Preference*</label>
//                   <select
//                     name="room_preference"
//                     value={formData.room_preference}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   >
//                     <option value="">Select room</option>
//                     <option value="single">Single</option>
//                     <option value="double">Double</option>
//                     <option value="triple">Triple</option>
//                     <option value="quad">Quad</option>
//                   </select>

//                   <div className="flex justify-between gap-3">
//                     <button type="button" onClick={handlePrev} className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all">
//                       Back
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={!isStepValid}
//                       className={`px-5 py-3 rounded-lg font-semibold transition-all ${
//                         isStepValid ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       }`}
//                     >
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* STEP 3 */}
//               {currentStep === 2 && (
//                 <div data-step="2" className="animate-fadeIn">
//                   <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Your Details</h2>

//                   <label className="block mb-2 font-semibold">Full Name*</label>
//                   <input
//                     type="text"
//                     name="fullname"
//                     value={formData.fullname}
//                     onChange={handleInputChange}
//                     placeholder="Enter your full name"
//                     required
//                     className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   />
//                   {nameError && <p className="text-red-500 text-sm mb-4">{nameError}</p>}

//                   <label className="block mb-2 font-semibold">Contact Number* (WhatsApp preferred)</label>
//                   <PhoneInput
//                     defaultCountry="PK"
//                     international
//                     placeholder="03XX XXXXXXX or +92 XXX XXXXXXX"
//                     value={phoneNumber}
//                     onChange={(value) => {
//                       setPhoneNumber(value || "");
//                       if (value && isValidPhoneNumber(value)) {
//                         setPhoneError(null);
//                       } else {
//                         setPhoneError("Please enter a valid phone number");
//                       }
//                     }}
//                     className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   />
//                   {phoneError && <p className="text-red-500 text-sm mb-4">{phoneError}</p>}

//                   <label className="block mb-2 font-semibold">Email Address*</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Enter your email"
//                     required
//                     className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   />

//                   <label className="block mb-2 font-semibold">Departure City*</label>
//                   <input
//                     type="text"
//                     name="departure_city"
//                     value={formData.departure_city}
//                     onChange={handleInputChange}
//                     placeholder="Enter city"
//                     required
//                     className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                   />

//                   <div className="flex gap-3">
//                     <button type="button" onClick={handlePrev} className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all">
//                       Back
//                     </button>
//                     <button
//                       type="submit"
//                       disabled={!isStepValid}
//                       className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
//                         isStepValid ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       }`}
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               )}
//               {isSubmitting && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                   <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
//                     <svg className="animate-spin h-12 w-12 text-[#AD5628]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     <p className="text-lg font-semibold text-gray-700">Submitting your request...</p>
//                     <p className="text-sm text-gray-500">Please wait, this may take a few seconds</p>
//                   </div>
//                 </div>
//               )}
//             </form>
//           ) : (
//             <div className="flex flex-col items-center justify-center py-10 text-center">
//               <CircleCheckBig size={80} className="text-green-500 mb-4" />
//               <h3 className="text-2xl font-semibold">Booking Reserved</h3>
//               <p className="text-gray-600 mt-2">
//                 We look forward to guiding you on your sacred journey.
//               </p>
//               <Link href="/">
//                 <button
//                   style={{ backgroundColor: "#AD5628", color: "#FCF6EC" }}
//                   className="px-4 py-2 sm:px-8 sm:py-3.5 mt-12 rounded-md font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg"
//                 >
//                   Back to Home
//                 </button>
//               </Link
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// custom-package-phase-2
"use client";

import { useState, useEffect } from "react";
import { CircleCheckBig, CircleArrowDown } from "lucide-react";
import Image from "next/image";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import AnnouncementBar from "@/components/ui/announcementBar";

// ============================================
// ZOD SCHEMA DEFINITIONS
// ============================================

// Zod schema for Step 1: Preferences
const preferencesSchema = z.object({
  transport_choice: z.enum(["public", "private"], {
    message: "Please select a transport option",
  }),
  special_requests: z.string().optional(),
  priority: z.enum(["near_haram", "luxury", "budget-friendly", "private-transport", "guided-ziyarah"], {
    message: "Please select your priority",
  }),
});

// Zod schema for Step 2: Travel Details
const travelDetailsSchema = z.object({
  departure_date: z.string().min(1, "Departure date is required"),
  arrival_date: z.string().min(1, "Arrival date is required"),
  adults: z.string().min(1, "Number of adults is required").refine((val) => parseInt(val) > 0, {
    message: "At least one adult is required",
  }),
  children: z.string().optional(),
  infants: z.string().optional(),
  hotel_category: z.enum(["3-star", "4-star", "5-star"], {
    message: "Please select a hotel category",
  }),
  room_preference: z.enum(["single", "double", "triple", "quad"], {
    message: "Please select a room preference",
  }),
}).refine(
  (data) => {
    if (data.departure_date && data.arrival_date) {
      return new Date(data.arrival_date) > new Date(data.departure_date);
    }
    return true;
  },
  {
    message: "Arrival date must be after departure date",
    path: ["arrival_date"],
  }
);

// Zod schema for Step 3: Personal Details
const personalDetailsSchema = z.object({
  fullname: z.string()
    .min(1, "Full name is required")
    .regex(/^[A-Za-z ]+$/, "Name can only contain letters and spaces"),
  phoneNumber: z.string()
    .min(1, "Phone number is required")
    .refine((val) => isValidPhoneNumber(val), {
      message: "Please enter a valid phone number",
    }),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  departure_city: z.string().min(1, "Departure city is required"),
});

// Combined schema for complete form validation
const completeFormSchema = preferencesSchema
  .merge(travelDetailsSchema)
  .merge(personalDetailsSchema);

// Infer TypeScript types from Zod schemas
type PreferencesFormData = z.infer<typeof preferencesSchema>;
type TravelDetailsFormData = z.infer<typeof travelDetailsSchema>;
type PersonalDetailsFormData = z.infer<typeof personalDetailsSchema>;
type CompleteFormData = z.infer<typeof completeFormSchema>;

// ============================================
// COMPONENT
// ============================================

export default function CustomPackagePage() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isStepValid, setIsStepValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");

  // Zod validation errors state
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  
  // Track which fields have been touched (interacted with)
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  // Form data state
  const [formData, setFormData] = useState({
    transport_choice: "",
    special_requests: "",
    priority: "",
    adults: "",
    children: "",
    infants: "",
    hotel_category: "",
    room_preference: "",
    fullname: "",
    email: "",
    departure_city: "",
  });

  const router = useRouter();

  useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
  }, []);

  const steps = ["Preferences", "Travel", "Details"];
  const totalSteps = steps.length + 1;
  const progressSteps = ["17%", "50%", "85%", "100%"];
  const progressWidth = submitted ? "100%" : progressSteps[currentStep];

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate current step using Zod
  const validateStep = () => {
    let isValid = true;
    const errors: Record<string, string> = {};

    try {
      if (currentStep === 0) {
        // Step 1: Preferences - Validate with Zod
        const result = preferencesSchema.safeParse({
          transport_choice: formData.transport_choice,
          special_requests: formData.special_requests,
          priority: formData.priority,
        });

        if (!result.success) {
          isValid = false;
          result.error.issues.forEach((issue) => {
            errors[issue.path[0] as string] = issue.message;
          });
        }
      } else if (currentStep === 1) {
        // Step 2: Travel Details - Validate with Zod
        const result = travelDetailsSchema.safeParse({
          departure_date: departureDate,
          arrival_date: arrivalDate,
          adults: formData.adults,
          children: formData.children,
          infants: formData.infants,
          hotel_category: formData.hotel_category,
          room_preference: formData.room_preference,
        });

        if (!result.success) {
          isValid = false;
          result.error.issues.forEach((issue) => {
            const fieldName = issue.path[0] as string;
            errors[fieldName] = issue.message;
          });
        }
      } else if (currentStep === 2) {
        // Step 3: Personal Details - Validate with Zod
        const result = personalDetailsSchema.safeParse({
          fullname: formData.fullname,
          phoneNumber: phoneNumber || "",
          email: formData.email,
          departure_city: formData.departure_city,
        });

        if (!result.success) {
          isValid = false;
          result.error.issues.forEach((issue) => {
            errors[issue.path[0] as string] = issue.message;
          });
        }
      }
    } catch (error) {
      isValid = false;
      console.error("Validation error:", error);
    }

    setValidationErrors(errors);
    setIsStepValid(isValid);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 2) {
      setCurrentStep(currentStep + 1);
      setValidationErrors({}); // Clear errors when moving to next step
      setTouchedFields({}); // Clear touched fields
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setValidationErrors({}); // Clear errors when going back
      setTouchedFields({}); // Clear touched fields
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched on submit attempt
    setTouchedFields({
      transport_choice: true,
      priority: true,
      departure_date: true,
      arrival_date: true,
      adults: true,
      hotel_category: true,
      room_preference: true,
      fullname: true,
      phoneNumber: true,
      email: true,
      departure_city: true,
    });

    // Final validation with complete schema
    const completeData = {
      transport_choice: formData.transport_choice,
      special_requests: formData.special_requests,
      priority: formData.priority,
      departure_date: departureDate,
      arrival_date: arrivalDate,
      adults: formData.adults,
      children: formData.children,
      infants: formData.infants,
      hotel_category: formData.hotel_category,
      room_preference: formData.room_preference,
      fullname: formData.fullname,
      phoneNumber: phoneNumber || "",
      email: formData.email,
      departure_city: formData.departure_city,
    };

    const validationResult = completeFormSchema.safeParse(completeData);

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        errors[issue.path[0] as string] = issue.message;
      });
      setValidationErrors(errors);
      alert("Please fix the validation errors before submitting");
      return;
    }

    const parsedPhone = phoneNumber ? parsePhoneNumber(phoneNumber) : null;
    const formattedPhone = parsedPhone ? parsedPhone.number : phoneNumber;

    setIsSubmitting(true);

    const submissionData = {
      transport_choice: formData.transport_choice,
      special_requests: formData.special_requests || "None",
      priority: formData.priority,
      travel_date: departureDate,
      arrival_date: arrivalDate,
      adults: formData.adults,
      children: formData.children || "0",
      infants: formData.infants || "0",
      hotel_category: formData.hotel_category,
      room_preference: formData.room_preference,
      fullname: formData.fullname,
      phoneNumber: formattedPhone,
      email: formData.email,
      departure_city: formData.departure_city,
    };

    console.log("🔍 Submission data being sent:", submissionData);

    try {
      // 1. Send data to Google Sheets
      const sheetsRes = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "CustomPackage",
          data: submissionData,
        }),
      });

      const sheetsResult = await sheetsRes.json();
      if (!sheetsResult.success) {
        console.error("❌ Google Sheets submission failed:", sheetsResult.error);
        // Don't stop here - continue to send email
      } else {
        console.log("✅ Data saved to Google Sheets");
      }

      // 2. Send emails
      const emailRes = await fetch("/api/send-email-custom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const emailResult = await emailRes.json();

      if (emailResult.success) {
        console.log("✅ Custom package form submitted successfully");
        setCurrentStep(totalSteps - 1);
        setTimeout(() => setSubmitted(true), 500);
        router.push("/thank-you?from=custom-package");
      } else {
        console.error("❌ Email sending failed:", emailResult.error);
        alert("Form submitted but email notification failed. We'll contact you soon!");
      }
    } catch (error) {
      console.error("❌ API error:", error);
      alert("Server error while submitting. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    validateStep();
  }, [currentStep, formData, departureDate, arrivalDate, phoneNumber]);
  
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="font-sans">
      {/* Announcement Banner */}
      <AnnouncementBar/>
      <section className="relative w-full h-screen bg-center flex flex-col items-center justify-center">
        
        <header className="absolute top-12 left-0 w-full px-8 sm:px-14 lg:px-24 flex justify-between items-center z-30">
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

          <Link href="/">
            <button
              style={{ backgroundColor: "#AD5628", color: "#FCF6EC" }}
              className="px-4 py-2 sm:px-8 sm:py-3.5 rounded-md font-medium text-sm sm:text-base
                        transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg"
            >
              Home
            </button>
          </Link>
        </header>

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

        <button
          onClick={() => {
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

      <div id="form-section" className="flex justify-center items-center py-10 radial-background">
        <div className="bg-white/65 w-[95%] sm:w-[800px] md:w-[1000px] lg:w-[1138px] max-h-[90vh] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826] overflow-y-auto">
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
            <form onSubmit={handleSubmit}>
              {/* STEP 1 - Preferences */}
              {currentStep === 0 && (
                <div data-step="0" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Your Preferences</h2>

                  <label className="block mb-2 font-semibold">Transport Choice*</label>
                  <select
                    name="transport_choice"
                    value={formData.transport_choice}
                    onChange={handleInputChange}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, transport_choice: true }))}
                    required
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  >
                    <option value="">Select transport</option>
                    <option value="public">Public Shuttle</option>
                    <option value="private">Private Car</option>
                  </select>
                  {validationErrors.transport_choice && touchedFields.transport_choice && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.transport_choice}</p>
                  )}

                  <label className="block mb-2 font-semibold">Special Requests (optional)</label>
                  <textarea
                    name="special_requests"
                    value={formData.special_requests}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Wheelchair, meals, ziyarah, etc..."
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  <label className="block mb-3 font-semibold">What&apos;s most important for you in this Umrah trip?*</label>
                  <div className="flex flex-wrap gap-4 mb-2">
                    {[
                      { value: "near_haram", label: "Staying close to Haram" },
                      { value: "luxury", label: "Luxury and comfort" },
                      { value: "budget-friendly", label: "Budget-friendly options" },
                      { value: "private-transport", label: "Private transport" },
                      { value: "guided-ziyarah", label: "Guided ziyarah experience" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="priority"
                          value={option.value}
                          checked={formData.priority === option.value}
                          onChange={(e) => {
                            handleInputChange(e);
                            setTouchedFields(prev => ({ ...prev, priority: true }));
                          }}
                          required
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {validationErrors.priority && touchedFields.priority && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.priority}</p>
                  )}

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

              {/* STEP 2 - Travel Details */}
              {currentStep === 1 && (
                <div data-step="1" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Travel Details</h2>

                  <label className="block mb-2 font-semibold">Preferred Departure Date*</label>
                  <input
                    type="date"
                    name="travel_date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={departureDate}
                    onChange={(e) => {
                      setDepartureDate(e.target.value);
                      setTouchedFields(prev => ({ ...prev, departure_date: true }));
                      if (arrivalDate && new Date(arrivalDate) <= new Date(e.target.value)) {
                        setArrivalDate("");
                      }
                      // Clear validation errors
                      if (validationErrors.departure_date) {
                        setValidationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.departure_date;
                          return newErrors;
                        });
                      }
                    }}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, departure_date: true }))}
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {validationErrors.departure_date && touchedFields.departure_date && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.departure_date}</p>
                  )}

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
                      setArrivalDate(e.target.value);
                      setTouchedFields(prev => ({ ...prev, arrival_date: true }));
                      // Clear validation errors
                      if (validationErrors.arrival_date) {
                        setValidationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.arrival_date;
                          return newErrors;
                        });
                      }
                    }}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, arrival_date: true }))}
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {validationErrors.arrival_date && touchedFields.arrival_date && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.arrival_date}</p>
                  )}

                  <label className="block mb-2 font-semibold">Number of Travellers*</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                    <input
                      type="number"
                      name="adults"
                      value={formData.adults}
                      onChange={handleInputChange}
                      onBlur={() => setTouchedFields(prev => ({ ...prev, adults: true }))}
                      min="0"
                      placeholder="Adults"
                      required
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                    />

                    <input
                      type="number"
                      name="children"
                      value={formData.children}
                      onChange={handleInputChange}
                      min="0"
                      placeholder="Child"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                    />

                    <input
                      type="number"
                      name="infants"
                      value={formData.infants}
                      onChange={handleInputChange}
                      min="0"
                      placeholder="Infants"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                    />
                  </div>
                  {validationErrors.adults && touchedFields.adults && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.adults}</p>
                  )}

                  <label className="block mb-2 font-semibold">Preferred Hotel Category*</label>
                  <select
                    name="hotel_category"
                    value={formData.hotel_category}
                    onChange={handleInputChange}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, hotel_category: true }))}
                    required
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  >
                    <option value="">Select category</option>
                    <option value="3-star">3 Star</option>
                    <option value="4-star">4 Star</option>
                    <option value="5-star">5 Star</option>
                  </select>
                  {validationErrors.hotel_category && touchedFields.hotel_category && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.hotel_category}</p>
                  )}

                  <label className="block mb-2 font-semibold">Room Preference*</label>
                  <select
                    name="room_preference"
                    value={formData.room_preference}
                    onChange={handleInputChange}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, room_preference: true }))}
                    required
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  >
                    <option value="">Select room</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="triple">Triple</option>
                    <option value="quad">Quad</option>
                  </select>
                  {validationErrors.room_preference && touchedFields.room_preference && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.room_preference}</p>
                  )}

                  <div className="flex justify-between gap-3">
                    <button type="button" onClick={handlePrev} className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all">
                      Back
                    </button>
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

              {/* STEP 3 - Personal Details */}
              {currentStep === 2 && (
                <div data-step="2" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Your Details</h2>

                  <label className="block mb-2 font-semibold">Full Name*</label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, fullname: true }))}
                    placeholder="Enter your full name"
                    required
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {validationErrors.fullname && touchedFields.fullname && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.fullname}</p>
                  )}

                  <label className="block mb-2 font-semibold">Contact Number* (WhatsApp preferred)</label>
                  <PhoneInput
                    defaultCountry="PK"
                    international
                    placeholder="03XX XXXXXXX or +92 XXX XXXXXXX"
                    value={phoneNumber}
                    onChange={(value) => {
                      setPhoneNumber(value || "");
                      setTouchedFields(prev => ({ ...prev, phoneNumber: true }));
                      // Clear validation errors
                      if (validationErrors.phoneNumber) {
                        setValidationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.phoneNumber;
                          return newErrors;
                        });
                      }
                    }}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, phoneNumber: true }))}
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {validationErrors.phoneNumber && touchedFields.phoneNumber && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.phoneNumber}</p>
                  )}

                  <label className="block mb-2 font-semibold">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, email: true }))}
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {validationErrors.email && touchedFields.email && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.email}</p>
                  )}

                  <label className="block mb-2 font-semibold">Departure City*</label>
                  <input
                    type="text"
                    name="departure_city"
                    value={formData.departure_city}
                    onChange={handleInputChange}
                    onBlur={() => setTouchedFields(prev => ({ ...prev, departure_city: true }))}
                    placeholder="Enter city"
                    required
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {validationErrors.departure_city && touchedFields.departure_city && (
                    <p className="text-red-500 text-sm mb-4">{validationErrors.departure_city}</p>
                  )}

                  <div className="flex gap-3 mt-6">
                    <button type="button" onClick={handlePrev} className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all">
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStepValid || isSubmitting}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        isStepValid && !isSubmitting ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              )}

              {/* Loading Overlay */}
              {isSubmitting && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
                    <svg className="animate-spin h-12 w-12 text-[#AD5628]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-lg font-semibold text-gray-700">Submitting your request...</p>
                    <p className="text-sm text-gray-500">Please wait, this may take a few seconds</p>
                  </div>
                </div>
              )}
            </form>
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