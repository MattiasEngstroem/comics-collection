import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Ladda miljövariabler från .env-fil baserat på mode (development/production)
  const env = loadEnv(mode, process.cwd());
  //console.log(env);

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/issues": {
          target: `https://comicvine.gamespot.com/api/issues/?api_key=${env.VITE_API_KEY}&format=json&`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/issues/, ""),
        },
      },
      cors: true,
    },
  };
});
