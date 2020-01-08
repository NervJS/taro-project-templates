import Vue from 'vue'
import store from './store'
import { Block } from '@tarojs/components'

// Vue.config.productionTip = false

const App = new Vue({
  store,
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h(Block, this.$slots.default)
  }
})

export default App
