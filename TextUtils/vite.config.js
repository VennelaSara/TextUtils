import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',   // Ensure this points to the folder with index.html
  build: {
    rollupOptions: {
      input: './index.html',  // Explicitly specify the index.html file
    },
  },
});
