'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/fleet', label: 'Our Fleet' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Full Truckload (FTL)',
  'Less Than Truckload (LTL)',
  'Expedited Shipping',
  'Dedicated Routes',
  'Warehousing',
]

export default function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-navy-700">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="LAVA Freight"
                width={60}
                height={60}
                className="w-[60px] h-[60px] object-contain"
              />
              <div>
                <span className="text-xl font-bold text-gold-500">LAVA</span>
                <span className="text-xl font-bold text-white"> Freight</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in freight transportation. Delivering excellence
              across the nation with reliability, safety, and unmatched service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+13129098180"
                  className="flex items-start gap-3 text-gray-400 hover:text-gold-500 transition-colors group"
                >
                  <Phone size={20} className="text-gold-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>(312) 909-8180</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dan@lavafreight.net"
                  className="flex items-start gap-3 text-gray-400 hover:text-gold-500 transition-colors group"
                >
                  <Mail size={20} className="text-gold-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>dan@lavafreight.net</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={20} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>123 Freight Avenue<br />Houston, TX 77001</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LAVA Freight. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gold-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gold-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
