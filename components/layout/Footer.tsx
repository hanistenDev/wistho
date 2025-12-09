'use client'

import { useApp } from '@/contexts/AppContext'

export default function Footer() {
  const { t } = useApp()

  return (
    <footer className="bg-primary-dark dark:bg-white text-white dark:text-primary-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/80 dark:text-primary-dark/80">
            {t.footer.copyright}
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/80 dark:text-primary-dark/80 hover:text-white dark:hover:text-primary-dark transition-colors"
            >
              {t.footer.imprint}
            </a>
            <a
              href="#"
              className="text-white/80 dark:text-primary-dark/80 hover:text-white dark:hover:text-primary-dark transition-colors"
            >
              {t.footer.privacy}
            </a>
          </div>
          <div className="text-sm text-white/60 dark:text-primary-dark/60">
            {t.footer.madeIn}
          </div>
        </div>
      </div>
    </footer>
  )
}
