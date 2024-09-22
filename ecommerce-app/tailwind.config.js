/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Azul oscuro
        secondary: "#10B981", // Verde claro
        neutral: "#F3F4F6", // Gris claro
        "yellow-400": "#FBBF24", // Amarillo
        "yellow-500": "#F59E0B", // Amarillo
      },
    },
  },
  plugins: [],
};
