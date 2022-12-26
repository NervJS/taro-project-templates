<%if (['react', 'preact'].includes(framework)) {-%>
import { Component<% if (typescript) {%>, PropsWithChildren<%}%> } from 'react'
<%}-%>
import { View, Text } from '@tarojs/components'
import './<%= pageName %>.<%= cssExt %>'

export default class <%= _.capitalize(pageName) %> extends <% if (typescript) {%>Component<PropsWithChildren><%} else {%>Component<%}%> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
