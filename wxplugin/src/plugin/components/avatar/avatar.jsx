{{#if (includes "React" "Preact" s=framework)}}
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
{{/if}}
import { View, Image } from '@tarojs/components'
import './avatar.{{ cssExt }}'

export default class Avatar extends {{#if typescript}}Component<PropsWithChildren> {{else}} Component{{/if}} {
  render () {
    return (
      <View>
        <Image src='http://storage.360buyimg.com/taro-static/static/images/logo.png' />
      </View>
    )
  }
}
