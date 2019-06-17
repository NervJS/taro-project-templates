function createWhenTs (params) {
  return Boolean(params.typescript)
}

function notToChangeExt () {
  return {
    changeExt: false
  }
}

const handler = {
  '/client/global.d.ts': createWhenTs,
  '/client/tsconfig.json': createWhenTs,
  '/client/config/dev.js': notToChangeExt,
  '/client/config/index.js': notToChangeExt,
  '/client/config/prod.js': notToChangeExt
}

module.exports = {
  handler
}
