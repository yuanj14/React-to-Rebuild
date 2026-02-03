// 运行时配置
import ThemeSwitch from '@/components/ThemeSwitch';
import { getThemeMode } from '@/utils/theme';
import { SelectLang, useModel } from '@umijs/max';
import { ConfigProvider, theme, type ThemeConfig } from 'antd';
import type { ReactNode } from 'react';

/**
 * Ant Design 运行时配置
 * @description 初始主题配置，动态切换由 Layout 中的 childrenRender 处理
 */
export const antd = (memo: { theme?: ThemeConfig }) => {
  const isDark = getThemeMode() === 'dark';

  memo.theme ??= {};
  // 根据主题模式切换算法
  memo.theme.algorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;
  // 自定义主题色
  memo.theme.token = { colorPrimary: '#1890ff', ...memo.theme.token };

  return memo;
};

/**
 * 主题包装器组件
 * @description 在 Layout 中使用，支持动态主题切换
 */
function ThemeWrapper({ children }: { children: ReactNode }) {
  const { isDark } = useModel('theme');

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: { colorPrimary: '#1890ff' },
      }}>
      {children}
    </ConfigProvider>
  );
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: { locale: true },
    // 右上角操作栏：主题切换 + 语言切换
    actionsRender: () => [
      <SelectLang key="lang" />,
      <ThemeSwitch key="theme" />,
    ],
    // 用户头像配置
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      title: 'Admin',
      size: 'small',
    },
    // 包装子组件，提供动态主题切换
    childrenRender: (children: ReactNode) => (
      <ThemeWrapper>{children}</ThemeWrapper>
    ),
  };
};
