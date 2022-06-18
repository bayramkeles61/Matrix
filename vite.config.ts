import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import WindiCSS from 'vite-plugin-windicss'
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(
      {
        reactivityTransform: true,
      }
    ),
    Components(),
    AutoImport({
      imports: [
        "vue",
        "vue/macros",
        "@vueuse/core"
      ],
      dirs: [
        "./src/composables",
      ],
    }),
    WindiCSS(),
    ViteFonts({
      google: {
        families: ["Philosopher", "Lobster Two"],
      },
    })
  ]
})
