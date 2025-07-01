'use client'

import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('@/components/hero-section').then(mod => ({
  default: mod.HeroSection,
})), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  ),
})

export default function HomeClient() {
  return <HeroSection />
}
