import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useModel } from '@umijs/max'
import { Switch } from 'antd'

/**
 * 主题切换开关组件
 * @description 用于在明暗主题之间切换，无需刷新页面
 */
export default function ThemeSwitch() {
  const { isDark, toggleTheme } = useModel('theme')

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
      title={isDark ? '切换到亮色主题' : '切换到暗色主题'}
    />
  )
}
