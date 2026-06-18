import { defineConfig } from "vite";

export default defineConfig({
	base: "/material-web-tools-template/",
	build: {
		rollupOptions: {
			external: [/^@material\/web\//],
		},
	},
});
