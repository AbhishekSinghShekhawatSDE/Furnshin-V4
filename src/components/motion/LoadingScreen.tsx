'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
            sessionStorage.setItem('hasLoadedBefore', 'true')
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-foreground text-white"
                >
                    <div className="relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: 'easeInOut' }}
                            className="absolute bottom-0 left-0 h-0.5 bg-primary"
                        />
                        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-4 px-8 overflow-hidden">
                            <motion.span
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="block"
                            >
                                FURNSHIN
                            </motion.span>
                        </h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-grey-400 text-sm uppercase tracking-[0.3em]"
                    >
                        Engineering Luxury
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
