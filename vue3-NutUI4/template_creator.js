const path = require('path')

function createWhenTs (params) {
  return !!params.typescript
}

const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts' ({ framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/src/pages/index/index.vue' ({ pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, 'index.vue'),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.vue')
    }
  },
  '/src/pages/index/index.config.js' ({ pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, 'index.config.js'),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.config.js')
    }
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
  platforms: ['Vue3'],
  compiler: ['Webpack4', 'Webpack5']
}
