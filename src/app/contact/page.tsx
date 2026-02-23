'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Truck, Package, Calendar } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['(312) 909-8180'],
    action: 'tel:+13129098180',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['dan@lavafreight.net'],
    action: 'mailto:dan@lavafreight.net',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['55W 22nd Street, Suite #130', 'Lombard, IL 60148'],
    action: '#',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['24/7 Dispatch', 'Office: Mon-Fri, 7am-5pm'],
    action: '#',
  },
]

const quoteTypes = [
  { value: 'ftl', label: 'Full Truckload (FTL)', icon: Truck },
  { value: 'ltl', label: 'Less Than Truckload (LTL)', icon: Package },
  { value: 'expedited', label: 'Expedited Shipping', icon: Calendar },
  { value: 'other', label: 'Other Services', icon: Truck },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    origin: '',
    destination: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/trucks/contact-hero.jpg"
            alt="Contact us"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/95 to-navy-900" />
        </div>

        <div className="container-custom mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-sm font-semibold mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get Your <span className="gradient-text">Free Quote</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to ship? Contact our team for a competitive quote and experience the LAVA Freight difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 bg-navy-800 border-y border-navy-700 -mt-10">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center bg-navy-700/50 backdrop-blur-sm border border-navy-600 rounded-2xl p-5 md:p-8 hover:border-gold-500 transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gold-500 transition-colors duration-300 shrink-0">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                {item.details.map((detail) => (
                  <p key={detail} className="text-gray-400 text-sm md:text-base break-words w-full">{detail}</p>
                ))}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="card">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Request a Quote</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-400">We&apos;ve received your request and will be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                          placeholder="ABC Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Type *</label>
                      <select
                        name="serviceType"
                        value={formState.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {quoteTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Origin City/State</label>
                        <input
                          type="text"
                          name="origin"
                          value={formState.origin}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                          placeholder="Houston, TX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Destination City/State</label>
                        <input
                          type="text"
                          name="destination"
                          value={formState.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                          placeholder="Los Angeles, CA"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Additional Details</label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                        placeholder="Tell us about your shipment..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Submit Request
                      <Send className="ml-2" size={20} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Map & Additional Info */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                {/* Map placeholder */}
                <div className="card overflow-hidden p-0">
                  <div className="relative h-80 bg-navy-700">
                    <Image
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074"
                      alt="Map location"
                      fill
                      className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-2" />
                        <p className="text-white font-semibold">55W 22nd Street, Suite #130</p>
                        <p className="text-gray-400">Lombard, IL 60148</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="card">
                  <h3 className="text-xl font-bold text-white mb-6">Why Choose LAVA Freight?</h3>
                  <ul className="space-y-4">
                    {[
                      'Competitive rates with no hidden fees',
                      'Fast response times - quotes within hours',
                      '24/7 dispatch and customer support',
                      'Real-time tracking on all shipments',
                      'Dedicated account managers',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emergency Contact */}
                <div className="card bg-gradient-to-r from-gold-500 to-gold-600 border-0">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Need Urgent Shipping?</h3>
                  <p className="text-navy-800 mb-4">Our dispatch team is available 24/7 for time-critical shipments.</p>
                  <a
                    href="tel:+13129098180"
                    className="inline-flex items-center gap-2 text-navy-900 font-bold text-lg hover:underline"
                  >
                    <Phone size={24} />
                    (312) 909-8180
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: 'How quickly can I get a quote?',
                a: 'Most quotes are provided within 1-2 hours during business hours. For urgent requests, call our dispatch line directly.',
              },
              {
                q: 'What areas do you service?',
                a: 'We provide service to all 48 continental United States, with specialized coverage in major freight corridors.',
              },
              {
                q: 'Do you offer tracking?',
                a: 'Yes! All shipments include real-time GPS tracking accessible through our customer portal or mobile app.',
              },
              {
                q: 'What types of freight do you handle?',
                a: 'We handle general freight, temperature-controlled goods, oversized loads, and specialized cargo. Contact us for specific requirements.',
              },
            ].map((faq, index) => (
              <ScrollReveal key={faq.q} delay={index * 0.1}>
                <div className="card h-full">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
