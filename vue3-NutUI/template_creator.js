const path = require('path')

function createWhenTs (err, params) {
  return !!params.typescript
}

const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts': createWhenTs,
  '/src/pages/index/index.vue' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, 'index.vue'),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.vue')
    }
  },
  '/src/pages/index/index.config.js' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, 'index.config.js'),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.config.js')
    }
  },
  '/_eslintrc' () {
    return { setPageName: `/.eslintrc` }
  },
  '/_gitignore' () {
    return { setPageName: `/.gitignore` }
  },
  '/_editorconfig' () {
    return { setPageName: `/.editorconfig` }
  },
}

const basePageFiles = [
  '/src/pages/index/index.vue',
  '/src/pages/index/index.config.js'
]

module.exports = {
  desc: 'NutUI + Vue3 模板（https://nutui.jd.com/）',
  handler,
  basePageFiles,
  platforms: ['Vue3']
}
