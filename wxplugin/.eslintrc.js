<%if (framework === 'vue') {-%>
// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
<%}-%>
module.exports = {
<%if (!locals.typescript) {-%>
  "extends": ["taro"],
  "rules": {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }]
  },
  "parser": "babel-eslint"
  <%} else {-%>
  "extends": ["taro", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    "@typescript-eslint/member-delimiter-style": {
      "multiline": {
        "delimiter": "none",
        "requireLast": false
      },
      "singleline": {
        "delimiter": "none",
        "requireLast": false
      }
    },
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-empty-function": ["warn"]
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true
  }
<%}-%>
}
