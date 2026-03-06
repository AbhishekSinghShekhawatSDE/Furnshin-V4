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

import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0c0b' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.furnshin.com'),
  title: "Furnshin | Custom Furniture & Interiors in Jaipur",
  description: "Factory-direct custom furniture & interiors in Jaipur. Premium custom furniture, glass works, aluminum solutions, and interior manufacturing.",
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon_16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon_64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon_128x128.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon_512x512.png', color: '#E8553D' },
    ],
  },
  openGraph: {
    title: "Furnshin | Custom Furniture & Interiors in Jaipur",
    description: "Factory-direct custom furniture & interiors in Jaipur.",
    url: "https://www.furnshin.com",
    siteName: "Furnshin",
    images: [{ url: "https://www.furnshin.com/og/home.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@furnshin",
  }
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
