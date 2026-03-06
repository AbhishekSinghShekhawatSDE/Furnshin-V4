"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Camera, Info, Phone, Calculator } from "lucide-react";
import Link from "next/link";

const menuItems = [
    { icon: Home, label: "Lobby", href: "/" },
    { icon: Briefcase, label: "Services", href: "/services" },
    { icon: Camera, label: "Archives", href: "/portfolio" },
    { icon: Calculator, label: "Estimator", href: "/pricing" },
    { icon: Info, label: "The Origin", href: "/about" },
    { icon: Phone, label: "Transmission", href: "/contact" },
];

export default function OrbitalMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-display font-black tracking-tighter text-white z-50">
                    FURN<span className="text-primary italic">SHIN</span>
                </Link>

                {/* The Orb Trigger */}
                <div className="relative group z-50">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-14 h-14 rounded-full glass flex items-center justify-center text-white border-accent/20 hover:border-accent-neon/50 transition-colors shadow-lg ${isOpen ? 'bg-primary border-primary' : ''}`}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Holographic Ring */}
                    {!isOpen && (
                        <div className="absolute inset-[-4px] border border-accent-neon/20 rounded-full animate-pulse pointer-events-none" />
                    )}
                </div>

                {/* Orbital Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-background/90 backdrop-blur-xl z-40 flex items-center justify-center overflow-hidden"
                        >
                            {/* Background Geometric Grid */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#A62639_1px,transparent_1px)] [background-size:40px_40px]" />

                            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                                {/* Central Glow */}
                                <div className="absolute inset-0 m-auto w-32 h-32 bg-primary/30 blur-3xl rounded-full" />

                                {menuItems.map((item, index) => {
                                    const angle = (index / menuItems.length) * 2 * Math.PI - Math.PI / 2;
                                    const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 130 : 220;
                                    const x = Math.cos(angle) * radius;
                                    const y = Math.sin(angle) * radius;

                                    return (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: 0, y: 0 }}
                                            animate={{ opacity: 1, x, y }}
                                            exit={{ opacity: 0, x: 0, y: 0 }}
                                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                            className="absolute inset-0 m-auto w-24 h-24"
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex flex-col items-center justify-center gap-2 group"
                                            >
                                                <div className="w-16 h-16 rounded-full glass border-accent/20 group-hover:border-accent-neon group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center text-foreground group-hover:text-accent-neon">
                                                    <item.icon size={28} />
                                                </div>
                                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/60 group-hover:text-white transition-colors">
                                                    {item.label}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
