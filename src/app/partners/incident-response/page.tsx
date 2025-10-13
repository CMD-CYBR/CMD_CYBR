'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IncidentResponse() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Incident Response
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Rapid incident containment, investigation, and recovery services to minimize business impact and restore operations.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is Incident Response?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Incident Response is a systematic approach to addressing and managing the aftermath of a security 
                breach or cyberattack. Our expert team provides rapid containment, thorough investigation, and 
                complete recovery services to minimize business impact and restore normal operations quickly.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                When a security incident occurs, time is critical. Our 24/7 incident response team is ready to 
                respond immediately, providing expert guidance and hands-on support to contain the threat, 
                investigate the scope, and restore your systems to full operation.
              </p>
            </div>
            <div className="slide-in-right">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black text-center mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>24/7 emergency response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Rapid threat containment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Expert forensic analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Minimal business disruption</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Our Incident Response Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Comprehensive incident response services designed to minimize impact and restore operations quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Emergency Response</h3>
              <p className="text-gray-600">
                24/7 emergency response team ready to contain threats and minimize damage within minutes of detection.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Threat Containment</h3>
              <p className="text-gray-600">
                Rapid isolation and containment of threats to prevent further spread and damage to your systems.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Forensic Investigation</h3>
              <p className="text-gray-600">
                Comprehensive forensic analysis to determine the scope, impact, and root cause of security incidents.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">System Recovery</h3>
              <p className="text-gray-600">
                Complete system restoration and recovery services to get your operations back online quickly and securely.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Communication Support</h3>
              <p className="text-gray-600">
                Expert guidance on internal and external communications, including regulatory notifications and media relations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Post-Incident Analysis</h3>
              <p className="text-gray-600">
                Detailed post-incident analysis and recommendations to strengthen your security posture and prevent future incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Our Incident Response Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Our proven methodology ensures rapid, effective response to security incidents with minimal business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Immediate Response</h3>
              <p className="text-gray-300">24/7 hotline response with immediate threat assessment and initial containment measures.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Threat Containment</h3>
              <p className="text-gray-300">Rapid isolation of affected systems and implementation of containment strategies.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Investigation</h3>
              <p className="text-gray-300">Comprehensive forensic analysis to determine scope, impact, and root cause.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Recovery</h3>
              <p className="text-gray-300">System restoration and implementation of security improvements to prevent recurrence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Incident Response Service */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Why Choose Our Incident Response Service?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Our experienced team and proven methodology ensure rapid, effective response to security incidents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Expert Response Team</h3>
              <p className="text-gray-600 mb-4">
                Our incident response team consists of certified security professionals with extensive experience 
                in handling complex security incidents across various industries and attack vectors.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• CISSP, GCIH, and CEH certified analysts</li>
                <li>• 24/7 emergency response capability</li>
                <li>• Experience with advanced persistent threats</li>
                <li>• Industry-specific expertise</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Proven Methodology</h3>
              <p className="text-gray-600 mb-4">
                Our incident response methodology is based on industry best practices and has been refined 
                through handling hundreds of security incidents across various organizations and industries.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• NIST and SANS framework compliance</li>
                <li>• Rapid response protocols</li>
                <li>• Evidence preservation procedures</li>
                <li>• Regulatory compliance support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
            Need Immediate Incident Response?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto fade-in">
            If you're experiencing a security incident right now, don't wait. Our emergency response team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <button 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              onClick={() => window.location.href = '/contact'}
            >
              Emergency Response Hotline
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              onClick={() => window.location.href = '/partners'}
            >
              Back to Partners
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
