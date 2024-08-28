/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(6px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula", "light"],
  },
};
