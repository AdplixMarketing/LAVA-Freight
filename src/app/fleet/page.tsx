'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Gauge, Shield, Thermometer, MapPin, Wifi, ChevronRight, Check } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const fleetStats = [
  { value: '10+', label: 'Trucks', icon: Truck },
  { value: '10+', label: 'Trailers', icon: Truck },
  { value: '99%', label: 'On-Time Delivery', icon: MapPin },
  { value: '24/7', label: 'Dispatch Support', icon: MapPin },
]

const truckTypes = [
  {
    name: 'Dry Van Trailers',
    description: 'Our primary trailer — versatile and reliable for general freight, high-value cargo, and palletized goods.',
    specs: ['53\' standard length', 'Up to 45,000 lbs capacity', 'Air-ride suspension', 'Dock high'],
    image: '/trucks/fleet-semi.jpg',
    count: '11',
  },
]

const features = [
  {
    icon: Gauge,
    title: 'New Equipment',
    description: 'New trucks and trailers ensuring reliability, fuel efficiency, and driver comfort.',
  },
  {
    icon: Wifi,
    title: 'GPS Tracking',
    description: 'Real-time visibility on all shipments with ELD compliance.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'All trucks equipped with advanced safety systems and dash cams.',
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Precise temperature monitoring for sensitive freight.',
  },
]

const safetyFeatures = [
  'Collision avoidance systems',
  'Lane departure warnings',
  'Electronic logging devices (ELD)',
  '360° camera systems',
  'Tire pressure monitoring',
  'Regular safety inspections',
  'Driver fatigue monitoring',
  'Anti-lock braking systems',
]

export default function FleetPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/trucks/fleet-hero.png"
            alt="Fleet of trucks"
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
              Our Fleet
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Modern Equipment,{' '}
              <span className="gradient-text">Reliable Performance</span>
            </h1>
            <p className="text-xl text-gray-300">
              Our well-maintained fleet of trucks and trailers ensures your freight arrives safely and on time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="relative py-16 bg-navy-800 border-y border-navy-700">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {fleetStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">Why Our Fleet</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Built for <span className="gradient-text">Excellence</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="card h-full text-center">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">Equipment Types</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Right Truck for <span className="gradient-text">Every Job</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8">
            {truckTypes.map((truck, index) => (
              <ScrollReveal key={truck.name} delay={index * 0.1}>
                <div className="card overflow-hidden group">
                  <div className="relative h-48 -mx-8 -mt-8 mb-6">
                    <Image
                      src={truck.image}
                      alt={truck.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent" />
                    <div className="absolute bottom-4 right-4 bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold">
                      {truck.count} Units
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{truck.name}</h3>
                  <p className="text-gray-400 mb-4">{truck.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {truck.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-gold-500 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-gold-500 font-semibold uppercase tracking-wider">Safety Standards</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  Safety is Our <span className="gradient-text">Top Priority</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Every truck in our fleet is equipped with the latest safety technology and undergoes
                  regular inspections to ensure peak performance and driver safety.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {safetyFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold-500" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <Image
                  src="/trucks/fleet-safety.jpg"
                  alt="Truck safety features"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-navy-700 border border-navy-600 p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <Shield className="w-10 h-10 text-gold-500" />
                    <div>
                      <div className="text-2xl font-bold text-white">DOT Compliant</div>
                      <div className="text-gray-400">All Federal Standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Driver Section */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative lg:order-2">
                <Image
                  src="/trucks/fleet-maintenance.jpg"
                  alt="Professional truck driver"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="lg:order-1">
                <span className="text-gold-500 font-semibold uppercase tracking-wider">Our Drivers</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  Professional <span className="gradient-text">Team</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Behind every great truck is a skilled, professional driver. Our team of experienced CDL
                  professionals are the heart of LAVA Freight, bringing dedication and expertise to every haul.
                </p>
                <ul className="space-y-4">
                  {[
                    'Rigorous hiring and background checks',
                    'Ongoing safety and skills training',
                    'Competitive pay and benefits',
                    'Average driver experience: 10+ years',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-navy-900" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Put Our Fleet to <span className="gradient-text">Work for You?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today to discuss your shipping needs and how our modern fleet can serve your business.
              </p>
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
