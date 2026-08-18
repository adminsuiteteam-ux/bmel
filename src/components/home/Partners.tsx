import { useState } from 'react'

interface Partner {
  name: string
  logoUrl?: string
  fallbackInitials: string
  logoBg?: string // hint for light/dark logo treatment
}

const partners: Partner[] = [
  {
    name: 'ELLAH LAKES PLC',
    logoUrl: 'https://ellahlakes.com/wp-content/uploads/elementor/thumbs/ellah-lakes-transparent-1024x517-1-ppvlh8jc9790s1j14ufljyehfw5860d0bm1gpfgn2o.png',
    fallbackInitials: 'EL',
  },
  {
    name: 'COSTAIN (WEST AFRICA) PLC',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Costain_Group_logo.svg',
    fallbackInitials: 'CW',
  },
  {
    name: 'MOTA ENGIL NIGERIA',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Mota-Engil.svg',
    fallbackInitials: 'ME',
  },

  {
    name: 'PAACHE CONSTRUCTION',
    logoUrl: undefined,
    fallbackInitials: 'PC',
  },
  {
    name: 'ARISE PLUS LIMITED',
    logoUrl: undefined,
    fallbackInitials: 'AP',
  },
  {
    name: 'PRECISION VERTEX SERVICES',
    logoUrl: undefined,
    fallbackInitials: 'PV',
  },
  {
    name: 'EEC',
    logoUrl: undefined,
    fallbackInitials: 'EEC',
  },
  {
    name: 'ELSATECH NIG LTD',
    logoUrl: undefined,
    fallbackInitials: 'EN',
  },
  {
    name: 'RIFFET RESOURCES',
    logoUrl: undefined,
    fallbackInitials: 'RR',
  },
]

// Triple for seamless infinite scroll
const scrollList = [...partners, ...partners, ...partners]

function PartnerCard({ partner }: { partner: Partner }) {
  const [imgError, setImgError] = useState(false)
  const hasLogo = partner.logoUrl && !imgError

  return (
    <div className="flex items-center gap-3 group">
      {/* Logo box */}
      <div
        className={`
          w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden
          border transition-all duration-300
          ${hasLogo
            ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm group-hover:shadow-md group-hover:border-sky-400/50'
            : 'bg-navy/10 dark:bg-sky-900/30 border-navy/20 dark:border-sky-600/30'
          }
        `}
      >
        {hasLogo ? (
          <img
            src={partner.logoUrl}
            alt={`${partner.name} logo`}
            className="w-8 h-8 object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-navy dark:text-sky-300 font-black text-[9px] leading-none text-center px-0.5">
            {partner.fallbackInitials}
          </span>
        )}
      </div>

      {/* Name */}
      <span className="text-navy/80 dark:text-slate-300 font-heading font-extrabold text-sm tracking-wide whitespace-nowrap group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
        {partner.name}
      </span>
    </div>
  )
}

export default function Partners() {
  return (
    <section className="py-10 site-gradient-bg border-y border-slate-200/60 dark:border-slate-700/40 overflow-hidden">
      {/* Label */}
      <div className="container-xl mb-5">
        <p className="text-center text-slate-500 dark:text-slate-400 text-xs font-heading font-semibold uppercase tracking-[0.2em]">
          Nigerian &amp; African Technical Integrators &amp; OEM Suppliers
        </p>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10" style={{ background: 'linear-gradient(to right, var(--page-bg), transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10" style={{ background: 'linear-gradient(to left, var(--page-bg), transparent)' }} />

        {/* Scrolling row */}
        <div
          className="flex gap-10 w-max"
          style={{ animation: 'marquee-rtl 45s linear infinite' }}
        >
          {scrollList.map((partner, idx) => (
            <PartnerCard key={idx} partner={partner} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}
