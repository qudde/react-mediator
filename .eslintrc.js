module.exports = {
    parser: "babel-eslint",
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    env: {
        browser: true,
        es6: true,
        amd: true
    },
    rules: {
        "comma-dangle": ["error", "never"],
        "no-cond-assign": ["error", "always"],
        "no-console": "off",
        "react/prop-types": "skipUndeclared",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-string-refs": 0,
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-class-assign": 0
    },
    globals: {
        global: true,
        window: true,
        setTimeout: true,
        clearTimeout: true,
        setInterval: true,
        clearInterval: true,
        require: true,
        Promise: true,
        console: true,
        module: true
    }
};
