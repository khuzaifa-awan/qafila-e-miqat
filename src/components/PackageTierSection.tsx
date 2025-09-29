// "use client";

// import { useState } from "react";
// import { packages } from "@/data/packages";  
// import PackageCard from "./PackageCard";

// interface Tier {
//   id: string;
//   name: string;
//   tagline: string;
//   popular: boolean;
//   subTypes: {
//     label: string;
//     desc: string;
//   }[];
// }

// export default function Packages() {
//   const [selectedTier, setSelectedTier] = useState<string | null>(null);
//   const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

//   const tiers: Tier[] = [
//     {
//       id: "economy",
//       name: "Economy",
//       tagline: "Affordable & Convenient Journey",
//       popular: false,
//       subTypes: [
//         { label: "Group", desc: "Shared rooms(if persons are less than 4),shuttle service or Bus, 7-28 day trip" },
//         { label: "Couple", desc: "3-4 star hotels, semi-private transport, 7-28 day trip" },
//         { label: "Family", desc: "Family suite, private transport optional, 7-28 day trip" },
//       ],
//     },
//     {
//       id: "standard",
//       name: "Standard",
//       tagline: "Smart Comfort Without the Premium Price",
//       popular: true,
//       subTypes: [
//         { label: "Group", desc: "3-4 star hotels, group transport, ziyarat included" },
//         { label: "Couple/Solo", desc: "4-star hotel, private car, closer to Haram" },
//         { label: "Family", desc: "Family suites, dedicated driver, 14–21 days" },
//       ],
//     },
//     {
//       id: "premium",
//       name: "Premium",
//       tagline: "Luxury & Exclusive Experience",
//       popular: false,
//       subTypes: [
//         { label: "Solo", desc: "5-star Haram-view hotel, premium transport, fast-track visa" },
//         { label: "Couple", desc: "5-star Haram-view, luxury car, fast-track visa" },
//         { label: "Family", desc: "Full-service package, private guide, premium transport" },
//       ],
//     },
//   ];

//   return (
//     <section className="p-6">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#444]">
//         Choose Your Umrah Journey
//       </h2>
//       <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//         Whether you’re traveling solo, with couple, family, or in a group, we
//         have packages designed to make your Umrah easy and worry-free.
//       </p>

//       <div className="flex justify-center gap-6 flex-wrap py-4 my-16">
//         {tiers.map((tier) => {
//           const [activeTab, setActiveTab] = useState(tier.subTypes[0].label);

//           // Gradient border color based on tier
//           const borderGradients: Record<string, string> = {
//             economy: "from-[#878274] to-[#24221a]",
//             standard: "from-[#785c3a] to-[#e2c29a]",
//             premium: "from-[#e7aa51] via-[#ffe499] via-[#8d5a1b] via-[#e7aa51] to-[#ac7031]",
//           };

//           return (
//             <div
//               key={tier.id}
//               className={`relative rounded-3xl p-[2px] bg-gradient-to-b ${borderGradients[tier.id]} max-w-sm w-full`}
//             >
//               <div className="rounded-3xl bg-[#FCF6EC] shadow-sm p-6 flex flex-col min-h-[260px]">
//                 {tier.popular && (
//                   <span className="absolute -top-3 right-4 bg-gradient-to-r from-black to-[#c89116] text-white text-xs font-semibold px-3 py-1 rounded-lg shadow">
//                     Most Popular
//                   </span>
//                 )}

//                 <div className="text-center mb-4">
//                   <h3 className="text-2xl font-bold text-[#4A4A4A]">{tier.name}</h3>
//                   <p className="text-sm text-gray-500">{tier.tagline}</p>
//                 </div>

//                 {/* ✅ Tab Box with Sliding Indicator */}
//                 <div className="relative bg-[#eaddcf] rounded-lg flex mb-6 overflow-hidden px-1">
//                   {/* Sliding indicator */}
//                   <div
//                     className="absolute rounded-md bg-[#FCF6EC] shadow transition-all duration-300"
//                     style={{
//                       top: "4px",
//                       bottom: "4px",
//                       left: `calc(${tier.subTypes.findIndex((s) => s.label === activeTab) * (100 / tier.subTypes.length)}% + 3px)`,
//                       width: `calc(${100 / tier.subTypes.length}% - 6px)`,
//                     }}
//                   />
//                   {tier.subTypes.map((sub) => (
//                     <button
//                       key={sub.label}
//                       onClick={() => {
//                         setSelectedTier(tier.id);      // economy / standard / premium
//                         setSelectedGroup(sub.label.toLowerCase()); // group / couple / solo / family
//                       }}
//                       className={`flex-1 py-2 text-sm font-medium relative z-10 transition-colors ${
//                         activeTab === sub.label ? "text-[#4A4A4A]" : "text-[#6b4a2f]"
//                       }`}
//                     >
//                       {sub.label}
//                     </button>
//                   ))}
//                 </div>

//                 {/* ✅ Active Content */}
//                 <div className="flex flex-col flex-1">
//                   {tier.subTypes.map(
//                     (sub) =>
//                       sub.label === activeTab && (
//                         <div key={sub.label}>
//                           <p className="text-sm text-gray-700 mb-6">{sub.desc}</p>
//                           <button className="holographic-btn relative overflow-hidden rounded-lg bg-[#AD5628] !text-[#FCF6EC] py-2 font-semibold w-full">
//                             See Packages
//                           </button>
//                         </div>
//                       )
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


// -------------------------------------------------------------------------------------------------------------------------------------------

// "use client";

// import { useState } from "react";
// import { packages } from "@/data/packages";   
// import {PackageCard} from "./PackageCard";

// interface Tier {
//   id: string;
//   name: string;
//   tagline: string;
//   popular: boolean;
//   subTypes: {
//     label: string;
//     desc: string;
//   }[];
// }

// export default function Packages() {
//   const [selectedTier, setSelectedTier] = useState<string | null>(null);
//   const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

//   const tiers: Tier[] = [
//     {
//       id: "economy",
//       name: "Economy",
//       tagline: "Affordable & Convenient Journey",
//       popular: false,
//       subTypes: [
//         { label: "Group", desc: "Shared rooms(if persons are less than 4),shuttle service or Bus, 7-28 day trip" },
//         { label: "Couple", desc: "3-4 star hotels, semi-private transport, 7-28 day trip" },
//         { label: "Family", desc: "Family suite, private transport optional, 7-28 day trip" },
//       ],
//     },
//     {
//       id: "standard",
//       name: "Standard",
//       tagline: "Smart Comfort Without the Premium Price",
//       popular: true,
//       subTypes: [
//         { label: "Group", desc: "3-4 star hotels, group transport, ziyarat included" },
//         { label: "Solo", desc: "Single occupancy, 4-star hotel, private car, no ziyarat included" },
//         { label: "Couple", desc: "4-star hotel, private car, closer to Haram, ziyarat included" },
//         { label: "Family", desc: "Family suites, dedicated driver, 14–21 days, ziyarat included" },
//       ],
//     },
//     {
//       id: "premium",
//       name: "Premium",
//       tagline: "Luxury & Exclusive Experience",
//       popular: false,
//       subTypes: [
//         { label: "Solo", desc: "5-star Haram-view hotel, premium transport, fast-track visa" },
//         { label: "Couple", desc: "5-star Haram-view, luxury car, fast-track visa, other activites" },
//         { label: "Family", desc: "Full-service package, private guide, premium transport" },
//       ],
//     },
//   ];

//   return (
//     <section className="p-6">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#444]">
//         Choose Your Umrah Journey
//       </h2>
//       <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//         Whether you’re traveling solo, with couple, family, or in a group, we
//         have packages designed to make your Umrah easy and worry-free.
//       </p>

//       <div className="flex justify-center gap-6 flex-wrap py-4 my-16">
//         {tiers.map((tier) => {
//           const [activeTab, setActiveTab] = useState(tier.subTypes[0].label);

//           const borderGradients: Record<string, string> = {
//             economy: "from-[#878274] to-[#24221a]",
//             standard: "from-[#785c3a] to-[#e2c29a]",
//             premium: "from-[#e7aa51] via-[#ffe499] via-[#8d5a1b] via-[#e7aa51] to-[#ac7031]",
//           };

//           return (
//             <div
//               key={tier.id}
//               className={`relative rounded-3xl p-[2px] bg-gradient-to-b ${borderGradients[tier.id]} max-w-sm w-full`}
//             >
//               <div className="rounded-3xl bg-[#FCF6EC] shadow-sm p-6 flex flex-col min-h-[260px]">
//                 {tier.popular && (
//                   <span className="absolute -top-3 right-4 bg-gradient-to-r from-black to-[#c89116] text-white text-xs font-semibold px-3 py-1 rounded-lg shadow">
//                     Most Popular
//                   </span>
//                 )}

//                 <div className="text-center mb-4">
//                   <h3 className="text-2xl font-bold text-[#4A4A4A]">{tier.name}</h3>
//                   <p className="text-sm text-gray-500">{tier.tagline}</p>
//                 </div>

//                 {/* ✅ Tab Box */}
//                 <div className="relative bg-[#eaddcf] rounded-lg flex mb-6 overflow-hidden px-1">
//                   <div
//                     className="absolute rounded-md bg-[#FCF6EC] shadow transition-all duration-300"
//                     style={{
//                       top: "4px",
//                       bottom: "4px",
//                       left: `calc(${tier.subTypes.findIndex((s) => s.label === activeTab) * (100 / tier.subTypes.length)}% + 3px)`,
//                       width: `calc(${100 / tier.subTypes.length}% - 6px)`,
//                     }}
//                   />
//                   {tier.subTypes.map((sub) => (
//                     <button
//                       key={sub.label}
//                       onClick={() => setActiveTab(sub.label)}
//                       className={`flex-1 py-2 text-sm font-medium relative z-10 transition-colors ${
//                         activeTab === sub.label ? "text-[#4A4A4A]" : "text-[#6b4a2f]"
//                       }`}
//                     >
//                       {sub.label}
//                     </button>
//                   ))}
//                 </div>

//                 {/* ✅ Active Content */}
//                 <div className="flex flex-col flex-1">
//                   {tier.subTypes.map(
//                     (sub) =>
//                       sub.label === activeTab && (
//                         <div key={sub.label}>
//                           <p className="text-sm text-gray-700 mb-6">{sub.desc}</p>
//                           <button
//                             onClick={() => {
//                               setSelectedTier(tier.id);
//                               setSelectedGroup(sub.label.toLowerCase());
//                             }}
//                             className="holographic-btn relative overflow-hidden rounded-lg bg-[#AD5628] !text-[#FCF6EC] py-2 font-semibold w-full"
//                           >
//                             See Packages
//                           </button>
//                         </div>
//                       )
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


// -------------------------------------------------------------------------------------------------------------------------------------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { packages } from "@/data/packages";   
import {PackageCard} from "./PackageCard";

interface Tier {
  id: string;
  name: string;
  tagline: string;
  popular: boolean;
  subTypes: {
    label: string;
    desc: string;
  }[];
}

export default function Packages() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const router = useRouter();

  const tiers: Tier[] = [
    {
      id: "economy",
      name: "Economy",
      tagline: "Affordable & Convenient Journey",
      popular: false,
      subTypes: [
        { label: "Group", desc: "Shared rooms(if persons are less than 4),shuttle service or Bus, 7-28 day trip" },
        { label: "Couple", desc: "3-4 star hotels, semi-private transport, 7-28 day trip" },
        { label: "Family", desc: "Family suite, private transport optional, 7-28 day trip" },
      ],
    },
    {
      id: "standard",
      name: "Standard",
      tagline: "Smart Comfort Without the Premium Price",
      popular: true,
      subTypes: [
        { label: "Group", desc: "3-4 star hotels, group transport, ziyarat included" },
        { label: "Solo", desc: "Single occupancy, 4-star hotel, private car, no ziyarat included" },
        { label: "Couple", desc: "4-star hotel, private car, closer to Haram, ziyarat included" },
        { label: "Family", desc: "Family suites, dedicated driver, 14–21 days, ziyarat included" },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Luxury & Exclusive Experience",
      popular: false,
      subTypes: [
        { label: "Solo", desc: "5-star Haram-view hotel, premium transport, fast-track visa" },
        { label: "Couple", desc: "5-star Haram-view, luxury car, fast-track visa, other activites" },
        { label: "Family", desc: "Full-service package, private guide, premium transport" },
      ],
    },
  ];

  const handleSeePackages = (tierId: string, groupLabel: string) => {
    // Set the state for any local tracking if needed
    setSelectedTier(tierId);
    setSelectedGroup(groupLabel.toLowerCase());
    
    // Navigate to umrah-packages page with URL parameters
    router.push(`/umrah-packages?tier=${tierId}&type=${groupLabel.toLowerCase()}`);
  };

  return (
    <section className="p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#444]">
        Choose Your Umrah Journey
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Whether you're traveling solo, with couple, family, or in a group, we
        have packages designed to make your Umrah easy and worry-free.
      </p>

      <div className="flex justify-center gap-6 flex-wrap py-4 my-16">
        {tiers.map((tier) => {
          const [activeTab, setActiveTab] = useState(tier.subTypes[0].label);

          const borderGradients: Record<string, string> = {
            economy: "from-[#878274] to-[#24221a]",
            standard: "from-[#785c3a] to-[#e2c29a]",
            premium: "from-[#e7aa51] via-[#ffe499] via-[#8d5a1b] via-[#e7aa51] to-[#ac7031]",
          };

          return (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-[2px] bg-gradient-to-b ${borderGradients[tier.id]} max-w-sm w-full`}
            >
              <div className="rounded-3xl bg-[#FCF6EC] shadow-sm p-6 flex flex-col min-h-[260px]">
                {tier.popular && (
                  <span className="absolute -top-3 right-4 bg-gradient-to-r from-black to-[#c89116] text-white text-xs font-semibold px-3 py-1 rounded-lg shadow">
                    Most Popular
                  </span>
                )}

                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">{tier.name}</h3>
                  <p className="text-sm text-gray-500">{tier.tagline}</p>
                </div>

                {/* ✅ Tab Box */}
                <div className="relative bg-[#eaddcf] rounded-lg flex mb-6 overflow-hidden px-1">
                  <div
                    className="absolute rounded-md bg-[#FCF6EC] shadow transition-all duration-300"
                    style={{
                      top: "4px",
                      bottom: "4px",
                      left: `calc(${tier.subTypes.findIndex((s) => s.label === activeTab) * (100 / tier.subTypes.length)}% + 3px)`,
                      width: `calc(${100 / tier.subTypes.length}% - 6px)`,
                    }}
                  />
                  
                  {tier.subTypes.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => setActiveTab(sub.label)}
                      className={`flex-1 py-2 text-sm font-medium relative z-10 transition-colors ${
                        activeTab === sub.label ? "text-[#4A4A4A]" : "text-[#6b4a2f]"
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>

                {/* ✅ Active Content */}
                <div className="flex flex-col flex-1">
                  {tier.subTypes.map(
                    (sub) =>
                      sub.label === activeTab && (
                        <div key={sub.label}>
                          <p className="text-sm text-gray-700 mb-6">{sub.desc}</p>
                          <button
                            onClick={() => handleSeePackages(tier.id, sub.label)}
                            className="holographic-btn relative overflow-hidden rounded-lg bg-[#AD5628] !text-[#FCF6EC] py-2 font-semibold w-full"
                          >
                            See Packages
                          </button>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}