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
  '/client/config/prod.js': notToChangeExt
}

const pageHandler = {
  '/client/src/pages/index/index.jsx' ({ pageName }) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.jsx` }
  },
  '/client/src/pages/index/index.css' ({ pageName}) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.css` }
  }
}

module.exports = {
  handler,
  pageHandler
}
