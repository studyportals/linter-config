# Installation

Install the package

```bash
npm install --save-dev eslint @studyportals/eslint-config
```

Add beneath code to your `package.json`

```json
"eslintConfig": {
  "extends": "@studyportals/eslint-config"
}
```

## Vue

For vue projects you also need to install some extra depencies:

```bash
npm install --save-dev eslint-plugin-html eslint-plugin-vue
```

Add beneath code to your `package.json`

```json
"eslintConfig": {
  "extends": "@studyportals/eslint-config/vue"
}
```

# Basic usage

## Usage within your command line

1. install eslint globally, `npm i -g eslint`
2. run eslint against your desired file(s), `eslint --ext js,vue MyComponent.vue`

## Usage within webpack

1. install eslint-loader, `npm i -D eslint-loader`
2. Add beneath rule to your webpack config file.
```js
// webpack.config.js
module.exports = {
  // ... other options
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }
}
```

# Guidelines

Coming soon!
