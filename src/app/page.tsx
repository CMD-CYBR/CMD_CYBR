import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ThreatHunting from '@/components/ThreatHunting'
import ResponseCapability from '@/components/ResponseCapability'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Home',
  description: 'CMD:CYBR provides comprehensive cybersecurity solutions including MDR services, incident response, threat hunting, and managed security services. Protect your organization with expert cybersecurity consulting in Australia.',
  openGraph: {
    title: 'CMD:CYBR - Leading Cybersecurity Solutions & Managed Security Services',
    description: 'Protect your organization with expert cybersecurity solutions. MDR services, incident response, threat hunting, and managed security services in Australia.',
    url: 'https://www.cmdcybr.com.au',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CMD:CYBR - Cybersecurity Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CMD:CYBR - Leading Cybersecurity Solutions',
    description: 'Protect your organization with expert cybersecurity solutions. MDR services, incident response, and managed security services.',
  },
  alternates: {
    canonical: 'https://www.cmdcybr.com.au',
  },
}

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
