import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "JEBSEN TRAVEL & Tours | Malaysia's Largest Cruise Consolidator Since 1979",
  description: "With over 40 years of cruise travel experience, JEBSEN TRAVEL has become the Largest Cruise Consolidator in Asia with access to over 40 major international cruise lines.",
  keywords: "jebsen travel, jebsen tours, cruise, luxury cruise, cruise agency, cruise booking, travel agency, malaysia cruise, asia cruise, cruise vacation, business travel"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
