'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NetworkSecurityGuide() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Network Security Hardening
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Complete guide to securing network infrastructure and preventing unauthorized access.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
              <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded">Guide</span>
              <span>Updated: September 2024</span>
              <span>•</span>
              <span>18 min read</span>
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
                <li><a href="#overview" className="hover:text-black transition-colors">1. Network Security Overview</a></li>
                <li><a href="#assessment" className="hover:text-black transition-colors">2. Security Assessment</a></li>
                <li><a href="#firewalls" className="hover:text-black transition-colors">3. Firewall Configuration</a></li>
                <li><a href="#segmentation" className="hover:text-black transition-colors">4. Network Segmentation</a></li>
                <li><a href="#monitoring" className="hover:text-black transition-colors">5. Network Monitoring</a></li>
                <li><a href="#access-control" className="hover:text-black transition-colors">6. Access Control</a></li>
                <li><a href="#wireless" className="hover:text-black transition-colors">7. Wireless Security</a></li>
                <li><a href="#maintenance" className="hover:text-black transition-colors">8. Ongoing Maintenance</a></li>
              </ul>
            </div>

            {/* Overview */}
            <div id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">1. Network Security Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Network security hardening involves implementing multiple layers of security controls to protect network infrastructure 
                from unauthorized access, data breaches, and cyber attacks. A well-hardened network is the foundation of a secure IT environment.
              </p>
              <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-black mb-3">🚨 Common Network Security Threats</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Unauthorized access and data breaches</li>
                  <li>• Malware and ransomware attacks</li>
                  <li>• Distributed Denial of Service (DDoS) attacks</li>
                  <li>• Man-in-the-middle attacks</li>
                  <li>• Insider threats and privilege escalation</li>
                </ul>
              </div>
            </div>

            {/* Security Assessment */}
            <div id="assessment" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">2. Security Assessment</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Network Inventory & Mapping</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Asset Discovery</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Network devices and endpoints</li>
                        <li>• Servers and applications</li>
                        <li>• Network topology mapping</li>
                        <li>• Service and port enumeration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Vulnerability Assessment</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Port scanning and service detection</li>
                        <li>• Vulnerability scanning</li>
                        <li>• Configuration review</li>
                        <li>• Security policy compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Assessment Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Network Scanners</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Nmap</li>
                        <li>• Nessus</li>
                        <li>• OpenVAS</li>
                        <li>• Qualys</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Traffic Analysis</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Wireshark</li>
                        <li>• tcpdump</li>
                        <li>• NetworkMiner</li>
                        <li>• NetFlow analyzers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Configuration Review</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Nipper-ng</li>
                        <li>• Firemon</li>
                        <li>• Tufin</li>
                        <li>• AlgoSec</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Firewall Configuration */}
            <div id="firewalls" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">3. Firewall Configuration</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Firewall Best Practices</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Default Deny:</strong> Block all traffic by default, allow only necessary services</li>
                    <li>• <strong>Least Privilege:</strong> Grant minimum required access</li>
                    <li>• <strong>Regular Updates:</strong> Keep firewall firmware and rules current</li>
                    <li>• <strong>Logging:</strong> Enable comprehensive logging and monitoring</li>
                    <li>• <strong>Segmentation:</strong> Use internal firewalls for network segmentation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Firewall Rule Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Rule Organization</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Group related rules together</li>
                        <li>• Use descriptive rule names</li>
                        <li>• Document rule purposes</li>
                        <li>• Regular rule cleanup</li>
                        <li>• Version control for rules</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Security Considerations</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Avoid overly permissive rules</li>
                        <li>• Review and test rule changes</li>
                        <li>• Monitor rule effectiveness</li>
                        <li>• Implement change management</li>
                        <li>• Regular security audits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Segmentation */}
            <div id="segmentation" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">4. Network Segmentation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Network segmentation divides the network into smaller, isolated segments to limit the spread of attacks and 
                reduce the attack surface. This is a critical component of defense-in-depth security.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Segmentation Strategies</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>VLAN Segmentation:</strong>
                      <span className="block text-sm text-gray-600">Separate network traffic using virtual LANs</span>
                    </li>
                    <li>
                      <strong>Subnet Isolation:</strong>
                      <span className="block text-sm text-gray-600">Create separate IP subnets for different functions</span>
                    </li>
                    <li>
                      <strong>Micro-segmentation:</strong>
                      <span className="block text-sm text-gray-600">Granular control at the workload level</span>
                    </li>
                    <li>
                      <strong>Air-gapped Networks:</strong>
                      <span className="block text-sm text-gray-600">Physically isolated critical systems</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Segmentation Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Limit lateral movement of attackers</li>
                    <li>• Reduce blast radius of breaches</li>
                    <li>• Improve network performance</li>
                    <li>• Simplify compliance requirements</li>
                    <li>• Enable granular access controls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Network Monitoring */}
            <div id="monitoring" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">5. Network Monitoring</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Monitoring Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Traffic Analysis</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• NetFlow/sFlow collection</li>
                        <li>• Packet capture analysis</li>
                        <li>• Bandwidth monitoring</li>
                        <li>• Protocol analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Security Monitoring</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Intrusion detection (IDS)</li>
                        <li>• Intrusion prevention (IPS)</li>
                        <li>• Security information management</li>
                        <li>• Threat intelligence feeds</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Performance Monitoring</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Device health monitoring</li>
                        <li>• Network latency tracking</li>
                        <li>• Availability monitoring</li>
                        <li>• Capacity planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Key Metrics to Monitor</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Unusual traffic patterns or spikes</li>
                    <li>• Failed authentication attempts</li>
                    <li>• Unauthorized access attempts</li>
                    <li>• Network device performance</li>
                    <li>• Security policy violations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Access Control */}
            <div id="access-control" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">6. Access Control</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Network Access Control (NAC)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Device authentication and authorization</li>
                    <li>• Endpoint compliance checking</li>
                    <li>• Guest network management</li>
                    <li>• Automated remediation</li>
                    <li>• Policy enforcement</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Privileged Access Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Administrative account management</li>
                    <li>• Just-in-time access provisioning</li>
                    <li>• Session recording and monitoring</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Regular access reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Wireless Security */}
            <div id="wireless" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">7. Wireless Security</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Wireless Security Best Practices</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use WPA3 encryption (avoid WEP and WPA)</li>
                    <li>• Implement strong pre-shared keys or enterprise authentication</li>
                    <li>• Disable WPS (Wi-Fi Protected Setup)</li>
                    <li>• Hide SSID broadcasting (security through obscurity)</li>
                    <li>• Enable MAC address filtering where appropriate</li>
                    <li>• Regular firmware updates</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Enterprise Wireless Security</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 802.1X authentication with RADIUS</li>
                    <li>• Separate guest and corporate networks</li>
                    <li>• Wireless intrusion detection systems</li>
                    <li>• Regular wireless security assessments</li>
                    <li>• Rogue access point detection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ongoing Maintenance */}
            <div id="maintenance" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">8. Ongoing Maintenance</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Regular Maintenance Tasks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Daily Tasks</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Monitor security alerts and logs</li>
                        <li>• Check system health and performance</li>
                        <li>• Review failed authentication attempts</li>
                        <li>• Verify backup systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Weekly Tasks</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Review firewall rules and policies</li>
                        <li>• Analyze network traffic patterns</li>
                        <li>• Update threat intelligence feeds</li>
                        <li>• Test incident response procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Monthly Tasks</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Conduct vulnerability assessments</li>
                        <li>• Review and update access controls</li>
                        <li>• Perform security policy reviews</li>
                        <li>• Update network documentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Quarterly Tasks</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Comprehensive security audits</li>
                        <li>• Penetration testing</li>
                        <li>• Disaster recovery testing</li>
                        <li>• Security training updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Secure Your Network Infrastructure</h2>
              <p className="text-gray-300 mb-6">
                Network security hardening is an ongoing process that requires continuous attention and improvement. 
                Implement these guidelines to build a robust defense against cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Network Security Assessment
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
