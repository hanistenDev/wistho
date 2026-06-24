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
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-primary-dark to-primary-dark/90 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden border border-white/10"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.44, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight"
            >
              {t.ctaBanner.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.44, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl mb-8 text-white/75 max-w-2xl mx-auto"
            >
              {t.ctaBanner.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.44, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={handleScrollToContact}
                className="px-8 py-4 bg-white text-primary-dark rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                {t.ctaBanner.button}
              </button>
              <p className="mt-4 text-xs text-white/40">
                {t.ctaBanner.note}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

