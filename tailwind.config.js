/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
       'primary':'#7CFC00',
       'secondary':'white',
       'black':'black',
       'blue':'blue',
       'error':'red'
    },
    extend: {
      fontFamily: {
        Code: ["Source Code Pro", "monospace"],
        arcade: ['"Press Start 2P"', 'cursive'],
       },
    },
  },
  plugins: [],
}