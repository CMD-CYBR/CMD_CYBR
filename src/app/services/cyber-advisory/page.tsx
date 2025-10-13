'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CyberAdvisory() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Cyber Advisory
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Strategic cybersecurity guidance to help you build a robust security program. Our advisory services provide expert insights and recommendations to strengthen your security posture.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Strategic Cybersecurity Guidance</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our cyber advisory services provide strategic guidance to help organizations build, mature, and maintain effective cybersecurity programs. We work with leadership teams to align security initiatives with business objectives and regulatory requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Develop comprehensive security strategies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Align security with business objectives</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Ensure regulatory compliance</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Advisory Process</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Assessment</h4>
                  <p className="text-gray-300">Evaluate current security posture and maturity</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Strategy Development</h4>
                  <p className="text-gray-300">Create tailored security roadmap and policies</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Implementation Support</h4>
                  <p className="text-gray-300">Guide execution of security initiatives</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Continuous Improvement</h4>
                  <p className="text-gray-300">Monitor progress and adjust strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Cyber Advisory Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive advisory services to strengthen your cybersecurity program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Security Strategy</h3>
              <p className="text-gray-300 mb-4">
                Develop comprehensive cybersecurity strategies aligned with your business goals.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Security program development</li>
                <li>• Risk management frameworks</li>
                <li>• Governance and compliance</li>
                <li>• Security architecture design</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Policy Development</h3>
              <p className="text-gray-300 mb-4">
                Create and implement security policies, procedures, and standards.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Security policy creation</li>
                <li>• Incident response procedures</li>
                <li>• Data protection policies</li>
                <li>• Employee training programs</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Compliance Advisory</h3>
              <p className="text-gray-300 mb-4">
                Ensure compliance with industry regulations and standards.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• ISO 27001 implementation</li>
                <li>• SOC 2 compliance</li>
                <li>• GDPR and privacy regulations</li>
                <li>• Industry-specific requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
