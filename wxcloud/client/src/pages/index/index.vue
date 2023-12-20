<template>
  <view className='{{ pageName }}'>
    <Login />
  </view>
</template>

<script>
import './{{ pageName }}.{{ cssExt }}'
import Login from '../../components/login/index.weapp'

export default {
  name: 'Index',
  components: {
    Login
  }
}
</script>
