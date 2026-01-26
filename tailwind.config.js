/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0a0a',
          900: '#121212',
          850: '#1a1a1a',
          800: '#1f1f1f',
          700: '#2d2d2d',
          600: '#3d3d3d',
          500: '#4d4d4d',
        },
        amber: {
          50: '#fefdf8',
          100: '#fef9e8',
          200: '#fcf0c4',
          300: '#f9e49b',
          400: '#f5d165',
          500: '#d4a574',
          600: '#c9915c',
          700: '#b07d4a',
          800: '#8f6438',
          900: '#744f2d',
        },
        forest: {
          950: '#0d120d',
          900: '#1a231a',
          800: '#1e2a1e',
          700: '#2a3a2a',
          600: '#3a4a3a',
        },
        cream: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f5f0e8',
          300: '#e8e0d4',
          400: '#d4c8b8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 165, 116, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(212, 165, 116, 0.2)',
        'glow-lg': '0 0 50px rgba(212, 165, 116, 0.3)',
        'dark': '0 10px 40px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
