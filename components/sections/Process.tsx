'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Kostenlose Beratung',
    description: 'Wir besprechen Ihre Wünsche, Ziele und Budget. Gemeinsam finden wir die beste Lösung für Ihr Unternehmen.',
  },
  {
    number: '02',
    title: 'Angebot & Planung',
    description: 'Sie erhalten ein transparentes Angebot mit klaren Kosten. Nach Ihrer Zusage planen wir gemeinsam die Umsetzung.',
  },
  {
    number: '03',
    title: 'Design & Entwicklung',
    description: 'Wir erstellen Ihre Website nach modernsten Standards – schnell, sicher und optimiert für alle Geräte.',
  },
  {
    number: '04',
    title: 'Launch & Betreuung',
    description: 'Ihre Website geht online! Wir zeigen Ihnen, wie Sie sie verwalten und sind auch danach für Sie da.',
  },
]

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-4">
              So funktioniert's
            </h2>
            <p className="text-lg text-primary-dark/70 dark:text-white/70 max-w-2xl mx-auto">
              Von der ersten Idee bis zur Live-Schaltung – in 4 einfachen Schritten zu Ihrer neuen Website.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative"
              >
                {/* Connection Line (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent z-0" style={{ width: 'calc(100% - 2rem)' }} />
                )}

                <div className="bg-white dark:bg-primary-dark/50 rounded-2xl p-6 border border-primary-dark/10 dark:border-white/10 hover:shadow-lg transition-all relative z-10">
                  <div className="text-4xl font-bold text-accent/30 dark:text-accent/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-dark/70 dark:text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

