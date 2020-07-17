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
import { AtButton } from 'taro-ui-vue'
export default {
  <%if (framework === 'vue') {-%>
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
