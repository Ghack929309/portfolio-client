module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			small: "0px",
			"small-max": { max: "500px" },
			"medium-max": { max: "600px" },
			medium: "767px",
			tablet: "768px",
			"big-tablet": { max: "900px" },
			"desktop-max": { max: "1200px" },
			desktop: "991px",
			big: "1285px",
			ultra: "1440px",
			"ultra-max": { max: "2000px" },
			"min-ultra": { min: "2000px" },
		},
		fontFamily: {
			dm: ["DM Sans", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#edf2f8",
				secondary: "#313bac",
				"black-color": "#030303",
				"light-gray": "#6b7688",
				"gray-color": "#46364a",
				"white-color": "#ffffff",
			},
		},
	},
	plugins: [],
};
