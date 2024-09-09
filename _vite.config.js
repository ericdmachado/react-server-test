import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 5000;

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve('./src/components/'),
      '@providers': path.resolve('./src/providers/'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: PORT
  }
});