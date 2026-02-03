import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

/**
 * 用户下拉菜单配置
 * @description Header 右侧用户头像下拉菜单项
 */
export const userDropdownItems: MenuItem[] = [
  { key: 'center', label: '个人中心' },
  { key: 'settings', label: '布局设置' },
  { type: 'divider' },
  { key: 'logout', label: '退出登录' },
]
