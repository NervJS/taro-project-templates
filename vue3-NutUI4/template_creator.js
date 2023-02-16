function createWhenTs (params) {
  return params.typescript ? true : false
}

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts' ({ framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/src/pages/index/index.vue' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.vue` }
  },
  '/src/pages/index/index.config.js' ({ pageName}) {
    return { setPageName: `/src/pages/${pageName}/index.config.js` }
  }
}

const basePageFiles = [
  '/src/pages/index/index.vue',
  '/src/pages/index/index.config.js'
]

module.exports = {
  desc: '使用 NutUI4.0 的模板',
  handler,
  basePageFiles,
  platforms: ['vue3']
}
