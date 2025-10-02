/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F18F01",   // Vibrant orange → Use for main CTAs, highlights, active states
        secondary: "#048BA8", // Cool teal-blue → Use for links, secondary buttons, accents
        dark: "#2E4057",      // Navy-ish background → Use for navbars, footers, or dark sections
        success: "#99C24D",   // Fresh green → Use for success messages, confirmations
        neutral: "#2F2D2E",   // Charcoal gray → Use for page backgrounds, borders, subtle UI
      },
      textColor: {
        base: "#2F2D2E",     // main body text (neutral dark gray)
        heading: "#2E4057",  // stronger headings (navy-dark)
        muted: "#6B6B6B",    // subtle gray for captions
        accent: "#F18F01",   // orange highlight for links or accents
        link: "#048BA8",     // teal-blue links
        success: "#99C24D",  // positive state text
        inverse: "#FFFFFF",  // for text on dark backgrounds
      },
    },
  },
  plugins: [],
}

