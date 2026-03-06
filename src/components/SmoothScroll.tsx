'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        // Respect user preference for reduced motion
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        const lenis = new Lenis({
            duration: prefersReduced ? 0 : 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        })

        lenisRef.current = lenis

        // Connect Lenis to GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)

        const tick = (time: number) => {
            lenis.raf(time * 1000)
        }

        gsap.ticker.add(tick)

        gsap.ticker.lagSmoothing(0)

        return () => {
            gsap.ticker.remove(tick)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}
