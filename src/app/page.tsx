'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Shield, Clock, MapPin, ChevronRight, Star, Package, Users, Award, UserPlus } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const stats = [
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '10K+', label: 'Deliveries', icon: Package },
  { value: '98%', label: 'On-Time Rate', icon: Clock },
]

const services = [
  {
    icon: Truck,
    title: 'Full Truckload',
    description: 'Dedicated capacity for your large shipments with direct delivery and maximum efficiency.',
  },
  {
    icon: Package,
    title: 'Less Than Truckload',
    description: 'Cost-effective shipping for smaller loads, consolidated with other shipments.',
  },
  {
    icon: Clock,
    title: 'Expedited Shipping',
    description: 'Time-critical deliveries with guaranteed pickup and delivery windows.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'Comprehensive logistics network covering all 48 continental states.',
  },
]

const testimonials = [
  {
    name: 'John Martinez',
    company: 'ABC Manufacturing',
    text: 'LAVA Freight has been our go-to carrier for over 5 years. Their reliability and professionalism are unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Thompson',
    company: 'Global Retail Co.',
    text: 'The team at LAVA consistently exceeds our expectations. On-time delivery, every time.',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    company: 'Tech Solutions Inc.',
    text: 'Outstanding service and communication. They treat our cargo like their own.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/trucks/home-hero.jpg"
            alt="Truck on highway"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
        </div>

        {/* Animated particles/shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-sm font-semibold mb-6">
                  Trusted Nationwide Carrier
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Delivering Excellence{' '}
                <span className="gradient-text">Across America</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
              >
                LAVA Freight provides reliable, safe, and efficient freight transportation
                services. Your cargo is our priority, from pickup to delivery.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-primary">
                  Get Free Quote
                  <ChevronRight className="ml-2" size={20} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Our Services
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-6 mt-10"
              >
                <div className="flex items-center gap-2">
                  <Shield className="text-gold-500" size={24} />
                  <span className="text-sm text-gray-400">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-gold-500" size={24} />
                  <span className="text-sm text-gray-400">24/7 Support</span>
                </div>
              </motion.div>
            </div>

            {/* Logo showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-3xl animate-pulse" />
                <Image
                  src="/logo.png"
                  alt="LAVA Freight Logo"
                  width={400}
                  height={400}
                  className="relative z-10 drop-shadow-2xl animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 bg-gold-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-navy-800 border-y border-navy-700">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <stat.icon className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Comprehensive <span className="gradient-text">Freight Solutions</span>
              </h2>
              <p className="text-gray-400 text-lg">
                From full truckload to expedited shipping, we have the right solution for your logistics needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="card h-full group">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary">
                View All Services
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <Image
                  src="/trucks/home-why-choose.jpg"
                  alt="Fleet of trucks"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-900 p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="font-semibold">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="text-gold-500 font-semibold uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  Your Freight, <span className="gradient-text">Our Commitment</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  At LAVA Freight, we understand that your cargo represents your business.
                  That&apos;s why we treat every shipment with the utmost care and professionalism.
                </p>

                <div className="space-y-4">
                  {[
                    'Real-time GPS tracking on all shipments',
                    'Dedicated account managers for personalized service',
                    'Competitive rates with transparent pricing',
                    'Comprehensive insurance coverage',
                    '24/7 customer support and dispatch',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href="/about" className="btn-primary">
                    Learn More About Us
                    <ChevronRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.15}>
                <div className="card h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="mt-auto">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gold-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Drive With Us / Recruiting CTA */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-gold-500 font-semibold uppercase tracking-wider">Now Hiring</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                  Become a <span className="gradient-text">LAVA Driver</span>
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  Looking for a career where you&apos;re valued? LAVA Freight is hiring experienced
                  CDL drivers. We offer competitive pay, full benefits, modern equipment, and a
                  team that treats you like family.
                </p>
                <div className="space-y-3 mb-10">
                  {[
                    'Competitive pay with weekly direct deposit',
                    'Full medical, dental & vision benefits',
                    'Late-model, well-maintained trucks',
                    'Consistent miles and home time',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/careers" className="btn-primary text-lg px-10 py-5">
                  <UserPlus className="mr-2" size={24} />
                  Apply Now
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <Image
                  src="/trucks/home-drive-with-us.jpg"
                  alt="Truck driver"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold-500 text-navy-900 p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="font-semibold">Open Positions</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="container-custom mx-auto relative z-10">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-navy-700 to-navy-800 rounded-3xl p-8 md:p-16 border border-navy-600 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Ship With Us?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                Get a free quote today and discover why businesses across America trust LAVA Freight
                for their transportation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-10 py-5">
                  Get Your Free Quote
                  <ChevronRight className="ml-2" size={24} />
                </Link>
                <a href="tel:+13129098180" className="btn-secondary text-lg px-10 py-5">
                  Call (312) 909-8180
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
