import { CarFront, ShieldPlus, PlaneLanding, PlaneTakeoff, User, Utensils, type LucideIcon } from "lucide-react";
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
  hotelMAK: string;
  hotelMAD: string;
  price: string;
  discountedPrice: string;
  seatsLeft: number;
  departureDate: string;
  returnDate: string;
  makkahDistance: string;   // NEW
  madinahDistance: string;  // NEW
  departureCity: string;   // NEW
  people: string;   // NEW
  food: string;   // NEW
  stayMAK: string;   // NEW
  stayMAD: string;   // NEW
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

// ------------------------------ October Packages ------------------------------

  october: {
    name: "October Umrah Package",
    duration: "14 days",
    routes: ["Jeddah", "Makkah", "Madinah", "Jeddah"],
    hotelMAK: "Dummy Hotel",
    hotelMAD: "Dummy Hotel",
    price: "279,800",
    discountedPrice: "270,800",
    seatsLeft: 13,
    departureDate: "12 October, 2025",
    returnDate: "26 October, 2025",
    makkahDistance: "100m",
    madinahDistance: "150m",
    departureCity: "Karachi",
    people: "2",
    food: "No meals included",
    stayMAK: "4 nights",
    stayMAD: "3 nights"
  },
  october1: {
    name: "October Umrah Package",
    duration: "8 days",
    routes: ["Jeddah", "Makkah", "Madinah", "Jeddah"],
    hotelMAK: "Movenpick Hotel - Hajar Tower",
    hotelMAD: "Dar Al Eiman Al Haram Hotel",
    price: "410,800",
    discountedPrice: "410,800",
    seatsLeft: 12,
    departureDate: "16 October, 2025",
    returnDate: "24 October, 2025",
    makkahDistance: "100m",
    madinahDistance: "150m",
    departureCity: "Lahore",
    people: "2",
    food: "No meals included",
    stayMAK: "4 nights",
    stayMAD: "3 nights"
  },
  october_uc_quad: {
    name: "October Umrah Package",
    duration: "8 days",
    routes: ["Jeddah Airport", "Makkah", "Madinah", "Jeddah Airport"],
    hotelMAK: "Movenpick Hotel - Hajar Tower",
    hotelMAD: "Dar Al Eiman Al Haram Hotel",
    price: "394,992",
    discountedPrice: "394,992", // if no discount, keep same
    seatsLeft: 0, // you can set as needed
    departureDate: "16 October, 2025",
    returnDate: "24 October, 2025",
    makkahDistance: "100m",
    madinahDistance: "100m",
    departureCity: "Islamabad",
    people: "4",
    food: "Breakfast only",
    stayMAK: "4 nights",
    stayMAD: "4 nights"  },
  
  october_uc_triple: {
    name: "October Umrah Package",
    duration: "8 days",
    routes: ["Jeddah Airport", "Makkah", "Madinah", "Jeddah Airport"],
    hotelMAK: "Movenpick Hotel - Hajar Tower",
    hotelMAD: "Dar Al Eiman Al Haram Hotel",
    price: "440000",
    discountedPrice: "440000", // if no discount, keep same
    seatsLeft: 0, // you can set as needed
    departureDate: "16 October, 2025",
    returnDate: "24 October, 2025",
    makkahDistance: "100m",
    madinahDistance: "100m",
    departureCity: "Islamabad",
    people: "4",
    food: "Breakfast only",
    stayMAK: "4 nights",
    stayMAD: "4 nights"  },

// ------------------------------ November Packages ------------------------------

  november1_double: {
    name: "November Umrah Package",
    duration: "22 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Fakhir Al Azizia",
    hotelMAD: "Manazil Marjan",
    price: "329,680",
    discountedPrice: "317,000",
    seatsLeft: 25,
    departureDate: "23 November, 2025",
    returnDate: "14 December, 2025",
    makkahDistance: "7-8km (Shuttle Service Provided)",
    madinahDistance: "2km (Shuttle Service Provided)",
    departureCity: "Islamabad",
    people: "2",
    food: "No meals included",
    stayMAK: "6+6 nights",
    stayMAD: "8 nights"

  },
  november1_triple: {
    name: "November Umrah Package",
    duration: "22 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Fakhir Al Azizia",
    hotelMAD: "Manazil Marjan",
    price: "301,600",
    discountedPrice: "290,000",
    seatsLeft: 25,
    departureDate: "23 November, 2025",
    returnDate: "14 December, 2025",
    makkahDistance: "7-8km (Shuttle Service Provided)",
    madinahDistance: "2km (Shuttle Service Provided)",
    departureCity: "Islamabad",
    people: "3",
    food: "No meals included",
    stayMAK: "6+6 nights",
    stayMAD: "8 nights"
  },
  november1_quad: {
    name: "November Umrah Package",
    duration: "22 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Fakhir Al Azizia",
    hotelMAD: "Manazil Marjan",
    price: "288,290",
    discountedPrice: "277,300",
    seatsLeft: 25,
    departureDate: "23 November, 2025",
    returnDate: "14 December, 2025",
    makkahDistance: "7-8km (Shuttle Service Provided)",
    madinahDistance: "2km (Shuttle Service Provided)",
    departureCity: "Islamabad",
    people: "4",
    food: "No meals included",
    stayMAK: "6+6 nights",
    stayMAD: "8 nights"  
  },
  november1_sharing: {
    name: "November Umrah Package",
    duration: "22 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Fakhir Al Azizia",
    hotelMAD: "Manazil Marjan",
    price: "281,840",
    discountedPrice: "271,000",
    seatsLeft: 25,
    departureDate: "23 November, 2025",
    returnDate: "14 December, 2025",
    makkahDistance: "7-8km (Shuttle Service Provided)",
    madinahDistance: "2km (Shuttle Service Provided)",
    departureCity: "Islamabad",
    people: "4+",
    food: "No meals included",
    stayMAK: "6+6 nights",
    stayMAD: "8 nights"  
  },

// -------- Nov Second Packages --------

  november2_double: {
    name: "November Umrah Package",
    duration: "22 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Dhaif Hotel",
    hotelMAD: "Manazil Marjan",
    price: "329,680",
    discountedPrice: "317,000",
    seatsLeft: 25,
    departureDate: "23 November, 2025",
    returnDate: "14 December, 2025",
    makkahDistance: "7-8km (Shuttle Service Provided)",
    madinahDistance: "2km (Shuttle Service Provided)",
    departureCity: "Islamabad",
    people: "2",
    food: "No meals included",
    stayMAK: "6+6 nights",
    stayMAD: "8 nights"

  },
  november2_triple: {
    name: "November Umrah Package",
    duration: "22 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Dhaif Hotel",
    hotelMAD: "Manazil Marjan",
    price: "301,600",
    discountedPrice: "290,000",
    seatsLeft: 25,
    departureDate: "23 November, 2025",
    returnDate: "14 December, 2025",
    makkahDistance: "7-8km (Shuttle Service Provided)",
    madinahDistance: "2km (Shuttle Service Provided)",
    departureCity: "Islamabad",
    people: "3",
    food: "No meals included",
    stayMAK: "6+6 nights",
    stayMAD: "8 nights"
  },
  november2_quad: {
    name: "November Umrah Package",
    duration: "22 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Dhaif Hotel",
    hotelMAD: "Manazil Marjan",
    price: "288,290",
    discountedPrice: "277,300",
    seatsLeft: 25,
    departureDate: "23 November, 2025",
    returnDate: "14 December, 2025",
    makkahDistance: "7-8km (Shuttle Service Provided)",
    madinahDistance: "2km (Shuttle Service Provided)",
    departureCity: "Islamabad",
    people: "4",
    food: "No meals included",
    stayMAK: "6+6 nights",
    stayMAD: "8 nights"  
  },
  november2_sharing: {
    name: "November Umrah Package",
    duration: "22 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Dhaif Hotel",
    hotelMAD: "Manazil Marjan",
    price: "281,840",
    discountedPrice: "271,000",
    seatsLeft: 25,
    departureDate: "23 November, 2025",
    returnDate: "14 December, 2025",
    makkahDistance: "7-8km (Shuttle Service Provided)",
    madinahDistance: "2km (Shuttle Service Provided)",
    departureCity: "Islamabad",
    people: "4+",
    food: "No meals included",
    stayMAK: "6+6 nights",
    stayMAD: "8 nights"  
  },

// ------------------------------ December Packages ------------------------------

  december: {
    name: "December Special Package",
    duration: "12 days",
    routes: ["Jeddah", "Makkah", "Madinah", "Jeddah"],
    hotelMAK: "Dummy Hotel",
    hotelMAD: "Dummy Hotel",
    price: "350,000",
    discountedPrice: "330,000",
    seatsLeft: 20,
    departureDate: "20 December, 2025",
    returnDate: "31 December, 2025",
    makkahDistance: "120m",
    madinahDistance: "120m",
    departureCity: "Islamabad",
    people: "2",
    food: "No meals included",
    stayMAK: "4 nights",
    stayMAD: "3 nights"
  }
};

// Common perks - can be customized per tier
const createCommonPerks = (basePackage: PackageBase): Perk[] => [
  { icon: "kabba", text: `${basePackage.stayMAK}` },
  { icon: "madinah", text: `${basePackage.stayMAD}` },
  { icon: User, text: `${basePackage.people}` },
  { icon: ShieldPlus, text: "Medical Insurance" },
  { icon: PlaneTakeoff, text: basePackage.departureDate },
  { icon: PlaneLanding, text: basePackage.returnDate },
  { icon: CarFront, text: "Public Transport" },
  { icon: Utensils, text: basePackage.food },
];

// Tier-specific additional perks
const tierSpecificPerks: Record<TierKey, Perk[]> = {
  economy: [
     { icon: Utensils, text: "No Meals included" },
  ],
  standard: [
    { icon: Utensils, text: "Free Breakfast" },
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
  
  // october1: [
  //   ['premium', 'family'],
  // ],
  october_uc_quad: [
    ['standard', 'family'],
  ],
  october_uc_triple: [
    ['standard', 'family'],
  ],
  november1_double: [
    ['economy', 'couple'],
  ],
  november1_triple: [
    ['economy', 'family'],
  ],
  november1_quad: [
    ['economy', 'family'],
  ],
  november1_sharing: [
    ['economy', 'group'],
  ]
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