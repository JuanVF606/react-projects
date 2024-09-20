/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "forest-green": "#314951",
        "sand-dollar": "#f6f0e7",
        "dusty-rose": "#e7d6cc",
        "misty-blue": "#a5bbca",
        primary: "#1E3A8A",
        secondary: "#10B981",
        neutral: "#F3F4F6",
        emphasis: "#F97316",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
