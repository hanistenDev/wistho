'use client'

import { useApp } from '@/contexts/AppContext'
import SmoothImage from '@/components/ui/SmoothImage'
import { useSequentialAnimation } from '@/hooks/useSequentialAnimation'

type Project = {
  id: string
  title: string
  subtitle: string
  description?: string
  bullets: string[]
  buttonLabel: string
  buttonUrl?: string
  desktopSrc: string
  mobileSrc: string
  badge?: string
  isComingSoon?: boolean
}

function DeviceMockup({
  desktopSrc,
  mobileSrc,
  alt,
  priority = false,
  desktopObjectPosition = 'center',
  mobileObjectPosition = 'center',
  mobileObjectFit = 'cover',
  shouldLoad = true,
}: {
  desktopSrc: string
  mobileSrc: string
  alt: string
  priority?: boolean
  desktopObjectPosition?: string
  mobileObjectPosition?: string
  mobileObjectFit?: 'cover' | 'contain'
  shouldLoad?: boolean
}) {
  return (
    <div className="relative mx-auto max-w-2xl">
      {/* MacBook-Frame mit Glass-Card-Effekt */}
      <div className="relative aspect-[16/9] rounded-3xl bg-gradient-to-br from-[#11121b] via-[#0d0e15] to-[#11121b] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Glass-Effekt Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/20 pointer-events-none z-10" />
        
        {/* MacBook-Kamera-Leiste (sehr subtil, oben außerhalb) */}
        <div className="pointer-events-none absolute inset-x-40 top-[-1px] h-1.5 rounded-b-md bg-black/40 z-20" />
        
        {/* Desktop Screenshot mit smooth loading */}
        <SmoothImage
          src={desktopSrc}
          alt={`${alt} – Desktop View`}
          imgClassName="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
          priority={priority}
          objectPosition={desktopObjectPosition}
          shouldLoad={shouldLoad}
        />
      </div>

      {/* iPhone 14 Pro Max Frame mit Glass-Card-Effekt */}
      <div className="absolute right-4 md:right-[-6%] bottom-[-12%] w-20 md:w-24 lg:w-28 aspect-[9/19.5] rounded-[28px] bg-gradient-to-br from-[#05060b] via-[#030408] to-[#05060b] border border-white/20 shadow-2xl overflow-hidden z-30 backdrop-blur-sm">
        {/* Glass-Effekt Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/20 pointer-events-none z-10" />
        
        {/* Mobile Screenshot mit smooth loading - normal positioniert, minimales Padding */}
        <div className="relative h-full w-full pt-2">
          <SmoothImage
            src={mobileSrc}
            alt={`${alt} – Mobile View`}
            imgClassName={`object-${mobileObjectFit}`}
            sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
            priority={priority}
            objectPosition={mobileObjectPosition}
            shouldLoad={shouldLoad}
          />
        </div>
        
        {/* Notch-Zone Overlay - subtiler Gradient für Safe-Area */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-15" />
        
        {/* iPhone 14 Pro Max Dynamic Island (schmal, länglich wie im Screenshot) */}
        <div className="pointer-events-none absolute left-1/2 top-2.5 -translate-x-1/2 w-12 h-3.5 rounded-full bg-black z-20" />
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const { t } = useApp()

  const projects: Project[] = [
    {
      id: 'webwind',
      title: t.projects.items.webwind.title,
      subtitle: t.projects.items.webwind.subtitle,
      bullets: t.projects.items.webwind.bullets,
      buttonLabel: t.projects.buttonLabel,
      buttonUrl: 'https://webwinddigital.com',
      desktopSrc: '/projects/webwind-desktop.png',
      mobileSrc: '/projects/webwind-mobile.png',
      badge: t.projects.badgeClient,
    },
    {
      id: 'yanik',
      title: t.projects.items.yanik.title,
      subtitle: t.projects.items.yanik.subtitle,
      description: t.projects.items.yanik.description,
      bullets: t.projects.items.yanik.bullets,
      buttonLabel: t.projects.buttonLabelPortfolio,
      buttonUrl: 'https://yawis.netlify.app/en',
      desktopSrc: '/projects/yanik-desktop.png',
      mobileSrc: '/projects/yanik-mobile.png',
      badge: t.projects.badgeStudio,
    },
    {
      id: 'hanisten',
      title: t.projects.items.hanisten.title,
      subtitle: t.projects.items.hanisten.subtitle,
      description: t.projects.items.hanisten.description,
      bullets: t.projects.items.hanisten.bullets,
      buttonLabel: t.projects.buttonLabelPortfolio,
      buttonUrl: 'https://hanisten.sunrise-avengers.ch/',
      desktopSrc: '/projects/hanisten-desktop.png',
      mobileSrc: '/projects/hanisten-mobile.png',
      badge: t.projects.badgeStudio,
    },
    {
      id: 'huy',
      title: t.projects.items.huy.title,
      subtitle: t.projects.items.huy.subtitle,
      description: t.projects.items.huy.description,
      bullets: t.projects.items.huy.bullets,
      buttonLabel: t.projects.buttonLabelComingSoon,
      desktopSrc: '/projects/huy-nails-desktop.png',
      mobileSrc: '/projects/huy-nails-mobile.png',
      badge: t.projects.badgeClient,
      isComingSoon: true,
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
    <section className="bg-[#05070C] text-white" id="projekte" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-28 md:space-y-36">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">{t.projects.title}</h2>
          <p className="mt-2 text-sm md:text-base text-white/70">{t.projects.subtitle}</p>
        </div>

        {projects.map((project, index) => {
          const isEven = index % 2 === 0
          const isVisible = visibleCount > index

          return (
            <div
              key={project.id}
              className={`group grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${
                prefersReducedMotion
                  ? isVisible
                    ? 'opacity-100'
                    : 'opacity-0'
                  : isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-3 scale-[1.01]'
              }`}
              style={{
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
            >
              {/* Text-Spalte */}
              <div className={`${isEven ? 'order-1' : 'order-2 md:order-1'} space-y-4`}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <p className="text-sm md:text-base text-white/70 max-w-prose">{project.subtitle}</p>
                    {project.badge && (
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-white/80 whitespace-nowrap shrink-0">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>
                {project.description && (
                  <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-prose">
                    {project.description}
                  </p>
                )}

                <ul className="space-y-2.5 text-sm md:text-base text-white/80">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="text-accent shrink-0 mt-0.5">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  {project.isComingSoon ? (
                    <button
                      disabled
                      className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-2.5 text-sm font-medium opacity-60 cursor-not-allowed transition-all"
                    >
                      {project.buttonLabel}
                    </button>
                  ) : (
                    <a
                      href={project.buttonUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-2.5 text-sm font-medium hover:bg-white hover:text-black transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      {project.buttonLabel}
                    </a>
                  )}
                </div>
              </div>

              {/* Device-Spalte mit Hover-Effekt */}
              <div className={`${isEven ? 'order-2' : 'order-1 md:order-2'} transition-transform duration-300 ease-out ${
                !prefersReducedMotion && isVisible ? 'group-hover:-translate-y-1' : ''
              }`}>
                <DeviceMockup
                  desktopSrc={project.desktopSrc}
                  mobileSrc={project.mobileSrc}
                  alt={project.title}
                  priority={index === 0}
                  desktopObjectPosition={project.id === 'yanik' ? 'left center' : 'center'}
                  mobileObjectPosition={project.id === 'huy' ? 'center' : 'center'}
                  mobileObjectFit={project.id === 'huy' ? 'contain' : 'cover'}
                  shouldLoad={isVisible}
                />
              </div>
            </div>
          )
        })}

        {/* CTA Block nach Projects */}
        <div className="pt-8 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#kontakt"
              className="px-6 py-3 bg-white text-[#05070C] rounded-full font-medium hover:bg-white/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t.projectsCTA.primary}
            </a>
            <a
              href="#kontakt"
              className="px-6 py-3 border-2 border-white/70 text-white rounded-full font-medium hover:bg-white hover:text-[#05070C] transition-all duration-200"
            >
              {t.projectsCTA.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
