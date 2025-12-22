import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.cmdcybr.com.au/what-we-do',
  },
}

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

