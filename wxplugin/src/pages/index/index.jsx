import Taro from '@tarojs/taro'
<%if (['react', 'preact'].includes(framework)) {-%>
import { Component<% if (typescript) {%>, PropsWithChildren<%}%> } from 'react'
<%}-%>
import { View, Text, Navigator } from '@tarojs/components'
import './index.<%= cssExt %>'

const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class <%= _.capitalize(pageName) %> extends <% if (typescript) {%>Component<PropsWithChildren><%} else {%>Component<%}%> {
  componentDidMount () {
    myPluginInterface.sayHello()
    const answer = myPluginInterface.answer
    console.log('answer: ', answer)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <Text>Hello world!</Text>
        <avatar />
        <Navigator url='plugin://myPlugin/list'>
          Go to pages/list!
        </Navigator>
      </View>
    )
  }
}
