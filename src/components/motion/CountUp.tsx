'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView, animate } from 'framer-motion'

interface CountUpProps {
    to: number
    duration?: number
    delay?: number
    suffix?: string
    prefix?: string
}

export default function CountUp({
    to,
    duration = 2,
    delay = 0,
    suffix = '',
    prefix = '',
}: CountUpProps) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, to, {
                duration,
                delay,
                ease: 'easeOut',
                onUpdate(value) {
                    setCount(Math.floor(value))
                },
            })
            return () => controls.stop()
        }
        return undefined;
    }, [isInView, to, duration, delay])

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    )
}
