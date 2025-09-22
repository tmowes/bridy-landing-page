import scrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				accent: "var(--accent)",
				"accent-foreground": "var(--accent-foreground)",
				"primary-foreground": "var(--primary-foreground)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: "var(--card)",
				muted: "var(--muted)",
				"muted-foreground": "var(--muted-foreground)",
				destructive: "var(--destructive)",
				input: "var(--input)",
				ring: "var(--ring)",
				sidebar: "var(--sidebar)",
				"sidebar-foreground": "var(--sidebar-foreground)",
				"chart-1": "var(--chart-1)",
				"chart-2": "var(--chart-2)",
				"chart-3": "var(--chart-3)",
				"chart-4": "var(--chart-4)",
				"chart-5": "var(--chart-5)",
			},
		},
	},
	plugins: [
		scrollbar,
		plugin(() => {
			// small utilities that map to CSS variables
			return {
				components: {
					".bg-sidebar": { background: "var(--sidebar)" },
					".text-muted-foreground": { color: "var(--muted-foreground)" },
				},
			};
		}),
	],
};

export default config;
