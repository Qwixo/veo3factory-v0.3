import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        checkout: 'checkout.html',
        thankYou: 'thank-you.html',
        privacy: 'privacy-policy.html',
        cookies: 'cookie-policy.html',
        legal: 'legal-disclosure.html',
        terms: 'terms-conditions.html'
      }
    }
  },
  server: {
    open: '/index.html'
  }
});