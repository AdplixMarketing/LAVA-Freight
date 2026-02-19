'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Truck,
  DollarSign,
  Heart,
  MapPin,
  Send,
  CheckCircle,
  Shield,
  Clock,
  Users,
  ChevronRight,
} from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Top-tier pay with weekly direct deposit, performance bonuses, and consistent miles.',
  },
  {
    icon: Heart,
    title: 'Full Benefits',
    description: 'Medical, dental, and vision insurance plus 401(k) with company match.',
  },
  {
    icon: MapPin,
    title: 'Home Time',
    description: 'Predictable schedules with regular home time. We value your work-life balance.',
  },
  {
    icon: Truck,
    title: 'Modern Equipment',
    description: 'Late-model trucks with the latest safety technology and driver comfort features.',
  },
  {
    icon: Shield,
    title: 'Paid Training',
    description: 'Comprehensive onboarding and ongoing training to keep you safe and sharp on the road.',
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Join a supportive team that treats drivers like family, not just a number.',
  },
]

const requirements = [
  'Valid Class A CDL',
  'Minimum 1 year of verifiable OTR experience',
  'Clean driving record',
  'Must pass DOT physical and drug screening',
  'No DUI/DWI in the last 5 years',
  'Ability to lift up to 50 lbs',
]

const initialFormState = {
  // Personal Info
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  city: '',
  state: '',
  zipCode: '',

  // CDL & Experience
  cdlClass: '',
  cdlNumber: '',
  cdlState: '',
  cdlExpiration: '',
  yearsExperience: '',
  experienceType: '',

  // Endorsements
  endorsementHazmat: false,
  endorsementTanker: false,
  endorsementDoubles: false,
  endorsementTWIC: false,

  // Equipment Experience
  equipDryVan: false,
  equipFlatbed: false,
  equipReefer: false,
  equipTanker: false,
  equipIntermodal: false,

  // Driving Record
  accidentsLast3Years: '',
  violationsLast3Years: '',
  cdlSuspended: '',
  duiHistory: '',

  // Employment
  currentEmployer: '',
  yearsAtEmployer: '',
  reasonForLeaving: '',

  // Availability
  availableStartDate: '',
  preferredRouteType: '',
  willingToTeamDrive: '',

  // Additional
  referralSource: '',
  additionalComments: '',
}

export default function CareersPage() {
  const [formState, setFormState] = useState(initialFormState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormState({ ...formState, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setFormState({ ...formState, [name]: value })
    }
  }

  const inputClasses =
    'w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors'

  const labelClasses = 'block text-sm font-medium text-gray-300 mb-2'

  const sectionTitle = (title: string) => (
    <h3 className="text-xl font-bold text-gold-500 mb-6 pb-3 border-b border-navy-600">{title}</h3>
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
            alt="Truck driver on the road"
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
              Now Hiring Drivers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Drive With <span className="gradient-text">LAVA Freight</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of professional drivers. Competitive pay, great benefits, modern
              equipment, and a company that treats you like family.
            </p>
            <a href="#apply" className="btn-primary text-lg px-10 py-5">
              Apply Now
              <ChevronRight className="ml-2" size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 bg-navy-800 border-y border-navy-700">
        <div className="container-custom mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">
                Why Drive For Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Built for <span className="gradient-text">Drivers</span>
              </h2>
              <p className="text-gray-400 text-lg">
                We know drivers are the backbone of our business. That&apos;s why we invest in your
                success, safety, and well-being.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <div className="card h-full group">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                    <benefit.icon className="w-7 h-7 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-navy-800/50">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                  alt="Truck on highway"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-900 p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="font-semibold">Open Positions</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="text-gold-500 font-semibold uppercase tracking-wider">
                  Requirements
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  What We&apos;re <span className="gradient-text">Looking For</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  We&apos;re looking for safe, reliable, and professional drivers who take pride in
                  their work.
                </p>

                <div className="space-y-4">
                  {requirements.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-navy-900"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a href="#apply" className="btn-primary">
                    Start Your Application
                    <ChevronRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="section-padding">
        <div className="container-custom mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-gold-500 font-semibold uppercase tracking-wider">
                Apply Now
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Driver <span className="gradient-text">Application</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Fill out the form below and our recruiting team will be in touch within 24-48 hours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="card">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">Application Submitted!</h3>
                  <p className="text-gray-400 text-lg max-w-md mx-auto">
                    Thank you for your interest in driving with LAVA Freight. Our recruiting team
                    will review your application and contact you within 24-48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* ---- Personal Information ---- */}
                  <div>
                    {sectionTitle('Personal Information')}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className={labelClasses}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="john@email.com"
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                      <div>
                        <label className={labelClasses}>Date of Birth *</label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formState.dateOfBirth}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formState.city}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="Houston"
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>State *</label>
                        <select
                          name="state"
                          value={formState.state}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select state...</option>
                          {[
                            'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
                            'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                            'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
                            'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
                            'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
                          ].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                      <div>
                        <label className={labelClasses}>Zip Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formState.zipCode}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="77001"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ---- CDL & Experience ---- */}
                  <div>
                    {sectionTitle('CDL & Driving Experience')}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>CDL Class *</label>
                        <select
                          name="cdlClass"
                          value={formState.cdlClass}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select CDL class...</option>
                          <option value="A">Class A</option>
                          <option value="B">Class B</option>
                          <option value="C">Class C</option>
                          <option value="permit">CDL Permit (In Training)</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClasses}>CDL Number *</label>
                        <input
                          type="text"
                          name="cdlNumber"
                          value={formState.cdlNumber}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="CDL number"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className={labelClasses}>CDL Issuing State *</label>
                        <select
                          name="cdlState"
                          value={formState.cdlState}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select state...</option>
                          {[
                            'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
                            'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                            'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
                            'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
                            'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
                          ].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClasses}>CDL Expiration Date *</label>
                        <input
                          type="date"
                          name="cdlExpiration"
                          value={formState.cdlExpiration}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className={labelClasses}>Years of CDL Experience *</label>
                        <select
                          name="yearsExperience"
                          value={formState.yearsExperience}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="less-than-1">Less than 1 year</option>
                          <option value="1-2">1-2 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClasses}>Type of Driving Experience *</label>
                        <select
                          name="experienceType"
                          value={formState.experienceType}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="otr">Over the Road (OTR)</option>
                          <option value="regional">Regional</option>
                          <option value="local">Local / City</option>
                          <option value="dedicated">Dedicated Routes</option>
                          <option value="mixed">Mixed / Multiple Types</option>
                        </select>
                      </div>
                    </div>

                    {/* Endorsements */}
                    <div className="mt-6">
                      <label className={labelClasses}>Endorsements (check all that apply)</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        {[
                          { name: 'endorsementHazmat', label: 'HazMat (H)' },
                          { name: 'endorsementTanker', label: 'Tanker (N)' },
                          { name: 'endorsementDoubles', label: 'Doubles/Triples (T)' },
                          { name: 'endorsementTWIC', label: 'TWIC Card' },
                        ].map((item) => (
                          <label
                            key={item.name}
                            className="flex items-center gap-3 p-3 bg-navy-700/50 border border-navy-600 rounded-lg cursor-pointer hover:border-gold-500/50 transition-colors"
                          >
                            <input
                              type="checkbox"
                              name={item.name}
                              checked={formState[item.name as keyof typeof formState] as boolean}
                              onChange={handleChange}
                              className="w-4 h-4 accent-gold-500"
                            />
                            <span className="text-sm text-gray-300">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ---- Equipment Experience ---- */}
                  <div>
                    {sectionTitle('Equipment Experience')}
                    <label className={labelClasses}>
                      Trailer types you have experience with (check all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                      {[
                        { name: 'equipDryVan', label: 'Dry Van' },
                        { name: 'equipFlatbed', label: 'Flatbed' },
                        { name: 'equipReefer', label: 'Refrigerated (Reefer)' },
                        { name: 'equipTanker', label: 'Tanker' },
                        { name: 'equipIntermodal', label: 'Intermodal / Container' },
                      ].map((item) => (
                        <label
                          key={item.name}
                          className="flex items-center gap-3 p-3 bg-navy-700/50 border border-navy-600 rounded-lg cursor-pointer hover:border-gold-500/50 transition-colors"
                        >
                          <input
                            type="checkbox"
                            name={item.name}
                            checked={formState[item.name as keyof typeof formState] as boolean}
                            onChange={handleChange}
                            className="w-4 h-4 accent-gold-500"
                          />
                          <span className="text-sm text-gray-300">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* ---- Driving Record ---- */}
                  <div>
                    {sectionTitle('Driving Record')}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>
                          Accidents in the last 3 years? *
                        </label>
                        <select
                          name="accidentsLast3Years"
                          value={formState.accidentsLast3Years}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="0">None</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3+">3 or more</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClasses}>
                          Moving violations in the last 3 years? *
                        </label>
                        <select
                          name="violationsLast3Years"
                          value={formState.violationsLast3Years}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="0">None</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3+">3 or more</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className={labelClasses}>
                          Has your CDL ever been suspended or revoked? *
                        </label>
                        <select
                          name="cdlSuspended"
                          value={formState.cdlSuspended}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClasses}>
                          Any DUI/DWI in the last 5 years? *
                        </label>
                        <select
                          name="duiHistory"
                          value={formState.duiHistory}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ---- Employment History ---- */}
                  <div>
                    {sectionTitle('Most Recent Employment')}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Current / Most Recent Employer *</label>
                        <input
                          type="text"
                          name="currentEmployer"
                          value={formState.currentEmployer}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Years at This Employer</label>
                        <select
                          name="yearsAtEmployer"
                          value={formState.yearsAtEmployer}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="less-than-1">Less than 1 year</option>
                          <option value="1-2">1-2 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5+">5+ years</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className={labelClasses}>Reason for Leaving</label>
                      <input
                        type="text"
                        name="reasonForLeaving"
                        value={formState.reasonForLeaving}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="e.g., Seeking better pay, home time, etc."
                      />
                    </div>
                  </div>

                  {/* ---- Availability & Preferences ---- */}
                  <div>
                    {sectionTitle('Availability & Preferences')}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Available Start Date *</label>
                        <input
                          type="date"
                          name="availableStartDate"
                          value={formState.availableStartDate}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Preferred Route Type *</label>
                        <select
                          name="preferredRouteType"
                          value={formState.preferredRouteType}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="otr">Over the Road (OTR)</option>
                          <option value="regional">Regional</option>
                          <option value="local">Local / City</option>
                          <option value="dedicated">Dedicated</option>
                          <option value="any">Open to Any</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className={labelClasses}>Willing to Team Drive?</label>
                        <select
                          name="willingToTeamDrive"
                          value={formState.willingToTeamDrive}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="maybe">Open to It</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClasses}>How Did You Hear About Us?</label>
                        <select
                          name="referralSource"
                          value={formState.referralSource}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="">Select...</option>
                          <option value="indeed">Indeed</option>
                          <option value="website">Company Website</option>
                          <option value="referral">Driver Referral</option>
                          <option value="social-media">Social Media</option>
                          <option value="job-board">Other Job Board</option>
                          <option value="recruiter">Recruiter</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ---- Additional Comments ---- */}
                  <div>
                    {sectionTitle('Additional Information')}
                    <div>
                      <label className={labelClasses}>
                        Anything else you&apos;d like us to know?
                      </label>
                      <textarea
                        name="additionalComments"
                        value={formState.additionalComments}
                        onChange={handleChange}
                        rows={4}
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about yourself, your goals, or any questions you have..."
                      />
                    </div>
                  </div>

                  {/* ---- Disclaimer & Submit ---- */}
                  <div className="border-t border-navy-600 pt-8">
                    <p className="text-sm text-gray-500 mb-6">
                      By submitting this application, you certify that all information provided is
                      true and complete to the best of your knowledge. You authorize LAVA Freight to
                      verify the information provided and to conduct background and driving record
                      checks as part of the hiring process.
                    </p>
                    <button type="submit" className="btn-primary w-full text-lg py-5">
                      Submit Application
                      <Send className="ml-2" size={22} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="container-custom mx-auto relative z-10">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-navy-700 to-navy-800 rounded-3xl p-8 md:p-16 border border-navy-600 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Have <span className="gradient-text">Questions?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                Our recruiting team is ready to answer any questions about life on the road with
                LAVA Freight. Give us a call or send an email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+1234567890" className="btn-primary text-lg px-10 py-5">
                  <Clock className="mr-2" size={24} />
                  Call Recruiting
                </a>
                <a href="mailto:recruiting@lavafreight.com" className="btn-secondary text-lg px-10 py-5">
                  Email Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
