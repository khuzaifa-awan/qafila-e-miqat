// "use client";

// import { useState, useEffect } from "react";
// import { CircleCheckBig, CircleArrowDown } from "lucide-react";
// import Image from "next/image";
// import PhoneInput, {
//   isValidPhoneNumber,
//   parsePhoneNumber,
// } from "react-phone-number-input";
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
//     travel_date: "",
//     arrival_date: "",
//   });

//   const router = useRouter();

//   // Steps and progress calculation
//   const steps = ["Preferences", "Travel", "Details"];
//   const totalSteps = steps.length + 1;
//   const progressSteps = ["17%", "50%", "85%", "100%"];
//   const progressWidth = submitted ? "100%" : progressSteps[currentStep];

//   // Validate inputs for the current step
//   const validateStep = () => {

//     let isValid = true;

//     // step 1 validations
//     switch (currentStep) {
//       case 0: {
//         if (!formData.transport_choice || !formData.priority) {
//           isValid = false;
//         }
//         break;
//       }
//       case 1: {
//         if (
//           !formData.travel_date ||
//           !formData.arrival_date ||
//           !formData.adults ||
//           !formData.hotel_category ||
//           !formData.room_preference ||
//           new Date(formData.arrival_date) <= new Date(formData.travel_date) ||
//           (!phoneNumber || !isValidPhoneNumber(phoneNumber))
//         ) {
//           isValid = false;
//         }
//         break;
//       }
//       case 2: {
//         if (
//           !formData.fullname ||
//           !formData.email ||
//           !formData.departure_city
//         ) {
//           isValid = false;
//         }
//         break;
//       }
//       default:
//         break;
//     }

//     setIsStepValid(isValid);
//   };

//   // Handle next step
//   const handleNext = () => {
//     if (currentStep < totalSteps - 2) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   // Handle previous step
//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   // Handle form submit
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // ✅ Convert to E.164 format
//     const parsedPhone = phoneNumber ? parsePhoneNumber(phoneNumber) : null;
//     const formattedPhone = parsedPhone ? parsedPhone.number : phoneNumber;

//     // Collect form data from <input name="...">
//     const submissionData = {
//       fullname: formData["fullname"],
//       email: formData["email"],
//       phoneNumber: formattedPhone,
//       departureCity: formData["departure_city"],
//       transportChoice: formData["transport_choice"],
//       specialRequests: formData["special_requests"],
//       priority: formData["priority"],
//       preferredDepartureDate: formData["travel_date"], // 👈 mapped
//       preferredArrivalDate: formData["arrival_date"], // 👈 mapped
//       adults: formData["adults"],
//       children: formData["children"],
//       infants: formData["infants"],
//       hotelCategory: formData["hotel_category"],
//       roomPreference: formData["room_preference"],
//     };

//     try {
//       const res = await fetch("/api/submit-form", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           formType: "CustomPackage", // 👈 goes to CustomPackageForm tab
//           data: submissionData,
//         }),
//       });

//       const result = await res.json();

//       if (result.success) {
//         console.log("✅ Custom package form submitted:", result);
//         setCurrentStep(totalSteps - 1);
//         setTimeout(() => setSubmitted(true), 500);
//         router.push("/thank-you?from=custom-package");
//       } else {
//         console.error("❌ Submission failed:", result.error);
//         alert("Something went wrong while submitting. Please try again.");
//       }
//     } catch (error) {
//       console.error("❌ API error:", error);
//       alert("Server error while submitting. Please try again.");
//     }
//   };

//   useEffect(() => {
//     ;
//   }, [currentStep]);

//   const [currentAnnouncementIndex, setCurrentAnnouncementIndex] =
//     useState<number>(0);
//   const [isVisible, setIsVisible] = useState<boolean>(false);

//   const announcements: string[] = [
//     "✨ October Packages Are Live 🕋",
//     "⏳ Limited seats for October Umrah. Reserve today!",
//     "🎉 Special Group Discounts Available",
//     "🌟 VIP Services Available for Premium Experience",
//   ];

//   useEffect(() => {
//     setIsVisible(true);

//     const interval = setInterval(() => {
//       setCurrentAnnouncementIndex(
//         (prevIndex) => (prevIndex + 1) % announcements.length
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [announcements.length]);

//   useEffect(() => {
//   validateStep()
// }, [formData]);

//   return (
//     <div className="font-sans">
//       {/* ✅ Hero Section */}
//       <section className="relative w-full h-screen bg-center flex flex-col items-center justify-center">
//         {/* ✅ Announcement Bar */}
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

//         {/* ✅ Header */}
//         <header className="absolute top-12 left-0 w-full px-8 sm:px-14 lg:px-24 flex justify-between items-center z-30">
//           {/* Logo */}
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

//           {/* Home Button */}
//           <Link href="/">
//             <button
//               style={{ backgroundColor: "#AD5628", color: "#FCF6EC" }}
//               className="px-4 py-2 sm:px-8 sm:py-3.5 rounded-md font-medium text-sm sm:text-base 
//                             transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg"
//             >
//               Home
//             </button>
//           </Link>
//         </header>
//         {/* ✅ Hero Image */}
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
//                           text-6xl sm:text-6xl md:text-9xl font-bold text-center tracking-wide 
//                           top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//                           animate-fadeIn whitespace-pre-line
//                           drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]
//                           sm:drop-shadow-[0_6px_14px_rgba(0,0,0,0.4)]"
//         >
//           MADE JUST{"\n"}FOR YOU
//         </h1>

//         {/* ✅ Customized My Journey Button */}
//         <button
//           onClick={() => {
//             const formSection = document.getElementById("form-section");
//             if (formSection) {
//               formSection.scrollIntoView({ behavior: "smooth" });
//             }
//           }}
//           className="absolute 
//                           top-[55%] left-1/2 transform -translate-x-1/2 
//                           flex items-center gap-3 
//                           bg-[#FCF6EC] text-gray-800 font-medium 
//                           text-base sm:text-lg 
//                           px-4 sm:px-8 py-2.5 sm:py-3.5 
//                           rounded-full shadow-lg 
//                           transition-all duration-300 
//                           hover:scale-105 hover:shadow-2xl 
//                           min-w-[280px] sm:min-w-[320px] 
//                           whitespace-nowrap z-20"
//         >
//           Customized My Journey
//           <CircleArrowDown className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" />
//         </button>
//       </section>

//       {/* ✅ Form Section */}
//       <div
//         id="form-section"
//         className="flex justify-center items-center py-10 radial-background"
//       >
//         <div className="bg-white/65 w-[95%] sm:w-[800px] md:w-[1000px] lg:w-[1138px] max-h-[90vh] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826] overflow-y-auto">
//           {/* Progress Tracker */}
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
//             <>
//               <form onSubmit={handleSubmit}>
//                 {/* STEP 1 */}
//                 {currentStep === 0 && (
//                   <div data-step="0" className="animate-fadeIn">
//                     <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">
//                       Your Preferences
//                     </h2>

//                     <label className="block mb-2 font-semibold">
//                       Transport Choice*
//                     </label>
//                     <select
//                       name="transport_choice"
//                       required
//                       onChange={(e) => {
//                         setFormData({
//                           ...formData,
//                           transport_choice: e.target.value,
//                         });
//                       }}
//                       className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     >
//                       <option value="">Select transport</option>
//                       <option value="public">Public Shuttle</option>
//                       <option value="private">Private Car</option>
//                     </select>

//                     <label className="block mb-2 font-semibold">
//                       Special Requests (optional)
//                     </label>
//                     <textarea
//                       name="special_requests"
//                       rows={3}
//                       placeholder="Wheelchair, meals, ziyarah, etc..."
//                       onChange={(e) => {
//                         setFormData({
//                           ...formData,
//                           special_requests: e.target.value,
//                         });
//                       }}
//                       className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />

//                     <label className="block mb-3 font-semibold">
//                       What's most important for you in this Umrah trip?
//                     </label>
//                     <div className="flex flex-wrap gap-4 mb-4">
//                       {[
//                         {
//                           value: "near_haram",
//                           label: "Staying close to Haram",
//                         },
//                         { value: "luxury", label: "Luxury and comfort" },
//                         {
//                           value: "budget-friendly",
//                           label: "Budget-friendly options",
//                         },
//                         {
//                           value: "private-transport",
//                           label: "Private transport",
//                         },
//                         {
//                           value: "guided-ziyarah",
//                           label: "Guided ziyarah experience",
//                         },
//                       ].map((option) => (
//                         <label
//                           key={option.value}
//                           className="flex items-center gap-2"
//                         >
//                           <input
//                             type="radio"
//                             name="priority"
//                             value={option.value}
//                             required
//                             onChange={(e) => {
//                               setFormData({
//                                 ...formData,
//                                 priority: e.target.value,
//                               });
//                               console.log(formData)
//                             }}
//                           />
//                           {option.label}
//                         </label>
//                       ))}
//                     </div>

//                     <div className="flex justify-end gap-3">
//                       <button
//                         type="button"
//                         onClick={handleNext}
//                         disabled={!isStepValid}
//                         className={`px-5 py-3 rounded-lg font-semibold transition-all ${
//                           isStepValid
//                             ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
//                             : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                         }`}
//                       >
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* STEP 2 */}
//                 {currentStep === 1 && (
//                   <div data-step="1" className="animate-fadeIn">
//                     <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">
//                       Travel Details
//                     </h2>

//                     {/* Departure Date */}
//                     <label className="block mb-2 font-semibold">
//                       Preferred Departure Date*
//                     </label>
//                     <input
//                       type="date"
//                       name="travel_date"
//                       required
//                       min={new Date().toISOString().split("T")[0]}
//                       value={formData.travel_date}
//                       onChange={(e) => {
//                         // setDepartureDate(e.target.value);
//                         setFormData({
//                           ...formData,
//                           travel_date: e.target.value,
//                         });
//                         // Reset arrival date if invalid
//                         if (
//                           arrivalDate &&
//                           new Date(arrivalDate) <= new Date(e.target.value)
//                         ) {
//                           // setArrivalDate("");
//                           setFormData({ ...formData, arrival_date: "" });
//                           setDateError(
//                             "Arrival date must be after departure date"
//                           );
//                         } else {
//                           setDateError(null);
//                         }
//                         ;
//                       }}
//                       className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />
//                     {/* Arrival Date */}
//                     <label className="block mb-2 font-semibold">
//                       Preferred Arrival Date*
//                     </label>
//                     <input
//                       type="date"
//                       name="arrival_date"
//                       required
//                       min={
//                         formData.travel_date
//                           ? new Date(
//                               new Date(formData.travel_date).setDate(
//                                 new Date(formData.travel_date).getDate() + 1
//                               )
//                             )
//                               .toISOString()
//                               .split("T")[0]
//                           : new Date().toISOString().split("T")[0]
//                       }
//                       value={formData.arrival_date}
//                       onChange={(e) => {
//                         if (
//                           new Date(e.target.value) <=
//                           new Date(formData.travel_date)
//                         ) {
//                           setDateError(
//                             "Arrival date must be after departure date"
//                           );
//                         } else {
//                           setDateError(null);
//                         }
//                         // setArrivalDate(e.target.value);
//                         setFormData({
//                           ...formData,
//                           arrival_date: e.target.value,
//                         });
//                         ;
//                       }}
//                       className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />
//                     {dateError && (
//                       <p className="text-red-500 text-sm">{dateError}</p>
//                     )}
//                     <label className="block mb-2 font-semibold">
//                       Number of Travellers*
//                     </label>
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                       {/* Adults */}
//                       <input
//                         type="number"
//                         name="adults"
//                         min="0"
//                         placeholder="Adults"
//                         required
//                         onChange={(e) => {
//                           setFormData({ ...formData, adults: e.target.value });
//                           ;
//                         }}
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                       />

//                       {/* Children */}
//                       <input
//                         type="number"
//                         name="children"
//                         min="0"
//                         placeholder="Child"
//                         onChange={(e) => {
//                           setFormData({
//                             ...formData,
//                             children: e.target.value,
//                           });
//                           ;
//                         }}
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                       />

//                       {/* Infants */}
//                       <input
//                         type="number"
//                         name="infants"
//                         min="0"
//                         placeholder="Infants"
//                         onChange={(e) => {
//                           setFormData({ ...formData, infants: e.target.value });
//                           ;
//                         }}
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                       />
//                     </div>

//                     <label className="block mb-2 font-semibold">
//                       Preferred Hotel Category*
//                     </label>
//                     <select
//                       name="hotel_category"
//                       required
//                       onChange={(e) => {
//                         setFormData({
//                           ...formData,
//                           hotel_category: e.target.value,
//                         });
//                         ;
//                       }}
//                       className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     >
//                       <option value="">Select category</option>
//                       <option value="3-star">3 Star</option>
//                       <option value="4-star">4 Star</option>
//                       <option value="5-star">5 Star</option>
//                     </select>

//                     <label className="block mb-2 font-semibold">
//                       Room Preference*
//                     </label>
//                     <select
//                       name="room_preference"
//                       required
//                       onChange={(e) => {
//                         setFormData({
//                           ...formData,
//                           room_preference: e.target.value,
//                         });
//                         ;
//                       }}
//                       className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     >
//                       <option value="">Select room</option>
//                       <option value="single">Single</option>
//                       <option value="double">Double</option>
//                       <option value="triple">Triple</option>
//                       <option value="quad">Quad</option>
//                     </select>

//                     <div className="flex justify-between gap-3">
//                       <button
//                         type="button"
//                         onClick={handlePrev}
//                         className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all"
//                       >
//                         Back
//                       </button>
//                       <button
//                         type="button"
//                         onClick={handleNext}
//                         disabled={!isStepValid}
//                         className={`px-5 py-3 rounded-lg font-semibold transition-all ${
//                           isStepValid
//                             ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
//                             : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                         }`}
//                       >
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* STEP 3 */}
//                 {currentStep === 2 && (
//                   <div data-step="2" className="animate-fadeIn">
//                     <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">
//                       Your Details
//                     </h2>

//                     <label className="block mb-2 font-semibold">
//                       Full Name*
//                     </label>
//                     <input
//                       type="text"
//                       name="fullname"
//                       placeholder="Enter your full name"
//                       required
//                       onChange={(e) => {
//                         const value = e.target.value;
//                         const nameRegex = /^[A-Za-z ]+$/;
//                         if (!nameRegex.test(value)) {
//                           setNameError(
//                             "Name can only contain letters and spaces"
//                           );
//                         } else {
//                           setNameError(null);
//                         }
//                         setFormData({ ...formData, fullname: value });
//                         ;
//                       }}
//                       className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />
//                     {nameError && (
//                       <p className="text-red-500 text-sm">{nameError}</p>
//                     )}

//                     <label className="block mb-2 font-semibold">
//                       Contact Number*(WhatsApp preferred)
//                     </label>
//                     <PhoneInput
//                       defaultCountry="PK"
//                       international
//                       placeholder="03XX XXXXXXX or +92 XXX XXXXXXX"
//                       value={phoneNumber}
//                       onChange={(value) => {
//                         setPhoneNumber(value || "");
//                         if (value && isValidPhoneNumber(value)) {
//                           setPhoneError(null);
//                         } else {
//                           setPhoneError("Please enter a valid phone number");
//                         }
//                         ;
//                       }}
//                       className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />
//                     {phoneError && (
//                       <p className="text-red-500 text-sm">{phoneError}</p>
//                     )}

//                     <label className="block mb-2 font-semibold">
//                       Email Address*
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       required
//                       onChange={(e) => {setFormData({...formData, email: e.target.value});}}
//                       className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />

//                     <label className="block mb-2 font-semibold">
//                       Departure City*
//                     </label>
//                     <input
//                       type="text"
//                       name="departure_city"
//                       placeholder="Enter city"
//                       required
//                       onChange={(e) => {setFormData({...formData, departure_city: e.target.value});}}
//                       className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                     />

//                     <div className="flex gap-3">
//                       <button
//                         type="button"
//                         onClick={handlePrev}
//                         className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all"
//                       >
//                         Back
//                       </button>
//                       <button
//                         type="submit"
//                         disabled={!isStepValid}
//                         className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
//                           isStepValid
//                             ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
//                             : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                         }`}
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             </>
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
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }












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

  const steps = ["Preferences", "Travel", "Details"];
  const totalSteps = steps.length + 1;
  const progressSteps = ["17%", "50%", "85%", "100%"];
  const progressWidth = submitted ? "100%" : progressSteps[currentStep];

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Special validation for fullname
    if (name === "fullname") {
      const nameRegex = /^[A-Za-z ]+$/;
      if (value && !nameRegex.test(value)) {
        setNameError("Name can only contain letters and spaces");
      } else {
        setNameError(null);
      }
    }
  };

  // Validate current step
  const validateStep = () => {
    let isValid = true;

    if (currentStep === 0) {
      // Step 1: Preferences
      if (!formData.transport_choice || !formData.priority) {
        isValid = false;
      }
    } else if (currentStep === 1) {
      // Step 2: Travel Details
      if (
        !departureDate ||
        !arrivalDate ||
        !formData.adults ||
        !formData.hotel_category ||
        !formData.room_preference ||
        new Date(arrivalDate) <= new Date(departureDate)
      ) {
        isValid = false;
      }
    } else if (currentStep === 2) {
      // Step 3: Personal Details
      if (
        !formData.fullname ||
        !formData.email ||
        !formData.departure_city ||
        !phoneNumber ||
        !isValidPhoneNumber(phoneNumber) ||
        nameError
      ) {
        isValid = false;
      }
    }

    setIsStepValid(isValid);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const parsedPhone = phoneNumber ? parsePhoneNumber(phoneNumber) : null;
  const formattedPhone = parsedPhone ? parsedPhone.number : phoneNumber;

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
  }
};

  useEffect(() => {
    validateStep();
  }, [currentStep, formData, departureDate, arrivalDate, phoneNumber, nameError]);

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
  }, []);

  return (
    <div className="font-sans">
      <section className="relative w-full h-screen bg-center flex flex-col items-center justify-center">
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
              {/* STEP 1 */}
              {currentStep === 0 && (
                <div data-step="0" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Your Preferences</h2>

                  <label className="block mb-2 font-semibold">Transport Choice*</label>
                  <select
                    name="transport_choice"
                    value={formData.transport_choice}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  >
                    <option value="">Select transport</option>
                    <option value="public">Public Shuttle</option>
                    <option value="private">Private Car</option>
                  </select>

                  <label className="block mb-2 font-semibold">Special Requests (optional)</label>
                  <textarea
                    name="special_requests"
                    value={formData.special_requests}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Wheelchair, meals, ziyarah, etc..."
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
                        <input
                          type="radio"
                          name="priority"
                          value={option.value}
                          checked={formData.priority === option.value}
                          onChange={handleInputChange}
                          required
                        />
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

                  <label className="block mb-2 font-semibold">Preferred Departure Date*</label>
                  <input
                    type="date"
                    name="travel_date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={departureDate}
                    onChange={(e) => {
                      setDepartureDate(e.target.value);
                      if (arrivalDate && new Date(arrivalDate) <= new Date(e.target.value)) {
                        setArrivalDate("");
                        setDateError("Arrival date must be after departure date");
                      } else {
                        setDateError(null);
                      }
                    }}
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

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
                    }}
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {dateError && <p className="text-red-500 text-sm mb-4">{dateError}</p>}

                  <label className="block mb-2 font-semibold">Number of Travellers*</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <input
                      type="number"
                      name="adults"
                      value={formData.adults}
                      onChange={handleInputChange}
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

                  <label className="block mb-2 font-semibold">Preferred Hotel Category*</label>
                  <select
                    name="hotel_category"
                    value={formData.hotel_category}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  >
                    <option value="">Select category</option>
                    <option value="3-star">3 Star</option>
                    <option value="4-star">4 Star</option>
                    <option value="5-star">5 Star</option>
                  </select>

                  <label className="block mb-2 font-semibold">Room Preference*</label>
                  <select
                    name="room_preference"
                    value={formData.room_preference}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  >
                    <option value="">Select room</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="triple">Triple</option>
                    <option value="quad">Quad</option>
                  </select>

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

              {/* STEP 3 */}
              {currentStep === 2 && (
                <div data-step="2" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Your Details</h2>

                  <label className="block mb-2 font-semibold">Full Name*</label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {nameError && <p className="text-red-500 text-sm mb-4">{nameError}</p>}

                  <label className="block mb-2 font-semibold">Contact Number* (WhatsApp preferred)</label>
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
                    }}
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {phoneError && <p className="text-red-500 text-sm mb-4">{phoneError}</p>}

                  <label className="block mb-2 font-semibold">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  <label className="block mb-2 font-semibold">Departure City*</label>
                  <input
                    type="text"
                    name="departure_city"
                    value={formData.departure_city}
                    onChange={handleInputChange}
                    placeholder="Enter city"
                    required
                    className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  <div className="flex gap-3">
                    <button type="button" onClick={handlePrev} className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all">
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStepValid}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        isStepValid ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Submit
                    </button>
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