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
  transport: string;   // NEW
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


// ------------------------------ November Packages ------------------------------

  november4_usa: {
    name: "November Umrah Package USA",
    duration: "10 nights",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Hilton Convention Makkah",
    hotelMAD: "Crowne Plaza Madinah",
    price: "525445",
    discountedPrice: "520550",
    seatsLeft: 8,
    departureDate: "15 November, 2025",
    returnDate: "25 November, 2025",
    makkahDistance: "250m",
    madinahDistance: "150m",
    departureCity: "USA",
    people: "4",
    food: "Breakfast included",
    stayMAK: "5 nights",
    stayMAD: "5 nights",
    transport: "H1 Private Transport"

  },
  november3_usa: {
    name: "November Umrah Package USA",
    duration: "10 nights",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Hilton Convention Makkah",
    hotelMAD: "Crowne Plaza Madinah",
    price: "580500",
    discountedPrice: "580500",
    seatsLeft: 8,
    departureDate: "15 November, 2025",
    returnDate: "25 November, 2025",
    makkahDistance: "250m",
    madinahDistance: "150m",
    departureCity: "USA",
    people: "3",
    food: "Breakfast included",
    stayMAK: "5 nights",
    stayMAD: "5 nights",
    transport: "H1 Private Transport"

  },
  november2_usa: {
    name: "November Umrah Package USA",
    duration: "10 nights",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Hilton Convention Makkah",
    hotelMAD: "Crowne Plaza Madinah",
    price: "680710",
    discountedPrice: "680710",
    seatsLeft: 8,
    departureDate: "15 November, 2025",
    returnDate: "25 November, 2025",
    makkahDistance: "250m",
    madinahDistance: "150m",
    departureCity: "USA",
    people: "2",
    food: "Breakfast included",
    stayMAK: "5 nights",
    stayMAD: "5 nights",
    transport: "H1 Private Transport"

  },
 
  november4_usa2: {
    name: "November Umrah Package USA",
    duration: "7 nights",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Pullman ZamZam Makkah",
    hotelMAD: "Anwar Al Madinah Movenpick",
    price: "442279",
    discountedPrice: "437900",
    seatsLeft: 12,
    departureDate: "15 November, 2025",
    returnDate: "22 November, 2025",
    makkahDistance: "100m",
    madinahDistance: "Only 25m",
    departureCity: "USA",
    people: "4",
    food: "Breakfast included",
    stayMAK: "3 nights",
    stayMAD: "4 nights",
    transport: "H1 Private Transport"

  },
  november3_usa2: {
    name: "November Umrah Package USA",
    duration: "7 nights",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Pullman ZamZam Makkah",
    hotelMAD: "Anwar Al Madinah Movenpick",
    price: "453700",
    discountedPrice: "453700",
    seatsLeft: 12,
    departureDate: "15 November, 2025",
    returnDate: "22 November, 2025",
    makkahDistance: "100m",
    madinahDistance: "Only 25m",
    departureCity: "USA",
    people: "4",
    food: "Breakfast included",
    stayMAK: "3 nights",
    stayMAD: "4 nights",
    transport: "H1 Private Transport"

  },
  november2_usa2: {
    name: "November Umrah Package USA",
    duration: "7 nights",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Pullman ZamZam Makkah",
    hotelMAD: "Anwar Al Madinah Movenpick",
    price: "552700",
    discountedPrice: "552700",
    seatsLeft: 12,
    departureDate: "15 November, 2025",
    returnDate: "22 November, 2025",
    makkahDistance: "100m",
    madinahDistance: "Only 25m",
    departureCity: "USA",
    people: "4",
    food: "Breakfast included",
    stayMAK: "3 nights",
    stayMAD: "4 nights",
    transport: "H1 Private Transport"

  },
 

// ------------------------------ December Packages ------------------------------

  december4: {
    name: "Special December Umrah with Taif Tour",
    duration: "10 nights",
    routes: ["Jeddah", "Makkah", "Madinah", "Jeddah"],
    hotelMAK: "Anjum Makkah Hotel",
    hotelMAD: "Crowne Plaza Madinah",
    price: "539037",
    discountedPrice: "533700",
    seatsLeft: 20,
    departureDate: "25 December, 2025",
    returnDate: "04 January, 2026",
    makkahDistance: "200m",
    madinahDistance: "150m",
    departureCity: "Islamabad",
    people: "4",
    food: "Breakfast included",
    stayMAK: "5 nights",
    stayMAD: "5 nights",
    transport: "Staria & SUV (Taif)"
  },
  december4_taif: {
    name: "Special December Umrah with Taif Tour",
    duration: "10 nights",
    routes: ["Jeddah", "Makkah", "Madinah", "Jeddah"],
    hotelMAK: "Anjum Makkah Hotel",
    hotelMAD: "Crowne Plaza Madinah",
    price: "550,200",
    discountedPrice: "550,200",
    seatsLeft: 20,
    departureDate: "25 December, 2025",
    returnDate: "04 January, 2026",
    makkahDistance: "200m",
    madinahDistance: "150m",
    departureCity: "Islamabad",
    people: "4",
    food: "Breakfast included",
    stayMAK: "5 nights",
    stayMAD: "5 nights",
    transport: "Staria & SUV (Taif)"
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
  { icon: CarFront, text:`${basePackage.transport}` },
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
  
  november4_usa: [
    ['premium', 'family'],
  ],
  november3_usa: [
    ['premium', 'family'],
  ],
  november2_usa: [
    ['premium', 'couple'],
  ],
  november4_usa2: [
    ['premium', 'family'],
  ],
  november3_usa2: [
    ['premium', 'family'],
  ],
  november2_usa2: [
    ['premium', 'couple'],
  ],
  december4_taif: [
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