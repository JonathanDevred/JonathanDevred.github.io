// vite.config.js
import reactRefresh from '@vitejs/plugin-react';

export default {
  plugins: [reactRefresh()],
  server: {
    hmr: {
      overlay: false,
    },
  },
};
