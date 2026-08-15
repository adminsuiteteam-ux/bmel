import { useState } from 'react'
import SEO from '@/components/ui/SEO'
import { useTranslation } from 'react-i18next'

interface GalleryItem {
  id: number;
  title: string;
  category: 'Photos' | 'Videos' | 'Drone Shots' | 'Before/After';
  url: string;
}

export default function GalleryPage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<'All' | 'Photos' | 'Videos' | 'Drone Shots' | 'Before/After'>('All')

  const items: GalleryItem[] = [
    { id: 1, title: 'Industrial water treatment at Achievers Farm, Igbogene, Yenagoa', category: 'Photos', url: '/images/achievers-farm-water-treatment.jpg' },
    { id: 2, title: 'SUBEB Borehole & Steel Tank Stand at Basic Junior Secondary School Odi, Bayelsa State', category: 'Photos', url: '/images/subeb-borehole-steel-tank-1.jpg' },
    { id: 3, title: 'SUBEB Motorized Borehole & Elevated Water Storage Assembly at Odi, Bayelsa State', category: 'Photos', url: '/images/subeb-borehole-steel-tank-2.jpg' },
    { id: 4, title: 'Foundation, tank stand fabrication & 20,000L fluid tanks at Ellah Lakes Farm Plc, Iguelaba, Edo State', category: 'Photos', url: '/images/ellah-lakes-tank-installation.jpg' },
    { id: 5, title: 'Fabrication shop welding execution', category: 'Before/After', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  ]

  const categories: ('All' | 'Photos' | 'Videos' | 'Drone Shots' | 'Before/After')[] = [
    'All',
    'Photos',
    'Videos',
    'Drone Shots',
    'Before/After',
  ]

  const filteredItems = items.filter(i => filter === 'All' || i.category === filter)

  return (
    <>
      <SEO
        title="Gallery — Project Photos & Drone Shots"
        description="View photos, drone shots, and process images of Brownforte Mechanical Engineering Limited (BMEL) project sites in Nigeria."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('gallery.visuals_label')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('gallery.title')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            Photos, drone shots, and process recordings capturing our physical project sites and engineering details.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-amber text-navy shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="relative group overflow-hidden rounded-xl border border-slate-100 h-72">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber text-[10px] font-heading font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-white text-base leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

