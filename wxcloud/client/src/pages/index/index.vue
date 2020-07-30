<template>
  <view className='<%= pageName %>'>
    <Login />
  </view>
</template>

<script>
import { View, Text } from '@tarojs/components'
import './<%= pageName %>.<%= cssExt %>'
import Login from '../../components/login/index.weapp.vue'

export default {
  name: 'Index',
  components: {
    Login,
    View,
    Text
  }
}
</script>
