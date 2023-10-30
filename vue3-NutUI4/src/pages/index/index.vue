<template>
  <view class="index">
    {{ state.msg1 }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick">点我</nut-button>
    </view>
    <nut-toast v-model:visible="show" :msg="state.msg2" type="text" />
  </view>
</template>

<script setup>
import { reactive  } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
const state = reactive({
  msg1: '欢迎使用 NutUI4.0 开发小程序',
  msg2: '你成功了～',
  show: false
});

const handleClick = () => {
  state.show = true;
};
</script>
