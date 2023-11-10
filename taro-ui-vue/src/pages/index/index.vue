<template>
  <view class="{{ pageName }}">
    <view class="index">
    <AtNoticebar marquee>
      欢迎使用 Taro UI Vue
    </AtNoticebar>
    <AtButton
      type="primary"
      :on-click="handleClick"
    >
      AtButton
    </AtButton>
    <AtToast :is-opened="show" :text="msg" :on-close="handleClose"></AtToast>
  </view>
  </view>
</template>

<script>
{{#if (eq framework "Vue3") }}
import { ref } from 'vue'
{{/if}}
// 按需引入, 更小的应用体积
import { AtButton, AtToast, AtNoticebar } from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/toast.scss"
import "taro-ui-vue/dist/style/components/noticebar.scss"
import './{{ pageName }}.{{ cssExt }}'
export default {
  {{#if (eq framework "Vue") }}
  components: {
    AtButton,
    AtToast,
    AtNoticebar
  },
  data () {
    return {
      msg: 'Hello world!',
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleClose () {
      this.show = false
    }
  },
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
