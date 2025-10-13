'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PartnerLogos from '@/components/PartnerLogos'

export default function Partners() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <PartnerLogos />

      {/* Partnership Types */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Join our ecosystem of trusted partners and help organizations worldwide stay secure in an evolving threat landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Continuous Threat Exposure Management */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 pulse-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Continuous Threat Exposure Management</h3>
              <p className="text-gray-600 mb-6">
                Proactive threat intelligence and vulnerability management to identify and mitigate risks before they become incidents.
              </p>
              <button 
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border border-gray-300"
                onClick={() => window.location.href = '/partners/continuous-threat-exposure'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More
              </button>
            </div>

            {/* Managed Detection and Response */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 pulse-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Managed Detection and Response</h3>
              <p className="text-gray-600 mb-6">
                24/7 security operations with advanced threat detection, analysis, and rapid response capabilities.
              </p>
              <button 
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border border-gray-300"
                onClick={() => window.location.href = '/partners/managed-detection-response'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More
              </button>
            </div>

            {/* Incident Response */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 pulse-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Incident Response</h3>
              <p className="text-gray-600 mb-6">
                Rapid incident containment, investigation, and recovery services to minimize business impact and restore operations.
              </p>
              <button 
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border border-gray-300"
                onClick={() => window.location.href = '/partners/incident-response'}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Partnership Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Discover the advantages of partnering with CMD:CYBR and how we can help grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Revenue Growth</h3>
              <p className="text-gray-300">Access to new revenue streams and market opportunities through our partner programs.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Training & Support</h3>
              <p className="text-gray-300">Comprehensive training programs and ongoing support to help you succeed.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Co-Marketing</h3>
              <p className="text-gray-300">Joint marketing initiatives and co-branded materials to expand your reach.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dedicated Support</h3>
              <p className="text-gray-300">Dedicated partner success managers to help you achieve your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 slide-up">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in">
            Join our growing ecosystem of partners and help organizations worldwide stay secure. Let&apos;s build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border border-gray-300">
              Become a Partner
            </button>
            <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200">
              Download Partner Kit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
