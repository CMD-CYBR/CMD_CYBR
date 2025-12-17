import type { Metadata } from 'next'
import "./globals.css";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cmdcybr.com.au'),
  title: {
    default: 'CMD:CYBR - Leading Cybersecurity Solutions & Managed Security Services',
    template: '%s | CMD:CYBR'
  },
  description: 'CMD:CYBR provides comprehensive cybersecurity solutions including MDR services, incident response, threat hunting, and managed security services. Protect your organization with expert cybersecurity consulting.',
  keywords: [
    'cybersecurity',
    'managed detection and response',
    'MDR services',
    'incident response',
    'threat hunting',
    'cybersecurity consulting',
    'managed security services',
    'security operations center',
    'SOC support',
    'virtual CISO',
    'adversary simulation',
    'offensive security',
    'cyber advisory',
    'Australia cybersecurity',
    'CMD:CYBR'
  ],
  authors: [{ name: 'CMD:CYBR' }],
  creator: 'CMD:CYBR',
  publisher: 'CMD:CYBR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.cmdcybr.com.au',
    siteName: 'CMD:CYBR',
    title: 'CMD:CYBR - Leading Cybersecurity Solutions & Managed Security Services',
    description: 'Protect your organization with expert cybersecurity solutions. MDR services, incident response, threat hunting, and managed security services in Australia.',
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
    images: ['/og-image.jpg'],
    creator: '@cmdcybr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://www.cmdcybr.com.au',
  },
  category: 'Cybersecurity',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="canonical" href="https://www.cmdcybr.com.au" />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        <SEO 
          type="Organization"
          contactPoint={{
            email: 'info@cmdcybr.com.au',
            contactType: 'Customer Service',
          }}
        />
        <div className="page-enter-active">
          {children}
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
