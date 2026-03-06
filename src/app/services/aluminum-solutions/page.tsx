import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Aluminum Windows & Sliding Doors Jaipur | Furnshin',
        description: 'Heavy-gauge aluminum window systems, slimline sliding doors, and commercial facades. Weather-resistant solutions for Jaipur homes.',
        alternates: { canonical: 'https://www.furnshin.com/services/aluminum-solutions' },
    }
}

export default function AluminumSolutions() {
    return (
        <ServicePageTemplate
            title="Aluminum Solutions"
            subheading="High-grade aluminum windows, sliding doors, slimline partitions, and facades."
            problemText="Traditional wood warps, and cheap local UPVC/Aluminum sections leak, rattle, and degrade under the harsh Rajasthan sun."
            solutionText="We fabricate premium, heavy-gauge aluminum profiles that offer superior weather resistance, thermal insulation, and ultra-smooth operation for decades."
            materials={[
                "Jindal & Hindalco Heavy Gauge Profiles",
                "Thermal Break Aluminum Systems",
                "Powder Coated & Anodized Finishes (10+ Year Warranty)",
                "EPDM Rubber Gaskets for Weather Sealing"
            ]}
            gallery={[
                { id: "a1", title: "Floor-to-Ceiling Sliding Doors", category: "Residential" },
                { id: "a2", title: "Slimline Office Partitions", category: "Commercial" },
                { id: "a3", title: "Casement Windows", category: "Residential" },
                { id: "a4", title: "Commercial Exterior Facades", category: "Commercial" }
            ]}
            faqs={[
                { q: "Are aluminum windows energy efficient?", a: "Yes, our thermal break aluminum systems with double-glazed glass offer exceptional thermal insulation, significantly reducing your air conditioning costs." },
                { q: "Do the color coatings fade over time?", a: "We use industrial-grade powder coating and anodizing processes that are highly UV resistant. They will not fade, chalk, or peel under normal conditions." },
                { q: "Can you create custom profile colors?", a: "Absolutely. We offer a wide range of RAL color powder coatings to perfectly match your exterior or interior design palette." }
            ]}
        />
    )
}
