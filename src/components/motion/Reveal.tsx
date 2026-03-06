'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
    children: React.ReactNode
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    distance?: number
    duration?: number
    once?: boolean
    className?: string
}

export default function Reveal({
    children,
    delay = 0,
    direction = 'up',
    distance,
    duration = 0.7,
    once = true,
    className,
}: RevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: '-10% 0px' })

    const actualDistance = distance ?? (direction === 'none' ? 0 : 40)

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                x: direction === 'left' || direction === 'right' ? (direction === 'left' ? actualDistance : -actualDistance) : 0,
                y: direction === 'up' || direction === 'down' ? (direction === 'up' ? actualDistance : -actualDistance) : 0,
            }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] as any }}
        >
            {children}
        </motion.div>
    )
}
