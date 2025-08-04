import { h } from 'vue'
import { inBrowser, useData, useRoute } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import Theme from 'vitepress/theme'
import DefaultLayout from './DefaultLayout.vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';

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
  },
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();
        
    giscusTalk({
      repo: 'ClouderyStudio/docs',
      repoId: 'R_kgDOMDgnhw',
      category: 'General',
      categoryId: 'DIC_kwDOMDgnh84Ctw-_',
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      true
    );
  }
}
