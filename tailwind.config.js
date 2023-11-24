/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FAE3B6",
        borderColor: "#FFD687",
        secoundaryColor: "#FDBB57;",
      },
      fontFamily: {
        popins: ["Poppins"],
      },
      fontSize: {
      
        "mainHead": "64px",
        "mainP": "22px",
       
      },
    },
  },
  plugins: [],
};

