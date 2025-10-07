import { CarFront, ShieldPlus, PlaneLanding, PlaneTakeoff, Utensils, type LucideIcon } from "lucide-react";
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
  },
  october4: {
    name: "October Umrah Package 4",
    duration: "8 days",
    routes: ["Jeddah Airport", "Makkah", "Madinah", "Jeddah Airport"],
    hotelMAK: "Movenpick Hotel - Hajar Tower",
    hotelMAD: "Dar Al Eiman Al Haram Hotel",
    price: "394,992",
    discountedPrice: "394,992", // if no discount, keep same
    seatsLeft: 4, // you can set as needed
    departureDate: "16 October, 2025",
    returnDate: "24 October, 2025",
    makkahDistance: "100m",
    madinahDistance: "100m",
    departureCity: "Islamabad",
  },
  november: {
    name: "November Umrah Package",
    duration: "10 days",
    routes: ["Riyadh", "Makkah", "Madinah", "Riyadh"],
    hotelMAK: "Dummy Hotel",
    hotelMAD: "Dummy Hotel",
    price: "320,000",
    discountedPrice: "300,000",
    seatsLeft: 8,
    departureDate: "15 November, 2025",
    returnDate: "25 November, 2025",
    makkahDistance: "110m",
    madinahDistance: "110m",
    departureCity: "Lahore",
  },
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
  }
};

// Common perks - can be customized per tier
const createCommonPerks = (basePackage: PackageBase): Perk[] => [
  // { icon: "kabba", text: `${basePackage.makkahDistance} from Makkah` },
  // { icon: "madinah", text: `${basePackage.madinahDistance} from Madinah` },
  { icon: "passport", text: "Visa Assistance" },
  { icon: ShieldPlus, text: "Medical Insurance" },
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
    ['premium', 'couple'],
    ['premium', 'family'],
  ],
  october4: [
    ['premium', 'family'],
  ],
  november: [
    ['standard', 'couple'],
    ['premium', 'family'],
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