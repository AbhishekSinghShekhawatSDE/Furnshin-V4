'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
    children: React.ReactNode
    offset?: number
    className?: string
}

export default function ParallaxSection({
    children,
    offset = 50,
    className,
}: ParallaxSectionProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                {children}
            </motion.div>
        </div>
    )
}
