import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // Import TailwindCSS plugin
import autoprefixer from 'autoprefixer'; // Optional: ensures CSS prefixes are handled

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Add Tailwind CSS plugin
        autoprefixer(), // Add Autoprefixer plugin (optional, but helps with cross-browser compatibility)
      ],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_BASE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
