'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'

const benefits = [
  {
    title: 'Persönliche Betreuung',
    description: 'Keine anonymen Call-Center. Sie sprechen direkt mit uns – persönlich, verständlich und auf Augenhöhe.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Ohne Fachchinesisch',
    description: 'Wir erklären alles verständlich. Keine komplizierten Begriffe – nur klare Antworten auf Ihre Fragen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Schnelle Umsetzung',
    description: 'Von der ersten Idee bis zur Live-Schaltung in wenigen Wochen. Keine langen Wartezeiten.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Faire Preise',
    description: 'Transparente Kosten ohne versteckte Gebühren. Sie wissen von Anfang an, was auf Sie zukommt.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Google-optimiert',
    description: 'Ihre Website wird so erstellt, dass sie bei Google gefunden wird. Mehr Sichtbarkeit = mehr Kunden.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Laufende Betreuung',
    description: 'Auch nach dem Launch sind wir für Sie da. Updates, Anpassungen und Support – wann immer Sie uns brauchen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function Benefits() {
  const { t } = useApp()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-background dark:from-primary-dark dark:to-primary-dark/80">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-4">
              Warum mit uns arbeiten?
            </h2>
            <p className="text-lg text-primary-dark/70 dark:text-white/70 max-w-2xl mx-auto">
              Wir verstehen die Bedürfnisse kleiner Unternehmen. Deshalb bieten wir genau das, was Sie brauchen – ohne Kompromisse bei Qualität und Service.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white dark:bg-primary-dark/50 rounded-2xl p-6 border border-primary-dark/10 dark:border-white/10 hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-lg transition-all h-full flex flex-col"
              >
                <div className="text-accent mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary-dark/70 dark:text-white/70 leading-relaxed flex-grow">
                  {benefit.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

