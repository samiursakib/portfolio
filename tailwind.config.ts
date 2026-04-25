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
        darker: '#070E0D',
        // Accent palette used in redesign
        accent: {
          blue: '#06B4F1',
          violet: '#7C3AED',
          teal: '#0D9488',
          magenta: '#E844B6',
        },
      },
      backgroundColor: {
        lighter: '#FDFFFF',
        whitesmoke: '#F3F3F3',
        platinum: '#DCDCDC',
        jet: '#313131',
        shadow: '#1A1A1A',
        darker: '#070E0D',
      },
      textColor: {
        lighter: '#FDFFFF',
        whitesmoke: '#F3F3F3',
        platinum: '#DCDCDC',
        jet: '#313131',
        shadow: '#1A1A1A',
        darker: '#070E0D',
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
