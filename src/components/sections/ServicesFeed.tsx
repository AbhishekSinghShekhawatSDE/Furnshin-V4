import ServiceCard from "@/components/ui/ServiceCard";
import OverlordReveal from "@/components/ui/OverlordReveal";
import { IMAGES } from "@/data/images";

const services = [
    {
        title: "Crimson Woodwork",
        description: "Factory-direct custom furniture engineered for aesthetic dominance. Mahogany, Teak, and Walnut masterpieces.",
        image: IMAGES.kitchen.main,
    },
    {
        title: "Architectural Glass",
        description: "Holographic transparency. Toughened glass solutions, partitions, and artistic mirrors.",
        image: IMAGES.glass.partition,
    },
    {
        title: "Obsidian Metal",
        description: "Laser-cut iron aesthetics and premium aluminium fabrication for the modern fortress.",
        image: IMAGES.metal.gate,
    },
    {
        title: "The Great Civil",
        description: "Complete interior metamorphosis. Turnkey solutions from blueprint to reality.",
        image: IMAGES.portfolio.c1,
    },
];

export default function ServicesFeed() {
    return (
        <section className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <OverlordReveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl md:text-7xl font-display mb-6">
                                Our Core <span className="text-primary italic">Disciplines</span>
                            </h2>
                            <p className="text-xl text-foreground/60 leading-relaxed">
                                We bridge the gap between imagination and manufacturing. Every piece is a
                                strategic asset for your space.
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-8xl font-display text-white/5 absolute -top-10 right-0 pointer-events-none">
                                CATEGORIES
                            </span>
                            <button className="text-accent-neon font-bold tracking-widest uppercase text-sm border-b border-accent-neon/30 pb-2 hover:border-accent-neon transition-colors">
                                Explore All Archives
                            </button>
                        </div>
                    </div>
                </OverlordReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <ServiceCard key={service.title} {...service} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
