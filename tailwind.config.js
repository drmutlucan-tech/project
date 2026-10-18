/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'liquid-abyss': '#243655',
        'liquid-deep': '#1d2f4a',
        'liquid-kelp': '#2c4368',
        'liquid-mist': '#edf3ff',
        platinum: '#ffffff',
        'silver-mist': '#b5c1d4',
        ash: '#f2f4f8',
        'slate-deep': '#71809a',
        'lavender-phosphor': '#b9d0ff',
        'bioluminescent': '#4f7ff5',
        'aurora-start': '#7fa8ff',
        'aurora-mid': '#a8c5ff',
        'aurora-warm': '#dce8ff',
        'aurora-pink': '#c4d8ff',
      },
      fontFamily: {
        matter: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        arial: ['Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        caption: ['10px', { lineHeight: '1.4', letterSpacing: '1.5px' }],
        body: ['16px', { lineHeight: '1.5' }],
        subheading: ['24px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        heading: ['36px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-lg': ['61px', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        display: ['96px', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        38: '9.5rem',
      },
      borderRadius: {
        card: '16px',
        small: '6px',
      },
      maxWidth: {
        page: '1440px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        glow: 'glow 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
