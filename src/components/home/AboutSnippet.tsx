/**
 * @file AboutSnippet.tsx
 * @description Brief about section with founder snippet and link to the full about page.
 * Props: None
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/data/images";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";

export default function AboutSnippet() {
    return (
        <section className="py-24 bg-foreground text-white">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal direction="left" delay={0.1} className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-grey-800 border border-grey-700 shadow-xl group">
                        <Image
                            src={IMAGES.about.team}
                            alt="Furnshin Design Team"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                    </Reveal>

                    <div>
                        <Reveal direction="up" delay={0}>
                            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
                                Rooted in Engineering. <br />
                                Driven by <i className="text-primary not-italic italic">Design.</i>
                            </h2>
                        </Reveal>
                        <Reveal direction="up" delay={0.1}>
                            <p className="text-grey-200 text-lg leading-relaxed mb-6">
                                Furnshin started 14 years ago with a simple belief: the best interiors are physically built, not just imagined. By combining our own manufacturing setup with a dedicated design team, we removed the disconnect between what is drawn and what gets delivered.
                            </p>
                        </Reveal>
                        <Reveal direction="up" delay={0.2}>
                            <p className="text-grey-200 text-lg leading-relaxed mb-10">
                                We own the machines, we employ the craftsmen, and we take absolute responsibility for every millimeter of your space.
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.3}>
                            <MagneticButton>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-[100px] font-semibold hover:bg-primary/90 transition-all gap-2"
                                >
                                    Read Our Story <ArrowRight size={18} />
                                </Link>
                            </MagneticButton>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
