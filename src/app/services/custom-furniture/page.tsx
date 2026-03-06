import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Custom Furniture & Modular Kitchens Jaipur | Furnshin',
        description: 'Bespoke residential furniture and high-end modular kitchens manufactured in our Jaipur factory. 10-year warranty on core materials.',
        alternates: { canonical: 'https://www.furnshin.com/services/custom-furniture' },
    }
}

export default function CustomFurniture() {
    return (
        <ServicePageTemplate
            title="Custom Furniture"
            subheading="Bespoke cabinetry, modular kitchens, and residential furniture built to last."
            problemText="Ready-made furniture rarely fits perfectly, and local carpenters often lack the precision machinery and premium finishes required for luxury interiors."
            solutionText="Our factory utilizes advanced CNC routers and edge-banding technology to deliver perfectly fitted modular and custom furniture with flawless, long-lasting finishes."
            materials={[
                "BWP/BWR Grade Marine Plywood",
                "Hettich & Blum Soft-Close Hardware",
                "High-Gloss Acrylic & Anti-Scratch Laminates",
                "PU Paints & Premium Veneer Polishing"
            ]}
            gallery={[
                { id: "f1", title: "L-Shaped Modular Kitchen", category: "Residential" },
                { id: "f2", title: "Floor-to-Ceiling Wardrobes", category: "Residential" },
                { id: "f3", title: "Bespoke TV Unit Unit", category: "Residential" },
                { id: "f4", title: "Executive Office Desks", category: "Commercial" }
            ]}
            faqs={[
                { q: "What is the warranty on your modular furniture?", a: "We provide a comprehensive up to 10-year warranty on core materials and lifelong service support for Hettich and Blum hardware." },
                { q: "Can I choose my own laminates and finishes?", a: "Yes. During the design consultation, you will have access to hundreds of premium finishes including acrylics, veneers, and high-pressure laminates." },
                { q: "Do you manufacture in-house or outsource?", a: "100% in-house. We run our own manufacturing unit in Jaipur to maintain absolute control over quality, pricing, and timelines." }
            ]}
        />
    )
}
