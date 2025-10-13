'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function VirtualCISO() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Virtual CISO
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Access senior-level cybersecurity leadership without the full-time commitment. Our Virtual CISO services provide strategic security guidance and oversight tailored to your organization&apos;s needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Executive Security Leadership</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our Virtual CISO (vCISO) service provides experienced cybersecurity leadership to organizations that need strategic security guidance but may not require or be able to afford a full-time CISO. We act as your trusted security advisor and executive team member.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Strategic security planning and governance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Board and executive communication</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Risk management and compliance oversight</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">vCISO Engagement Model</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Assessment</h4>
                  <p className="text-gray-300">Evaluate current security posture and maturity</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Strategy Development</h4>
                  <p className="text-gray-300">Create comprehensive security roadmap</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Implementation</h4>
                  <p className="text-gray-300">Guide execution of security initiatives</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Ongoing Support</h4>
                  <p className="text-gray-300">Provide continuous leadership and guidance</p>
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
              Virtual CISO Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive executive-level cybersecurity leadership and guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Strategic Planning</h3>
              <p className="text-gray-300 mb-4">
                Develop and execute comprehensive cybersecurity strategies aligned with business objectives.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Security program development</li>
                <li>• Risk management frameworks</li>
                <li>• Security architecture design</li>
                <li>• Technology roadmap planning</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Governance & Compliance</h3>
              <p className="text-gray-300 mb-4">
                Establish security governance structures and ensure regulatory compliance.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Security policy development</li>
                <li>• Compliance program management</li>
                <li>• Audit and assessment oversight</li>
                <li>• Regulatory reporting</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Executive Communication</h3>
              <p className="text-gray-300 mb-4">
                Provide clear communication to board members and executives on security matters.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Board presentations</li>
                <li>• Executive briefings</li>
                <li>• Risk reporting</li>
                <li>• Incident communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
