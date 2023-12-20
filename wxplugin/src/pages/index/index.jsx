import Taro from '@tarojs/taro'
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
import { View, Text, Navigator } from '@tarojs/components'

import './index.{{ cssExt }}'

const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class {{ to_pascal_case pageName }} extends Component{{#if typescript }}<PropsWithChildren>{{/if}} {
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
      <View className='{{ pageName }}'>
        <Text>Hello world!</Text>
        <avatar />
        <Navigator url='plugin://myPlugin/list'>
          Go to pages/list!
        </Navigator>
      </View>
    )
  }
}
