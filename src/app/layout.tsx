import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import GlobalConversion from '@/components/layout/GlobalConversion';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

import { localBusinessSchema } from "@/lib/schema";
import ScrollToTop from "@/components/ui/ScrollToTop";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.furnshin.com'),
  title: "Furnshin | Factory-Direct Custom Furniture & Interiors in Jaipur",
  description: "Trusted space transformation partner. Designing spaces that speak.",
};

import LoadingScreen from "@/components/motion/LoadingScreen";
import CustomCursor from "@/components/motion/CustomCursor";
import PageTransition from "@/components/motion/PageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth lg:cursor-none`}>
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-foreground font-body antialiased lg:cursor-none">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <PageTransition>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-primary focus:text-white focus:p-4"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-grow focus:outline-none">
              {children}
            </main>
            <ScrollToTop />
            <Footer />
            <GlobalConversion />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
