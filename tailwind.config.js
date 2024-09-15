/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1500px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        DuneRise: ["Dune Rise", "sans-serif"],
        // Add more custom font families as needed
      },
      colors: {
        primary: "#0FB4C3",
        primaryO: "rgba(15, 180, 195, 0.1)",
        primary1: "rgba(15, 180, 195, 0.5)",

        background: "#EEEEEE",
        layoutColor: "#F8F8FF",
        secondary: "#FFB400",
        secondary1: "rgba(255, 180, 0, 0.1)",

        BlackO: "#111111",
      },
      keyframes: {
        elasticSlide: {
          "0%": { transform: "translateX(-100%)" },
          "60%": { transform: "translateX(10%)" },
          "80%": { transform: "translateX(-5%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        elasticSlide: "elasticSlide 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};

// screens: {
//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }

//   'md': '744px',
//   // => @media (min-width: 768px) { ... }

//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }
