'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  yOffset?: number
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  yOffset = 14,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' })
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)

    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const motionDelay = reducedMotion ? 0 : delay * 0.55
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: yOffset }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : reducedMotion
            ? { opacity: 0 }
            : { opacity: 0, y: yOffset }
      }
      transition={{
        opacity: { duration: reducedMotion ? 0.2 : 0.32, delay: motionDelay, ease },
        y: { duration: reducedMotion ? 0.2 : 0.44, delay: motionDelay, ease },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
