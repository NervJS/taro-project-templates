{
  "name": "{{ projectName }}",
  "version": "1.0.0",
  "private": true,
  "description": "{{ description }}",
  "templateInfo": {
    "name": "{{ template }}",
    "typescript": {{ typescript }},
    "css": "{{ css }}",
    "framework": "{{ framework }}"
  },
  "scripts": {
    "build:weapp": "taro build --type weapp",
    "build:swan": "taro build --type swan",
    "build:alipay": "taro build --type alipay",
    "build:tt": "taro build --type tt",
    "build:h5": "taro build --type h5",
    "build:rn": "taro build --type rn",
    "build:qq": "taro build --type qq",
    "build:quickapp": "taro build --type quickapp",
    "dev:weapp": "npm run build:weapp -- --watch",
    "dev:swan": "npm run build:swan -- --watch",
    "dev:alipay": "npm run build:alipay -- --watch",
    "dev:tt": "npm run build:tt -- --watch",
    "dev:h5": "npm run build:h5 -- --watch",
    "dev:rn": "npm run build:rn -- --watch",
    "dev:qq": "npm run build:qq -- --watch",
    "dev:quickapp": "npm run build:quickapp -- --watch",
    "test": "jest"
  },
  "browserslist": [
    "last 3 versions",
    "Android >= 4.1",
    "ios >= 8"
  ],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@babel/runtime": "^7.7.7",
    "@tarojs/components": "{{ version }}",
    "@tarojs/helper": "{{ version }}",
    "@tarojs/plugin-platform-weapp": "{{ version }}",
    "@tarojs/plugin-platform-alipay": "{{ version }}",
    "@tarojs/plugin-platform-tt": "{{ version }}",
    "@tarojs/plugin-platform-swan": "{{ version }}",
    "@tarojs/plugin-platform-jd": "{{ version }}",
    "@tarojs/plugin-platform-qq": "{{ version }}",
    "@tarojs/plugin-platform-h5": "{{ version }}",
    "@tarojs/runtime": "{{ version }}",
    "@tarojs/shared": "{{ version }}",
    "@tarojs/taro": "{{ version }}",
    "@tarojs/plugin-framework-vue3": "{{ version }}",
    "vue": "^3.2.24",
    "pinia": "^2.0.10"
  },{{#if (eq compiler "Vite") }}
  "devDependencies": {
    "@babel/core": "^7.8.0",
    "@tarojs/cli": "{{ version }}",
    "@tarojs/vite-runner": "{{ version }}",
    "babel-preset-taro": "{{ version }}",
    "eslint-config-taro": "{{ version }}",
    "eslint": "^8.12.0",
    "stylelint": "^14.4.0",
    "terser": "^5.16.8",
    "vite": "^4.2.0",
    "@vitejs/plugin-vue": "^4.0.0",
    "@vitejs/plugin-vue-jsx": "^3.0.0",
    "eslint-plugin-vue": "^8.0.0",{{#if (eq css "Sass") }}
    "sass": "^1.60.0",{{/if}}{{#if (eq css "Less") }}
    "less": "^4.1.3"{{/if}}{{#if (eq css "Stylus") }}
    "stylus": "^0.59.0",{{/if}}{{#if typescript }}
    "@typescript-eslint/parser": "^5.20.0",
    "@typescript-eslint/eslint-plugin": "^5.20.0",
    "typescript": "^4.1.0",
    "tsconfig-paths-webpack-plugin": "^4.0.1",{{/if}}
    "postcss": "^8.4.18",
    "jest-environment-jsdom": "^29.5.0"
  }{{/if}}{{#if (includes "Webpack4" "Webpack5" s=compiler)}}
  "devDependencies": {
    "@babel/core": "^7.8.0",
    "@tarojs/cli": "{{ version }}",
    "@types/webpack-env": "^1.13.6",
    "babel-preset-taro": "{{ version }}",
    "eslint-config-taro": "{{ version }}",
    "eslint": "^8.12.0",
    "stylelint": "^14.4.0",
    "@types/webpack-env": "^1.13.6",{{#if (eq compiler "Webpack4") }}
    "@tarojs/mini-runner": "{{ version }}",
    "@tarojs/webpack-runner": "{{ version }}",
    "webpack": "4.46.0",{{/if}}{{#if (eq compiler "Webpack5") }}
    "webpack": "5.78.0",
    "@tarojs/taro-loader": "{{ version }}",
    "@tarojs/webpack5-runner": "{{ version }}",{{/if}}
    "css-loader": "3.4.2",
    "style-loader": "1.3.0",
    "@tarojs/test-utils-vue3": "^0.1.1",
    "@vue/babel-plugin-jsx": "^1.0.6",
    "@vue/compiler-sfc": "^3.0.0",
    "vue-loader": "^17.0.0",{{/if}}{{#if typescript }}
    "eslint-plugin-vue": "^8.0.0",
    "eslint-config-taro": "{{ version }}",
    "eslint": "^8.12.0",
    "stylelint": "^14.4.0,
    "@typescript-eslint/parser": "^6.2.0",
    "@typescript-eslint/eslint-plugin": "^6.2.0",
    "typescript": "^5.1.0",
    "tsconfig-paths-webpack-plugin": "^4.0.1",{{/if}}
    "postcss": "^8.4.18",
    "@types/jest": "^29.3.1",
    "jest": "^29.3.1",
    "jest-environment-jsdom": "^29.5.0"
  }{{/if}}
}