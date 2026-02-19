'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function TermsPage() {
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
              Terms & <span className="gradient-text">Conditions</span>
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing or using the LAVA Freight website and services, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use our services. These Terms constitute a legally binding agreement between you and LAVA Freight.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                  <p className="text-gray-300 leading-relaxed">
                    LAVA Freight provides freight transportation and logistics services, including but not limited to full truckload (FTL), less than truckload (LTL), expedited shipping, dedicated routes, warehousing, and specialized freight services. All services are subject to availability and applicable regulations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Quotes and Pricing</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                    <li>All quotes provided are estimates and may be subject to change based on actual shipment details, weight, dimensions, and market conditions.</li>
                    <li>Quotes are valid for the time period specified and are subject to availability at the time of booking.</li>
                    <li>Additional charges may apply for accessorial services such as liftgate, inside delivery, detention, layover, or special handling requirements.</li>
                    <li>Fuel surcharges may be applied and are subject to change based on current fuel prices.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Shipping and Delivery</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                    <li>Delivery dates and transit times are estimates and are not guaranteed unless specifically agreed upon in writing as a guaranteed service.</li>
                    <li>LAVA Freight is not liable for delays caused by weather, traffic, mechanical issues, acts of God, government actions, or other circumstances beyond our reasonable control.</li>
                    <li>The shipper is responsible for ensuring that all freight is properly packaged, labeled, and documented in accordance with applicable regulations.</li>
                    <li>Hazardous materials must be properly classified, packaged, marked, labeled, and documented in accordance with DOT and applicable regulations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Liability and Claims</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    LAVA Freight&apos;s liability for loss or damage to freight is governed by applicable federal and state regulations:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                    <li>Claims for loss or damage must be filed in writing within nine (9) months from the date of delivery or expected delivery.</li>
                    <li>Suits must be instituted within two (2) years and one (1) day from the date of written denial of the claim.</li>
                    <li>Liability is limited to the actual value of the goods at the time of shipment, or the declared value, whichever is less.</li>
                    <li>LAVA Freight is not liable for consequential, incidental, or special damages arising from the transportation of freight.</li>
                    <li>The shipper is responsible for obtaining additional cargo insurance if the value of goods exceeds standard liability limits.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                    <li>Payment is due within thirty (30) days of invoice date unless otherwise agreed upon in writing.</li>
                    <li>Late payments may be subject to interest charges at a rate of 1.5% per month or the maximum rate permitted by law, whichever is less.</li>
                    <li>LAVA Freight reserves the right to hold shipments or suspend services for accounts with past-due balances.</li>
                    <li>The shipper is responsible for all costs of collection, including reasonable attorney fees, in the event of non-payment.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Prohibited Items</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    LAVA Freight reserves the right to refuse shipment of the following:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Illegal goods or contraband</li>
                    <li>Improperly packaged or labeled hazardous materials</li>
                    <li>Live animals (unless specifically arranged)</li>
                    <li>Perishable goods without proper temperature-controlled arrangements</li>
                    <li>Items that pose a safety risk to drivers, equipment, or the public</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Website Use</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By using our website, you agree to the following:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                    <li>You will not use the website for any unlawful purpose or in violation of these Terms.</li>
                    <li>You will not attempt to gain unauthorized access to any part of the website or its systems.</li>
                    <li>You will provide accurate and complete information when submitting forms or creating accounts.</li>
                    <li>You will not reproduce, distribute, or modify any content from the website without our prior written consent.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and software, is the property of LAVA Freight or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws. The LAVA Freight name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of LAVA Freight.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
                  <p className="text-gray-300 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless LAVA Freight, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney fees) arising out of or related to your use of our services, your violation of these Terms, or your violation of any rights of a third party.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To the maximum extent permitted by law, LAVA Freight shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our website or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Cook County, Illinois.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    LAVA Freight reserves the right to modify or replace these Terms at any time at our sole discretion. Changes will be posted on this page with an updated revision date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us:
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
