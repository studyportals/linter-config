//http://eslint.org/docs/rules/
/*global module*/
module.exports = {
    "env": {
        "es6": true,
        "browser": true
    },
    "globals": {
        "$": true,
        "$$": true,
        "Shared": true,
        "ServiceLayerClient": true,
        "DataStorage": true
    },
    "extends": "plugin:vue/essential",
    "rules": {
        "no-console": "off",
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"]
    }
}
