import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lighter: '#FDFFFF',
        whitesmoke: '#F3F3F3',
        platinum: '#DCDCDC',
        jet: '#313131',
        shadow: '#1A1A1A',
        darker: '#070E0D'
      },
      backgroundColor: {
        lighter: '#FDFFFF',
        whitesmoke: '#F3F3F3',
        platinum: '#DCDCDC',
        jet: '#313131',
        shadow: '#1A1A1A',
        darker: '#070E0D'
      },
      textColor: {
        lighter: '#FDFFFF',
        whitesmoke: '#F3F3F3',
        platinum: '#DCDCDC',
        jet: '#313131',
        shadow: '#1A1A1A',
        darker: '#070E0D'
      },
    },
  },
  plugins: [],
}
export default config
