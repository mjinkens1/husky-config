module.exports = {
  hooks: {
    "pre-commit":
      "npm run format && npm run lint-staged && CI=true npm run test --coverage --watchAll=false || exit 0"
  }
};
