'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const testimonials = [
  {
    quote:
      'Die Zusammenarbeit war klar strukturiert und professionell.\nUnsere neue Website wirkt hochwertig – und die Online-Buchungen laufen deutlich effizienter als zuvor.',
    name: 'Ahmed A.',
    role: 'Inhaber, Coiffeur Styl',
  },
  {
    quote:
      'Die Zusammenarbeit ist sehr angenehm und gut organisiert.\nIch fühle mich verstanden und professionell begleitet – genau so, wie ich es mir gewünscht habe.',
    name: 'Maria L.',
    role: 'Inhaberin, Huy Nails',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary-dark/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-semibold text-primary-dark dark:text-white mb-20 tracking-tight">
            Vertrauen durch echte Zusammenarbeit.
          </h2>
        </AnimatedSection>

        <div className="space-y-20">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.15}>
              <blockquote>
                <span
                  className="block text-5xl sm:text-6xl leading-none text-primary-dark/10 dark:text-white/10 font-serif select-none mb-6"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <p className="text-xl sm:text-2xl text-primary-dark/80 dark:text-white/80 leading-relaxed font-light whitespace-pre-line">
                  {testimonial.quote}
                </p>

                <footer className="mt-8">
                  <div className="font-semibold text-primary-dark dark:text-white tracking-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-dark/45 dark:text-white/45 mt-1">
                    {testimonial.role}
                  </div>
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
