'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Wie lange dauert die Erstellung einer Website?',
    answer: 'In der Regel 2-4 Wochen, abhängig vom Umfang Ihres Projekts. Einfache Onepager können auch schneller fertig sein.',
  },
  {
    question: 'Was kostet eine Website?',
    answer: 'Die Kosten hängen vom Umfang ab. Einfache Onepager starten ab CHF 1\'500. Wir erstellen Ihnen gerne ein individuelles Angebot.',
  },
  {
    question: 'Kann ich die Website später selbst bearbeiten?',
    answer: 'Ja! Wir zeigen Ihnen, wie Sie Inhalte selbst aktualisieren können. Auf Wunsch übernehmen wir auch laufende Betreuung und Updates.',
  },
  {
    question: 'Wird meine Website bei Google gefunden?',
    answer: 'Ja, wir optimieren Ihre Website für Google (SEO). Das bedeutet bessere Sichtbarkeit und mehr potenzielle Kunden.',
  },
  {
    question: 'Funktioniert die Website auf dem Handy?',
    answer: 'Absolut! Alle unsere Websites sind mobile-optimiert und sehen auf Smartphones genauso gut aus wie auf dem Computer.',
  },
  {
    question: 'Was passiert nach dem Launch?',
    answer: 'Wir sind auch nach dem Go-Live für Sie da. Bei Fragen, Updates oder Anpassungen können Sie sich jederzeit melden.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary-dark/30">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-4">
              Häufige Fragen
            </h2>
            <p className="text-lg text-primary-dark/70 dark:text-white/70">
              Alles, was Sie wissen möchten – einfach erklärt.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={0.05 + index * 0.05}>
              <motion.div
                initial={false}
                className="bg-background dark:bg-primary-dark/50 rounded-2xl border border-primary-dark/10 dark:border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary-dark/5 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-primary-dark dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="w-5 h-5 text-accent flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-primary-dark/70 dark:text-white/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

