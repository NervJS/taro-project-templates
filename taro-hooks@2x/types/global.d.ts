/// <reference types="@tarojs/taro" />
{{#if (includes 'Vue' 'Vue3' s=framework)}}
/// <reference types="@taro-hooks/plugin-vue" />
import '@taro-hooks/plugin-vue';
{{/if}}
{{#if (includes 'React' 'Preact' 'Nerv' s=framework)}}
/// <reference types="@taro-hooks/plugin-react" />
import '@taro-hooks/plugin-react';
{{/if}}

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

{{#if (includes 'Vue' 'Vue3' s=framework)}}
declare module '@tarojs/components' {
  export * from '@tarojs/components/types/index.vue3'
}{{/if}}
