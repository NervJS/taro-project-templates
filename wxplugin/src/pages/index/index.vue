<template>
  <view class="{{ pageName }}">
    <text>\{{msg}}</text>
    <avatar />
    <navigator url='plugin://myPlugin/list'>
      Go to pages/list!
    </navigator>
  </view>
</template>

<script>
{{#if (eq framework 'Vue3') }}
import { ref } from 'vue'
{{/if}}
import './index.{{ cssExt }}'

export default {
{{#if (eq framework 'Vue') }}
  data () {
    return {
      msg: 'Hello world!'
    }
  }
{{/if}}
{{#if (eq framework 'Vue3') }}
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
{{/if}}
}
</script>
