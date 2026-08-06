import SEO from '@/components/ui/SEO'
import { FileText, Download, ShieldCheck, Settings } from 'lucide-react'
import { mockDownloads } from '@/data/mockData'

export default function DownloadsPage() {
  return (
    <>
      <SEO
        title="Downloads — Profile, Brochures & Certificates"
        description="Download corporate profile documents, brochures, and quality standards certificates from Brownforte Mechanical Engineering Limited."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">Resources</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">Document Downloads</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            Access our corporate brochures, ISO certificates, and mechanical design catalogs.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl">
          <div className="grid grid-cols-1 gap-6">
            {mockDownloads.map(doc => (
              <div
                key={doc.id}
                className="border border-slate-100 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
                    <FileText size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-bold text-amber block uppercase tracking-wider mb-1">
                      {doc.category}
                    </span>
                    <h3 className="font-heading font-bold text-navy text-base">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">File size: {doc.fileSize}</p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href={doc.fileUrl}
                    className="btn-outline text-xs py-2.5 px-4 flex items-center gap-1.5"
                  >
                    <Download size={14} /> Download Document
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

