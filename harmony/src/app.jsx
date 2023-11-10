{{#if (includes "React" "Preact" s=framework)}}
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
import { Provider } from 'react-redux'
{{/if}}

import configStore from './store'

import './app.{{ cssExt }}'

const store = configStore()

class App extends {{#if typescript }}Component<PropsWithChildren> {{else}} Component{{/if}} {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
