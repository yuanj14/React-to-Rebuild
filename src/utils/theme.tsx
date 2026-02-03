import { THEME_STORAGE_KEY, type ThemeMode } from '@/constants';

/**
 * 获取当前主题模式
 * @description 优先从 localStorage 读取，否则返回默认 light
 */
export const getThemeMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return 'light';
};

/**
 * 设置主题模式到 localStorage
 */
export const setThemeMode = (mode: ThemeMode): void => {
  localStorage.setItem(THEME_STORAGE_KEY, mode);
};
