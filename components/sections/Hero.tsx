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
              className="text-lg text-primary-dark/70 dark:text-white/70 leading-relaxed max-w-prose"
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
                className="px-6 py-3 bg-primary-dark dark:bg-white text-white dark:text-primary-dark rounded-full font-medium hover:bg-primary-dark/90 dark:hover:bg-white/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t.hero.ctaPrimary}
              </button>
              <button
                onClick={handleScrollToProjects}
                className="px-6 py-3 border-2 border-primary-dark dark:border-white text-primary-dark dark:text-white rounded-full font-medium hover:bg-primary-dark dark:hover:bg-white hover:text-white dark:hover:text-primary-dark transition-all duration-200"
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
                <span>{t.hero.trustBadges.quality}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-dark/70 dark:text-white/70">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{t.hero.trustBadges.speed}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-dark/70 dark:text-white/70">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>{t.hero.trustBadges.mobile}</span>
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

          {/* Animated Visual Element - Moderne Website-Oberfläche */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              {/* Glow-Effekt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
                className="absolute inset-0 bg-accent/10 dark:bg-accent/15 rounded-3xl blur-2xl -z-10"
              />
              
              {/* Website-Mockup Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ 
                  opacity: [0, 1, 1, 0, 0],
                  y: [40, 0, 0, 0, 0],
                  scale: [0.96, 1, 1, 0.96, 0.96]
                }}
                transition={{ 
                  duration: 8,
                  delay: 0,
                  ease: [0.4, 0, 0.2, 1],
                  repeat: Infinity,
                  repeatDelay: 2,
                  times: [0, 0.2, 0.5, 0.7, 1]
                }}
                className="absolute inset-0 rounded-3xl"
                style={{
                  pointerEvents: 'none',
                }}
              >
                <motion.div
                  animate={{
                    opacity: [0, 1, 1, 0, 0],
                  }}
                  transition={{
                    duration: 5,
                    delay: 0,
                    ease: [0.4, 0, 0.2, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                    times: [0, 0.1, 0.55, 0.8, 1]
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-accent/25 via-accent/20 to-accent/15 dark:from-accent/35 dark:via-accent/28 dark:to-accent/20 rounded-3xl border border-accent/30 dark:border-accent/40 shadow-2xl backdrop-blur-md"
                  style={{
                    boxShadow: '0 20px 60px -15px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)',
                    pointerEvents: 'none',
                    willChange: 'opacity',
                  }}
                />
                <motion.div 
                  animate={{
                    opacity: [0, 1, 1, 0, 0],
                  }}
                  transition={{
                    duration: 5,
                    delay: 0,
                    ease: [0.4, 0, 0.2, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                    times: [0, 0.1, 0.55, 0.8, 1]
                  }}
                  className="relative p-8 h-full flex flex-col gap-6 z-10"
                >
                  {/* Header Bar */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0, 0],
                      x: [-15, 0, 0, 0, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      delay: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                      repeat: Infinity,
                      repeatDelay: 3,
                      times: [0, 0.1, 0.55, 0.8, 1]
                    }}
                    className="flex items-center justify-between pb-5 border-b border-white/10 dark:border-white/15"
                  >
                    <div className="flex gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-white/50 dark:bg-white/60" />
                      <div className="w-3 h-3 rounded-full bg-white/40 dark:bg-white/50" />
                      <div className="w-3 h-3 rounded-full bg-white/30 dark:bg-white/40" />
                    </div>
                    <div className="h-3 bg-white/30 dark:bg-white/40 rounded-full w-32" />
                  </motion.div>

                  {/* Content Lines */}
                  <div className="space-y-4 flex-1 pt-3">
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0, 0],
                        width: ['0%', '88%', '88%', '0%', '0%']
                      }}
                      transition={{ 
                        duration: 5,
                        delay: 0.6,
                        ease: [0.4, 0, 0.2, 1],
                        repeat: Infinity,
                        repeatDelay: 3,
                        times: [0, 0.1, 0.55, 0.8, 1]
                      }}
                      className="h-4 bg-white/35 dark:bg-white/45 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0, 0],
                        width: ['0%', '72%', '72%', '0%', '0%']
                      }}
                      transition={{ 
                        duration: 5,
                        delay: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                        repeat: Infinity,
                        repeatDelay: 3,
                        times: [0, 0.1, 0.55, 0.8, 1]
                      }}
                      className="h-4 bg-white/30 dark:bg-white/40 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0, 0],
                        width: ['0%', '65%', '65%', '0%', '0%']
                      }}
                      transition={{ 
                        duration: 5,
                        delay: 1,
                        ease: [0.4, 0, 0.2, 1],
                        repeat: Infinity,
                        repeatDelay: 3,
                        times: [0, 0.1, 0.55, 0.8, 1]
                      }}
                      className="h-4 bg-white/25 dark:bg-white/35 rounded-full"
                    />
                    <div className="pt-4 space-y-3">
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ 
                          opacity: [0, 1, 1, 0, 0],
                          width: ['0%', '78%', '78%', '0%', '0%']
                        }}
                        transition={{ 
                          duration: 5,
                          delay: 1.2,
                          ease: [0.4, 0, 0.2, 1],
                          repeat: Infinity,
                          repeatDelay: 3,
                          times: [0, 0.1, 0.55, 0.8, 1]
                        }}
                        className="h-3 bg-white/20 dark:bg-white/30 rounded-full"
                      />
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ 
                          opacity: [0, 1, 1, 0, 0],
                          width: ['0%', '68%', '68%', '0%', '0%']
                        }}
                        transition={{ 
                          duration: 5,
                          delay: 1.4,
                          ease: [0.4, 0, 0.2, 1],
                          repeat: Infinity,
                          repeatDelay: 3,
                          times: [0, 0.1, 0.55, 0.8, 1]
                        }}
                        className="h-3 bg-white/18 dark:bg-white/28 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0, 0],
                      y: [15, 0, 0, 0, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      delay: 1.6,
                      ease: [0.4, 0, 0.2, 1],
                      repeat: Infinity,
                      repeatDelay: 3,
                      times: [0, 0.1, 0.55, 0.8, 1]
                    }}
                    className="pt-3"
                  >
                    <div className="h-12 bg-white/40 dark:bg-white/50 rounded-xl w-40 shadow-lg" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
