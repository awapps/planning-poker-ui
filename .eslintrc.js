module.exports = {
    "extends": "airbnb",
    "rules": {
        "quotes": ["error", "single"],
        "react/jsx-indent": ["error", 4],
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
