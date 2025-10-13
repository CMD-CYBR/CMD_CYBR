'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContinuousThreatExposure() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Continuous Threat Exposure Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Proactive threat intelligence and vulnerability management to identify and mitigate risks before they become incidents.
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
                What is Continuous Threat Exposure Management?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Continuous Threat Exposure Management (CTEM) is a proactive cybersecurity approach that continuously 
                identifies, assesses, and mitigates security vulnerabilities and threats across your entire digital 
                infrastructure before they can be exploited by attackers.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Unlike traditional vulnerability management that operates on periodic scans, CTEM provides real-time 
                visibility into your security posture, enabling faster response to emerging threats and reducing 
                your overall risk exposure.
              </p>
            </div>
            <div className="slide-in-right">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black text-center mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Real-time threat visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Proactive risk mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Reduced attack surface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Faster incident response</span>
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
              Our CTEM Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Comprehensive threat exposure management tailored to your organization's unique security needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Threat Intelligence</h3>
              <p className="text-gray-600">
                Continuous monitoring of global threat landscapes and emerging attack vectors to stay ahead of potential threats.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-600">
                Regular scanning and assessment of your infrastructure to identify and prioritize security vulnerabilities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Rapid Response</h3>
              <p className="text-gray-600">
                Immediate threat containment and mitigation strategies to minimize potential damage and business impact.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Risk Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics and reporting to provide insights into your security posture and risk trends.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Compliance Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring to ensure compliance with industry regulations and security standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Round-the-clock monitoring and alerting to ensure immediate response to any security threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our CTEM Service */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Why Choose Our CTEM Service?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Our expertise and advanced tools ensure comprehensive protection against evolving cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Expert Security Team</h3>
              <p className="text-gray-600 mb-4">
                Our certified security professionals bring years of experience in threat intelligence, 
                vulnerability management, and incident response to protect your organization.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• CISSP, CISM, and CEH certified analysts</li>
                <li>• 24/7 security operations center</li>
                <li>• Industry-leading threat intelligence</li>
                <li>• Proven track record of success</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Advanced Technology</h3>
              <p className="text-gray-600 mb-4">
                We leverage cutting-edge security tools and platforms to provide comprehensive 
                threat exposure management and real-time protection.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• AI-powered threat detection</li>
                <li>• Automated vulnerability scanning</li>
                <li>• Real-time threat intelligence feeds</li>
                <li>• Advanced analytics and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 slide-up">
            Ready to Enhance Your Security Posture?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in">
            Protect your organization with our comprehensive Continuous Threat Exposure Management services. 
            Let us help you stay ahead of evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <button 
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Today
            </button>
            <button 
              className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200"
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
