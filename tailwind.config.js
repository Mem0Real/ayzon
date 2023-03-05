/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./navigation/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/images/hero2.jpg')",
        productsBg: "url('/images/products.jpg')",
        aboutBg: "url('/images/about.jpg')",
      },
      fontFamily: {
        Josefin: ["Josefin Sans"],
        audioWide: ["AudioWide"],
        raleWay: ["Raleway"],
      },
    },
  },
  plugins: [require("daisyui")],

  // darkMode: "class",
};
