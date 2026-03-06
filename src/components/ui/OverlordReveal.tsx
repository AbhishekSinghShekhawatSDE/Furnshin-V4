"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export default function OverlordReveal({
    children,
    delay = 0,
    direction = "up"
}: RevealProps) {
    const directions = {
        up: { y: 100 },
        down: { y: -100 },
        left: { x: 100 },
        right: { x: -100 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
                scale: 0.95
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            {children}
        </motion.div>
    );
}
