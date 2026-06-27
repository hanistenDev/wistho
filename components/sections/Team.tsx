'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useApp } from '@/contexts/AppContext'

const TEAM_PHOTO_SIZE = 132

export default function Team() {
  const { t } = useApp()

  const teamMembers = [
    {
      name: 'Yanik Wisler',
      role: t.team.yanik.role,
      description: t.team.yanik.description,
      photo: '/images/yanik.jpg',
      links: [
        { label: t.team.yanik.portfolio, href: 'https://yawis.netlify.app/' },
        { label: t.team.yanik.linkedin, href: 'https://www.linkedin.com/in/yanik-wisler-464001318/' },
      ],
    },
    {
      name: 'Hanisten Thivakaran',
      role: t.team.hanisten.role,
      description: t.team.hanisten.description,
      photo: '/images/hanisten.jpg',
      links: [
        { label: t.team.hanisten.portfolio, href: 'https://hanistendev.netlify.app/' },
        { label: t.team.hanisten.linkedin, href: 'https://www.linkedin.com/in/hanisten-thivakaran-765043327' },
      ],
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
                <div className="relative mb-6 shrink-0">
                  <div
                    className="overflow-hidden rounded-full ring-[3px] ring-primary-dark/10 dark:ring-white/15 shadow-[0_10px_28px_-12px_rgba(15,23,42,0.45)] dark:shadow-[0_10px_28px_-12px_rgba(0,0,0,0.65)]"
                    style={{ width: TEAM_PHOTO_SIZE, height: TEAM_PHOTO_SIZE }}
                  >
                    <Image
                      src={member.photo}
                      alt={`${member.name} – ${member.role}`}
                      width={TEAM_PHOTO_SIZE * 2}
                      height={TEAM_PHOTO_SIZE * 2}
                      className="h-full w-full object-cover object-[center_22%]"
                      sizes={`${TEAM_PHOTO_SIZE}px`}
                      quality={100}
                      priority={index === 0}
                    />
                  </div>
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

        {/* Vision */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary-dark dark:text-white mb-8 tracking-tight">
              {t.team.vision.heading}
            </h3>
            <blockquote>
              <span
                className="block text-6xl leading-none text-primary-dark/8 dark:text-white/8 font-serif select-none mb-4"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-xl sm:text-2xl text-primary-dark/75 dark:text-white/75 leading-relaxed font-light">
                {t.team.vision.para1}
              </p>
              <p className="text-xl sm:text-2xl text-primary-dark/60 dark:text-white/60 leading-relaxed font-light mt-4">
                {t.team.vision.para2}
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
