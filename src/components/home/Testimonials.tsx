"use client";

/**
 * @file Testimonials.tsx
 * @description 3 client quotes displayed in an elegant row with dynamic fetching.
 * Props: None
 */
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { BRAND } from "@/data/brand";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface TestimonialData {
    name: string;
    location: string;
    project: string;
    quote: string;
    avatar?: string;
    rating?: number;
}

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<TestimonialData[]>(BRAND.testimonials);

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch('/api/testimonials');
                const data = await res.json();
                if (data.testimonials && data.testimonials.length > 0) {
                    const mapped = data.testimonials.map((t: any) => ({
                        name: t.name,
                        location: t.location,
                        project: t.project_type,
                        quote: t.quote,
                        avatar: t.avatar_url,
                        rating: t.rating,
                    }));
                    setTestimonials(mapped);
                }
            } catch {
                // Silently fallback to hardcoded BRAND details
            }
        }
        load();
    }, []);

    return (
        <section className="py-24 bg-grey-50">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal direction="up" delay={0}>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-4">
                            Client <i className="text-primary not-italic italic">Stories</i>
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <p className="text-grey-800 max-w-xl mx-auto text-lg">
                            Hear from homeowners and businesses who trusted us with their spaces.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.slice(0, 3).map((testimonial, i) => (
                        <StaggerItem key={i} className="h-full">
                            <div className="bg-white p-8 rounded-2xl border border-grey-200 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                                <Quote className="text-grey-200 mb-6" size={40} fill="currentColor" />
                                <p className="text-foreground text-lg leading-relaxed mb-8 flex-grow">
                                    &quot;{testimonial.quote}&quot;
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    {testimonial.avatar ? (
                                        <Image src={testimonial.avatar} alt={`${testimonial.name} - ${testimonial.project} project in ${testimonial.location}, Jaipur`} width={48} height={48} className="rounded-full object-cover shrink-0 border border-grey-200" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-grey-200 text-grey-800 flex items-center justify-center font-display font-bold shrink-0 text-xl border border-grey-300">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                                        <p className="text-xs font-medium text-grey-800 tracking-wide uppercase mt-0.5">
                                            {testimonial.project} • {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
