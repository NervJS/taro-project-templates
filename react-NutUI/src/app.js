import { Component } from 'react'
import './app.<%= cssExt %>'

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render() {
    return this.props.children
  }
}
export default App
