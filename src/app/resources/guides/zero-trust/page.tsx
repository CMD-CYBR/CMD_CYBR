'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ZeroTrustGuide() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Zero Trust Implementation Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Step-by-step guide to implementing Zero Trust security architecture in your organization.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
              <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded">Guide</span>
              <span>Updated: December 2024</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            
            {/* Table of Contents */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6">Table of Contents</h2>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#overview" className="hover:text-black transition-colors">1. Zero Trust Overview</a></li>
                <li><a href="#principles" className="hover:text-black transition-colors">2. Core Principles</a></li>
                <li><a href="#assessment" className="hover:text-black transition-colors">3. Current State Assessment</a></li>
                <li><a href="#implementation" className="hover:text-black transition-colors">4. Implementation Roadmap</a></li>
                <li><a href="#technologies" className="hover:text-black transition-colors">5. Key Technologies</a></li>
                <li><a href="#best-practices" className="hover:text-black transition-colors">6. Best Practices</a></li>
                <li><a href="#monitoring" className="hover:text-black transition-colors">7. Monitoring & Maintenance</a></li>
              </ul>
            </div>

            {/* Overview */}
            <div id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">1. Zero Trust Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zero Trust is a security framework that requires all users, whether inside or outside the organization's network, 
                to be authenticated, authorized, and continuously validated before being granted or keeping access to applications and data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike traditional security models that assume everything inside the network is trustworthy, Zero Trust operates 
                on the principle of "never trust, always verify."
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-black mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced security posture and reduced attack surface</li>
                  <li>• Better visibility into network traffic and user behavior</li>
                  <li>• Improved compliance with regulatory requirements</li>
                  <li>• Reduced risk of lateral movement in case of breach</li>
                </ul>
              </div>
            </div>

            {/* Core Principles */}
            <div id="principles" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">2. Core Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Verify Explicitly</h3>
                  <p className="text-gray-700">Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Use Least Privilege Access</h3>
                  <p className="text-gray-700">Limit user access with just-in-time and just-enough-access (JIT/JEA), risk-based adaptive policies, and data protection to help secure both data and productivity.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Assume Breach</h3>
                  <p className="text-gray-700">Minimize blast radius for breaches and prevent lateral movement by segmenting access by network, user, devices, and application awareness.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Continuous Monitoring</h3>
                  <p className="text-gray-700">Implement comprehensive logging and monitoring to detect and respond to threats in real-time, with automated response capabilities.</p>
                </div>
              </div>
            </div>

            {/* Implementation Roadmap */}
            <div id="implementation" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">4. Implementation Roadmap</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 1: Foundation (Months 1-3)</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Conduct security assessment and inventory</li>
                    <li>• Implement identity and access management (IAM)</li>
                    <li>• Deploy multi-factor authentication (MFA)</li>
                    <li>• Establish device management policies</li>
                  </ul>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 2: Network Segmentation (Months 4-6)</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Implement network micro-segmentation</li>
                    <li>• Deploy software-defined perimeter (SDP)</li>
                    <li>• Configure network access control (NAC)</li>
                    <li>• Establish secure remote access</li>
                  </ul>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 3: Application Security (Months 7-9)</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Implement application-level controls</li>
                    <li>• Deploy API security measures</li>
                    <li>• Establish data loss prevention (DLP)</li>
                    <li>• Configure endpoint detection and response (EDR)</li>
                  </ul>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 4: Advanced Analytics (Months 10-12)</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Deploy security information and event management (SIEM)</li>
                    <li>• Implement user and entity behavior analytics (UEBA)</li>
                    <li>• Establish automated response capabilities</li>
                    <li>• Conduct continuous security testing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Technologies */}
            <div id="technologies" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">5. Key Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Identity & Access Management</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Azure Active Directory</li>
                    <li>• Okta</li>
                    <li>• Ping Identity</li>
                    <li>• ForgeRock</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Network Security</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Software-Defined Perimeter</li>
                    <li>• Network Access Control</li>
                    <li>• Micro-segmentation</li>
                    <li>• VPN Solutions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Monitoring & Analytics</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• SIEM Platforms</li>
                    <li>• UEBA Solutions</li>
                    <li>• Endpoint Detection</li>
                    <li>• Cloud Security Posture</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div id="best-practices" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">6. Best Practices</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">✅ Start Small and Scale</h3>
                  <p className="text-gray-700">Begin with pilot programs focusing on high-value assets and gradually expand to cover the entire organization.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">💡 Focus on User Experience</h3>
                  <p className="text-gray-700">Ensure security measures don't significantly impact productivity. Implement seamless authentication and access controls.</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-black mb-3">⚠️ Regular Security Assessments</h3>
                  <p className="text-gray-700">Conduct periodic reviews and penetration testing to validate your Zero Trust implementation and identify gaps.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-black mb-3">🔄 Continuous Improvement</h3>
                  <p className="text-gray-700">Regularly update policies, technologies, and processes based on threat intelligence and organizational changes.</p>
                </div>
              </div>
            </div>

            {/* Monitoring & Maintenance */}
            <div id="monitoring" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">7. Monitoring & Maintenance</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Continuous monitoring is essential for maintaining an effective Zero Trust architecture. Implement comprehensive 
                logging, real-time threat detection, and automated response capabilities.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-4">Key Metrics to Monitor</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Authentication success/failure rates</li>
                    <li>• Access request patterns</li>
                    <li>• Device compliance status</li>
                    <li>• Network traffic anomalies</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Policy violation incidents</li>
                    <li>• Threat detection alerts</li>
                    <li>• User behavior deviations</li>
                    <li>• System performance metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Implement Zero Trust?</h2>
              <p className="text-gray-300 mb-6">
                Implementing Zero Trust is a journey that requires careful planning, stakeholder buy-in, and continuous commitment. 
                Start with a pilot program and gradually expand your implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Expert Consultation
                </button>
                <button 
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200"
                  onClick={() => window.location.href = '/resources/guides'}
                >
                  View More Guides
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
