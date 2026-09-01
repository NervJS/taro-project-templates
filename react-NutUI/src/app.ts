import React, { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'

import './app.{{ cssExt }}'

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})
  return props.children
}

export default App
