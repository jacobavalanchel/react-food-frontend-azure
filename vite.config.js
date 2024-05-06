import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  chokidarWatchOptions: {
    usePolling: true,
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
  },
});
