import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Furnshin | Contact Our Jaipur Office',
        description: 'Get in touch for a free design consultation. Visit our Jaipur manufacturing facility to see our work firsthand.',
        keywords: ['contact Furnshin', 'interior designer Jaipur contact', 'furniture consultation Jaipur', 'visit Furnshin factory', 'interior design inquiry'],
        alternates: { canonical: 'https://www.furnshin.com/contact' },
    }
}

export default function ContactPage() {
    return (
        <>
            <section className="bg-grey-50 pt-32 pb-16 border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex justify-center mb-4">
                        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
                            Let&apos;s <i className="text-primary not-italic italic">Talk</i>
                        </h1>
                        <p className="text-lg md:text-xl text-grey-800 max-w-2xl mx-auto">
                            Ready to transform your space? Request a consultation or visit our factory.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form Side */}
                        <div>
                            <h2 className="text-3xl font-display font-medium mb-8 text-foreground tracking-tight">Send us a Message</h2>
                            <ContactForm />
                        </div>

                        {/* Info Side */}
                        <div className="lg:pl-12">
                            <h2 className="text-3xl font-display font-medium mb-8 text-foreground tracking-tight">Factory & Headquarters</h2>

                            <div className="space-y-8 mb-12">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-grey-50 flex items-center justify-center shrink-0 border border-grey-200 text-primary transition-colors hover:bg-primary/10">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-foreground">Location</h3>
                                        <address className="not-italic text-sm text-gray-400 leading-relaxed">
                                            201, Ananda Manglam, RIICO Kanta,<br />
                                            Mansarovar, Jaipur 302020
                                        </address>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-grey-50 flex items-center justify-center shrink-0 border border-grey-200 text-primary transition-colors hover:bg-primary/10">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-foreground">Phone & WhatsApp</h3>
                                        <a href="tel:+919876543210" className="text-grey-800 hover:text-primary transition-colors block mb-1">+91 98765 43210</a>
                                        <a href="https://wa.me/919876543210?text=Hi%20Furnshin!%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline text-sm block">Chat on WhatsApp &rarr;</a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-grey-50 flex items-center justify-center shrink-0 border border-grey-200 text-primary transition-colors hover:bg-primary/10">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-foreground">Email</h3>
                                        <a href="mailto:hello@furnshin.com" className="text-grey-800 hover:text-primary transition-colors">hello@furnshin.com</a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-grey-50 flex items-center justify-center shrink-0 border border-grey-200 text-primary transition-colors hover:bg-primary/10">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-foreground">Working Hours</h3>
                                        <p className="text-grey-800">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                                        <p className="text-grey-500 text-sm mt-1">Sunday by appointment only.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map embed placeholder */}
                            <div className="aspect-[4/3] w-full bg-grey-100 rounded-3xl border border-grey-200 flex items-center justify-center overflow-hidden relative shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.23351978252!2d75.76019349887755!3d26.84880574162024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d5c0b00001%3A0x89007f3ea7e20b33!2sSitapura%20Industrial%20Area%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1709722304823!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 transition-opacity duration-700"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
