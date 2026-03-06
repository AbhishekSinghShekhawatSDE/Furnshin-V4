'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface StaggerContainerProps {
    children: React.ReactNode
    staggerDelay?: number
    className?: string
}

const containerVariants = (staggerDelay: number) => ({
    hidden: {},
    visible: {
        transition: { staggerChildren: staggerDelay }
    }
})

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }
    }
}

export function StaggerContainer({ children, staggerDelay = 0.1, className }: StaggerContainerProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={containerVariants(staggerDelay)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    )
}
