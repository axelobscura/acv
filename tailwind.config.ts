import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customVerde: '#5f8516',
        customVerdeUno: '#608516',
        customVerdeDos: '#44570f',
        customVerdeTres: '#8e9e44',
        customVerdeCuatro: '#d9e8ab',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
        orbitron: ["var(--font-orbitron-mono)"],
      },
      fontSize: {
        'xxs': '0.625rem',    // Extra Extra Small
        'xs': '0.75rem',      // Extra Small
        'sm': '0.875rem',     // Small
        'base': '1rem',       // Base size (default)
        'lg': '1.125rem',     // Large
        'xl': '1.25rem',      // Extra Large
        '2xl': '1.5rem',      // 2X Large
        // Add more custom font sizes as needed
      },
    },
  },
  plugins: [],
}
export default config
