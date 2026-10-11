/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          900: '#1C120C',
          800: '#2A1B14',
          700: '#3D271D',
          600: '#54392B',
          500: '#724E3A',
          400: '#8F664F',
          100: '#E8DFD8',
          50: '#F6F2EF',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F2EBDC',
          300: '#E5DBC8',
          400: '#D5C7B0',
          500: '#BFB097',
        },
        sage: {
          50: '#F3F6F4',
          100: '#E4ECE5',
          200: '#C7D7CA',
          500: '#5E7D66',
          600: '#4D6854',
          700: '#3D5243',
        },
        terracotta: {
          50: '#FBF3F0',
          100: '#F7E4DC',
          200: '#ECC4B4',
          400: '#D97354',
          500: '#C25B3A',
          600: '#A34628',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(42, 27, 20, 0.08), 0 4px 12px -2px rgba(42, 27, 20, 0.04)',
        'warm-lg': '0 20px 40px -10px rgba(42, 27, 20, 0.12), 0 8px 16px -4px rgba(42, 27, 20, 0.06)',
      },
    },
  },
  plugins: [],
}
