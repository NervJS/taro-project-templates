Taro React Native Template
====

## requirement

0. taro: `@tarojs/cli@^3.2.0`
1. framework: 'react'
## quick start

### install react native library
> install peerDependencies of `@tarojs/taro-rn` `@tarojs/components-rn` and `@tarojs/router-rn`. please modify and run `upgradePeerdeps` script when you change taro version.
> 
> **run this script after project inited.**

`yarn upgradePeerdeps`

### pod install
> run this script when you add new react native library or update react native library version.
> 
> see [pod-install](https://www.npmjs.com/package/pod-install) for more infomation.

`yarn podInstall`

### start ios app

`yarn ios`

### start android app

`yarn android`

### start bundler

`yarn start`

### more infomations

0. [development process of taro react native](https://taro-docs.jd.com/taro/docs/react-native)
1. [github](https://github.com/NervJS/taro)

## release

### build ios bundle

`yarn build:rn --platform ios`

### build Android bundle

`yarn build:rn --platform android`

### release ios APP

see [publishing-to-app-store](https://reactnative.cn/docs/publishing-to-app-store) for detail.

### release android apk

see [signed-apk-android](https://reactnative.cn/docs/signed-apk-android) for detail.

## github workflows
> use github actions to build your apps. 

see [.github/workflows](.github/workflows) for detail.