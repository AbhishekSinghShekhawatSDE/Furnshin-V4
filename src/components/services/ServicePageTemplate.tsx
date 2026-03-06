/**
 * @file ServicePageTemplate.tsx
 * @description Standardized template for individual service pages as specified in the brief.
 * Props: ServicePageProps
 */

import Link from "next/link";
import Image from "next/image";
import LeadCaptureCta from "@/components/home/LeadCaptureCta";
import { CheckCircle2, Factory, PenTool, Key } from "lucide-react";
import { IMAGES } from "@/data/images";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

const galleryImages = [
    IMAGES.glass.shower,
    IMAGES.kitchen.detail,
    IMAGES.office.partition,
    IMAGES.metal.railing,
    IMAGES.aluminum.door,
    IMAGES.living.detail,
    IMAGES.factory.woodwork,
];

interface ServicePageProps {
    title: string;
    subheading: string;
    problemText: string;
    solutionText: string;
    materials: string[];
    gallery: { id: string, title: string, category: string }[];
    faqs: { q: string, a: string }[];
}

export default function ServicePageTemplate({
    title, subheading, problemText, solutionText, materials, gallery, faqs
}: ServicePageProps) {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Furnshin",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Jaipur",
                                "addressRegion": "RJ",
                                "addressCountry": "IN"
                            }
                        },
                        "name": title,
                        "description": subheading,
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(faqs))
                }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-grey-900 text-white overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="font-display text-4xl md:text-8xl tracking-[0.2em] font-black uppercase text-center opacity-50 mix-blend-overlay">
                        {title} Works
                    </span>
                </div>

                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-20">
                    <div className="mb-6">
                        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: title }]} />
                    </div>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
                            {title.split(' ').map((word, i) => i === 0 ? <i key={i} className="text-primary not-italic italic">{word} </i> : word + ' ')}
                            <span className="text-white/80">in Jaipur</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-grey-200 mb-10 leading-relaxed font-medium">
                            {subheading}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#start" className="px-8 py-4 bg-primary text-white rounded-[100px] font-bold text-lg hover:bg-primary/90 transition-transform hover:scale-105 shadow-xl">
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem / Solution */}
            <section id="start" className="py-24 bg-white border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="p-10 bg-grey-50 rounded-3xl border border-grey-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-grey-300" />
                            <span className="text-grey-500 font-bold uppercase tracking-wider text-sm mb-4 block">The Challenge</span>
                            <h2 className="text-3xl font-display font-medium mb-4 text-foreground">Off-the-shelf solutions don&apos;t fit your vision.</h2>
                            <p className="text-grey-700 text-lg leading-relaxed">{problemText}</p>
                        </div>
                        <div className="p-10 bg-white rounded-3xl border border-primary shadow-lg shadow-primary/5 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Our Solution</span>
                            <h2 className="text-3xl font-display font-medium mb-4 text-foreground">Factory-engineered perfection.</h2>
                            <p className="text-grey-800 text-lg leading-relaxed">{solutionText}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Materials & Manufacturing Edge */}
            <section className="py-24 bg-grey-50 border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-display font-medium mb-6">Premium <i className="text-primary not-italic italic">Materials</i></h2>
                            <p className="text-grey-800 text-lg mb-8">We source only the highest grade architectural materials to ensure your installation lasts a lifetime. No compromises.</p>
                            <ul className="space-y-4">
                                {materials.map((mat, i) => (
                                    <li key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-grey-200 shadow-sm hover:border-primary transition-colors">
                                        <CheckCircle2 className="text-primary shrink-0" />
                                        <span className="font-semibold text-foreground text-lg">{mat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-4xl font-display font-medium mb-6">Factory-Direct <i className="text-primary not-italic italic">Process</i></h2>
                            <p className="text-grey-800 text-lg mb-8">Because we own the facility in Jaipur, we control the timeline and the quality.</p>

                            <div className="space-y-10 relative">
                                <div className="absolute top-6 bottom-6 left-6 w-px bg-grey-200 z-0 hidden sm:block" />

                                <div className="flex gap-6 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-md">
                                        <PenTool size={20} className="text-primary" />
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold mb-2">1. Site Measurement & CAD</h3>
                                        <p className="text-grey-800 leading-relaxed">Our engineers take exact laser measurements to draft perfect CAD blueprints for your space.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-md">
                                        <Factory size={20} className="text-primary" />
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold mb-2">2. Precision Manufacturing</h3>
                                        <p className="text-grey-800 leading-relaxed">Processed in our Jaipur facility on advanced CNC machines for architectural tolerances.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-md">
                                        <Key size={20} className="text-primary" />
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold mb-2">3. Flawless Installation</h3>
                                        <p className="text-grey-800 leading-relaxed">Our in-house crew installs the finished product with zero structural mess and perfect finishing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-white border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-medium mb-4">Recent <i className="text-primary not-italic italic">Installations</i></h2>
                        <p className="text-grey-800 text-lg">A glimpse into our {title.toLowerCase()} execution across Jaipur.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gallery.map((img, i) => (
                            <div key={img.id} className="aspect-square bg-grey-100 rounded-2xl overflow-hidden relative group border border-grey-200">
                                <div className="absolute inset-0 flex items-center justify-center text-grey-400 font-display text-center relative pointer-events-none">
                                    <Image
                                        src={galleryImages[i % galleryImages.length]}
                                        alt={img.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h3 className="text-white font-display text-xl font-medium">
                                        {img.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/portfolio" className="text-primary font-semibold hover:underline">View All {title} Projects &rarr;</Link>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-display font-medium text-center mb-12">Frequently Asked <i className="text-primary not-italic italic">Questions</i></h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-grey-50 rounded-2xl border border-grey-200 overflow-hidden cursor-pointer hover:border-primary transition-colors">
                                <summary className="p-6 font-bold text-lg list-none flex justify-between items-center group-open:bg-white select-none">
                                    {faq.q}
                                    <span className="text-primary group-open:-rotate-180 transition-transform duration-300 transform origin-center">▼</span>
                                </summary>
                                <div className="p-6 pt-0 text-grey-800 leading-relaxed border-t border-grey-100 mt-2 bg-white hidden group-open:block">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <LeadCaptureCta />
        </>
    );
}
