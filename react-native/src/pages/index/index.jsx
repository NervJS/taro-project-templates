import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
import { View, Text } from '@tarojs/components'
import './index.{{ cssExt }}'

export default class {{ to_pascal_case pageName }} extends {{#if typescript }}Component<PropsWithChildren>{{else}}Component{{/if}} {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='{{ pageName }}'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
