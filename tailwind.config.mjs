/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        // Colores principales - Blanco y Negro
        primary: {
          DEFAULT: '#FFFFFF',
          dark: '#E5E5E5',
        },
        secondary: {
          DEFAULT: '#000000',
        },
        // Fondos oscuros
        bg: {
          primary: '#000000',
          secondary: '#0A0A0A',
          tertiary: '#1A1A1A',
        },
        // Textos
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          muted: '#808080',
        },
        // Bordes
        border: {
          DEFAULT: '#333333',
        },
        // Estados
        success: '#FFFFFF',
        error: '#FF0000',
        warning: '#FFFF00',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FFFFFF 0%, #E5E5E5 100%)',
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
      },
    },
  },
  plugins: [],
}
