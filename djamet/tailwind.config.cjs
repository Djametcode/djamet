/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif']
      },
      backgroundImage: {
        'bg': "url('./image/bg.svg')",
        'polygon': "url('./image/polygon-scatter-haikei.svg')",
        'blob': "url('./image/blob-haikei.svg')",
        'scatter': "url('./image/circle-scatter-haikei.svg')",
        'books': "url('./image/books.png')",
        'wa': "url('./image/wa.png')",
        'spotipeq': "url('./image/spotipeq.png')",
        'todo': "url('./image/todos.png')",

      }
    },
  },
  plugins: [],
}
