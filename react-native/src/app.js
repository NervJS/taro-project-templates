import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'

import './app.{{ cssExt }}'

class App extends Component{{#if typescript }}<PropsWithChildren>{{/if}} {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}
export default App
