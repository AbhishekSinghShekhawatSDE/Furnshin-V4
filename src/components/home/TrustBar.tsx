"use client";

/**
 * @file TrustBar.tsx
 * @description A simple text/stat bar highlighting key business trust signals.
 * Props: None
 */

import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";

export default function TrustBar() {
    const stats = [
        { label: "Years", value: 14, suffix: "+" },
        { label: "Projects", value: 500, suffix: "+" },
        { label: "Factory-Direct", value: null, text: "Factory-Direct" },
        { label: "Pan-Jaipur", value: null, text: "Pan-Jaipur" }
    ];

    return (
        <section className="bg-white border-b border-grey-200 py-8 relative z-10">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center gap-6 md:gap-4 text-center">
                    {stats.map((stat, index) => (
                        <Reveal
                            key={stat.label || stat.text}
                            direction="up"
                            delay={index * 0.1}
                            className="flex-1 min-w-[140px] flex items-center justify-center gap-4"
                        >
                            <span className="font-display font-medium text-lg md:text-xl text-foreground whitespace-nowrap truncate tracking-tight">
                                {stat.value !== null ? (
                                    <CountUp to={stat.value as number} suffix={stat.suffix} />
                                ) : (
                                    stat.text
                                )}
                                {stat.value !== null && <span className="ml-2 uppercase text-xs font-bold tracking-widest text-grey-400">{stat.label}</span>}
                            </span>
                            {index < stats.length - 1 && (
                                <div className="hidden md:block w-px h-6 bg-grey-200 ml-4" />
                            )}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
