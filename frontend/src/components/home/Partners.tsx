import { useState } from 'react'

interface Partner {
  name: string
  logoUrl?: string
  fallbackInitials: string
}

const partners: Partner[] = [
  {
    name: 'ELLAH LAKES PLC',
    logoUrl: 'https://logo.clearbit.com/ellahlakes.com',
    fallbackInitials: 'EL'
  },
  {
    name: 'ELSATECH NIG LTD',
    logoUrl: 'https://logo.clearbit.com/elsatechng.com',
    fallbackInitials: 'EN'
  },
  {
    name: 'COSTAIN (WEST AFRICA) PLC',
    logoUrl: 'https://logo.clearbit.com/costain.com',
    fallbackInitials: 'CW'
  },
  {
    name: 'PAACHE CONSTRUCTION LIMITED',
    logoUrl: undefined,
    fallbackInitials: 'PC'
  },
  {
    name: 'ARISE PLUS LIMITED',
    logoUrl: undefined,
    fallbackInitials: 'AP'
  },
  {
    name: 'PRECISION VERTEX SERVICES',
    logoUrl: undefined,
    fallbackInitials: 'PV'
  },
  {
    name: 'EEC',
    logoUrl: undefined,
    fallbackInitials: 'EEC'
  },
  {
    name: 'MOTA ENGIL NIGERIA LIMITED',
    logoUrl: 'https://logo.clearbit.com/mota-engil.com',
    fallbackInitials: 'ME'
  },
  {
    name: 'AURES',
    logoUrl: undefined,
    fallbackInitials: 'AUR'
  },
  {
    name: 'PHART FARM LIMITED',
    logoUrl: undefined,
    fallbackInitials: 'PF'
  },
  {
    name: 'RIFFET RESOURCES',
    logoUrl: undefined,
    fallbackInitials: 'RR'
  }
]

// Duplicate for seamless infinite loop scroll
const scrollList = [...partners, ...partners]

function PartnerLogo({ partner }: { partner: Partner }) {
  const [imgError, setImgError] = useState(false)

  if (partner.logoUrl && !imgError) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src={partner.logoUrl}
            alt={`${partner.name} logo`}
            className="w-7 h-7 object-contain"
            onError={() => setImgError(true)}
          />
        </div>
        <span>{partner.name}</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-navy/10 border border-navy/20 flex items-center justify-center flex-shrink-0">
        <span className="text-navy font-black text-[10px] leading-none">{partner.fallbackInitials}</span>
      </div>
      <span>{partner.name}</span>
    </div>
  )
}

export default function Partners() {
  return (
    <section className="py-12 site-gradient-bg border-y border-slate-200/60 overflow-hidden">
      <div className="container-xl mb-6">
        <p className="text-center text-slate-600 text-xs font-heading font-semibold uppercase tracking-widest">
          Nigerian &amp; African Technical Integrators &amp; OEM Suppliers
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex w-[200%] gap-12 animate-marquee">
        {scrollList.map((partner, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 text-navy/80 text-base font-heading font-extrabold tracking-wider px-6 hover:text-amber-600 transition-colors select-none"
          >
            <PartnerLogo partner={partner} />
          </div>
        ))}
      </div>
    </section>
  )
}
