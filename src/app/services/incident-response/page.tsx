'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IncidentResponse() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Digital Forensics & Incident Response
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Rapid response and forensic investigation services to help you contain, investigate, and recover from security incidents. Our expert team provides 24/7 incident response capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Rapid Incident Response</h2>
              <p className="text-lg text-gray-300 mb-6">
                When a security incident occurs, time is critical. Our Digital Forensics & Incident Response team provides rapid response services to contain threats, investigate breaches, and help you recover quickly while preserving evidence for legal proceedings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">24/7 incident response hotline</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Forensic investigation and evidence collection</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Threat containment and eradication</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Incident Response Process</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Preparation</h4>
                  <p className="text-gray-300">Develop incident response plans and procedures</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Detection & Analysis</h4>
                  <p className="text-gray-300">Identify and analyze security incidents</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Containment</h4>
                  <p className="text-gray-300">Isolate affected systems and prevent spread</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Recovery</h4>
                  <p className="text-gray-300">Restore systems and implement improvements</p>
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
              Our Incident Response Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive incident response and digital forensics capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Emergency Response</h3>
              <p className="text-gray-300 mb-4">
                Immediate response to active security incidents and breaches.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• 24/7 incident response hotline</li>
                <li>• Rapid threat containment</li>
                <li>• System isolation and recovery</li>
                <li>• Communication and coordination</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Digital Forensics</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive forensic investigation and evidence collection.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Computer forensics analysis</li>
                <li>• Network forensics investigation</li>
                <li>• Mobile device forensics</li>
                <li>• Evidence preservation and chain of custody</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Threat Hunting</h3>
              <p className="text-gray-300 mb-4">
                Proactive threat hunting to identify advanced persistent threats.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Advanced threat detection</li>
                <li>• Behavioral analysis</li>
                <li>• Threat intelligence integration</li>
                <li>• Custom detection rules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
