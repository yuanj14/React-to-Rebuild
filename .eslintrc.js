module.exports = {
  // Apply the shared @umijs/max ESLint config only to files under `src`
  overrides: [
    {
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      extends: [require.resolve('@umijs/max/eslint')],
    },
  ],
};
