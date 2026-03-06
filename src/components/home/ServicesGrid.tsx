"use client";

/**
 * @file ServicesGrid.tsx
 * @description 4 core service cards with subtle hover animations linking to service pages.
 * Props: None
 */

import Link from "next/link";
import { Hammer, Sparkles, Building2, ShieldHalf } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import TiltCard from "@/components/motion/TiltCard";

export default function ServicesGrid() {
    const services = [
        {
            title: "Glass Works",
            desc: "Premium architectural glass partitions, railings, and custom installations.",
            icon: Sparkles,
            href: "/services/glass-works"
        },
        {
            title: "Custom Furniture",
            desc: "Bespoke cabinetry, modular kitchens, and residential furniture.",
            icon: Hammer,
            href: "/services/custom-furniture"
        },
        {
            title: "Aluminum Solutions",
            desc: "High-grade aluminum windows, sliding doors, and commercial facades.",
            icon: Building2,
            href: "/services/aluminum-solutions"
        },
        {
            title: "Iron & Metal Works",
            desc: "CNC cut metal panels, industrial-grade staircases, and heavy-duty gates.",
            icon: ShieldHalf,
            href: "/services/iron-metal-works"
        }
    ];

    return (
        <section className="bg-grey-50 py-24">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="mb-16 md:flex md:items-end justify-between gap-8">
                    <div>
                        <Reveal direction="up" delay={0}>
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-4">
                                Our Core <i className="text-primary not-italic italic">Expertise</i>
                            </h2>
                        </Reveal>
                        <Reveal direction="up" delay={0.1}>
                            <p className="text-grey-800 max-w-xl text-lg">
                                Factory-direct means no middleman. You get better quality at better value across all interior domains.
                            </p>
                        </Reveal>
                    </div>
                    <Link href="/services" className="hidden md:inline-flex items-center text-sm font-semibold hover:text-primary transition-colors mt-6">
                        View All Services &rarr;
                    </Link>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <StaggerItem key={service.title} className="h-full">
                            <TiltCard className="h-full">
                                <Link
                                    href={service.href}
                                    className="group bg-white p-8 rounded-2xl border border-grey-200 hover:border-primary transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full"
                                >
                                    <div className="w-12 h-12 rounded-full bg-grey-50 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                                        <service.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-grey-800 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>

                                    <div className="mt-auto pt-4 border-t border-grey-100 font-medium text-sm text-foreground group-hover:text-primary flex items-center justify-between transition-colors">
                                        <span>Explore Details</span>
                                        <span>&rarr;</span>
                                    </div>
                                </Link>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
