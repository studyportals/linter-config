module.exports = {
    "processor": ["stylelint-processor-arbitrary-tags"],
    "plugins": ["stylelint-scss"],
    "rules": {
        "scss/dollar-variable-pattern": "^[A-Z][a-zA-Z]*$",
        "scss/at-mixin-pattern": "^[a-zA-Z]+$",
        "scss/percent-placeholder-pattern": "^[A-Z][a-zA-Z]*$",
        "scss/at-function-pattern": "^[a-zA-Z]*-?[a-zA-Z]*$",
        "selector-class-pattern": "^(is-)?[a-zA-Z]*$",
        "selector-id-pattern": "^[a-zA-Z]+$",
        "max-nesting-depth": 4,
        "number-leading-zero": "always",
        "indentation": "tab",
        "function-parentheses-space-inside": "never",
        "rule-empty-line-before": ["always", {
            "except": ["first-nested"],
            "ignore": ["after-comment", "first-nested"]
        }], 
        "color-hex-case": "upper",
        "color-hex-length": "long",
        "color-no-invalid-hex": true
    }
};