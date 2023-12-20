import Component from 'react'
import { View } from '@tarojs/components'
import './listItem.{{ cssExt }}'

{{#if typescript }}
interface IListItem {
  name: string,
  value: string
}
{{/if}}

export default class ListItem extends Component{{#if typescript }}<IListItem, any>{{/if}} {
  render () {
    const { name, value } = this.props
    return (
      <View>
        <View>name: {name}</View>
        <View>value: {value}</View>
      </View>
    )
  }
}
