'use client'

import { motion } from 'framer-motion'

interface MarqueeStripProps {
    items: string[]
    speed?: number
    direction?: 'left' | 'right'
    className?: string
}

export default function MarqueeStrip({
    items,
    speed = 20,
    direction = 'left',
    className,
}: MarqueeStripProps) {
    const marqueeVariants = {
        animate: {
            x: direction === 'left' ? [0, -1000] : [-1000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop' as const,
                    duration: speed,
                    ease: 'linear' as any,
                },
            },
        },
    }

    return (
        <div className={`overflow-hidden py-4 bg-grey-50 border-y border-grey-100 flex whitespace-nowrap ${className}`}>
            <motion.div
                className="flex gap-12 items-center"
                variants={marqueeVariants}
                animate="animate"
            >
                {/* Render items twice for seamless loop */}
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-12">
                        <span className="text-xl md:text-2xl font-display font-medium text-grey-400 uppercase tracking-widest leading-none">
                            {item}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-primary/40" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
