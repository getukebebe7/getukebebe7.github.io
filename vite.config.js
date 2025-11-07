import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const apiBase = process.env.VITE_API_BASE || ''

	return {
		plugins: [react()],

		// 👇 IMPORTANT: This fixes 404 and white screen issues
		base: mode === 'production' ? '/portfolio/' : '/',

		server: {
			proxy: {
				'/api': 'http://localhost:5000'
			}
		},

		define: {
			'import.meta.env.VITE_API_BASE': JSON.stringify(apiBase)
		},

		build: {
			outDir: 'dist',
			assetsDir: 'assets',
			sourcemap: true
		}
	}
})
