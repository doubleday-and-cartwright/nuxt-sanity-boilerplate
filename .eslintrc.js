module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // Need this for Nuxt as these names are part of the framework
    'vue/multi-word-component-names': ['error', {
      'ignores': ['default.vue', 'error.vue']
    }]
  }
}
