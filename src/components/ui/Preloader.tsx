"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const bmelKeywords = [
  "BROWNFORTEMICHANICAL",
  "MECHANICAL ENGINEERING",
  "WATER TREATMENT PLANTS",
  "PLUMBING & PIPELINES",
  "ELEVATED TANKS & DRILLING",
  "ENGINEERING EXCELLENCE"
]

interface PreloaderProps {
  onComplete?: () => void
  duration?: number
}

export default function Preloader({ onComplete, duration = 6000 }: PreloaderProps) {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const [isExiting, setIsExiting] = useState(false)
  const [progress, setProgress] = useState(0)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
    const handleResize = () => setDimension({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Smooth Progress counter 0 to 100 over duration
  useEffect(() => {
    const stepTime = Math.max(40, Math.floor(duration / 100))
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, stepTime)

    return () => clearInterval(interval)
  }, [duration])

  // Word cycling: 1.0 second per word
  useEffect(() => {
    if (index >= bmelKeywords.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true)
        const completeTimer = setTimeout(() => {
          onCompleteRef.current?.()
        }, 850)
        return () => clearTimeout(completeTimer)
      }, 1000)
      return () => clearTimeout(exitTimer)
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [index])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 },
    },
  }

  const slideUp = {
    initial: {
      y: "0%",
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 },
    },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={slideUp}
        initial="initial"
        animate={isExiting ? "exit" : "initial"}
        className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-[#020326] z-[999999] overflow-hidden select-none"
      >
        {/* Background Glowing Grid & Orbs */}
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[100px] animate-pulse" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-600/15 blur-[80px] -top-20 -left-20" />

        {dimension.width > 0 && (
          <div className="relative z-20 flex flex-col items-center justify-center max-w-xl px-6 text-center">
            
            {/* Motion Graphic: Animated BMEL Logo with Hydro Tech Rings */}
            <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
              
              {/* Outer Rotating Dotted Ring */}
              <motion.div
                className="absolute -inset-3 rounded-3xl border-2 border-dashed border-sky-400/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />

              {/* Counter Rotating Ring */}
              <motion.div
                className="absolute -inset-1 rounded-3xl border border-amber-400/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing Ambient Hydro Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-sky-500/20 shadow-[0_0_35px_rgba(0,180,216,0.7)]"
                animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Center BMEL Logo Card */}
              <motion.div
                className="relative z-10 w-24 h-24 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-sky-900"
                animate={{ scale: [0.96, 1.04, 0.96] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/images/bmel-square-logo.jpg"
                  alt="BMEL Logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Corner Pulsing Sparks */}
              <motion.span
                className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>

            {/* BMEL Brand Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-amber-400 font-heading text-xs uppercase tracking-[0.25em] font-bold">
                BMEL ENGINEERING
              </span>
            </motion.div>

            {/* Animated Keyword Motion Text */}
            <div className="h-14 flex items-center justify-center">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-white text-xl sm:text-2xl font-heading font-black tracking-wider text-center"
              >
                {bmelKeywords[index]}
              </motion.h2>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-64 mt-6">
              <div className="flex justify-between items-center text-xs font-mono text-sky-200/70 mb-2">
                <span>SYSTEM INITIALIZING</span>
                <span className="font-bold text-sky-400">{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-500 via-sky-300 to-amber-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

          </div>
        )}

        {/* Morphing SVG Curtain Reveal Effect */}
        {dimension.width > 0 && (
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none z-10">
            <motion.path
              variants={curve}
              initial="initial"
              animate={isExiting ? "exit" : "initial"}
              fill="#020326"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
