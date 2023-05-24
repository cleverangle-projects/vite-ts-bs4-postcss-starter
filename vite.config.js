import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';
import path from 'path';

export default defineConfig({
    plugins: [
        inject({
            $: 'jquery',
        }),
        cssInjectedByJsPlugin(),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
        }
    }
});