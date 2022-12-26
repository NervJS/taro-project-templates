<%if (['react', 'preact'].includes(framework)) {-%>
import { Component<% if (typescript) {%>, PropsWithChildren<%}%> } from 'react'
<%}-%>
<%if (locals.typescript) {-%>
import Taro, { Config } from '@tarojs/taro'
<%} else { -%>
import Taro from '@tarojs/taro'
<%}-%>
import { View, Text } from '@tarojs/components'
import './<%= pageName %>.<%= cssExt %>'

import Login from '../../components/login/index'

export default class <%= _.capitalize(pageName) %> extends <% if (typescript) {%>Component<PropsWithChildren><%} else {%>Component<%}%> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <Login/>
      </View>
    )
  }
}
