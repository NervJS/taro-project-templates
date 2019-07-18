function createWhenTs (params) {
  return params.typescript ? true : false
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  // '/src/plugin/pages/list/list.jsx' () {
  //   return { pageName: 'list' }
  // },
  '/src/plugin/pages/list/list.jsx' ({ pageName }) {
    // if (pageName === 'index') pageName = 'list'
    return { setPageName: `/src/plugin/pages/${pageName}/${pageName}.jsx` }
  },
  '/src/plugin/pages/list/list.css' ({ pageName}) {
    return { setPageName: `/src/plugin/pages/${pageName}/${pageName}.css` }
  }
}

basePageFiles = [
  '/src/pages/index/index.jsx',
  '/src/pages/index/index.css'
]

module.exports = {
  handler,
  basePageFiles
}
