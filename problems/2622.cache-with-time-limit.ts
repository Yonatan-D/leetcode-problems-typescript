// https://leetcode.cn/problems/cache-with-time-limit/

export class TimeLimitedCache {
  #keyMap: Map<number, any>

  constructor() {
    this.#keyMap = new Map()
  }

  set(key: number, value: number, duration: number): boolean {
    if (this._isExpired(key))
      this.#keyMap.delete(key)

    const hasKey = this.#keyMap.has(key)
    this.#keyMap.set(key, { value, expiredTime: Date.now() + duration })
    return hasKey
  }

  get(key: number): number {
    if (this._isExpired(key)) {
      this.#keyMap.delete(key)
      return -1
    }
    return this.#keyMap.get(key).value
  }

  count(): number {
    this.#keyMap.forEach((_, key) => {
      if (this._isExpired(key))
        this.#keyMap.delete(key)
    })
    return this.#keyMap.size
  }

  private _isExpired(key: number): boolean {
    if (this.#keyMap.has(key)) {
      const value = this.#keyMap.get(key)
      return Date.now() > value.expiredTime
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
