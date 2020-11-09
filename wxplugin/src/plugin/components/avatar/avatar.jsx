<%if (framework === 'react') {-%>
import React, { Component } from 'react'
<%} else if (framework === 'nerv') { -%>
import Nerv, { Component } from 'nervjs'
<%}-%>
import { View, Image } from '@tarojs/components'
import './avatar.<%= cssExt %>'

export default class Avatar extends Component {
  render () {
    return (
      <View>
        <Image src='http://storage.360buyimg.com/taro-static/static/images/logo.png' />
      </View>
    )
  }
}
