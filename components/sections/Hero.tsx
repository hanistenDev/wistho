'use client'

import { motion } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'

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
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-medium text-accent uppercase tracking-wider"
            >
              {t.hero.label}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-white leading-tight"
            >
              {t.hero.title}
              <br />
              {t.hero.titleLine2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-primary-dark/70 dark:text-white/70 leading-relaxed max-w-xl"
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
                className="px-6 py-3 bg-primary-dark dark:bg-white text-white dark:text-primary-dark rounded-full font-medium hover:bg-primary-dark/90 dark:hover:bg-white/90 transition-colors"
              >
                {t.hero.ctaPrimary}
              </button>
              <button
                onClick={handleScrollToProjects}
                className="px-6 py-3 border-2 border-primary-dark dark:border-white text-primary-dark dark:text-white rounded-full font-medium hover:bg-primary-dark dark:hover:bg-white hover:text-white dark:hover:text-primary-dark transition-colors"
              >
                {t.hero.ctaSecondary}
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-primary-dark/70 dark:text-white/70">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Schweizer Qualität</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-dark/70 dark:text-white/70">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Schnelle Ladezeiten</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-dark/70 dark:text-white/70">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Mobile-optimiert</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-primary-dark/60 dark:text-white/60 pt-2"
            >
              {t.hero.footer}
            </motion.div>
          </div>

          {/* Animated Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square">
              {/* Card Stack Animation */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 dark:from-accent/30 dark:to-accent/10 rounded-2xl border border-accent/20 dark:border-accent/30"
                  style={{
                    transform: `translate(${index * 20}px, ${index * 20}px) rotate(${index * 5}deg)`,
                    zIndex: 3 - index,
                  }}
                >
                  <div className="p-6 h-full flex flex-col gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent/30" />
                      <div className="w-3 h-3 rounded-full bg-accent/20" />
                      <div className="w-3 h-3 rounded-full bg-accent/10" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-accent/20 rounded w-3/4" />
                      <div className="h-4 bg-accent/10 rounded w-1/2" />
                      <div className="h-4 bg-accent/10 rounded w-2/3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
