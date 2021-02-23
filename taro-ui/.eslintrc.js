module.exports = {
  "extends": ["taro/<%= framework %>"]<% if (framework === 'react') {%>,
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }<%}%>
}
