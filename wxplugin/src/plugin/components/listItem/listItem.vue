<template>
  <view>
    <view>name: \{{name}}</view>
    <view>value:\{{value}}</view>
  </view>
</template>

<script>
{{#if (eq framework 'Vue3') }}
import { ref } from 'vue'
{{/if}}
import './listItem.{{ cssExt }}'
export default {
{{#if (eq framework 'Vue') }}
  props: ['name', 'value']
{{/if}}
{{#if (eq framework 'Vue3') }}
  props: ['name', 'value']
{{/if}}
}
</script>
