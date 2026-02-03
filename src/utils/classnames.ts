type ClassValue = string | undefined | null | false | 0 | ClassValue[]

/**
 * 合并 CSS 类名
 * @description 过滤 falsy 值，合并有效类名
 * @example cn('foo', isActive && 'active', 'bar') => 'foo active bar'
 */
export const cn = (...classes: ClassValue[]): string => {
  return classes
    .flat()
    .filter((cls): cls is string => typeof cls === 'string' && cls.length > 0)
    .join(' ')
}

export default cn
