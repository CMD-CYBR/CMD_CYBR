'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SecurityAwarenessGuide() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Employee Security Awareness Training
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Framework for developing effective security awareness programs for your workforce.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
              <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded">Guide</span>
              <span>Updated: August 2024</span>
              <span>•</span>
              <span>16 min read</span>
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
                <li><a href="#overview" className="hover:text-black transition-colors">1. Security Awareness Overview</a></li>
                <li><a href="#program-design" className="hover:text-black transition-colors">2. Program Design</a></li>
                <li><a href="#training-content" className="hover:text-black transition-colors">3. Training Content</a></li>
                <li><a href="#delivery-methods" className="hover:text-black transition-colors">4. Delivery Methods</a></li>
                <li><a href="#phishing-simulations" className="hover:text-black transition-colors">5. Phishing Simulations</a></li>
                <li><a href="#measurement" className="hover:text-black transition-colors">6. Measurement & Metrics</a></li>
                <li><a href="#best-practices" className="hover:text-black transition-colors">7. Best Practices</a></li>
                <li><a href="#implementation" className="hover:text-black transition-colors">8. Implementation Guide</a></li>
              </ul>
            </div>

            {/* Overview */}
            <div id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">1. Security Awareness Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Security awareness training is a critical component of any organization&apos;s cybersecurity strategy. It educates employees 
                about security threats, best practices, and their role in protecting organizational assets. Human error remains one of 
                the leading causes of security breaches, making effective training essential.
              </p>
              <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-black mb-3">🚨 Why Security Awareness Matters</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 95% of cybersecurity breaches are caused by human error</li>
                  <li>• Phishing attacks account for 90% of data breaches</li>
                  <li>• Average cost of a data breach is $4.45 million</li>
                  <li>• Trained employees are 70% less likely to fall for phishing</li>
                </ul>
              </div>
            </div>

            {/* Program Design */}
            <div id="program-design" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">2. Program Design</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Program Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Core Elements</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Initial onboarding training</li>
                        <li>• Regular refresher training</li>
                        <li>• Role-specific training modules</li>
                        <li>• Incident response procedures</li>
                        <li>• Policy and procedure updates</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Engagement Activities</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Phishing simulation exercises</li>
                        <li>• Security awareness campaigns</li>
                        <li>• Interactive workshops</li>
                        <li>• Security champion programs</li>
                        <li>• Gamification elements</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Target Audience Segmentation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">General Employees</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Basic security awareness</li>
                        <li>• Password security</li>
                        <li>• Email security</li>
                        <li>• Physical security</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">IT Staff</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Advanced threat detection</li>
                        <li>• Incident response</li>
                        <li>• Security tools and technologies</li>
                        <li>• Vulnerability management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Executives & Managers</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Security governance</li>
                        <li>• Risk management</li>
                        <li>• Business continuity</li>
                        <li>• Regulatory compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Content */}
            <div id="training-content" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">3. Training Content</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Essential Training Topics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Core Security Topics</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Password security and management</li>
                        <li>• Phishing and social engineering</li>
                        <li>• Email security best practices</li>
                        <li>• Safe web browsing</li>
                        <li>• Mobile device security</li>
                        <li>• Physical security awareness</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Advanced Topics</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Data classification and handling</li>
                        <li>• Incident reporting procedures</li>
                        <li>• Remote work security</li>
                        <li>• Cloud security awareness</li>
                        <li>• Insider threat recognition</li>
                        <li>• Business email compromise</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Content Development Guidelines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Content Principles</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Keep content relevant and current</li>
                        <li>• Use real-world examples and scenarios</li>
                        <li>• Make content interactive and engaging</li>
                        <li>• Provide clear, actionable guidance</li>
                        <li>• Include assessment and feedback</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Delivery Considerations</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Bite-sized learning modules</li>
                        <li>• Multiple learning formats</li>
                        <li>• Accessibility compliance</li>
                        <li>• Multi-language support</li>
                        <li>• Mobile-friendly design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Methods */}
            <div id="delivery-methods" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">4. Delivery Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Online Learning</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>E-learning modules:</strong> Self-paced, interactive courses</li>
                    <li>• <strong>Webinars:</strong> Live and recorded sessions</li>
                    <li>• <strong>Microlearning:</strong> Short, focused content pieces</li>
                    <li>• <strong>Video tutorials:</strong> Visual demonstrations</li>
                    <li>• <strong>Mobile apps:</strong> On-the-go learning</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">In-Person Training</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Workshops:</strong> Interactive group sessions</li>
                    <li>• <strong>Lunch and learns:</strong> Informal learning sessions</li>
                    <li>• <strong>Security awareness events:</strong> Company-wide campaigns</li>
                    <li>• <strong>Role-playing exercises:</strong> Scenario-based training</li>
                    <li>• <strong>Tabletop exercises:</strong> Incident response practice</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phishing Simulations */}
            <div id="phishing-simulations" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">5. Phishing Simulations</h2>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Phishing Simulation Best Practices</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Start with obvious phishing attempts and gradually increase sophistication</li>
                    <li>• Provide immediate feedback and education when users click</li>
                    <li>• Use realistic scenarios relevant to your organization</li>
                    <li>• Track and measure click rates and reporting behavior</li>
                    <li>• Follow up with additional training for repeat offenders</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Simulation Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Basic Phishing</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Generic phishing emails</li>
                        <li>• Obvious spelling errors</li>
                        <li>• Suspicious sender addresses</li>
                        <li>• Urgent action requests</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Spear Phishing</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Targeted to specific individuals</li>
                        <li>• Uses personal information</li>
                        <li>• Mimics trusted sources</li>
                        <li>• Business email compromise</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Advanced Threats</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Multi-stage attacks</li>
                        <li>• Social media phishing</li>
                        <li>• SMS phishing (smishing)</li>
                        <li>• Voice phishing (vishing)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurement & Metrics */}
            <div id="measurement" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">6. Measurement & Metrics</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Key Performance Indicators</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Training Metrics</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Training completion rates</li>
                        <li>• Assessment scores and pass rates</li>
                        <li>• Time to complete training</li>
                        <li>• User engagement levels</li>
                        <li>• Feedback and satisfaction scores</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Security Metrics</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Phishing simulation click rates</li>
                        <li>• Incident reporting frequency</li>
                        <li>• Security policy violations</li>
                        <li>• Password-related incidents</li>
                        <li>• Social engineering success rates</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Measurement Tools</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Learning management systems (LMS) with analytics</li>
                    <li>• Phishing simulation platforms</li>
                    <li>• Security awareness training platforms</li>
                    <li>• Employee surveys and feedback forms</li>
                    <li>• Security incident tracking systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div id="best-practices" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">7. Best Practices</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Program Success Factors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Executive Support:</strong> Leadership endorsement and participation</li>
                    <li>• <strong>Regular Updates:</strong> Keep content current with evolving threats</li>
                    <li>• <strong>Positive Reinforcement:</strong> Recognize and reward good security behavior</li>
                    <li>• <strong>Continuous Improvement:</strong> Regular program evaluation and updates</li>
                    <li>• <strong>Cultural Integration:</strong> Make security part of company culture</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-black mb-3">Common Pitfalls to Avoid</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• One-time training without follow-up</li>
                    <li>• Generic content not relevant to your organization</li>
                    <li>• Overwhelming users with too much information</li>
                    <li>• Punitive approach to security mistakes</li>
                    <li>• Lack of measurement and feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Guide */}
            <div id="implementation" className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">8. Implementation Guide</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Implementation Timeline</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-semibold text-black mb-2">Phase 1: Planning (Weeks 1-4)</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Assess current security awareness level</li>
                        <li>• Define program objectives and metrics</li>
                        <li>• Select training platform and content</li>
                        <li>• Develop communication strategy</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-lg font-semibold text-black mb-2">Phase 2: Launch (Weeks 5-8)</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Deploy initial training modules</li>
                        <li>• Conduct phishing simulation baseline</li>
                        <li>• Launch awareness campaigns</li>
                        <li>• Begin regular training schedule</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="text-lg font-semibold text-black mb-2">Phase 3: Optimization (Weeks 9-12)</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Analyze initial results and feedback</li>
                        <li>• Refine training content and delivery</li>
                        <li>• Implement advanced simulations</li>
                        <li>• Establish ongoing program management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Build a Security-Aware Culture</h2>
              <p className="text-gray-300 mb-6">
                Effective security awareness training transforms employees from potential security risks into your first line of defense. 
                Invest in comprehensive training to protect your organization from cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Training Program Support
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
