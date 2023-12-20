const path = require('path')

function createWhenTs (err, params) {
  return !!params.typescript
}

const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts' (err, { framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/src/pages/index/index.css' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, `${pageName}.css`),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, `${pageName}.css`)
    }
  },
  '/src/pages/index/index.vue' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, `${pageName}.vue`),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, `${pageName}.vue`)
    }
  },
  '/src/pages/index/index.config.js' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, `${pageName}.config.js`),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, `${pageName}.config.js`)
    }
  }
}

const basePageFiles = [
  '/src/pages/index/index.jsx',
  '/src/pages/index/index.css',
  '/src/pages/index/index.vue',
]

module.exports = {
  desc: '使用 taro-ui-vue 的模板',
  handler,
  basePageFiles,
  platforms: ['Vue'],
  compiler: ['Webpack4', 'Webpack5']
}
