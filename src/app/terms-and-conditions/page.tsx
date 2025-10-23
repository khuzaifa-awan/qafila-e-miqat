"use client";

import { HeaderL } from "@/components/HeaderL";
import { FileText, Briefcase, CreditCard, XCircle, Plane, Hotel, AlertTriangle, Users, Heart, Scale, CheckSquare, Calendar } from "lucide-react";

export default function TermsAndConditions() {
  const sections = [
    {
      id: "scope-of-services",
      title: "1. Scope of Services",
      icon: Briefcase,
      content: (
        <>
          <p className="mb-4">
            <strong>1.1:</strong> Qafila-e-Miqat Travel and Tours exclusively provides services related to Umrah travel bookings, including:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Airline ticket reservations</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Hotel accommodations in Makkah and Madinah</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Visa processing assistance</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Transportation arrangements within Saudi Arabia</div>
            </li>
          </ul>
          <p>
            <strong>1.2:</strong> We do not offer services outside Umrah travel.
          </p>
        </>
      ),
    },
    {
      id: "booking-payments",
      title: "2. Booking and Payments",
      icon: CreditCard,
      content: (
        <>
          <p className="mb-3">
            <strong>2.1:</strong> A booking is confirmed only upon receipt of a minimum advance payment of thirty percent (35%) to forty percent (40%) of the total package price.
          </p>
          <p className="mb-3">
            <strong>2.2:</strong> The remaining balance must be cleared prior to the scheduled departure date. 
          </p>
            <p className="mb-3">
            <strong>2.3:</strong> Payments can be made via bank transfer, or other methods as specified by the Company.
          </p>
          <p>
            <strong>2.4:</strong> All prices are quoted in Pakistani Rupees (PKR) and are subject to change based on currency fluctuations, government fees, and supplier costs until full payment is received.
          </p>
        </>
      ),
    },
    {
      id: "cancellation-refunds",
      title: "3. Cancellation and Refunds",
      icon: XCircle,
      content: (
        <>
          <p className="mb-3">
            <strong>3.1:</strong> Requests for cancellation must be communicated to us in writing as early as possible.
          </p>
          <p className="mb-3">
            <strong>3.2:</strong> Refunds are subject to the rules and policies of airlines, hotels, and other service providers. Certain fees, such as airline tickets, visa fees, and confirmed hotel bookings, may be fully or partially non-refundable.
          </p>
          <p className="mb-3">
            <strong>3.3:</strong> In the event of cancellation by the Client, the Company reserves the right to retain 10% of the advance payment to cover administrative costs and any non-refundable amounts charged by airlines, hotels, or other service providers. Any remaining balance, if applicable, will be refunded to the Client.
          </p>
          <p>
            <strong>3.4:</strong> Any refundable balance, after applicable deductions, will be returned to the Client. Refunds will be processed fairly, transparently, and in line with the principles of Amanah (trust) as recognized under Islamic values.
          </p>
        </>
      ),
    },
    {
      id: "visa-travel-documents",
      title: "4. Visa and Travel Documents",
      icon: FileText,
      content: (
        <>
          <p className="mb-3">
            <strong>4.1:</strong> The Client is solely responsible for providing valid travel documents, including a passport (with at least six months validity), national identification documents, photographs, vaccination certificates, and any other documents required by Saudi authorities.
          </p>
          <p>
            <strong>4.2:</strong> The Company will assist in visa applications but does not guarantee visa approval. The decision to issue or reject a visa rests exclusively with the Saudi authorities.
          </p>
        </>
      ),
    },
    {
      id: "accommodation-flights",
      title: "5. Accommodation and Flights",
      icon: Hotel,
      content: (
        <>
          <p className="mb-3">
            <strong>5.1:</strong> Hotel room allocation, bed types, views (e.g., Haram view), and amenities are subject to the policies and availability of the respective hotels.
          </p>
          <p>
            <strong>5.2:</strong> Airline seating, flight timings, and routes are subject to availability and may be changed by the airline without prior notice. The Company shall not be held responsible for such changes.
          </p>
        </>
      ),
    },
    {
      id: "liability-force-majeure",
      title: "6. Liability and Force Majeure",
      icon: AlertTriangle,
      content: (
        <>
          <p className="mb-4">
            <strong>6.1:</strong> The Company acts solely as an intermediary between the Client and airlines, hotels, and other suppliers. We are not responsible for the acts, omissions, or defaults of these third parties.
          </p>
          <p className="mb-3">
            <strong>6.2:</strong> We shall not be held liable for any loss, delay, injury, inconvenience, or expense arising from circumstances beyond our control, including but not limited to:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Airline delays or cancellations</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Visa rejection or delays by Saudi authorities</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Natural disasters, political unrest, strikes, or other force majeure events</div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#AD5628] rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>Health issues, accidents, or misconduct by the Client</div>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "code-of-conduct",
      title: "7. Code of Conduct",
      icon: Users,
      content: (
        <>
          <p className="mb-3">
            <strong>7.1:</strong> Clients are required to conduct themselves with respect, dignity, and adherence to Islamic principles throughout their journey.
          </p>
          <p>
            <strong>7.2:</strong> All travelers must comply with the laws and regulations of the Kingdom of Saudi Arabia. The Company shall not be responsible for any legal consequences arising from a Client&apos;s violation of local laws.
          </p>
        </>
      ),
    },
    {
      id: "health-fitness",
      title: "8. Health and Fitness",
      icon: Heart,
      content: (
        <>
          <p className="mb-3">
            <strong>8.1:</strong> It is the Client&apos;s responsibility to ensure they are medically fit to undertake the journey. Travelers with pre-existing conditions should consult a physician before booking.
          </p>
          <p>
            <strong>8.2:</strong> The Company is not liable for any medical emergencies, expenses, or inability to perform rituals due to health issues.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "9. Governing Law",
      icon: Scale,
      content: (
        <>
          <p className="mb-3">
            <strong>9.1:</strong> These Terms and Conditions shall be governed and construed in accordance with the laws of Pakistan.
          </p>
          <p>
            <strong>9.2:</strong> Any disputes, claims, or proceedings arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Pakistan.
          </p>
        </>
      ),
    },
    {
      id: "acceptance",
      title: "10. Acceptance",
      icon: CheckSquare,
      content: (
        <>
          <p>
            By making a booking with Qafila-e-Miqat Travel and Tours, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-[#FBF7F0]">
        <HeaderL />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#AD5628] to-[#8b4320] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg md:text-xl text-center opacity-90 mb-6">
            Please read these terms carefully before booking
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
          <h2 className="text-2xl font-bold text-[#444] mb-4">Company: Qafila-e-Miqat Travel and Tours</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms and Conditions (&quot;Terms&quot;) constitute a binding agreement between you (&quot;Client,&quot; &quot;Passenger,&quot; or &quot;Traveler&quot;) and Qafila-e-Miqat Travel and Tours (&quot;the Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p className="text-gray-700 leading-relaxed">
            By booking any Umrah package or related services with us, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#AD5628] to-[#8b4320] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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

        {/* Important Notice */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 md:p-8">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Important Notice
              </h3>
              <p className="text-amber-800 leading-relaxed">
                By proceeding with your booking, you confirm that you have carefully read and fully understood all the terms and conditions outlined above. These terms are legally binding and govern your relationship with Qafila-e-Miqat Travel and Tours.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="mt-8 bg-gradient-to-r from-[#AD5628] to-[#8b4320] rounded-2xl shadow-lg p-6 md:p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Have Questions About These Terms?
          </h3>
          <p className="mb-6 opacity-90">
            If you need clarification or have any concerns, please contact us before making a booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:qafilaemiqat@gmail.com"
              className="bg-white text-[#AD5628] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              <span>Email Us</span>
            </a>
            <a
              href="https://wa.me/03455631563"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 flex items-center"
            >
              <span>Call Us: 0345-5631563</span>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            Last updated: October 6th, 2025 | &copy; 2025 Qafila-e-Miqat Travel and Tours. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}