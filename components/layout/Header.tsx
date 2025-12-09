'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'

export default function Header() {
  const { language, setLanguage, theme, setTheme, t } = useApp()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: t.nav.about, href: '#ueber-uns' },
    { label: t.nav.services, href: '#leistungen' },
    { label: t.nav.projects, href: '#projekte' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.contact, href: '#kontakt' },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 dark:bg-primary-dark/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-2xl font-bold tracking-wider uppercase text-primary-dark dark:text-white"
          >
            Wistho Digital
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-primary-dark/80 dark:text-white/80 hover:text-primary-dark dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-primary-dark/20 dark:border-white/20 pl-6 ml-2">
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'de'
                    ? 'bg-primary-dark dark:bg-white text-white dark:text-primary-dark'
                    : 'text-primary-dark/60 dark:text-white/60 hover:text-primary-dark dark:hover:text-white'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'en'
                    ? 'bg-primary-dark dark:bg-white text-white dark:text-primary-dark'
                    : 'text-primary-dark/60 dark:text-white/60 hover:text-primary-dark dark:hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary-dark/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-primary-dark dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary-dark dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <a
              href="#kontakt"
              onClick={(e) => handleNavClick(e, '#kontakt')}
              className="px-4 py-2 bg-primary-dark dark:bg-white text-white dark:text-primary-dark rounded-full text-sm font-medium hover:bg-primary-dark/90 dark:hover:bg-white/90 transition-colors"
            >
              {t.nav.requestProject}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language & Theme */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  language === 'de'
                    ? 'bg-primary-dark dark:bg-white text-white dark:text-primary-dark'
                    : 'text-primary-dark/60 dark:text-white/60'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  language === 'en'
                    ? 'bg-primary-dark dark:bg-white text-white dark:text-primary-dark'
                    : 'text-primary-dark/60 dark:text-white/60'
                }`}
              >
                EN
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 text-primary-dark dark:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary-dark dark:text-white"
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-primary-dark dark:bg-white transition-all"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-primary-dark dark:bg-white transition-all"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-primary-dark dark:bg-white transition-all"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-20 bg-background/95 dark:bg-primary-dark/95 backdrop-blur-md z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="px-6 py-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-lg font-medium text-primary-dark dark:text-white hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={(e) => handleNavClick(e, '#kontakt')}
                className="block w-full px-4 py-3 bg-primary-dark dark:bg-white text-white dark:text-primary-dark rounded-full text-center font-medium hover:bg-primary-dark/90 dark:hover:bg-white/90 transition-colors"
              >
                {t.nav.requestProject}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
