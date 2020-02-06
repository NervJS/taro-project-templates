function createWhenTs (params) {
  return Boolean(params.typescript)
}

function notToChangeExt () {
  return {
    changeExt: false
  }
}

const handler = {
  "/client/global.d.ts": createWhenTs,
  "/client/tsconfig.json": createWhenTs,
  "/client/config/dev.js": notToChangeExt,
  "/client/config/index.js": notToChangeExt,
  "/client/config/prod.js": notToChangeExt,
  "/client/src/pages/index/index.jsx"({ pageName }) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.jsx` };
  },
  "/client/src/pages/index/index.css"({ pageName }) {
    return { setPageName: `/client/src/pages/${pageName}/${pageName}.css` };
  },
  "/client/pkg" () {
    return { setPageName: `/client/package.json` };
  },
  "/cloud/functions/login/pkg" () {
    return { setPageName: `/cloud/functions/login/package.json` };
  }
};

const basePageFiles = [
  '/client/src/pages/index/index.jsx',
  '/client/src/pages/index/index.css'
]

module.exports = {
  handler,
  basePageFiles
}
