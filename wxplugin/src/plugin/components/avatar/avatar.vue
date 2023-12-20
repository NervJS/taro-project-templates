<template>
  <view>
    <image :src='imgSrc' />
  </view>
</template>

<script>
{{#if (eq framework 'Vue3') }}
import { ref } from 'vue'
{{/if}}
import './avatar.{{ cssExt }}'
export default {
{{#if (eq framework 'Vue') }}
  data () {
    return {
      imgSrc: 'http://storage.360buyimg.com/taro-static/static/images/logo.png'
    }
  }
{{/if}}
{{#if (eq framework 'Vue3') }}
  setup () {
    const imgSrc = ref('http://storage.360buyimg.com/taro-static/static/images/logo.png')
    return {
      imgSrc
    }
  }
{{/if}}
}
</script>
