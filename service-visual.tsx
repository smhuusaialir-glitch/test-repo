import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Premium SVG visuals for each service — styled to look like real design mockups.
 * Black & gold theme, no external images needed.
 */

function SocialMediaVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#161618" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="sm-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B8941F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#sm-bg)" />
      {/* Phone mockup */}
      <rect x="140" y="20" width="120" height="200" rx="16" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.25" strokeWidth="1" />
      <rect x="148" y="32" width="104" height="176" rx="8" fill="#0D0D0D" />
      {/* Feed post */}
      <rect x="152" y="36" width="96" height="10" rx="5" fill="#D4AF37" fillOpacity="0.6" />
      <circle cx="158" cy="41" r="4" fill="#D4AF37" />
      <rect x="152" y="52" width="96" height="80" rx="4" fill="url(#sm-gold)" fillOpacity="0.15" />
      <rect x="152" y="52" width="96" height="80" rx="4" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="0.5" />
      <rect x="156" y="58" width="40" height="6" rx="3" fill="#D4AF37" fillOpacity="0.5" />
      <rect x="156" y="70" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="156" y="78" width="50" height="4" rx="2" fill="#ffffff" fillOpacity="0.15" />
      {/* Like / comment icons */}
      <circle cx="158" cy="142" r="3" fill="#D4AF37" fillOpacity="0.6" />
      <circle cx="168" cy="142" r="3" fill="#D4AF37" fillOpacity="0.4" />
      <circle cx="178" cy="142" r="3" fill="#D4AF37" fillOpacity="0.3" />
      <rect x="152" y="150" width="70" height="4" rx="2" fill="#ffffff" fillOpacity="0.15" />
      <rect x="152" y="158" width="50" height="4" rx="2" fill="#ffffff" fillOpacity="0.1" />
      {/* Floating cards */}
      <rect x="40" y="50" width="80" height="50" rx="8" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.15" strokeWidth="0.5" />
      <rect x="48" y="58" width="30" height="4" rx="2" fill="#D4AF37" fillOpacity="0.5" />
      <rect x="48" y="68" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
      <rect x="48" y="75" width="40" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="48" y="84" width="20" height="8" rx="4" fill="url(#sm-gold)" fillOpacity="0.3" />
      <rect x="280" y="140" width="80" height="50" rx="8" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.15" strokeWidth="0.5" />
      <rect x="288" y="148" width="30" height="4" rx="2" fill="#D4AF37" fillOpacity="0.5" />
      <rect x="288" y="158" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
      <rect x="288" y="165" width="40" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="288" y="174" width="20" height="8" rx="4" fill="url(#sm-gold)" fillOpacity="0.3" />
    </svg>
  )
}

function WebsiteDesignVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="wd-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#161618" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="wd-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B8941F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#wd-bg)" />
      {/* Browser window */}
      <rect x="60" y="30" width="280" height="180" rx="10" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="1" />
      {/* Browser bar */}
      <rect x="60" y="30" width="280" height="24" rx="10" fill="#222226" />
      <rect x="60" y="42" width="280" height="12" fill="#222226" />
      <circle cx="72" cy="42" r="3" fill="#D4AF37" fillOpacity="0.5" />
      <circle cx="82" cy="42" r="3" fill="#ffffff" fillOpacity="0.15" />
      <circle cx="92" cy="42" r="3" fill="#ffffff" fillOpacity="0.1" />
      <rect x="110" y="38" width="180" height="8" rx="4" fill="#0D0D0D" />
      {/* Hero section */}
      <rect x="76" y="66" width="248" height="60" rx="6" fill="url(#wd-gold)" fillOpacity="0.08" />
      <rect x="90" y="78" width="100" height="8" rx="4" fill="#D4AF37" fillOpacity="0.6" />
      <rect x="90" y="92" width="160" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2" />
      <rect x="90" y="102" width="120" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.15" />
      <rect x="90" y="114" width="50" height="8" rx="4" fill="url(#wd-gold)" />
      {/* Content grid */}
      <rect x="76" y="136" width="78" height="60" rx="6" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.1" strokeWidth="0.5" />
      <rect x="84" y="144" width="20" height="20" rx="4" fill="url(#wd-gold)" fillOpacity="0.2" />
      <rect x="84" y="170" width="40" height="4" rx="2" fill="#D4AF37" fillOpacity="0.4" />
      <rect x="84" y="178" width="55" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
      <rect x="84" y="185" width="45" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="162" y="136" width="78" height="60" rx="6" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.1" strokeWidth="0.5" />
      <rect x="170" y="144" width="20" height="20" rx="4" fill="url(#wd-gold)" fillOpacity="0.2" />
      <rect x="170" y="170" width="40" height="4" rx="2" fill="#D4AF37" fillOpacity="0.4" />
      <rect x="170" y="178" width="55" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
      <rect x="170" y="185" width="45" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="248" y="136" width="78" height="60" rx="6" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.1" strokeWidth="0.5" />
      <rect x="256" y="144" width="20" height="20" rx="4" fill="url(#wd-gold)" fillOpacity="0.2" />
      <rect x="256" y="170" width="40" height="4" rx="2" fill="#D4AF37" fillOpacity="0.4" />
      <rect x="256" y="178" width="55" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
      <rect x="256" y="185" width="45" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
    </svg>
  )
}

function LandingPageVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#161618" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="lp-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B8941F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#lp-bg)" />
      {/* Single page mockup */}
      <rect x="120" y="20" width="160" height="200" rx="10" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="1" />
      {/* Hero */}
      <rect x="130" y="30" width="140" height="70" rx="6" fill="url(#lp-gold)" fillOpacity="0.1" />
      <rect x="142" y="42" width="80" height="7" rx="3.5" fill="#D4AF37" fillOpacity="0.6" />
      <rect x="142" y="55" width="100" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="142" y="63" width="70" height="4" rx="2" fill="#ffffff" fillOpacity="0.15" />
      <rect x="142" y="76" width="45" height="10" rx="5" fill="url(#lp-gold)" />
      <rect x="195" y="76" width="45" height="10" rx="5" fill="#ffffff" fillOpacity="0.08" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="0.5" />
      {/* Features row */}
      <rect x="130" y="110" width="42" height="40" rx="5" fill="#222226" />
      <circle cx="151" cy="124" r="6" fill="url(#lp-gold)" fillOpacity="0.3" />
      <rect x="136" y="136" width="30" height="3" rx="1.5" fill="#D4AF37" fillOpacity="0.4" />
      <rect x="136" y="142" width="25" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="178" y="110" width="42" height="40" rx="5" fill="#222226" />
      <circle cx="199" cy="124" r="6" fill="url(#lp-gold)" fillOpacity="0.3" />
      <rect x="184" y="136" width="30" height="3" rx="1.5" fill="#D4AF37" fillOpacity="0.4" />
      <rect x="184" y="142" width="25" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="226" y="110" width="42" height="40" rx="5" fill="#222226" />
      <circle cx="247" cy="124" r="6" fill="url(#lp-gold)" fillOpacity="0.3" />
      <rect x="232" y="136" width="30" height="3" rx="1.5" fill="#D4AF37" fillOpacity="0.4" />
      <rect x="232" y="142" width="25" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      {/* CTA section */}
      <rect x="130" y="160" width="140" height="50" rx="6" fill="url(#lp-gold)" fillOpacity="0.08" />
      <rect x="145" y="172" width="90" height="6" rx="3" fill="#D4AF37" fillOpacity="0.5" />
      <rect x="155" y="184" width="70" height="4" rx="2" fill="#ffffff" fillOpacity="0.15" />
      <rect x="165" y="194" width="60" height="10" rx="5" fill="url(#lp-gold)" />
      {/* Arrow pointing to CTA */}
      <path d="M 300 120 Q 280 140 260 190" stroke="#D4AF37" strokeOpacity="0.3" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <circle cx="260" cy="190" r="3" fill="#D4AF37" fillOpacity="0.5" />
    </svg>
  )
}

function AiDevVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#161618" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="ai-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B8941F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#ai-bg)" />
      {/* Code editor window */}
      <rect x="50" y="25" width="200" height="190" rx="8" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="50" y="25" width="200" height="20" rx="8" fill="#222226" />
      <rect x="50" y="37" width="200" height="8" fill="#222226" />
      <circle cx="62" cy="35" r="3" fill="#D4AF37" fillOpacity="0.5" />
      <circle cx="72" cy="35" r="3" fill="#ffffff" fillOpacity="0.15" />
      <circle cx="82" cy="35" r="3" fill="#ffffff" fillOpacity="0.1" />
      {/* Code lines */}
      <rect x="62" y="55" width="4" height="4" rx="1" fill="#D4AF37" fillOpacity="0.5" />
      <rect x="70" y="55" width="60" height="4" rx="2" fill="#D4AF37" fillOpacity="0.3" />
      <rect x="62" y="65" width="4" height="4" rx="1" fill="#ffffff" fillOpacity="0.2" />
      <rect x="70" y="65" width="80" height="4" rx="2" fill="#ffffff" fillOpacity="0.15" />
      <rect x="80" y="75" width="50" height="4" rx="2" fill="url(#ai-gold)" fillOpacity="0.4" />
      <rect x="62" y="85" width="4" height="4" rx="1" fill="#D4AF37" fillOpacity="0.5" />
      <rect x="70" y="85" width="40" height="4" rx="2" fill="#D4AF37" fillOpacity="0.3" />
      <rect x="80" y="95" width="70" height="4" rx="2" fill="#ffffff" fillOpacity="0.15" />
      <rect x="80" y="105" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.1" />
      <rect x="62" y="115" width="4" height="4" rx="1" fill="#D4AF37" fillOpacity="0.5" />
      <rect x="70" y="115" width="90" height="4" rx="2" fill="url(#ai-gold)" fillOpacity="0.3" />
      <rect x="62" y="135" width="100" height="4" rx="2" fill="#ffffff" fillOpacity="0.1" />
      <rect x="62" y="145" width="70" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
      <rect x="62" y="165" width="50" height="8" rx="4" fill="url(#ai-gold)" fillOpacity="0.3" />
      {/* AI sparkles panel */}
      <rect x="270" y="50" width="100" height="140" rx="10" fill="#1A1A1C" stroke="#D4AF37" strokeOpacity="0.15" strokeWidth="0.5" />
      {/* AI orb */}
      <circle cx="320" cy="100" r="22" fill="url(#ai-gold)" fillOpacity="0.1" />
      <circle cx="320" cy="100" r="14" fill="url(#ai-gold)" fillOpacity="0.2" />
      <circle cx="320" cy="100" r="8" fill="url(#ai-gold)" fillOpacity="0.4" />
      <path d="M 320 86 L 322 94 L 330 96 L 322 98 L 320 106 L 318 98 L 310 96 L 318 94 Z" fill="#D4AF37" fillOpacity="0.8" />
      {/* AI text */}
      <rect x="290" y="135" width="60" height="4" rx="2" fill="#D4AF37" fillOpacity="0.4" />
      <rect x="290" y="143" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
      <rect x="290" y="150" width="55" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="290" y="165" width="40" height="8" rx="4" fill="url(#ai-gold)" fillOpacity="0.3" />
      {/* Connection lines */}
      <path d="M 250 80 Q 260 90 270 100" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="1" fill="none" strokeDasharray="2 3" />
      <path d="M 250 140 Q 260 130 270 120" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="1" fill="none" strokeDasharray="2 3" />
    </svg>
  )
}

const visuals: Record<string, () => React.ReactElement> = {
  Camera: SocialMediaVisual,
  Globe: WebsiteDesignVisual,
  Rocket: LandingPageVisual,
  Sparkles: WebsiteDesignVisual,
  Palette: SocialMediaVisual,
}

export function ServiceVisual({ icon, className }: { icon: string; className?: string }) {
  const Visual = visuals[icon] ?? WebsiteDesignVisual
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Visual />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
    </div>
  )
}
