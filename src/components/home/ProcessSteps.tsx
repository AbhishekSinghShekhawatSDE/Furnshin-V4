"use client";

/**
 * @file ProcessSteps.tsx
 * @description A 4-step vertical or horizontal stepper showing how Furnshin works.
 * Props: None
 */
import { PenTool, Layers, Factory, Key } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

export default function ProcessSteps() {
    const steps = [
        { num: "01", title: "Design Consultation", desc: "We understand your vision, space constraints, and functional needs to build a solid foundation.", icon: PenTool },
        { num: "02", title: "Material Selection", desc: "Choose from premium, durable materials guided by our experts. We never compromise on raw quality.", icon: Layers },
        { num: "03", title: "Factory Manufacturing", desc: "Your interiors are precision-cut and assembled in our own Jaipur facility to ensure a perfect fit.", icon: Factory },
        { num: "04", title: "Installation & Handover", desc: "Our in-house team installs everything with zero structural mess. On time. Every time.", icon: Key },
    ];

    return (
        <section className="py-24 bg-grey-50">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal direction="up" delay={0}>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-4">
                            How We <i className="text-primary not-italic italic">Work</i>
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <p className="text-grey-800 max-w-xl mx-auto text-lg">
                            From concept to installation — one partner, end to end. No middlemen.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <StaggerItem key={step.num} className="relative flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-grey-200 shadow-sm z-10 mb-6 group-hover:border-primary group-hover:scale-110 transition-transform duration-300">
                                <step.icon size={32} strokeWidth={1.5} className="text-foreground group-hover:text-primary transition-colors" />
                            </div>

                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-grey-200" />
                            )}

                            <div className="text-sm font-display font-bold text-grey-400 mb-2 mt-2">{step.num}</div>
                            <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-grey-800 text-sm leading-relaxed">{step.desc}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
