// https:// leetcode.cn/problems/cache-with-time-limit/

export class TimeLimitedCache {
  private _cache: Map<number, any>

  constructor() {
    this._cache = new Map()
  }

  set(key: number, value: number, duration: number): boolean {
    if (this._cache.has(key) && this._isExpired(key))
      this._cache.delete(key)

    const hasKey = this._cache.has(key)
    this._cache.set(key, { value, expiredTime: Date.now() + duration })
    return hasKey
  }

  get(key: number): number {
    if (this._cache.has(key)) {
      if (this._isExpired(key)) {
        this._cache.delete(key)
        return -1
      }
      return this._cache.get(key).value
    }
    return -1
  }

  count(): number {
    this._cache.forEach((_, key) => {
      if (this._isExpired(key))
        this._cache.delete(key)
    })
    return this._cache.size
  }

  private _isExpired(key: number): boolean {
    if (this._cache.has(key)) {
      const cache = this._cache.get(key)
      return Date.now() > cache.expiredTime
    }
    return true
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
