import { Layout, Menu } from 'antd'
import { siderMenuItems } from '../config'
import { LAYOUT } from '../constants'
import Logo from './Logo'

const { Sider } = Layout

interface SiderMenuProps {
  collapsed: boolean
}

/**
 * 侧边栏菜单组件
 * @description 包含 Logo 和导航菜单
 */
const SiderMenu = ({ collapsed }: SiderMenuProps) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={LAYOUT.SIDER_COLLAPSED_WIDTH}
      theme="light">
      <Logo collapsed={collapsed} />
      <Menu
        mode="inline"
        defaultSelectedKeys={['home']}
        items={siderMenuItems}
      />
    </Sider>
  )
}

export default SiderMenu
