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
  title: "Jebsen Cruise Travel | Malaysia's Premier Cruise Specialist Since 1979",
  description: "Representing over 40 international cruise lines, Jebsen Cruise Travel is Malaysia's largest cruise consolidator with 40+ years of excellence. Book your dream cruise today!",
  keywords: "cruise, luxury cruise, cruise agency, jebsen cruise travel, cruise booking, travel agency, malaysia cruise, asia cruise, cruise vacation"
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
