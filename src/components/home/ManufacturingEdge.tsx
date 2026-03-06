"use client";

/**
 * @file ManufacturingEdge.tsx
 * @description Highlights the factory-direct advantage with a rich visual format.
 * Props: None
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/data/images";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";

export default function ManufacturingEdge() {
    const [isPlaying, setIsPlaying] = useState(false);

    const points = [
        "Precision CNC cutting for zero margin of error.",
        "Rigorous 5-point quality check before transport.",
        "Cost advantage of buying direct from the maker.",
        "Transparent timelines with no third-party delays."
    ];

    return (
        <section className="py-24 bg-white border-y border-grey-200 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1">
                        <Reveal direction="left" delay={0}>
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-6">
                                The <i className="text-primary not-italic italic">Manufacturing</i> Edge
                            </h2>
                        </Reveal>
                        <Reveal direction="left" delay={0.1}>
                            <p className="text-grey-800 text-lg mb-8 leading-relaxed">
                                Most interior companies are just aggregators. They outsource your project to the lowest bidder.
                                <strong> We build in-house. Not outsourced.</strong> Our Jaipur-based factory ensures your custom
                                furniture and metalworks are engineered to architectural standards.
                            </p>
                        </Reveal>

                        <ul className="space-y-4 mb-10">
                            {points.map((point, i) => (
                                <Reveal key={point} direction="left" delay={0.2 + i * 0.1}>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                                        <span className="text-foreground font-medium">{point}</span>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>

                        <Reveal direction="left" delay={0.6}>
                            <MagneticButton>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-[100px] font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                                >
                                    Tour Our Facility
                                </Link>
                            </MagneticButton>
                        </Reveal>
                    </div>

                    <Reveal direction="right" delay={0.2} className={`order-1 lg:order-2 relative h-[500px] w-full rounded-3xl overflow-hidden bg-grey-100 flex items-center justify-center group shadow-md ${!isPlaying ? 'cursor-pointer' : ''}`}>
                        <div
                            className="w-full h-full"
                            onClick={() => { if (!isPlaying) setIsPlaying(true); }}
                        >
                            {!isPlaying ? (
                                <>
                                    <Image
                                        src={IMAGES.factory.main}
                                        alt="Furnshin Manufacturing Facility"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0 z-10" />

                                    {/* Play Button overlay indicating video/tour available */}
                                    <div className="absolute inset-0 m-auto w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-transform z-20">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-1">
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                    </div>
                                </>
                            ) : (
                                <video
                                    src="/videos/real_woodworking.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover z-30"
                                />
                            )}
                        </div>
                    </Reveal>

                </div>
            </div>
        </section >
    );
}
