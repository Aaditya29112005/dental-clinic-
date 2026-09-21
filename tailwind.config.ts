import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F0F9F9',
          100: '#D6EFEF',
          200: '#B2E0DF',
          300: '#7ECBC8',
          400: '#52B8B4',
          500: '#3FA9A5', // Primary Teal from Logo
          600: '#2E8C88',
          700: '#246F6C',
          800: '#1F5856',
          900: '#1A4A48',
        },
        navy: {
          50: '#F2F6F9',
          100: '#E1E9F0',
          200: '#C2D3E1',
          300: '#94B4CD',
          400: '#5F8DB3',
          500: '#3D6C94',
          600: '#2C5174',
          700: '#223F5C',
          800: '#172C41',
          900: '#0F2A3D', // Deep Navy
          950: '#0A1C2A',
        },
        ivory: '#F8F6F2', // Soft Ivory background
        coral: '#E86A6A', // Accent coral
        textgrey: '#4A5560',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(15, 42, 61, 0.08)',
        elevated: '0 20px 40px -15px rgba(15, 42, 61, 0.12)',
        card: '0 4px 20px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
};

export default config;
