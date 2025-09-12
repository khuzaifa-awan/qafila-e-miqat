'use client';

import React, { useState } from 'react';
import { Package } from './packagesData';
import PackageCard from './PackageCard';

type PackageListProps = {
  packages: Package[]; // Changed from PackageData to Package
};

const PackageList = ({ packages }: PackageListProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Left swipe
      document.getElementById('packageList')?.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
    
    if (touchStart - touchEnd < -50) {
      // Right swipe
      document.getElementById('packageList')?.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      id="packageList"
      className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {packages.map((pkg) => (
        <div 
          key={pkg.id}
          className="snap-start min-w-[300px] md:min-w-[calc(33.33%-1rem)] flex-shrink-0"
        >
          <PackageCard {...pkg} />
        </div>
      ))}
    </div>
  );
}