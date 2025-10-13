'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PasswordSecurityGuide() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Password Security Best Practices
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Essential guidelines for creating and managing secure passwords and authentication systems.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
              <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded">Guide</span>
              <span>Updated: October 2024</span>
              <span>•</span>
              <span>12 min read</span>
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
                <li><a href="#overview" className="hover:text-black transition-colors">1. Password Security Overview</a></li>
                <li><a href="#creation" className="hover:text-black transition-colors">2. Creating Strong Passwords</a></li>
                <li><a href="#management" className="hover:text-black transition-colors">3. Password Management</a></li>
                <li><a href="#mfa" className="hover:text-black transition-colors">4. Multi-Factor Authentication</a></li>
                <li><a href="#policies" className="hover:text-black transition-colors">5. Organizational Policies</a></li>
                <li><a href="#tools" className="hover:text-black transition-colors">6. Security Tools & Solutions</a></li>
                <li><a href="#training" className="hover:text-black transition-colors">7. User Training & Awareness</a></li>
              </ul>
            </div>

            {/* Overview */}
            <div id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">1. Password Security Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Passwords remain the primary method of authentication for most systems and applications. Despite advances in biometric 
                and other authentication methods, strong password practices are essential for protecting sensitive information and systems.
              </p>
              <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-black mb-3">🚨 Why Password Security Matters</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 81% of data breaches involve weak or stolen passwords</li>
                  <li>• Average cost of a data breach is $4.45 million</li>
                  <li>• Password reuse across multiple accounts increases risk</li>
                  <li>• Social engineering attacks often target password weaknesses</li>
                </ul>
              </div>
            </div>

            {/* Creating Strong Passwords */}
            <div id="creation" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">2. Creating Strong Passwords</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">✅ Strong Password Characteristics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Length:</strong> Minimum 12-16 characters</li>
                    <li>• <strong>Complexity:</strong> Mix of uppercase, lowercase, numbers, symbols</li>
                    <li>• <strong>Uniqueness:</strong> Different for each account</li>
                    <li>• <strong>Unpredictability:</strong> No personal information</li>
                    <li>• <strong>Memorability:</strong> Use passphrases when possible</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-black mb-3">❌ Weak Password Examples</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <code>password123</code> - Too common and predictable</li>
                    <li>• <code>123456789</code> - Sequential numbers only</li>
                    <li>• <code>qwerty</code> - Keyboard patterns</li>
                    <li>• <code>John2024</code> - Personal information</li>
                    <li>• <code>Welcome1</code> - Common words with numbers</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-3">💡 Strong Password Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Passphrase Method</h4>
                    <p className="text-gray-700 text-sm mb-2">Use memorable phrases with modifications:</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <code>MyDogLoves2Swim!</code></li>
                      <li>• <code>Sunset@Beach2024</code></li>
                      <li>• <code>Coffee#Morning$Ritual</code></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Random Character Method</h4>
                    <p className="text-gray-700 text-sm mb-2">Use password generators:</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <code>K9#mP2$vL8@nQ</code></li>
                      <li>• <code>R7&xN4!wE9#bM</code></li>
                      <li>• <code>F3$hJ6@kL1%pS</code></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Password Management */}
            <div id="management" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">3. Password Management</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Password Manager Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">🔐 Security</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Generate strong, unique passwords</li>
                        <li>• Encrypted storage</li>
                        <li>• Secure sharing capabilities</li>
                        <li>• Breach monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">⚡ Convenience</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Auto-fill login forms</li>
                        <li>• Cross-device synchronization</li>
                        <li>• Easy password updates</li>
                        <li>• Mobile app access</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">📊 Management</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Password strength analysis</li>
                        <li>• Duplicate password detection</li>
                        <li>• Expired password alerts</li>
                        <li>• Usage analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-black mb-3">⚠️ Password Manager Security Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use a strong master password (consider a passphrase)</li>
                    <li>• Enable two-factor authentication on your password manager</li>
                    <li>• Regularly update your password manager software</li>
                    <li>• Use reputable, well-reviewed password managers</li>
                    <li>• Keep your master password secure and don&apos;t share it</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Multi-Factor Authentication */}
            <div id="mfa" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">4. Multi-Factor Authentication (MFA)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Multi-factor authentication adds an extra layer of security by requiring users to provide two or more verification 
                factors to gain access to an account or system.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">MFA Methods</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>SMS/Text Messages:</strong>
                      <span className="block text-sm text-gray-600">Receive codes via text message</span>
                    </li>
                    <li>
                      <strong>Authenticator Apps:</strong>
                      <span className="block text-sm text-gray-600">Google Authenticator, Microsoft Authenticator</span>
                    </li>
                    <li>
                      <strong>Hardware Tokens:</strong>
                      <span className="block text-sm text-gray-600">Physical devices like YubiKey</span>
                    </li>
                    <li>
                      <strong>Biometric Authentication:</strong>
                      <span className="block text-sm text-gray-600">Fingerprint, facial recognition</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">MFA Best Practices</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enable MFA on all critical accounts</li>
                    <li>• Use authenticator apps over SMS when possible</li>
                    <li>• Keep backup codes in a secure location</li>
                    <li>• Regularly review and update MFA settings</li>
                    <li>• Train users on MFA importance and usage</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Organizational Policies */}
            <div id="policies" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">5. Organizational Password Policies</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Policy Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Password Requirements</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Minimum length (12+ characters)</li>
                        <li>• Complexity requirements</li>
                        <li>• Password history (no reuse)</li>
                        <li>• Maximum age (90-180 days)</li>
                        <li>• Account lockout policies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">User Responsibilities</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Keep passwords confidential</li>
                        <li>• Report suspected compromises</li>
                        <li>• Use approved password managers</li>
                        <li>• Complete security training</li>
                        <li>• Follow MFA requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Implementation Guidelines</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Communicate policies clearly to all users</li>
                    <li>• Provide training and support resources</li>
                    <li>• Implement technical controls to enforce policies</li>
                    <li>• Regularly review and update policies</li>
                    <li>• Monitor compliance and provide feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Tools */}
            <div id="tools" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">6. Security Tools & Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Password Managers</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 1Password</li>
                    <li>• LastPass</li>
                    <li>• Bitwarden</li>
                    <li>• Dashlane</li>
                    <li>• Keeper</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Enterprise Solutions</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Microsoft Azure AD</li>
                    <li>• Okta</li>
                    <li>• Ping Identity</li>
                    <li>• CyberArk</li>
                    <li>• HashiCorp Vault</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Security Monitoring</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Have I Been Pwned</li>
                    <li>• Dark Web Monitoring</li>
                    <li>• Password Breach Detection</li>
                    <li>• Account Takeover Prevention</li>
                    <li>• Behavioral Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Training */}
            <div id="training" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">7. User Training & Awareness</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Training Topics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Password creation and management best practices</li>
                    <li>• Recognizing phishing and social engineering attacks</li>
                    <li>• Proper use of password managers</li>
                    <li>• Multi-factor authentication setup and usage</li>
                    <li>• Incident reporting procedures</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Awareness Campaigns</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Regular security newsletters and updates</li>
                    <li>• Simulated phishing exercises</li>
                    <li>• Security awareness posters and reminders</li>
                    <li>• Interactive training modules</li>
                    <li>• Security champion programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Strengthen Your Password Security Today</h2>
              <p className="text-gray-300 mb-6">
                Strong password practices are the foundation of good cybersecurity. Implement these guidelines to protect 
                your organization from password-related security incidents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Security Assessment
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
