module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './jsconfig.json',
    },
    plugins: ['react', 'prettier'],
    rules: {
      'react/react-in-jsx-scope': 0,
      'no-shadow': 0,
      'endOfLine': "auto",
    },
  };
