import { defineConfig } from "vite";

export default defineConfig({
    base: '/Advice-slip-dom/',
    // build: {
    //   rollupOptions: {
    //     input: {
    //       // main: resolve(__dirname, "index.html"),
    //     },
    //   },
    // },
    build: {
        target: "ES2022", // <--------- ✅✅✅✅✅✅
    },
});
