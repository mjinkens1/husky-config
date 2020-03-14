module.exports = {
  hooks: {
    "pre-commit":
      "pretty-quick --pattern '**/*.js' && lint-staged && CI=true npm test --coverage --watchAll=false || exit 0"
  }
};
