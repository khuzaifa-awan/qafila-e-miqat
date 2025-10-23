"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  
  // ✅ FIX: Move all useState hooks to the top level
  // Create state for each tier's active tab
  const [economyActiveTab, setEconomyActiveTab] = useState("Group");
  const [standardActiveTab, setStandardActiveTab] = useState("Group");
  const [premiumActiveTab, setPremiumActiveTab] = useState("Solo");
  
  const router = useRouter();

  const tiers: Tier[] = [
    {
      id: "economy",
      name: "Economy",
      tagline: "Affordable & Convenient Journey",
      popular: false,
      subTypes: [
        { label: "Group", desc: "2-3 star hotels, Shared rooms, Shuttle services, Larger shared vehicles includes buses or coaches" },
        { label: "Couple", desc: "2-3 star hotels, Private basic double room with basic amenities, Shared transport in modern vehicles" },
        { label: "Family", desc: "2-3 star hotels, Multi-occupancy rooms suitable for families, Private or semi private transport optional" },
      ],
    },
    {
      id: "standard",
      name: "Standard",
      tagline: "Smart Comfort Without the Premium Price",
      popular: true,
      subTypes: [
        { label: "Group", desc: "3-5 star hotels, Multi-occupancy rooms, Private or semi-private large vehicle ensure comfort, essential amenities" },
        { label: "Solo", desc: "3-5 star hotels, May book single rooms at extra cost, Shared or group transport using cars or SUVs, essential amenities" },
        { label: "Couple", desc: "3-5 star hotels, Private double room, Good facilities and essential services, private or semi-private vehicle" },
        { label: "Family", desc: "3-5 star hotels, Multi-occupancy rooms, Private or semi-private SUVs or buses ensure comfort, better amenities than Economy package" },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Luxury & Exclusive Experience",
      popular: false,
      subTypes: [
        { label: "Solo", desc: "5-star hotel often Haram-view, Single rooms with Premium amenities, Private air-conditioned transport" },
        { label: "Couple", desc: "5-star hotel often Haram-view, Private double room with premium amenities, Luxurious and comfortable stays, Private cars or SUVs" },
        { label: "Family", desc: "5-star hotel often Haram-view, Family suite rooms with premium amenities. Private or VIP air-conditioned cars or SUVs" },
      ],
    },
  ];

  // ✅ Helper function to get the correct state and setter for each tier
  const getTabState = (tierId: string) => {
    switch (tierId) {
      case "economy":
        return { activeTab: economyActiveTab, setActiveTab: setEconomyActiveTab };
      case "standard":
        return { activeTab: standardActiveTab, setActiveTab: setStandardActiveTab };
      case "premium":
        return { activeTab: premiumActiveTab, setActiveTab: setPremiumActiveTab };
      default:
        return { activeTab: economyActiveTab, setActiveTab: setEconomyActiveTab };
    }
  };

  const handleSeePackages = (tierId: string, groupLabel: string) => {
    setSelectedTier(tierId);
    setSelectedGroup(groupLabel.toLowerCase());
    router.push(`/umrah-packages?tier=${tierId}&type=${groupLabel.toLowerCase()}`);
  };

  return (
    <section className="p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#444]">
        Choose Your Umrah Journey
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Whether you&apos;re traveling solo, with couple, family, or in a group, we
        have packages designed to make your Umrah easy and worry-free.
      </p>

      <div className="flex justify-center gap-6 flex-wrap py-4 my-16">
        {tiers.map((tier) => {
          // ✅ Get the active tab state for this specific tier
          const { activeTab, setActiveTab } = getTabState(tier.id);

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

                {/* Tab Box */}
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

                {/* Active Content */}
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