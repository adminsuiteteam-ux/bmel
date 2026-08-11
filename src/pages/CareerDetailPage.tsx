import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SEO from '@/components/ui/SEO'
import { mockCareers } from '@/data/mockData'
import { ArrowLeft, Briefcase, Calendar, CheckCircle2, MapPin, Upload } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CareerDetailPage() {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const job = mockCareers.find(j => j.id === id)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  if (!job) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-navy">{t('careers.not_found_title')}</h2>
        <p className="text-slate-500 mt-2">{t('careers.not_found_subtitle')}</p>
        <Link to="/careers" className="btn-primary mt-6">
          <ArrowLeft size={16} /> Back to Careers
        </Link>
      </div>
    )
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('')
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      const allowedExtensions = ['pdf', 'docx']
      const extension = selectedFile.name.split('.').pop()?.toLowerCase()
      
      // 1. Validate File extension (PDF or DOCX only)
      if (!extension || !allowedExtensions.includes(extension)) {
        setFileError('Invalid file type. Only PDF and DOCX documents are allowed.')
        setFile(null)
        return
      }

      // 2. Validate File size (Max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setFileError('File too large. Maximum allowed size is 5MB.')
        setFile(null)
        return
      }

      setFile(selectedFile)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setFileError('Please upload your resume to complete the application.')
      return
    }

    setSubmitting(true)
    // Simulate API request lifecycle
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <>
      <SEO
        title={`${job.title} — Career Opportunity`}
        description={job.description}
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10">
          <Link to="/careers" className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold hover:underline mb-4">
            <ArrowLeft size={12} /> Back to Careers
          </Link>
          <h1 className="text-3xl sm:text-5xl font-black text-navy max-w-4xl">{job.title}</h1>
        </div>
      </section>

      {/* Details + Form */}
      <section className="section-pad bg-white">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Specifications */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <Briefcase size={14} className="text-amber" /> {job.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-amber" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-amber" /> Apply by: {job.deadline}
                </span>
              </div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">{t('careers.role_description')}</h2>
              <p className="text-slate-600 leading-relaxed text-base">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-4">{t('careers.key_responsibilities')}</h3>
              <div className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={16} className="text-amber mt-1 flex-shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-4">{t('careers.requirements')} & Experience</h3>
              <div className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={16} className="text-amber mt-1 flex-shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Apply Form */}
          <div className="lg:col-span-5">
            <div className="border border-slate-100 rounded-xl p-8 shadow-card bg-slate-50/50">
              <h3 className="font-heading font-bold text-navy text-xl mb-6">
                Apply for this Position
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-navy text-lg mb-2">{t('careers.submitted_title')}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Thank you for applying. Our Human Resources team will review your credentials and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('careers.label_name')}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('careers.label_email')}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('careers.label_phone')}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      placeholder="e.g., +234 80 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('careers.label_cover_letter')}</label>
                    <textarea
                      required
                      value={formData.coverLetter}
                      onChange={e => setFormData({ ...formData, coverLetter: e.target.value })}
                      rows={4}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50 resize-none"
                      placeholder="Introduce yourself to our team..."
                    />
                  </div>

                  {/* Resume File Upload */}
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('careers.label_resume')}</label>
                    <div className="relative border-2 border-dashed border-slate-200 hover:border-amber/40 rounded-lg p-4 text-center cursor-pointer transition-colors bg-white">
                      <input
                        type="file"
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload size={20} className="text-slate-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-600 font-medium">
                        {file ? `Selected: ${file.name}` : 'Drag & drop file here or click to browse'}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">{t('careers.max_size')}</p>
                    </div>
                    {fileError && <p className="text-xs text-rose-500 mt-1.5 font-medium">{fileError}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center text-sm py-3 mt-4"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

