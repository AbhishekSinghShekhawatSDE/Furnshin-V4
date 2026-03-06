import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Premium Glass Works & Partitions Jaipur | Furnshin',
        description: 'Toughened glass partitions, shower enclosures, and architectural glass solutions in Jaipur. Factory-direct precision and installation.',
        alternates: { canonical: 'https://www.furnshin.com/services/glass-works' },
    }
}

export default function GlassWorks() {
    return (
        <ServicePageTemplate
            title="Glass Works"
            subheading="Premium architectural glass partitions, frameless railings, and custom installations."
            problemText="Generic glass vendors struggle with large-scale architectural tolerances and proper load-bearing safety."
            solutionText="We engineer every glass installation in-house, ensuring millimeter-perfect cutting, toughening, and structural integrity for both residential and commercial spaces."
            materials={[
                "10mm - 12mm Toughened Safety Glass",
                "Saint-Gobain & Modiguard Extra Clear Glass",
                "Dorma Architectural Hardware & Plotters",
                "Acoustic Laminated Glass for Office Partitions"
            ]}
            gallery={[
                { id: "g1", title: "Frameless Balcony Railing", category: "Residential" },
                { id: "g2", title: "Acoustic Office Partitions", category: "Commercial" },
                { id: "g3", title: "Minimalist Shower Enclosure", category: "Residential" },
                { id: "g4", title: "Double-Glazed Facade", category: "Commercial" }
            ]}
            faqs={[
                { q: "Is toughened glass safe for homes with children?", a: "Absolutely. Toughened (tempered) glass is up to 5 times stronger than standard glass. Even if broken, it crumbles into small, blunt pieces rather than sharp shards." },
                { q: "How long does a custom glass partition take to install?", a: "Once site measurements and CNC cutting are complete at our factory, the actual site installation typically takes 1-2 days with zero wet work or mess." },
                { q: "Do you provide acoustic/soundproof glass for offices in Jaipur?", a: "Yes, we specialize in double-glazed and laminated acoustic glass partitions specifically designed to reduce noise transmission in corporate environments." }
            ]}
        />
    )
}
