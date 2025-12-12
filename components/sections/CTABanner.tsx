'use client'

import { motion } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'

export default function CTABanner() {
  const { t } = useApp()

  const handleScrollToContact = () => {
    const element = document.querySelector('#kontakt')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-accent to-accent/80 dark:from-accent dark:to-accent/90 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              {t.ctaBanner.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
            >
              {t.ctaBanner.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={handleScrollToContact}
                className="px-8 py-4 bg-white text-accent rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
              >
                {t.ctaBanner.button}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

