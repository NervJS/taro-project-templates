const path = require('path')

const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

function createWhenTs (err, params) {
  return !!params.typescript
}

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts' (err, { framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/src/pages/index/index.jsx' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, `${pageName}.jsx`),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, `${pageName}.jsx`)
    }
  },
  '/src/pages/index/index.css' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, `${pageName}.css`),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, `${pageName}.css`)
    }
  }
}

const basePageFiles = [
  '/src/pages/index/index.jsx',
  '/src/pages/index/index.css'
]

module.exports = {
  handler,
  basePageFiles
}
