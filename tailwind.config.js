/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        'ga-maamli': ['"Ga Maamli"', 'sans-serif'],
        // 'playwrite-gb-s': ['"Playwrite GB S"', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
        'mukta': ['"Mukta"', 'sans-serif'],
      },
      fontWeight: {
        'ga-maamli-regular': 400,
        // 'inter': 500,
      },
    },
  },
  plugins: [],
};
