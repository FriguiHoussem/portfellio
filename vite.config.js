import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Configuration Vite pour le portfolio
export default defineConfig({
  // Plugin Vue.js
  plugins: [vue()],
  // Base URL pour le déploiement (racine du domaine)
  base: '/',
  // Options de build
  build: {
    // Dossier de sortie
    outDir: 'dist',
    // Vider le dossier avant chaque build
    emptyOutDir: true
  }
})
