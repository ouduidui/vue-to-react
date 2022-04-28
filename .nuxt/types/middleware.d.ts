import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/ouduidui/Documents/Personal/Code/study/vue-vs-react/node_modules/.pnpm/nuxt@3.0.0-rc.1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}