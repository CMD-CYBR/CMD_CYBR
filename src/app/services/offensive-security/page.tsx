'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OffensiveSecurity() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Offensive Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Proactive security testing to identify vulnerabilities before attackers do. Our offensive security services help you understand your security posture from an attacker's perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is Offensive Security?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Offensive security involves actively testing your systems, networks, and applications to identify security vulnerabilities and weaknesses. Our team of certified ethical hackers uses the same tools and techniques as malicious attackers to find and help you fix security issues before they can be exploited.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Identify vulnerabilities before attackers do</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Test your security controls and incident response</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Comply with industry regulations and standards</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Reconnaissance</h4>
                  <p className="text-gray-300">Gather information about your systems and infrastructure</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Vulnerability Assessment</h4>
                  <p className="text-gray-300">Identify potential security weaknesses and misconfigurations</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Exploitation</h4>
                  <p className="text-gray-300">Attempt to exploit vulnerabilities to demonstrate impact</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Reporting</h4>
                  <p className="text-gray-300">Provide detailed findings and remediation recommendations</p>
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
              Our Offensive Security Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive security testing services tailored to your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Penetration Testing</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security assessment of your networks, applications, and infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Network penetration testing</li>
                <li>• Web application testing</li>
                <li>• Mobile application testing</li>
                <li>• Wireless network assessment</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Red Team Exercises</h3>
              <p className="text-gray-300 mb-4">
                Simulate real-world attacks to test your organization's detection and response capabilities.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Multi-vector attack simulation</li>
                <li>• Social engineering testing</li>
                <li>• Physical security assessment</li>
                <li>• Blue team evaluation</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-300 mb-4">
                Systematic identification and analysis of security vulnerabilities in your systems.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Automated vulnerability scanning</li>
                <li>• Manual security review</li>
                <li>• Configuration assessment</li>
                <li>• Risk prioritization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
