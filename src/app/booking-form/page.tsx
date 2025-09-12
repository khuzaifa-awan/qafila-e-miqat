// "use client";

// import { useState } from "react";
// import { FileUser, BaggageClaim, CreditCard, CircleCheckBig } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function ReadyPackageForm() {
//   const router = useRouter();

//   const [currentStep, setCurrentStep] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fromPakistan: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     age: "",
//     medicalInfo: "",
//     city: "",
//     travelType: "",
//     companionName: "",
//     paymentMethod: "",
//     terms: false,
//   });

//   const progressSteps = ["33%", "66%", "100%"];
//   const progressWidth = submitted ? "100%" : progressSteps[currentStep];

//   // Handle input changes
//   const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// ) => {
//   const { name, value, type, checked } = e.target as HTMLInputElement;

//   if (type === "checkbox") {
//     setFormData({ ...formData, [name]: checked });
//   } else {
//     setFormData({ ...formData, [name]: value });
//   }
// };


//   // Move to next step
//   const handleNext = () => {
//     if (currentStep < 2) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   // Move to previous step
//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   // Handle submit
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);

//     // Redirect to another page after a short delay
//     setTimeout(() => {
//       router.push(""); // Leave empty for now, you can add path later
//     }, 2000);
//   };

//   // Check if companion name input should be shown
//   const showCompanionName =
//     formData.travelType === "withSomeone";

//   return (
//     <div className="radial-background min-h-screen flex justify-center items-center py-10">
//       <div className="bg-white rounded-2xl shadow-xl p-8 w-[700px] min-h-[550px]">
//         {/* Progress Bar */}
//         <div className="relative mb-10">
//           <div className="w-full bg-gray-200 h-2 rounded-full">
//             <div
//               className="bg-[#AD5628] h-2 rounded-full transition-all duration-500"
//               style={{ width: progressWidth }}
//             ></div>
//           </div>

//           {/* Step Icons */}
//           <div className="flex justify-between absolute top-[-18px] w-full">
//             <FileUser
//               className={`w-8 h-8 p-1 rounded-full ${
//                 currentStep >= 0 ? "bg-[#AD5628] text-white" : "bg-gray-300 text-gray-500"
//               }`}
//             />
//             <BaggageClaim
//               className={`w-8 h-8 p-1 rounded-full ${
//                 currentStep >= 1 ? "bg-[#AD5628] text-white" : "bg-gray-300 text-gray-500"
//               }`}
//             />
//             <CreditCard
//               className={`w-8 h-8 p-1 rounded-full ${
//                 currentStep >= 2 ? "bg-[#AD5628] text-white" : "bg-gray-300 text-gray-500"
//               }`}
//             />
//           </div>
//         </div>

//         {/* Form */}
//         {!submitted ? (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Step 1: Personal Info */}
//             {currentStep === 0 && (
//               <div className="space-y-4">
//                 <div className="flex gap-4">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="fromPakistan"
//                       value="yes"
//                       onChange={handleChange}
//                       checked={formData.fromPakistan === "yes"}
//                       required
//                     />
//                     I am travelling from Pakistan
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="fromPakistan"
//                       value="no"
//                       onChange={handleChange}
//                       checked={formData.fromPakistan === "no"}
//                       required
//                     />
//                     I am NOT travelling from Pakistan
//                   </label>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                     className="border p-2 rounded-md"
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                     className="border p-2 rounded-md"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="border p-2 rounded-md"
//                   />
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone/Mobile"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="border p-2 rounded-md"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     required
//                     className="border p-2 rounded-md"
//                   >
//                     <option value="">Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                   </select>
//                   <input
//                     type="number"
//                     name="age"
//                     placeholder="Age"
//                     value={formData.age}
//                     onChange={handleChange}
//                     required
//                     className="border p-2 rounded-md"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Step 2: Travel & Medical Info */}
//             {currentStep === 1 && (
//               <div className="space-y-4">
//                 <textarea
//                   name="medicalInfo"
//                   placeholder="If yes, please provide details..."
//                   value={formData.medicalInfo}
//                   onChange={handleChange}
//                   className="border p-2 rounded-md w-full"
//                 />

//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="City"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />

//                 <div className="space-y-2">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="travelType"
//                       value="withSomeone"
//                       checked={formData.travelType === "withSomeone"}
//                       onChange={handleChange}
//                       required
//                     />
//                     I am travelling with someone & would like to share a room with them
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="travelType"
//                       value="alone"
//                       checked={formData.travelType === "alone"}
//                       onChange={handleChange}
//                     />
//                     I am travelling alone
//                   </label>
//                 </div>

//                 {showCompanionName && (
//                   <input
//                     type="text"
//                     name="companionName"
//                     placeholder="Full Name (for travel companion)"
//                     value={formData.companionName}
//                     onChange={handleChange}
//                     className="border p-2 rounded-md w-full"
//                   />
//                 )}
//               </div>
//             )}

//             {/* Step 3: Payment */}
//             {currentStep === 2 && (
//               <div className="space-y-4">
//                 <div className="space-y-2">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="bank"
//                       checked={formData.paymentMethod === "bank"}
//                       onChange={handleChange}
//                       required
//                     />
//                     Pay Amount via Bank transfer / Any wallet
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="cash"
//                       checked={formData.paymentMethod === "cash"}
//                       onChange={handleChange}
//                     />
//                     Pay Amount via Cash
//                   </label>
//                 </div>

//                 <label className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     name="terms"
//                     checked={formData.terms}
//                     onChange={handleChange}
//                     required
//                   />
//                   I confirm I have read and agree to the Terms and Conditions
//                 </label>
//               </div>
//             )}

//             {/* Buttons */}
//             <div className="flex justify-between">
//               {currentStep > 0 && (
//                 <button
//                   type="button"
//                   onClick={handleBack}
//                   className="bg-gray-300 px-6 py-2 rounded-md"
//                 >
//                   Back
//                 </button>
//               )}
//               {currentStep < 2 ? (
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   className="bg-[#AD5628] text-white px-6 py-2 rounded-md"
//                 >
//                   Next
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-6 py-2 rounded-md"
//                 >
//                   Submit
//                 </button>
//               )}
//             </div>
//           </form>
//         ) : (
//           <div className="flex flex-col justify-center items-center min-h-[400px]">
//             <CircleCheckBig className="w-20 h-20 text-green-600" />
//             <h3 className="text-2xl font-bold mt-4">Booking Reserved</h3>
//             <p className="text-gray-600 text-center mt-2">
//               We look forward to guiding you on your sacred journey.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// ------------------------------------New-Ready-Package----------------------------------

// "use client";

// import { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import { FileUser, BaggageClaim, CreditCard } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function ReadyPackageForm() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const [isStepValid, setIsStepValid] = useState(false);
//   const router = useRouter();

//   // Steps with icons
//   const steps = [
//     { label: "Personal Info", icon: FileUser },
//     { label: "Travel Details", icon: BaggageClaim },
//     { label: "Payment", icon: CreditCard },
//   ];

//   const totalSteps = steps.length; // 3 steps
//   const progressSteps = ["17%", "50%", "83%"];
//   const progressWidth = submitted ? "100%" : progressSteps[currentStep];
//   const [formData, setFormData] = useState({
//     fromPakistan: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     age: "",
//     medicalInfo: "",
//     city: "",
//     travelType: "",
//     companionName: "",
//     paymentMethod: "",
//     terms: false,
//   });




//   // Validate inputs for the current step
//   const validateStep = () => {
//     const form = document.querySelector("form") as HTMLFormElement;
//     if (!form) return;

//     const inputs = form.querySelectorAll(
//       `[data-step="${currentStep}"] input[required], [data-step="${currentStep}"] select[required], [data-step="${currentStep}"] textarea[required]`
//     );

//     let isValid = true;
//     inputs.forEach((input: any) => {
//       if (!input.value.trim()) {
//         isValid = false;
//       }
//     });

//     setIsStepValid(isValid);
//   };

 

//   // Handle next step
//   const handleNext = () => {
//     if (currentStep < totalSteps - 1) {
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
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);

//     // give progress bar time to animate → then redirect
//     setTimeout(() => {
//       router.push("/custom-package"); // put your path here
//     }, 700);
//   };
//     // Check if companion name input should be shown
//     const showCompanionName =
//     formData.travelType === "withSomeone";


//      // Handle input changes safely
//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       const inputElement = e.target as HTMLInputElement;
//       setFormData(prev => ({ ...prev, [name]: inputElement.checked }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };



// // Validate step based on current step
//   useEffect(() => {
//     switch (currentStep) {
//       case 0:
//         setIsStepValid(
//           !!formData.fromPakistan &&
//             formData.firstName.trim() !== "" &&
//             formData.lastName.trim() !== "" &&
//             formData.email.trim() !== "" &&
//             formData.phone.trim() !== "" &&
//             !!formData.gender &&
//             formData.age.trim() !== ""
//         );
//         break;

//       case 1:
//         setIsStepValid(
//           formData.city.trim() !== "" &&
//             !!formData.travelType &&
//             (formData.travelType === "with-companion"
//               ? formData.companionName.trim() !== ""
//               : true)
//         );
//         break;

//       case 2:
//         setIsStepValid(!!formData.paymentMethod && formData.terms);
//         break;

//       default:
//         setIsStepValid(false);
//     }
//   }, [formData, currentStep]);

//   return (
//     <div className="font-sans">
//       {/* ✅ Form Section */}
//       <div
//         id="form-section"
//         className="flex justify-center items-center py-10 radial-background"
//       >
//         <div className="bg-white w-[95%] sm:w-[800px] md:w-[1000px] lg:w-[1138px] max-h-[90vh] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826] overflow-y-auto">
//           {/* Progress Tracker */}
//           <div className="relative flex justify-between items-center mb-8">
//             <div className="absolute top-[15px] left-0 w-full h-[6px] bg-[#f1e7de] rounded-full"></div>
//             <div
//               className="absolute top-[15px] left-0 h-[6px] bg-[#AD5628] rounded-full transition-all duration-500"
//               style={{ width: progressWidth }}
//             ></div>

//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               return (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center relative z-10 w-full"
//                 >
//                   <div
//                     className={`w-9 h-9 flex justify-center items-center rounded-full font-semibold transition-all duration-300 ${
//                       index === currentStep
//                         ? "bg-[#AD5628] text-white shadow-lg"
//                         : index < currentStep
//                         ? "bg-[#AD5628] text-white"
//                         : "bg-gray-300 text-gray-500"
//                     }`}
//                   >
//                     <Icon size={20} />
//                   </div>
//                   <span className="mt-2 text-xs font-semibold text-gray-700">
//                     {step.label}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Form */}
//           {!submitted && (
//             <form onSubmit={handleSubmit}>
//               {/* STEP 1 */}
//               {currentStep === 0 && (
//                 <div data-step="0" className="animate-fadeIn">
//                   <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">
//                     Fill out your details
//                   </h2>

//                    <label>
//                     Travel Origin:
//                   </label>
//                  <div className="flex gap-3 mb-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="fromPakistan"
//                   value="yes"
//                   checked={formData.fromPakistan === "yes"}
//                   onChange={handleInputChange}
//                 />
//                 I am travelling from Pakistan
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="fromPakistan"
//                   value="no"
//                   checked={formData.fromPakistan === "no"}
//                   onChange={handleInputChange}
//                 />
//                 I am NOT travelling from Pakistan
//               </label>
//             </div>

//                   {/* 2 */}

//                   <label>
//                     First Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="firstname"
//                     placeholder="Enter your first name"
//                     required
//                     onChange={validateStep}
                  
//                   />
//                   <label>
//                     Last Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="lastname"
//                     placeholder="Enter your last name"
//                     required
//                     onChange={validateStep}
                    
//                   />

//                   {/* 3 */}


//                   <label className="block mb-3 font-semibold">
//                     Email Address*
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     required
//                     onChange={validateStep}
                  
//                   />

//                   {/* 4 */}

//                   <label>
//                     Contact Number (WhatsApp preferred)*
//                   </label>
//                   <input
//                     type="tel"
//                     name="contact"
//                     placeholder="03XX-XXXXXXX"
//                     required
//                     onChange={validateStep}
                  
//                   />

//                   {/* 5 */}

//                   <label>
//                     Gender*
//                   </label>
//                   <select
//                     name="transport_choice"
//                     required
//                     onChange={validateStep}
                    
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="public">Male</option>
//                     <option value="private">Female</option>
//                   </select>

//                   {/* 6 */}

//                   <label>
//                     Age*
//                   </label>
//                   <input
//                     type="number"
//                     name="age"
//                     placeholder="Enter your age"
//                     required
//                     onChange={validateStep}
                  
//                   />

//                   <div className="flex justify-end gap-3">
//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={!isStepValid}
//                       className={`px-5 py-3 rounded-lg font-semibold transition-all ${
//                         isStepValid
//                           ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
//                           : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
//                   <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">
//                     Travel & Medical Info
//                   </h2>

//                   <label className="block mb-2 font-semibold">
//                     Do you have any medical conditions or medications we should be aware of for your journey during your departure and arrival dates? <span className="font-normal">This help us ensure your comfort and safety during travel.</span>
//                   </label>
//                   <textarea
//                   name="medicalInfo"
//                   placeholder="If yes, please provide details..."
//                   value={formData.medicalInfo}
//                   onChange={handlChange}
                  
//                 />

//                 {/* 2 */}

//                   <label className="block mb-2 font-semibold">
//                     City*
//                   </label>
//                   <input
//                   type="text"
//                   name="city"
//                   placeholder="City"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
//                 />

//                 {/* 3 */}

//                   <label className="block mb-2 font-semibold">
//                    Room Allotment*
//                   </label>
//                   <label >
//                     <input
//                       type="radio"
//                       name="travelType"
//                       value="withSomeone"
//                       checked={formData.travelType === "withSomeone"}
//                       required
//                     />
//                     I am travelling with someone & would like to share a room with them
//                   </label>
//                   <label >
//                     <input
//                       type="radio"
//                       name="travelType"
//                       value="alone"
//                       checked={formData.travelType === "alone"}
//                     />
//                     I am travelling alone
//                   </label>

//                   {showCompanionName && (
//                   <input
//                     type="text"
//                     name="companionName"
//                     placeholder="Full Name (for travel companion)"
//                     value={formData.companionName}
//                   />
//                 )}

                 

//                   <div className="flex justify-between gap-3">
//                     <button
//                       type="button"
//                       onClick={handlePrev}
//                       className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all"
//                     >
//                       Back
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={!isStepValid}
//                       className={`px-5 py-3 rounded-lg font-semibold transition-all ${
//                         isStepValid
//                           ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
//                           : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
//                   <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">
//                     Choose Your Payment Method
//                   </h2>

      
//                   <label>
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="bank"
//                       checked={formData.paymentMethod === "bank"}
//                       required
//                     />
//                     Pay Amount via Bank transfer / Any wallet
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="cash"
//                       checked={formData.paymentMethod === "cash"}
//                     />
//                     Pay Amount via Cash
//                   </label>

//                    <label>
//                    <input
//                     type="checkbox"
//                     name="terms"
//                     checked={formData.terms}
//                     required
//                   />
//                   I confirm I have read and agree to the Terms and Conditions
//                 </label>

                  

//                   <div className="flex gap-3">
//                     <button
//                       type="button"
//                       onClick={handlePrev}
//                       className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all"
//                     >
//                       Back
//                     </button>
//                     <button
//                       type="submit"
//                       disabled={!isStepValid}
//                       className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
//                         isStepValid
//                           ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
//                           : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       }`}
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { CircleCheckBig, FileUser, BaggageClaim, CreditCard } from "lucide-react";
import Link from "next/link";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { useRouter } from "next/navigation";

export default function ReadyPackageForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isStepValid, setIsStepValid] = useState(false);
  const [formData, setFormData] = useState({
    fromPakistan: "",
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    age: "",
    medicalInfo: "",
    city: "",
    travelType: "",
    companionName: "",
    paymentMethod: "",
    terms: false,
  });
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [companionNameError, setCompanionNameError] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState<string | null>(null);


  // Steps and progress calculation
  const steps = [
    { label: "Personal Info", icon: FileUser },
    { label: "Travel Details", icon: BaggageClaim },
    { label: "Payment", icon: CreditCard },
  ];
  const totalSteps = steps.length;
  const progressSteps = ["17%", "50%", "83%"];
  const progressWidth = submitted ? "100%" : progressSteps[currentStep];

  // Handle input change
  const handleInputChange = (e: any) => {
  const { name, value, type, checked } = e.target;

  // Name validations
  if (name === "firstname") {
    const regex = /^[A-Za-z ]+$/;
    if (!regex.test(value)) {
      setFirstNameError("First name can only contain letters and spaces");
    } else {
      setFirstNameError(null);
    }
  }

  if (name === "lastname") {
    const regex = /^[A-Za-z ]+$/;
    if (!regex.test(value)) {
      setLastNameError("Last name can only contain letters and spaces");
    } else {
      setLastNameError(null);
    }
  }

  if (name === "companionName") {
    const regex = /^[A-Za-z ]+$/;
    if (value && !regex.test(value)) {
      setCompanionNameError("Companion name can only contain letters and spaces");
    } else {
      setCompanionNameError(null);
    }
  }

  // Phone validation
  if (name === "contact") {
    if (!isValidPhoneNumber(value)) {
      setPhoneError("Please enter a valid phone number");
    } else {
      setPhoneError(null);
    }
  }

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));

  validateStep();
};


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

  // Extra check for phone number
  if (currentStep === 2 && (!phoneNumber || !isValidPhoneNumber(phoneNumber))) {
    isValid = false;
  }

  setIsStepValid(isValid);
};



  const isValidPhoneNumber = (phone: string) => {
  let formattedPhone = phone.trim();

  // If starts with 03XX -> convert to +92
  if (/^03\d{9}$/.test(formattedPhone)) {
    formattedPhone = "+92" + formattedPhone.substring(1);
  }

  try {
    const phoneNumber = parsePhoneNumberFromString(formattedPhone);
    return phoneNumber?.isValid() || false;
  } catch {
    return false;
  }
};


  // Handle navigation
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Convert to E.164 format before storing
  const parsedPhone = phoneNumber ? parsePhoneNumber(phoneNumber) : null;
  const formattedPhone = parsedPhone ? parsedPhone.number : phoneNumber;

  console.log("Submitted Phone:", formattedPhone);

  setCurrentStep(totalSteps - 1);
  setTimeout(() => setSubmitted(true), 500);
  router.push("/thank-you?from=booking-form" );
};


  useEffect(() => {
    validateStep();
  }, [currentStep]);

  return (
    <div className="font-sans">
      {/* ✅ Form Section */}
      <div className="flex justify-center items-center py-10 radial-background">
        <div className="bg-white w-[95%] sm:w-[800px] md:w-[1000px] lg:w-[1138px] max-h-[90vh] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826] overflow-y-auto">
          {/* Progress Tracker */}
          <div className="relative flex justify-between items-center mb-8">
            <div className="absolute top-[15px] left-0 w-full h-[6px] bg-[#f1e7de] rounded-full"></div>
            <div
              className="absolute top-[15px] left-0 h-[6px] bg-[#AD5628] rounded-full transition-all duration-500"
              style={{ width: progressWidth }}
            ></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center relative z-10 w-full">
                  <div
                    className={`w-9 h-9 flex justify-center items-center rounded-full font-semibold transition-all duration-300 ${
                      index === currentStep
                        ? "bg-[#AD5628] text-white shadow-lg"
                        : index < currentStep
                        ? "bg-[#AD5628] text-white"
                        : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-gray-700">{step.label}</span>
                </div>
              );
            })}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {currentStep === 0 && (
                <div data-step="0" className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Fill out your details</h2>

                  {/* From Pakistan */}
                  <label className="block mb-2 font-semibold">Travel Origin:</label>
                  <div className="flex gap-3 mb-4">
                    <label>
                      <input
                        type="radio"
                        name="fromPakistan"
                        value="yes"
                        checked={formData.fromPakistan === "yes"}
                        onChange={handleInputChange}
                        required
                      />{" "}
                      I am travelling from Pakistan
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="fromPakistan"
                        value="no"
                        checked={formData.fromPakistan === "no"}
                        onChange={handleInputChange}
                        required
                      />{" "}
                      I am NOT travelling from Pakistan
                    </label>
                  </div>

                  {/* Names */}
                  <label className="block mb-2 font-semibold">First Name*</label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Enter your first name"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                    />
                    {firstNameError && <p className="text-red-500 text-sm mb-4">{firstNameError}</p>}

                  <label className="block mb-2 font-semibold">Last Name*</label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Enter your last name"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />
                  {lastNameError && <p className="text-red-500 text-sm mb-4">{lastNameError}</p>}


                  {/* Email */}
                  <label className="block mb-2 font-semibold">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  {/* Contact */}
                  <label className="block mb-2 font-semibold">Contact Number* (WhatsApp preferred)*</label>
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



                  {/* Gender */}
                  <label className="block mb-2 font-semibold">Gender*</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  {/* Age */}
                  <label className="block mb-2 font-semibold">Age*</label>
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid}
                      className={`px-5 py-3 rounded-lg font-semibold transition-all ${
                        isStepValid
                          ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Travel & Medical Info</h2>

                  {/* Medical Info */}
                  <label className="block mb-2 font-semibold">
                    Do you have any medical conditions or medications we should be aware of?{" "}
                    <span className="font-normal">(This helps us ensure your comfort and safety.)</span>
                  </label>
                  <textarea
                    name="medicalInfo"
                    placeholder="If yes, please provide details..."
                    value={formData.medicalInfo}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  {/* City */}
                  <label className="block mb-2 font-semibold">City*</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  {/* Travel type */}
                  <label className="block mb-2 font-semibold">Room Allotment*</label>
                  <div className="flex flex-col gap-2 mb-4">
                    <label>
                      <input
                        type="radio"
                        name="travelType"
                        value="withSomeone"
                        checked={formData.travelType === "withSomeone"}
                        onChange={handleInputChange}
                        required
                      />{" "}
                      I am travelling with someone & would like to share a room
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="travelType"
                        value="alone"
                        checked={formData.travelType === "alone"}
                        onChange={handleInputChange}
                      />{" "}
                      I am travelling alone
                    </label>
                  </div>

                 {formData.travelType === "withSomeone" && (
                    <>
                      <input
                        type="text"
                        name="companionName"
                        placeholder="Full Name (for travel companion)"
                        value={formData.companionName}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                      />
                      {companionNameError && <p className="text-red-500 text-sm mb-4">{companionNameError}</p>}
                    </>
                  )}


                  <div className="flex justify-between gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid}
                      className={`px-5 py-3 rounded-lg font-semibold transition-all ${
                        isStepValid
                          ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Choose Your Payment Method</h2>

                  <div className="flex flex-col gap-3 mb-4">
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === "bank"}
                        onChange={handleInputChange}
                        required
                      />{" "}
                      Pay via Bank transfer / Wallet
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleInputChange}
                      />{" "}
                      Pay via Cash
                    </label>
                  </div>

                  <label className="flex items-center gap-2 mb-6">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      required
                    />
                    I confirm I have read and agree to the Terms and Conditions
                  </label>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-3 bg-[#f1e7de] text-gray-700 rounded-lg font-semibold hover:bg-[#e4d2c5] transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStepValid}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        isStepValid
                          ? "bg-[#AD5628] !text-accent hover:bg-[#933f1b]"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
              <p className="text-gray-600 mt-2">We look forward to guiding you on your sacred journey.</p>
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
