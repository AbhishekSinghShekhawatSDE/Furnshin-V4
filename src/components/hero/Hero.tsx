"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";

import HeroSphere from '@/components/three/HeroSphere';

const HeroParticles = dynamic(() => import("@/components/motion/HeroParticles"), {
    ssr: false
});

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-grey-50 pt-20">
            {/* Ambient Background Layers */}
            <div className="absolute inset-0 pointer-events-auto z-0" aria-hidden="true">
                <HeroSphere />
            </div>
            <HeroParticles />

            <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                <div className="max-w-5xl mx-auto text-center">

                    <SplitText
                        text="Factory-Direct Custom Furniture & Interiors in Jaipur"
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] mb-8 text-foreground tracking-tight"
                        delay={0.2}
                    />

                    <Reveal direction="up" delay={1.4}>
                        <p className="text-lg md:text-xl text-grey-800 max-w-2xl mx-auto mb-12 leading-relaxed">
                            We don&apos;t just design it. We build it. In our own facility. 14+ years of execution. 500+ projects delivered across Jaipur.
                        </p>
                    </Reveal>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
                        <Reveal direction="up" delay={1.6}>
                            <MagneticButton>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-[100px] font-semibold text-base hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    Book Factory Visit <ArrowRight size={18} />
                                </Link>
                            </MagneticButton>
                        </Reveal>
                        <Reveal direction="up" delay={1.8}>
                            <MagneticButton>
                                <Link
                                    href="/portfolio"
                                    className="w-full sm:w-auto px-8 py-4 bg-white text-foreground border border-grey-200 rounded-[100px] font-semibold text-base hover:border-foreground transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                                >
                                    See Our Work
                                </Link>
                            </MagneticButton>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <Reveal direction="none" delay={2.5} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-grey-800">
                <div className="animate-bounce flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
                    <div className="w-px h-12 bg-grey-200 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-primary" />
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
