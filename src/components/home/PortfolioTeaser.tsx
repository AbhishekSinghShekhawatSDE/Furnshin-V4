"use client";

/**
 * @file PortfolioTeaser.tsx
 * @description A 6-image masonry or grid snippet of portfolio projects, with simple JS filtering.
 * Props: None
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/data/images";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import TiltCard from "@/components/motion/TiltCard";

const getPortfolioImage = (id: number) => {
    const portfolioImages = [
        IMAGES.living.main,
        IMAGES.office.main,
        IMAGES.kitchen.main,
        IMAGES.glass.partition,
        IMAGES.portfolio.c1,
        IMAGES.bedroom.wardrobe,
        IMAGES.metal.gate,
        IMAGES.aluminum.window,
        IMAGES.portfolio.c2,
    ];
    return portfolioImages[(id - 1) % portfolioImages.length];
};

const categories = ["All", "Residential", "Commercial", "Glass Works", "Custom Furniture"];

const projects = [
    { id: 1, title: "Modern Villa Interior", category: "Residential" },
    { id: 2, title: "Corporate Office Glass Partitions", category: "Commercial" },
    { id: 3, title: "Luxury Kitchen Setup", category: "Custom Furniture" },
    { id: 4, title: "Frameless Glass Balcony", category: "Glass Works" },
    { id: 5, title: "Boutique Display Units", category: "Commercial" },
    { id: 6, title: "Minimalist Wardrobes", category: "Residential" },
];

export default function PortfolioTeaser() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="text-center mb-12">
                    <Reveal direction="up" delay={0}>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-4">
                            Our <i className="text-primary not-italic italic">Archives</i>
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <p className="text-grey-800 max-w-xl mx-auto text-lg mb-8">
                            Explore a selection of our recently completed projects across Jaipur.
                        </p>
                    </Reveal>

                    <Reveal direction="up" delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === cat
                                        ? "bg-foreground text-white"
                                        : "bg-grey-50 text-grey-800 hover:bg-grey-200 border border-transparent hover:border-grey-300"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>

                <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-display">
                    {filteredProjects.slice(0, 6).map((project) => (
                        <StaggerItem key={project.id}>
                            <TiltCard maxTilt={5}>
                                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-grey-100 border border-grey-200">
                                    <div className="aspect-[4/3] bg-grey-100 relative overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={getPortfolioImage(project.id)}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary z-10">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white text-xl font-medium">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="text-center mt-16">
                    <Reveal direction="up" delay={0.3}>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground border border-grey-200 rounded-[100px] font-semibold hover:border-foreground transition-all shadow-sm hover:shadow-md"
                        >
                            View All Projects
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
