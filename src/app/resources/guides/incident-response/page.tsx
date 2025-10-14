'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IncidentResponseGuide() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Incident Response Playbook
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Comprehensive guide to developing and executing effective incident response procedures.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
              <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded">Guide</span>
              <span>Updated: November 2024</span>
              <span>•</span>
              <span>20 min read</span>
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
                <li><a href="#overview" className="hover:text-black transition-colors">1. Incident Response Overview</a></li>
                <li><a href="#team" className="hover:text-black transition-colors">2. Building Your IR Team</a></li>
                <li><a href="#phases" className="hover:text-black transition-colors">3. Incident Response Phases</a></li>
                <li><a href="#procedures" className="hover:text-black transition-colors">4. Response Procedures</a></li>
                <li><a href="#tools" className="hover:text-black transition-colors">5. Essential Tools & Technologies</a></li>
                <li><a href="#communication" className="hover:text-black transition-colors">6. Communication Plans</a></li>
                <li><a href="#recovery" className="hover:text-black transition-colors">7. Recovery & Lessons Learned</a></li>
              </ul>
            </div>

            {/* Overview */}
            <div id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">1. Incident Response Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Incident response is a systematic approach to addressing and managing the aftermath of a security breach or cyberattack. 
                The goal is to handle the situation in a way that limits damage and reduces recovery time and costs.
              </p>
              <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-black mb-3">🚨 Why Incident Response Matters</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Minimize business disruption and financial impact</li>
                  <li>• Protect customer data and maintain trust</li>
                  <li>• Meet regulatory compliance requirements</li>
                  <li>• Learn from incidents to prevent future attacks</li>
                </ul>
              </div>
            </div>

            {/* IR Team */}
            <div id="team" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">2. Building Your Incident Response Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Core Team Members</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Incident Commander:</strong> Overall coordination and decision-making</li>
                    <li>• <strong>Security Analyst:</strong> Technical investigation and analysis</li>
                    <li>• <strong>IT Administrator:</strong> System and network management</li>
                    <li>• <strong>Legal Counsel:</strong> Compliance and legal implications</li>
                    <li>• <strong>Communications Lead:</strong> Internal and external communications</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Extended Team</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>HR Representative:</strong> Employee-related incidents</li>
                    <li>• <strong>Business Unit Leaders:</strong> Business impact assessment</li>
                    <li>• <strong>External Experts:</strong> Forensic specialists, law enforcement</li>
                    <li>• <strong>Vendor Contacts:</strong> Third-party service providers</li>
                    <li>• <strong>Insurance Representatives:</strong> Coverage and claims</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Response Phases */}
            <div id="phases" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">3. Incident Response Phases</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 1: Preparation</h3>
                  <p className="text-gray-700 mb-2">Establish policies, procedures, and capabilities before an incident occurs.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Develop incident response plan and procedures</li>
                    <li>• Train incident response team members</li>
                    <li>• Implement monitoring and detection tools</li>
                    <li>• Establish communication channels and contacts</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 2: Identification</h3>
                  <p className="text-gray-700 mb-2">Detect and analyze potential security incidents.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Monitor security alerts and anomalies</li>
                    <li>• Analyze indicators of compromise (IoCs)</li>
                    <li>• Determine incident scope and impact</li>
                    <li>• Classify incident severity and type</li>
                  </ul>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 3: Containment</h3>
                  <p className="text-gray-700 mb-2">Limit the damage and prevent further spread of the incident.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Isolate affected systems and networks</li>
                    <li>• Preserve evidence for forensic analysis</li>
                    <li>• Implement temporary security measures</li>
                    <li>• Document all containment actions</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 4: Eradication</h3>
                  <p className="text-gray-700 mb-2">Remove the threat and vulnerabilities from the environment.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Remove malware and malicious code</li>
                    <li>• Patch vulnerabilities and update systems</li>
                    <li>• Change compromised credentials</li>
                    <li>• Strengthen security controls</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 5: Recovery</h3>
                  <p className="text-gray-700 mb-2">Restore systems and services to normal operations.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Restore systems from clean backups</li>
                    <li>• Gradually return services to production</li>
                    <li>• Monitor for signs of re-infection</li>
                    <li>• Validate system integrity and functionality</li>
                  </ul>
                </div>
                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Phase 6: Lessons Learned</h3>
                  <p className="text-gray-700 mb-2">Analyze the incident and improve future response capabilities.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Conduct post-incident review</li>
                    <li>• Document lessons learned</li>
                    <li>• Update policies and procedures</li>
                    <li>• Provide additional training as needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Response Procedures */}
            <div id="procedures" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">4. Response Procedures</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Immediate Response Checklist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">First 15 Minutes</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>□ Activate incident response team</li>
                        <li>□ Assess initial scope and impact</li>
                        <li>□ Begin evidence collection</li>
                        <li>□ Notify key stakeholders</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">First Hour</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>□ Implement containment measures</li>
                        <li>□ Document all actions taken</li>
                        <li>□ Establish communication channels</li>
                        <li>□ Begin forensic analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Communication Templates</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Internal Notification</h4>
                      <div className="bg-white p-4 rounded border text-sm text-gray-700">
                        <p><strong>Subject:</strong> Security Incident Alert - [Severity Level]</p>
                        <p><strong>Incident ID:</strong> [Unique Identifier]</p>
                        <p><strong>Time:</strong> [Date/Time]</p>
                        <p><strong>Status:</strong> [Current Status]</p>
                        <p><strong>Impact:</strong> [Brief Description]</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">External Notification</h4>
                      <div className="bg-white p-4 rounded border text-sm text-gray-700">
                        <p><strong>To:</strong> [Regulatory Body/Customers]</p>
                        <p><strong>Subject:</strong> Data Breach Notification</p>
                        <p><strong>Incident Summary:</strong> [Brief Description]</p>
                        <p><strong>Actions Taken:</strong> [Response Actions]</p>
                        <p><strong>Next Steps:</strong> [Recovery Plan]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Essential Tools */}
            <div id="tools" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">5. Essential Tools & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Detection & Monitoring</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• SIEM (Security Information and Event Management)</li>
                    <li>• EDR (Endpoint Detection and Response)</li>
                    <li>• Network monitoring tools</li>
                    <li>• Threat intelligence platforms</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Forensic Analysis</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Digital forensics tools</li>
                    <li>• Memory analysis software</li>
                    <li>• Network packet analyzers</li>
                    <li>• Malware analysis platforms</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Communication & Documentation</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Incident management platforms</li>
                    <li>• Secure communication tools</li>
                    <li>• Evidence collection systems</li>
                    <li>• Reporting and documentation tools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recovery & Lessons Learned */}
            <div id="recovery" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">7. Recovery & Lessons Learned</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Recovery Best Practices</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Test recovery procedures regularly</li>
                    <li>• Maintain clean, verified backups</li>
                    <li>• Implement gradual service restoration</li>
                    <li>• Monitor for signs of re-infection</li>
                    <li>• Validate system integrity before full restoration</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Post-Incident Review Process</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Key Questions to Ask</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• What went well during the response?</li>
                        <li>• What could have been done better?</li>
                        <li>• Were all team members properly trained?</li>
                        <li>• Were communication channels effective?</li>
                        <li>• How can we prevent similar incidents?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Incident Response Capability?</h2>
              <p className="text-gray-300 mb-6">
                Effective incident response requires preparation, practice, and continuous improvement. 
                Start building your capabilities today to protect your organization from cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Incident Response Support
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
