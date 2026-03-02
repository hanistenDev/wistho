'use client'

import { motion, useReducedMotion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'
import { useEffect, useRef, useCallback } from 'react'

const CYCLE = 8

function CountUp({ target, suffix, duration }: { target: number; suffix: string; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const val = useMotionValue(0)
  const display = useTransform(val, (v) => `+${Math.round(v)}${suffix}`)
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearAll = useCallback(() => {
    timeouts.current.forEach(clearTimeout)
    timeouts.current = []
  }, [])

  useEffect(() => {
    let cancelled = false

    const run = () => {
      if (cancelled) return
      val.set(0)
      animate(val, target, { duration, ease: [0.16, 1, 0.3, 1] })

      const t1 = setTimeout(() => {
        if (cancelled) return
        animate(val, 0, { duration: 1.8, ease: [0.4, 0, 1, 1] })
        const t2 = setTimeout(() => { if (!cancelled) run() }, 2200)
        timeouts.current.push(t2)
      }, (CYCLE - 2.2) * 1000)
      timeouts.current.push(t1)
    }

    run()
    return () => { cancelled = true; clearAll() }
  }, [val, target, duration, clearAll])

  useEffect(() => {
    return display.on('change', (v) => {
      if (ref.current) ref.current.textContent = v
    })
  }, [display])

  return <span ref={ref}>+0%</span>
}

const curvePath = 'M4,54 C18,52 30,47 44,43 C58,39 66,41 80,36 C94,30 104,24 118,18 C132,12 142,9 156,6'
const curveArea = `${curvePath} L156,60 L4,60 Z`

function PerformancePanel() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <div className="relative w-full aspect-[4/3] max-w-[420px] mx-auto select-none rounded-[20px] bg-[#0d1017] p-10 flex items-center justify-center" aria-hidden="true">
        <span className="text-5xl font-semibold text-white/85 tracking-tighter">+32%</span>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-[4/3] max-w-[420px] mx-auto select-none" aria-hidden="true">
      <div className="absolute inset-0 rounded-[20px] overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.55),0_4px_16px_rgba(0,0,0,0.3)]">
        {/* Background - slightly lighter than page */}
        <div className="absolute inset-0 bg-[#0d1017]" />
        {/* Border */}
        <div className="absolute inset-0 rounded-[20px] border border-white/[0.06]" />
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
            backgroundSize: '150px 150px',
          }}
        />
        {/* Radial glow upper right */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/[0.04] blur-3xl" />

        {/* Growth curve */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 160 65" className="absolute bottom-0 right-0 w-[65%] h-[45%] mr-8 mb-8" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curve-stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(56,189,248,0.02)" />
                <stop offset="50%" stopColor="rgba(56,189,248,0.1)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0.22)" />
              </linearGradient>
              <linearGradient id="curve-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(56,189,248,0.04)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0)" />
              </linearGradient>
              <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(56,189,248,0.5)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0)" />
              </radialGradient>
            </defs>
            {/* Animated reveal */}
            <motion.path
              d={curveArea}
              fill="url(#curve-fill)"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)', 'inset(0 100% 0 0)'] }}
              transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.28, 0.75, 0.92], ease: 'easeInOut' }}
            />
            <motion.path
              d={curvePath}
              fill="none"
              stroke="url(#curve-stroke)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)', 'inset(0 100% 0 0)'] }}
              transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.28, 0.75, 0.92], ease: 'easeInOut' }}
            />
            {/* Glow dot at endpoint */}
            <motion.circle
              cx="156" cy="6" r="8"
              fill="url(#dot-glow)"
              animate={{ opacity: [0, 0, 0.7, 0.7, 0] }}
              transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.24, 0.32, 0.72, 0.84], ease: 'easeInOut' }}
            />
            <motion.circle
              cx="156" cy="6" r="1.8"
              fill="rgba(56,189,248,0.6)"
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.24, 0.32, 0.72, 0.84], ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* Content layer */}
        <div className="relative h-full flex flex-col justify-between p-10">
          {/* PERFORMANCE label */}
          <motion.span
            className="text-[9px] font-medium text-white/40 uppercase tracking-[0.3em] leading-none"
            animate={{ opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.06, 0.78, 0.92], ease: 'easeInOut' }}
          >
            Performance
          </motion.span>

          {/* +32% */}
          <div className="flex-1 flex items-center -mt-2">
            <div className="relative">
              <motion.div
                className="absolute -inset-8 rounded-full blur-[40px]"
                animate={{
                  backgroundColor: [
                    'rgba(56,189,248,0)',
                    'rgba(56,189,248,0.05)',
                    'rgba(56,189,248,0.12)',
                    'rgba(56,189,248,0.08)',
                    'rgba(56,189,248,0)',
                  ],
                }}
                transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.08, 0.28, 0.6, 0.88], ease: 'easeInOut' }}
              />
              <div className="relative text-[3.8rem] font-semibold text-white/90 tracking-[-0.04em] leading-none">
                <CountUp target={32} suffix="%" duration={1.8} />
              </div>
            </div>
          </div>

          {/* Metrics */}
          <motion.div
            className="space-y-2.5"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.14, 0.28, 0.76, 0.9], ease: 'easeInOut' }}
          >
            <div className="flex items-center">
              <span className="text-[11px] text-white/30 tracking-wide">Load Time</span>
              <span className="text-[11px] text-white/15 mx-2">—</span>
              <span className="text-[11px] font-medium text-white/60 tabular-nums">0.9s</span>
            </div>
            <div className="flex items-center">
              <span className="text-[11px] text-white/30 tracking-wide">Fully Responsive</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useApp()

  const handleScrollToContact = () => {
    const element = document.querySelector('#kontakt')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projekte')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background dark:from-primary-dark dark:via-primary-dark dark:to-primary-dark" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-accent/10 blur-3xl dark:bg-accent/20" />
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-[0.22em]"
            >
              {t.hero.label}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-dark dark:text-white leading-[1.12] tracking-tight"
            >
              {t.hero.title}
              <br />
              <span className="text-primary-dark/80 dark:text-white/80">
                {t.hero.titleLine2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-primary-dark/60 dark:text-white/60 leading-relaxed max-w-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleScrollToContact}
                className="px-7 py-3.5 bg-primary-dark dark:bg-white text-white dark:text-primary-dark rounded-full font-medium hover:bg-primary-dark/90 dark:hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {t.hero.ctaPrimary}
              </button>
              <button
                onClick={handleScrollToProjects}
                className="px-7 py-3.5 border border-primary-dark/25 dark:border-white/30 text-primary-dark dark:text-white rounded-full font-medium hover:bg-primary-dark hover:text-white dark:hover:bg-white dark:hover:text-primary-dark transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {t.hero.ctaSecondary}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <div className="flex items-center gap-2 text-sm text-primary-dark/70 dark:text-white/70 px-3.5 py-2 rounded-full border border-primary-dark/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-sm">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t.hero.trustBadges.quality}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-dark/70 dark:text-white/70 px-3.5 py-2 rounded-full border border-primary-dark/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-sm">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{t.hero.trustBadges.speed}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-dark/70 dark:text-white/70 px-3.5 py-2 rounded-full border border-primary-dark/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-sm">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t.hero.trustBadges.mobile}</span>
              </div>
            </motion.div>

            {t.hero.footer && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm text-primary-dark/60 dark:text-white/60 pt-1"
              >
                {t.hero.footer}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block relative"
          >
            <PerformancePanel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
