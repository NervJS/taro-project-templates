<template>
  <view class="{{ pageName }}">
    <text>\{{ msg }}</text>
    <AtButton
      type="primary"
      :on-click="handleClick"
    >
      I need Taro UI
    </AtButton>
  </view>
</template>

<script>
{{#if (eq framework "Vue3") }}
import { ref } from 'vue'
{{/if}}
import { AtButton } from 'taro-ui-vue'
export default {
  {{#if (eq framework "Vue") }}
  data () {
    return {
      msg: 'Hello world!'
    }
  }
  {{/if}}
  {{#if (eq framework "Vue3") }}
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
  {{/if}}
}
</script>
