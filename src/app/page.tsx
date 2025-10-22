"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AnnouncementBar from "@/components/ui/announcementBar";
import AirlineTrustSection from "@/components/AirlineTrustSection";
import PackageTierSection from "@/components/PackageTierSection";
import HeroCanvas from '@/components/HeroCanvas'; 
import FacilitiesSection from "@/components/FacilitiesSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import Newsletter from "@/components/NewsLetterSection";


export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: './umrah-packages' },
    { name: 'Request for Custom Package', href: './custom-package' },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="font-sans min-h-screen bg-background">
      {/* Announcement Banner */}
      <AnnouncementBar/>
      {/* Hero Section */}
      {/* <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative"> */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative h-screen flex flex-col pt-8">

        {/* Mobile background image */}
        <div className="md:hidden absolute inset-0 z-0">
          <div className="bg-[url('/images/hero-mobile.svg')] bg-cover bg-center w-full h-full opacity-100" />
        </div>

        {/* Header */}
        <header className="top-0 z-50 w-full !bg-transparent">
              <div className="container mx-auto px-4 !bg-transparent">
                {/* Top bar with contact info */}
                <div className="flex items-center justify-between pb-4 !bg-transparent">
                  {/* Logo */}
                  <Image
                    src="/images/logo.svg"
                    alt="Qafila-e-Miqat Travel and Tours"
                    width={80}
                    height={120}
                    priority
                    className="w-16 h-20 sm:w-22 sm:h-20"
                  />
                    
                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
        
        
                  {/* Mobile menu button */}
                  <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X className="w-6 h-6 !text-accent" /> : <Menu className="w-6 h-6 !text-accent" />}
                  </button>
                </div>
        
                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <div className="md:hidden py-4 border-t">
                    <nav className="flex flex-col space-y-4 ">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="nav-link !text-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            </header>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 pt-4 lg:pt-0 pb-8 relative">

          {/* Left Side Text */}
          <div className="w-full md:w-[55%] order-2 md:order-1 pr-1 sm:pr-2 lg:pr-3 relative z-10 lg:pt-24">

            {/* Heading Slide-Up */}
            <h1
              className={`text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-6 max-md:text-[#FCF6EC] text-text leading-tight [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)] ${
                isVisible ? "animate-slideUp" : "opacity-0"
              }`}
            >
              Make Your Umrah Journey Easy & Hassle Free with Qafila-e-Miqat
            </h1>

            {/* Paragraph Slide-Up */}
            <p
              className={`text-base sm:text-xl mb-8 max-md:text-[#FCF6EC] text-text font-normal [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)] sm:[text-shadow:none] ${
                isVisible ? "animate-slideUp-delay" : "opacity-0"
              }`}
            >
              Perform Umrah with complete peace of mind. We handle your visa,
              flights, hotels, foods, and transport, so you can focus on your
              Ibādah.
            </p>

            {/* Get Free Consultation Button Zoom Animation */}
          <Link href="https://wa.me/03455631563" target="_blank" rel="noopener noreferrer">
            <button
              style={{ backgroundColor: "#AD5628", color: "#FCF6EC" }}
              className={`w-full md:w-auto px-8 py-3.5 rounded-md font-medium text-base 
                        transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg ${
                          isVisible ? "animate-zoom-delay-2" : "opacity-0"
                        }`}
            >
              Get Free Consultation
            </button>
          </Link>
          </div>

          {/* Right Side Image */}

          <div className="py-0 z-[5] md:z-20 w-full md:w-[45%] order-1 md:order-2 relative mb-8 md:mb-0">
            <div className="overflow-hidden">
              <Image
                src="/images/hero-desktop.svg"
                alt="Umrah Journey Images"
                width={1200}
                height={1000}
                className="w-full h-auto hidden md:block"
              />
            </div>
          </div>
        </div>
        {/* Hadith Section */}
        <div className="w-full flex justify-center items-center px-4 sm:px-6 md:px-8 my-8 relative z-20">
          <div className="text-center max-w-7xl">
            <p className="pt-4 sm:pt-0 text-base sm:text-lg md:text-base font-normal text-[#444] max-md:text-[#FCF6EC] leading-relaxed [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)] ">
              The Prophet ﷺ said:
              <span className="italic">
                "Alternate between Hajj and Umrah; for those two remove 
                poverty and sins just as the bellows removes filth from iron, gold, and silver - 
                and there is no reward for Al-Hajj Al-Mabrur except for Paradise."
              </span>
            </p>

            <p className="font-semibold sm:font-normal text-sm text-gray-500 mt-3">
              (Jamiʿ at-Tirmidhi - 810)
            </p>
          </div>
        </div>
      </div>

      {/* Airline Trust Section */}
      <AirlineTrustSection />
      <PackageTierSection />

      {/* -----------------------------------------------HeroCanvas----------------------------------------------- */}
      

     {/* Hero Canvas Section */}
      <section className="relative w-full h-screen">
        <HeroCanvas />
      {/* Text container */}
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FCF6EC] max-w-[600px] leading-tight">
              Step Into the Journey Allah Has Chosen for You
            </h1>
            <p className="text-lg italic text-[#FCF6EC] mt-4 max-w-[500px] leading-relaxed">
              Answer the call of Allah and begin a journey that purifies your heart and soul. Every step brings you closer to His House, where prayers are heard, sins are forgiven, and faith is renewed.
            </p>
          </div>
        </section>
        <div className="h-screen w-full" />



        {/* Airplane Section */}
        <section className="relative h-screen flex items-center px-8 md:px-12">
          <div className="flex flex-col items-start z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FCF6EC] max-w-[600px] leading-tight">
              Rising Towards the Land Allah Blessed    
            </h1>
            <p className="text-lg italic text-[#FCF6EC] mt-4 max-w-[500px] leading-relaxed">
              Let us guide you with care and devotion because this journey is more than travel, it brings you closer to Allah.
            </p>
          </div>
        </section>
        <div className="h-screen w-full" />


        {/* Mecca Section */}
        <section className="relative h-[200vh] lg:h-[200vh] flex items-center px-8 md:px-12">
          <div className=" sticky top-1/2 -translate-y-1/2 flex flex-col items-start z-20 pt-20 md:pt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FCF6EC] max-w-[600px] leading-tight">
              The Heart of Faith, The House of Allah   
            </h1>
            <p className="text-lg italic text-[#FCF6EC] mt-4 max-w-[500px] leading-relaxed">
              Here, faith is renewed, forgiveness is granted, and souls draw closer to Allah.
            </p>
            <Link href="/umrah-packages">
            <button
              className="mt-6 px-6 py-3 rounded-xl font-semibold bg-[#FCF6EC] text-[#4a4a4a] shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Explore Packages
            </button>
            </Link>
          </div>
        </section>
        
        <FacilitiesSection />


    {/* -----------------------------------------------Authorities Approval Section----------------------------------------------- */}

        <section className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Approved by Pakistan's Leading Authorities
            </h2>
            <div className="flex flex-row items-center justify-around gap-8 md:gap-16">
              <div className="flex items-center justify-center">
                <img
                  src="/images/dts-logo.svg"
                  alt="Department of Tourist Services"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/secp-logo.svg"
                  alt="SECP"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/fbr-logo.svg"
                  alt="FBR Pakistan"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

    {/* -----------------------------------------------5% announcment Section----------------------------------------------- */}


        <section className="container mx-auto px-4 py-16">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <img
          src="/images/Pak.svg" // Replace with your own image path
          alt="Promotional Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional Overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 px-8 py-16 text-center text-white">
          {/* PAK → KSI with airplane */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <span
                className="font-horizon text-2xl md:text-5xl font-bold tracking-wider"
                style={{ fontFamily: "Horizon, sans-serif" }}
              >
                PAK
              </span>
              {/* Flight Path */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 120"
                  className="w-full min-w-[100px] max-w-lg h-24 text-white mx-6"
                  fill="none"
                >
                  {/* Curved dashed path */}
                  <path
                    d="M5 80 Q 150 10, 300 60 T 495 80"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="12,10"
                    fill="transparent"
                  />
                </svg>
              <span
                className="font-horizon text-2xl md:text-5xl font-bold tracking-wider"
                style={{ fontFamily: "Horizon, sans-serif" }}
              >
                KSA
              </span>
            </div>
          </div>
          {/* Main promotional text */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight">
            Don&apos;t Miss the 5% Discount if you
            Book <br />before 30 October
          </h2>

          {/* Book Now Button */}
          <Link href="/umrah-packages" >
          <button className="relative flex items-center justify-between border-2 border-white text-white font-bold text-lg rounded-full px-6 py-2 mx-auto group overflow-hidden">
            <span className="relative z-10 flex items-center w-full">
              <span className="pr-12">BOOK NOW</span>
              <span className="absolute -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-800 transition-transform duration-300 group-hover:translate-x-1">
                <ChevronRight className="w-4 h-4" />
              </span>
            </span>
          </button>
          </Link>
        </div>
      </div>
    </section>

    {/* -----------------------------------------------NewsLetter Section----------------------------------------------- */}

      <Newsletter />
      {/* Footer Section */}
      <Footer />
    </div>
    
    
  );
  
}



