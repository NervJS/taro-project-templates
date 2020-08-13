<template>
  <view class="<%= pageName %>">
    <text>{{ msg }}</text>
    <AtButton
      type="primary"
      :on-click="handleClick"
    >
      I need Taro UI
    </AtButton>
  </view>
</template>

<script>
<%if (framework === 'vue3') {-%>
import { ref } from 'vue'
<%}-%>
// 按需引入
import { AtButton } from 'taro-ui-vue'
import "taro-ui/dist/style/components/button.scss"
import './<%= pageName %>.<%= cssExt %>' 
export default {
  <%if (framework === 'vue') {-%>
  components: {
    AtButton
  },
  data () {
    return {
      msg: 'Hello world!'
    }
  }
  <%}-%>
  <%if (framework === 'vue3') {-%>
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
  <%}-%>
}
</script>
