import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Webinars() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              Webinars
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Live and recorded webinars featuring industry experts and the latest security insights.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Upcoming Webinars
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Join our live sessions with cybersecurity experts and industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Webinar 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">Live</span>
                  <span className="text-gray-500 text-sm ml-2">Jan 15, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">AI in Cybersecurity: Future Trends</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert panel discussion on how artificial intelligence is shaping the future of cybersecurity.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Register Now
                </button>
              </div>
            </div>

            {/* Webinar 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Upcoming</span>
                  <span className="text-gray-500 text-sm ml-2">Jan 22, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Zero Trust Implementation Strategies</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn practical approaches to implementing Zero Trust architecture in enterprise environments.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Register Now
                </button>
              </div>
            </div>

            {/* Webinar 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Upcoming</span>
                  <span className="text-gray-500 text-sm ml-2">Jan 29, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Ransomware Defense Tactics</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Advanced strategies for preventing and responding to ransomware attacks.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recorded Webinars */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Recorded Webinars
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Access our library of recorded webinars and expert presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recorded Webinar 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded">Recorded</span>
                  <span className="text-gray-500 text-sm ml-2">Dec 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Cybersecurity Trends 2024</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Year-end review of cybersecurity trends and predictions for 2025.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Watch Now
                </button>
              </div>
            </div>

            {/* Recorded Webinar 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded">Recorded</span>
                  <span className="text-gray-500 text-sm ml-2">Nov 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Cloud Security Best Practices</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive guide to securing cloud infrastructure and applications.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Watch Now
                </button>
              </div>
            </div>

            {/* Recorded Webinar 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden slide-up">
              <div className="h-48 bg-black flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded">Recorded</span>
                  <span className="text-gray-500 text-sm ml-2">Oct 2024</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Incident Response Planning</h3>
                <p className="text-gray-600 text-sm mb-4">
                  How to develop and test effective incident response procedures.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Watch Now
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
