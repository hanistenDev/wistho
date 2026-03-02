'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'

export default function Team() {
  const { t } = useApp()

  const teamMembers = [
    {
      name: 'Yanik Wisler',
      role: t.team.yanik.role,
      description: t.team.yanik.description,
      links: [
        { label: t.team.yanik.portfolio, href: 'https://yawis.netlify.app/' },
        { label: t.team.yanik.linkedin, href: 'https://www.linkedin.com/in/yanik-wisler-464001318/' },
      ],
      initials: 'YW',
    },
    {
      name: 'Hanisten Thivakaran',
      role: t.team.hanisten.role,
      description: t.team.hanisten.description,
      links: [
        { label: t.team.hanisten.portfolio, href: 'https://hanistendev.netlify.app/' },
        { label: t.team.hanisten.linkedin, href: 'https://www.linkedin.com/in/hanisten-thivakaran-765043327' },
      ],
      initials: 'HT',
    },
  ]

  return (
    <section id="team" className="py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary-dark/30">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-semibold text-primary-dark dark:text-white mb-12 tracking-tight">
            {t.team.title}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-background dark:bg-primary-dark/50 rounded-2xl p-8 border border-primary-dark/10 dark:border-white/10 hover:shadow-lg transition-all h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-dark/15 to-primary-dark/5 dark:from-white/15 dark:to-white/5 flex items-center justify-center text-lg font-semibold text-primary-dark dark:text-white mb-5">
                  {member.initials}
                </div>

                <h3 className="text-2xl font-semibold text-primary-dark dark:text-white mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-primary-dark/50 dark:text-white/50 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-primary-dark/65 dark:text-white/65 leading-relaxed mb-6 flex-grow text-[15px]">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {member.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-primary-dark/70 dark:text-white/70 hover:text-primary-dark dark:hover:text-white transition-colors underline underline-offset-4 decoration-primary-dark/20 dark:decoration-white/20"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Unser Anspruch */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary-dark dark:text-white mb-8 tracking-tight">
              Unser Anspruch
            </h3>
            <blockquote>
              <span
                className="block text-6xl leading-none text-primary-dark/8 dark:text-white/8 font-serif select-none mb-4"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-xl sm:text-2xl text-primary-dark/75 dark:text-white/75 leading-relaxed font-light">
                Wir haben Wistho gegründet, um KMU zu helfen, online klarer, strukturierter und professioneller aufzutreten.
              </p>
              <p className="text-xl sm:text-2xl text-primary-dark/60 dark:text-white/60 leading-relaxed font-light mt-4">
                Unser Fokus liegt auf nachhaltiger Performance und durchdachter Struktur – nicht auf kurzfristigen Trends.
              </p>
              <span
                className="block text-6xl leading-none text-primary-dark/8 dark:text-white/8 font-serif select-none mt-4 text-right"
                aria-hidden="true"
              >
                &rdquo;
              </span>
            </blockquote>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
