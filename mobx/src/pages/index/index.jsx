<%if (locals.typescript) {-%>
import { ComponentType } from 'react'
<%}-%>
<%if (framework === 'react') {-%>
import React, { Component } from 'react'
<%} else if (framework === 'nerv') { -%>
import Nerv, { Component } from 'nervjs'
<%}-%>
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'react-mobx'

import './<%= pageName %>.<%= cssExt %>'

<%if (locals.typescript) {-%>
type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface <%= _.capitalize(pageName) %> {
  props: PageStateProps;
}
<%}-%>

@inject('counterStore')
@observer
class <%= _.capitalize(pageName) %> extends Component {
  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='<%= pageName %>'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default <%= _.capitalize(pageName) %> <%if (locals.typescript) {%> as ComponentType<%}%>
