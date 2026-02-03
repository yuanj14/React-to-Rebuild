module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    // src 目录使用 @umijs/max 的 ESLint 配置
    {
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      extends: [require.resolve('@umijs/max/eslint')],
      rules: {
        // 开发阶段禁用未使用变量检查，终版时再启用
        'no-unused-vars': 'off',
        'no-empty': 'off',
      },
    },
  ],
};
