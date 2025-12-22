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
  const organizationSchema: any = {
    '@context': 'https://schema.org',
    '@type': type,
    name: name,
    description: description,
    url: url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
    },
    sameAs: [
      // Add your social media URLs here when available
      // 'https://www.linkedin.com/company/cmdcybr',
      // 'https://twitter.com/cmdcybr',
      // 'https://www.facebook.com/cmdcybr',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressLocality: 'Australia',
    },
  }

  // Add contact point if provided
  if (contactPoint) {
    organizationSchema.contactPoint = {
      '@type': 'ContactPoint',
      contactType: contactPoint.contactType || 'Customer Service',
      email: contactPoint.email || 'info@cmdcybr.com.au',
      ...(contactPoint.telephone && { telephone: contactPoint.telephone }),
    }
  } else {
    // Default contact point
    organizationSchema.contactPoint = {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@cmdcybr.com.au',
    }
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

