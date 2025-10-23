// "use client";

// import { useState, useEffect } from "react";
// export default function Home() {
//   // State types are inferred automatically, but we can be explicit
//   const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState<number>(0);
//     const [isVisible, setIsVisible] = useState<boolean>(false);

// const announcements: string[] = [
//     "✨ October Packages Are Live 🕋",
//     "⏳ Limited seats for October Umrah. Reserve today!",
//     "🎉 Special Group Discounts Available",
//     "🌟 VIP Services Available for Premium Experience"
//   ];

//   useEffect(() => {
 
//     setIsVisible(true);

//     const interval = setInterval(() => {
//       setCurrentAnnouncementIndex(
//         (prevIndex) => (prevIndex + 1) % announcements.length
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [announcements.length]);

//       <div className="announcement-banner w-full text-center py-3 overflow-hidden relative">
//         <div
//           key={currentAnnouncementIndex}
//           className="animate-slideIn text-sm font-medium"
//         >
//           {announcements[currentAnnouncementIndex]}
//         </div>
//       </div>

// }

"use client";

import { useState, useEffect } from "react";

interface AnnouncementBarProps {
  announcements?: string[];
  autoRotateInterval?: number;
  className?: string;
}

export default function AnnouncementBar({ 
  announcements = [
    "✨ November Packages Are Live 🕋",
    "✨ December Packages Are Live 🕋",
    "⏳ Limited seats for November Umrah. Reserve today!",
    "🎉 Special Group Discounts Available",
    "🌟 VIP Services Available for Premium Experience"
  ],
  autoRotateInterval = 5000,
  className = ""
}: AnnouncementBarProps) {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState<number>(0);

  useEffect(() => {
    if (announcements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentAnnouncementIndex(
        (prevIndex) => (prevIndex + 1) % announcements.length
      );
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [announcements.length, autoRotateInterval]);

  return (
    <div className={`announcement-banner w-full text-center py-3 overflow-hidden relative ${className}`}>
      <div
        key={currentAnnouncementIndex}
        className="animate-slideIn text-sm font-medium"
      >
        {announcements[currentAnnouncementIndex]}
      </div>
    </div>
  );
}