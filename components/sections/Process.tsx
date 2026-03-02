'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'

export default function Process() {
  const { t } = useApp()
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-primary-dark dark:text-white mb-4 tracking-tight">
              {t.process.title}
            </h2>
            {t.process.subtitle && (
              <p className="text-lg sm:text-xl text-primary-dark/70 dark:text-white/70 max-w-2xl mx-auto">
                {t.process.subtitle}
              </p>
            )}
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-primary-dark/20 dark:via-white/20 to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                className="relative h-full"
              >
                <div className="bg-white dark:bg-primary-dark/50 rounded-2xl p-6 border border-primary-dark/10 dark:border-white/10 hover:shadow-lg transition-all relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary-dark dark:bg-white text-white dark:text-primary-dark text-sm font-semibold flex items-center justify-center mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-primary-dark/70 dark:text-white/70 leading-relaxed text-[15px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
          </div>
        </div>

        {/* CTA Block nach Process */}
        <AnimatedSection delay={0.5}>
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#kontakt"
                className="px-6 py-3 bg-primary-dark dark:bg-white text-white dark:text-primary-dark rounded-full font-medium hover:bg-primary-dark/90 dark:hover:bg-white/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t.process.ctaPrimary}
              </a>
              <a
                href="#projekte"
                className="px-6 py-3 border-2 border-primary-dark dark:border-white text-primary-dark dark:text-white rounded-full font-medium hover:bg-primary-dark dark:hover:bg-white hover:text-white dark:hover:text-primary-dark transition-all duration-200"
              >
                {t.process.ctaSecondary}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

