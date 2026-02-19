'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/95 to-navy-900" />
        <div className="container-custom mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-gray-400">Last updated: February 19, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto prose-custom">
              <div className="card space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    LAVA Freight (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our freight transportation services. Please read this policy carefully. By using our services, you consent to the practices described in this policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                  <h3 className="text-lg font-semibold text-gold-500 mb-2">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Company name and business information</li>
                    <li>Shipment details including origin, destination, and cargo information</li>
                    <li>Driver application information including CDL details, employment history, and driving record</li>
                    <li>Payment and billing information</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gold-500 mt-6 mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited, time spent on pages, and referring URLs</li>
                    <li>Device information and screen resolution</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide, maintain, and improve our freight transportation services</li>
                    <li>Process and fulfill shipping requests and quotes</li>
                    <li>Communicate with you about your shipments, account, or inquiries</li>
                    <li>Process driver applications and employment-related requests</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Comply with legal obligations and regulatory requirements</li>
                    <li>Protect against fraud and ensure the security of our services</li>
                    <li>Analyze website usage to improve user experience</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Service providers:</strong> Third parties who assist us in operating our business, such as payment processors, IT providers, and logistics partners</li>
                    <li><strong className="text-white">Business partners:</strong> Carriers, brokers, and shippers involved in fulfilling your shipments</li>
                    <li><strong className="text-white">Legal compliance:</strong> When required by law, regulation, or legal process</li>
                    <li><strong className="text-white">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">Depending on your jurisdiction, you may have the right to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data in a portable format</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    To exercise any of these rights, please contact us at{' '}
                    <a href="mailto:dan@lavafreight.net" className="text-gold-500 hover:underline">dan@lavafreight.net</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions or concerns about this Privacy Policy, please contact us:
                  </p>
                  <div className="mt-4 space-y-2 text-gray-300">
                    <p><strong className="text-white">LAVA Freight</strong></p>
                    <p>Email: <a href="mailto:dan@lavafreight.net" className="text-gold-500 hover:underline">dan@lavafreight.net</a></p>
                    <p>Phone: <a href="tel:+13129098180" className="text-gold-500 hover:underline">(312) 909-8180</a></p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
