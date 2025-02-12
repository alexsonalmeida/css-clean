/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
		fontFamily: {
			sans: ['Inter var', 'sans-serif'],
		},
		fontSize: {
			'2xs': '10px',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

