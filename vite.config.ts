import { resolve } from 'path';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

export default defineConfig(({ mode }: { mode: string }): UserConfig => {
	const minified: boolean = mode === 'production';

	return {
		build: {
			emptyOutDir: false,
			minify: minified ? 'terser' : false,
			cssMinify: minified,
			lib: {
				entry: resolve(__dirname, 'src/select.js'),
				name: 'select',
				formats: ['es'],
				cssFileName: `css/select${minified ? '.min' : ''}`,
				fileName: (): string => `js/select${minified ? '.min' : ''}.js`
			}
		}
	};
});
