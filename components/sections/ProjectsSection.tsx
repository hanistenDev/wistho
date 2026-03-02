'use client'

import Image from 'next/image'
import { useSequentialAnimation } from '@/hooks/useSequentialAnimation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useApp } from '@/contexts/AppContext'

const MOCKUP_MAX_W = 560

function DeviceMockup({
  desktopSrc,
  alt,
  priority = false,
  shouldLoad = true,
}: {
  desktopSrc: string
  alt: string
  priority?: boolean
  shouldLoad?: boolean
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full flex items-center justify-center"
      style={{ background: 'transparent' }}
    >
      <div
        className="relative w-full"
        style={{
          maxWidth: `${MOCKUP_MAX_W}px`,
          background: 'transparent',
          filter: 'drop-shadow(0 14px 28px rgba(0, 0, 0, 0.3))',
        }}
      >
        {!shouldLoad && (
          <div
            aria-hidden="true"
            className="w-full"
            style={{ aspectRatio: '1200 / 750', background: 'transparent' }}
          />
        )}
        {shouldLoad && (
          <Image
            src={desktopSrc}
            alt={alt}
            width={1200}
            height={750}
            className={`w-full h-auto block transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'transparent',
              imageRendering: 'auto',
              objectFit: 'contain',
            }}
            sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 80vw, ${MOCKUP_MAX_W}px`}
            quality={100}
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const { t } = useApp()

  const projects = [
    {
      id: 'coiffeur-styl',
      itemKey: 'coiffeurStyl' as const,
      label: t.projects.badgeClient,
      buttonLabel: t.projects.buttonLabelPortfolio,
      buttonUrl: 'https://coiffeur-styl-zurich.netlify.app/',
      desktopSrc: '/projects/MacBook Pro 14.png',
    },
    {
      id: 'huy-nails',
      itemKey: 'huy' as const,
      label: t.projects.buttonLabelComingSoon,
      buttonLabel: t.projects.buttonLabelComingSoon,
      buttonUrl: '#',
      desktopSrc: '/projects/MacBook Pro14(2).png',
    },
    {
      id: 'yanik',
      itemKey: 'yanik' as const,
      label: t.projects.badgeStudio,
      buttonLabel: t.projects.buttonLabelPortfolio,
      buttonUrl: 'https://yawis.netlify.app/en',
      desktopSrc: '/projects/MacBook Pro 14(3).png',
    },
    {
      id: 'hanisten',
      itemKey: 'hanisten' as const,
      label: t.projects.badgeStudio,
      buttonLabel: t.projects.buttonLabelPortfolio,
      buttonUrl: 'https://hanistendev.netlify.app/',
      desktopSrc: '/projects/MacBook Pro 14 (4).png',
    },
  ]

  const { ref: sectionRef, visibleCount, prefersReducedMotion } =
    useSequentialAnimation({
      itemCount: projects.length,
      enterThreshold: 0.3,
      exitThreshold: 0.1,
      delayBetween: 1200,
    })

  return (
    <section
      className="bg-[#05070C] text-white"
      id="projekte"
      ref={sectionRef}
      style={{ overflowAnchor: 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 space-y-24 md:space-y-28">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{t.projects.title}</h2>
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-3xl">
            {t.projects.subtitle}
          </p>
        </div>

        {projects.map((project, index) => {
          const isEven = index % 2 === 0
          const isVisible = visibleCount > index
          const item = t.projects.items[project.itemKey]

          return (
            <div
              key={project.id}
              className={`group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl border border-white/[0.06] bg-white/[0.015] p-5 md:p-8 transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${
                prefersReducedMotion
                  ? isVisible
                    ? 'opacity-100'
                    : 'opacity-0'
                  : isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-3 scale-[1.01]'
              }`}
              style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
            >
              <div className={`${isEven ? 'order-2 md:order-1' : 'order-2'} space-y-5`}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <p className="text-base text-white/70">{item.subtitle}</p>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-white/85 whitespace-nowrap shrink-0">
                      {project.label}
                    </span>
                  </div>
                </div>
                <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-prose whitespace-pre-line">
                  {item.description}
                </p>

                <ul className="space-y-2.5 text-sm md:text-base text-white/80">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="text-accent shrink-0 mt-0.5">&#10003;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {project.buttonLabel !== t.projects.buttonLabelComingSoon && (
                  <div className="pt-3">
                    <a
                      href={project.buttonUrl}
                      target={project.buttonUrl.startsWith('http') ? '_blank' : undefined}
                      rel={project.buttonUrl.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-2.5 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      {project.buttonLabel}
                    </a>
                  </div>
                )}
              </div>

              <div
                className={`${isEven ? 'order-1 md:order-2' : 'order-1'} w-full`}
                style={{ background: 'transparent' }}
              >
                <DeviceMockup
                  desktopSrc={project.desktopSrc}
                  alt={item.title}
                  priority={index === 0}
                  shouldLoad={isVisible}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
