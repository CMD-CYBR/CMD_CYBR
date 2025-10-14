import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ThreatHunting from '@/components/ThreatHunting'
import ResponseCapability from '@/components/ResponseCapability'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen animated-bg" style={{backgroundColor: '#000000'}}>
      <Header />
      <Hero />
      <Marquee />
      <ThreatHunting />
      <ResponseCapability />
      <CTABanner />
      <Footer />
    </div>
  );
}
