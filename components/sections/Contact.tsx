'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { useState } from 'react'
import { useApp } from '@/contexts/AppContext'

export default function Contact() {
  const { t } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, use mailto as placeholder
    const subject = encodeURIComponent(
      `${t.contact.form.name}: ${formData.name} (${formData.company || t.contact.form.company})`
    )
    const body = encodeURIComponent(
      `${t.contact.form.name}: ${formData.name}\n${t.contact.form.email}: ${formData.email}\n${t.contact.form.company}: ${formData.company}\n\n${t.contact.form.message}:\n${formData.message}`
    )
    window.location.href = `mailto:info@wistho-digital.ch?subject=${subject}&body=${body}`
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8">
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
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-primary-dark/60 dark:text-white/60 uppercase tracking-wider mb-2">
                  {t.contact.email}
                </h3>
                <a
                  href="mailto:info@wistho-digital.ch"
                  className="text-lg text-primary-dark dark:text-white hover:text-accent transition-colors"
                >
                  info@wistho-digital.ch
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-primary-dark/60 dark:text-white/60 uppercase tracking-wider mb-2">
                  {t.contact.phone}
                </h3>
                <a
                  href="tel:+41790000000"
                  className="text-lg text-primary-dark dark:text-white hover:text-accent transition-colors"
                >
                  +41 79 XXX XX XX
                </a>
              </div>
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

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-dark dark:bg-white text-white dark:text-primary-dark rounded-full font-medium hover:bg-primary-dark/90 dark:hover:bg-white/90 transition-colors"
              >
                {t.contact.form.submit}
              </button>

              <p className="text-sm text-primary-dark/60 dark:text-white/60 text-center">
                {t.contact.form.responseTime}
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
