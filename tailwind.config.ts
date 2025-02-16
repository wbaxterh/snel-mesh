import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "#95D08B",
				secondary: "#573838",
				silver: "#D9D9D9",
			},
			fontFamily: {
				robotoMono: ['"Roboto Mono"', "monospace"],
				shoulders: ['"Big Shoulders Display"', "sans-serif"],
				titan: ['"Titan One"', "cursive"],
			},
		},
	},
	plugins: [],
} satisfies Config;
