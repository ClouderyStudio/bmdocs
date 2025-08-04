import { h } from 'vue'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import Theme from 'vitepress/theme'
import DefaultLayout from './DefaultLayout.vue'

export default {
  ...Theme,
  Layout() {
    return h(DefaultLayout, null, {})
  },
  enhanceApp({ router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  }
}
