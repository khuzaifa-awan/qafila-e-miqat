import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <footer className="bg-gradient-to-r from-primary to-primary text-accent">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 rounded-lg p-6 mb-4 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-accent text-center">Logo</h2>
            </div>
            <p className="text-sm text-accent">
              Pakistan's Most Reliable Umrah Partner
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <p>0300-0000000</p>
              <p>booking@qafilaemiqat.com</p>
            </div>
          </div>

          {/* Package Umrah */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-accent">Package Umrah</h3>
            <div className="space-y-2 text-sm">
              <p>Premimum Umrah</p>
              <p>Standard Umrah</p>
              <p>Economy Umrah</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <p className="hover:text-accent cursor-pointer transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >Home</p>
              <p className="hover:text-accent cursor-pointer transition-colors">About Us</p>
              <a href="https://wa.me/923215745745"><p className="hover:text-accent cursor-pointer transition-colors">Contact us</p></a>
            </div>
          </div>

          {/* Office Place */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-accent">Office Place</h3>
            <div className="text-sm">
              <p>Malik Plaza Office#4,</p>
              <p>Attock, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-accent my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-sm text-accent">
      <p>
          Copyright © 2025 - All Rights are Reserved by Qafila-e-Miqat Travel and Tours |{" "}
          <a
            href="/terms-and-conditions"
            className="hover:underline hover:text-accent transition-colors"
          >
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a
            href="/privacy-policy"
            className="hover:underline hover:text-accent transition-colors"
          >
            Privacy Policy
          </a>
        </p>

      <p className="mt-1">
        Designed and Developed by{" "}
        <a
          href="https://wa.me/923215745745"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 underline hover:text-accent transition-colors"
          onMouseEnter={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
        >
          Creavox Media
          {showIcon && <SquareArrowOutUpRight size={16} />}
        </a>
      </p>
    </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a href="https://www.instagram.com/qafilaemiqat/" target="_blank" rel="noopener noreferrer">
                <div className="bg-primary p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm">
                <FaInstagram size={20} className="text-accent" />
                </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/qafilaemiqat/" target="_blank" rel="noopener noreferrer">
                <div className="bg-primary p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm">
                <FaFacebookF size={20} className="text-accent" />
                </div>
            </a>
             {/* TikTok */}
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-primary p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm">
                <FaTiktok size={20} className="text-accent" />
                </div>
            </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
