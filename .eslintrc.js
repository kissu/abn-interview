module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended', 'prettier'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 'off', // not a production app, just an assesment
    'no-undef': 'off', // mainly for auto-imported composable of Nuxt
    'no-unused-vars': 'warn',
  },
}
