/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0A0A14',
          surface: '#121222',
          card: '#161626',
          border: 'rgba(123, 97, 255, 0.18)',
        },
        aura: {
          DEFAULT: '#7B61FF',
          glow: '#9D8BFF',
          dim: 'rgba(123, 97, 255, 0.15)',
          muted: 'rgba(123, 97, 255, 0.08)',
        },
        ghost: {
          DEFAULT: '#F0EFF4',
          muted: '#9E9EB2',
          dark: '#18181B',
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 25px rgba(123, 97, 255, 0.35)',
        'neon-lg': '0 0 50px rgba(123, 97, 255, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
