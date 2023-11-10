{{#if (includes "React" "Preact" s=framework)}}
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
{{/if}}{{#if (eq framework 'Vue') }}
import Vue from 'vue'
{{/if}}{{#if (eq framework 'Vue3') }}
import { createApp } from 'vue'
{{/if}}
import './app.{{ cssExt }}'

{{#if (includes "React" "Preact" s=framework)}}
class App extends {{#if typescript }}Component<PropsWithChildren> {{else}} Component{{/if}} {

  componentDidMount () {}

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
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
{{/if}}

export default App
