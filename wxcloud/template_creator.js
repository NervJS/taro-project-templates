function createWhenTs (params) {
  return Boolean(params.typescript)
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs
}

module.exports = {
  handler
}
