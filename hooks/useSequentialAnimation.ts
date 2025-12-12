'use client'

import { useEffect, useRef, useState } from 'react'

type UseSequentialAnimationOptions = {
  itemCount: number
  enterThreshold?: number // Default 0.30
  exitThreshold?: number // Default 0.10
  delayBetween?: number // Default 400ms
}

export function useSequentialAnimation({
  itemCount,
  enterThreshold = 0.3,
  exitThreshold = 0.1,
  delayBetween = 400,
}: UseSequentialAnimationOptions) {
  // Starte mit allen Projekten versteckt - Animation wird immer ausgelöst
  const [visibleCount, setVisibleCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])
  const visibleCountRef = useRef(0)
  const hasAnimatedRef = useRef(false)
  const isInitializedRef = useRef(false)
  const lastScrollY = useRef(0)
  const scrollDirectionRef = useRef<'down' | 'up'>('down')

  // Fallback: Stelle sicher, dass Projekte nach kurzer Zeit sichtbar sind, falls Animation nicht triggert
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (visibleCountRef.current === 0 && !hasAnimatedRef.current) {
        // Wenn nach 1000ms noch keine Animation getriggert wurde, starte sie langsam (von oben nach unten)
        hasAnimatedRef.current = true
        isInitializedRef.current = true
        // Fallback: Erstes Projekt schnell (600ms), dann nacheinander einzeln (1000ms)
        for (let i = 0; i < itemCount; i++) {
          const delay = i === 0 ? 600 : 600 + i * 1000
          const timeout = setTimeout(() => {
            setVisibleCount((prev) => {
              const newCount = Math.max(prev, i + 1)
              visibleCountRef.current = newCount
              return newCount
            })
          }, delay)
          timeoutRefs.current.push(timeout)
        }
      }
    }, 1000)

    return () => clearTimeout(safetyTimeout)
  }, [itemCount, delayBetween])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Scroll-Richtung tracken
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) {
        scrollDirectionRef.current = 'down'
      } else if (currentScrollY < lastScrollY.current) {
        scrollDirectionRef.current = 'up'
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Für mobile Geräte: niedrigeren Threshold und rootMargin für früheres Triggern
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const adjustedEnterThreshold = isMobile ? 0.05 : 0.15 // Noch niedriger für bessere Erkennung
    const rootMargin = isMobile ? '0px 0px -10% 0px' : '0px 0px -10% 0px'

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio
        const isIntersecting = entry.isIntersecting

        // Enter: Section wird sichtbar (angepasst für Mobile) - nur einmal animieren
        if ((isIntersecting || ratio >= adjustedEnterThreshold) && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true
          isInitializedRef.current = true

          // Bestimme Geschwindigkeit basierend auf Scroll-Richtung
          const isScrollingDown = scrollDirectionRef.current === 'down'
          
          // Sequenzielle Animation starten
          for (let i = 0; i < itemCount; i++) {
            let delay: number
            if (isScrollingDown) {
              // Von oben nach unten: Erstes Projekt schnell (600ms), dann nacheinander einzeln (1000ms)
              delay = i === 0 ? 600 : 600 + i * 1000
            } else {
              // Von unten nach oben: Schnell (400ms)
              delay = i * 400
            }
            
            const timeout = setTimeout(() => {
              setVisibleCount((prev) => {
                const newCount = Math.max(prev, i + 1)
                visibleCountRef.current = newCount
                return newCount
              })
            }, delay)
            timeoutRefs.current.push(timeout)
          }
        }

        // Exit: Section wird zu <10% sichtbar -> Reset für Re-Animation
        if (ratio < exitThreshold && hasAnimatedRef.current) {
          // Cleanup timeouts
          timeoutRefs.current.forEach((timeout) => clearTimeout(timeout))
          timeoutRefs.current = []

          // Reset für nächste Animation
          setVisibleCount(0)
          visibleCountRef.current = 0
          hasAnimatedRef.current = false
          isInitializedRef.current = false
        }
      },
      {
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.5, 0.7, 1.0],
        rootMargin,
      }
    )

    observer.observe(element)

    // Prüfe sofort, ob Element bereits sichtbar ist
    const checkInitialVisibility = () => {
      if (isInitializedRef.current) return
      
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const elementTop = rect.top
      const elementBottom = rect.bottom
      const elementHeight = rect.height
      
      // Wenn Element bereits sichtbar ist und noch nicht animiert wurde
      if (elementTop < viewportHeight && elementBottom > 0 && !hasAnimatedRef.current) {
        const visibleRatio = Math.min(viewportHeight - Math.max(0, elementTop), elementHeight) / elementHeight
        if (visibleRatio >= adjustedEnterThreshold) {
          hasAnimatedRef.current = true
          isInitializedRef.current = true

          // Bestimme Geschwindigkeit basierend auf Scroll-Richtung
          const isScrollingDown = scrollDirectionRef.current === 'down'
          
          // Sequenzielle Animation starten
          for (let i = 0; i < itemCount; i++) {
            let delay: number
            if (isScrollingDown) {
              // Von oben nach unten: Erstes Projekt schnell (600ms), dann nacheinander einzeln (1000ms)
              delay = i === 0 ? 600 : 600 + i * 1000
            } else {
              // Von unten nach oben: Schnell (400ms)
              delay = i * 400
            }
            
            const timeout = setTimeout(() => {
              setVisibleCount((prev) => {
                const newCount = Math.max(prev, i + 1)
                visibleCountRef.current = newCount
                return newCount
              })
            }, delay)
            timeoutRefs.current.push(timeout)
          }
        }
      }
    }

    // Prüfe mehrfach, um sicherzustellen, dass es funktioniert
    // Mit initialer Verzögerung, damit die Animation sichtbar ist, wenn man von oben scrollt
    const initialCheck1 = setTimeout(checkInitialVisibility, 100)
    const initialCheck2 = setTimeout(checkInitialVisibility, 300)
    const initialCheck3 = setTimeout(checkInitialVisibility, 600)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(initialCheck1)
      clearTimeout(initialCheck2)
      clearTimeout(initialCheck3)
      observer.disconnect()
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout))
      timeoutRefs.current = []
    }
  }, [itemCount, enterThreshold, exitThreshold, delayBetween])

  // Check for prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return {
    ref,
    visibleCount,
    prefersReducedMotion,
  }
}

