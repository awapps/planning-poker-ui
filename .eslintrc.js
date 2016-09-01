module.exports = {
    "extends": "airbnb",
    "rules": {
        "comma-dangle": 0,
        "quotes": ["error", "single"],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-closing-bracket-location": ["error", "after-props"],
        "react/jsx-filename-extension": 0
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "node": true
    }
};
