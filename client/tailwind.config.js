/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#0F172A",
        card:"#1E293B",
        accent: "#22C55E",
        gold: "#FACC15",
      },
      boxShadow:{
        glow:"0 0 20px rgba(34,197,94,0.3)"
      }
    },
  },
  plugins: [],
}

