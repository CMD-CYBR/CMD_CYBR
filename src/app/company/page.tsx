import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Company() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              About CMD:CYBR
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Leading the charge in cybersecurity innovation, we&apos;re dedicated to protecting organizations from evolving digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded with a mission to revolutionize cybersecurity, CMD:CYBR has grown from a small team of passionate security experts to a leading force in the industry. Our journey began with a simple belief: every organization deserves world-class protection against cyber threats.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Today, we serve thousands of organizations worldwide, from startups to Fortune 500 companies, providing them with cutting-edge security solutions and peace of mind in an increasingly digital world.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">2000+</div>
                  <div className="text-gray-300">Organizations Protected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 text-black slide-in-right float border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide comprehensive, innovative cybersecurity solutions that protect our clients&apos; digital assets and enable them to operate with confidence in today&apos;s threat landscape.
              </p>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-600">
                To be the world&apos;s most trusted cybersecurity partner, setting the standard for excellence in threat detection, response, and prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Word from Our Founder */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Word from Our Founder
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Saima Azhar</h3>
                <p className="text-lg text-gray-300 font-semibold">Founder & Managing Director</p>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  My journey began with a simple yet powerful idea – that every business, regardless of size, deserves enterprise-grade cybersecurity.
                </p>
                
                <p>
                  After spending years in the technology industry, I noticed a significant gap in how small and mid-sized organisations were being supported. Large corporations had access to top-tier cybersecurity consulting and managed security services, while small to mid-market businesses — the backbone of Australia&apos;s economy — often lacked the same level of protection. I decided it was time to change that.
                </p>
                
                <p>
                  That&apos;s how this company was born — out of a vision to make world-class cybersecurity expertise accessible, practical, and tailored to the needs of growing businesses.
                </p>
                
                <p>
                  In the early days, we started small, with a handful of passionate professionals and a shared mission: to safeguard the digital future of Australian businesses. We didn&apos;t have the biggest team or the flashiest office, but what we did have was commitment — to our clients, to our craft, and to doing what&apos;s right.
                </p>
                
                <p>
                  We built our company on three core principles: <strong className="text-white">trust, integrity, and innovation</strong>. These values guide every decision we make. We take the time to truly understand our clients&apos; challenges, helping them navigate an ever-changing digital landscape with confidence.
                </p>
                
                <p>
                  Our consulting services are designed to empower businesses with strategy and insight, while our managed security offerings provide 24/7 protection and peace of mind. But more than that, we see ourselves as partners — working side by side with our clients to build resilience, not just security.
                </p>
                
                <p>
                  Over the years, our greatest learning has been simple yet profound: when you take care of your people, they take care of your clients. Our talented team is the reason we continue to grow, innovate, and make a meaningful impact in the cybersecurity space.
                </p>
                
                <p>
                  As we look to the future, our mission remains the same — to help every business, no matter its size, thrive securely in a connected world.
                </p>
                
                <p className="text-white font-semibold">
                  Together, we&apos;re creating a safer digital tomorrow.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-white font-semibold">— Saima Azhar</p>
                <p className="text-gray-300">Founder, Cybersecurity Consultant & Advocate</p>
              </div>
            </div>
            
            <div className="slide-in-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-8 text-white border border-gray-600">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-white shadow-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Saima Azhar - Founder & Managing Director"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">Saima Azhar</h3>
                  <p className="text-gray-200 text-center font-semibold mb-6">Founder & Managing Director</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-200">Cybersecurity Visionary</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-200">Business Advocate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-200">Industry Leader</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Our Values
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              The principles that guide everything we do and shape our culture of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">We strive for the highest standards in everything we do, continuously improving our services and solutions.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300">We operate with honesty, transparency, and ethical practices in all our business relationships.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">We embrace new technologies and methodologies to stay ahead of evolving cyber threats.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Commitment</h3>
              <p className="text-gray-300">We are deeply committed to protecting our clients and building long-term partnerships based on trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-in">
            Ready to make a difference in cybersecurity? Explore career opportunities and help us protect organizations worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 border border-gray-300">
              View Open Positions
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
