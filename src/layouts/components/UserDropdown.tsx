import { Avatar, Dropdown, Space } from 'antd'
import { userDropdownItems } from '../config'
import styles from './UserDropdown.module.less'

/**
 * 用户下拉菜单组件
 * @description Header 右侧用户头像和下拉菜单
 */
const UserDropdown = () => {
  return (
    <Dropdown menu={{ items: userDropdownItems }} arrow>
      <Space className={styles.wrapper}>
        <Avatar
          size="small"
          src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
        />
        <span>若依</span>
      </Space>
    </Dropdown>
  )
}

export default UserDropdown
