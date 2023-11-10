<template>
  <view class="{{ pageName }}">
    <text>\{{ msg }}</text>
  </view>
</template>

<script>
import './index.{{ cssExt }}'

export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
