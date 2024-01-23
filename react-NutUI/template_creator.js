const path = require('path')

function createWhenTs (err, params) {
  return !!params.typescript
}

const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
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
  },
  '/src/pages/index/index.config.js' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: path.join(PAGES_ENTRY, pageDir, pageName, `${pageName}.config.js`),
      setSubPkgName: path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, `${pageName}.config.js`)
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
  }
}

const basePageFiles = [
  '/src/pages/index/index.jsx',
  '/src/pages/index/index.css',
  '/src/pages/index/index.config.js'
]

module.exports = {
  desc: 'NutUI + React 模板（https://nutui.jd.com/react/）',
  handler,
  basePageFiles,
  platforms: ['React', 'Preact']
}
