{{#if (includes "React" "Preact" s=framework)}}
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
{{/if}}{{#if (eq framework 'Vue') }}
import Vue from 'vue'
{{/if}}{{#if (eq framework 'Vue3') }}
import { createApp } from 'vue'
{{/if}}
{{#if typescript }}
import Taro, { Config } from '@tarojs/taro'
{{else}}
import Taro from '@tarojs/taro'
{{/if}}

import './app.{{ cssExt }}'

{{#if (includes "React" "Preact" s=framework)}}
class App extends {{#if typescript }}Component<PropsWithChildren> {{else}} Component{{/if}} {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}
{{/if}}
{{#if (eq framework 'Vue') }}
const App = {
  mounted () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  },
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}
{{/if}}
{{#if (eq framework 'Vue3') }}
const App = createApp({
  mounted () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  },
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
{{/if}}

export default App
