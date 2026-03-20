import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lavafreight.net'),
  title: {
    default: 'LAVA Freight | Trusted Trucking & Logistics',
    template: '%s | LAVA Freight',
  },
  description: 'Trusted U.S. freight carrier specializing in high-value cargo, electronics, and time-sensitive shipments with reliable service.',
  keywords: 'trucking, freight, logistics, transportation, shipping, FTL, LTL, LAVA Freight',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lavafreight.net',
    siteName: 'LAVA Freight',
    title: 'LAVA Freight | Trusted Trucking & Logistics',
    description: 'Trusted U.S. freight carrier specializing in high-value cargo, electronics, and time-sensitive shipments with reliable service.',
    images: [{ url: '/logo.png', width: 400, height: 400, alt: 'LAVA Freight Logo' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lavafreight.net',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
