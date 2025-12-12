'use client'

import { useEffect, useRef, useState } from 'react'

type UseInViewOnceOptions = {
  rootMargin?: string
  threshold?: number
  triggerOnce?: boolean
}

export function useInViewOnce(options: UseInViewOnceOptions = {}) {
  const {
    rootMargin = '0px 0px -15% 0px',
    threshold = 0.2,
    triggerOnce = true,
  } = options

  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Wenn bereits getriggert wurde und triggerOnce=true, nichts tun
    if (hasTriggered.current && triggerOnce) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          hasTriggered.current = true
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin, threshold, triggerOnce])

  return { ref, isInView }
}

