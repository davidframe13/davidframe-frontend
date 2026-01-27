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
        // Colores principales
        primary: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#EC4899',
        },
        // Fondos oscuros
        bg: {
          primary: '#0A0A0F',
          secondary: '#13131A',
          tertiary: '#1C1C26',
        },
        // Textos
        text: {
          primary: '#F9FAFB',
          secondary: '#9CA3AF',
          muted: '#6B7280',
        },
        // Bordes
        border: {
          DEFAULT: '#2D2D3A',
        },
        // Estados
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0F 0%, #13131A 100%)',
      },
    },
  },
  plugins: [],
}
