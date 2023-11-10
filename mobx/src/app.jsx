{{#if (includes "React" "Preact" s=framework)}}
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
{{/if}}
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.{{ cssExt }}'

const store = {
  counterStore
}

class App extends {{#if typescript }}Component<PropsWithChildren> {{else}} Component{{/if}} {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
