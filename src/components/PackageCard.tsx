// "use client";

// import { Package, renderIcon } from "@/data/packages";
// import Image from "next/image";


// interface PackageCardProps {
//   pkg: Package;
// }

// export default function PackageCard({ pkg }: PackageCardProps) {
//   return (
//     <div className="relative bg-[#FCF6EC] rounded-3xl shadow-md overflow-hidden max-w-sm w-full">
//       {/* Top banner */}
//       <div className="relative">
//         <img
//           src="/images/Pak.svg" 
//           alt={pkg.name}
//           className="w-full h-32 object-cover"
//         />
//         <span className="absolute top-2 right-2 bg-[#AD5628] text-white text-xs font-semibold px-3 py-1 rounded-lg">
//           5% Off until September 4
//         </span>
//       </div>

//       <div className="p-4">
//         <h3 className="text-lg font-bold text-[#4A4A4A]">
//           {pkg.name} - {pkg.duration}
//         </h3>
//         <p className="text-sm text-gray-500 mb-2">
//           Routes: {pkg.routes.join(" → ")}
//         </p>
//         <p className="font-semibold text-[#4A4A4A] mb-4">{pkg.hotel}</p>

//         {/* Perks */}
//         <div className="grid grid-cols-2 gap-2 mb-4">
//           {pkg.perks.map((perk, i) => (
//             <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
//               {renderIcon(perk.icon, { className: "w-4 h-4 text-[#AD5628]" })}
//               {perk.text}
//             </div>
//           ))}
//         </div>

//         {/* Price section */}
//         <div className="flex justify-between items-center mb-4">
//           <span className="line-through text-gray-400 text-sm">PKR {pkg.price}</span>
//           <span className="text-lg font-bold text-[#AD5628]">
//             PKR {pkg.discountedPrice}
//           </span>
//         </div>

//         <p className="text-xs text-[#AD5628] font-semibold mb-2">
//           Only {pkg.seatsLeft} seats left
//         </p>

//         <button className="w-full rounded-lg bg-[#AD5628] text-white py-2 font-semibold">
//           BOOK NOW
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { Package, renderIcon } from "@/data/packages";
import Image from "next/image";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="relative bg-[#FCF6EC] rounded-3xl shadow-md overflow-hidden max-w-sm w-full">
      {/* Top image with diagonal cut */}
      <div className="relative">
        <div
          className="relative h-48 overflow-hidden"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 60%)",
            borderRadius: "24px 14px 24px ",
          }}
        >
          <Image
            src="/images/packageCard/kaaba-pc.svg"
            alt={pkg.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Discount banner */}
        <div className="absolute -top-2 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            5% Off until September 4
        </div>

      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="absolute top-3 left-4  text-lg font-bold text-accent">
          {pkg.name} – {pkg.duration}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          Routes: {pkg.routes.join(" → ")}
        </p>
        <p className="font-semibold text-[#4A4A4A] mb-4">{pkg.hotel}</p>

        {/* Perks as pill badges */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {pkg.perks.map((perk, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#F7E9D9] px-2 py-1 rounded-full text-xs text-gray-700"
            >
              {renderIcon(perk.icon, { className: "w-4 h-4 text-primary" })}
              <span>{perk.text}</span>
            </div>
          ))}
        </div>

        {/* Pricing & seats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-400 text-sm">
              PKR {pkg.price}
            </span>
            <span className="text-lg font-bold text-primary">
              PKR {pkg.discountedPrice}
            </span>
          </div>
          <div className="bg-[#F7E9D9] text-[#AD5628] text-center text-sm font-semibold px-6 py-1 rounded-full">
            Only {pkg.seatsLeft} <br />seats left
          </div>
        </div>

        {/* Button */}
        <button className="holographic-btn relative overflow-hidden w-full rounded-2xl bg-primary !text-accent py-3 font-semibold text-base">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
