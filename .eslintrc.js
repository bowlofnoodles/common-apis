module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: [1, 'always'],
    quotes: [1, 'single'],
    'no-unused-vars': 0
  }
};
