import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedTransformation from "@/components/home/FeaturedTransformation";
import ProcessSteps from "@/components/home/ProcessSteps";
import ManufacturingEdge from "@/components/home/ManufacturingEdge";
import Testimonials from "@/components/home/Testimonials";
import PortfolioTeaser from "@/components/home/PortfolioTeaser";
import AboutSnippet from "@/components/home/AboutSnippet";
import LeadCaptureCta from "@/components/home/LeadCaptureCta";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Furnshin | Custom Furniture & Interiors in Jaipur',
    description: 'Factory-direct custom furniture, modular kitchens, glass works, and aluminum solutions in Jaipur. 14+ years, 500+ projects. Book a free consultation.',
    keywords: ['custom furniture jaipur', 'modular kitchen jaipur', 'interior designer jaipur', 'glass partition jaipur', 'aluminum windows jaipur', 'furnshin'],
    alternates: {
      canonical: 'https://www.furnshin.com',
    },
    openGraph: {
      title: 'Furnshin | Custom Furniture & Interiors in Jaipur',
      description: 'Factory-direct quality. No middlemen. 14+ years of craftsmanship across 500+ Jaipur projects.',
      url: 'https://www.furnshin.com',
      siteName: 'Furnshin',
      images: [{ url: 'https://www.furnshin.com/og/home.jpg', width: 1200, height: 630, alt: 'Furnshin custom interiors Jaipur' }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', site: '@furnshin', creator: '@furnshin', title: 'Furnshin | Custom Furniture Jaipur', description: 'Factory-direct custom furniture and interiors in Jaipur.' },
  }
}

import { organizationSchema } from "@/lib/schema";
import MarqueeStrip from "@/components/motion/MarqueeStrip";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <TrustBar />
      <MarqueeStrip
        items={["Custom Furniture", "Modular Kitchens", "Glass Works", "Aluminum Solutions", "CNC Metal Gates", "Office Interiors"]}
        speed={30}
      />
      <ServicesGrid />
      <FeaturedTransformation />
      <MarqueeStrip
        items={["14+ Years of Trust", "500+ Projects Delivered", "Factory-Direct Pricing", "Pan-Jaipur Service", "No Middlemen"]}
        direction="right"
        speed={40}
      />
      <ProcessSteps />
      <ManufacturingEdge />
      <Testimonials />
      <PortfolioTeaser />
      <AboutSnippet />
      <LeadCaptureCta />
    </>
  );
}

