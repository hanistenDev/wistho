'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useApp } from '@/contexts/AppContext'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
          theme?: 'light' | 'dark' | 'auto'
          execution?: 'render' | 'execute'
          size?: 'normal' | 'compact' | 'invisible'
        }
      ) => string
      reset: (widgetId?: string) => void
      execute?: (widgetId?: string) => void
    }
  }
}

export default function Contact() {
  const { t, language } = useApp()
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const formStartedAtRef = useRef<number>(Date.now())
  const defaultMessageDe =
    'Ich interessiere mich für ein kostenloses Beratungsgespräch.'
  const defaultMessageEn = 'I am interested in a free consultation.'
  const defaultMessage =
    language === 'de' ? defaultMessageDe : defaultMessageEn
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: defaultMessage,
    website: '',
  })
  const messageTouchedRef = useRef(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const hasAttemptedSubmitRef = useRef(false)
  const pendingSubmitRef = useRef(false)
  const latestFormDataRef = useRef(formData)
  const latestLanguageRef = useRef(language)
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    latestFormDataRef.current = formData
  }, [formData])

  useEffect(() => {
    latestLanguageRef.current = language
  }, [language])

  useEffect(() => {
    if (!messageTouchedRef.current) {
      setFormData((prev) => ({
        ...prev,
        message: defaultMessage,
      }))
    }
  }, [defaultMessage, defaultMessageDe, defaultMessageEn])

  const submitForm = useCallback(
    async (captchaToken: string) => {
      setIsSubmitting(true)
      setSubmitError(null)

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...latestFormDataRef.current,
            language: latestLanguageRef.current,
            turnstileToken: captchaToken,
            formStartedAt: formStartedAtRef.current,
          }),
        })

        if (!response.ok) {
          throw new Error('send-failed')
        }

        setIsSubmitting(false)
        setSubmitSuccess(true)
        setShowSuccessToast(true)
        setTimeout(() => {
          messageTouchedRef.current = false
          setFormData({
            name: '',
            email: '',
            company: '',
            message: defaultMessage,
            website: '',
          })
          formStartedAtRef.current = Date.now()
          setTurnstileToken('')
          pendingSubmitRef.current = false
          if (window.turnstile && widgetIdRef.current) {
            window.turnstile.reset(widgetIdRef.current)
            if (window.turnstile.execute) {
              window.turnstile.execute(widgetIdRef.current)
            }
          }
          setSubmitSuccess(false)
        }, 3000)
        setTimeout(() => {
          setShowSuccessToast(false)
        }, 2400)
      } catch {
        setIsSubmitting(false)
        setSubmitSuccess(false)
        setSubmitError(
          latestLanguageRef.current === 'de'
            ? 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
            : 'Message could not be sent. Please try again.'
        )
      }
    },
    [defaultMessage]
  )

  useEffect(() => {
    if (!siteKey || !widgetRef.current || widgetIdRef.current) return

    const renderWidget = () => {
      if (!window.turnstile || !widgetRef.current || widgetIdRef.current) return
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        theme: 'auto',
        execution: 'execute',
        size: 'invisible',
        callback: (token: string) => {
          setTurnstileToken(token)
          setSubmitError(null)
          if (pendingSubmitRef.current) {
            pendingSubmitRef.current = false
            void submitForm(token)
          }
        },
        'expired-callback': () => {
          setTurnstileToken('')
          if (window.turnstile?.execute && widgetIdRef.current) {
            window.turnstile.execute(widgetIdRef.current)
          }
        },
        'error-callback': () => {
          setTurnstileToken('')
          pendingSubmitRef.current = false
          setIsSubmitting(false)
          if (!hasAttemptedSubmitRef.current) return
          setSubmitError(
            language === 'de'
              ? 'Sicherheitsprüfung fehlgeschlagen. Bitte erneut versuchen.'
              : 'Security verification failed. Please try again.'
          )
        },
      })

      if (pendingSubmitRef.current && window.turnstile.execute && widgetIdRef.current) {
        window.turnstile.execute(widgetIdRef.current)
      }

      // Preload a token to make first submit faster.
      if (window.turnstile.execute && widgetIdRef.current) {
        window.turnstile.execute(widgetIdRef.current)
      }
    }

    if (window.turnstile) {
      renderWidget()
      return
    }

    const existingScript = document.querySelector(
      'script[data-turnstile-script="true"]'
    ) as HTMLScriptElement | null

    if (existingScript) {
      existingScript.addEventListener('load', renderWidget, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.dataset.turnstileScript = 'true'
    script.addEventListener('load', renderWidget, { once: true })
    document.head.appendChild(script)
  }, [siteKey, language, submitForm])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    hasAttemptedSubmitRef.current = true

    if (siteKey && !turnstileToken) {
      pendingSubmitRef.current = true
      setIsSubmitting(true)
      setSubmitError(null)
      if (window.turnstile?.execute && widgetIdRef.current) {
        window.turnstile.execute(widgetIdRef.current)
      } else {
        setSubmitError(
          language === 'de'
            ? 'Sicherheitsprüfung wird geladen. Bitte kurz warten ...'
            : 'Security check is loading. Please wait ...'
        )
      }
      return
    }

    await submitForm(turnstileToken || '')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === 'message') {
      messageTouchedRef.current = true
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8">
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-6 right-6 z-[130] rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            role="status"
            aria-live="polite"
          >
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              {language === 'de'
                ? 'Nachricht erfolgreich gesendet.'
                : 'Message sent successfully.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-6">
            {t.contact.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-lg text-primary-dark/70 dark:text-white/70 mb-12 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:info@wistho.ch"
                className="group flex items-center gap-4 rounded-[16px] bg-white/60 dark:bg-white/[0.03] border border-primary-dark/[0.06] dark:border-white/[0.08] px-5 py-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.1)] hover:border-primary-dark/[0.12] dark:hover:border-white/[0.14] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary-dark/[0.04] dark:bg-white/[0.05] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-dark/50 dark:text-white/50">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-medium text-primary-dark/45 dark:text-white/45 uppercase tracking-[0.08em] mb-0.5">
                    E-Mail
                  </span>
                  <span className="block text-[15px] font-semibold text-primary-dark dark:text-white truncate">
                    info@wistho.ch
                  </span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary-dark/25 dark:text-white/25 group-hover:text-primary-dark/50 dark:group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/41775260585?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Zusammenarbeit."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[16px] bg-white/60 dark:bg-white/[0.03] border border-primary-dark/[0.06] dark:border-white/[0.08] px-5 py-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.1)] hover:border-primary-dark/[0.12] dark:hover:border-white/[0.14] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary-dark/[0.04] dark:bg-white/[0.05] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary-dark/50 dark:text-white/50">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-medium text-primary-dark/45 dark:text-white/45 uppercase tracking-[0.08em] mb-0.5">
                    Telefon & WhatsApp
                  </span>
                  <span className="block text-[15px] font-semibold text-primary-dark dark:text-white">
                    Via WhatsApp schreiben
                  </span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary-dark/25 dark:text-white/25 group-hover:text-primary-dark/50 dark:group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/wistho.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[16px] bg-white/60 dark:bg-white/[0.03] border border-primary-dark/[0.06] dark:border-white/[0.08] px-5 py-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.1)] hover:border-primary-dark/[0.12] dark:hover:border-white/[0.14] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary-dark/[0.04] dark:bg-white/[0.05] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-dark/50 dark:text-white/50">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-medium text-primary-dark/45 dark:text-white/45 uppercase tracking-[0.08em] mb-0.5">
                    Instagram
                  </span>
                  <span className="block text-[15px] font-semibold text-primary-dark dark:text-white">
                    @wistho.studio
                  </span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary-dark/25 dark:text-white/25 group-hover:text-primary-dark/50 dark:group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary-dark dark:text-white mb-2"
                >
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary-dark/20 dark:border-white/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all bg-white dark:bg-primary-dark/50 text-primary-dark dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-dark dark:text-white mb-2"
                >
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary-dark/20 dark:border-white/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all bg-white dark:bg-primary-dark/50 text-primary-dark dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-primary-dark dark:text-white mb-2"
                >
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary-dark/20 dark:border-white/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all bg-white dark:bg-primary-dark/50 text-primary-dark dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-dark dark:text-white mb-2"
                >
                  {t.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary-dark/20 dark:border-white/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all bg-white dark:bg-primary-dark/50 resize-none text-primary-dark dark:text-white"
                />
              </div>

              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {siteKey && (
                <div className="hidden">
                  <div ref={widgetRef} />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-primary-dark/50 dark:bg-white/50 text-white/60 dark:text-primary-dark/60 cursor-not-allowed'
                    : submitSuccess
                    ? 'bg-green-600 dark:bg-green-500 text-white'
                    : 'bg-primary-dark dark:bg-white text-white dark:text-primary-dark hover:bg-primary-dark/90 dark:hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting
                  ? t.contact.form.submitting
                  : submitSuccess
                  ? t.contact.form.success
                  : t.contact.form.submit}
              </button>

              {submitSuccess ? (
                <p className="text-sm text-green-500 dark:text-green-400 text-center">
                  {t.contact.form.responseTime}
                </p>
              ) : submitError ? (
                <p className="text-sm text-red-500 dark:text-red-400 text-center">
                  {submitError}
                </p>
              ) : (
                <p className="text-sm text-primary-dark/60 dark:text-white/60 text-center leading-relaxed">
                  {t.contact.form.responseTime}
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
