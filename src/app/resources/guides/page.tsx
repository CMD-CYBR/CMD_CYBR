'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Guides() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Security Guides
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Step-by-step guides to help you implement security best practices and protect your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Guide 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Guide</span>
                  <span className="text-gray-500 text-sm ml-2">Dec 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Zero Trust Implementation Guide</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step guide to implementing Zero Trust security architecture in your organization.
                </p>
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => window.location.href = '/resources/guides/zero-trust'}
                  style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
                >
                  Read Guide
                </button>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Guide</span>
                  <span className="text-gray-500 text-sm ml-2">Nov 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Incident Response Playbook</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive guide to developing and executing effective incident response procedures.
                </p>
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => window.location.href = '/resources/guides/incident-response'}
                  style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
                >
                  Read Guide
                </button>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Guide</span>
                  <span className="text-gray-500 text-sm ml-2">Oct 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Password Security Best Practices</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Essential guidelines for creating and managing secure passwords and authentication systems.
                </p>
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => window.location.href = '/resources/guides/password-security'}
                  style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
                >
                  Read Guide
                </button>
              </div>
            </div>

            {/* Guide 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Guide</span>
                  <span className="text-gray-500 text-sm ml-2">Sep 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Network Security Hardening</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete guide to securing network infrastructure and preventing unauthorized access.
                </p>
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => window.location.href = '/resources/guides/network-security'}
                  style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
                >
                  Read Guide
                </button>
              </div>
            </div>

            {/* Guide 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Guide</span>
                  <span className="text-gray-500 text-sm ml-2">Aug 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Employee Security Awareness Training</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Framework for developing effective security awareness programs for your workforce.
                </p>
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => window.location.href = '/resources/guides/security-awareness'}
                  style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
                >
                  Read Guide
                </button>
              </div>
            </div>

            {/* Guide 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Guide</span>
                  <span className="text-gray-500 text-sm ml-2">Jul 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Cloud Security Configuration</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step guide to configuring security settings for major cloud platforms.
                </p>
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => window.location.href = '/resources/guides/cloud-security'}
                  style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
                >
                  Read Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
