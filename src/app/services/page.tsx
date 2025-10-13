'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AllServices() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              All Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Comprehensive cybersecurity services to protect and strengthen your organization. Explore our full range of security solutions designed to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Complete Service Portfolio
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From strategic advisory to hands-on security operations, we provide end-to-end cybersecurity solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Offensive Security */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Offensive Security</h3>
              <p className="text-gray-300 mb-4">
                Proactive security testing to identify vulnerabilities before attackers do. Comprehensive penetration testing and red team exercises.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Penetration Testing</li>
                <li>• Red Team Exercises</li>
                <li>• Vulnerability Assessment</li>
              </ul>
              <div 
                className="text-green-400 hover:text-green-300 cursor-pointer font-semibold"
                onClick={() => window.location.href = '/services/offensive-security'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More →
              </div>
            </div>

            {/* Cyber Advisory */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cyber Advisory</h3>
              <p className="text-gray-300 mb-4">
                Strategic cybersecurity guidance to help you build a robust security program aligned with business objectives.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Security Strategy</li>
                <li>• Policy Development</li>
                <li>• Compliance Advisory</li>
              </ul>
              <div 
                className="text-blue-400 hover:text-blue-300 cursor-pointer font-semibold"
                onClick={() => window.location.href = '/services/cyber-advisory'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More →
              </div>
            </div>

            {/* Adversary Simulation */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Adversary Simulation</h3>
              <p className="text-gray-300 mb-4">
                Realistic attack simulations that test your organization's ability to detect, respond to, and recover from threats.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• APT Simulation</li>
                <li>• Ransomware Simulation</li>
                <li>• Social Engineering</li>
              </ul>
              <div 
                className="text-red-400 hover:text-red-300 cursor-pointer font-semibold"
                onClick={() => window.location.href = '/services/adversary-simulation'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More →
              </div>
            </div>

            {/* Virtual CISO */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Virtual CISO</h3>
              <p className="text-gray-300 mb-4">
                Access senior-level cybersecurity leadership without the full-time commitment. Strategic security guidance and oversight.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Strategic Planning</li>
                <li>• Governance & Compliance</li>
                <li>• Executive Communication</li>
              </ul>
              <div 
                className="text-purple-400 hover:text-purple-300 cursor-pointer font-semibold"
                onClick={() => window.location.href = '/services/virtual-ciso'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More →
              </div>
            </div>

            {/* Digital Forensics & Incident Response */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Forensics & Incident Response</h3>
              <p className="text-gray-300 mb-4">
                Rapid response and forensic investigation services to help you contain, investigate, and recover from security incidents.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Emergency Response</li>
                <li>• Digital Forensics</li>
                <li>• Threat Hunting</li>
              </ul>
              <div 
                className="text-orange-400 hover:text-orange-300 cursor-pointer font-semibold"
                onClick={() => window.location.href = '/services/incident-response'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More →
              </div>
            </div>

            {/* Managed Services */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Managed Services</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive managed security services to protect your organization 24/7. Let our expert team handle your cybersecurity operations.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Managed Detection & Response</li>
                <li>• Security Operations Center</li>
                <li>• Vulnerability Management</li>
              </ul>
              <div 
                className="text-cyan-400 hover:text-cyan-300 cursor-pointer font-semibold"
                onClick={() => window.location.href = '/services/managed-services'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss which services are right for your organization and get a customized security strategy.
          </p>
          <div 
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer"
            onClick={() => window.location.href = '/contact'}
            style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Get in Touch
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
