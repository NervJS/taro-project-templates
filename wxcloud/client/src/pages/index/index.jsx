{{#if (includes "React" "Preact" s=framework)}}
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
{{/if}}
{{#if typescript}}
import Taro, { Config } from '@tarojs/taro'
{{else}}
import Taro from '@tarojs/taro'
{{/if}}
import { View, Text } from '@tarojs/components'
import './{{ pageName }}.{{ cssExt }}'

import Login from '../../components/login/index'

export default class {{ to_pascal_case pageName }} extends {{#if typescript }}Component<PropsWithChildren>{{else}}Component{{/if}} {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='{{ pageName }}'>
        <Login/>
      </View>
    )
  }
}
