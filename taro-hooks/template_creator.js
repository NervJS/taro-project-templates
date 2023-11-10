function createWhenTs(err, params) {
  return !!params.typescript;
}

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts' (err, { framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  "/src/pages/index/index.jsx"(err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.jsx` };
  },
  "/src/pages/index/index.css"(err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.css` };
  },
  "/src/pages/index/index.config.js"(err, { pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.config.js` };
  },
};

const basePageFiles = [
  "/src/pages/index/index.jsx",
  "/src/pages/index/index.css",
];

module.exports = {
  desc: "使用 taro-hooks 的模板",
  handler,
  basePageFiles,
  platforms: ["React"],
};
