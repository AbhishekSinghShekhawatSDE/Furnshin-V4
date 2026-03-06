'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

// ── Social Icon SVGs (monochrome, inline) ──────────────────────────

const SOCIAL_LINKS = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/furnshin',
        label: 'Follow Furnshin on Instagram',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/furnshin',
        label: 'Follow Furnshin on Facebook',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@furnshin',
        label: 'Watch Furnshin on YouTube',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
        ),
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/919876543210?text=Hi%20Furnshin!%20I%27d%20like%20to%20discuss%20a%20project.',
        label: 'Chat with Furnshin on WhatsApp',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.999 2C6.477 2 2 6.477 2 11.999c0 1.98.573 3.829 1.563 5.383L2 22l4.748-1.534A9.96 9.96 0 0 0 12 22c5.522 0 10-4.478 10-10.001C22 6.477 17.522 2 11.999 2z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/furnshin',
        label: 'Connect with Furnshin on LinkedIn',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        name: 'X (Twitter)',
        href: 'https://x.com/furnshin',
        label: 'Follow Furnshin on X',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
]

// ── Social Tile ─────────────────────────────────────────────────────

function SocialTile({ link }: { link: typeof SOCIAL_LINKS[0] }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative flex flex-col items-center justify-center gap-2 aspect-square p-4 rounded-xl border border-white/10 transition-colors duration-200 hover:border-[#E8553D]/60 hover:bg-white/5 group"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
            <motion.div
                animate={{ color: hovered ? '#E8553D' : 'rgba(255,255,255,0.7)' }}
                transition={{ duration: 0.2 }}
            >
                {link.icon}
            </motion.div>
            <motion.span
                className="text-[10px] tracking-widest uppercase font-medium"
                animate={{ color: hovered ? '#E8553D' : 'rgba(255,255,255,0.4)' }}
                transition={{ duration: 0.2 }}
            >
                {link.name}
            </motion.span>

            {/* Glow on hover */}
            {hovered && (
                <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ background: 'radial-gradient(circle at center, rgba(232,85,61,0.08) 0%, transparent 70%)' }}
                />
            )}
        </motion.a>
    )
}

// ── Footer Column Data ──────────────────────────────────────────────

const QUICK_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/blog?category=case-study' },
    { label: 'Get a Quote', href: '/contact#quote' },
]

const SERVICES_LINKS = [
    { label: 'Custom Furniture', href: '/services/custom-furniture' },
    { label: 'Modular Kitchens', href: '/services/custom-furniture#kitchens' },
    { label: 'Wardrobes', href: '/services/custom-furniture#wardrobes' },
    { label: 'Glass Works', href: '/services/glass-works' },
    { label: 'Glass Partitions', href: '/services/glass-works#partitions' },
    { label: 'Aluminum Solutions', href: '/services/aluminum-solutions' },
    { label: 'Iron & Metal Works', href: '/services/iron-metal-works' },
    { label: 'Complete Interiors', href: '/services' },
]

const LOCATIONS = [
    'Jaipur, Rajasthan',
    'Vaishali Nagar',
    'Malviya Nagar',
    'C-Scheme',
    'Mansarovar',
    'Jagatpura',
    'Pratap Nagar',
    'Pan-India Delivery',
]

const LEGAL_LINKS = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Disclaimer', href: '/disclaimer' },
]

// ── Footer Link Item ────────────────────────────────────────────────

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm text-gray-400 hover:text-[#E8553D] transition-colors duration-200 leading-relaxed group flex items-center gap-1.5"
            >
                <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#E8553D] text-xs">→</span>
                {label}
            </Link>
        </li>
    )
}

// ── Main Footer Component ───────────────────────────────────────────

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-white" role="contentinfo">

            {/* ── ZONE A: Social Strip ── */}
            <div className="border-b border-white/8">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="text-center mb-8">
                        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 font-medium">
                            Connect With Us
                        </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-2xl mx-auto">
                        {SOCIAL_LINKS.map((link) => (
                            <SocialTile key={link.name} link={link} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── ZONE B: Main Footer ── */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Column 1: Company */}
                    <div className="space-y-5">
                        <div>
                            <h2 className="font-playfair text-2xl font-bold text-white tracking-tight">
                                Furnshin
                            </h2>
                            <p className="text-xs tracking-widest uppercase text-[#E8553D] mt-1 font-medium">
                                Designing Spaces That Speaks
                            </p>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Factory-direct custom furniture, glass works, aluminum solutions, and interior manufacturing in Jaipur. 14+ years. 500+ projects. Zero outsourcing.
                        </p>
                        <div className="pt-2 space-y-1.5">
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Serving</p>
                            <ul className="space-y-1">
                                {LOCATIONS.map((loc) => (
                                    <li key={loc} className="text-sm text-gray-400 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[#E8553D]/60 flex-shrink-0" />
                                        {loc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-5">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5">
                            {QUICK_LINKS.map((link) => (
                                <FooterLink key={link.label} href={link.href} label={link.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-5">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                            Our Services
                        </h3>
                        <ul className="space-y-2.5">
                            {SERVICES_LINKS.map((link) => (
                                <FooterLink key={link.label} href={link.href} label={link.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Get in Touch */}
                    <div className="space-y-5">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                            Get in Touch
                        </h3>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                                <a
                                    href="tel:+919876543210"
                                    className="text-sm text-gray-300 hover:text-[#E8553D] transition-colors duration-200 block"
                                >
                                    +91 98765 43210
                                </a>
                            </div>
                            <div className="space-y-1.5">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                                <a
                                    href="mailto:hello@furnshin.com"
                                    className="text-sm text-gray-300 hover:text-[#E8553D] transition-colors duration-200 block"
                                >
                                    hello@furnshin.com
                                </a>
                            </div>
                            <div className="space-y-1.5">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Studio</p>
                                <address className="not-italic text-sm text-gray-400 leading-relaxed">
                                    201, Ananda Manglam, RIICO Kanta,<br />
                                    Mansarovar, Jaipur 302020
                                </address>
                            </div>
                            <div className="pt-2">
                                <a
                                    href="https://wa.me/919876543210?text=Hi%20Furnshin!%20I%27d%20like%20to%20discuss%20a%20project."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#E8553D] hover:bg-[#d14432] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 tracking-wide uppercase"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.98.573 3.829 1.563 5.383L2 22l4.748-1.534A9.96 9.96 0 0 0 12 22c5.522 0 10-4.478 10-10S17.522 2 12 2z" />
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── ZONE C: Copyright Strip ── */}
            <div className="border-t border-white/8">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                        {/* Copyright */}
                        <p className="text-xs text-gray-500 order-2 sm:order-1">
                            &copy; {new Date().getFullYear()} Furnshin. All rights reserved.
                        </p>

                        {/* Legal links — hidden but crawlable */}
                        <nav aria-label="Legal" className="flex items-center gap-4 order-3 sm:order-2">
                            {LEGAL_LINKS.map((link, i) => (
                                <span key={link.label} className="flex items-center gap-4">
                                    <Link
                                        href={link.href}
                                        className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                    {i < LEGAL_LINKS.length - 1 && (
                                        <span className="w-px h-3 bg-gray-700" aria-hidden="true" />
                                    )}
                                </span>
                            ))}
                        </nav>

                        {/* Developer credit */}
                        <p className="text-[11px] text-gray-600 order-1 sm:order-3">
                            Crafted by{' '}
                            <a
                                href="https://www.abhisheksinghshekhawat.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-[#E8553D] transition-colors duration-200"
                            >
                                Abhishek Singh Shekhawat
                            </a>
                        </p>

                    </div>
                </div>
            </div>

        </footer>
    )
}
