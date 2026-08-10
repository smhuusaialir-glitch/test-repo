import * as React from 'react'
import { cn } from '@/lib/utils'

function SocialMediaMockup() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sm-port-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="sm-port-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A43B" />
          <stop offset="50%" stopColor="#E4C86A" />
          <stop offset="100%" stopColor="#C9A43B" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#sm-port-bg)" />
      <rect x="0" y="0" width="400" height="80" fill="#1A1A1D" />
      <rect x="20" y="24" width="100" height="12" rx="6" fill="url(#sm-port-gold)" opacity="0.7" />
      <rect x="20" y="44" width="60" height="8" rx="4" fill="#FFFFFF" opacity="0.15" />
      <rect x="300" y="22" width="80" height="12" rx="6" fill="#FFFFFF" opacity="0.08" stroke="#D4AF37" strokeOpacity="0.3" strokeWidth="0.5" />
      <rect x="20" y="110" width="360" height="240" fill="url(#sm-port-gold)" opacity="0.1" />
      <rect x="20" y="110" width="360" height="240" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="50" y="150" width="200" height="16" rx="8" fill="#D4AF37" opacity="0.6" />
      <rect x="50" y="180" width="280" height="8" rx="4" fill="#FFFFFF" opacity="0.25" />
      <rect x="50" y="198" width="240" height="8" rx="4" fill="#FFFFFF" opacity="0.18" />
      <rect x="50" y="230" width="120" height="12" rx="6" fill="url(#sm-port-gold)" opacity="0.4" />
      <rect x="50" y="250" width="90" height="12" rx="6" fill="#FFFFFF" opacity="0.12" />
      <rect x="20" y="370" width="360" height="8" rx="4" fill="#FFFFFF" opacity="0.12" />
      <rect x="20" y="386" width="280" height="8" rx="4" fill="#FFFFFF" opacity="0.08" />
      <rect x="20" y="410" width="80" height="10" rx="5" fill="url(#sm-port-gold)" opacity="0.5" />
      <circle cx="30" cy="440" r="5" fill="url(#sm-port-gold)" opacity="0.5" />
      <rect x="42" y="436" width="50" height="8" rx="4" fill="#FFFFFF" opacity="0.15" />
      <circle cx="110" cy="440" r="5" fill="#FFFFFF" opacity="0.1" />
      <rect x="122" y="436" width="40" height="8" rx="4" fill="#FFFFFF" opacity="0.1" />
    </svg>
  )
}

function WebsiteMockup() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="wd-port-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="wd-port-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A43B" />
          <stop offset="50%" stopColor="#E4C86A" />
          <stop offset="100%" stopColor="#C9A43B" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#wd-port-bg)" />
      <rect x="0" y="0" width="400" height="50" fill="#1A1A1D" />
      <rect x="30" y="18" width="90" height="12" rx="6" fill="url(#wd-port-gold)" opacity="0.7" />
      <rect x="230" y="18" width="40" height="8" rx="4" fill="#FFFFFF" opacity="0.2" />
      <rect x="280" y="18" width="40" height="8" rx="4" fill="#FFFFFF" opacity="0.2" />
      <rect x="330" y="18" width="40" height="8" rx="4" fill="#FFFFFF" opacity="0.2" />
      <rect x="0" y="80" width="400" height="160" fill="url(#wd-port-gold)" opacity="0.08" />
      <rect x="40" y="100" width="160" height="14" rx="7" fill="#D4AF37" opacity="0.7" />
      <rect x="40" y="130" width="260" height="8" rx="4" fill="#FFFFFF" opacity="0.25" />
      <rect x="40" y="148" width="200" height="8" rx="4" fill="#FFFFFF" opacity="0.18" />
      <rect x="40" y="180" width="90" height="12" rx="6" fill="url(#wd-port-gold)" />
      <rect x="40" y="240" width="110" height="8" rx="4" fill="#FFFFFF" opacity="0.2" />
      <rect x="40" y="260" width="310" height="120" rx="6" fill="#FFFFFF" opacity="0.03" stroke="#D4AF37" strokeOpacity="0.15" strokeWidth="0.5" />
      <rect x="70" y="290" width="120" height="60" rx="4" fill="url(#wd-port-gold)" opacity="0.15" />
      <rect x="210" y="300" width="120" height="8" rx="4" fill="#D4AF37" opacity="0.4" />
      <rect x="210" y="318" width="100" height="5" rx="2.5" fill="#FFFFFF" opacity="0.15" />
      <rect x="210" y="330" width="80" height="5" rx="2.5" fill="#FFFFFF" opacity="0.1" />
      <rect x="40" y="410" width="130" height="10" rx="5" fill="#D4AF37" opacity="0.5" />
      <rect x="40" y="432" width="310" height="5" rx="2.5" fill="#FFFFFF" opacity="0.1" />
      <rect x="40" y="445" width="250" height="5" rx="2.5" fill="#FFFFFF" opacity="0.08" />
    </svg>
  )
}

function LandingPageMockup() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lp-port-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="lp-port-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A43B" />
          <stop offset="50%" stopColor="#E4C86A" />
          <stop offset="100%" stopColor="#C9A43B" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#lp-port-bg)" />
      <rect x="30" y="30" width="340" height="220" rx="8" fill="url(#lp-port-gold)" opacity="0.08" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="0.5" />
      <rect x="60" y="70" width="180" height="16" rx="8" fill="#D4AF37" opacity="0.6" />
      <rect x="60" y="100" width="250" height="8" rx="4" fill="#FFFFFF" opacity="0.25" />
      <rect x="60" y="118" width="200" height="8" rx="4" fill="#FFFFFF" opacity="0.18" />
      <rect x="60" y="150" width="110" height="14" rx="7" fill="url(#lp-port-gold)" />
      <rect x="180" y="150" width="110" height="14" rx="7" fill="#FFFFFF" opacity="0.1" stroke="#D4AF37" strokeOpacity="0.25" strokeWidth="0.5" />
      <rect x="30" y="280" width="100" height="10" rx="5" fill="#D4AF37" opacity="0.5" />
      <rect x="150" y="280" width="220" height="8" rx="4" fill="#FFFFFF" opacity="0.12" />
      <rect x="30" y="300" width="340" height="60" rx="6" fill="#1A1A1D" stroke="#D4AF37" strokeOpacity="0.1" strokeWidth="0.5" />
      <circle cx="65" cy="330" r="16" fill="url(#lp-port-gold)" opacity="0.2" />
      <rect x="95" y="320" width="120" height="8" rx="4" fill="#D4AF37" opacity="0.4" />
      <rect x="95" y="336" width="170" height="5" rx="2.5" fill="#FFFFFF" opacity="0.12" />
      <rect x="30" y="380" width="340" height="60" rx="6" fill="#1A1A1D" stroke="#D4AF37" strokeOpacity="0.1" strokeWidth="0.5" />
      <circle cx="65" cy="410" r="16" fill="url(#lp-port-gold)" opacity="0.2" />
      <rect x="95" y="400" width="120" height="8" rx="4" fill="#D4AF37" opacity="0.4" />
      <rect x="95" y="416" width="170" height="5" rx="2.5" fill="#FFFFFF" opacity="0.12" />
      <rect x="30" y="460" width="340" height="12" rx="6" fill="url(#lp-port-gold)" />
    </svg>
  )
}

const visuals: Record<string, () => React.ReactElement> = {
  'Social Media Design': SocialMediaMockup,
  'Website Design': WebsiteMockup,
  'Landing Page': LandingPageMockup,
}

export function PortfolioVisual({ category, className }: { category: string; className?: string }) {
  const Visual = visuals[category] ?? WebsiteMockup
  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      <Visual />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    </div>
  )
}
