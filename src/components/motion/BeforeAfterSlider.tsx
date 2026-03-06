'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BeforeAfterSliderProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
    className?: string
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
    className,
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = 'touches' in e ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left
        const position = Math.max(0, Math.min(100, (x / rect.width) * 100))
        setSliderPosition(position)
    }

    return (
        <div
            ref={containerRef}
            className={`relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden cursor-ew-resize select-none border border-grey-200 shadow-2xl ${className}`}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full bg-grey-800 flex flex-col items-center justify-center text-white">
                <Image
                    src={afterImage}
                    alt="After transformation"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-8 right-8 z-10">
                    <span className="text-white font-display text-2xl md:text-3xl drop-shadow-lg">{afterLabel}</span>
                </div>
            </div>

            {/* Before Image (Foreground, Clipped) */}
            <div
                className="absolute inset-0 w-full h-full bg-grey-100 flex flex-col items-center justify-center pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt="Before transformation"
                    fill
                    className="object-cover grayscale"
                />
                <div className="absolute bottom-8 left-8 z-10">
                    <span className="text-white font-display text-2xl md:text-3xl drop-shadow-lg">{beforeLabel}</span>
                </div>
            </div>

            {/* Slider Handle */}
            <motion.div
                className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-10"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.3)] text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18-6-6 6-6" />
                        <path d="m15 18 6-6-6-6" />
                    </svg>
                </div>
            </motion.div>
        </div>
    )
}
