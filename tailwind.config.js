/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true
    },


    
    colors: {
      'blue': '#1DA1F2',
      'darkblue': '#2795D9',
      'lightblue': '#EFF9FF',
      'dark': '#657786',
      'light': '#AAB8C2',
      'lighter': '#E1E8ED',
      'lightest': '#F5F8FA',
      'white': '#FFFFFF',
      'red':'#F4245E',
      'lightdark':'#5B7083',
    }
  },
  plugins: [],
}

