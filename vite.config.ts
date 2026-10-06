import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// The SvelteKit configuration (adapter, CSP, runes) lives in svelte.config.js so both the
// build and svelte-check read the same source.
export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	// Bun built-ins: resolved by the Bun runtime, never bundled.
	ssr: { external: ['bun'] },
	build: {
		cssMinify: 'lightningcss',
		rollupOptions: { external: ['bun'] }
	}
});
