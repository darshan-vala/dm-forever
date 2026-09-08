/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F5EFE6',
          300: '#EFE6D8',
          400: '#E5D8C3',
        },
        champagne: {
          DEFAULT: '#E8DFD0',
          light: '#F4EFE6',
          dark: '#D8C7B0',
          deep: '#C2AC8F',
        },
        burgundy: {
          50: '#F7EBEB',
          100: '#EBD2D4',
          500: '#7A1C28',
          600: '#5C1D24',
          700: '#4A121A',
          800: '#3B0E14',
          900: '#26080D',
        },
        gold: {
          100: '#F7F1E5',
          200: '#EDE0C8',
          300: '#DEC9A3',
          400: '#CEB27E',
          500: '#B89758', // muted royal gold
          600: '#9E7E43',
          700: '#7F6433',
        },
        blush: {
          DEFAULT: '#F2E3E1',
          light: '#FAF2F1',
          muted: '#EAD6D3',
        },
        beige: {
          light: '#F7F4EE',
          DEFAULT: '#E7DFD5',
          dark: '#D9CEC1',
        },
        charcoal: {
          50: '#F4F5F6',
          100: '#E3E5E8',
          300: '#8A8F98',
          600: '#43474F',
          800: '#1F2124',
          900: '#141517',
          950: '#0C0D0E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
      },
      letterSpacing: {
        'super-wide': '0.25em',
        'ultra-wide': '0.35em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(42, 24, 16, 0.07)',
        'luxury-lg': '0 30px 60px -20px rgba(42, 24, 16, 0.12)',
        'gold-glow': '0 0 35px -5px rgba(184, 151, 88, 0.25)',
        'wine-glow': '0 0 45px -5px rgba(74, 18, 26, 0.35)',
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(12, 13, 14, 0.75) 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(184, 151, 88, 0.2), transparent)',
      }
    },
  },
  plugins: [],
}
