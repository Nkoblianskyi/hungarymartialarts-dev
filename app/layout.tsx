import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'hungary martialarts | Harcművészetek Magyarországon',
  description:
    'Fedezd fel a harcművészetek világát Magyarországon. Technikák, taktikák, történelem és edzéstervek – mindez egy helyen.',
  keywords: ['harcművészetek', 'boks', 'Magyarország', 'edzés', 'technikák', 'küzdősportok'],
  metadataBase: new URL('https://hungarymartialarts.com'),
  openGraph: {
    title: 'hungary martialarts',
    description: 'Harcművészetek Magyarországon',
    url: 'https://hungarymartialarts.com',
    siteName: 'hungary martialarts',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${barlowCondensed.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
