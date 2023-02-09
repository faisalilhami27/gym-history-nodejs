module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2],
    camelcase: 'off',
    strict: 'off',
    'no-use-before-define': 'off',
    'object-shorthand': 'off',
    'n/no-path-concat': 'off',
    'n/no-callback-literal': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'no-loop-func': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'no-return-await': 'off',
    'default-param-last': 'off',
    'max-len': 'off',
    'prefer-destructuring': 'off',
    'new-cap': 'off'
  }
}
