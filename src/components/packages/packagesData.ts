// src/components/packages/packagesData.ts

// ----- Types -----
export type Tier = "economy" | "standard" | "premium";
export type Audience = "group" | "couple" | "family";

export interface Package {
  id: string;                 // e.g. "pkg-001"
  tier: Tier;                 // economy | standard | premium
  category: Audience;         // group | couple | family
  title: string;              // short heading for the card
  routes: string[];           // e.g. ["Karachi → Jeddah → Madinah → Karachi"]
  hotelName: string;          // main hotel or combo
  distanceMakkah: string;     // e.g. "300m to Haram"
  distanceMadinah: string;    // e.g. "200m to Masjid an-Nabawi"
  visaAssist: boolean;
  support24x7: boolean;
  departureDate: string;      // ISO or readable date
  arrivalDate: string;        // ISO or readable date
  transport: string;          // e.g. "Private AC Sedan"
  meal: string;               // e.g. "Breakfast & Dinner"
  price: number;              // numeric price (PKR)
  newPrice?: number;          // ✅ optional discounted price
  currency: "PKR";
  seatsLeft?: number;         // optional; omit when not shown
  // New optional badge field
  badge?: {
    text: string;      // Badge text like "5% Off until September 4"
    expiresAt?: string; // ISO date when badge disappears
    color?: string;    // Optional badge color for customization
  };
}

// ----- Sample Data (edit freely) -----
export const packagesData: Package[] = [
  {
    id: "pkg-001",
    tier: "economy",
    category: "family",
    title: "Economy Family 14-Day",
    routes: ["Karachi → Jeddah → Makkah → Madinah → Karachi"],
    hotelName: "Dar Al Eiman Grand (4 Star)",
    distanceMakkah: "650m to Haram",
    distanceMadinah: "500m to Masjid an-Nabawi",
    visaAssist: true,
    support24x7: true,
    departureDate: "2025-10-05",
    arrivalDate: "2025-10-19",
    transport: "Shared AC Coach",
    meal: "Breakfast",
    price: 495000,
    newPrice: 462000, 
    currency: "PKR",
    seatsLeft: 7,
  },
  {
    id: "pkg-002",
    tier: "economy",
    category: "family",
    title: "Economy Family 21-Day",
    routes: ["Lahore → Madinah → Makkah → Lahore"],
    hotelName: "Al Rawda (3 Star)",
    distanceMakkah: "800m to Haram",
    distanceMadinah: "400m to Masjid an-Nabawi",
    visaAssist: true,
    support24x7: true,
    departureDate: "2025-10-12",
    arrivalDate: "2025-11-02",
    transport: "Shared Coach + Internal Transfers",
    meal: "Breakfast",
    price: 575000,
    currency: "PKR"
    // seatsLeft intentionally omitted (won't render)
  },
  {
    id: "pkg-003",
    tier: "economy",
    category: "group",
    title: "Economy Group 10-Day",
    routes: ["Islamabad → Jeddah → Makkah → Islamabad"],
    hotelName: "Nada Al Deafah (3 Star)",
    distanceMakkah: "900m to Haram",
    distanceMadinah: "—",
    visaAssist: true,
    support24x7: true,
    departureDate: "2025-10-08",
    arrivalDate: "2025-10-18",
    transport: "Group Bus",
    meal: "No Meals",
    price: 385000,
    currency: "PKR",
  },
  {
    id: "pkg-004",
    tier: "standard",
    category: "couple",
    title: "Standard Couple 12-Day",
    routes: ["Karachi → Madinah → Makkah → Karachi"],
    hotelName: "Le Meridien Towers (3 Star)",
    distanceMakkah: "500m to Haram",
    distanceMadinah: "300m to Masjid an-Nabawi",
    visaAssist: true,
    support24x7: true,
    departureDate: "2025-10-15",
    arrivalDate: "2025-10-27",
    transport: "Private AC Sedan",
    meal: "Breakfast",
    price: 665000,
    currency: "PKR",
    seatsLeft: 3,
  },
  {
    id: "pkg-005",
    tier: "standard",
    category: "family",
    title: "Standard Family 14-Day",
    routes: ["Lahore → Jeddah → Madinah → Lahore"],
    hotelName: "Swissotel Makkah (5 Star)",
    distanceMakkah: "350m to Haram",
    distanceMadinah: "250m to Masjid an-Nabawi",
    visaAssist: true,
    support24x7: true,
    departureDate: "2025-10-20",
    arrivalDate: "2025-11-03",
    transport: "Private Van",
    meal: "Breakfast & Dinner",
    price: 275000,
    currency: "PKR",
  },
  {
    id: "pkg-006",
    tier: "premium",
    category: "couple",
    title: "Premium Couple 10-Day",
    routes: ["Karachi → Jeddah → Makkah → Madinah → Karachi"],
    hotelName: "Fairmont Clock Tower / Anwar Al Madinah Movenpick",
    distanceMakkah: "100m to Haram",
    distanceMadinah: "200m to Masjid an-Nabawi",
    visaAssist: true,
    support24x7: true,
    departureDate: "2025-10-25",
    arrivalDate: "2025-11-04",
    transport: "Luxury Car + VIP Transfers",
    meal: "All Meals",
    price: 295000,
    currency: "PKR",
    seatsLeft: 2,
  },
];

// ----- Small helpers (optional) -----
export const getPackages = (tier: Tier, category: Audience) =>
  packagesData.filter((p) => p.tier === tier && p.category === category);

export const hasPackages = (tier: Tier, category: Audience) =>
  getPackages(tier, category).length > 0;
