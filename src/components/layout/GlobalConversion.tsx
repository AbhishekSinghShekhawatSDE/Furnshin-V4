"use client";

/**
 * @file GlobalConversion.tsx
 * @description Global Lead Capture Popup and WhatsApp Widget as per Conversion requirements.
 * Props: None
 */
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND } from "@/data/brand";

export default function GlobalConversion() {
    const [showPopup, setShowPopup] = useState(false);
    const [hasDismissedPopup, setHasDismissedPopup] = useState(false);
    const [isWaPulsing, setIsWaPulsing] = useState(true);

    useEffect(() => {
        // Check session storage
        if (typeof window !== "undefined") {
            const dismissed = sessionStorage.getItem("furnshin_popup_dismissed");
            if (dismissed === "true") setHasDismissedPopup(true);

            const waClicked = sessionStorage.getItem("furnshin_wa_clicked");
            if (waClicked === "true") setIsWaPulsing(false);
        }

        const handleScroll = () => {
            // 60% scroll depth
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 60 && !hasDismissedPopup && !showPopup) {
                setShowPopup(true);
            }
        };

        // 30 seconds idle trigger
        const timer = setTimeout(() => {
            if (!hasDismissedPopup && !showPopup) {
                setShowPopup(true);
            }
        }, 30000);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, [hasDismissedPopup, showPopup]);

    const dismissPopup = () => {
        setShowPopup(false);
        setHasDismissedPopup(true);
        sessionStorage.setItem("furnshin_popup_dismissed", "true");
    };

    const handleWaClick = () => {
        setIsWaPulsing(false);
        sessionStorage.setItem("furnshin_wa_clicked", "true");

        fetch('/api/track/whatsapp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                page_url: window.location.href,
                device: window.innerWidth < 768 ? 'mobile' : 'desktop',
            }),
        }).catch(() => { });

        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'whatsapp_click', {
                'event_category': 'conversion',
                'event_label': 'global_widget'
            });
        }
    };

    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        const form = e.currentTarget;
        const formData = {
            name: (form.elements.namedItem('p_name') as HTMLInputElement).value,
            phone: (form.elements.namedItem('p_phone') as HTMLInputElement).value,
            city: (form.elements.namedItem('p_city') as HTMLInputElement).value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'homepage_popup',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormStatus("success");
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'generate_lead', {
                        'event_category': 'conversion',
                        'event_label': 'popup_form'
                    });
                }
                setTimeout(() => dismissPopup(), 2000);
            } else {
                setFormStatus("error");
                setErrorMessage(result.error || 'Something went wrong.');
            }
        } catch {
            setFormStatus("error");
            setErrorMessage('Connection failed. Please try again.');
        }
    };

    return (
        <>
            {/* WhatsApp Widget */}
            <a
                href={`https://wa.me/${BRAND.contact.whatsapp}?text=${encodeURIComponent(BRAND.social.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWaClick}
                className="fixed bottom-6 right-6 z-40 flex items-center group"
            >
                <div className="bg-white px-4 py-2 rounded-full shadow-lg mr-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-sm font-bold text-foreground whitespace-nowrap pointer-events-none">
                    Chat with the Factory
                </div>
                <div className={`w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:scale-110 transition-transform ${isWaPulsing ? 'animate-[pulse_2s_infinite]' : ''}`}>
                    <MessageCircle size={28} />
                </div>
            </a>

            {/* Lead Capture Popup */}
            {showPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={dismissPopup} />

                    <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={dismissPopup}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors text-white z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="bg-primary p-10 text-white text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                            <h2 className="text-3xl font-display font-medium mb-3 relative z-10">Get a Free Design Consultation</h2>
                            <p className="text-white/90 text-lg relative z-10">Talk directly to our manufacturing experts. Skip the middleman.</p>
                        </div>

                        <div className="p-8 bg-grey-50">
                            {formStatus === "success" ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Request Received</h3>
                                    <p className="text-gray-600">We'll connect with you shortly.</p>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleFormSubmit}>
                                    {formStatus === "error" && (
                                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                                            {errorMessage}
                                        </div>
                                    )}
                                    <div className="space-y-1">
                                        <label htmlFor="p_name" className="text-sm font-bold text-foreground uppercase tracking-wider">Name</label>
                                        <input required id="p_name" type="text" className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="Your full name" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="p_phone" className="text-sm font-bold text-foreground uppercase tracking-wider">Phone</label>
                                        <input required id="p_phone" type="tel" className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="10-digit number" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="p_city" className="text-sm font-bold text-foreground uppercase tracking-wider">City</label>
                                        <input required id="p_city" type="text" className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" defaultValue="Jaipur" />
                                    </div>
                                    <button disabled={formStatus === "submitting"} type="submit" className="w-full py-4 mt-6 bg-foreground text-white font-bold text-lg rounded-xl hover:bg-black transition-colors shadow-md disabled:opacity-70">
                                        {formStatus === "submitting" ? "Sending..." : "Talk to Our Team"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
