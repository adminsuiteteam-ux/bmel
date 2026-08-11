/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#03045E',
          900: '#02033b',
          800: '#03045E',
          700: '#004875',
          600: '#0077B6',
        },
        steel: {
          DEFAULT: '#0077B6',
          600: '#005B8E',
          400: '#00B4D8',
          200: '#90E0EF',
        },
        amber: {
          DEFAULT: '#0077B6',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#00B4D8',
          500: '#0077B6',
          600: '#0284C7',
          700: '#03045E',
          800: '#02033b',
          900: '#010226',
        },
        ocean: {
          deep: '#03045E',
          royal: '#0077B6',
          bright: '#00B4D8',
          ice: '#90E0EF',
          glacier: '#CAF0F8',
        },
        slate: {
          light: '#E2E8F0',
          mid: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #03045E 0%, #0077B6 100%)',
        'gradient-amber': 'linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #03045E 0%, #004875 50%, #0077B6 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #03045E 0%, #0077B6 50%, #00B4D8 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, rgba(3, 4, 94, 0) 70%)',
        'dot-grid': 'radial-gradient(circle, rgba(144, 224, 239, 0.12) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot': '28px 28px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'marquee': 'marquee 30s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-amber': '0 0 30px rgba(0, 180, 216, 0.4)',
        'glow-cyan': '0 0 35px rgba(144, 224, 239, 0.5)',
        'glow-blue': '0 0 30px rgba(0, 119, 182, 0.5)',
        'card': '0 4px 24px rgba(3, 4, 94, 0.12)',
        'card-hover': '0 20px 60px rgba(0, 119, 182, 0.25)',
      },
    },
  },
  plugins: [],
}
