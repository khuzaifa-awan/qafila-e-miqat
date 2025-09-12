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
}

// Icon mapping for custom icons
export const iconMap: Record<CustomIconKey, string> = {
  kabba: "/kaaba-icon.svg",
  madinah: "/madinah-icon.svg",
  passport: "/passport-icon.svg",
};

// Base package template
const basePackage: PackageBase = {
  name: "October Package",
  duration: "14 days",
  routes: ["Jeddah", "Makkah", "Madinah", "Jeddah"],
  hotel: "Hilton Towers (4 stars)",
  price: "279,800",
  discountedPrice: "270,800",
  seatsLeft: 13,
  departureDate: "12 October, 2025",
  returnDate: "26 October, 2025",
}
;

// Common perks
const commonPerks: Perk[] = [
  {
    icon: "kabba",
    text: "100m - 5 min walk from Makkah",
  },
  {
    icon: "madinah",
    text: "150m - 5 min walk from Madinah",
  },
  {
    icon: "passport",
    text: "Visa Assistance",
  },
  {
    icon: Headset,
    text: "24/7 Support",
  },
  {
    icon: PlaneTakeoff,
    text: "12 October, 2025",
  },
  {
    icon: PlaneLanding,
    text: "26 October, 2025",
  },
  {
    icon: CarFront,
    text: "Public Transport",
  },
  {
    icon: Utensils,
    text: "Breakfast & Dinner",
  },
];

// Package tier configurations
const packageTiers: Record<TierKey, { name: string; features: Perk[] }> = {
  economy: {
    name: "Economy",
    features: [...commonPerks],
  },
  standard: {
    name: "Standard", 
    features: [...commonPerks],
  },
  premium: {
    name: "Premium",
    features: [...commonPerks],
  },
};

// Travel group types
const travelGroups: Record<GroupKey, { name: string; maxPeople: number }> = {
  solo: { name: "Solo", maxPeople: 1 },
  couple: { name: "Couple", maxPeople: 2 },
  group: { name: "Group", maxPeople: 10 },
  family: { name: "Family", maxPeople: 6 },
};

// Helper function to create packages
const createPackage = (tier: TierKey, group: GroupKey): Package => ({
  id: `${tier}-${group}`,
  tier,
  group,
  tierName: packageTiers[tier].name,
  groupName: travelGroups[group].name,
  maxPeople: travelGroups[group].maxPeople,
  perks: packageTiers[tier].features,
  ...basePackage,
});

// Define available combinations
const availableCombinations: Array<[TierKey, GroupKey]> = [
  // Economy (no solo)
  ['economy', 'couple'],
  ['economy', 'group'],
  ['economy', 'family'],
  
  // Standard (all options)
  ['standard', 'solo'],
  ['standard', 'couple'],
  ['standard', 'group'],
  ['standard', 'family'],
  
  // Premium (no group)
  ['premium', 'solo'],
  ['premium', 'couple'],
  ['premium', 'family'],
];

// Main packages export - flattened structure
export const packages: Package[] = availableCombinations.map(([tier, group]) => 
  createPackage(tier, group)
);

// Alternative: Keep nested structure but optimized
export const packagesNested: Record<TierKey, Partial<Record<GroupKey, Package>>> = {
  economy: {
    couple: createPackage('economy', 'couple'),
    group: createPackage('economy', 'group'),
    family: createPackage('economy', 'family'),
  },
  standard: {
    solo: createPackage('standard', 'solo'),
    couple: createPackage('standard', 'couple'),
    group: createPackage('standard', 'group'),
    family: createPackage('standard', 'family'),
  },
  premium: {
    solo: createPackage('premium', 'solo'),
    couple: createPackage('premium', 'couple'),
    family: createPackage('premium', 'family'),
  },
};

// Helper functions for easier data access
export const getPackagesByTier = (tier: TierKey): Package[] => 
  packages.filter(pkg => pkg.tier === tier);

export const getPackagesByGroup = (group: GroupKey): Package[] => 
  packages.filter(pkg => pkg.group === group);

export const getPackageById = (id: string): Package | undefined => 
  packages.find(pkg => pkg.id === id);

// For rendering icons in components
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

// Export types for use in components
export type { Package, Perk, TierKey, GroupKey, CustomIconKey };