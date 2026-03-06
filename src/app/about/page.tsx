import { Metadata } from "next";
import Image from "next/image";
import LeadCaptureCta from "@/components/home/LeadCaptureCta";
import { Award, ShieldCheck, Ruler, MapPin } from "lucide-react";
import { IMAGES } from "@/data/images";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import SplitText from "@/components/motion/SplitText";
import ParallaxSection from "@/components/motion/ParallaxSection";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Furnshin | About Our Jaipur Furniture Factory',
        description: 'Learn about Furnshin\'s 14-year history of manufacturing premium custom furniture and executing architectural interiors in Jaipur.',
        keywords: ['furniture factory Jaipur', 'interior execution expertise', 'custom furniture manufacturing', 'Furnshin story', 'modular kitchen specialists'],
        alternates: { canonical: 'https://www.furnshin.com/about' },
        openGraph: {
            title: 'Furnshin | About Our Jaipur Furniture Factory',
            description: 'Rooted in engineering. Driven by design.',
            images: [{ url: '/og/about.jpg', width: 1200, height: 630 }],
            url: 'https://www.furnshin.com/about',
            siteName: 'Furnshin',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@furnshin',
        },
    }
}

export default function AboutPage() {
    return (
        <>
            <section className="bg-grey-50 pt-32 pb-24 border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex justify-center mb-4">
                        <Reveal direction="down">
                            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
                        </Reveal>
                    </div>
                    <div className="text-center">
                        <SplitText
                            text="The Origin Story"
                            className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6"
                            delay={0.2}
                        />
                        <Reveal direction="up" delay={0.8}>
                            <p className="text-lg md:text-2xl text-grey-800 max-w-3xl mx-auto">
                                From a humble local fabrication unit to Jaipur&apos;s leading direct-to-consumer interior manufacturing brand.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Brand Story & Facility */}
            <section className="py-24 bg-white border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Reveal direction="left">
                                <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">14 Years of <i className="text-primary not-italic italic">Execution.</i></h2>
                            </Reveal>
                            <div className="space-y-6 text-lg text-grey-800 leading-relaxed">
                                <Reveal direction="left" delay={0.1}>
                                    <p>Furnshin wasn&apos;t born in a design studio or a Silicon Valley incubator. We started 14 years ago on the factory floor right here in Jaipur.</p>
                                </Reveal>
                                <Reveal direction="left" delay={0.2}>
                                    <p>Our founder noticed a massive disconnect in the interior design industry: designers drew beautiful pictures, but when it came to execution, clients were handed off to unreliable local carpenters and middlemen aggregators who inflated prices and cut corners on materials.</p>
                                </Reveal>
                                <Reveal direction="left" delay={0.3}>
                                    <p>We built Furnshin to solve this. By bringing state-of-the-art CNC machinery, glass toughening, and metal fabrication under one roof, we eliminated the middleman. The result? Uncompromising quality, absolute transparency, and true factory-direct pricing for our clients.</p>
                                </Reveal>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <ParallaxSection offset={30} className="aspect-square bg-grey-100 rounded-3xl overflow-hidden border border-grey-200 flex items-center justify-center relative shadow-sm">
                                <Image
                                    src={IMAGES.factory.main}
                                    alt="Furnshin Factory Floor"
                                    fill
                                    className="object-cover scale-110"
                                />
                            </ParallaxSection>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-grey-50">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <Reveal direction="right" delay={0.1} className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl bg-grey-100">
                            <Image
                                src={IMAGES.about.founder}
                                alt="Founder"
                                fill
                                className="object-cover"
                            />
                        </Reveal>
                        <Reveal direction="left" delay={0.2}>
                            <h2 className="text-3xl font-display font-medium text-foreground mb-4">Message from the Founder</h2>
                            <p className="text-grey-800 text-lg leading-relaxed mb-6">
                                &quot;At Furnshin, we believe that an interior is more than just a setup—it&apos;s a strategic lifecycle of creation. We cut the middleman so that every rupee you spend goes into the quality of the material and the hands of the craftsman. Our Jaipur facility is our pride.&quot;
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <Reveal direction="left" delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-6"> Our Manufacturing Facility </h2>
                            <p className="text-grey-800 text-lg mb-8 leading-relaxed">
                                Spread across a state-of-the-art unit in Jaipur, our facility is equipped with automated CNC machinery, high-pressure lamination zones, and specialized metal fabrication sections. By keeping manufacturing in-house, we guarantee precision that local contractors simply cannot match.
                            </p>
                        </Reveal>
                        <Reveal direction="right" delay={0.2} className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl bg-grey-100">
                            <ParallaxSection className="h-[120%]" offset={40}>
                                <Image
                                    src={IMAGES.factory.main}
                                    alt="Furnshin Factory Floor"
                                    fill
                                    className="object-cover"
                                />
                            </ParallaxSection>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-grey-50">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-4"> Experienced Team </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <Reveal direction="up" delay={0.1} className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={IMAGES.about.team}
                                alt="Furnshin Core Team"
                                fill
                                className="object-cover"
                            />
                        </Reveal>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-display font-semibold mb-2">Engineers & Craftsmen</h3>
                            <p className="text-grey-800 text-lg leading-relaxed italic">
                                &quot;Furniture isn&apos;t just assembly. It&apos;s a blend of CAD precision and artisanal finishing.&quot;
                            </p>
                            <p className="text-grey-800 text-lg leading-relaxed">
                                Our team comprises senior CAD designers, precision machine operators, and master carpenters with decades of combined experience. Each project is managed by a dedicated site engineer ensuring the factory specifications are met during installation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-grey-900 text-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <Reveal direction="up">
                            <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">Our Core <i className="text-primary not-italic italic">Values</i></h2>
                        </Reveal>
                        <Reveal direction="up" delay={0.1}>
                            <p className="text-grey-400 text-lg">The principles that govern every millimeter we cut.</p>
                        </Reveal>
                    </div>

                    <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[
                            { icon: Ruler, title: "Design-Led", desc: "We believe functional engineering and aesthetic beauty must coexist seamlessly." },
                            { icon: Award, title: "Craftsmanship", desc: "From premium marine plywood to heavy-gauge aluminum, we strictly use high-grade materials." },
                            { icon: ShieldCheck, title: "Reliability", desc: "No false promises. We deliver on time and back our work with comprehensive warranties." },
                            { icon: MapPin, title: "Proudly Local", desc: "Manufactured entirely in Jaipur, supporting local artisans and reducing carbon footprints." }
                        ].map((val, i) => (
                            <StaggerItem key={i}>
                                <div className="h-full bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                    <val.icon className="text-primary mb-6" size={32} />
                                    <h3 className="text-2xl font-display font-bold mb-3">{val.title}</h3>
                                    <p className="text-grey-400 leading-relaxed">{val.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            <LeadCaptureCta />
        </>
    )
}
