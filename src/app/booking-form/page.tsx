"use client";

import { useState, useEffect, Suspense } from "react";
import { CircleCheckBig, FileUser, BaggageClaim, CreditCard, Plus, Minus, MapPin, Calendar, Users, Star, Plane } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import { HeaderT } from '@/components/HeaderT';
import { getPackageById, renderIcon } from '@/data/packages';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/cardP';
import "react-phone-number-input/style.css";
import { useRouter } from "next/navigation";

// Package Details Component
function PackageDetails({ packageId }: { packageId: string | null }) {
  if (!packageId) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 text-amber-700">
          <CircleCheckBig className="w-5 h-5" />
          <span className="font-medium">No package selected</span>
        </div>
        <p className="text-amber-600 text-sm mt-1">
          Please select a package first. 
          <Link href="/" className="text-amber-800 underline ml-1">
            Browse packages
          </Link>
        </p>
      </div>
    );
  }

  const packageData = getPackageById(packageId);
  
  if (!packageData) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 text-red-700">
          <CircleCheckBig className="w-5 h-5" />
          <span className="font-medium">Package not found</span>
        </div>
        <p className="text-red-600 text-sm mt-1">
          The selected package could not be found. 
          <Link href="/" className="text-red-800 underline ml-1">
            Browse available packages
          </Link>
        </p>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="mb-6 bg-gradient-to-r from-[#AD5628]/5 to-[#AD5628]/10 border-[#AD5628]/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <CircleCheckBig className="w-5 h-5 text-green-600" />
          <span className="text-lg font-semibold text-[#AD5628]">Selected Package</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Package Info */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{packageData.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  {renderStars(4)}
                  <span className="ml-1">4 Star Hotel</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-[#AD5628]" />
              <span><strong>Duration:</strong> {packageData.duration}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Plane className="w-4 h-4 text-[#AD5628]" />
              <span><strong>Departure:</strong> {packageData.departureDate}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-[#AD5628]" />
              <span><strong>Makkah Hotel:</strong> {packageData.hotelMAK}</span>
              <span><strong>Madinah Hotel:</strong> {packageData.hotelMAD}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-[#AD5628]" />
              <span><strong>Package Type:</strong> {packageData.tierName} - {packageData.groupName}</span>
            </div>
          </div>

          {/* Pricing & Features */}
          <div className="space-y-3">
            <div className="text-right">
              <p className="text-sm text-gray-500 line-through">PKR {packageData.price}</p>
              <p className="text-2xl font-bold text-[#AD5628]">PKR {packageData.discountedPrice}</p>
              <p className="text-xs text-gray-600">Per person</p>
            </div>

            <div className="bg-white rounded-lg p-3 border">
              <p className="text-sm font-medium mb-2">Package Includes:</p>
              <div className="grid grid-cols-1 gap-1">
                {packageData.perks.slice(0, 4).map((perk, index) => (
                  <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                    {renderIcon(perk.icon, { className: "w-3 h-3 text-[#AD5628] flex-shrink-0" })}
                    <span>{perk.text}</span>
                  </div>
                ))}
                {packageData.perks.length > 4 && (
                  <p className="text-xs text-gray-500 italic">+{packageData.perks.length - 4} more features</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                {packageData.seatsLeft} seats left
              </Badge>
              <Link href="/" className="text-sm text-[#AD5628] hover:underline">
                Change Package
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Main Form Component wrapped in Suspense
function BookingFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageId = searchParams.get('packageId');
  
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
    travelType: "withSomeone",
    companionNames: [""],
    paymentMethod: "",
    terms: false,
  });
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [companionNameErrors, setCompanionNameErrors] = useState<(string | null)[]>([]);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  // Steps and progress calculation
  const steps = [
    { label: "Personal Info", icon: FileUser },
    { label: "Travel Details", icon: BaggageClaim },
    { label: "Payment", icon: CreditCard },
  ];
  const totalSteps = steps.length;
  const progressSteps = ["17%", "50%", "83%"];
  const progressWidth = submitted ? "100%" : progressSteps[currentStep];

  // Add companion name field
  const addCompanionName = () => {
    if (formData.companionNames.length < 5) {
      setFormData(prev => ({
        ...prev,
        companionNames: [...prev.companionNames, ""]
      }));
      setCompanionNameErrors(prev => [...prev, null]);
    }
  };

  // Remove companion name field
  const removeCompanionName = (index: number) => {
    if (formData.companionNames.length > 1) {
      setFormData(prev => ({
        ...prev,
        companionNames: prev.companionNames.filter((_, i) => i !== index)
      }));
      setCompanionNameErrors(prev => prev.filter((_, i) => i !== index));
    }
  };

  // Handle companion name change
  const handleCompanionNameChange = (index: number, value: string) => {
    const regex = /^[A-Za-z ]*$/;
    const newCompanionNames = [...formData.companionNames];
    const newErrors = [...companionNameErrors];
    
    newCompanionNames[index] = value;
    
    if (value && !regex.test(value)) {
      newErrors[index] = "Companion name can only contain letters and spaces";
    } else {
      newErrors[index] = null;
    }
    
    setFormData(prev => ({
      ...prev,
      companionNames: newCompanionNames
    }));
    setCompanionNameErrors(newErrors);
    validateStep();
  };

  // Handle input change - Fixed type from 'any' to proper React types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const type = target instanceof HTMLInputElement ? target.type : undefined;
    const checked = target instanceof HTMLInputElement ? target.checked : false;

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

    // Phone validation
    if (name === "contact") {
      if (!isValidPhoneNumber(value)) {
        setPhoneError("Please enter a valid phone number");
      } else {
        setPhoneError(null);
      }
    }

    

    // Reset companion names when travel type changes
    if (name === "travelType") {
      if (value === "alone") {
        setFormData(prev => ({
          ...prev,
          [name]: value,
          companionNames: [""]
        }));
        setCompanionNameErrors([]);
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

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
    inputs.forEach((input) => {
      const element = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (!element.value.trim()) {
        isValid = false;
      }
    });

    // Extra check for phone number
    if (currentStep === 0 && (!phoneNumber || !isValidPhoneNumber(phoneNumber))) {
      isValid = false;
    }

    // Check companion names validation
    if (currentStep === 1 && formData.travelType === "withSomeone") {
      const hasValidCompanions = formData.companionNames.some(name => name.trim().length > 0);
      const hasErrors = companionNameErrors.some(error => error !== null);
      
      if (!hasValidCompanions || hasErrors) {
        isValid = false;
      }
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

  // Handle submit - Fixed error type from 'any' to 'unknown'
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true); // ⭐ Start loading

  // Convert phone into E.164 format before storing
  const parsedPhone = phoneNumber ? parsePhoneNumber(phoneNumber) : null;
  const formattedPhone = parsedPhone ? parsedPhone.number : phoneNumber;

  // Include package info in submission
  const submissionData = {
    fromPakistan: formData.fromPakistan,
    firstname: formData.firstname,
    lastname: formData.lastname,
    email: formData.email,
    phoneNumber: formattedPhone,
    gender: formData.gender,
    age: formData.age,
    medicalInfo: formData.medicalInfo,
    city: formData.city,
    travelType: formData.travelType,
    companionNames: formData.companionNames.filter(name => name.trim()),
    paymentMethod: formData.paymentMethod,
    packageName: packageId ? getPackageById(packageId)?.name : "N/A",
    tierName: packageId ? getPackageById(packageId)?.tierName : "N/A",
    groupName: packageId ? getPackageById(packageId)?.groupName : "N/A",
    packageDuration: packageId ? getPackageById(packageId)?.duration : "N/A",
    originalPrice: packageId ? getPackageById(packageId)?.price : "N/A",
    discountedPrice: packageId ? getPackageById(packageId)?.discountedPrice : "N/A",
    terms: formData.terms,
  };

  try {
    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "ReadyMadePackage",  // 👈 tells API to use ReadyMadePackage tab
        data: submissionData,
      }),
    });

    const result = await res.json();

    if (result.success) {
      console.log("✅ Booking form submitted:", result);
      setCurrentStep(totalSteps - 1);
      setTimeout(() => setSubmitted(true), 500);
      router.push("/thank-you?from=booking-form");
    } else {
      console.error("❌ Submission failed:", result.error);
      alert("Something went wrong while submitting. Please try again.");
    }
  } catch (error: unknown) {
    console.error("❌ API error:", error);
    alert("Server error while submitting. Please try again.");
  } finally {
    setIsSubmitting(false); // ⭐ Stop loading
  }


  const emailRes = await fetch("/api/send-email-booking", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(submissionData),
});

    const emailResult = await emailRes.json();

    if (!emailResult.success) {
      console.error("❌ Email failed:", emailResult.error);
      alert("Form saved but email notification failed.");
    } else {
      console.log("✅ Emails sent:", emailResult);
    }

};


  useEffect(() => {
    validateStep();
  }, [currentStep, formData.companionNames, companionNameErrors]);

  return (
    <div className="font-sans">
      <HeaderT />
      
      {/* Form Section */}
      <div className="flex justify-center items-center py-10 radial-background">
        <div className="bg-white/60 w-[95%] sm:w-[800px] md:w-[1000px] lg:w-[1138px] max-h-[90vh] rounded-2xl shadow-lg p-6 sm:p-10 border border-[#ad562826] overflow-y-auto">
          

          
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
                  <label className="block mb-2 font-semibold">First Name<span className="text-red-500">*</span></label>
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

                  <label className="block mb-2 font-semibold">Last Name<span className="text-red-500">*</span></label>
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
                  <label className="block mb-2 font-semibold">Email Address<span className="text-red-500">*</span></label>
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
                  <label className="block mb-2 font-semibold">Contact Number (WhatsApp preferred)<span className="text-red-500">*</span></label>
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
                  <label className="block mb-2 font-semibold">Gender<span className="text-red-500">*</span></label>
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
                  <label className="block mb-2 font-semibold">Age</label>
                  <input
                    type="number"
                    name="age"
                    min={12}
                    placeholder="This is for those travelling alone so we can pair you up with applicants of similar age"
                    value={formData.age}
                    onChange={handleInputChange}
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
                    <span className="font-normal">(This helps us ensure your comfort and safety)</span>
                  </label>
                  <textarea
                    name="medicalInfo"
                    placeholder="If yes, please provide details..."
                    value={formData.medicalInfo}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                  />

                  {/* City */}
                  <label className="block mb-2 font-semibold">City<span className="text-red-500">*</span></label>
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
                  <label className="block mb-2 font-semibold">Room Allotment<span className="text-red-500">*</span></label>
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

                  {/* Companion Names Section */}
                  {formData.travelType === "withSomeone" && (
                    <div className="mb-4">
                      <label className="block mb-2 font-semibold">
                        Travel Companion Names (Maximum 5 companions)
                      </label>
                      {formData.companionNames.map((name, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            placeholder={`Full Name (for travel companion ${index + 1})`}
                            value={name}
                            onChange={(e) => handleCompanionNameChange(index, e.target.value)}
                            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5628]"
                          />
                          {formData.companionNames.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeCompanionName(index)}
                              className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                          )}
                          {index === formData.companionNames.length - 1 && formData.companionNames.length < 5 && (
                            <button
                              type="button"
                              onClick={addCompanionName}
                              className="p-3 bg-[#AD5628] text-white rounded-lg hover:bg-[#933f1b] transition-colors"
                            >
                              <Plus size={16} className="text-accent"/>
                            </button>
                          )}
                        </div>
                      ))}
                      
                      {/* Display errors for companion names */}
                      {companionNameErrors.map((error, index) => 
                        error && (
                          <p key={index} className="text-red-500 text-sm mb-2">
                            Companion {index + 1}: {error}
                          </p>
                        )
                      )}
                      
                      {formData.companionNames.length === 5 && (
                        <p className="text-gray-600 text-sm mt-2">
                          Maximum number of companions reached (5)
                        </p>
                      )}
                    </div>
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
                  <div className="flex flex-col gap-3 mb-6">
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

                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#AD5628]">Selected Package</h2>

                  {/* Package Details */}
                  {packageId ? (() => {
                    const packageData = getPackageById(packageId);
                    if (packageData) {
                      return (
                        <div className="bg-gradient-to-r from-[#AD5628]/5 to-[#AD5628]/10 border border-[#AD5628]/20 rounded-lg p-6 mb-6">
                          <div className="text-center space-y-2">
                            <h3 className="text-xl font-bold text-gray-800">{packageData.name}</h3>
                            <p className="text-lg text-[#AD5628] font-semibold">{packageData.tierName} - {packageData.groupName}</p>
                            <p className="text-gray-600">Package Duration: {packageData.duration}</p>
                            <div className="text-2xl font-bold text-[#AD5628]">
                              {packageData.price && packageData.price > packageData.discountedPrice ? (
                                <>
                                  <span className="text-sm text-gray-500 line-through">
                                    PKR {packageData.price.toLocaleString()}
                                  </span>
                                  <br />
                                  PKR {packageData.discountedPrice.toLocaleString()}
                                </>
                              ) : (
                                <span>
                                  PKR {packageData.discountedPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-center">
                          <p className="text-red-600">Package not found. Please select a valid package.</p>
                          <Link href="/umrah-packages" className="text-red-800 underline">Browse packages</Link>
                        </div>
                      );
                    }
                  })() : (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-center">
                      <p className="text-amber-600">No package selected.</p>
                      <Link href="/umrah-packages" className="text-amber-800 underline">Browse packages</Link>
                    </div>
                  )}

                  <label className="flex items-center gap-2 mb-6">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      required
                    />
                     <span>
                      I have read and agree to the{" "}
                      <a href="/terms-and-conditions" className="underline" target="_blank" rel="noopener noreferrer">
                        Terms and Conditions
                      </a>
                    </span>
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
                  <div className="flex gap-3 pt-4">
                    <i>Note: If your form isn&apos;t submitting, check for missing or invalid fields.</i>
                  </div>
                </div>
              )}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense wrapper
export default function ReadyPackageForm() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#AD5628]"></div>
      </div>
    }>
      <BookingFormContent />
    </Suspense>
  );
}