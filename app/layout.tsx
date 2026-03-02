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
  title: 'Wistho – Webagentur Schweiz',
  description: 'Wistho ist eine moderne Webagentur in der Schweiz für hochwertiges Webdesign, Entwicklung und digitale Lösungen.',
  metadataBase: new URL('https://wistho.ch'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wistho – Webagentur Schweiz',
    description:
      'Wistho ist eine moderne Webagentur in der Schweiz für hochwertiges Webdesign, Entwicklung und digitale Lösungen.',
    url: 'https://wistho.ch',
    siteName: 'Wistho',
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wistho – Webagentur Schweiz',
    description:
      'Wistho ist eine moderne Webagentur in der Schweiz für hochwertiges Webdesign, Entwicklung und digitale Lösungen.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" suppressHydrationWarning data-preloader="active">
      <head />
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
            background: '#020617',
          }}
        >
          <img
            src="/logo-brand.png"
            alt=""
            width={240}
            height={240}
            style={{ width: '15rem', height: 'auto' }}
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
