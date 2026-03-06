"use client";

/**
 * @file PortfolioGrid.tsx
 * @description Interactive masonry/editorial grid with smooth client-side filtering.
 * Props: None
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/data/images";

interface Project {
    id: string | number;
    title: string;
    categories: string[];
    location: string;
    image_url?: string;
}

const getPortfolioImage = (id: number | string) => {
    const defaultImages: Record<string | number, string> = {
        1: IMAGES.living.main,
        2: IMAGES.office.main,
        3: IMAGES.kitchen.main,
        4: IMAGES.glass.partition,
        5: IMAGES.portfolio.c2,
        6: IMAGES.bedroom.wardrobe,
        7: IMAGES.aluminum.door,
        8: IMAGES.metal.gate,
        9: IMAGES.aluminum.window,
    };
    return defaultImages[id] || IMAGES.portfolio.r1;
};

const categories = ["All", "Glass Works", "Custom Furniture", "Aluminum", "Iron/Metal", "Residential", "Commercial"];

const fallbackProjects: Project[] = [
    { id: 1, title: "Modern Villa Interior", location: "Vaishali Nagar, Jaipur", categories: ["Residential", "Custom Furniture"] },
    { id: 2, title: "Corporate Office Glass Partitions", location: "C-Scheme, Jaipur", categories: ["Commercial", "Glass Works"] },
    { id: 3, title: "Luxury Kitchen Setup", location: "Jagatpura, Jaipur", categories: ["Residential", "Custom Furniture"] },
    { id: 4, title: "Frameless Glass Balcony", location: "Raja Park, Jaipur", categories: ["Residential", "Glass Works"] },
    { id: 5, title: "Boutique Display Units", location: "MI Road, Jaipur", categories: ["Commercial", "Custom Furniture"] },
    { id: 6, title: "Minimalist Wardrobes", location: "Malviya Nagar, Jaipur", categories: ["Residential", "Custom Furniture"] },
    { id: 7, title: "Floor-to-Ceiling Sliding Doors", location: "Civil Lines, Jaipur", categories: ["Residential", "Aluminum"] },
    { id: 8, title: "CNC Laser Cut Main Gate", location: "Bani Park, Jaipur", categories: ["Residential", "Iron/Metal"] },
    { id: 9, title: "Commercial Exterior Facades", location: "Sitapura, Jaipur", categories: ["Commercial", "Aluminum"] },
];

export default function PortfolioGrid() {
    const [projects, setProjects] = useState<Project[]>(fallbackProjects);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch('/api/portfolio');
                const data = await res.json();
                if (data.projects && data.projects.length > 0) {
                    const mapped = data.projects.map((p: any) => ({
                        id: p.id || String(Math.random()),
                        title: p.title,
                        categories: p.category ? [p.category] : [],
                        location: p.location,
                        image_url: p.image_url,
                    }));
                    setProjects(mapped);
                } else {
                    setProjects(fallbackProjects);
                }
            } catch {
                setProjects(fallbackProjects);
            }
        }
        load();
    }, []);

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.categories.includes(activeFilter));

    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="max-w-[1280px] mx-auto px-6">

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === cat
                                ? "bg-foreground text-white shadow-md"
                                : "bg-grey-50 text-grey-800 hover:bg-grey-200 border border-transparent hover:border-grey-300"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {filteredProjects.map((project, i) => (
                        // Varying heights to create masonry effect
                        <div
                            key={project.id}
                            className={`group relative w-full rounded-2xl overflow-hidden bg-grey-100 border border-grey-200 shadow-sm hover:shadow-xl transition-all duration-500 break-inside-avoid ${i % 3 === 0 ? 'aspect-[3/4]' : i % 2 === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-grey-400 font-display text-center">
                                <Image
                                    src={getPortfolioImage(project.id)}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.categories.slice(0, 2).map(cat => (
                                        <span key={cat} className="bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-white font-display text-2xl font-medium mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-grey-200 text-sm font-medium">
                                    {project.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-grey-500">
                        <h3 className="font-display text-2xl mb-2">No projects found.</h3>
                        <p>Try selecting a different category.</p>
                    </div>
                )}

            </div>
        </section>
    );
}
