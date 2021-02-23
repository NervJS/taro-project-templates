<%if (framework === 'react') {-%>
import { Component } from 'react'
<%} else if (framework === 'nerv') { -%>
import Nerv, { Component } from 'nervjs'
<%}-%>
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.<%= cssExt %>'

const store = {
  counterStore
}

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

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
