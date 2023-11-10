function createWhenTs (err, params) {
  return Boolean(params.typescript)
}

function notToChangeExt (_) {
  return {
    changeExt: false
  }
}

const handler = {
  '/client/tsconfig.json': createWhenTs,
  '/client/types/global.d.ts': createWhenTs,
  '/client/types/vue.d.ts' (err, { framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/client/config/dev.js': notToChangeExt,
  '/client/config/index.js': notToChangeExt,
  '/client/config/prod.js': notToChangeExt,
  '/client/src/pages/index/index.jsx' (err, { pageName }) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.jsx` }
  },
  '/client/src/pages/index/index.css' (err, { pageName}) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.css` }
  },
  '/client/src/pages/index/index.config.js' (err, { pageName }) {
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
  platforms: ['React', 'Preact', 'Nerv', 'Vue' ]
}
