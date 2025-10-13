'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MDR() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Managed Detection and Response (MDR)
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              24/7 monitoring and response to cyber threats with advanced threat hunting capabilities and rapid incident response.
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
                What is Managed Detection and Response?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our Managed Detection and Response (MDR) service provides comprehensive 24/7 security monitoring, 
                threat detection, and incident response capabilities. We combine advanced technology with expert 
                human analysis to protect your organization from sophisticated cyber threats.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our MDR service goes beyond traditional security monitoring by actively hunting for threats, 
                analyzing suspicious activities, and providing immediate response to security incidents, 
                ensuring your organization is protected around the clock.
              </p>
            </div>
            <div className="slide-in-right">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black text-center mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>24/7 security monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Advanced threat hunting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Rapid incident response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Expert security analysis</span>
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
              Our MDR Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Comprehensive managed detection and response services designed to protect your organization from advanced threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Continuous Monitoring</h3>
              <p className="text-gray-600">
                24/7 monitoring of your network, endpoints, and cloud environments to detect threats in real-time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Threat Hunting</h3>
              <p className="text-gray-600">
                Proactive hunting for advanced persistent threats and sophisticated attack techniques that evade traditional detection.
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
                Immediate response to security incidents with containment, investigation, and remediation services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">
                Machine learning and behavioral analytics to identify anomalous activities and emerging threats.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Expert Analysis</h3>
              <p className="text-gray-600">
                Dedicated security analysts with deep expertise in threat intelligence and incident response.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 slide-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Detailed Reporting</h3>
              <p className="text-gray-600">
                Comprehensive reports and dashboards providing insights into your security posture and threat landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              How Our MDR Service Works
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Our comprehensive approach ensures complete protection through advanced technology and expert human analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deploy & Monitor</h3>
              <p className="text-gray-300">Deploy our advanced monitoring tools across your infrastructure for comprehensive visibility.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Detect & Analyze</h3>
              <p className="text-gray-300">Our AI-powered systems and expert analysts identify and analyze potential threats.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Respond & Contain</h3>
              <p className="text-gray-300">Immediate response to confirmed threats with rapid containment and mitigation.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Report & Improve</h3>
              <p className="text-gray-300">Detailed reporting and continuous improvement of your security posture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Advanced Technology Stack
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              We leverage cutting-edge security technologies to provide comprehensive threat detection and response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Advanced AI algorithms and machine learning models to detect sophisticated threats and behavioral anomalies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Behavioral analytics</li>
                <li>• Anomaly detection</li>
                <li>• Predictive threat modeling</li>
                <li>• Automated threat classification</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Threat Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Real-time threat intelligence feeds and global threat landscape monitoring to stay ahead of emerging threats.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Global threat feeds</li>
                <li>• IOCs and TTPs</li>
                <li>• Dark web monitoring</li>
                <li>• Threat actor profiling</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Security Orchestration</h3>
              <p className="text-gray-600 mb-4">
                Automated security orchestration and response capabilities to accelerate incident response and remediation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• SOAR platform integration</li>
                <li>• Automated playbooks</li>
                <li>• Workflow automation</li>
                <li>• Integration with existing tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our MDR Service */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Why Choose Our MDR Service?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Our MDR service combines cutting-edge technology with expert human analysis for comprehensive protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">24/7 Security Operations Center</h3>
              <p className="text-gray-600 mb-4">
                Our dedicated SOC operates around the clock with certified security analysts monitoring your 
                environment for threats and responding to incidents in real-time.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Certified security analysts (CISSP, GCIH, CEH)</li>
                <li>• Multiple time zone coverage</li>
                <li>• Escalation procedures for critical incidents</li>
                <li>• Direct communication channels</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 slide-up">
              <h3 className="text-2xl font-bold text-black mb-4">Proven Track Record</h3>
              <p className="text-gray-600 mb-4">
                Our MDR service has successfully protected organizations across various industries, 
                with a proven track record of threat detection and incident response.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 99% threat detection accuracy</li>
                <li>• &lt; 5 minute average response time</li>
                <li>• 100+ successful incident responses</li>
                <li>• Industry-leading customer satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 slide-up">
            Protect Your Organization 24/7
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in">
            Don't wait for a breach to happen. Our MDR service provides proactive protection 
            and rapid response to keep your organization secure.
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
