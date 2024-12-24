import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "@svgr/rollup";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
		svgr(),
		[
			"module-resolver",
			{
				root: ["./src"],
				alias: {
					"@/": "./src",
					"@components": "./src/components",
				},
			},
		],
	],
});
