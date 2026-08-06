export default function Partners() {
  const partners = [
    'Julius Berger Nigeria',
    'Dangote Industries',
    'Nigerian Foundries Limited',
    'BUA Group Africa',
    'Tenaris Nigeria',
    'Indorama Eleme Petrochemicals',
    'Innoson Technical & Industrial',
    'Lafarge Africa',
    'Schneider Electric Nigeria & Africa',
    'SMC Pumps Africa',
    'Kavango Engineering & Piping'
  ]

  // Duplicate for seamless infinite loop scroll
  const scrollList = [...partners, ...partners]

  return (
    <section className="py-12 site-gradient-bg border-y border-slate-200/60 overflow-hidden">
      <div className="container-xl mb-6">
        <p className="text-center text-slate-600 text-xs font-heading font-semibold uppercase tracking-widest">
          Nigerian & African Technical Integrators & OEM Suppliers
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex w-[200%] gap-12 animate-marquee">
        {scrollList.map((partner, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 text-navy/80 text-xl font-heading font-extrabold tracking-wider px-8 hover:text-amber-600 transition-colors select-none"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  )
}


