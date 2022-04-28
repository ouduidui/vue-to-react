import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/ouduidui/Documents/Personal/Code/study/vue-vs-react/node_modules/.pnpm/nuxt@3.0.0-rc.1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}