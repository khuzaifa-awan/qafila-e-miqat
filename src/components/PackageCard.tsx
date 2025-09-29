// "use client";
// import { Star, Calendar, Plane, MapPin, Users, CheckCircle, Clock } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Button } from './ui/buttonP';
// import { Card, CardContent, CardFooter, CardHeader } from './ui/cardP';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import Link from "next/link";
// import { Perk, renderIcon } from '@/data/packages';



// export interface Package {
//   id: string;

//   title: string;
//   duration: string;
//   price: string;
//   originalPrice?: string;
//   stars: number;
//   image: string;
//   flightType: 'Direct';
//   departure: string;
//   hotel: string;
//   location: string;
//   features: Perk[];
//   badge?: string;
//   isPopular?: boolean;
//   availability: string;
//   seatsLeft?: number;
// }

// interface PackageCardProps {
//   package: Package;
//   onBookNow: (id: string) => void;
//   onViewDetails: (id: string) => void;
//   onCompare?: (id: string) => void;
//   isInComparison?: boolean;
// }

// export function PackageCard({ 
//   package: pkg, 
//   onBookNow, 
//   onViewDetails, 
//   onCompare,
//   isInComparison = false 
// }: PackageCardProps) {
//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         className={`w-4 h-4 ${
//           i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
//         }`}
//       />
//     ));
//   };

//   return (
//     <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       {/* Badge */}
//       {pkg.badge && (
//         <div className="absolute top-4 left-4 z-10">
//           <Badge 
//             variant={pkg.isPopular ? "default" : "secondary"}
//             className="px-3 py-1 font-semibold"
//           >
//             {pkg.badge}
//           </Badge>
//         </div>
//       )}

//       {/* Compare Button */}
//       {onCompare && (
//         <button
//           onClick={() => onCompare(pkg.id)}
//           className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
//             isInComparison 
//               ? 'bg-primary !text-accent' 
//               : 'bg-white/80 text-gray-600 hover:bg-white'
//           }`}
//         >
//           <CheckCircle className="w-4 h-4" />
//         </button>
//       )}

//       <CardHeader className="p-0">
//         <div className="relative overflow-hidden">
//           <ImageWithFallback
//             src={pkg.image}
//             alt={`${pkg.title} - ${pkg.stars} star Umrah package hotel`}
//             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
//           {/* Hotel rating overlay */}
//           <div className="absolute bottom-4 left-4 flex items-center gap-2">
//             <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-lg">
//               {renderStars(pkg.stars)}
//               <span className="text-sm font-semibold ml-1">{pkg.stars} Star</span>
//             </div>
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent className="p-6">
//         <div className="space-y-4">
//           <div>
//             <h3 className="font-bold text-lg mb-2 line-clamp-2">{pkg.title}</h3>
//             <div className="flex items-center gap-4 text-sm text-muted-foreground">
//               <div className="flex items-center gap-1">
//                 <Calendar className="w-4 h-4" />
//                 <span>{pkg.duration}</span>
//               </div>
//               <div
//                 className={`flex items-center gap-1 ${
//                   pkg.availability === "Not Available"
//                     ? "text-red-500"
//                     : pkg.availability === "Available"
//                     ? "text-green-500"
//                     : "text-foreground"
//                 }`}
//               >
//                 <Clock className="w-4 h-4" />
//                 <span>{pkg.availability}</span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="flex items-center gap-2 text-sm">
//               <Plane className="w-4 h-4 text-primary" />
//               <span>{pkg.flightType} Flight from {pkg.departure}</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm">
//               <MapPin className="w-4 h-4 text-primary" />
//               <span>{pkg.hotel}, {pkg.location}</span>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <p className="text-sm font-medium">Package Includes:</p>
//             <div className="grid grid-cols-2 gap-1">
//               {pkg.features.slice(0, 8).map((feature, index) => (
//                 <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
//                   {renderIcon(feature.icon, { className: "w-3 h-3 text-primary flex-shrink-0" })}
//                   <span className="truncate">{feature.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="border-t pt-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 {pkg.originalPrice && (
//                   <p className="text-sm text-muted-foreground line-through">
//                     PKR {pkg.originalPrice}
//                   </p>
//                 )}
//                 <p className="text-2xl font-bold text-primary">
//                   PKR {pkg.price}
//                 </p>
//                 <p className="text-xs text-muted-foreground">Per person</p>
//               </div>
//               <div className="bg-[#F7E9D9] text-[#AD5628] text-center text-sm font-semibold px-6 py-1 rounded-full">
//                 Only {pkg.seatsLeft} <br />seats left
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>

//       <CardFooter className="p-6 pt-0 space-y-3">
       
//       <Button 
//         onClick={() => onBookNow(pkg.id)} className="holographic-btn relative overflow-hidden rounded-lg bg-[#AD5628] !text-[#FCF6EC] py-2 font-semibold w-full" size="lg" > 
//         Book Now 
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

"use client";
import { Star, Calendar, Plane, MapPin, Users, CheckCircle, Clock } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/buttonP';
import { Card, CardContent, CardFooter, CardHeader } from './ui/cardP';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from "next/link";
import { Perk, renderIcon } from '@/data/packages';

export interface Package {
  id: string;
  title: string;
  duration: string;
  price: string;
  originalPrice?: string;
  stars: number;
  image: string;
  flightType: 'Direct';
  departure: string;
  hotel: string;
  location: string;
  features: Perk[];
  badge?: string;
  isPopular?: boolean;
  availability: string;
  seatsLeft?: number;
}

interface PackageCardProps {
  package: Package;
  onBookNow?: (id: string) => void; // Made optional since we're using Link now
  onViewDetails: (id: string) => void;
  onCompare?: (id: string) => void;
  isInComparison?: boolean;
}

export function PackageCard({ 
  package: pkg, 
  onBookNow, 
  onViewDetails, 
  onCompare,
  isInComparison = false 
}: PackageCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge 
            variant={pkg.isPopular ? "default" : "secondary"}
            className="px-3 py-1 font-semibold"
          >
            {pkg.badge}
          </Badge>
        </div>
      )}

      {/* Compare Button */}
      {onCompare && (
        <button
          onClick={() => onCompare(pkg.id)}
          className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isInComparison 
              ? 'bg-primary !text-accent' 
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
        </button>
      )}

      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={pkg.image}
            alt={`${pkg.title} - ${pkg.stars} star Umrah package hotel`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Hotel rating overlay */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-lg">
              {renderStars(pkg.stars)}
              <span className="text-sm font-semibold ml-1">{pkg.stars} Star</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{pkg.title}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{pkg.duration}</span>
              </div>
              <div
                className={`flex items-center gap-1 ${
                  pkg.availability === "Not Available"
                    ? "text-red-500"
                    : pkg.availability === "Available"
                    ? "text-green-500"
                    : "text-foreground"
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>{pkg.availability}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Plane className="w-4 h-4 text-primary" />
              <span>{pkg.flightType} Flight from {pkg.departure}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{pkg.hotel}, {pkg.location}</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Package Includes:</p>
            <div className="grid grid-cols-2 gap-1">
              {pkg.features.slice(0, 8).map((feature, index) => (
                <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                  {renderIcon(feature.icon, { className: "w-3 h-3 text-primary flex-shrink-0" })}
                  <span className="truncate">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div>
                {pkg.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through">
                    PKR {pkg.originalPrice}
                  </p>
                )}
                <p className="text-2xl font-bold text-primary">
                  PKR {pkg.price}
                </p>
                <p className="text-xs text-muted-foreground">Per person</p>
              </div>
              <div className="bg-[#F7E9D9] text-[#AD5628] text-center text-sm font-semibold px-6 py-1 rounded-full">
                Only {pkg.seatsLeft} <br />seats left
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-y-3">
        {/* Updated Book Now Button with Link */}
        <Link 
          href={`/booking-form?packageId=${pkg.id}`}
          className="w-full block"
        >
          <Button 
            className="holographic-btn relative overflow-hidden rounded-lg bg-[#AD5628] !text-[#FCF6EC] py-2 font-semibold w-full" 
            size="lg"
          > 
            Book Now 
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}