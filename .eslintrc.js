module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:flowtype/recommended'
  ],
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'flowtype',
  ],
  rules: {
    'global-require': 0,
    'padded-blocks': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'max-len': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/href-no-hash': 0,
    'class-methods-use-this': 0,
    'no-throw-literal': 0,
    'guard-for-in': 0,
    'no-bitwise': 0,
    // 'react/jsx-filename-extension': 0,

    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["route"],
      "aspects": ["invalidHref", "preferButton"]
    }],
    "import/extensions": "off",
    "import/no-unresolved": "off"
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      spread: true,
    },
  },
  env: {
    node: true,
  },
  globals: {
    localStorage: true,
    window: true,
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
};
