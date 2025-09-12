// import React, { useState, useEffect } from "react";
// import {
//   Plane,
//   FileText,
//   MapPin,
//   Car,
//   Calendar,
//   Headphones,
//   User,
//   Waypoints,
// } from "lucide-react";

// type Facility = {
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   title: string;
//   description: string;
// };

// const FacilitiesSection: React.FC = () => {
//   const facilities: Facility[] = [
//     { icon: Plane, title: "Direct Flights", description: "Non-stop flights to Jeddah" },
//     { icon: FileText, title: "Fast Visa Processing", description: "Quick and hassle-free visa service" },
//     { icon: MapPin, title: "5-Star Luxury Hotels", description: "Premium accommodation near Haram" },
//     { icon: Car, title: "Private AC Vehicles", description: "Comfortable transportation" },
//     { icon: Calendar, title: "Flexible Dates and Cities", description: "Choose your preferred schedule" },
//     { icon: Headphones, title: "24/7 Support", description: "Round-the-clock assistance" },
//     { icon: Waypoints, title: "Personalized Itinerary", description: "Customized travel plans" },
//     { icon: User, title: "Counselling & Guidance", description: "Spiritual and travel guidance" },
//   ];

//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

//   useEffect(() => {
//     setIsTouchDevice(window.matchMedia("(hover: none)").matches);
//   }, []);

//   const handleCardClick = (index: number) => {
//     if (isTouchDevice) {
//       setActiveIndex(activeIndex === index ? null : index);
//     }
//   };

//   return (
//     <section className="relative container mx-auto px-6 py-20">
//       {/* Heading */}
//       <div className="relative text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
//           Facilities We Provide For You
//         </h2>
//         <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
//           Everything You Need for a Peaceful Umrah is Handled
//         </p>
//       </div>

//       {/* Facilities Grid */}
//       <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {facilities.map((facility: Facility, index: number) => {
//           const IconComponent = facility.icon;
//           const isActive = activeIndex === index;

//           return (
//             <div
//               key={index}
//               onClick={() => handleCardClick(index)}
//               className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg border border-white/20 
//                 transition-all duration-300
//                 ${isActive ? "border-primary/40 shadow-xl" : "hover:border-primary/40 hover:shadow-xl"}
//               `}
//             >
//               {/* Floating Gradient Glow */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 
//                   rounded-2xl transition-opacity duration-500 
//                   ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
//                 `}
//               />

//               {/* Icon */}
//               <div
//                 className={`relative w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-xl flex items-center justify-center shadow-lg
//                   transition-transform duration-300
//                   ${isActive ? "scale-110" : "group-hover:scale-110"}
//                 `}
//               >
//                 <IconComponent className="w-6 h-6 text-primary" />
//               </div>

//               {/* Title */}
//               <h3
//                 className={`mt-5 text-lg font-semibold text-foreground transition-colors duration-300
//                   ${isActive ? "text-primary" : "group-hover:text-primary"}
//                 `}
//               >
//                 {facility.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
//                 {facility.description}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default FacilitiesSection;

import React, { useState, useEffect } from "react";
import { motion, Variants, easeOut } from "framer-motion";
import {
  Plane,
  FileText,
  Hotel,
  Car,
  Calendar,
  Headphones,
  User,
  Waypoints,
} from "lucide-react";

type Facility = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const FacilitiesSection: React.FC = () => {
  const facilities: Facility[] = [
    { icon: Plane, title: "Direct Flights", description: "Save Time, Save Energy" },
    { icon: FileText, title: "Fast Visa Processing", description: "Quick and hassle-free visa service" },
    { icon: Hotel, title: "5-Star Luxury Hotels", description: "Premium accommodation" },
    { icon: Car, title: "Private VIP Vehicles", description: "Comfortable transportation" },
    { icon: Calendar, title: "Flexible Dates and Cities", description: "Choose your preferred schedule" },
    { icon: Headphones, title: "24/7 Support", description: "Round-the-clock assistance" },
    { icon: Waypoints, title: "Personalized Itinerary", description: "Customized travel plans" },
    { icon: User, title: "Counselling & Guidance", description: "Expert advice for a smooth journey" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleCardClick = (index: number) => {
    if (isTouchDevice) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  // Framer Motion Variants for animation
  const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
            staggerChildren: 0.15,
            },
        },
        };

        const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
            duration: 0.5,
            ease: easeOut, // ✅ use imported easing instead of string
    },
  },
};

  return (
    <section className="relative container mx-auto px-6 py-20">
      {/* Heading */}
      <div className="relative text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Facilities We Provide For You
        </h2>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything You Need for a Peaceful Umrah is Handled
        </p>
      </div>

      {/* Facilities Grid */}
      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
      >
        {facilities.map((facility: Facility, index: number) => {
          const IconComponent = facility.icon;
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => handleCardClick(index)}
              className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg border border-white/20 
                transition-all duration-300
                ${isActive ? "border-primary/40 shadow-xl" : "hover:border-primary/40 hover:shadow-xl"}
              `}
            >
              {/* Floating Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 
                  rounded-2xl transition-opacity duration-500 
                  ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
              />

              {/* Icon */}
              <div
                className={`relative w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-xl flex items-center justify-center shadow-lg
                  transition-transform duration-300
                  ${isActive ? "scale-110" : "group-hover:scale-110"}
                `}
              >
                <IconComponent className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3
                className={`mt-5 text-lg font-semibold text-foreground transition-colors duration-300
                  ${isActive ? "text-primary" : "group-hover:text-primary"}
                `}
              >
                {facility.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FacilitiesSection;
