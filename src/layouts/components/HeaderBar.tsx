import ThemeSwitch from '@/components/ThemeSwitch'
import {
  FullscreenOutlined,
  GithubOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Button, Layout, Space, theme } from 'antd'
import styles from './HeaderBar.module.less'
import UserDropdown from './UserDropdown'

const { Header } = Layout

interface HeaderBarProps {
  collapsed: boolean
  onCollapse: () => void
}

/**
 * Header 工具栏组件
 * @description 包含折叠按钮、面包屑、工具图标、主题切换、用户下拉
 */
const HeaderBar = ({ collapsed, onCollapse }: HeaderBarProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Header className={styles.header} style={{ background: colorBgContainer }}>
      {/* 左侧：折叠按钮 + 面包屑 */}
      <div className={styles.left}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onCollapse}
          className={styles.collapseButton}
        />
        <Breadcrumb
          items={[
            { title: 'Home' },
            { title: <a href="/!">Application Center</a> },
            { title: 'An Application' },
          ]}
        />
      </div>
      {/* 右侧：工具栏 */}
      <Space size="middle" className={styles.right}>
        <Button
          type="text"
          icon={<GithubOutlined className={styles.toolbarIcon} />}
          className={styles.toolbarButton}
        />
        <Button
          type="text"
          icon={<QuestionCircleOutlined className={styles.toolbarIcon} />}
          className={styles.toolbarButton}
        />
        <Button
          type="text"
          icon={<FullscreenOutlined className={styles.toolbarIcon} />}
          className={styles.toolbarButton}
        />
        <div className={styles.themeSwitchWrapper}>
          <ThemeSwitch />
        </div>
        <UserDropdown />
      </Space>
    </Header>
  )
}

export default HeaderBar
