function createWhenTs (params) {
  return params.typescript ? true : false
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/plugin/pages/list/list.jsx' ({ period, pageName }) {
    if (period === 'createApp') return { pageName: 'list' }
    return { setPageName: `/src/plugin/pages/${pageName}/${pageName}.jsx` }
  },
  '/src/plugin/pages/list/list.css' ({ period, pageName}) {
    if (period === 'createApp') return true
    return { setPageName: `/src/plugin/pages/${pageName}/${pageName}.css` }
  }
}

const basePageFiles = [
  '/src/plugin/pages/list/list.jsx',
  '/src/plugin/pages/list/list.css'
]

module.exports = {
  handler,
  basePageFiles
}
