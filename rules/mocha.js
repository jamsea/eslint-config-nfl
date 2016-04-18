module.exports = {
    "plugins": [
        "mocha"
    ],
    // View link below for mocha rules documentation
    // https://github.com/lo1tuma/eslint-plugin-mocha
    "rules": {
        "mocha/no-exclusive-tests": 1,
        "mocha/handle-done-callback": 2,
        "mocha/no-synchronous-tests": 0,
        "mocha/no-global-tests": 2
    }
};
