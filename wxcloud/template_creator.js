function createWhenTs (params) {
  return Boolean(params.typescript)
}

function notToChangeExt () {
  return {
    changeExt: false
  }
}

const handler = {
  '/client/global.d.ts': createWhenTs,
  '/client/tsconfig.json': createWhenTs,
  '/client/config/dev.js': notToChangeExt,
  '/client/config/index.js': notToChangeExt,
  '/client/config/prod.js': notToChangeExt,
  '/client/src/pages/index/index.jsx' ({ pageName }) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.js` }
  },
  '/client/src/pages/index/index.css' ({ pageName}) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.css` }
  },
  '/client/src/pages/index/index.config.js' ({ pageName }) {
    return { setPageName: `/client/src/pages/${pageName}/index.config.js` }
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
  platforms: ['react', 'nerv', 'vue' ]
}
