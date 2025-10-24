import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CircleArrowDown } from 'lucide-react';

interface HeroSectionProps {
  logoSrc?: string;
  logoAlt?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  title?: string;
  ctaText?: string;
  ctaScrollTarget?: string;
  homeButtonBgColor?: string;
  homeButtonTextColor?: string;
  isVisible?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  logoSrc = '/images/logo.svg',
  logoAlt = 'Qafila-e-Miqat Travel and Tours',
  backgroundImage = '/images/hero-second.svg',
  backgroundAlt = 'Umrah Journey Images',
  title = 'MADE JUST\nFOR YOU',
  ctaText = 'Customized My Journey',
  ctaScrollTarget = 'form-section',
  homeButtonBgColor = '#AD5628',
  homeButtonTextColor = '#FCF6EC',
  isVisible = true,
}) => {
  const handleCtaClick = () => {
    const targetSection = document.getElementById(ctaScrollTarget);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-center flex flex-col items-center justify-center">
      <header className="absolute top-12 left-0 w-full px-8 sm:px-14 lg:px-24 flex justify-between items-center z-30">
        <Link href="/">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={60}
            height={90}
            priority
            className={`${
              isVisible ? 'animate-zoom' : 'opacity-0'
            } w-12 h-16 sm:w-16 sm:h-24`}
          />
        </Link>

        <Link href="/">
          <button
            style={{ backgroundColor: homeButtonBgColor, color: homeButtonTextColor }}
            className="px-4 py-2 sm:px-8 sm:py-3.5 rounded-md font-medium text-sm sm:text-base
                      transition-all duration-300 transform hover:scale-105 hover:opacity-90 hover:shadow-lg"
          >
            Home
          </button>
        </Link>
      </header>

      <div className="absolute inset-0 w-full h-full z-10">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
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
        {title}
      </h1>

      <button
        onClick={handleCtaClick}
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
        {ctaText}
        <CircleArrowDown className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" />
      </button>
    </section>
  );
};

export default HeroSection;