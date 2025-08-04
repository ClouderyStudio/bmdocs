import { h } from 'vue'
import Theme from 'vitepress/theme'
import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'
import WwAds from './components/WwAds.vue'
import MouseClick from "./components/MouseClick.vue"
import MouseFollower from "./components/MouseFollower.vue"
import LayoutTop from "./components/LayoutTop.vue"
import DefaultLayout from './DefaultLayout.vue'
import './styles/vars.css'
import './styles/blur.css'
import './styles/blockquote.css'
import './styles/custom-block.css'
import './styles/hidden.css'
import './styles/vp-code.css'
import './styles/vp-code-group.css'
import './styles/sidebarIcon.css'
import './custom.css'

export default {
  ...Theme,
  Layout() {
    return h(DefaultLayout, null, {
      'home-features-after': () => h(HomeSponsors),
      'aside-outline-after': () => h(WwAds),
      'aside-bottom': () => h(AsideSponsors),
      'layout-top': () => h(LayoutTop),
    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
    app.component('MouseClick' , MouseClick)
    app.component('MouseFollower' , MouseFollower)
    app.component('LayoutTop', LayoutTop)
  }
}
