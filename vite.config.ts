/// <reference types="vitest/config" />

import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';
import { moonbit } from 'vite-plugin-moonbit';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        moonbit({
            root: "resources/moon",
            watch: true,
            target: "js",
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        wayfinder({
            formVariants: true,
        }),
        webfontDownload('https://fonts.bunny.net/css?family=instrument-sans:400,500,600'),
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['resources/js/tests/setup.ts'],
        include: [
            'resources/js/tests/**/*.test.ts',
            'app-modules/*/resources/js/tests/**/*.test.ts',
            'modules/*/resources/js/tests/**/*.test.ts',
        ],
    },
});
