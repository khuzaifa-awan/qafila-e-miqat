// import { CarFront, Headset, PlaneLanding, PlaneTakeoff, Utensils, type LucideIcon } from "lucide-react";
// import React from "react";


// // Type definitions
// type CustomIconKey = 'kabba' | 'madinah' | 'passport';
// type TierKey = 'economy' | 'standard' | 'premium';
// type GroupKey = 'solo' | 'couple' | 'group' | 'family';

// interface Perk {
//   icon: CustomIconKey | LucideIcon;
//   text: string;
// }

// interface PackageBase {
//   name: string;
//   duration: string;
//   routes: string[];
//   hotel: string;
//   price: string;
//   discountedPrice: string;
//   seatsLeft: number;
//   departureDate: string;
//   returnDate: string;
// }

// interface Package extends PackageBase {
//   id: string;
//   tier: TierKey;
//   group: GroupKey;
//   tierName: string;
//   groupName: string;
//   maxPeople: number;
//   perks: Perk[];
// }

// // Icon mapping for custom icons
// export const iconMap: Record<CustomIconKey, string> = {
//   kabba: "/kaaba-icon.svg",
//   madinah: "/madinah-icon.svg",
//   passport: "/passport-icon.svg",
// };

// // Base package template
// const basePackage: PackageBase = {
//   name: "October Package",
//   duration: "14 days",
//   routes: ["Jeddah", "Makkah", "Madinah", "Jeddah"],
//   hotel: "Hilton Towers (4 stars)",
//   price: "279,800",
//   discountedPrice: "270,800",
//   seatsLeft: 13,
//   departureDate: "12 October, 2025",
//   returnDate: "26 October, 2025",
// }
// ;

// // Common perks
// const commonPerks: Perk[] = [
//   {
//     icon: "kabba",
//     text: "100m - 5 min walk from Makkah",
//   },
//   {
//     icon: "madinah",
//     text: "150m - 5 min walk from Madinah",
//   },
//   {
//     icon: "passport",
//     text: "Visa Assistance",
//   },
//   {
//     icon: Headset,
//     text: "24/7 Support",
//   },
//   {
//     icon: PlaneTakeoff,
//     text: "12 October, 2025",
//   },
//   {
//     icon: PlaneLanding,
//     text: "26 October, 2025",
//   },
//   {
//     icon: CarFront,
//     text: "Public Transport",
//   },
//   {
//     icon: Utensils,
//     text: "Breakfast & Dinner",
//   },
// ];

// // Package tier configurations
// const packageTiers: Record<TierKey, { name: string; features: Perk[] }> = {
//   economy: {
//     name: "Economy",
//     features: [...commonPerks],
//   },
//   standard: {
//     name: "Standard", 
//     features: [...commonPerks],
//   },
//   premium: {
//     name: "Premium",
//     features: [...commonPerks],
//   },
// };

// // Travel group types
// const travelGroups: Record<GroupKey, { name: string; maxPeople: number }> = {
//   solo: { name: "Solo", maxPeople: 1 },
//   couple: { name: "Couple", maxPeople: 2 },
//   group: { name: "Group", maxPeople: 10 },
//   family: { name: "Family", maxPeople: 6 },
// };

// // Helper function to create packages
// const createPackage = (tier: TierKey, group: GroupKey): Package => ({
//   id: `${tier}-${group}`,
//   tier,
//   group,
//   tierName: packageTiers[tier].name,
//   groupName: travelGroups[group].name,
//   maxPeople: travelGroups[group].maxPeople,
//   perks: packageTiers[tier].features,
//   ...basePackage,
// });

// // Define available combinations
// const availableCombinations: Array<[TierKey, GroupKey]> = [
//   // Economy (no solo)
//   ['economy', 'couple'],
//   ['economy', 'group'],
//   ['economy', 'family'],
  
//   // Standard (all options)
//   ['standard', 'solo'],
//   ['standard', 'couple'],
//   ['standard', 'group'],
//   ['standard', 'family'],
  
//   // Premium (no group)
//   ['premium', 'solo'],
//   ['premium', 'couple'],
//   ['premium', 'family'],
// ];

// // Main packages export - flattened structure
// export const packages: Package[] = availableCombinations.map(([tier, group]) => 
//   createPackage(tier, group)
// );

// // Alternative: Keep nested structure but optimized
// export const packagesNested: Record<TierKey, Partial<Record<GroupKey, Package>>> = {
//   economy: {
//     couple: createPackage('economy', 'couple'),
//     group: createPackage('economy', 'group'),
//     family: createPackage('economy', 'family'),
//   },
//   standard: {
//     solo: createPackage('standard', 'solo'),
//     couple: createPackage('standard', 'couple'),
//     group: createPackage('standard', 'group'),
//     family: createPackage('standard', 'family'),
//   },
//   premium: {
//     solo: createPackage('premium', 'solo'),
//     couple: createPackage('premium', 'couple'),
//     family: createPackage('premium', 'family'),
//   },
// };

// // Helper functions for easier data access
// export const getPackagesByTier = (tier: TierKey): Package[] => 
//   packages.filter(pkg => pkg.tier === tier);

// export const getPackagesByGroup = (group: GroupKey): Package[] => 
//   packages.filter(pkg => pkg.group === group);

// export const getPackageById = (id: string): Package | undefined => 
//   packages.find(pkg => pkg.id === id);

// // For rendering icons in components
// export const renderIcon = (
//   icon: CustomIconKey | LucideIcon, 
//   props: React.ComponentProps<'img'> & React.ComponentProps<'svg'> = {}
// ): React.ReactElement => {
//   if (typeof icon === 'string') {
//     return React.createElement('img', { 
//       src: iconMap[icon], 
//       alt: `${icon} icon`, 
//       ...props 
//     });
//   }
//   const IconComponent = icon;
//   return React.createElement(IconComponent, props);
// };

// // Export types for use in components
// export type { Package, Perk, TierKey, GroupKey, CustomIconKey };

import { CarFront, Headset, PlaneLanding, PlaneTakeoff, Utensils, type LucideIcon } from "lucide-react";
import React from "react";

// Type definitions
type CustomIconKey = 'kabba' | 'madinah' | 'passport';
type TierKey = 'economy' | 'standard' | 'premium';
type GroupKey = 'solo' | 'couple' | 'group' | 'family';

interface Perk {
  icon: CustomIconKey | LucideIcon;
  text: string;
}

interface PackageBase {
  name: string;
  duration: string;
  routes: string[];
  hotel: string;
  price: string;
  discountedPrice: string;
  seatsLeft: number;
  departureDate: string;
  returnDate: string;
}

interface Package extends PackageBase {
  id: string;
  tier: TierKey;
  group: GroupKey;
  tierName: string;
  groupName: string;
  maxPeople: number;
  perks: Perk[];
  basePackageKey: string; // Track which base package this comes from
}

// Icon mapping
export const iconMap: Record<CustomIconKey, string> = {
  kabba: "/kaaba-icon.svg",
  madinah: "/madinah-icon.svg",
  passport: "/passport-icon.svg",
};

// Base packages - Easy to add/remove seasonal packages
const basePackages: Record<string, PackageBase> = {
  october: {
    name: "October Umrah Package",
    duration: "14 days",
    routes: ["Jeddah", "Makkah", "Madinah", "Jeddah"],
    hotel: "Hilton Towers (4 stars)",
    price: "279,800",
    discountedPrice: "270,800",
    seatsLeft: 13,
    departureDate: "12 October, 2025",
    returnDate: "26 October, 2025",
  },
  november: {
    name: "November Umrah Package",
    duration: "10 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotel: "Marriott Hotel (5 stars)",
    price: "320,000",
    discountedPrice: "300,000",
    seatsLeft: 8,
    departureDate: "15 November, 2025",
    returnDate: "25 November, 2025",
  },
  december: {
    name: "December Special Package",
    duration: "12 days",
    routes: ["Islamabad", "Jeddah", "Makkah", "Madinah", "Jeddah"],
    hotel: "Grand Hyatt (5 stars)",
    price: "350,000",
    discountedPrice: "330,000",
    seatsLeft: 20,
    departureDate: "20 December, 2025",
    returnDate: "31 December, 2025",
  }
};

// Common perks - can be customized per tier
const createCommonPerks = (basePackage: PackageBase): Perk[] => [
  { icon: "kabba", text: "100m - 5 min walk from Makkah" },
  { icon: "madinah", text: "150m - 5 min walk from Madinah" },
  { icon: "passport", text: "Visa Assistance" },
  { icon: Headset, text: "24/7 Support" },
  { icon: PlaneTakeoff, text: basePackage.departureDate },
  { icon: PlaneLanding, text: basePackage.returnDate },
  { icon: CarFront, text: "Public Transport" },
  { icon: Utensils, text: "Breakfast & Dinner" },
];

// Tier-specific additional perks
const tierSpecificPerks: Record<TierKey, Perk[]> = {
  economy: [],
  standard: [
    { icon: Utensils, text: "Free Lunch" },
  ],
  premium: [
    { icon: Utensils, text: "All Meals Included" },
    { icon: CarFront, text: "Private Transport" },
  ],
};

// Package tier configurations
const packageTiers: Record<TierKey, { name: string }> = {
  economy: { name: "Economy" },
  standard: { name: "Standard" },
  premium: { name: "Premium" },
};

// Travel group types
const travelGroups: Record<GroupKey, { name: string; maxPeople: number }> = {
  solo: { name: "Solo", maxPeople: 1 },
  couple: { name: "Couple", maxPeople: 2 },
  group: { name: "Group", maxPeople: 10 },
  family: { name: "Family", maxPeople: 6 },
};

// Available combinations - Easy to modify
const packageAvailability: Record<string, Array<[TierKey, GroupKey]>> = {
  october: [
    ['economy', 'couple'],
    ['economy', 'group'],
    ['economy', 'family'],
    ['standard', 'solo'],
    ['standard', 'couple'],
    ['standard', 'group'],
    ['standard', 'family'],
    ['premium', 'solo'],
    ['premium', 'couple'],
    ['premium', 'family'],
  ],
  november: [
    ['standard', 'couple'],
    ['standard', 'family'],
    ['premium', 'solo'],
    ['premium', 'couple'],
    ['premium', 'family'],
  ],
  december: [
    ['premium', 'couple'],
    ['premium', 'family'],
  ],
};

// Helper function to create a package
const createPackage = (
  basePackageKey: string, 
  basePackage: PackageBase, 
  tier: TierKey, 
  group: GroupKey
): Package => {
  const commonPerks = createCommonPerks(basePackage);
  const tierPerks = tierSpecificPerks[tier];
  
  return {
    id: `${basePackageKey}-${tier}-${group}`,
    basePackageKey,
    tier,
    group,
    tierName: packageTiers[tier].name,
    groupName: travelGroups[group].name,
    maxPeople: travelGroups[group].maxPeople,
    perks: [...commonPerks, ...tierPerks],
    ...basePackage,
  };
};

// Generate all packages
export const packages: Package[] = Object.entries(basePackages).flatMap(
  ([baseKey, basePackage]) =>
    (packageAvailability[baseKey] || []).map(([tier, group]) =>
      createPackage(baseKey, basePackage, tier, group)
    )
);

// Helper functions
export const getPackagesByTier = (tier: TierKey): Package[] => 
  packages.filter(pkg => pkg.tier === tier);

export const getPackagesByGroup = (group: GroupKey): Package[] => 
  packages.filter(pkg => pkg.group === group);

export const getPackagesByBasePackage = (basePackageKey: string): Package[] =>
  packages.filter(pkg => pkg.basePackageKey === basePackageKey);

export const getPackageById = (id: string): Package | undefined => 
  packages.find(pkg => pkg.id === id);

// Get available tiers for a specific base package
export const getAvailableTiers = (basePackageKey: string): TierKey[] => {
  const availability = packageAvailability[basePackageKey] || [];
  return [...new Set(availability.map(([tier]) => tier))];
};

// Get available groups for a specific base package and tier
export const getAvailableGroups = (basePackageKey: string, tier: TierKey): GroupKey[] => {
  const availability = packageAvailability[basePackageKey] || [];
  return availability
    .filter(([t]) => t === tier)
    .map(([, group]) => group);
};

// Utility functions for package management
export const addBasePackage = (key: string, packageData: PackageBase) => {
  // In a real app, this would update your database/state
  console.log(`Adding base package: ${key}`, packageData);
};

export const removeBasePackage = (key: string) => {
  // In a real app, this would update your database/state
  console.log(`Removing base package: ${key}`);
};

export const updatePackageAvailability = (
  basePackageKey: string, 
  combinations: Array<[TierKey, GroupKey]>
) => {
  // In a real app, this would update your database/state
  console.log(`Updating availability for ${basePackageKey}:`, combinations);
};

// Icon rendering function
export const renderIcon = (
  icon: CustomIconKey | LucideIcon, 
  props: React.ComponentProps<'img'> & React.ComponentProps<'svg'> = {}
): React.ReactElement => {
  if (typeof icon === 'string') {
    return React.createElement('img', { 
      src: iconMap[icon], 
      alt: `${icon} icon`, 
      ...props 
    });
  }
  const IconComponent = icon;
  return React.createElement(IconComponent, props);
};

// Export types
export type { Package, Perk, TierKey, GroupKey, CustomIconKey, PackageBase };