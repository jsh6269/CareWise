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
    },
  },
  plugins: [],
};
