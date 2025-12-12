'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { useApp } from '@/contexts/AppContext'

export default function About() {
  const { t } = useApp()

  const stats = [
    { label: t.about.stats.experience, value: '4+' },
    { label: t.about.stats.projects, value: '4+' },
    { label: t.about.stats.commitment, value: '100%' },
  ]

  return (
    <section id="ueber-uns" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-6">
            {t.about.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-lg text-primary-dark/70 dark:text-white/70 leading-relaxed mb-12 max-w-3xl">
            {t.about.description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-primary-dark/50 rounded-2xl p-6 border border-primary-dark/10 dark:border-white/10 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-dark/70 dark:text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
