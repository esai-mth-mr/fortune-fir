import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  //change
  // const env = loadEnv(mode, process.cwd());
  //
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
  //
  // server: isLocal
  //     ? {
  //         proxy: {
  //           "/api": process.env.VITE_PROXY_TARGET
  //         },
  //       }
  //   : {},
  //
})
