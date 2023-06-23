/// <reference types="@tarojs/taro" />
<%if (['vue', 'vue3'].includes(framework)) {-%>
/// <reference types="@taro-hooks/plugin-vue" />
import '@taro-hooks/plugin-vue';
<%}-%>
<%if (['react', 'preact', 'nerv'].includes(framework)) {-%>
/// <reference types="@taro-hooks/plugin-react" />
import '@taro-hooks/plugin-react';
<%}-%>

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

<%if (['vue', 'vue3'].includes(framework)) {-%>
declare module '@tarojs/components' {
  export * from '@tarojs/components/types/index.vue3'
}<%}-%>
