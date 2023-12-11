// https://leetcode.cn/problems/memoize/

export type Fn = (...params: number[]) => number

export function memoize(fn: Fn): Fn {
  const cache = new Map()
  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key))
      return cache.get(key)

    const value = fn(...args)
    cache.set(key, value)
    return value
  }
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
