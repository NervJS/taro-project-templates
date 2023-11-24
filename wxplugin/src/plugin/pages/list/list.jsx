{{#if (includes "React" "Preact" s=framework)}}
import { Component{{#if typescript }}, PropsWithChildren{{/if}} } from 'react'
{{/if}}
import { View } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import './list.{{ cssExt }}'

export default class {{ to_pascal_case pageName }} extends {{#if typescript }}Component<PropsWithChildren>{{else}}Component{{/if}} {
  state = {
    list: [{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }]
  }

  render () {
    return (
      <View>
        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
      </View>
    )
  }
}
