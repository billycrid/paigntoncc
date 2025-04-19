import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd(), 'VITE_')};
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
  plugins: [react(), nodePolyfills()],
  define: {
    'process.env': {
      ...env
    }
  },
  server: {
    port: 5173,
    open: 'http://localhost:5173'
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
}})
