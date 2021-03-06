/** @format */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        Ether: './public/ether.png',
        Ecomm: './public/ecomm.png',
        Medico: './public/medico.png',
        CodePlay: './public/codeplay.png',
      },
    },
  },
  plugins: [],
};
