import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Whitepapers() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Whitepapers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              In-depth research reports and analysis on the latest cybersecurity trends and threats.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whitepaper 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Whitepaper</span>
                  <span className="text-gray-500 text-sm ml-2">Dec 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">The State of Cybersecurity 2024</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive analysis of current cybersecurity threats and trends affecting organizations worldwide.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Whitepaper 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Whitepaper</span>
                  <span className="text-gray-500 text-sm ml-2">Nov 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Ransomware Evolution: 2024 Threat Landscape</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Deep dive into the evolution of ransomware attacks and emerging defense strategies.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Whitepaper 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Whitepaper</span>
                  <span className="text-gray-500 text-sm ml-2">Oct 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">AI-Powered Security: Opportunities and Risks</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Analysis of artificial intelligence applications in cybersecurity and associated risks.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Whitepaper 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Whitepaper</span>
                  <span className="text-gray-500 text-sm ml-2">Sep 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Cloud Security Best Practices</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive guide to securing cloud infrastructure and applications.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Whitepaper 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Whitepaper</span>
                  <span className="text-gray-500 text-sm ml-2">Aug 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Supply Chain Security: Protecting the Ecosystem</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Strategies for securing software supply chains and third-party dependencies.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Whitepaper 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">Whitepaper</span>
                  <span className="text-gray-500 text-sm ml-2">Jul 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Zero Trust Architecture Implementation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Detailed framework for implementing Zero Trust security principles in enterprise environments.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Download PDF
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
