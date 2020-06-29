function createWhenTs (params) {
  return params.typescript ? true : false
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/srsdk/sr-sdk-config.js' () { 
    return { changeExt: false }
  },
  '/src/srsdk/sr-sdk-wxapp.min.js' () {
    return { changeExt: false }
  },
  '/src/pages/index/index.jsx' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.jsx` }
  },
  '/src/pages/index/index.css' ({ pageName}) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.css` }
  }
}

const basePageFiles = [
  '/src/pages/index/index.jsx',
  '/src/pages/index/index.css'
]

module.exports = {
  handler,
  basePageFiles
}