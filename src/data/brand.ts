// src/data/brand.ts

import { IMAGES } from "./images";

export const BRAND = {
    name: "Furnshin",
    tagline: "Designing Spaces That Speaks",
    description: "Factory-direct custom furniture, interiors, and manufacturing solutions based in Jaipur. 14+ years of craftsmanship across 500+ projects.",
    founded: "2010",
    yearsExperience: 14,
    projectsCompleted: 500,
    domain: "https://www.furnshin.com",

    contact: {
        phone: "+91 98765 43210",       // UPDATE WITH REAL NUMBER
        whatsapp: "+919876543210",       // UPDATE WITH REAL NUMBER (no spaces/dashes)
        email: "hello@furnshin.com",    // UPDATE WITH REAL EMAIL
        address: "20,1 Apartment in Ananda Mangalam, RIICO Kanta, Jaipur, Rajasthan",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        mapEmbedUrl: "https://maps.google.com/maps?q=Ananda+Mangalam,+RIICO+Kanta,+Jaipur&t=&z=14&ie=UTF8&iwloc=&output=embed",
        googleMapsLink: "https://maps.google.com/?q=Ananda+Mangalam,+RIICO+Kanta,+Jaipur",
    },

    social: {
        instagram: "https://www.instagram.com/furnshin",   // UPDATE IF DIFFERENT
        facebook: "https://www.facebook.com/furnshin",     // UPDATE IF DIFFERENT
        youtube: "https://www.youtube.com/@furnshin",      // UPDATE IF DIFFERENT
        linkedin: "https://www.linkedin.com/company/furnshin", // UPDATE IF DIFFERENT
        twitter: "@furnshin",
        whatsappMessage: "Hi Furnshin! I'd like to discuss a project.",
    },

    services: [
        {
            id: "glass-works",
            title: "Glass Works",
            shortDescription: "Custom glass partitions, shower enclosures, decorative glass, and glazing solutions.",
            icon: "GlassWater",
            href: "/services/glass-works",
        },
        {
            id: "custom-furniture",
            title: "Custom Furniture",
            shortDescription: "Modular kitchens, wardrobes, beds, sofas, and complete home furnishing — built in-house.",
            icon: "Sofa",
            href: "/services/custom-furniture",
        },
        {
            id: "aluminum-solutions",
            title: "Aluminum Solutions",
            shortDescription: "Aluminum windows, doors, sliding systems, and facade work with precision installation.",
            icon: "Grid",
            href: "/services/aluminum-solutions",
        },
        {
            id: "iron-metal-works",
            title: "Iron & Metal Works",
            shortDescription: "Custom iron gates, MS railings, safety grills, and structural metalwork.",
            icon: "Wrench",
            href: "/services/iron-metal-works",
        },
    ],

    stats: [
        { value: "14+", label: "Years Experience" },
        { value: "500+", label: "Projects Delivered" },
        { value: "4", label: "Core Services" },
        { value: "100%", label: "Factory-Direct" },
    ],

    process: [
        {
            step: "01",
            title: "Design Consultation",
            description: "We visit your space, understand your requirements, and present design options within 48 hours.",
        },
        {
            step: "02",
            title: "Material Selection",
            description: "Choose from our curated range of materials. We guide you on quality, finish, and durability.",
        },
        {
            step: "03",
            title: "Factory Manufacturing",
            description: "Every piece is built in our Jaipur facility. No outsourcing. Full quality control.",
        },
        {
            step: "04",
            title: "Installation & Handover",
            description: "Our trained team installs everything. We only hand over when you are fully satisfied.",
        },
    ],

    testimonials: [
        {
            id: 1,
            name: "Rajesh Sharma",
            location: "Vaishali Nagar, Jaipur",
            project: "3BHK Complete Interior",
            quote: "Furnshin delivered exactly what they promised. The modular kitchen quality is outstanding and the team was professional throughout. Best decision we made for our new home.",
            rating: 5,
            avatar: IMAGES.testimonials.t1,
        },
        {
            id: 2,
            name: "Priya Agarwal",
            location: "C-Scheme, Jaipur",
            project: "Office Glass Partitions",
            quote: "Our office looks completely transformed. The glass partition work is clean, precise, and was completed ahead of schedule. Very happy with Furnshin.",
            rating: 5,
            avatar: IMAGES.testimonials.t2,
        },
        {
            id: 3,
            name: "Amit Gupta",
            location: "Jagatpura, Jaipur",
            project: "Iron Gate & Railings",
            quote: "The iron gate and staircase railings they installed at our villa are exactly what we envisioned. Solid build quality and great finishing.",
            rating: 5,
            avatar: IMAGES.testimonials.t3,
        },
    ],

    seo: {
        defaultTitle: "Furnshin | Factory-Direct Custom Furniture & Interiors in Jaipur",
        defaultDescription: "Premium custom furniture, glass works, aluminum solutions, and metal fabrication in Jaipur. 14+ years, 500+ projects. Factory-direct quality, no middlemen.",
        keywords: [
            "custom furniture jaipur",
            "modular kitchen jaipur",
            "interior design jaipur",
            "glass partition jaipur",
            "aluminum windows jaipur",
            "iron gate jaipur",
            "furniture manufacturer jaipur",
            "furnshin",
        ],
    },
};
