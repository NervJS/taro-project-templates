<template>
  <view class="<%= pageName %>">
    <Counter />
  </view>
</template>

<script>
import './index.<%= cssExt %>'
import Counter from '../../components/Counter.vue'

export default {
  name: 'Index',
  components: {
    Counter
  }
}
</script>
