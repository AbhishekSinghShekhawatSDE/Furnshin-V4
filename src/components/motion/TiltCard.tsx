'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
    children: React.ReactNode
    className?: string
    maxTilt?: number
}

export default function TiltCard({
    children,
    className,
    maxTilt = 8,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [glowX, setGlowX] = useState(50)
    const [glowY, setGlowY] = useState(50)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return

        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height

        setRotateX((y - 0.5) * -maxTilt)
        setRotateY((x - 0.5) * maxTilt)
        setGlowX(x * 100)
        setGlowY(y * 100)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            className={`relative ${className}`}
        >
            {/* Subtle light glare overlay */}
            <div
                className="absolute inset-0 rounded-inherit pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
                    borderRadius: 'inherit',
                }}
            />
            {children}
        </motion.div>
    )
}
