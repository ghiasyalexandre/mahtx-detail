/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      scale: {
        '55': '55%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '480px',
      },

      boxShadow: { neonLight: "0 0 5px theme('colors.white/20'), 0 0 20px theme('colors.white/70')",
        neonDark :"0 0 5px theme('colors.black/20'), 0 0 20px theme('colors.black/70')",
      }
    },
  },
  plugins: [], darkMode: "class",
}

