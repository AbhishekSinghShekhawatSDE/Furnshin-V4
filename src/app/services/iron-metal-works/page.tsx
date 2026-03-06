import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Iron & Metal Fabrication Jaipur | Modern Gates & Stairs',
        description: 'CNC laser-cut main gates, designer metal staircases, and heavy-duty fabrication in Jaipur. Anti-corrosion treated and PU finished.',
        alternates: { canonical: 'https://www.furnshin.com/services/iron-metal-works' },
    }
}

export default function IronMetalWorks() {
    return (
        <ServicePageTemplate
            title="Iron & Metal Works"
            subheading="CNC cut metal panels, industrial-grade staircases, heavy-duty security gates, and MS fabrication."
            problemText="Inconsistent welding and poor anti-rust treatments result in structural weakness and premature corrosion of exterior metalworks."
            solutionText="We utilize precision laser cutting, MIG/TIG welding, and industrial-grade epoxy primers to deliver heavy-duty metal structures that are architecturally striking and structurally sound."
            materials={[
                "High-Grade Mild Steel (MS) & Stainless Steel (SS 304/316)",
                "Precision Laser & Plasma Cut Sheet Metal",
                "Anti-Corrosion Red Oxide & Zinc Primers",
                "PU & Automotive Grade Paint Finishes"
            ]}
            gallery={[
                { id: "m1", title: "CNC Laser Cut Main Gate", category: "Residential" },
                { id: "m2", title: "Floating Metal Staircase", category: "Residential" },
                { id: "m3", title: "Security Grill Fabrication", category: "Commercial" },
                { id: "m4", title: "Custom Metal Planters", category: "Residential" }
            ]}
            faqs={[
                { q: "How do you protect exterior iron gates from rusting?", a: "We employ a rigorous multi-step process: thorough surface cleaning, application of red oxide or zinc-rich anti-corrosion primer, followed by high-quality automotive-grade PU paints." },
                { q: "Can you cut custom patterns into metal plates?", a: "Yes. Our factory uses advanced CNC laser and plasma cutters to create intricate, custom patterns for gates, privacy screens, and facade panels." },
                { q: "Do you design load-bearing staircases?", a: "Yes, our engineering team designs and fabricates heavy-duty, structurally certified metal staircases, including floating and spiral designs." }
            ]}
        />
    )
}
