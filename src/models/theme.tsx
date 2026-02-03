import type { ThemeMode } from '@/constants';
import { getThemeMode, setThemeMode as saveTheme } from '@/utils/theme';
import { useState } from 'react';

/**
 * 主题状态管理 Model
 * @description 管理应用的明暗主题切换，支持本地持久化
 */
export default function useThemeModel() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getThemeMode);

  // 切换主题（React 19 Compiler 自动处理记忆化）
  const toggleTheme = () => {
    setThemeMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      saveTheme(next);
      return next;
    });
  };

  // 设置指定主题
  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
    saveTheme(mode);
  };

  const isDark = themeMode === 'dark';

  return { themeMode, isDark, toggleTheme, setTheme };
}
