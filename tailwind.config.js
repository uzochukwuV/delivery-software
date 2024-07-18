/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content:{
        'road':"url('assets/roadmap.png')"

      },
      backgroundImage:{
        'uproad': "url('assets/uproad.png')",
        'serviceone': "url('assets/serviceone.png')"
      }
    },
  },
  plugins: [],
}