"use client";

import { useState, useEffect } from 'react';

const UmrahHeroSections = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FCF6EC] via-[#FCF6EC]/90 to-[#3F1F0F] text-primary">
      {/* Hero Section with Niyyah */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCF6EC]/30 via-transparent to-[#FCF6EC]/10 z-10" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#FCF6EC] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 z-30">
          <div
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30 z-10">
              <span className="text-primary/80 text-sm font-semibold tracking-wider">SAFAR-E-HARAM</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground max-w-4xl leading-tight mb-6 tracking-tight">
              Every Umrah begins with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0C3A8] to-primary">
                Niyyah
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mt-6 max-w-2xl leading-relaxed font-light italic">
              Answer the call of Allah and begin a journey that purifies your heart and soul. Every step brings you closer to His House, where prayers are heard, sins are forgiven, and faith is renewed.
            </p>

            <div className="mt-10 flex gap-4">
              <div className="h-1 w-16 bg-gradient-to-r from-foreground to-transparent rounded-full" />
              <div className="h-1 w-8 bg-gradient-to-r from-foreground to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FCF6EC] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto z-20">
          <div className="flex-1 space-y-6">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30 z-10">
              <span className="text-primary/80 text-sm font-semibold tracking-wider">THE PATH AWAITS YOU</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Step Into the Journey{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#F0C3A8] to-primary">
                Allah Has Chosen for You
              </span>
            </h2>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light italic max-w-xl">
              Let us guide you with care and ikhlaas, because this journey is more than travel — it&apos;s a path to closeness with Allah.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-4 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  <span className="text-foreground/80 text-sm">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-4 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  <span className="text-foreground/80 text-sm">Comfortable Travel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-4 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  <span className="text-foreground/80 text-sm">Spiritual Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCF6EC]/20 to-primary/10 rounded-3xl backdrop-blur-sm border border-[#FCF6EC]/20" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mecca Sacred Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCF6EC] via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FCF6EC]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto z-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#FCF6EC]/20 backdrop-blur-sm rounded-full border border-[#FCF6EC]/30 mb-6">
              <span className="text-accent/80 text-sm font-semibold tracking-wider">THE BLESSED LAND</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-4xl text-[#FCF6EC]">The Heart of Faith,</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FCF6EC] via-[#C9723C] to-primary">
                The House of Allah
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#FCF6EC]/80 leading-relaxed font-light italic mb-10 max-w-2xl">
              Here, faith is renewed, forgiveness is granted, and souls draw closer to Allah.
            </p>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#FCF6EC] to-[#C9723C] text-primary rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-[#FCF6EC]----------------/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Packages
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9723C] to-[#FCF6EC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UmrahHeroSections;
// 'use client';

// import { useState, useEffect } from 'react';

// const UmrahHeroSections = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-primary via-primary/90 to-[#3F1F0F] text-[#FCF6EC]">
//       {/* Hero Section with Niyyah */}
//       <section className="relative w-full h-screen overflow-hidden">
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 z-10" />

//         {/* Animated Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FCF6EC] rounded-full blur-3xl animate-pulse delay-1000" />
//         </div>

//         {/* Text Container */}
//         <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 z-30">
//           <div
//           >
//             <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 z-10">
//               <span className="text-[#FCF6EC]/80 text-sm font-semibold tracking-wider">SACRED JOURNEY</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FCF6EC] max-w-4xl leading-tight mb-6 tracking-tight">
//               Every Umrah begins with{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FCF6EC]">
//                 Niyyah
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-[#FCF6EC]/80 mt-6 max-w-2xl leading-relaxed font-light italic">
//               Answer the call of Allah and begin a journey that purifies your heart and soul. Every step brings you closer to His House, where prayers are heard, sins are forgiven, and faith is renewed.
//             </p>

//             <div className="mt-10 flex gap-4">
//               <div className="h-1 w-16 bg-gradient-to-r from-[#4A4A4A] to-transparent rounded-full" />
//               <div className="h-1 w-8 bg-gradient-to-r from-[#4A4A4A] to-transparent rounded-full" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Journey Section */}
//       <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20">
//         <div className="absolute inset-0 overflow-hidden opacity-5">
//           <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
//           <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FCF6EC] rounded-full blur-3xl" />
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto z-20">
//           <div className="flex-1 space-y-6">
//             <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-4">
//               <span className="text-[#FCF6EC]/80 text-sm font-semibold tracking-wider">YOUR JOURNEY AWAITS</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FCF6EC] leading-tight">
//               Step Into the Journey{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FCF6EC]">
//                 Allah Has Chosen for You
//               </span>
//             </h2>

//             <p className="text-lg md:text-xl text-[#FCF6EC]/80 leading-relaxed font-light italic max-w-xl">
//               Let us guide you with care and ikhlaas, because this journey is more than travel — it's a path to closeness with Allah.
//             </p>

//             <div className="flex gap-4 pt-4">
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-primary rounded-full" />
//                   <span className="text-[#FCF6EC]/80 text-sm">Expert Guidance</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-[#FCF6EC] rounded-full" />
//                   <span className="text-[#FCF6EC]/80 text-sm">Comfortable Travel</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-primary rounded-full" />
//                   <span className="text-[#FCF6EC]/80 text-sm">Spiritual Support</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex-1 relative">
//             <div className="relative w-full aspect-square max-w-md mx-auto">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#FCF6EC]/10 rounded-3xl backdrop-blur-sm border border-primary/20" />
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
//               <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FCF6EC]/30 rounded-full blur-2xl" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mecca Sacred Section */}
//       <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-t from-[#3F1F0F] via-transparent to-transparent" />
//           <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//           <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FCF6EC]/10 rounded-full blur-3xl" />
//         </div>

//         <div className="w-full max-w-7xl mx-auto z-20">
//           <div className="max-w-3xl">
//             <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-6">
//               <span className="text-[#FCF6EC]/80 text-sm font-semibold tracking-wider">THE SACRED DESTINATION</span>
//             </div>

//             <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
//               <span className="text-[#FCF6EC]">The Heart of Faith,</span>
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#C9723C] to-[#FCF6EC]">
//                 The House of Allah
//               </span>
//             </h2>

//             <p className="text-xl md:text-2xl text-[#FCF6EC]/80 leading-relaxed font-light italic mb-10 max-w-2xl">
//               Here, faith is renewed, forgiveness is granted, and souls draw closer to Allah.
//             </p>

//             <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-[#C9723C] text-[#FCF6EC] rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden">
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Packages
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-[#C9723C] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UmrahHeroSections;