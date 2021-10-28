module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  // The stylelint-scss plugin and rules below ensure that valid SCSS isn't marked by the linter
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
}
