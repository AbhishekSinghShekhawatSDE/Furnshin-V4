"use client";

/**
 * @file Header.tsx
 * @description Main sticky navigation header. Uses Framer Motion for scroll-based background transition.
 * Props: None
 */

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-display font-black tracking-tight text-foreground">
                    Furnshin
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-[100px] hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                    >
                        Book Factory Visit
                    </Link>
                </div>

                {/* Mobile Menu Button - Minimal visually */}
                <button className="md:hidden flex flex-col gap-1.5 p-2">
                    <span className="w-6 h-0.5 bg-foreground block rounded-full" />
                    <span className="w-6 h-0.5 bg-foreground block rounded-full" />
                </button>
            </div>
        </motion.header>
    );
}
