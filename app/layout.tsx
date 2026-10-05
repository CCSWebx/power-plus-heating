import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')

const title = 'Power Plus Heating Ltd | Plumbing & Heating in Birmingham'
const description =
  'Plumbing, heating and boiler services in Birmingham, including boiler servicing, repairs, installation, central heating and general plumbing.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  // Demo / proposal: keep out of search indexes. Switch to index/follow when the client approves a live launch.
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Power Plus Heating Ltd',
    title,
    description: `${description} Independent website design concept.`,
    url: '/',
  },
  icons: { icon: '/images/power-plus-heating-logo.png', apple: '/images/power-plus-heating-logo.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#192e38',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className="light" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  )
}
