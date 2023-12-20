import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
{{#if typescript }}import Taro, { Config } from '@tarojs/taro'{{/if}}
{{#unless typescript}}import Taro from '@tarojs/taro'{{/if}}
import { View, Text } from '@tarojs/components'

import './index.{{ cssExt }}'

import Login from '../../components/login/index'

export default class {{ to_pascal_case pageName }} extends Component{{#if typescript }}<PropsWithChildren>{{/if}} {
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
