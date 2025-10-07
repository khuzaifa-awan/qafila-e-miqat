import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { FaWhatsapp } from 'react-icons/fa';

export function FAQSection() {
  const faqs = [
    {
      id: 'faq-1',
      question: 'What documents are required for Umrah visa in 2025?',
      answer: `To apply for an Umrah visa in 2025, you will need the following: 
      - A valid passport (at least 6 months validity with 2 blank pages) 
      - Recent passport-size photographs (white background)
      - CNIC copy for adults / B-Form for children 
      - Valid vaccination certificate (Meningitis ACWY is compulsory)
      - Confirmed round-trip flight ticket
      - Confirmed hotel bookings in Makkah and Madinah (through licensed hotels / Nusuk platform)
      - Filled visa application form and biometric verification (if required) 
      - Proof of relationship for women traveling with Mahram (marriage certificate, birth certificate, or family registration certificate)  
      - Visa fee payment receipt  

      Tip: Make sure all documents are valid and that names match exactly across passport, CNIC, and bookings to avoid delays.`
    },
    {
      id: 'faq-2',
      question: 'Can I customize my Umrah package?',
      answer: 'Yes! We offer flexible customization options. You can modify hotel categories, choose flight preferences, and add special services like private transport or guided tours. Our team will provide a customized quote based on your preferences.'
    },
    {
      id: 'faq-3',
      question: 'What is included in the package price?',
      answer: 'Our packages include: Round-trip flights from major Pakistani cities, Umrah visa processing, accommodation in Mecca and Medina, daily breakfast and dinner, airport transfers, ground transportation between cities, guided group tours of religious sites, 24/7 customer support, and basic travel insurance.'
    },
    {
      id: 'faq-4',
      question: 'How far are the hotels from Haram Sharif?',
      answer: 'Our hotel selection varies by package tier: 5-star packages include hotels within 100-300 meters walking distance from Haram. 4-star packages are typically 300-800 meters away. 3-star packages may require 10-15 minutes walking or shuttle service. All hotels are carefully selected for comfort and proximity.'
    },
    {
      id: 'faq-5',
      question: 'What if my visa gets rejected?',
      answer: 'We maintain a 100% visa success rate for eligible applicants. However, if a visa is rejected due to factors beyond our control, we provide a full refund minus any non-refundable fees (typically flight penalties). We review all applications thoroughly before submission to minimize any risk.'
    },
    {
      id: 'faq-6',
      question: 'How much will Umrah cost?',
      answer: 'The cost of Umrah depends on your travel dates, hotel preference, and transport choice. Economy packages usually start at a budget-friendly range and include 3-star hotels with shared transport. Standard packages are moderately priced, featuring 4-star hotels closer to Haram with more comfort. Luxury packages are on the higher end, offering 5-star hotels nearest to Haram along with private transport. Prices depend on airline availability and the season, especially during Ramadan when costs are generally higher. For an exact quote, please share your travel dates and requirements with us.'
    },
    {
      id: 'faq-7',
      question: 'What safety measures are in place for solo female travelers?',
      answer: 'We prioritize safety for all pilgrims, especially solo female travelers. According to Islamic teachings, a woman must be accompanied by her Mahram when traveling for Umrah or Hajj. This guidance is for her honor, comfort, and protection. At Qafila-e-Miqat Travel, we strictly follow this principle and only arrange Umrah packages for sisters who are traveling with their Mahram. This ensures safety, peace of mind, and alignment with the Sunnah.'
    },
    {
      id: 'faq-8',
      question: 'How do I make payments and what is your cancellation policy?',
      answer: 'A small advance (usually 30–40%) is required, with the balance payable before departure. If you need to cancel your booking, please inform us as early as possible. Flight tickets, visa fees, and hotel bookings are subject to airline and supplier rules, which may be non-refundable. In addition, a small amount of service charges will be deducted from the refundable amount. Any remaining balance after deductions will be returned to you. We handle cancellations fairly, with honesty, and in line with Islamic values of trust (Amanah)'
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our Umrah packages and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Help */}
          <div className="mt-12 text-center bg-muted/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our experienced team is here to help you plan the perfect Umrah journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href="https://wa.me/923455631563"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#AD5628] text-[#AD5628] font-medium px-5 py-3 rounded-md shadow-md hover:bg-[#AD5628] hover:text-accent transition"
                  >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                    Chat with us
              </a>
              <button className="border border-border px-6 py-3 rounded-lg font-semibold hover:text-accent! hover:bg-[#AD5628]  transition-colors">
                <a href="tel:03455631563">Call Now: 0345-5631563</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}