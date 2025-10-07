"use client";

import { HeaderL } from "@/components/HeaderL";
import { Shield, Lock, Eye, UserCheck, FileText, Mail, Phone, Calendar, AlertCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "information-collect",
      title: "1. Information We Collect",
      icon: FileText,
      content: (
        <>
          <p className="mb-4">
            We may collect the following categories of personal information when you use our services:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Identity Information:</strong> Full name, gender, date of birth, age.
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Contact Information:</strong> Phone number, email address.
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Travel & Visa Information:</strong> CNIC, Passport details, B-Form for children, travel dates, booking preferences, hotel and transport preferences, number of travelers.
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Health Information:</strong> Limited information such as medical conditions, only when required for visa processing or travel arrangements.
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Payment details:</strong> We record and store booking and payment details such as package price, mode of payment (cash, bank transfer, or online), and payment status. We do not store or process credit card numbers or sensitive financial information.
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>
                <strong>Children's Data:</strong> Information about children under 18 (e.g., name, age, passport/B-Form details) is only collected when necessary for Umrah bookings and always provided by parents or guardians. This data is never used for marketing.
              </div>
            </li>
          </ul>
          <div className="mt-4 p-4 bg-[#FFF9F0] border-l-4 border-[#AD5628] rounded">
            <p className="text-sm text-gray-700">
              We do <strong>not</strong> collect or store payment details such as credit card information.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      icon: UserCheck,
      content: (
        <>
          <p className="mb-4">
            Your personal information may be used for the following purposes:
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="pl-2">To process Umrah package bookings and visa applications.</li>
            <li className="pl-2">To provide consultation, travel assistance, and related services.</li>
            <li className="pl-2">To maintain internal records and comply with legal obligations.</li>
            <li className="pl-2">To send important service-related communications (e.g., booking confirmations, updates).</li>
            <li className="pl-2">To send promotional offers, newsletters, and updates <strong>only to subscribers who have opted in</strong>.</li>
            <li className="pl-2">To improve our services, conduct analytics, and run marketing campaigns.</li>
          </ol>
        </>
      ),
    },
    {
      id: "data-retention",
      title: "3. Data Retention",
      icon: Calendar,
      content: (
        <>
          <p className="mb-4">
            We retain your personal data for as long as necessary to fulfill the purposes described above, including:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <strong className="text-[#AD5628]">Booking and Visa Records:</strong>
              <p className="text-sm text-gray-700 mt-1">Retained for record-keeping and legal compliance.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <strong className="text-[#AD5628]">Newsletter Subscriptions:</strong>
              <p className="text-sm text-gray-700 mt-1">Retained until you unsubscribe.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <strong className="text-[#AD5628]">General Data:</strong>
              <p className="text-sm text-gray-700 mt-1">Retained as required under Pakistani law or until it is no longer needed for the stated purposes.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "4. Data Sharing and Disclosure",
      icon: Eye,
      content: (
        <>
          <p className="mb-4">
            We may share your personal data only in the following circumstances:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>With airlines, hotels, travel Partners or transportation providers as required to fulfill your booking.</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>With government authorities for visa processing and regulatory compliance.</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>With service providers (e.g., IT, email, or marketing platforms) strictly for business operations.</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>When required by law, regulation, or court order.</div>
            </li>
          </ul>
          <div className="mt-4 p-4 bg-[#FFF9F0] border-l-4 border-[#AD5628] rounded">
            <p className="text-sm font-semibold text-gray-800">
              We do not sell, rent, or trade your personal data to third parties.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "data-security",
      title: "5. Data Security",
      icon: Lock,
      content: (
        <>
          <p className="mb-4">
            We implement reasonable technical and organizational measures to safeguard your personal information from unauthorized access, misuse, or disclosure.
          </p>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
            <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              However, no system can guarantee absolute security. By providing your data, you acknowledge and accept the associated risks.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "marketing",
      title: "6. Marketing and Newsletters",
      icon: Mail,
      content: (
        <>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>You will only receive promotional emails, offers, or newsletters if you have explicitly subscribed.</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>You may opt out at any time by clicking the "unsubscribe" link or contacting us directly.</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Marketing communications will not be sent to children under 18.</div>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "children",
      title: "7. Children's Privacy",
      icon: Shield,
      content: (
        <>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>We do not knowingly collect data directly from children under 18.</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>All information about children is provided by parents/guardians strictly for booking and visa purposes.</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Such data will never be used for advertising or promotional activities.</div>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "legal-basis",
      title: "8. Legal Basis for Processing",
      icon: FileText,
      content: (
        <>
          <p className="mb-4">
            We process personal data based on the following grounds:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-[#AD5628] mb-2">Performance of a Contract</p>
              <p className="text-sm text-gray-700">To process your bookings</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-[#AD5628] mb-2">Legal Obligations</p>
              <p className="text-sm text-gray-700">Compliance with regulations</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-[#AD5628] mb-2">Consent</p>
              <p className="text-sm text-gray-700">For newsletters and marketing</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-[#AD5628] mb-2">Legitimate Interests</p>
              <p className="text-sm text-gray-700">Service improvement, fraud prevention</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "your-rights",
      title: "9. Your Rights",
      icon: UserCheck,
      content: (
        <>
          <p className="mb-4">
            You have the following rights regarding your personal data:
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="pl-2">Right to request correction of inaccurate or incomplete data.</li>
            <li className="pl-2">Right to request deletion of your personal data (subject to legal or regulatory requirements).</li>
            <li className="pl-2">Right to withdraw consent for marketing communications at any time.</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600 italic">
            Requests may be submitted via our official contact details below.
          </p>
        </>
      ),
    },
    {
      id: "jurisdiction",
      title: "10. Jurisdiction and Disputes",
      icon: FileText,
      content: (
        <>
          <p className="mb-3">
            This Privacy Policy shall be governed by and interpreted in accordance with the laws of Pakistan.
          </p>
          <p>
            Any disputes arising under this Policy shall be subject to the exclusive jurisdiction of the courts of Pakistan.
          </p>
        </>
      ),
    },
    {
      id: "updates",
      title: "11. Updates to This Privacy Policy",
      icon: Calendar,
      content: (
        <>
          <p>
            We may update or amend this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or services. Updates will be posted on our website with a revised effective date.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-accent]">
        <HeaderL />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-[#8b4320] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-center opacity-90 mb-6">
            Your privacy is important to us
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Effective Date: 1st September, 2025</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Qafila-e-Miqat Travel and Tours ("Company," "we," "our," or "us") values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and safeguard the personal information you provide when using our services, including our website and booking forms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our services, you agree to the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#8b4320] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#444] mt-1">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-primary to-[#8b4320] rounded-2xl shadow-lg p-6 md:p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            12. Contact Information
          </h2>
          <p className="text-center mb-6 opacity-90">
            If you have any questions or concerns regarding this Privacy Policy or the handling of your data, you may contact us at:
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">Qafila-e-Miqat Travel and Tours</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:qafilaemiqat@gmail.com" className="hover:underline">
                  qafilaemiqat@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-3" />
                <a href="https://wa.me/03455631563" className="hover:underline">
                  0345-5631563
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            Last updated: October 6th, 2025 | © 2025 Qafila-e-Miqat Travel and Tours. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}