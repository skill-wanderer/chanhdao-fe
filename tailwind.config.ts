import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#D4AF37',
          accent: '#B8860B',
          gold: '#D4AF37',
          'gold-light': '#E8C547',
        },
        surface: {
          bg: '#FCF8ED',
          'bg-alt': '#F5EDD6',
          card: 'rgba(212, 175, 55, 0.06)',
          'card-hover': 'rgba(212, 175, 55, 0.12)',
        },
        text: {
          primary: '#3E2F1B',
          secondary: '#6B5B3E',
          muted: '#8B7B5E',
          light: '#A89672',
        },
        semantic: {
          success: '#4CAF50',
          failure: '#f44336',
          wisdom: '#9C27B0',
          growth: '#2196F3',
          premium: '#D4AF37',
          lock: '#9E9E9E',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Crimson Text', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Roboto', 'Lexend', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        narrow: '800px',
      },
      borderRadius: {
        pill: '50px',
        card: '16px',
      },
      spacing: {
        'section-x': '20px',
        'section-y': '80px',
        'hero-top': '140px',
      },
      boxShadow: {
        brand: '0 4px 15px rgba(212, 175, 55, 0.2)',
        'brand-lg': '0 6px 25px rgba(212, 175, 55, 0.35)',
        card: '0 2px 12px rgba(62, 47, 27, 0.08)',
        dropdown: '0 12px 32px rgba(62, 47, 27, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
