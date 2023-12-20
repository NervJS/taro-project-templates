const path = require('path')

function createWhenTs (err, params) {
  return !!params.typescript
}

function notToChangeExt () {
  return {
    changeExt: false
  }
}


const SOURCE_ENTRY = '/client/src'
const PAGES_ENTRY = '/client/src/pages'


const handler = {
  '/client/tsconfig.json': createWhenTs,
  '/client/types/global.d.ts': createWhenTs,
  '/client/types/vue.d.ts' (err, { framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/client/config/dev.js': notToChangeExt,
  '/client/config/index.js': notToChangeExt,
  '/client/config/prod.js': notToChangeExt,
  '/client/src/pages/index/index.jsx' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, `${pageName}.jsx`),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, `${pageName}.jsx`)
    }
  },
  '/client/src/pages/index/index.css' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return { 
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, `${pageName}.css`),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, `${pageName}.css`)
    }
  },
  '/client/src/pages/index/index.config.js' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return { 
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, 'index.config.js'),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.config.js')
    }
  },
}

const basePageFiles = [
  '/client/src/pages/index/index.jsx',
  '/client/src/pages/index/index.css',
  '/client/src/pages/index/index.config.js'
]

module.exports = {
  desc: '云开发模板',
  handler,
  basePageFiles,
  platforms: ['React', 'Preact', 'Vue'],
  compiler: ['Webpack4', 'Webpack5']
}
