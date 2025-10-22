"use client"
import { useState, useEffect } from 'react';
// import type { Metadata } from "next";
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PackageCard, Package } from '@/components/PackageCard';
import { FiltersAndSort, FilterOptions } from '@/components/FiltersAndSort';
import { FAQSection } from '@/components/FAQSection';
import  Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/buttonP';
import { X } from 'lucide-react';

// Import your tier/group packages data
import { packages as tierPackages, getPackagesByTier, getPackagesByGroup } from '@/data/packages';
import FacilitiesSection from '@/components/FacilitiesSection';
// export const metadata: Metadata = {
//   title: "Best & Affordable Umrah Packages 2025 from Pakistan | Qafila-e-Miqat",
//   description:
//     "Book cheap and best Umrah packages 2025 from Pakistan. Qafila-e-Miqat offers complete Umrah services including visa, flights, hotels, and transport. Available from Karachi, Lahore, Islamabad, Multan, Sialkot, Faisalabad, and Attock. Group, private, VIP & family Umrah packages.",
//   keywords: [
//     "cheap umrah packages",
//     "best umrah packages Pakistan",
//     "umrah packages 2025 Pakistan",
//     "umrah packages Karachi",
//     "umrah packages Lahore",
//     "umrah packages Islamabad",
//     "umrah packages Multan",
//     "umrah packages Sialkot",
//     "umrah packages Faisalabad",
//     "umrah packages Attock",
//     "VIP umrah packages Pakistan",
//     "VIP umrah packages Lahore",
//     "group umrah packages Pakistan",
//     "private umrah packages Pakistan",
//     "umrah package for family 2025",
//     "how to book umrah from Pakistan",
//     "ramadan umrah package 2025"
//   ],
//   openGraph: {
//     title: "Qafila-e-Miqat Travel | Best & Affordable Umrah Packages 2025",
//     description:
//       "Choose from our cheap, VIP, group, and private Umrah packages 2025 from Pakistan. Services include visa, flights, hotels & transport. Available from Karachi, Lahore, Islamabad, Multan, Sialkot, Faisalabad, and Attock.",
//     url: "https://qafilaemiqat.com/umrah-packages",
//     siteName: "Qafila-e-Miqat Travel",
//     images: [
//       {
//         url: "/images/umrah-banner.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Best Umrah Packages 2025 from Pakistan"
//       }
//     ],
//     locale: "en_PK",
//     type: "website"
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Best & Affordable Umrah Packages 2025 from Pakistan",
//     description:
//       "Book group, family, VIP & private Umrah packages with Qafila-e-Miqat. Visa, flights, hotels & transport included. Trusted Umrah travel agency in Pakistan.",
//     images: ["/images/umrah-banner.jpg"]
//   }
// };

export default function App() {
  const searchParams = useSearchParams();
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  const [activeFilters, setActiveFilters] = useState<FilterOptions>({
    duration: [],
    budget: [150000, 500000],
    stars: [],
    month: [],
    flightType: []
  });

  // Get URL parameters
  const selectedTier = searchParams.get('tier');
  const selectedType = searchParams.get('type');

  // Convert your tier-based packages to the display format
  const convertTierPackagesToDisplay = (): Package[] => {
    return tierPackages.map((pkg, index) => ({
      id: pkg.id,
      title: `${pkg.tierName} ${pkg.groupName} - ${pkg.name}`,
      duration: pkg.duration,
      price: pkg.discountedPrice.replace(',', ''),
      originalPrice: pkg.price.replace(',', ''),
      stars: pkg.tier === 'economy' ? 3 : pkg.tier === 'standard' ? 4 : 5,
      image: `https://images.unsplash.com/photo-${['1750859537685-24f071b0ae8f', '1721401159543-de99eb95d812', '1704104501136-8f35402af395'][index % 3]}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`,
      flightType:'Direct',
      departureCity: pkg.departureCity,
      hotelMAK: pkg.hotelMAK,
      hotelMAD: pkg.hotelMAD,
      makkahDistance: pkg.makkahDistance,  // NEW
      madinahDistance: pkg.madinahDistance,  // NEW
      location: pkg.routes.slice(1, -1).join(' & '),
      features: pkg.perks.map(perk => perk).slice(0, 8),
      badge: pkg.tier === 'premium' ? 'VIP Experience' : pkg.tier === 'standard' ? 'Most Popular' : 'Best Value',
      isPopular: pkg.tier === 'standard',
      availability: pkg.seatsLeft === 0 ? 'Sold Out' : pkg.seatsLeft >= 10 ? 'Available' : 'Limited',      
      seatsLeft: pkg.seatsLeft
    }));
  };

  // All available packages (converted from tier format)
  const allPackages: Package[] = convertTierPackagesToDisplay();

  // Filter packages based on URL parameters
  const getFilteredPackagesBySelection = () => {
    if (!selectedTier && !selectedType) {
      return allPackages;
    }

    return allPackages.filter(pkg => {
      const tierMatch = !selectedTier || pkg.id.includes(selectedTier);
      const typeMatch = !selectedType || pkg.id.includes(selectedType);
      return tierMatch && typeMatch;
    });
  };

  const mostSellingPackages = allPackages.filter(pkg => pkg.isPopular || pkg.badge === 'Most Popular' || pkg.badge === 'Best Value').slice(0, 3);

  useEffect(() => {
    // Start with packages filtered by URL parameters
    let filtered = getFilteredPackagesBySelection();


    // Apply additional filters
    console.log(activeFilters.duration)
    if (activeFilters.duration.length > 0) {
      console.log("Filtered: ", filtered)
      filtered = filtered.filter(pkg => activeFilters.duration.includes(pkg.duration));
    }

    if (activeFilters.stars.length > 0) {
      filtered = filtered.filter(pkg => activeFilters.stars.includes(pkg.stars));
    }

    if (activeFilters.flightType.length > 0) {
      filtered = filtered.filter(pkg => activeFilters.flightType.includes(pkg.flightType));
    }

    // Budget filter
    const [minBudget, maxBudget] = activeFilters.budget;
    filtered = filtered.filter(pkg => {
      const price = parseInt(pkg.price.replace(/,/g, ''));
      return price >= minBudget && price <= maxBudget;
    });

    setFilteredPackages(filtered);
  }, [activeFilters, selectedTier, selectedType]);


  const handleBookNow = (packageId: string) => {
    const pkg = allPackages.find(p => p.id === packageId);
    alert(`Booking ${pkg?.title}. Redirecting to booking form...`);
  };

  const handleViewDetails = (packageId: string) => {
    const pkg = allPackages.find(p => p.id === packageId);
    alert(`Viewing details for ${pkg?.title}`);
  };

  const handleCompare = (packageId: string) => {
    if (selectedPackages.includes(packageId)) {
      setSelectedPackages(prev => prev.filter(id => id !== packageId));
    } else if (selectedPackages.length < 2) {
      setSelectedPackages(prev => [...prev, packageId]);
    } else {
      alert('You can only compare up to 2 packages at once');
    }
  };

  const handleSortChange = (sortBy: string) => {
    let sorted = [...filteredPackages];
    
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, '')));
        break;
      case 'price-high':
        sorted.sort((a, b) => parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, '')));
        break;
      case 'popularity':
        sorted.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
        break;
      case 'rating':
        sorted.sort((a, b) => b.stars - a.stars);
        break;
      case 'duration':
        sorted.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        break;
      default:
        break;
    }
    
    setFilteredPackages(sorted);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <HeroSection referralSource="direct" />

      {/* Selection Summary */}
      {(selectedTier || selectedType) && (
        <div className="bg-primary/5 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium">Showing packages for:</span>
              {selectedTier && (
                <Badge variant="outline" className="capitalize">
                  {selectedTier} Tier
                </Badge>
              )}
              {selectedType && (
                <Badge variant="outline" className="capitalize">
                  {selectedType} Travel
                </Badge>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.history.pushState({}, '', '/umrah-packages')}
              >
                Clear Selection
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Bar */}
      {selectedPackages.length > 0 && (
        <div className="sticky top-35 z-40 bg-primary text-accent shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex flex-col gap-3">
                {/* Top row - counter and clear button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {selectedPackages.length} selected
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedPackages([])}
                    className="text-accent hover:bg-accent/20"
                  >
                    Clear All
                  </Button>
                </div>
                
                {/* Middle row - badges (scrollable) */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {selectedPackages.map((id) => {
                    const pkg = allPackages.find(p => p.id === id);
                    return (
                      <Badge key={id} variant="secondary" className="flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                        {pkg?.title.slice(0, 15)}...
                        <button onClick={() => handleCompare(id)}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    );
                  })}
                </div>
                
                {/* Bottom row - compare button */}
                <Button 
                  variant="secondary" 
                  size="sm"
                  disabled={selectedPackages.length < 2}
                  onClick={() => alert(`Compare option isn't avaliable yet. Qafila-e-Miqat Team is working on it. Please try again later.`)}
                  className="w-full border-2 border-accent bg-accent/10 hover:bg-accent/20"
                >
                  Compare ({selectedPackages.length}) Packages Now
                </Button>
              </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:flex lg:hidden">
              <div className="flex flex-col gap-2 w-full">
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {selectedPackages.length} package{selectedPackages.length > 1 ? 's' : ''} selected
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      disabled={selectedPackages.length < 2}
                      onClick={() => alert(`Compare option isn't avaliable yet. Qafila-e-Miqat Team is working on it. Please try again later.`)}
                    >
                      Compare
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedPackages([])}
                      className="text-accent hover:bg-accent/20"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
                
                {/* Bottom row - badges */}
                <div className="flex gap-2 flex-wrap">
                  {selectedPackages.map((id) => {
                    const pkg = allPackages.find(p => p.id === id);
                    return (
                      <Badge key={id} variant="secondary" className="flex items-center gap-1">
                        {pkg?.title.slice(0, 25)}...
                        <button onClick={() => handleCompare(id)}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Desktop Layout (original) */}
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-medium">
                  {selectedPackages.length} package{selectedPackages.length > 1 ? 's' : ''} selected for comparison
                </span>
                <div className="flex gap-2 flex-wrap">
                  {selectedPackages.map((id) => {
                    const pkg = allPackages.find(p => p.id === id);
                    return (
                      <Badge key={id} variant="secondary" className="flex items-center gap-1">
                        {pkg?.title.slice(0, 20)}...
                        <button onClick={() => handleCompare(id)}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="secondary" 
                  size="sm"
                  disabled={selectedPackages.length < 2}
                  onClick={() => alert(`Compare option isn't avaliable yet. Qafila-e-Miqat Team is working on it. Please try again later.`)}
                >
                  Compare Now
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedPackages([])}
                  className="text-accent hover:bg-accent/20"
                >
                  Clear All
                </Button>
              </div>
            </div>
          </div>
        </div>
)}

      <main className="container mx-auto px-4 py-12">
        {/* Selected/Featured Packages Section */}
        {!selectedTier && !selectedType && (
          <section id="packages" className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Umrah Packages 2025
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked packages offering the best value and experience for your spiritual journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {mostSellingPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  package={pkg}
                  onBookNow={handleBookNow}
                  onViewDetails={handleViewDetails}
                  onCompare={handleCompare}
                  isInComparison={selectedPackages.includes(pkg.id)}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Packages Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {(selectedTier || selectedType) ? 'Selected' : 'All'} Umrah Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect package that matches your needs and budget
            </p>
          </div>

          {/* Filters and Sort */}
          <FiltersAndSort
            onFilterChange={setActiveFilters}
            onSortChange={handleSortChange}
            activeFilters={activeFilters}
            totalPackages={allPackages.length}
            filteredPackages={filteredPackages.length}
          />

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  package={pkg}
                  onBookNow={handleBookNow}
                  onViewDetails={handleViewDetails}
                  onCompare={handleCompare}
                  isInComparison={selectedPackages.includes(pkg.id)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No packages found matching your criteria. <a href="/custom-package" className="text-primary underline">Create your own package</a>
                </p>
                <Button 
                  variant="outline" 
                  className='hover:bg-primary !hover:text-accent transition px-2 py-1 rounded'
                  onClick={() => setActiveFilters({
                    duration: [],
                    budget: [150000, 500000],
                    stars: [],
                    month: [],
                    flightType: []
                  })}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-16 bg-muted/30 rounded-xl p-8">
          <FacilitiesSection />
        </section>
      </main>
      <FAQSection />
      <Footer />
    </div>
  );
}