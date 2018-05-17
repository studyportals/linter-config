//http://eslint.org/docs/rules/
/*global module*/
module.exports = {
  env: {
	es6: true,
	browser: true
  },
  parser: "babel-eslint",
  parserOptions: {
	  parser: "babel-eslint"
  },
  globals: {
	$: true,
	$$: true,
	Shared: true,
	ServiceLayerClient: true,
	DataStorage: true
  },
  plugins: [
	"vue",
	"html"
  ],
  extends: "plugin:vue/recommended",
  rules: {
	"no-console": "off",
	"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
	"vue/html-indent": [
		2,
		"tab",
		{
			attribute: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: []
		}
	],
	"vue/max-attributes-per-line": [
		1,
		{
			singleline: 5,
			multiline: {
				max: 2,
				allowFirstLine: true
			}
		}
	],
	"vue/attribute-hyphenation": [0]
  }
};
