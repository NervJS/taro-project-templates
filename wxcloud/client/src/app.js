{{#if (includes "React" "Preact" s=framework)}}
{{#if typescript }}import { PropsWithChildren } from 'react'{{/if}}
{{/if}}{{#if (eq framework 'Vue') }}
import Vue from 'vue'
{{/if}}{{#if (eq framework 'Vue3') }}
import { createApp } from 'vue'
{{/if}}
{{#if typescript }}import Taro, { Config } from '@tarojs/taro'{{/if}}
{{#unless typescript}}import Taro from '@tarojs/taro'{{/if}}

import './index.{{ cssExt }}'

{{#if (includes "React" "Preact" s=framework)}}
class App extends Component{{#if typescript }}<PropsWithChildren>{{/if}} {

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
