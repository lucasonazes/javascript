module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/newline-after-import': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'quote-props': 'off',
  },
};
