module.exports = {
    "extends": "airbnb-base",
    "env": {
        "node": true
    },
    "globals": {
        "rm": true,
        "cp": true,
        "exec": true,
        "which": true
    },
    "parser": "babel-eslint",
    "rules": {
        "no-console": 0,
        "prefer-const": 0,
        "prefer-template": 0,
        "no-param-reassign": 0,
        "comma-dangle": [1, "never"],
        "spaced-comment": [0, "always"],
        "func-names": 0,
        "no-underscore-dangle": 0,
        "import/prefer-default-export": 1,
        "class-methods-use-this": 1,
        "no-prototype-builtins": 0,
        "import/no-extraneous-dependencies": 1,
        "radix": 0,
        "global-require": 0,
        "guard-for-in": 0,
        "no-restricted-syntax": 0,
        "no-useless-escape": 0
    }
};
