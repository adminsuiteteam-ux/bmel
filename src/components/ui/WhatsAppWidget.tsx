import { useState } from 'react'
import { X, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function WhatsAppWidget() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const phoneNumber = '2347063332335' // BMEL Contact Number

  const quickMessages = [
    t('whatsapp.quick_1', 'I would like to request a quote for engineering services.'),
    t('whatsapp.quick_2', 'I need information regarding water treatment systems.'),
    t('whatsapp.quick_3', 'I want to inquire about sectional panel tanks.'),
    t('whatsapp.quick_4', 'I have a maintenance or technical support request.')
  ]

  const handleSend = (textToSend?: string) => {
    const text = textToSend || message || t('whatsapp.default_msg', 'Hello BMEL team, I would like to make an inquiry.')
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
    setMessage('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Dialog */}
      {isOpen && (
        <div className="mb-4 w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg text-amber">
                  B
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075E54]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm leading-tight text-white">{t('whatsapp.company_name', 'Brownforte Mechanical')}</h4>
                <p className="text-[11px] text-emerald-100">{t('whatsapp.status', 'Typically replies instantly on WhatsApp')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Close WhatsApp chat window"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#E5DDD5]/40 space-y-3 max-h-[320px] overflow-y-auto">
            <div className="bg-white p-3 rounded-xl rounded-tl-none text-xs text-slate-700 shadow-sm leading-relaxed border border-slate-100 max-w-[85%]">
              {t('whatsapp.greeting', 'Hello! 👋 How can our engineering team help you today? Select a quick topic or send us a custom message.')}
            </div>

            {/* Quick Option Buttons */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">{t('whatsapp.quick_topics_label', 'Quick Topics:')}</p>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left text-xs bg-white/80 hover:bg-emerald-50 text-slate-700 hover:text-[#075E54] p-2.5 rounded-lg border border-slate-200/80 transition-all font-medium flex items-center justify-between group shadow-xs"
                >
                  <span className="line-clamp-1">{msg}</span>
                  <Send size={12} className="text-slate-400 group-hover:text-[#075E54] flex-shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder={t('whatsapp.placeholder', 'Type a message...')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 text-xs bg-slate-100 rounded-lg px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#25D366]"
            />
            <button
              onClick={() => handleSend()}
              className="w-8 h-8 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Start WhatsApp chat"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber border-2 border-white flex items-center justify-center text-[9px] font-bold text-navy animate-pulse">
          1
        </span>
        
        {isOpen ? (
          <X size={26} />
        ) : (
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        )}
      </button>
    </div>
  )
}
