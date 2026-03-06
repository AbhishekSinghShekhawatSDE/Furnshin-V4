"use client";

/**
 * @file LeadCaptureCta.tsx
 * @description Full-width section prompting the user to book a consultation.
 * Props: None
 */

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";

export default function LeadCaptureCta() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <Reveal direction="up" delay={0}>
                    <h2 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight mb-6">
                        Ready to Transform Your Space?
                    </h2>
                </Reveal>
                <Reveal direction="up" delay={0.1}>
                    <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                        Get a free design consultation and factory tour. Let&apos;s discuss your vision and how our in-house facility can bring it to life.
                    </p>
                </Reveal>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Reveal direction="up" delay={0.2}>
                        <MagneticButton>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-[100px] font-bold text-lg transition-all shadow-xl block"
                            >
                                Start Your Project
                            </Link>
                        </MagneticButton>
                    </Reveal>
                    <Reveal direction="up" delay={0.3}>
                        <MagneticButton>
                            <a
                                href="https://wa.me/919876543210?text=Hi%20Furnshin!%20I'd%20like%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    if (typeof window !== 'undefined' && (window as any).gtag) {
                                        (window as any).gtag('event', 'whatsapp_click', {
                                            'event_category': 'conversion',
                                            'event_label': 'section_cta'
                                        });
                                    }
                                }}
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white hover:bg-white/10 rounded-[100px] font-bold text-lg transition-colors block"
                            >
                                Chat on WhatsApp
                            </a>
                        </MagneticButton>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
