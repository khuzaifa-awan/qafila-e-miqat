// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";

// const poppins = Poppins({
//   weight: ['300', '400', '500', '600', '700'],
//   variable: "--font-poppins",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Qafila-e-Miqat Tours and Travel",
//   description: "Make Your Umrah Journey Easy & Hassle-Free with Qafila-e-Miqat Travel and Tours",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${poppins.variable} antialiased`}
//         suppressHydrationWarning={true}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Qafila-e-Miqat Travel & Tours | Best Umrah Packages 2025 from Pakistan",
  description:
    "Book the best and most affordable Umrah packages 2025 from Pakistan with Qafila-e-Miqat Travel. We offer complete Umrah services including visa, flights, hotel booking, and transport. Choose from group, private, family, or VIP Umrah packages available from Karachi, Lahore, Islamabad, Multan, Sialkot, Faisalabad, and Attock.",
   icons: {
    apple: "/apple-touch-icon.ico"
}, 
  keywords: [
    "Qafila-e-Miqat",
    "Qafila e Miqat",
    "Qafila Miqat",
    "QafilaeMiqat",
    "Qafila",
    "qafilaemiqat",
    "cheap umrah packages",
    "best umrah packages Pakistan",
    "umrah packages 2025 Pakistan",
    "umrah packages Karachi",
    "umrah packages Lahore",
    "umrah packages Islamabad",
    "umrah packages Multan",
    "umrah packages Sialkot",
    "umrah packages Faisalabad",
    "umrah packages Attock",
    "VIP umrah packages Pakistan",
    "VIP umrah packages Lahore",
    "group umrah packages Pakistan",
    "private umrah packages Pakistan",
    "umrah package for family 2025",
    "ramadan umrah package 2025",
    "how to book umrah from Pakistan"
  ],
  openGraph: {
    title: "Qafila-e-Miqat Travel & Tours | Trusted Umrah Packages 2025",
    description:
      "Plan your Umrah journey with ease. Explore affordable, group, and VIP Umrah packages 2025 from Pakistan. Complete visa, flight, hotel, and transport services with Qafila-e-Miqat.",
    url: "https://qafilaemiqat.com",
    siteName: "Qafila-e-Miqat Travel & Tours",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Umrah Packages 2025 from Pakistan - Qafila-e-Miqat",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Umrah Packages 2025 from Pakistan | Qafila-e-Miqat",
    description:
      "Qafila-e-Miqat offers affordable Umrah packages 2025 from Karachi, Lahore, Islamabad, Multan, Sialkot, Faisalabad, and Attock. Visa, flights, hotel & transport included.",
    images: ["/images/og-banner.jpg"],
  },
  alternates: {
    canonical: "https://qafilaemiqat.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>

    
  );
}

