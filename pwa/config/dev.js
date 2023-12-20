{{#if typescript }}import type { UserConfigExport } from "@tarojs/cli";
{{/if}}
export default {
  {{#if (eq compiler "Webpack5") }} logger: {
    quiet: false,
    stats: true
  },{{/if}}
  mini: {},
  h5: {
    webpackChain (chain) {
      chain.plugin('sw')
        .use(require('workbox-webpack-plugin').GenerateSW, [{
          clientsClaim: true,
          skipWaiting: true,
        }])
    }
  }
}{{#if typescript }} satisfies UserConfigExport<'{{ to_lower_case compiler }}'>{{/if}}
