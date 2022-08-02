module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
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
}
