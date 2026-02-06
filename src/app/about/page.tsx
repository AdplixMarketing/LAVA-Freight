'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, TrendingUp, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const values = [
  {
    icon: Target,
    title: 'Reliability',
    description: 'We deliver on our promises. Every shipment, every time. Our commitment to reliability is the foundation of everything we do.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Safety is non-negotiable. Our drivers are trained professionals, and our equipment is maintained to the highest standards.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with honesty and transparency. No hidden fees, no surprises - just straightforward, trustworthy service.',
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    description: 'We continuously improve our processes and services to exceed expectations and deliver exceptional results.',
  },
]

const timeline = [
  { year: '2009', title: 'Company Founded', description: 'LAVA Freight was established with a single truck and a vision.' },
  { year: '2012', title: 'Regional Expansion', description: 'Expanded operations to cover the entire Southwest region.' },
  { year: '2016', title: 'Fleet Growth', description: 'Grew our fleet to over 50 trucks with dedicated drivers.' },
  { year: '2019', title: 'Nationwide Service', description: 'Achieved full coverage across all 48 continental states.' },
  { year: '2023', title: 'Industry Recognition', description: 'Named Top Regional Carrier by Logistics Today magazine.' },
]

const team = [
  { name: 'Michael Rodriguez', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
  { name: 'Jennifer Walsh', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
  { name: 'David Kim', role: 'Fleet Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
  { name: 'Amanda Foster', role: 'Customer Relations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
]

import { Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070"
            alt="Highway at sunset"
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Moving America Forward,{' '}
              <span className="gradient-text">One Load at a Time</span>
            </h1>
            <p className="text-xl text-gray-300">
              Since 2009, LAVA Freight has been a trusted partner for businesses seeking reliable
              freight transportation solutions across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
                  alt="LAVA Freight trucks"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold-500/20 rounded-2xl -z-10" />
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal-500/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="text-gold-500 font-semibold uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  Built on Hard Work and <span className="gradient-text">Dedication</span>
                </h2>
                <div className="space-y-4 text-gray-300 text-lg">
                  <p>
                    LAVA Freight started with a simple belief: that every shipment deserves
                    to be treated with care, delivered on time, and handled by professionals
                    who take pride in their work.
                  </p>
                  <p>
                    Founded by Michael Rodriguez in 2009 with just one truck, our company
                    has grown into a respected nationwide carrier. But no matter how much
                    we grow, we never forget our roots or the values that got us here.
                  </p>
                  <p>
                    Today, with a modern fleet and a team of dedicated professionals,
                    we continue to build lasting relationships with our clients based on
                    trust, reliability, and exceptional service.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card h-full">
                <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg">
                  To provide reliable, efficient, and cost-effective freight transportation
                  services that help our clients succeed. We are committed to exceeding
                  expectations through innovation, safety, and unwavering dedication to
                  customer satisfaction.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card h-full">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg">
                  To be the most trusted name in freight transportation, recognized for
                  our commitment to excellence, our investment in our people, and our
                  role in driving America&apos;s economy forward. We envision a future where
                  every business has access to world-class logistics.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">What Drives Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Our Core <span className="gradient-text">Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="card h-full text-center">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Company <span className="gradient-text">Timeline</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy-600" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="card">
                        <span className="text-gold-500 text-2xl font-bold">{item.year}</span>
                        <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-gold-500 rounded-full border-4 border-navy-800 z-10" />
                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">Our Team</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Meet the <span className="gradient-text">Leadership</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Our experienced leadership team brings decades of combined expertise in logistics and transportation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <div className="card text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-gold-500">{member.role}</p>
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
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work with <span className="gradient-text">LAVA Freight?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join the hundreds of businesses that trust us with their freight needs.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started Today
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
