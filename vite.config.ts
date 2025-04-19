import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  console.log('VITE_GA_TRACKING_ID:', env.VITE_GA_TRACKING_ID);
  return {
    plugins: [react(), nodePolyfills()],
    define: {
      // This makes sure `import.meta.env.VITE_...` gets the right value
      'import.meta.env': {
        ...env,
        MODE: mode,
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
  };
});
