import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
import { View, Image } from '@tarojs/components'
import './avatar.{{ cssExt }}'

export default class Avatar extends extends Component{{#if typescript }}<PropsWithChildren>{{/if}} {
  render () {
    return (
      <View>
        <Image src='http://storage.360buyimg.com/taro-static/static/images/logo.png' />
      </View>
    )
  }
}
