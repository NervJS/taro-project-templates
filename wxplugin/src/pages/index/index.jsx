import Taro from '@tarojs/taro'
{{#if (includes "React" "Preact" s=framework)}}
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
{{/if}}
import { View, Text, Navigator } from '@tarojs/components'
import './{{ pageName }}.{{ cssExt }}'

const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class {{ to_pascal_case pageName }} extends {{#if typescript }}Component<PropsWithChildren>{{else}}Component{{/if}} {
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
