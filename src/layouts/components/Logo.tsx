import LogoDark from '@/assets/reactlynx-logo-dark.svg'
import LogoLight from '@/assets/reactlynx-logo-light.svg'
import { cn } from '@/utils/classnames'
import { useModel } from '@umijs/max'
import { theme } from 'antd'
import styles from './Logo.module.less'

interface LogoProps {
  collapsed: boolean
}

/**
 * Logo 组件
 * @description 显示 Logo 图标和文字，支持折叠动画
 */
const Logo = ({ collapsed }: LogoProps) => {
  const { isDark } = useModel('theme')
  const {
    token: { colorText },
  } = theme.useToken()
  // 根据主题切换 Logo（深色背景用浅色 logo）
  const logoSrc = !isDark ? LogoLight : LogoDark

  return (
    <div
      className={cn(
        styles.logoWrapper,
        collapsed ? styles.collapsed : styles.expanded,
      )}>
      <img src={logoSrc} alt="Logo" className={styles.image} />
      <span
        className={cn(
          styles.text,
          collapsed ? styles.textCollapsed : styles.textExpanded,
        )}
        style={{
          color: colorText,
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
        }}>
        ReactLynx
      </span>
    </div>
  )
}

export default Logo
