module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Components are plain JS without PropTypes.
    'react/prop-types': 'off',
  },
  overrides: [
    {
      // react-three-fiber elements take three.js props React doesn't know about.
      files: ['src/components/canvas/**'],
      rules: { 'react/no-unknown-property': 'off' },
    },
  ],
}
