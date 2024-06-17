module.exports = {
  root: true,
  parserOptions: { tsconfigRootDir: __dirname },
  plugins: ['prettier'],
  rules: {
    // eslint-disable-next-line
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: '@byted/eslint-config-standard',
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: '@byted/eslint-config-standard-ts',
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: '@byted/eslint-config-standard-react/jsx-runtime',
    },
  ],
};
