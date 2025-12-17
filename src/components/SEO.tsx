import Script from 'next/script'

interface SEOProps {
  type?: 'Organization' | 'WebSite' | 'ContactPage' | 'AboutPage'
  name?: string
  description?: string
  url?: string
  logo?: string
  contactPoint?: {
    telephone?: string
    contactType?: string
    email?: string
  }
}

export default function SEO({ 
  type = 'Organization',
  name = 'CMD:CYBR',
  description = 'Leading cybersecurity solutions and managed security services provider in Australia',
  url = 'https://www.cmdcybr.com.au',
  logo = 'https://www.cmdcybr.com.au/logo.png',
  contactPoint
}: SEOProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: name,
    description: description,
    url: url,
    logo: logo,
    sameAs: [
      // Add your social media URLs here
      // 'https://www.linkedin.com/company/cmdcybr',
      // 'https://twitter.com/cmdcybr',
      // 'https://www.facebook.com/cmdcybr',
    ],
    contactPoint: contactPoint ? {
      '@type': 'ContactPoint',
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
      email: contactPoint.email,
    } : undefined,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressLocality: 'Australia',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: name,
    url: url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {type === 'Organization' && (
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      )}
    </>
  )
}

