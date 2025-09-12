export interface PackageData {
  id: string;
  tier: 'economy' | 'standard' | 'premium';
  category: 'group' | 'couple' | 'family';
  title: string;
  routes: string[];
  hotelName: string;
  distanceMakkah: string;
  distanceMadinah: string;
  visaAssist: boolean;
  support24x7: boolean;
  departureDate: string;
  arrivalDate: string;
  transport: string;
  meal: string;
  price: number;
  newPrice?: number;
  seatsLeft?: number;
  badge?: string;
  type: 'ready' | 'custom';
}

export const packages: PackageData[] = [
  // Ready-made packages
  {
    id: 'p1',
    tier: 'economy',
    category: 'group',
    title: 'Economy Group Package',
    routes: ['Jeddah', 'Makkah', 'Madinah'],
    hotelName: 'Al Azizia Hotel (3 Stars)',
    distanceMakkah: '1.5 km from Makkah',
    distanceMadinah: '0.8 km from Madinah',
    visaAssist: true,
    support24x7: true,
    departureDate: '2024-10-15',
    arrivalDate: '2024-10-25',
    transport: 'AC Bus',
    meal: 'Half Board',
    price: 285000,
    newPrice: 270000,
    seatsLeft: 12,
    type: 'ready',
    badge: 'Early Bird'
  },
  // More ready-made packages...
  
  // Custom package placeholder
  {
    id: 'custom',
    tier: 'economy',
    category: 'group',
    title: 'Customize Your Package',
    routes: ["Karachi → Jeddah → Madinah → Karachi"],
    hotelName: 'Al Haram Hotel (4 Stars)',
    distanceMakkah: '200m from Makkah',
    distanceMadinah: '100m from Madinah',
    visaAssist: true,
    support24x7: true,
    departureDate: '2024-10-15',
    arrivalDate: '2024-10-25',
    transport: 'shuttle services',
    meal: 'Half Board',
    price: 290000,
    type: 'custom',
  }
];