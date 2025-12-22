'use client'

export default function CTABanner() {
  return (
    <section className="relative">
      {/* Main CTA Section - Black Background */}
      <div className="bg-black py-16 animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 slide-up">
            Ready to Get Started?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed fade-in">
            We&apos;re here to help! Submit your information and a CMD:CYBR representative will be in touch to help you build a more resilient <a href="/services/secops-platform" className="text-white underline hover:text-gray-200">security operation</a> today. Explore our <a href="/what-we-do" className="text-white underline hover:text-gray-200">services</a>, read our <a href="/resources" className="text-white underline hover:text-gray-200">security resources</a>, or learn about our <a href="/partners" className="text-white underline hover:text-gray-200">technology partners</a>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
            <a href="/contact" className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200 text-lg flex items-center justify-center gap-3 border border-gray-300">
              GET STARTED
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/company" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-colors duration-200 text-lg">
              ABOUT US
            </a>
          </div>
          
          {/* Additional Resources Links */}
          <div className="mt-8 text-sm text-gray-400 fade-in">
            <p>
              Learn more about cybersecurity best practices from <a href="https://www.owasp.org/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-200">OWASP</a>, 
              <a href="https://www.sans.org/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-200"> SANS Institute</a>, and 
              <a href="https://www.cisa.gov/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-200"> CISA</a>.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
