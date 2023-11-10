module.exports = {
  "extends": ["taro/{{ to_lower_case framework }}"]{{#if (eq framework "React") }},
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }{{/if}}
}
