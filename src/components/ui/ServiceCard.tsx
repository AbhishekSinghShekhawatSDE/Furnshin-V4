"use client";


import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import OverlordReveal from "./OverlordReveal";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    index: number;
}

export default function ServiceCard({ title, description, image, index }: ServiceCardProps) {
    return (
        <OverlordReveal delay={index * 0.1}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass border-white/5 hover:border-primary/50 transition-colors duration-500">
                {/* Image with Overlord Zoom */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                    <div className="mb-4 w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                    </div>

                    <h3 className="text-3xl font-display mb-3 text-white">
                        {title}
                    </h3>

                    <p className="text-foreground/60 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {description}
                    </p>

                    {/* Manga-panel border effect */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 group-hover:w-20 group-hover:h-20 transition-all duration-700 rounded-tr-2xl" />
                </div>
            </div>
        </OverlordReveal>
    );
}
