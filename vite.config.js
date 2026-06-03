import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    /* Expose le serveur sur le réseau local (accessible depuis le téléphone) */
    host: '0.0.0.0',
    /* Proxy /api vers Apache XAMPP pour que les fichiers PHP soient exécutés */
    proxy: {
      '/api': {
        target: 'http://localhost/site-vitrine/public',
        changeOrigin: true
      }
    }
  }
})
