module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
      },

      colors: {
        background: '#2B2B2B',
        backgroundSecondary: '#3B3B3B',
        action:"#A259FF",
        text:"#FFFFFF",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
