import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LAVA Freight | Trusted Trucking & Logistics',
  description: 'Trusted U.S. freight carrier specializing in high-value cargo, electronics, and time-sensitive shipments with reliable service.',
  keywords: 'trucking, freight, logistics, transportation, shipping, FTL, LTL, LAVA Freight',
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
