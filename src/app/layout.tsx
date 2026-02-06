import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LAVA Freight | Trusted Trucking & Logistics',
  description: 'LAVA Freight delivers excellence in freight transportation across the nation. Reliable, safe, and efficient trucking services for your business.',
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
