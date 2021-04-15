<template>
  <view>
    <view>name: {{name}}</view>
    <view>value: {{value}}</view>
  </view>
</template>

<script>
<%if (framework === 'vue3') {-%>
import { ref } from 'vue'
<%}-%>
import './listItem.<%= cssExt %>'
export default {
<%if (framework === 'vue') {-%>
  props: ['name', 'value']
<%}-%>
<%if (framework === 'vue3') {-%>
  props: ['name', 'value']
<%}-%>
}
</script>
