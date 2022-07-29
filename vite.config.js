import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import yaml from "@rollup/plugin-yaml"

export default defineConfig({
    server: {
        port: 5000,
    },
    plugins: [svelte(), yaml()]
});
