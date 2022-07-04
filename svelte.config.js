import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// @ts-ignore
import image from 'svelte-image';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
		image({
			compressionLevel: 7,
			webpOptions: {
				quality: 70,
				lossless: false,
				force: true,
			},
			outputDir: 'generated/',
		}),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
