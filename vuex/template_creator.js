function createWhenTs (params) {
  return params.typescript ? true : false
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/pages/index/index.vue' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.vue` }
  },
  '/src/pages/index/index.css' ({ pageName}) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.css` }
  }
}

const basePageFiles = [
  '/src/pages/index/index.vue',
  '/src/pages/index/index.css'
]

module.exports = {
  handler,
  basePageFiles,
  platforms: ['vue']
}
