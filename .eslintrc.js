module.exports = {
  // Apply the shared @umijs/max ESLint config only to files under `src`
  overrides: [
    {
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      extends: [require.resolve('@umijs/max/eslint')],
      rules: {
        // 开发阶段禁用未使用变量检查，终版时再启用
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
