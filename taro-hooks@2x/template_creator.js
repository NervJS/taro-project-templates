function createWhenTs(err, params) {
  return !!params.typescript;
}

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts'(err, { framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/src/pages/index/index.jsx'(err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.jsx` }
  },
  '/src/pages/index/index.css'(err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.css` }
  },
  '/src/pages/index/index.vue'(err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.vue` }
  },
  '/src/pages/index/index.config.js'(err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.config.js` }
  }
}


const basePageFiles = [
  '/src/pages/index/index.jsx',
  '/src/pages/index/index.vue',
  '/src/pages/index/index.css',
  '/src/pages/index/index.config.js'
]


module.exports = {
  desc: "使用 taro-hooks@2x 版本的模板",
  handler,
  basePageFiles,
  platforms: ["React", "Preact", "Vue3"],
};
