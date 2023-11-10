<template>
  <view>
    <list-item
      v-for="item in list"
      :key="item.name"
      :name="item.name"
      :value="item.value" />
  </view>
</template>

<script>
{{#if (eq framework 'Vue3') }}
import { ref } from 'vue'
{{/if}}
import './list.{{ cssExt }}'
import ListItem from '../../components/listItem/listItem.vue'
export default {
{{#if (eq framework 'Vue') }}
  data () {
    return {
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
  },
  components: {
    'list-item': ListItem
  }
{{/if}}
{{#if (eq framework 'Vue3') }}
  components: {
    'list-item': ListItem
  },
  setup () {
    const list = ref([{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }])
    return {
      list
    }
  }
{{/if}}
}
</script>
