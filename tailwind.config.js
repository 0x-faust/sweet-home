/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9e7',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4af37', // Luxury metallic gold
          600: '#b8941f',
          700: '#9a7a1a',
          800: '#7c6015',
          900: '#5e4710',
        },
        dark: {
          50: '#1a1a1a',
          100: '#0d0d0d',
          200: '#000000',
          300: '#1f1f1f',
          400: '#2a2a2a',
          500: '#333333',
          600: '#3d3d3d',
          700: '#4a4a4a',
          800: '#555555',
          900: '#666666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container-mobile': '100%',
        'container-laptop': '1200px',
        'container-desktop': '1400px',
      },
      spacing: {
        'spacing-sm': '16px',
        'spacing-md': '32px',
        'spacing-lg': '48px',
        'spacing-xl': '64px',
        'spacing-2xl': '96px',
      },
      fontSize: {
        'h1-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-laptop': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['26px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-laptop': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3-mobile': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-laptop': ['26px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-mobile': ['15px', { lineHeight: '1.55' }],
        'body-laptop': ['17px', { lineHeight: '1.55' }],
      },
      height: {
        'navbar-mobile': '60px',
        'navbar-laptop': '80px',
        'section-normal': '700px',
        'section-small': '275px',
        'footer-height': '285px',
        'card-mobile': '300px',
        'card-laptop': '400px',
        'image-section-mobile': '300px',
        'image-section-laptop': '525px',
        'portfolio-mobile': '185px',
        'portfolio-laptop': '350px',
      },
      width: {
        'card-laptop': '350px',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d0d0d 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
        'gradient-metallic': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 30px rgba(212, 175, 55, 0.5)',
        'dark': '0 10px 40px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
