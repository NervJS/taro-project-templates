<%if (['react', 'preact'].includes(framework)) {-%>
import { Component<% if (typescript) {%>, PropsWithChildren<%}%> } from 'react'
<%}-%>
import { View, Image } from '@tarojs/components'
import './avatar.<%= cssExt %>'

export default class Avatar extends <% if (typescript) {%>Component<PropsWithChildren><%} else {%>Component<%}%> {
  render () {
    return (
      <View>
        <Image src='http://storage.360buyimg.com/taro-static/static/images/logo.png' />
      </View>
    )
  }
}
