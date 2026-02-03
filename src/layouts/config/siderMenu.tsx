import {
  ApartmentOutlined,
  ApiOutlined,
  AppstoreOutlined,
  BellOutlined,
  BookOutlined,
  CloudServerOutlined,
  CodeOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  FormOutlined,
  HomeOutlined,
  IdcardOutlined,
  LinkOutlined,
  MonitorOutlined,
  ScheduleOutlined,
  SettingOutlined,
  TeamOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

/**
 * 侧边栏菜单配置
 * @description ruoyi-ui 完整菜单结构
 */
export const siderMenuItems: MenuItem[] = [
  { key: 'home', icon: <HomeOutlined />, label: '首页' },
  {
    key: 'system',
    icon: <SettingOutlined />,
    label: '系统管理',
    children: [
      { key: 'user', icon: <UserOutlined />, label: '用户管理' },
      { key: 'role', icon: <TeamOutlined />, label: '角色管理' },
      { key: 'menu', icon: <AppstoreOutlined />, label: '菜单管理' },
      { key: 'dept', icon: <ApartmentOutlined />, label: '部门管理' },
      { key: 'post', icon: <IdcardOutlined />, label: '岗位管理' },
      { key: 'dict', icon: <BookOutlined />, label: '字典管理' },
      { key: 'config', icon: <ToolOutlined />, label: '参数设置' },
      { key: 'notice', icon: <BellOutlined />, label: '通知公告' },
      {
        key: 'log',
        icon: <FormOutlined />,
        label: '日志管理',
        children: [
          { key: 'operlog', label: '操作日志' },
          { key: 'loginlog', label: '登录日志' },
        ],
      },
    ],
  },
  {
    key: 'monitor',
    icon: <MonitorOutlined />,
    label: '系统监控',
    children: [
      { key: 'online', icon: <UserOutlined />, label: '在线用户' },
      { key: 'job', icon: <ScheduleOutlined />, label: '定时任务' },
      { key: 'druid', icon: <DatabaseOutlined />, label: '数据监控' },
      { key: 'server', icon: <CloudServerOutlined />, label: '服务监控' },
      { key: 'cache', icon: <DesktopOutlined />, label: '缓存监控' },
      { key: 'cacheList', icon: <DatabaseOutlined />, label: '缓存列表' },
    ],
  },
  {
    key: 'tool',
    icon: <ToolOutlined />,
    label: '系统工具',
    children: [
      { key: 'build', icon: <FormOutlined />, label: '表单构建' },
      { key: 'gen', icon: <CodeOutlined />, label: '代码生成' },
      { key: 'swagger', icon: <ApiOutlined />, label: '系统接口' },
    ],
  },
  { key: 'ruoyi', icon: <LinkOutlined />, label: '若依官网' },
]
