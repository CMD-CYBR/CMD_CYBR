'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function CanonicalURL() {
  const pathname = usePathname()
  const baseUrl = 'https://www.cmdcybr.com.au'
  
  // Remove trailing slashes except for root
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '')
  const canonicalUrl = `${baseUrl}${cleanPath}`

  useEffect(() => {
    // Check if canonical already exists (from metadata)
    let existingCanonical = document.querySelector('link[rel="canonical"]')
    
    if (existingCanonical) {
      // Update existing canonical if URL is different
      const currentHref = existingCanonical.getAttribute('href')
      if (currentHref !== canonicalUrl) {
        existingCanonical.setAttribute('href', canonicalUrl)
      }
    } else {
      // Create and add new canonical link if it doesn't exist
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = canonicalUrl
      document.head.appendChild(link)
    }
  }, [canonicalUrl, pathname])

  return null
}

