import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Custom inline-SVG mini mockups for each service card.
 * One cohesive system: shared browser-dot / corner treatment, gold accent on dark.
 * No raster images — sharp at every screen size, instant to load.
 */

const GOLD = '#D4AF37'
const GOLD_SOFT = '#E4C86A'
const GOLD_DIM = '#B8941F'
const BG_TOP = '#161618'
const BG_BOTTOM = '#0D0D0D'
const SURFACE = '#1A1A1C'
const SURFACE_HI = '#222226'
const TEXT_HI = '#FFFFFF'
const TEXT_LO = '#8A8A8E'

/* Shared chrome: three browser dots in a window bar */
function WindowChrome({ id, dotsX = 14 }: { id: string; dotsX?: number }) {
  return (
    <>
      <rect x="0" y="0" width="400" height="22" fill={SURFACE_HI} />
      <circle cx={dotsX} cy="11" r="3" fill={GOLD} fillOpacity="0.55" />
      <circle cx={dotsX + 12} cy="11" r="3" fill={TEXT_HI} fillOpacity="0.18" />
      <circle cx={dotsX + 24} cy="11" r="3" fill={TEXT_HI} fillOpacity="0.12" />
      <rect x={dotsX + 40} y="7" width="120" height="8" rx="4" fill="#0D0D0D" />
    </>
  )
}

/* 1. Website Design & Development — browser window with nav, hero, CTA, 3-col grid */
function WebsiteDesignVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="wd-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BG_TOP} />
          <stop offset="100%" stopColor={BG_BOTTOM} />
        </linearGradient>
        <linearGradient id="wd-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={GOLD_DIM} />
          <stop offset="50%" stopColor={GOLD} />
          <stop offset="100%" stopColor={GOLD_DIM} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#wd-bg)" />
      {/* Browser window */}
      <rect x="40" y="20" width="320" height="200" rx="8" fill={SURFACE} stroke={GOLD} strokeOpacity="0.22" strokeWidth="1" />
      <WindowChrome id="wd" />
      {/* Nav bar */}
      <rect x="52" y="32" width="60" height="6" rx="3" fill={GOLD} fillOpacity="0.6" />
      <rect x="300" y="32" width="20" height="6" rx="3" fill={TEXT_HI} fillOpacity="0.18" />
      <rect x="326" y="32" width="20" height="6" rx="3" fill={TEXT_HI} fillOpacity="0.18" />
      <rect x="352" y="30" width="40" height="10" rx="5" fill="url(#wd-gold)" fillOpacity="0.5" />
      <line x1="52" y1="48" x2="348" y2="48" stroke={GOLD} strokeOpacity="0.12" strokeWidth="0.5" />
      {/* Hero block */}
      <rect x="52" y="58" width="296" height="62" rx="6" fill="url(#wd-gold)" fillOpacity="0.07" />
      <rect x="66" y="70" width="120" height="9" rx="4.5" fill={GOLD} fillOpacity="0.65" />
      <rect x="66" y="86" width="180" height="5" rx="2.5" fill={TEXT_HI} fillOpacity="0.22" />
      <rect x="66" y="96" width="140" height="5" rx="2.5" fill={TEXT_HI} fillOpacity="0.16" />
      <rect x="66" y="108" width="56" height="9" rx="4.5" fill="url(#wd-gold)" />
      {/* 3-column content grid */}
      {[0, 1, 2].map((c) => (
        <g key={c}>
          <rect x={66 + c * 92} y="130" width="80" height="70" rx="5" fill={SURFACE_HI} stroke={GOLD} strokeOpacity="0.1" strokeWidth="0.5" />
          <rect x={74 + c * 92} y="138" width="20" height="20" rx="4" fill="url(#wd-gold)" fillOpacity="0.22" />
          <rect x={74 + c * 92} y="164" width="44" height="5" rx="2.5" fill={GOLD} fillOpacity="0.45" />
          <rect x={74 + c * 92} y="174" width="60" height="3.5" rx="1.75" fill={TEXT_HI} fillOpacity="0.14" />
          <rect x={74 + c * 92} y="182" width="52" height="3.5" rx="1.75" fill={TEXT_HI} fillOpacity="0.1" />
          <rect x={74 + c * 92} y="190" width="36" height="3.5" rx="1.75" fill={TEXT_HI} fillOpacity="0.08" />
        </g>
      ))}
    </svg>
  )
}

/* 2. Graphic Design — poster/flyer layout: bold headline block, image area, text lines */
function GraphicDesignVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="gd-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BG_TOP} />
          <stop offset="100%" stopColor={BG_BOTTOM} />
        </linearGradient>
        <linearGradient id="gd-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={GOLD_DIM} />
          <stop offset="50%" stopColor={GOLD_SOFT} />
          <stop offset="100%" stopColor={GOLD_DIM} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#gd-bg)" />
      {/* Poster sheet — slightly off-center, with a print-bleed shadow */}
      <rect x="120" y="18" width="160" height="204" rx="4" fill={SURFACE} stroke={GOLD} strokeOpacity="0.25" strokeWidth="1" />
      <rect x="124" y="22" width="160" height="204" rx="4" fill={SURFACE} opacity="0.4" />
      <rect x="120" y="18" width="160" height="204" rx="4" fill="none" stroke={GOLD} strokeOpacity="0.25" strokeWidth="1" />
      {/* Bold headline block */}
      <rect x="132" y="32" width="136" height="26" rx="2" fill="url(#gd-gold)" fillOpacity="0.85" />
      <rect x="138" y="38" width="80" height="6" rx="3" fill="#0D0D0D" fillOpacity="0.7" />
      <rect x="138" y="48" width="50" height="6" rx="3" fill="#0D0D0D" fillOpacity="0.5" />
      {/* Image placeholder area */}
      <rect x="132" y="66" width="136" height="80" rx="3" fill={SURFACE_HI} stroke={GOLD} strokeOpacity="0.15" strokeWidth="0.5" />
      <circle cx="200" cy="106" r="16" fill="url(#gd-gold)" fillOpacity="0.18" />
      <path d="M 188 130 L 200 110 L 212 130 Z" fill="url(#gd-gold)" fillOpacity="0.22" />
      <rect x="184" y="126" width="32" height="14" rx="2" fill="url(#gd-gold)" fillOpacity="0.12" />
      {/* Small text lines — caption / details */}
      <rect x="132" y="154" width="100" height="4" rx="2" fill={GOLD} fillOpacity="0.5" />
      <rect x="132" y="164" width="136" height="3.5" rx="1.75" fill={TEXT_HI} fillOpacity="0.2" />
      <rect x="132" y="172" width="120" height="3.5" rx="1.75" fill={TEXT_HI} fillOpacity="0.15" />
      <rect x="132" y="180" width="130" height="3.5" rx="1.75" fill={TEXT_HI} fillOpacity="0.12" />
      {/* Footer bar on poster */}
      <rect x="132" y="198" width="60" height="8" rx="4" fill="url(#gd-gold)" fillOpacity="0.6" />
      <rect x="200" y="200" width="68" height="4" rx="2" fill={TEXT_HI} fillOpacity="0.15" />
      {/* Corner crop marks — print artwork signature */}
      <path d="M 116 14 L 116 22 M 116 14 L 124 14" stroke={GOLD} strokeOpacity="0.4" strokeWidth="1" />
      <path d="M 284 14 L 284 22 M 284 14 L 276 14" stroke={GOLD} strokeOpacity="0.4" strokeWidth="1" />
      <path d="M 116 226 L 116 218 M 116 226 L 124 226" stroke={GOLD} strokeOpacity="0.4" strokeWidth="1" />
      <path d="M 284 226 L 284 218 M 284 226 L 276 226" stroke={GOLD} strokeOpacity="0.4" strokeWidth="1" />
    </svg>
  )
}

/* 3. Social Media Design — 3 square post cards in a grid with avatars + caption lines */
function SocialMediaVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BG_TOP} />
          <stop offset="100%" stopColor={BG_BOTTOM} />
        </linearGradient>
        <linearGradient id="sm-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={GOLD_DIM} />
          <stop offset="50%" stopColor={GOLD} />
          <stop offset="100%" stopColor={GOLD_DIM} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#sm-bg)" />
      {/* Three square post cards — 2 on top row, 1 offset below to break the grid */}
      {[
        { x: 40, y: 24 },
        { x: 156, y: 24 },
        { x: 272, y: 60 },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={p.y} width="100" height="120" rx="6" fill={SURFACE} stroke={GOLD} strokeOpacity="0.18" strokeWidth="0.75" />
          {/* Avatar + handle row */}
          <circle cx={p.x + 14} cy={p.y + 14} r="6" fill="url(#sm-gold)" fillOpacity="0.5" />
          <rect x={p.x + 24} y={p.y + 11} width="40" height="4" rx="2" fill={GOLD} fillOpacity="0.45" />
          <rect x={p.x + 24} y={p.y + 17} width="26" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.15" />
          {/* Square image area */}
          <rect x={p.x + 8} y={p.y + 28} width="84" height="60" rx="4" fill={SURFACE_HI} stroke={GOLD} strokeOpacity="0.1" strokeWidth="0.5" />
          <rect x={p.x + 16} y={p.y + 38} width="44" height="6" rx="3" fill="url(#sm-gold)" fillOpacity="0.55" />
          <rect x={p.x + 16} y={p.y + 50} width="60" height="4" rx="2" fill={TEXT_HI} fillOpacity="0.18" />
          <rect x={p.x + 16} y={p.y + 58} width="48" height="4" rx="2" fill={TEXT_HI} fillOpacity="0.12" />
          <circle cx={p.x + 76} cy={p.y + 76} r="6" fill="url(#sm-gold)" fillOpacity="0.25" />
          {/* Caption lines */}
          <rect x={p.x + 8} y={p.y + 96} width="50" height="3.5" rx="1.75" fill={GOLD} fillOpacity="0.4" />
          <rect x={p.x + 8} y={p.y + 104} width="70" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.12" />
          <rect x={p.x + 8} y={p.y + 110} width="56" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.1" />
        </g>
      ))}
      {/* Small like/comment dots on the lower card */}
      <circle cx="284" cy="184" r="3" fill={GOLD} fillOpacity="0.5" />
      <circle cx="294" cy="184" r="3" fill={TEXT_HI} fillOpacity="0.18" />
      <circle cx="304" cy="184" r="3" fill={TEXT_HI} fillOpacity="0.12" />
    </svg>
  )
}

/* 4. Branding / Visual Design — mini brand style guide: logo mark, color swatches, type samples */
function BrandingVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="br-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BG_TOP} />
          <stop offset="100%" stopColor={BG_BOTTOM} />
        </linearGradient>
        <linearGradient id="br-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={GOLD_DIM} />
          <stop offset="50%" stopColor={GOLD_SOFT} />
          <stop offset="100%" stopColor={GOLD_DIM} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#br-bg)" />
      {/* Style guide sheet */}
      <rect x="60" y="20" width="280" height="200" rx="6" fill={SURFACE} stroke={GOLD} strokeOpacity="0.2" strokeWidth="1" />
      {/* Section label */}
      <rect x="74" y="32" width="70" height="5" rx="2.5" fill={GOLD} fillOpacity="0.55" />
      <rect x="74" y="41" width="40" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.15" />
      {/* Logo mark placeholder — a geometric monogram in a circle */}
      <circle cx="200" cy="78" r="26" fill="none" stroke="url(#br-gold)" strokeOpacity="0.5" strokeWidth="1.5" />
      <path d="M 188 78 L 200 64 L 212 78 L 200 92 Z" fill="url(#br-gold)" fillOpacity="0.7" />
      <circle cx="200" cy="78" r="5" fill={SURFACE} stroke={GOLD} strokeWidth="1" />
      <rect x="170" y="112" width="60" height="5" rx="2.5" fill={GOLD} fillOpacity="0.45" />
      <rect x="184" y="121" width="32" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.15" />
      {/* Divider */}
      <line x1="74" y1="138" x2="326" y2="138" stroke={GOLD} strokeOpacity="0.15" strokeWidth="0.5" />
      {/* Color swatches row */}
      <rect x="74" y="150" width="50" height="5" rx="2.5" fill={GOLD} fillOpacity="0.5" />
      {[
        { x: 74, fill: GOLD, op: 1 },
        { x: 104, fill: GOLD_SOFT, op: 0.85 },
        { x: 134, fill: '#8A8A8E', op: 0.6 },
        { x: 164, fill: SURFACE_HI, op: 1 },
        { x: 194, fill: BG_BOTTOM, op: 1 },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="162" width="22" height="22" rx="3" fill={s.fill} fillOpacity={s.op} stroke={GOLD} strokeOpacity="0.15" strokeWidth="0.5" />
          <rect x={s.x} y="188" width="22" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.12" />
        </g>
      ))}
      {/* Type sample lines — like a type spec */}
      <rect x="240" y="150" width="40" height="5" rx="2.5" fill={GOLD} fillOpacity="0.5" />
      <text x="240" y="178" fontFamily="Georgia, serif" fontSize="16" fill={TEXT_HI} fillOpacity="0.85" fontStyle="italic">Aa</text>
      <rect x="262" y="168" width="64" height="3.5" rx="1.75" fill={TEXT_HI} fillOpacity="0.2" />
      <rect x="262" y="176" width="50" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.14" />
      <text x="240" y="200" fontFamily="Arial, sans-serif" fontSize="11" fill={GOLD} fillOpacity="0.7" fontWeight="bold">Aa</text>
      <rect x="262" y="192" width="64" height="3.5" rx="1.75" fill={TEXT_HI} fillOpacity="0.18" />
      <rect x="262" y="200" width="44" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.12" />
    </svg>
  )
}

/* 5. Landing Pages — single-column focused page: headline, one CTA, feature list */
function LandingPageVisual() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="lp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BG_TOP} />
          <stop offset="100%" stopColor={BG_BOTTOM} />
        </linearGradient>
        <linearGradient id="lp-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={GOLD_DIM} />
          <stop offset="50%" stopColor={GOLD} />
          <stop offset="100%" stopColor={GOLD_DIM} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#lp-bg)" />
      {/* Narrow single-column page — visually distinct from the wide website mockup */}
      <rect x="130" y="16" width="140" height="208" rx="6" fill={SURFACE} stroke={GOLD} strokeOpacity="0.2" strokeWidth="1" />
      <WindowChrome id="lp" dotsX={144} />
      {/* Minimal nav — just a logo dot */}
      <circle cx="144" cy="33" r="3" fill={GOLD} fillOpacity="0.6" />
      <rect x="152" y="30" width="24" height="6" rx="3" fill={GOLD} fillOpacity="0.4" />
      {/* Headline bar — centered, single block */}
      <rect x="146" y="48" width="108" height="10" rx="5" fill="url(#lp-gold)" fillOpacity="0.7" />
      <rect x="158" y="64" width="84" height="4" rx="2" fill={TEXT_HI} fillOpacity="0.2" />
      <rect x="166" y="72" width="68" height="4" rx="2" fill={TEXT_HI} fillOpacity="0.15" />
      {/* One CTA button — centered, single */}
      <rect x="170" y="86" width="60" height="12" rx="6" fill="url(#lp-gold)" />
      {/* Feature list — stacked rows with a check dot, not a 3-col grid */}
      {[
        { y: 112 },
        { y: 132 },
        { y: 152 },
      ].map((r, i) => (
        <g key={i}>
          <circle cx="150" cy={r.y + 6} r="3" fill={GOLD} fillOpacity="0.6" />
          <rect x="160" y={r.y + 3} width="80" height="4" rx="2" fill={TEXT_HI} fillOpacity="0.22" />
          <rect x="160" y={r.y + 10} width="60" height="3" rx="1.5" fill={TEXT_HI} fillOpacity="0.14" />
        </g>
      ))}
      {/* Bottom CTA band */}
      <rect x="146" y="176" width="108" height="38" rx="5" fill="url(#lp-gold)" fillOpacity="0.08" />
      <rect x="160" y="186" width="80" height="6" rx="3" fill={GOLD} fillOpacity="0.5" />
      <rect x="170" y="198" width="60" height="9" rx="4.5" fill="url(#lp-gold)" />
    </svg>
  )
}

const visuals: Record<string, () => React.ReactElement> = {
  Globe: WebsiteDesignVisual,
  Palette: GraphicDesignVisual,
  Camera: SocialMediaVisual,
  Sparkles: BrandingVisual,
  Rocket: LandingPageVisual,
}

export function ServiceVisual({ icon, className }: { icon: string; className?: string }) {
  const Visual = visuals[icon] ?? WebsiteDesignVisual
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
        <Visual />
      </div>
      {/* Subtle gold glow on hover — the only hover effect, applied uniformly across the set */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gold/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:from-gold/[0.08] group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
    </div>
  )
}
