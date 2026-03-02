'use client'

import { useEffect } from 'react'

export default function Preloader() {
  useEffect(() => {
    const overlay = document.getElementById('preloader-static')
    if (!overlay) return
    const logo = overlay.querySelector('img') as HTMLImageElement | null

    document.body.style.overflow = 'hidden'

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const zoomStartDelay = reducedMotion ? 140 : 980
    const zoomDuration = reducedMotion ? 0 : 0.72
    const overlayFadeDuration = reducedMotion ? 0.12 : 0.58
    const totalDuration = reducedMotion ? 260 : 1820

    const zoomTimer = setTimeout(() => {
      if (logo) {
        logo.style.willChange = 'transform, opacity'
        logo.style.transition = `transform ${zoomDuration}s cubic-bezier(0.22, 1, 0.36, 1), opacity ${zoomDuration}s cubic-bezier(0.22, 1, 0.36, 1)`
        logo.style.transform = reducedMotion ? 'scale(1)' : 'scale(9)'
        logo.style.opacity = reducedMotion ? '1' : '0'
      }

      overlay.style.transition = `opacity ${overlayFadeDuration}s cubic-bezier(0.22, 1, 0.36, 1)`
      overlay.style.opacity = '0'
      overlay.style.pointerEvents = 'none'
    }, zoomStartDelay)

    const finishTimer = setTimeout(() => {
      document.body.style.overflow = ''
      overlay.style.display = 'none'
      document.documentElement.setAttribute('data-preloader', 'reveal')
      setTimeout(() => {
        document.documentElement.removeAttribute('data-preloader')
      }, 350)
    }, totalDuration)

    return () => {
      clearTimeout(zoomTimer)
      clearTimeout(finishTimer)
      document.body.style.overflow = ''
    }
  }, [])

  return null
}
