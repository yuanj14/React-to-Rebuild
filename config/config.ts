import { defineConfig } from '@umijs/max'
import routes from './routes'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  clickToComponent: {},
  request: {},
  // 禁用 MFSU，解决 React Compiler Runtime 兼容性问题
  mfsu: false,
  locale: { default: 'zh-CN', baseSeparator: '-' },
  // layout: { title: 'ruo11', locale: true }, // 禁用内置 ProLayout，使用自定义 layouts/index.tsx
  routes,
  npmClient: 'pnpm',
  // 启用 React Compiler
  extraBabelPlugins: [['babel-plugin-react-compiler', { target: '19' }]],
})
