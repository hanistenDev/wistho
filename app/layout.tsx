import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/contexts/AppContext'
import CustomCursor from '@/components/ui/CustomCursor'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wistho Digital - Moderne Websites für kleine Unternehmen',
  description: 'Wistho Digital erstellt klare, schnelle und mobil-optimierte Webseiten für Coiffeure, Restaurants und lokale Dienstleister in der Schweiz.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}

