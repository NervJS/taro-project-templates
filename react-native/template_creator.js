function createWhenTs (err, params) {
  return !!params.typescript
}
function notToChangeExt (_) {
  return {
    changeExt: false
  }
}

const handler = {
  '/index.js': notToChangeExt,
  '/metro.config.js': notToChangeExt,
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts' (err, { framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/src/pages/index/index.jsx' (err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.jsx` }
  },
  '/src/pages/index/index.css' (err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.css` }
  },
  '/src/pages/index/index.config.js' (err, { pageName }) {
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
  platforms: ['React']
}
