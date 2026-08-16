import { useEffect, useRef } from 'react'

interface TurnstileProps {
  siteKey?: string
  onVerify: (token: string) => void
  onExpire?: () => void
  onError?: () => void
  theme?: 'light' | 'dark' | 'auto'
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
          theme?: string
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
    onloadTurnstileCallback?: () => void
  }
}

const OFFICIAL_TEST_KEY = '1x00000000000000000000AA' // Cloudflare Official Pass-Through Test Key

export default function TurnstileWidget({
  siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY &&
  !import.meta.env.VITE_TURNSTILE_SITE_KEY.includes('Xxxxxxxx')
    ? import.meta.env.VITE_TURNSTILE_SITE_KEY
    : OFFICIAL_TEST_KEY,
  onVerify,
  onExpire,
  onError,
  theme = 'light'
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const renderWidget = () => {
      if (containerRef.current && window.turnstile && !widgetIdRef.current && isMounted) {
        try {
          // Clear container before rendering explicit widget
          containerRef.current.innerHTML = ''
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => onVerify(token),
            'expired-callback': () => onExpire?.(),
            'error-callback': () => onError?.(),
            theme
          })
        } catch (e) {
          console.error('Turnstile render error:', e)
        }
      }
    }

    if (window.turnstile) {
      renderWidget()
    } else {
      const existingScript = document.getElementById('cf-turnstile-script')
      if (!existingScript) {
        const script = document.createElement('script')
        script.id = 'cf-turnstile-script'
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        script.async = true
        script.defer = true
        window.onloadTurnstileCallback = () => {
          if (isMounted) renderWidget()
        }
        document.head.appendChild(script)
      } else {
        renderWidget()
      }
    }

    return () => {
      isMounted = false
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch (e) {
          // ignore
        }
        widgetIdRef.current = null
      }
    }
  }, [siteKey, theme])

  return (
    <div className="my-3 flex justify-start">
      <div ref={containerRef} className="turnstile-container" />
    </div>
  )
}
