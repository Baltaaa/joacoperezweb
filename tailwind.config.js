/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Nocturne — tokens del sistema de diseño (fuente de verdad: nocturne.css)
        ground: '#161826',
        surface: '#232532',
        ink: '#E9E9ED',
        accent: {
          DEFAULT: '#9184D9',
          light: '#D2CEFD',
          100: '#F5F4FF',
          200: '#E7E5FE',
          300: '#D2CEFD',
          400: '#B5ABFC',
          500: '#968AE0',
          600: '#796CBF',
          700: '#5D5294',
          800: '#423A6A',
          900: '#2B2741',
        },
        section: {
          DEFAULT: '#262A60',
          glow: '#353B80',
          ghost: '#4C5397',
        },
        neutral: {
          100: '#F3F5FE',
          200: '#E4E7F5',
          300: '#CFD3E5',
          400: '#B2B6CA',
          500: '#9397AB',
          600: '#75798C',
          700: '#595D6C',
          800: '#3F424D',
          900: '#292B31',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['42px', { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '500' }],
        h2: ['32px', { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '500' }],
        h3: ['25px', { lineHeight: '1.5', fontWeight: '400' }],
        h4: ['20px', { lineHeight: '1.12', fontWeight: '500' }],
        kicker: ['13px', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '500' }],
        body: ['15px', { lineHeight: '1.55', fontWeight: '400' }],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '14px',
      },
      boxShadow: {
        sm: '0 0 0 1px #3F424D',
        md: '0 0 0 1px #595D6C, 0 6px 18px rgba(0,0,0,0.55)',
        lg: '0 0 0 1px #9397AB, 0 16px 40px rgba(0,0,0,0.65)',
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
}
