import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.cmdcybr.com.au/how-we-do-it',
  },
}

export default function HowWeDoItLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

