import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FFD600',
        dark: '#101010',
        pink: '#FA00FF',
        skyblue: '#3FAEFC',
      },
    },
  },
  plugins: [],
}
export default config
