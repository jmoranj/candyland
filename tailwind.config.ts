import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ouro: '#e8c76b',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        candyland: ['var(--font-lucky-bones)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'candyland-bold': '700',
        'candyland-regular': '400',
      },
    },
  },
  plugins: [],
} satisfies Config
