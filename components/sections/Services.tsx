'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'
import { navigateToSection } from '@/lib/navigate'

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0 text-primary-dark/40 dark:text-white/40 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

// Design config that never changes (featured, badge presence) — text comes from i18n
const WEB_PKG_CONFIG = [
  { featured: false, hasBadge: false },
  { featured: true,  hasBadge: true  },
  { featured: false, hasBadge: false },
]

export default function Services() {
  const { t } = useApp()

  const scrollToContact = () => navigateToSection('#kontakt')

  const webPackages = t.packages.webGroup.items.map((item, i) => ({
    ...item,
    featured: WEB_PKG_CONFIG[i].featured,
    badge: WEB_PKG_CONFIG[i].hasBadge ? t.packages.labels.mostPopular : null,
  }))

  const aiPackages = t.packages.aiGroup.items

  const services = [
    {
      title: t.services.items.websites.title,
      description: t.services.items.websites.description,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: t.services.items.redesign.title,
      description: t.services.items.redesign.description,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: t.services.items.booking.title,
      description: t.services.items.booking.description,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: t.services.items.support.title,
      description: t.services.items.support.description,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="leistungen" className="py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary-dark/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-semibold text-primary-dark dark:text-white mb-4 tracking-tight">
            {t.services.title}
          </h2>
        </AnimatedSection>

        {t.services.subtitle ? (
          <AnimatedSection delay={0.1}>
            <p className="text-lg sm:text-xl text-primary-dark/75 dark:text-white/75 mb-14 max-w-2xl">
              {t.services.subtitle}
            </p>
          </AnimatedSection>
        ) : <div className="mb-10" />}

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-background dark:bg-primary-dark/50 rounded-2xl p-8 border border-primary-dark/10 dark:border-white/10 hover:border-primary-dark/20 dark:hover:border-white/20 hover:shadow-lg transition-all h-full flex flex-col"
              >
                <div className="text-primary-dark/80 dark:text-white/80 mb-5">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-primary-dark dark:text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-primary-dark/70 dark:text-white/70 leading-relaxed flex-grow text-[15px]">
                  {service.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Leistungspakete ── */}
        <div className="mt-28">
          {/* Header */}
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl font-semibold text-primary-dark dark:text-white mb-4 tracking-tight">
                {t.packages.title}
              </h2>
              <p className="text-lg sm:text-xl text-primary-dark/65 dark:text-white/65 max-w-2xl">
                {t.packages.subtitle}
              </p>
            </div>
          </AnimatedSection>

          {/* Group 1 – Webdesign */}
          <AnimatedSection delay={0.05}>
            <div className="mb-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary-dark dark:text-white tracking-tight mb-2">
                {t.packages.webGroup.title}
              </h3>
              <div className="h-px w-12 bg-primary-dark/15 dark:bg-white/15" />
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-5 items-start">
            {webPackages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={0.08 + index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-2xl p-8 border flex flex-col h-full transition-shadow ${
                    pkg.featured
                      ? 'bg-primary-dark dark:bg-white border-transparent shadow-[0_20px_60px_-12px_rgba(2,6,23,0.35)] dark:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]'
                      : 'bg-background dark:bg-primary-dark/50 border-primary-dark/10 dark:border-white/10 hover:border-primary-dark/20 dark:hover:border-white/20 hover:shadow-lg'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-8">
                      <span className="bg-accent text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`text-xl font-semibold tracking-tight mb-3 ${pkg.featured ? 'text-white dark:text-primary-dark' : 'text-primary-dark dark:text-white'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-[15px] leading-relaxed ${pkg.featured ? 'text-white/90 dark:text-primary-dark/80' : 'text-primary-dark/75 dark:text-white/75'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className={`rounded-xl px-5 py-4 mb-6 ${pkg.featured ? 'bg-white/10 dark:bg-primary-dark/10' : 'bg-primary-dark/[0.04] dark:bg-white/[0.05]'}`}>
                    <p className={`font-semibold mb-1.5 text-[11px] tracking-[0.12em] uppercase ${pkg.featured ? 'text-white/50 dark:text-primary-dark/50' : 'text-primary-dark/40 dark:text-white/40'}`}>
                      {t.packages.labels.result}
                    </p>
                    <p className={`leading-relaxed text-[14px] ${pkg.featured ? 'text-white/90 dark:text-primary-dark/80' : 'text-primary-dark/75 dark:text-white/75'}`}>
                      {pkg.result}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className={`font-semibold mb-2 text-[11px] tracking-[0.12em] uppercase ${pkg.featured ? 'text-white/50 dark:text-primary-dark/50' : 'text-primary-dark/40 dark:text-white/40'}`}>
                      {t.packages.labels.idealFor}
                    </p>
                    <p className={`text-[14px] leading-relaxed ${pkg.featured ? 'text-white/80 dark:text-primary-dark/75' : 'text-primary-dark/70 dark:text-white/70'}`}>
                      {pkg.idealFor}
                    </p>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.featured ? 'text-white/60 dark:text-primary-dark/60' : 'text-primary-dark/40 dark:text-white/40'}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-[14px] leading-snug ${pkg.featured ? 'text-white/90 dark:text-primary-dark/80' : 'text-primary-dark/70 dark:text-white/70'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className={`w-full rounded-full py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      pkg.featured
                        ? 'bg-white dark:bg-primary-dark text-primary-dark dark:text-white hover:bg-white/90 dark:hover:bg-primary-dark/90'
                        : 'bg-primary-dark dark:bg-white text-white dark:text-primary-dark hover:bg-primary-dark/90 dark:hover:bg-white/90'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Group 2 – AI & Automation */}
          <AnimatedSection delay={0.05}>
            <div className="mt-24 mb-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary-dark dark:text-white tracking-tight mb-2">
                {t.packages.aiGroup.title}
              </h3>
              <div className="h-px w-12 bg-primary-dark/15 dark:bg-white/15 mb-5" />
              <p className="text-base text-primary-dark/65 dark:text-white/65 max-w-2xl leading-relaxed">
                {t.packages.aiGroup.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiPackages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={0.08 + index * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-background dark:bg-primary-dark/50 rounded-2xl p-7 border border-primary-dark/10 dark:border-white/10 hover:border-primary-dark/20 dark:hover:border-white/20 hover:shadow-lg transition-shadow flex flex-col h-full"
                >
                  <h3 className="text-[18px] font-semibold text-primary-dark dark:text-white tracking-tight mb-2.5">
                    {pkg.name}
                  </h3>
                  <p className="text-[14px] text-primary-dark/70 dark:text-white/70 leading-relaxed mb-5">
                    {pkg.description}
                  </p>

                  <div className="rounded-xl bg-primary-dark/[0.04] dark:bg-white/[0.05] px-4 py-3.5 mb-5">
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary-dark/40 dark:text-white/40 mb-1.5">{t.packages.labels.result}</p>
                    <p className="text-[13px] text-primary-dark/70 dark:text-white/70 leading-relaxed">{pkg.result}</p>
                  </div>

                  <div className="mb-5">
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary-dark/40 dark:text-white/40 mb-2">{t.packages.labels.idealFor}</p>
                    <p className="text-[13px] text-primary-dark/70 dark:text-white/70 leading-relaxed">{pkg.idealFor}</p>
                  </div>

                  <ul className="space-y-2 mb-5 flex-grow">
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-[13px] text-primary-dark/70 dark:text-white/70 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {'process' in pkg && pkg.process && (
                    <div className="mb-5">
                      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary-dark/40 dark:text-white/40 mb-2.5">{t.packages.labels.process}</p>
                      <ol className="space-y-1.5">
                        {pkg.process.map((step, i) => (
                          <li key={step} className="flex items-start gap-2.5">
                            <span className="text-[11px] font-semibold text-primary-dark/30 dark:text-white/30 mt-0.5 tabular-nums w-4 shrink-0">{i + 1}.</span>
                            <span className="text-[13px] text-primary-dark/70 dark:text-white/70 leading-snug">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  <button
                    onClick={scrollToContact}
                    className="mt-auto w-full rounded-full py-2.5 text-[13px] font-medium text-primary-dark dark:text-white border border-primary-dark/15 dark:border-white/15 hover:bg-primary-dark hover:text-white dark:hover:bg-white dark:hover:text-primary-dark transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {pkg.cta}
                  </button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
