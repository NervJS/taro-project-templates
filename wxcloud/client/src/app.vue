
<script>
<%if (locals.typescript) {-%>
import Taro, { Config } from '@tarojs/taro'
<%} else { -%>
import Taro from '@tarojs/taro'
<%}-%>
import Index from './pages/index'

const App = new Vue({
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
</script>
