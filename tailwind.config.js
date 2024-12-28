/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "shake-hover": "shake-hover 1s ease-in-out", // 1초로 좀 더 부드럽게
      },
      keyframes: {
        "shake-hover": {
          "0%": {
            transform: "rotate(0deg)", // 시작 시 회전 없음
          },
          "25%": {
            transform: "rotate(8deg)", // 오른쪽으로 조금 회전
          },
          "50%": {
            transform: "rotate(-8deg)", // 왼쪽으로 조금 회전
          },
          "75%": {
            transform: "rotate(4deg)", // 오른쪽으로 살짝 회전
          },
          "100%": {
            transform: "rotate(0deg)", // 다시 시계방향으로 10도 회전
          },
        },
      },
      colors: {
        "color-primitives-brand-100": "var(--color-primitives-brand-100)",
        "color-primitives-gray-500": "var(--color-primitives-gray-500)",
        "color-primitives-gray-900": "var(--color-primitives-gray-900)",
        "color-text-brand-on-brand": "var(--color-text-brand-on-brand)",
        "color-text-default-default": "var(--color-text-default-default)",
        "color-text-default-secondary": "var(--color-text-default-secondary)",
      },
      fontFamily: {
        "single-line-body-base": "var(--single-line-body-base-font-family)",
      },
    },
  },
  plugins: [],
};
