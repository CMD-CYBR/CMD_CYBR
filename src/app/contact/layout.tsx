import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact CMD:CYBR for cybersecurity solutions, MDR services, incident response, and expert consultation. Get in touch with our team in Australia.',
  alternates: {
    canonical: 'https://www.cmdcybr.com.au/contact',
  },
  openGraph: {
    title: 'Contact CMD:CYBR - Cybersecurity Solutions',
    description: 'Contact CMD:CYBR for cybersecurity solutions and expert consultation.',
    url: 'https://www.cmdcybr.com.au/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

