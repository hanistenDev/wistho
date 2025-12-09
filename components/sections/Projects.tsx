'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useApp } from '@/contexts/AppContext'

export default function Projects() {
  const { t } = useApp()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const projects = [
    {
      title: t.projects.items.salon.title,
      description: t.projects.items.salon.description,
      tags: t.projects.items.salon.tags,
      gradient: 'from-blue-400/20 to-cyan-400/10',
    },
    {
      title: t.projects.items.restaurant.title,
      description: t.projects.items.restaurant.description,
      tags: t.projects.items.restaurant.tags,
      gradient: 'from-green-400/20 to-emerald-400/10',
    },
    {
      title: t.projects.items.fitness.title,
      description: t.projects.items.fitness.description,
      tags: t.projects.items.fitness.tags,
      gradient: 'from-purple-400/20 to-pink-400/10',
    },
    {
      title: t.projects.items.craftsman.title,
      description: t.projects.items.craftsman.description,
      tags: t.projects.items.craftsman.tags,
      gradient: 'from-orange-400/20 to-amber-400/10',
    },
  ]

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    // Check scrollability on mount and window resize
    const timeoutId = setTimeout(checkScrollability, 100)
    window.addEventListener('resize', checkScrollability)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', checkScrollability)
    }
  }, [])

  return (
    <section id="projekte" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-4">
            {t.projects.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-lg text-primary-dark/70 dark:text-white/70 mb-12 max-w-2xl">
            {t.projects.subtitle}
          </p>
        </AnimatedSection>

        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex justify-end gap-4 mb-6">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2 rounded-full border border-primary-dark/20 dark:border-white/20 hover:border-primary-dark dark:hover:border-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Vorheriges Projekt"
          >
            <svg
              className="w-5 h-5 text-primary-dark dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2 rounded-full border border-primary-dark/20 dark:border-white/20 hover:border-primary-dark dark:hover:border-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Nächstes Projekt"
          >
            <svg
              className="w-5 h-5 text-primary-dark dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-6 pb-4 -mx-4 px-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] lg:min-w-[40vw] snap-start bg-gradient-to-br ${project.gradient} rounded-2xl p-8 border border-primary-dark/10 dark:border-white/10 hover:shadow-xl transition-all cursor-default`}
              >
                <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-primary-dark/70 dark:text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/50 dark:bg-primary-dark/50 rounded-full text-sm text-primary-dark/80 dark:text-white/80 border border-primary-dark/10 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  )
}
