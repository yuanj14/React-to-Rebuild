import { Outlet, useModel } from '@umijs/max'
import { ConfigProvider, Layout, theme } from 'antd'
import { useState } from 'react'
import { HeaderBar, SiderMenu } from './components'
import { THEME } from './constants'
import styles from './index.module.less'

const { Content } = Layout

/**
 * 基础布局组件
 * @description 整合 Sider、Header、Content 的主布局
 */
const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { isDark } = useModel('theme')
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: { colorPrimary: THEME.PRIMARY_COLOR },
      }}>
      <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu collapsed={collapsed} />
        <Layout>
          <HeaderBar
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
          />
          <Content
            className={styles.content}
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default BasicLayout
