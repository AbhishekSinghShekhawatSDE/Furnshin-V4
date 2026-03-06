'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface SplitTextProps {
    text: string | string[]
    className?: string
    delay?: number
}

export default function SplitText({ text, className, delay = 0 }: SplitTextProps) {
    const containerRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const chars = containerRef.current.querySelectorAll('.char')

        gsap.fromTo(chars,
            { opacity: 0, y: 30, rotateX: -90 },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.02,
                delay,
                ease: 'power4.out'
            }
        )
    }, [delay])

    const renderText = () => {
        const content = Array.isArray(text) ? text.join(' ') : text
        return content.split('').map((char, i) => (
            <span
                key={i}
                className="char inline-block"
                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
                {char}
            </span>
        ))
    }

    return (
        <h1 ref={containerRef} className={className} style={{ perspective: '1000px' }}>
            {renderText()}
        </h1>
    )
}
