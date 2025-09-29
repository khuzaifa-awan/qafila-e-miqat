// "use client"
// import { useState, useEffect } from 'react';
// import { Header } from '@/components/Header';
// import { HeroSection } from '@/components/HeroSection';
// import { PackageCard, Package } from '@/components/PackageCard';
// import { FiltersAndSort, FilterOptions } from '@/components/FiltersAndSort';
// import { FAQSection } from '@/components/FAQSection';
// import  Footer from '@/components/Footer';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/buttonP';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabsP';
// import { CheckCircle, X, ArrowRight } from 'lucide-react';

// export default function App() {
//   const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
//   const [comparisonMode, setComparisonMode] = useState(false);
//   const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
//   const [activeFilters, setActiveFilters] = useState<FilterOptions>({
//     duration: [],
//     budget: [50000, 500000],
//     stars: [],
//     month: [],
//     flightType: []
//   });

//   // Mock package data
//   const allPackages: Package[] = [
//     {
//       id: '1',
//       title: 'Premium 5-Star Umrah Package with Hilton Mecca',
//       duration: '14 Days',
//       price: '325,000',
//       originalPrice: '375,000',
//       stars: 5,
//       image: 'https://images.unsplash.com/photo-1750859537685-24f071b0ae8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob3RlbCUyMGx1eHVyeSUyMGlzbGFtaWN8ZW58MXx8fHwxNzU4MzY4NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       flightType: 'Direct',
//       departure: 'Lahore',
//       hotel: 'Hilton Mecca',
//       location: 'Mecca & Medina',
//       features: ['Visa Processing', 'Round-trip Flights', '5-Star Hotels', 'Daily Meals', 'Airport Transfers', 'Guided Tours', '24/7 Support', 'Travel Insurance'],
//       badge: 'Most Popular',
//       isPopular: true,
//       availability: 'Available'
//     },
//     {
//       id: '2',
//       title: 'Economy 3-Star Umrah Package - Budget Friendly',
//       duration: '7 Days',
//       price: '155,000',
//       stars: 3,
//       image: 'https://images.unsplash.com/photo-1721401159543-de99eb95d812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpbmElMjBtb3NxdWUlMjBpc2xhbWljJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1ODM2ODU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       flightType: 'Indirect',
//       departure: 'Karachi',
//       hotel: 'Al Kiswah Hotel',
//       location: 'Mecca & Medina',
//       features: ['Visa Processing', 'Round-trip Flights', '3-Star Hotels', 'Breakfast & Dinner', 'Group Transport', 'Basic Support'],
//       badge: 'Best Value',
//       availability: 'Limited'
//     },
//     {
//       id: '3',
//       title: 'Deluxe 4-Star Family Umrah Package',
//       duration: '10 Days',
//       price: '245,000',
//       originalPrice: '285,000',
//       stars: 4,
//       image: 'https://images.unsplash.com/photo-1704104501136-8f35402af395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWFiYSUyMG1lY2NhJTIwaXNsYW1pY3xlbnwxfHx8fDE3NTgzNjg1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       flightType: 'Direct',
//       departure: 'Islamabad',
//       hotel: 'Marriott Mecca',
//       location: 'Mecca & Medina',
//       features: ['Visa Processing', 'Round-trip Flights', '4-Star Hotels', 'All Meals', 'Private Transport', 'Family Rooms', 'Kids Activities', 'Medical Support'],
//       badge: 'Family Friendly',
//       availability: 'Available'
//     },
//     {
//       id: '4',
//       title: 'VIP 5-Star Luxury Umrah with Fairmont',
//       duration: '21 Days',
//       price: '475,000',
//       stars: 5,
//       image: 'https://images.unsplash.com/photo-1750859537685-24f071b0ae8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob3RlbCUyMGx1eHVyeSUyMGlzbGFtaWN8ZW58MXx8fHwxNzU4MzY4NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       flightType: 'Direct',
//       departure: 'Lahore',
//       hotel: 'Fairmont Mecca',
//       location: 'Mecca & Medina',
//       features: ['Express Visa', 'Business Class Flights', 'Ultra-Luxury Hotels', 'Private Butler', 'VIP Airport Service', 'Personal Guide', 'Spa Services', 'Premium Transport'],
//       badge: 'VIP Experience',
//       availability: 'Limited'
//     },
//     {
//       id: '5',
//       title: 'Standard 4-Star Quick Umrah Package',
//       duration: '5 Days',
//       price: '125,000',
//       stars: 4,
//       image: 'https://images.unsplash.com/photo-1721401159543-de99eb95d812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpbmElMjBtb3NxdWUlMjBpc2xhbWljJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1ODM2ODU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       flightType: 'Direct',
//       departure: 'Faisalabad',
//       hotel: 'Hyatt Regency',
//       location: 'Mecca Only',
//       features: ['Fast Visa', 'Direct Flights', '4-Star Hotel', 'Daily Meals', 'Airport Transfers', 'Group Support'],
//       badge: 'Express',
//       availability: 'Available'
//     },
//     {
//       id: '6',
//       title: 'Extended 3-Star Group Umrah Package',
//       duration: '30 Days',
//       price: '285,000',
//       stars: 3,
//       image: 'https://images.unsplash.com/photo-1724488258906-ce80713e28ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwZ2VvbWV0cmljJTIwcGF0dGVybnN8ZW58MXx8fHwxNzU4MzY4NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       flightType: 'Indirect',
//       departure: 'Peshawar',
//       hotel: 'Al Shohada Hotel',
//       location: 'Mecca & Medina',
//       features: ['Visa Processing', 'Economy Flights', '3-Star Hotels', 'Group Meals', 'Shared Transport', 'Religious Learning', 'Extended Stay'],
//       badge: 'Extended Stay',
//       availability: 'Available'
//     }
//   ];

//   const mostSellingPackages = allPackages.filter(pkg => pkg.isPopular || pkg.badge === 'Most Popular' || pkg.badge === 'Best Value').slice(0, 3);

//   useEffect(() => {
//     let filtered = [...allPackages];

//     // Apply filters
//     if (activeFilters.duration.length > 0) {
//       filtered = filtered.filter(pkg => activeFilters.duration.includes(pkg.duration));
//     }

//     if (activeFilters.stars.length > 0) {
//       filtered = filtered.filter(pkg => activeFilters.stars.includes(pkg.stars));
//     }

//     if (activeFilters.flightType.length > 0) {
//       filtered = filtered.filter(pkg => activeFilters.flightType.includes(pkg.flightType));
//     }

//     // Budget filter
//     const [minBudget, maxBudget] = activeFilters.budget;
//     filtered = filtered.filter(pkg => {
//       const price = parseInt(pkg.price.replace(/,/g, ''));
//       return price >= minBudget && price <= maxBudget;
//     });

//     setFilteredPackages(filtered);
//   }, [activeFilters]);

//   const handleBookNow = (packageId: string) => {
//     const pkg = allPackages.find(p => p.id === packageId);
//     alert(`Booking ${pkg?.title}. Redirecting to booking form...`);
//   };

//   const handleViewDetails = (packageId: string) => {
//     const pkg = allPackages.find(p => p.id === packageId);
//     alert(`Viewing details for ${pkg?.title}`);
//   };

//   const handleCompare = (packageId: string) => {
//     if (selectedPackages.includes(packageId)) {
//       setSelectedPackages(prev => prev.filter(id => id !== packageId));
//     } else if (selectedPackages.length < 3) {
//       setSelectedPackages(prev => [...prev, packageId]);
//     } else {
//       alert('You can only compare up to 3 packages at once');
//     }
//   };

//   const handleSortChange = (sortBy: string) => {
//     let sorted = [...filteredPackages];
    
//     switch (sortBy) {
//       case 'price-low':
//         sorted.sort((a, b) => parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, '')));
//         break;
//       case 'price-high':
//         sorted.sort((a, b) => parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, '')));
//         break;
//       case 'popularity':
//         sorted.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
//         break;
//       case 'rating':
//         sorted.sort((a, b) => b.stars - a.stars);
//         break;
//       case 'duration':
//         sorted.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
//         break;
//       default:
//         break;
//     }
    
//     setFilteredPackages(sorted);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
      
//       <HeroSection referralSource="direct" />

//       {/* Comparison Bar */}
//       {selectedPackages.length > 0 && (
//         <div className="sticky top-16 z-40 bg-primary text-primary-foreground shadow-lg">
//           <div className="container mx-auto px-4 py-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <span className="font-medium">
//                   {selectedPackages.length} package{selectedPackages.length > 1 ? 's' : ''} selected for comparison
//                 </span>
//                 <div className="flex gap-2">
//                   {selectedPackages.map((id) => {
//                     const pkg = allPackages.find(p => p.id === id);
//                     return (
//                       <Badge key={id} variant="secondary" className="flex items-center gap-1">
//                         {pkg?.title.slice(0, 20)}...
//                         <button onClick={() => handleCompare(id)}>
//                           <X className="w-3 h-3" />
//                         </button>
//                       </Badge>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <Button 
//                   variant="secondary" 
//                   size="sm"
//                   disabled={selectedPackages.length < 2}
//                   onClick={() => alert('Opening comparison view...')}
//                 >
//                   Compare Now
//                 </Button>
//                 <Button 
//                   variant="ghost" 
//                   size="sm"
//                   onClick={() => setSelectedPackages([])}
//                 >
//                   Clear All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <main className="container mx-auto px-4 py-12">
//         {/* Selected/Featured Packages Section */}
//         <section id="packages" className="mb-16">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Featured Umrah Packages 2025
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Handpicked packages offering the best value and experience for your spiritual journey
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {mostSellingPackages.map((pkg) => (
//               <PackageCard
//                 key={pkg.id}
//                 package={pkg}
//                 onBookNow={handleBookNow}
//                 onViewDetails={handleViewDetails}
//                 onCompare={handleCompare}
//                 isInComparison={selectedPackages.includes(pkg.id)}
//               />
//             ))}
//           </div>
//         </section>

//         {/* All Packages Section */}
//         <section className="mb-16">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               All Umrah Packages
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Find the perfect package that matches your needs and budget
//             </p>
//           </div>

//           {/* Filters and Sort */}
//           <FiltersAndSort
//             onFilterChange={setActiveFilters}
//             onSortChange={handleSortChange}
//             activeFilters={activeFilters}
//             totalPackages={allPackages.length}
//             filteredPackages={filteredPackages.length}
//           />

//           {/* Package Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredPackages.length > 0 ? (
//               filteredPackages.map((pkg) => (
//                 <PackageCard
//                   key={pkg.id}
//                   package={pkg}
//                   onBookNow={handleBookNow}
//                   onViewDetails={handleViewDetails}
//                   onCompare={handleCompare}
//                   isInComparison={selectedPackages.includes(pkg.id)}
//                 />
//               ))
//             ) : (
//               <div className="col-span-full text-center py-12">
//                 <p className="text-lg text-muted-foreground mb-4">
//                   No packages found matching your criteria
//                 </p>
//                 <Button 
//                   variant="outline" 
//                   onClick={() => setActiveFilters({
//                     duration: [],
//                     budget: [50000, 500000],
//                     stars: [],
//                     month: [],
//                     flightType: []
//                   })}
//                 >
//                   Clear Filters
//                 </Button>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Trust Indicators */}
//         <section className="mb-16 bg-muted/30 rounded-xl p-8">
//           <h3 className="text-2xl font-bold text-center mb-8">Why Choose UmrahPak?</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="w-8 h-8 text-primary" />
//               </div>
//               <h4 className="font-semibold mb-2">Visa Guaranteed</h4>
//               <p className="text-muted-foreground">100% visa success rate with our experienced processing team</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="w-8 h-8 text-primary" />
//               </div>
//               <h4 className="font-semibold mb-2">24/7 Support</h4>
//               <p className="text-muted-foreground">Round-the-clock assistance during your entire journey</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="w-8 h-8 text-primary" />
//               </div>
//               <h4 className="font-semibold mb-2">Halal Certified</h4>
//               <p className="text-muted-foreground">All hotels and meals are halal certified and verified</p>
//             </div>
//           </div>
//         </section>
//       </main>
//       <FAQSection />
//       <Footer />
//     </div>
//   );
// }


"use client"
import { useState, useEffect } from 'react';
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

export default function App() {
  const searchParams = useSearchParams();
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [comparisonMode, setComparisonMode] = useState(false);
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
      departure: ['Lahore', 'Karachi', 'Islamabad', 'Faisalabad'][index % 4],
      hotel: pkg.hotel,
      location: pkg.routes.slice(1, -1).join(' & '),
      features: pkg.perks.map(perk => perk).slice(0, 8),
      badge: pkg.tier === 'premium' ? 'VIP Experience' : pkg.tier === 'standard' ? 'Most Popular' : 'Best Value',
      isPopular: pkg.tier === 'standard',
      availability: pkg.seatsLeft === 0 ? 'Not Available' : pkg.seatsLeft > 10 ? 'Available' : 'Limited',
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
    if (activeFilters.duration.length > 0) {
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
                  onClick={() => alert('Opening comparison view...')}
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
                      onClick={() => alert('Opening comparison view...')}
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
                  onClick={() => alert('Opening comparison view...')}
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
                  No packages found matching your criteria
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