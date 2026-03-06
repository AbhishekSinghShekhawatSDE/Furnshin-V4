import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer, Sparkles, Building2, ShieldHalf } from "lucide-react";
import LeadCaptureCta from "@/components/home/LeadCaptureCta";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import SplitText from "@/components/motion/SplitText";
import TiltCard from "@/components/motion/TiltCard";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Furnshin | Premium Custom Interior Services in Jaipur',
        description: 'We offer factory-direct custom furniture, architectural glass, aluminum solutions, and structural metalworks in Jaipur.',
        alternates: { canonical: 'https://www.furnshin.com/services' },
        openGraph: {
            title: 'Furnshin | Premium Custom Interior Services in Jaipur',
            description: 'From concept to installation — one partner, end to end.',
            images: [{ url: '/og/services.jpg', width: 1200, height: 630 }],
            url: 'https://www.furnshin.com/services',
            siteName: 'Furnshin',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@furnshin',
            creator: '@furnshin',
        },
    }
}

export default function ServicesIndex() {
    const services = [
        {
            title: "Glass Works",
            slug: "glass-works",
            desc: "Premium architectural glass partitions, frameless railings, shower enclosures, and custom mirrors.",
            icon: Sparkles,
            color: "bg-blue-50"
        },
        {
            title: "Custom Furniture",
            slug: "custom-furniture",
            desc: "Bespoke cabinetry, modular kitchens, wardrobes, and high-end residential furniture.",
            icon: Hammer,
            color: "bg-amber-50"
        },
        {
            title: "Aluminum Solutions",
            slug: "aluminum-solutions",
            desc: "High-grade aluminum windows, sliding doors, slimline partitions, and commercial facades.",
            icon: Building2,
            color: "bg-grey-100"
        },
        {
            title: "Iron & Metal Works",
            slug: "iron-metal-works",
            desc: "CNC cut metal panels, industrial-grade staircases, heavy-duty security gates, and MS fabrication.",
            icon: ShieldHalf,
            color: "bg-red-50"
        }
    ];

    return (
        <>
            <section className="bg-grey-50 pt-32 pb-20 border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex justify-center mb-4">
                        <Reveal direction="down">
                            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
                        </Reveal>
                    </div>
                    <div className="text-center">
                        <SplitText
                            text="Our Capabilities"
                            className="text-5xl md:text-6xl font-display font-medium tracking-tight mb-6"
                            delay={0.2}
                        />
                        <Reveal direction="up" delay={0.8}>
                            <p className="text-lg md:text-xl text-grey-800 max-w-2xl mx-auto">
                                A comprehensive suite of factory-direct interior manufacturing and execution services. Designed and built in Jaipur.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <StaggerItem key={service.slug}>
                                <TiltCard>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="group h-full flex flex-col sm:flex-row gap-8 bg-white p-8 rounded-3xl border border-grey-200 hover:border-primary transition-all duration-300 hover:shadow-xl"
                                    >
                                        <div className={`w-20 h-20 shrink-0 ${service.color} rounded-2xl flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors`}>
                                            <service.icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-grow flex flex-col">
                                            <h2 className="text-3xl font-display font-semibold mb-3">{service.title}</h2>
                                            <p className="text-grey-800 leading-relaxed mb-6 flex-grow">
                                                {service.desc}
                                            </p>
                                            <div className="mt-auto font-semibold text-primary flex items-center gap-2">
                                                View Specifications <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </TiltCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            <LeadCaptureCta />
        </>
    );
}
