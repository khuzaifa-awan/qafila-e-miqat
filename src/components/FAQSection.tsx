import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { FaWhatsapp } from 'react-icons/fa';

export function FAQSection() {
  const faqs = [
    {
      id: 'faq-1',
      question: 'What documents are required for Umrah visa in 2025?',
      answer: 'For Pakistani citizens, you need: Valid passport (6+ months validity), completed visa application form, recent passport-sized photographs, confirmed flight booking, hotel reservation confirmation, vaccination certificates (including COVID-19 if required), and proof of relationship for Mahram (for female pilgrims). We assist with the complete visa process.'
    },
    {
      id: 'faq-2',
      question: 'Can I customize my Umrah package?',
      answer: 'Yes! We offer flexible customization options. You can modify hotel categories, extend your stay, add extra cities like Istanbul or Dubai, choose flight preferences, and add special services like private transport or guided tours. Our team will provide a customized quote based on your preferences.'
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
      question: 'Is group travel mandatory or can I travel independently?',
      answer: 'We offer both options! Group travel includes guided tours, group activities, and shared transportation - great for first-time pilgrims. Independent packages give you more flexibility while still providing support services. You can also join partial group activities even with independent packages.'
    },
    {
      id: 'faq-7',
      question: 'What safety measures are in place for solo female travelers?',
      answer: 'We prioritize safety for all pilgrims, especially solo female travelers. Our packages include: Female group coordinators, safe accommodation arrangements, proper Mahram documentation assistance, 24/7 emergency support, group supervision during religious activities, and connections with other female pilgrims for companionship.'
    },
    {
      id: 'faq-8',
      question: 'How do I make payments and what is your cancellation policy?',
      answer: 'Payment plan: 30% advance booking, 50% one month before travel, 20% final payment 15 days before departure. Cancellation policy: 100% refund if cancelled 60+ days before travel, 50% refund for 30-60 days, 25% refund for 15-30 days. No refund within 15 days of travel unless due to visa rejection or medical emergency.'
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
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#AD5628] text-[#AD5628] font-medium px-5 py-3 rounded-md shadow-md hover:bg-[#AD5628] hover:text-white transition"
                  >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                    Chat with us
              </a>
              <button className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
                Call Now: +92-42-8765432
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}