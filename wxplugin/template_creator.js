function createWhenTs (params) {
  return params.typescript ? true : false
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/plugin/pages/list/list.jsx' () {
    return { pageName: 'list' }
  }
}

const pageHandler = {
  '/src/plugin/pages/list/list.jsx' ({ pageName }) {
    return { setPageName: `/src/plugin/pages/${pageName}/${pageName}.jsx` }
  },
  '/src/plugin/pages/list/list.css' ({ pageName}) {
    return { setPageName: `/src/plugin/pages/${pageName}/${pageName}.css` }
  }
}

module.exports = {
  handler,
  pageHandler
}
