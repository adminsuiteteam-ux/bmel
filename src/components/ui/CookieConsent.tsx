"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X, ShieldCheck, Check, Settings } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: true,
    functional: true,
  })

  useEffect(() => {
    // Check if consent has already been saved in localStorage
    const savedConsent = localStorage.getItem("bmel_cookie_consent")
    if (!savedConsent) {
      // Delay presentation slightly for smooth initial entrance
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("bmel_cookie_consent", JSON.stringify(consentData))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("bmel_cookie_consent", JSON.stringify(consentData))
    setIsVisible(false)
  }

  const handleDeclineNonEssential = () => {
    const consentData = {
      essential: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("bmel_cookie_consent", JSON.stringify(consentData))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[99999] select-none"
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl p-5 sm:p-6 text-slate-800 dark:text-slate-100 ring-1 ring-sky-500/10 relative overflow-hidden">
          {/* Top Decorative Ambient Glow Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-amber-500" />

          {/* Banner Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-amber-500/15 dark:bg-amber-400/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Cookie size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy dark:text-white text-base leading-tight">
                  Cookie & Privacy Preferences
                </h4>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-500" /> Compliant Policy
                </span>
              </div>
            </div>
            <button
              onClick={handleDeclineNonEssential}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close cookie banner"
            >
              <X size={18} />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            We use essential cookies to ensure our site operates securely, and optional analytics cookies to remember preferences and optimize performance.
          </p>

          {/* Custom Preferences Drawer (Togglable) */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-2.5"
              >
                {/* Category 1: Essential */}
                <div className="flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800">
                  <div>
                    <span className="font-bold text-navy dark:text-sky-300 block">Strictly Necessary</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Security, theme mode & routing</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                    Always Active
                  </span>
                </div>

                {/* Category 2: Functional */}
                <div className="flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800">
                  <div>
                    <span className="font-bold text-navy dark:text-sky-300 block">Functional</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Saves dark mode & UI choices</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="w-4 h-4 accent-sky-600 rounded cursor-pointer"
                  />
                </div>

                {/* Category 3: Analytics */}
                <div className="flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800">
                  <div>
                    <span className="font-bold text-navy dark:text-sky-300 block">Performance & Analytics</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Anonymous traffic measurements</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-4 h-4 accent-sky-600 rounded cursor-pointer"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            {showDetails ? (
              <button
                onClick={handleSavePreferences}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-heading font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <Check size={14} /> Save Choices
              </button>
            ) : (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-heading font-semibold text-xs transition-all shadow-md shadow-sky-600/20 active:scale-98"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDeclineNonEssential}
                  className="w-full sm:w-auto py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-heading font-semibold text-xs transition-all"
                >
                  Essential Only
                </button>
              </>
            )}

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full sm:w-auto py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-heading font-medium text-xs transition-all flex items-center justify-center gap-1"
            >
              <Settings size={13} /> {showDetails ? "Hide" : "Manage"}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
