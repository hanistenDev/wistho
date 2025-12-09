'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Coiffeur-Salon Besitzerin',
    content: 'Endlich eine Website, die wirklich funktioniert! Die Online-Terminbuchung läuft perfekt und wir bekommen viel mehr Anfragen als vorher.',
    rating: 5,
  },
  {
    name: 'Marco R.',
    role: 'Restaurant-Besitzer',
    content: 'Die digitale Speisekarte ist ein Hit bei unseren Gästen. Die Website lädt schnell und sieht auf dem Handy genauso gut aus wie auf dem Computer.',
    rating: 5,
  },
  {
    name: 'Lisa K.',
    role: 'Fitnessstudio Inhaberin',
    content: 'Von der ersten Beratung bis zum Go-Live war alles unkompliziert. Die Jungs von Wistho Digital haben genau verstanden, was wir brauchen.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary-dark/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-4">
              Was unsere Kund:innen sagen
            </h2>
            <p className="text-lg text-primary-dark/70 dark:text-white/70 max-w-2xl mx-auto">
              Echte Erfahrungen von Unternehmen, die mit uns gearbeitet haben.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-background dark:bg-primary-dark/50 rounded-2xl p-8 border border-primary-dark/10 dark:border-white/10 hover:shadow-lg transition-all"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-primary-dark/80 dark:text-white/80 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div>
                  <div className="font-bold text-primary-dark dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-dark/60 dark:text-white/60">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

