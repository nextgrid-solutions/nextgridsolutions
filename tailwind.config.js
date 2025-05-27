// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'slide-left-right': 'oscillate 3s ease-in-out infinite',
        },
        keyframes: {
          oscillate: {
            '0%, 100%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(-15px)' },
          },
        },
      },
    },
    plugins: [],
  };
  