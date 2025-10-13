'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AdversarySimulation() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Adversary Simulation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Realistic attack simulations that test your organization's ability to detect, respond to, and recover from sophisticated cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Simulate Real-World Threats</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our adversary simulation services replicate the tactics, techniques, and procedures (TTPs) used by real threat actors. We create realistic attack scenarios that test your security controls, incident response capabilities, and overall cyber resilience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Test detection and response capabilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Validate security controls effectiveness</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Improve incident response procedures</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Simulation Methodology</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Threat Intelligence</h4>
                  <p className="text-gray-300">Research current threat landscape and TTPs</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Scenario Design</h4>
                  <p className="text-gray-300">Create realistic attack scenarios and objectives</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Execution</h4>
                  <p className="text-gray-300">Deploy simulated attacks and monitor responses</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Analysis</h4>
                  <p className="text-gray-300">Evaluate performance and provide recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Adversary Simulation Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive simulation services to test and improve your cyber resilience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">APT Simulation</h3>
              <p className="text-gray-300 mb-4">
                Simulate advanced persistent threat campaigns to test long-term detection capabilities.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Multi-stage attack simulation</li>
                <li>• Lateral movement testing</li>
                <li>• Data exfiltration scenarios</li>
                <li>• Persistence mechanism testing</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Ransomware Simulation</h3>
              <p className="text-gray-300 mb-4">
                Test your organization's ability to prevent, detect, and respond to ransomware attacks.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Ransomware deployment simulation</li>
                <li>• Backup and recovery testing</li>
                <li>• Incident response validation</li>
                <li>• Business continuity assessment</li>
              </ul>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Social Engineering</h3>
              <p className="text-gray-300 mb-4">
                Test employee awareness and response to social engineering attacks.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Phishing campaign simulation</li>
                <li>• Vishing and smishing tests</li>
                <li>• Physical social engineering</li>
                <li>• Awareness training assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
