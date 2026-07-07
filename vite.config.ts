import { defineConfig } from 'vite'
import {fileURLToPath} from 'url';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(), 
  ],
  build: {
    rollupOptions: {
      input: {
        // Modernized path resolution using import.meta.url
        main: fileURLToPath(new URL('./index.html', import.meta.url)), 
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
        products: fileURLToPath(new URL('./products.html', import.meta.url)), 
      },
    },
  },
});
