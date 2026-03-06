'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const x = useSpring(cursorX, springConfig)
    const y = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                ['A', 'BUTTON'].includes(target.tagName) ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [cursorX, cursorY, isVisible])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary z-[9999] pointer-events-none hidden lg:block"
                style={{
                    x,
                    y,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'rgba(190, 139, 92, 0.1)' : 'transparent',
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary z-[9999] pointer-events-none hidden lg:block"
                style={{
                    x,
                    y,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    )
}
