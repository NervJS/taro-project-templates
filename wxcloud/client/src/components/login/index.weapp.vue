<template>
    <View className='<%= pageName %>'>
        <Button @click="getLogin">获取登录云函数</Button>
        <Text>context：{{context}}</Text>
    </View>
</template>

<script>
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default {
    name: 'login',
    components: {
        View,
        Text,
        Button
    },
    data(){
        return {
            context: {}
        }
    },
    methods: {
        getLogin () {
            Taro.cloud
                .callFunction({
                    name: "login",
                    data: {}
                })
                .then(res => {
                    this.context = JSON.stringify(res.result)
                })
        }
    },
}
</script>
