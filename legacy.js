module.exports = {
    extends: [
        "eslint-config-nfl/rules/best-practices",
        "eslint-config-nfl/rules/errors",
        "eslint-config-nfl/rules/legacy",
        "eslint-config-nfl/rules/node",
        "eslint-config-nfl/rules/style",
        "eslint-config-nfl/rules/variables"
    ],
    env: {
        browser: true,
        node: true,
        amd: false,
        mocha: false,
        jasmine: false
    },
    ecmaFeatures: {},
    globals: {},
    rules: {}
};
