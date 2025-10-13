'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Consulting() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Cybersecurity Consulting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Expert guidance on security strategy, risk assessment, and compliance to strengthen your security posture.
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
                What is Cybersecurity Consulting?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our cybersecurity consulting services provide expert guidance and strategic direction to help organizations 
                build robust security programs, assess risks, and ensure compliance with industry standards and regulations.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We work closely with your team to understand your unique business requirements and develop tailored 
                security strategies that align with your organizational goals while protecting your critical assets.
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
                    <span>Strategic security planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Risk assessment and mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Compliance guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Expert recommendations</span>
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
              Our Consulting Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Comprehensive cybersecurity consulting services designed to strengthen your security posture and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Security Strategy</h3>
              <p className="text-gray-600">
                Develop comprehensive security strategies aligned with your business objectives and risk tolerance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Risk Assessment</h3>
              <p className="text-gray-600">
                Comprehensive risk assessments to identify vulnerabilities and prioritize security investments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Compliance Guidance</h3>
              <p className="text-gray-600">
                Expert guidance on regulatory compliance including GDPR, HIPAA, SOX, and industry-specific requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Security Architecture</h3>
              <p className="text-gray-600">
                Design and implement robust security architectures that protect your infrastructure and data.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Policy Development</h3>
              <p className="text-gray-600">
                Create comprehensive security policies and procedures tailored to your organization&apos;s needs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Team Training</h3>
              <p className="text-gray-600">
                Comprehensive security awareness training and specialized technical training for your security team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Our Consulting Approach
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Our proven methodology ensures comprehensive security consulting that delivers measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300">Comprehensive evaluation of your current security posture and business requirements.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
              <p className="text-gray-300">Development of tailored security strategies aligned with your business objectives.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-gray-300">Guided implementation of security controls and best practices.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
              <p className="text-gray-300">Continuous monitoring and optimization of your security program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Consulting Service */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Why Choose Our Consulting Service?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Our experienced consultants bring deep expertise and industry knowledge to help you build a robust security program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Expert Team</h3>
              <p className="text-gray-600 mb-4">
                Our consulting team consists of certified security professionals with extensive experience across 
                various industries and security domains, bringing deep technical knowledge and practical insights.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• CISSP, CISM, and CISA certified consultants</li>
                <li>• Industry-specific expertise</li>
                <li>• Proven track record of success</li>
                <li>• Continuous professional development</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Tailored Solutions</h3>
              <p className="text-gray-600 mb-4">
                We understand that every organization is unique. Our consulting approach is customized to your 
                specific business requirements, risk tolerance, and regulatory environment.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Industry-specific recommendations</li>
                <li>• Scalable security frameworks</li>
                <li>• Cost-effective solutions</li>
                <li>• Long-term strategic planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 slide-up">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in">
            Let our expert consultants help you build a comprehensive security program that protects your 
            organization and ensures compliance with industry standards.
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
              onClick={() => window.location.href = '/what-we-do'}
            >
              Back to What We Do
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
