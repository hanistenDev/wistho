'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'

export default function About() {
  const { t } = useApp()

  const paragraphs = t.about.description.split('\n\n')

  return (
    <section id="ueber-uns" className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-semibold text-primary-dark dark:text-white mb-8 tracking-tight">
            {t.about.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-5 mb-20 max-w-3xl">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed ${
                  i === 0
                    ? 'text-primary-dark/85 dark:text-white/85 font-medium'
                    : 'text-primary-dark/65 dark:text-white/65'
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary-dark dark:text-white mb-10 tracking-tight">
            {t.about.workTitle}
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-7">
          {t.about.workItems.map((item, index) => (
            <AnimatedSection key={index} delay={0.25 + index * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-[18px] bg-white/60 dark:bg-white/[0.03] px-8 py-9 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.15)] border border-primary-dark/[0.04] dark:border-white/[0.06] hover:border-primary-dark/[0.08] dark:hover:border-white/[0.1] transition-all duration-300"
              >
                <h4 className="text-[17px] font-semibold text-primary-dark dark:text-white mb-3 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[15px] text-primary-dark/55 dark:text-white/55 leading-[1.75]">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
