import { defineConfig } from "vite";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve("./src/components/"),
      },
      {
        find: "@providers",
        replacement: path.resolve("./src/providers/"),
      },
      {
        find: "lodash.mergewith",
        replacement: "lodash.mergewith",
      },
      {
        find: "react-fast-compare",
        replacement: "react-fast-compare",
      },
      {
        find: "copy-to-clipboard",
        replacement: "copy-to-clipboard",
      },
    ],
  },
  server: {
    host: "0.0.0.0",
    port: PORT,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@chakra-ui/react")) {
            return "chakra-ui";
          }
        },
      },
    },
  },
});
