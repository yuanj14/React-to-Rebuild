import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // 禁用 MFSU，解决 React Compiler Runtime 兼容性问题
  mfsu: false,
  locale: { default: 'zh-CN', baseSeparator: '-' },
  layout: { title: 'ruo11', locale: true },
  routes: [
    { path: '/', redirect: '/home' },
    { name: 'home', path: '/home', component: './Home' },
    { name: 'access', path: '/access', component: './Access' },
    { name: 'table', path: '/table', component: './Table' },
  ],
  npmClient: 'pnpm',
  // 启用 React Compiler umijs不兼容react19
  extraBabelPlugins: [['babel-plugin-react-compiler', { target: '18' }]],
  // 通过 chainWebpack 删除 HMR 插件，实现手动刷新
  chainWebpack(memo) {
    memo.plugins.delete('hmr');
    return memo;
  },
});
