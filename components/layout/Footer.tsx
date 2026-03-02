'use client'

import { useApp } from '@/contexts/AppContext'

export default function Footer() {
  const { t } = useApp()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-primary-dark dark:bg-white text-white dark:text-primary-dark py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold tracking-tight mb-1">
              Wistho Digital
            </div>
            <div className="text-xs text-white/40 dark:text-primary-dark/40 uppercase tracking-[0.2em] mb-4">
              Swiss Performance Studio
            </div>
            <p className="text-sm text-white/50 dark:text-primary-dark/50">
              Websites built for growth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <nav className="flex flex-col gap-2.5">
              <a href="#ueber-uns" onClick={(e) => handleNavClick(e, '#ueber-uns')} className="text-sm text-white/65 dark:text-primary-dark/65 hover:text-white dark:hover:text-primary-dark transition-colors">
                {t.nav.about}
              </a>
              <a href="#leistungen" onClick={(e) => handleNavClick(e, '#leistungen')} className="text-sm text-white/65 dark:text-primary-dark/65 hover:text-white dark:hover:text-primary-dark transition-colors">
                {t.nav.services}
              </a>
              <a href="#projekte" onClick={(e) => handleNavClick(e, '#projekte')} className="text-sm text-white/65 dark:text-primary-dark/65 hover:text-white dark:hover:text-primary-dark transition-colors">
                {t.nav.projects}
              </a>
              <a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="text-sm text-white/65 dark:text-primary-dark/65 hover:text-white dark:hover:text-primary-dark transition-colors">
                {t.nav.team}
              </a>
              <a href="#kontakt" onClick={(e) => handleNavClick(e, '#kontakt')} className="text-sm text-white/65 dark:text-primary-dark/65 hover:text-white dark:hover:text-primary-dark transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <nav className="flex flex-col gap-2.5">
              <a href="/impressum" className="text-sm text-white/65 dark:text-primary-dark/65 hover:text-white dark:hover:text-primary-dark transition-colors">
                {t.footer.imprint}
              </a>
              <a href="/datenschutz" className="text-sm text-white/65 dark:text-primary-dark/65 hover:text-white dark:hover:text-primary-dark transition-colors">
                {t.footer.privacy}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 dark:border-primary-dark/8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-white/40 dark:text-primary-dark/40">
            {t.footer.copyright} · {t.footer.allRights}
          </div>
          <div className="text-xs text-white/30 dark:text-primary-dark/30">
            {t.footer.madeIn}
          </div>
        </div>
      </div>
    </footer>
  )
}
