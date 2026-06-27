import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/contexts/AppContext'
import CustomCursor from '@/components/ui/CustomCursor'
import Preloader from '@/components/ui/Preloader'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wistho – Webagentur Zürich | Webdesign & Entwicklung',
  description: 'Wistho ist eine Webagentur aus Zürich für moderne Websites mit Online-Terminbuchung, Webdesign und digitale Lösungen für lokale Dienstleister und KMU in der Schweiz.',
  metadataBase: new URL('https://wistho.ch'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'mask-icon', url: '/favicon.ico' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wistho – Webagentur Zürich | Webdesign & Entwicklung',
    description:
      'Wistho ist eine Webagentur aus Zürich für moderne Websites mit Online-Terminbuchung, Webdesign und digitale Lösungen für lokale Dienstleister und KMU in der Schweiz.',
    url: 'https://wistho.ch',
    siteName: 'Wistho',
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wistho – Webagentur Zürich | Webdesign & Entwicklung',
    description:
      'Wistho ist eine Webagentur aus Zürich für moderne Websites mit Online-Terminbuchung, Webdesign und digitale Lösungen für lokale Dienstleister und KMU in der Schweiz.',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Wistho',
  description: 'Webagentur aus Zürich für moderne Websites mit Online-Terminbuchung für lokale Dienstleister und KMU.',
  url: 'https://wistho.ch',
  email: 'info@wistho.ch',
  areaServed: { '@type': 'City', name: 'Zürich', sameAs: 'https://www.wikidata.org/wiki/Q72' },
  serviceType: 'Webdesign und Webentwicklung',
  sameAs: [
    'https://www.instagram.com/wistho.studio',
    'https://www.linkedin.com/company/wistho',
  ],
  founder: [
    { '@type': 'Person', name: 'Yanik Wisler' },
    { '@type': 'Person', name: 'Hanisten Thivakaran' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was braucht ihr von mir, damit wir starten können?',
      acceptedAnswer: { '@type': 'Answer', text: 'Logo (falls vorhanden), Texte/Infos zu Ihren Leistungen, Bilder (oder wir helfen bei passenden Bildern) und ein kurzes Gespräch zu Zielgruppe und Stil. Danach übernehmen wir den Rest.' },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert die Erstellung einer Website?',
      acceptedAnswer: { '@type': 'Answer', text: 'In der Regel 2–4 Wochen, abhängig vom Umfang Ihres Projekts. Einfache Onepager können auch schneller fertig sein.' },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine Website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Jedes Projekt ist individuell – deshalb arbeiten wir nicht mit fixen Paketen. In einem kostenlosen Erstgespräch klären wir Ihre Ziele und erstellen Ihnen ein transparentes Angebot, passend zu Ihrem Budget. Unverbindlich und ohne Fachchinesisch.' },
    },
    {
      '@type': 'Question',
      name: 'Könnt ihr Online-Terminbuchung und Zahlungen integrieren?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Für Dienstleister integrieren wir auf Wunsch ein Buchungssystem (z.B. mit Online-Zahlung oder Zahlung vor Ort). Wir beraten Sie, welche Lösung am besten passt.' },
    },
    {
      '@type': 'Question',
      name: 'Übernehmt ihr Domain und Hosting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, auf Wunsch kümmern wir uns um Domain, Hosting und die technische Einrichtung. Wenn Sie bereits Hosting haben, integrieren wir die Website auch dort.' },
    },
    {
      '@type': 'Question',
      name: 'Wird meine Website bei Google gefunden?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wir optimieren Ihre Website für Google (SEO). Das bedeutet bessere Sichtbarkeit und mehr potenzielle Kunden.' },
    },
    {
      '@type': 'Question',
      name: 'Funktioniert die Website auf dem Handy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolut! Alle unsere Websites sind mobile-optimiert und sehen auf Smartphones genauso gut aus wie auf dem Computer.' },
    },
    {
      '@type': 'Question',
      name: 'Was passiert nach dem Launch?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wir sind auch nach dem Go-Live für Sie da. Bei Fragen, Updates oder Anpassungen können Sie sich jederzeit melden.' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" suppressHydrationWarning data-preloader="active">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>
        {/* Static preloader overlay — always in server HTML, hidden by CSS when data-preloader is removed */}
        <div
          id="preloader-static"
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: '0',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ffffff',
          }}
        >
          <img
            src="/logo-wt.png"
            alt="Wistho Logo"
            width={240}
            height={240}
            style={{ width: '15rem', height: 'auto', filter: 'brightness(0)' }}
          />
        </div>

        <AppProvider>
          <Preloader />
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
