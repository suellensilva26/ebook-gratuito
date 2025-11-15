import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#d4af37',
        'gold-hover': '#e5c158',
        'dark': '#0a0a0a',
        'gray-light': '#b0b0b0',
        'orange-urgent': '#ff6b35',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config

