import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
    { 
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
        languageOptions: { globals: globals.browser }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['**/*.vue'],
        languageOptions: { parserOptions: { parser: tseslint.parser } },
        rules: {
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 3,
                    multiline: 1
                }
            ],
            'capitalized-comments': [
                'error',
                'always',
                {
                    ignorePattern: 'eslint|webpack|prettier',
                    ignoreInlineComments: false,
                    ignoreConsecutiveComments: false,
                }
            ]
        }
    }
]
