import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  referralSource?: 'homepage' | 'direct';
}

export function HeroSection({ referralSource = 'direct' }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1704104501136-8f35402af395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWFiYSUyMG1lY2NhJTIwaXNsYW1pY3xlbnwxfHx8fDE3NTgzNjg1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1721401159543-de99eb95d812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpbmElMjBtb3NxdWUlMjBpc2xhbWljJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1ODM2ODU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1724488258906-ce80713e28ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwZ2VvbWV0cmljJTIwcGF0dGVybnN8ZW58MXx8fHwxNzU4MzY4NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  const getHeadline = () => {
    if (referralSource === 'homepage') {
      return "Explore Our Handpicked 7-Day Umrah Packages";
    }
    return "Choose From Our Best-Selling Umrah Packages for 2025";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <ImageWithFallback
            key={index}
            src={image}
            alt={`Islamic background ${index + 1} - Umrah packages from Pakistan`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mt-6 mb-6 drop-shadow-lg">
          Affordable & Luxury Umrah Packages from Pakistan (2025)
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-accent/90 mb-6 drop-shadow-md">
          {getHeadline()}
        </h2>
        
        <p className="text-sm md:text-xl text-accent/80 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Flights, Visa, Hotels & Transport Included – Everything You Need for a Peaceful Journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary !text-accent px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
          >
            View All Packages
          </button>
          <button 
            onClick={() => window.open('https://wa.me/923455631563', '_blank', 'noopener,noreferrer')}
            className="bg-accent/90 !text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all transform hover:scale-105 shadow-lg"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}