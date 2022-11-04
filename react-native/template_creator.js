function createWhenTs (params) {
  return !!params.typescript
}
function notToChangeExt () {
  return {
    changeExt: false
  }
}

const handler = {
  '/index.js': notToChangeExt,
  '/metro.config.js': notToChangeExt,
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/pages/index/index.jsx' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.jsx` }
  },
  '/src/pages/index/index.css' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.css` }
  },
  '/src/pages/index/index.config.js' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.config.js` }
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
