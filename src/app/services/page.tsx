'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Package, Clock, MapPin, Warehouse, Shield, ChevronRight, Check, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    icon: Truck,
    title: 'Full Truckload (FTL)',
    description: 'When you have enough freight to fill an entire trailer, our FTL service provides dedicated capacity with direct delivery.',
    features: [
      'Dedicated trailer for your shipment',
      'Faster transit times',
      'Reduced handling and damage risk',
      'Ideal for large or sensitive cargo',
    ],
    image: '/trucks/services-ftl.jpg',
  },
  {
    icon: Package,
    title: 'Less Than Truckload (LTL)',
    description: 'For smaller shipments that don\'t require a full trailer, our LTL service offers cost-effective solutions by consolidating freight.',
    features: [
      'Pay only for the space you use',
      'Regular pickup schedules',
      'Nationwide network coverage',
      'Freight class optimization',
    ],
    image: '/trucks/services-ltl.jpg',
  },
  {
    icon: Clock,
    title: 'Expedited Shipping',
    description: 'When time is critical, our expedited service ensures your freight arrives exactly when you need it.',
    features: [
      'Guaranteed delivery windows',
      'Priority handling',
      'Real-time tracking',
      'Team drivers for non-stop delivery',
    ],
    image: '/trucks/services-expedited.jpg',
  },
  {
    icon: MapPin,
    title: 'Dedicated Routes',
    description: 'For businesses with consistent shipping needs, our dedicated route service provides reliable, scheduled transportation.',
    features: [
      'Consistent pickup and delivery times',
      'Dedicated driver assignment',
      'Custom route optimization',
      'Volume-based pricing',
    ],
    image: '/trucks/services-dedicated.jpg',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    description: 'Complement your transportation needs with our warehousing solutions for storage and distribution.',
    features: [
      'Short and long-term storage',
      'Cross-docking services',
      'Inventory management',
      'Order fulfillment',
    ],
    image: '/trucks/services-warehousing.jpg',
  },
  {
    icon: Shield,
    title: 'Specialized Freight',
    description: 'We handle sensitive, oversized, or specialized cargo with the care and expertise it requires.',
    features: [
      'Temperature-controlled shipping',
      'Oversized load permits',
      'High-value cargo security',
      'Hazmat certified drivers',
    ],
    image: '/trucks/services-specialized.jpg',
  },
]

const processSteps = [
  { step: '01', title: 'Request Quote', description: 'Tell us about your shipment and get a competitive rate.' },
  { step: '02', title: 'Schedule Pickup', description: 'Choose a pickup time that works for your business.' },
  { step: '03', title: 'Track Shipment', description: 'Monitor your freight in real-time from pickup to delivery.' },
  { step: '04', title: 'Delivery', description: 'Receive your cargo safely and on time, every time.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/trucks/services-hero.jpg"
            alt="Truck fleet"
            fill
            className="object-cover opacity-30"
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Freight Solutions</span>
            </h1>
            <p className="text-xl text-gray-300">
              From full truckload to specialized freight, we have the right service for every logistics challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ScrollReveal key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl"
                      />
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <service.icon className="w-10 h-10 text-navy-900" />
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-gold-500" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary">
                      Get a Quote
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">How It Works</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Simple <span className="gradient-text">Shipping Process</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Getting your freight where it needs to go has never been easier.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.15}>
                <div className="relative">
                  <div className="card h-full text-center">
                    <div className="text-5xl font-bold text-gold-500/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-8 h-8 text-gold-500" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">Industries Served</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                We Serve <span className="gradient-text">All Industries</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Manufacturing', 'Retail', 'Agriculture', 'Construction', 'Food & Beverage', 'Automotive', 'Healthcare', 'Technology', 'Energy', 'Consumer Goods', 'Industrial', 'E-Commerce'].map((industry, index) => (
              <ScrollReveal key={industry} delay={index * 0.05}>
                <div className="card text-center py-6 hover:bg-gold-500/10">
                  <span className="text-white font-medium">{industry}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Need a Custom Logistics Solution?
              </h2>
              <p className="text-navy-800 text-lg max-w-2xl mx-auto mb-8">
                Our team will work with you to develop a tailored transportation plan that meets your unique requirements.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-all duration-300">
                Contact Our Team
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
