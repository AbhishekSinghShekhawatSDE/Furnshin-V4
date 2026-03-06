"use client";

/**
 * @file ContactForm.tsx
 * @description Interactive contact form with loading/success states.
 * Props: None
 */

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            city: (form.elements.namedItem('city') as HTMLInputElement).value,
            service: (form.elements.namedItem('service') as HTMLSelectElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'contact_page',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                // Fire GA4 conversion event
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'generate_lead', {
                        event_category: 'Contact Form',
                        event_label: formData.service || 'General',
                    });
                }
            } else {
                setStatus("error");
                setErrorMessage(result.error || 'Something went wrong.');
            }
        } catch {
            setStatus("error");
            setErrorMessage('Connection failed. Please try again.');
        }
    };

    if (status === "success") {
        return (
            <div className="bg-primary/5 text-primary p-8 rounded-2xl border border-primary/20 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-2xl font-display font-medium mb-2">Message Received</h3>
                <p className="text-foreground">Our team will contact you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === "error" && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm">
                    {errorMessage}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input required type="text" id="name" className="w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-grey-400 text-foreground" placeholder="e.g., Rajesh Sharma" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-grey-400 text-foreground" placeholder="e.g., +91 98765 43210" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium text-foreground">City</label>
                    <input required type="text" id="city" className="w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-grey-400 text-foreground" placeholder="e.g., Jaipur" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interest</label>
                    <select id="service" className="w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer text-foreground">
                        <option>Custom Furniture</option>
                        <option>Glass Works</option>
                        <option>Aluminum Solutions</option>
                        <option>Iron & Metal Works</option>
                        <option>Full Interior Project</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Project Details</label>
                <textarea required id="message" rows={5} className="w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-grey-400 text-foreground" placeholder="Tell us a bit about your space and requirements..."></textarea>
            </div>

            <button disabled={status === "submitting"} type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                {status === "submitting" ? "Sending..." : "Submit Request"} <ArrowRight size={18} />
            </button>
        </form>
    );
}
