# How to install

```bash
npm i eslint eslint-plugin-vue eslint-plugin-html eslint-config-studyportals/vue stylelint-config-studyportals browserslist-config-studyportals
```

Add to your package.json

```json
"stylelint": {"extends": "stylelint-config-studyportals"},
"eslintConfig": {"extends": "eslint-config-studyportals/vue"},
"browserslist": ["extends browserslist-config-studyportals"],
```