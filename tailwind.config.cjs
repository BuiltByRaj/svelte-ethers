module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["luxury", "light", "coffee", "emerald", "fantasy"],
  },
  plugins: [
    require("daisyui")
  ],
}
