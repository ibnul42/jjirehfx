module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "-y-6" },
          "50%": { transform: "y-3" },
        },
      },
    },
  },
  plugins: [],
};
