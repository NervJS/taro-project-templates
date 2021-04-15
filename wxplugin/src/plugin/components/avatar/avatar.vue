<template>
  <view>
    <image :src='imgSrc' />
  </view>
</template>

<script>
<%if (framework === 'vue3') {-%>
import { ref } from 'vue'
<%}-%>
import './avatar.<%= cssExt %>'
export default {
<%if (framework === 'vue') {-%>
  data () {
    return {
      imgSrc: 'http://storage.360buyimg.com/taro-static/static/images/logo.png'
    }
  }
<%}-%>
<%if (framework === 'vue3') {-%>
  setup () {
    const imgSrc = ref('http://storage.360buyimg.com/taro-static/static/images/logo.png')
    return {
      imgSrc
    }
  }
<%}-%>
}
</script>
