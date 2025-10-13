'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ManagedServices() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Managed Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Comprehensive managed security services to protect your organization 24/7. Let our expert team handle your cybersecurity operations while you focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">24/7 Security Operations</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our managed security services provide round-the-clock protection for your organization. We monitor your systems, detect threats, and respond to incidents while you focus on running your business. Our team of certified security professionals ensures your security posture remains strong.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">24/7 security monitoring and response</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Proactive threat detection and prevention</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Compliance and reporting support</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Managed Service Model</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Assessment</h4>
                  <p className="text-gray-300">Evaluate your current security infrastructure</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Implementation</h4>
                  <p className="text-gray-300">Deploy and configure security tools and processes</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Monitoring</h4>
                  <p className="text-gray-300">Continuous 24/7 security monitoring and analysis</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Optimization</h4>
                  <p className="text-gray-300">Continuous improvement and threat intelligence updates</p>
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
              Our Managed Security Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive managed security services to protect your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Managed Detection & Response</h3>
              <p className="text-gray-300 mb-4">
                Advanced threat detection and response services with 24/7 monitoring.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• 24/7 security monitoring</li>
                <li>• Advanced threat detection</li>
                <li>• Incident response and containment</li>
                <li>• Threat hunting and analysis</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Security Operations Center</h3>
              <p className="text-gray-300 mb-4">
                Dedicated SOC services with expert analysts and advanced tools.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Dedicated security analysts</li>
                <li>• SIEM management and tuning</li>
                <li>• Log analysis and correlation</li>
                <li>• Security tool management</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Vulnerability Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive vulnerability assessment and remediation services.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Regular vulnerability scanning</li>
                <li>• Risk assessment and prioritization</li>
                <li>• Patch management support</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
