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
        { label: t.team.yanik.linkedin, href: '#' },
      ],
      initials: 'YW',
    },
    {
      name: 'Hanisten Thivakaran',
      role: t.team.hanisten.role,
      description: t.team.hanisten.description,
      links: [
        { label: t.team.hanisten.portfolio, href: 'https://hanisten.sunrise-avengers.ch/' },
        { label: t.team.hanisten.linkedin, href: 'https://www.linkedin.com/in/hanisten-thivakaran-765043327' },
      ],
      initials: 'HT',
    },
  ]

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary-dark/30">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-12">
            {t.team.title}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-background dark:bg-primary-dark/50 rounded-2xl p-8 border border-primary-dark/10 dark:border-white/10 hover:shadow-lg transition-all h-full flex flex-col"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-2xl font-bold text-primary-dark dark:text-white mb-6">
                  {member.initials}
                </div>

                <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-primary-dark/70 dark:text-white/70 leading-relaxed mb-6 flex-grow">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {member.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-primary-dark dark:text-white hover:text-accent transition-colors underline underline-offset-4"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
