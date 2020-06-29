module.exports = {
  /**
   * 有数 - ka‘接入测试用’ 分配的 app_id，对应的业务接口人负责
   */
  token: 'bi72fccc7184ef45f9',

  /**
   * 微信小程序appID，以wx开头
   */
  appid: 'wx195745e8e342bd76',
  
  /**
   * 如果使用了小程序插件，需要设置为 true
   */
  usePlugin: false,

  /**
   * 开启打印调试信息， 默认 false
   */
  debug: true,

  /**
   * 开启自动代理 Page， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   * 可以使用 sr.page 代替 Page(sr.page(options))
   * 元素事件跟踪，需要配合 autoTrack: true
   */
  proxyPage: true,
  proxyComponent: true,
  openSdkShareDepth: true,
  autoTrack: true,
}
