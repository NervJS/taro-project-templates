const path = require('path')

function createWhenTs (params) {
  return !!params.typescript
}
function notToChangeExt () {
  return {
    changeExt: false
  }
}

const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

const handler = {
  '/index.js': notToChangeExt,
  '/metro.config.js': notToChangeExt,
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts' ({ framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/src/pages/index/index.jsx' ({ pageName, pageDir, subPkg }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, 'index.jsx'),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.jsx')
    }
  },
  '/src/pages/index/index.css' ({ pageName, pageDir, subPkg }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, 'index.css'),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.css')
    }
  },
  '/src/pages/index/index.config.js' ({ pageName, pageDir, subPkg }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, 'index.config.js'),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.config.js')
    }
  }
}

const basePageFiles = [
  '/src/pages/index/index.jsx',
  '/src/pages/index/index.css',
  '/src/pages/index/index.config.js'
]

module.exports = {
  handler,
  basePageFiles,
  platforms: ['react']
}
