// vite.config.ts
import { defineConfig } from "file:///G:/java/project/github/antd-admin-pro/node_modules/vite/dist/node/index.js";
import vue from "file:///G:/java/project/github/antd-admin-pro/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///G:/java/project/github/antd-admin-pro/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueSetupExtend from "file:///G:/java/project/github/antd-admin-pro/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import AutoImport from "file:///G:/java/project/github/antd-admin-pro/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///G:/java/project/github/antd-admin-pro/node_modules/unplugin-vue-components/dist/vite.mjs";
import { createSvgIconsPlugin } from "file:///G:/java/project/github/antd-admin-pro/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import viteCompression from "file:///G:/java/project/github/antd-admin-pro/node_modules/vite-plugin-compression/dist/index.mjs";
import { terser } from "file:///G:/java/project/github/antd-admin-pro/node_modules/rollup-plugin-terser/rollup-plugin-terser.mjs";
import { visualizer } from "file:///G:/java/project/github/antd-admin-pro/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
  VantResolve,
  ElementPlusResolve,
  NutuiResolve,
  AntdResolve
} from "file:///G:/java/project/github/antd-admin-pro/node_modules/vite-plugin-style-import/dist/index.mjs";
import {
  AntDesignVueResolver,
  ElementPlusResolver,
  NaiveUiResolver
} from "file:///G:/java/project/github/antd-admin-pro/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "G:\\java\\project\\github\\antd-admin-pro";
var vite_config_default = defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 8002
  },
  plugins: [
    vue(),
    vueJsx(),
    VueSetupExtend(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz"
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        NaiveUiResolver()
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        NaiveUiResolver()
      ]
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    }),
    terser({
      numWorkers: 1
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    }),
    createStyleImportPlugin({
      resolves: [
        AndDesignVueResolve(),
        VantResolve(),
        ElementPlusResolve(),
        NutuiResolve(),
        AntdResolve()
      ],
      libs: [
        {
          libraryName: "ant-design-vue",
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          }
        }
      ]
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__vite_injected_original_dirname, "src")
      },
      { find: /^~/, replacement: "" }
    ]
  },
  define: {
    "process.env": {}
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxqYXZhXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGFudGQtYWRtaW4tcHJvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFxqYXZhXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGFudGQtYWRtaW4tcHJvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi9qYXZhL3Byb2plY3QvZ2l0aHViL2FudGQtYWRtaW4tcHJvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IFZ1ZVNldHVwRXh0ZW5kIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjtcbmltcG9ydCB7IHRlcnNlciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXRlcnNlclwiXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcbmltcG9ydCB7XG4gIGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luLFxuICBBbmREZXNpZ25WdWVSZXNvbHZlLFxuICBWYW50UmVzb2x2ZSxcbiAgRWxlbWVudFBsdXNSZXNvbHZlLFxuICBOdXR1aVJlc29sdmUsXG4gIEFudGRSZXNvbHZlLFxufSBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZS1pbXBvcnQnXG5cbmltcG9ydCB7XG4gIEFudERlc2lnblZ1ZVJlc29sdmVyLFxuICBFbGVtZW50UGx1c1Jlc29sdmVyLFxuICBOYWl2ZVVpUmVzb2x2ZXIsXG59IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiLi9cIixcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgcG9ydDogODAwMixcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgIC8vXHU3NTFGXHU2MjEwXHU1MzhCXHU3RjI5XHU1MzA1Z3pcbiAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgIHRocmVzaG9sZDogMTAyNDAsXG4gICAgICBhbGdvcml0aG06IFwiZ3ppcFwiLFxuICAgICAgZXh0OiBcIi5nelwiLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgQW50RGVzaWduVnVlUmVzb2x2ZXIoKSxcbiAgICAgICAgTmFpdmVVaVJlc29sdmVyKCksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgQW50RGVzaWduVnVlUmVzb2x2ZXIoKSxcbiAgICAgICAgTmFpdmVVaVJlc29sdmVyKCksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxuICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9pY29uc1wiKV0sXG4gICAgICAvLyBcdTYzMDdcdTVCOUFzeW1ib2xJZFx1NjgzQ1x1NUYwRlxuICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIixcbiAgICB9KSxcbiAgICAvL1x1NTM4Qlx1N0YyOVxuICAgIHRlcnNlcih7XG4gICAgICBudW1Xb3JrZXJzOjFcbiAgICB9KSxcbiAgICAvL1x1NjI1M1x1NTMwNVx1NTIwNlx1Njc5MFxuICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgICAgfSksXG4gICAgIC8vXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1dnVlXHU3Njg0c3R5bGVcbiAgICAgY3JlYXRlU3R5bGVJbXBvcnRQbHVnaW4oe1xuICAgICAgcmVzb2x2ZXM6IFtcbiAgICAgICAgQW5kRGVzaWduVnVlUmVzb2x2ZSgpLFxuICAgICAgICBWYW50UmVzb2x2ZSgpLFxuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmUoKSxcbiAgICAgICAgTnV0dWlSZXNvbHZlKCksXG4gICAgICAgIEFudGRSZXNvbHZlKCksXG4gICAgICBdLFxuICAgICAgbGliczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGlicmFyeU5hbWU6ICdhbnQtZGVzaWduLXZ1ZScsXG4gICAgICAgICAgZXNNb2R1bGU6IHRydWUsXG4gICAgICAgICAgcmVzb2x2ZVN0eWxlOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBhbnQtZGVzaWduLXZ1ZS9lcy8ke25hbWV9L3N0eWxlL2luZGV4YFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHtcbiAgICAgICAgZmluZDogXCJAXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICB9LFxuICAgICAgeyBmaW5kOiAvXn4vLCByZXBsYWNlbWVudDogXCJcIiB9LFxuICAgIF0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgIFwicHJvY2Vzcy5lbnZcIjoge30sXG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIGxlc3M6IHtcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlMsU0FBUyxvQkFBb0I7QUFDeFUsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLHFCQUFxQjtBQUM1QixTQUFTLGNBQWM7QUFDdkIsU0FBUyxrQkFBa0I7QUFDM0I7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBRVA7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBQ1AsU0FBUyxlQUFlO0FBeEJ4QixJQUFNLG1DQUFtQztBQTBCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLGdCQUFnQjtBQUFBLE1BRWQsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1Qsb0JBQW9CO0FBQUEsUUFDcEIscUJBQXFCO0FBQUEsUUFDckIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQSxRQUNULG9CQUFvQjtBQUFBLFFBQ3BCLHFCQUFxQjtBQUFBLFFBQ3JCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUVuQixVQUFVLENBQUMsUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBLE1BRXJELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUVELE9BQU87QUFBQSxNQUNMLFlBQVc7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUVELHdCQUF3QjtBQUFBLE1BQ3ZCLFVBQVU7QUFBQSxRQUNSLG9CQUFvQjtBQUFBLFFBQ3BCLFlBQVk7QUFBQSxRQUNaLG1CQUFtQjtBQUFBLFFBQ25CLGFBQWE7QUFBQSxRQUNiLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFVBQ1YsY0FBYyxDQUFDLFNBQVM7QUFDdEIsbUJBQU8scUJBQXFCO0FBQUEsVUFDOUI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3ZDO0FBQUEsTUFDQSxFQUFFLE1BQU0sTUFBTSxhQUFhLEdBQUc7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGVBQWUsQ0FBQztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixtQkFBbUI7QUFBQSxNQUNyQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
