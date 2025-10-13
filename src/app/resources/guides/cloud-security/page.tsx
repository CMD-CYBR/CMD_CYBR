'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CloudSecurityGuide() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Cloud Security Configuration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Step-by-step guide to configuring security settings for major cloud platforms.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
              <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded">Guide</span>
              <span>Updated: July 2024</span>
              <span>•</span>
              <span>22 min read</span>
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
                <li><a href="#overview" className="hover:text-black transition-colors">1. Cloud Security Overview</a></li>
                <li><a href="#shared-responsibility" className="hover:text-black transition-colors">2. Shared Responsibility Model</a></li>
                <li><a href="#aws-security" className="hover:text-black transition-colors">3. AWS Security Configuration</a></li>
                <li><a href="#azure-security" className="hover:text-black transition-colors">4. Azure Security Configuration</a></li>
                <li><a href="#gcp-security" className="hover:text-black transition-colors">5. Google Cloud Security</a></li>
                <li><a href="#identity-access" className="hover:text-black transition-colors">6. Identity & Access Management</a></li>
                <li><a href="#monitoring" className="hover:text-black transition-colors">7. Monitoring & Logging</a></li>
                <li><a href="#compliance" className="hover:text-black transition-colors">8. Compliance & Governance</a></li>
              </ul>
            </div>

            {/* Overview */}
            <div id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">1. Cloud Security Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cloud security configuration is critical for protecting data and applications in cloud environments. With organizations 
                increasingly adopting cloud services, proper security configuration ensures that cloud resources are protected against 
                unauthorized access, data breaches, and other security threats.
              </p>
              <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-black mb-3">🚨 Common Cloud Security Risks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Misconfigured cloud storage buckets</li>
                  <li>• Inadequate access controls and permissions</li>
                  <li>• Unencrypted data in transit and at rest</li>
                  <li>• Insufficient monitoring and logging</li>
                  <li>• Shadow IT and unauthorized cloud usage</li>
                </ul>
              </div>
            </div>

            {/* Shared Responsibility Model */}
            <div id="shared-responsibility" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">2. Shared Responsibility Model</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding the shared responsibility model is crucial for cloud security. Cloud providers are responsible for the 
                security of the cloud infrastructure, while customers are responsible for security in the cloud.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Cloud Provider Responsibilities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Physical infrastructure security</li>
                    <li>• Hypervisor and virtualization security</li>
                    <li>• Network infrastructure protection</li>
                    <li>• Platform and service availability</li>
                    <li>• Compliance certifications</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Customer Responsibilities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Data encryption and protection</li>
                    <li>• Identity and access management</li>
                    <li>• Application security</li>
                    <li>• Operating system configuration</li>
                    <li>• Network security controls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AWS Security Configuration */}
            <div id="aws-security" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">3. AWS Security Configuration</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">AWS Security Best Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Identity & Access Management</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Enable AWS CloudTrail for audit logging</li>
                        <li>• Use IAM roles instead of access keys</li>
                        <li>• Implement least privilege access</li>
                        <li>• Enable MFA for root and privileged users</li>
                        <li>• Regular access reviews and cleanup</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Network Security</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Configure VPC with private subnets</li>
                        <li>• Use security groups and NACLs</li>
                        <li>• Enable VPC Flow Logs</li>
                        <li>• Implement WAF for web applications</li>
                        <li>• Use AWS Shield for DDoS protection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Data Protection</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Enable S3 bucket encryption</li>
                        <li>• Use AWS KMS for key management</li>
                        <li>• Implement data classification</li>
                        <li>• Enable S3 access logging</li>
                        <li>• Use AWS Macie for data discovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Monitoring & Compliance</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Enable AWS Config for compliance</li>
                        <li>• Use AWS Security Hub</li>
                        <li>• Implement CloudWatch monitoring</li>
                        <li>• Enable GuardDuty for threat detection</li>
                        <li>• Use AWS Inspector for vulnerability assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Azure Security Configuration */}
            <div id="azure-security" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">4. Azure Security Configuration</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Azure Security Best Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Identity & Access Management</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Use Azure Active Directory</li>
                        <li>• Enable conditional access policies</li>
                        <li>• Implement privileged identity management</li>
                        <li>• Use managed identities</li>
                        <li>• Enable Azure AD audit logs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Network Security</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Configure network security groups</li>
                        <li>• Use Azure Firewall</li>
                        <li>• Implement virtual network peering</li>
                        <li>• Enable DDoS protection</li>
                        <li>• Use Azure Application Gateway</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Data Protection</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Enable Azure Key Vault</li>
                        <li>• Use Azure Disk Encryption</li>
                        <li>• Implement Azure Information Protection</li>
                        <li>• Enable storage account encryption</li>
                        <li>• Use Azure Backup</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Monitoring & Compliance</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Enable Azure Security Center</li>
                        <li>• Use Azure Monitor and Log Analytics</li>
                        <li>• Implement Azure Policy</li>
                        <li>• Enable Azure Sentinel</li>
                        <li>• Use Azure Advisor recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Cloud Security */}
            <div id="gcp-security" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">5. Google Cloud Security</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Google Cloud Security Best Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Identity & Access Management</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Use Cloud Identity and Access Management</li>
                        <li>• Enable organization policies</li>
                        <li>• Implement service accounts properly</li>
                        <li>• Use Cloud Identity for SSO</li>
                        <li>• Enable audit logs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Network Security</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Configure VPC and subnets</li>
                        <li>• Use firewall rules</li>
                        <li>• Enable VPC Flow Logs</li>
                        <li>• Use Cloud Armor for DDoS protection</li>
                        <li>• Implement private Google access</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Data Protection</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Use Cloud KMS for encryption</li>
                        <li>• Enable default encryption</li>
                        <li>• Implement data loss prevention</li>
                        <li>• Use Cloud Storage security</li>
                        <li>• Enable Cloud SQL encryption</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Monitoring & Compliance</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Use Security Command Center</li>
                        <li>• Enable Cloud Monitoring</li>
                        <li>• Implement Cloud Asset Inventory</li>
                        <li>• Use Cloud Security Scanner</li>
                        <li>• Enable Cloud Audit Logs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Identity & Access Management */}
            <div id="identity-access" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">6. Identity & Access Management</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">IAM Best Practices</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Principle of Least Privilege:</strong> Grant minimum required permissions</li>
                    <li>• <strong>Regular Access Reviews:</strong> Periodically review and revoke unnecessary access</li>
                    <li>• <strong>Multi-Factor Authentication:</strong> Require MFA for all privileged accounts</li>
                    <li>• <strong>Role-Based Access Control:</strong> Use roles instead of individual permissions</li>
                    <li>• <strong>Separation of Duties:</strong> Implement checks and balances</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Access Control Implementation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">User Management</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Centralized identity management</li>
                        <li>• Automated provisioning/deprovisioning</li>
                        <li>• Strong password policies</li>
                        <li>• Account lockout policies</li>
                        <li>• Regular access certifications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Service Accounts</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Use managed service accounts</li>
                        <li>• Rotate service account keys</li>
                        <li>• Limit service account permissions</li>
                        <li>• Monitor service account usage</li>
                        <li>• Implement key management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring & Logging */}
            <div id="monitoring" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">7. Monitoring & Logging</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Monitoring Strategy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Log Collection</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Enable audit logs</li>
                        <li>• Collect access logs</li>
                        <li>• Monitor system logs</li>
                        <li>• Track configuration changes</li>
                        <li>• Capture security events</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Real-time Monitoring</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Set up alerting rules</li>
                        <li>• Monitor resource usage</li>
                        <li>• Track performance metrics</li>
                        <li>• Detect anomalies</li>
                        <li>• Automated response</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Analysis & Reporting</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Log aggregation and analysis</li>
                        <li>• Security incident correlation</li>
                        <li>• Compliance reporting</li>
                        <li>• Trend analysis</li>
                        <li>• Dashboard creation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Key Metrics to Monitor</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Failed authentication attempts</li>
                    <li>• Unusual access patterns</li>
                    <li>• Configuration changes</li>
                    <li>• Resource usage anomalies</li>
                    <li>• Security policy violations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance & Governance */}
            <div id="compliance" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">8. Compliance & Governance</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Compliance Framework Implementation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>GDPR:</strong> Data protection and privacy requirements</li>
                    <li>• <strong>HIPAA:</strong> Healthcare data protection</li>
                    <li>• <strong>SOX:</strong> Financial reporting controls</li>
                    <li>• <strong>PCI DSS:</strong> Payment card data security</li>
                    <li>• <strong>ISO 27001:</strong> Information security management</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Governance Best Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Policy Management</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Develop cloud security policies</li>
                        <li>• Regular policy reviews</li>
                        <li>• Policy enforcement mechanisms</li>
                        <li>• Training and awareness</li>
                        <li>• Exception management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Risk Management</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Regular risk assessments</li>
                        <li>• Risk register maintenance</li>
                        <li>• Mitigation strategies</li>
                        <li>• Business impact analysis</li>
                        <li>• Continuous monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Secure Your Cloud Infrastructure</h2>
              <p className="text-gray-300 mb-6">
                Proper cloud security configuration is essential for protecting your data and applications. 
                Implement these best practices to build a robust cloud security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Cloud Security Assessment
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
