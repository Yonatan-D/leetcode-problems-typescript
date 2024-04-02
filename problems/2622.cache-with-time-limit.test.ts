import { TimeLimitedCache } from './2622.cache-with-time-limit'

describe('2622. 有时间限制的缓存', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('1.set,get,count', () => {
    const timeLimitedCache = new TimeLimitedCache()
    expect(timeLimitedCache.set(1, 42, 1000)).toBeFalsy()
    expect(timeLimitedCache.get(1)).toBe(42)
    expect(timeLimitedCache.count()).toBe(1)
  })

  it('2.获取过期的key', () => {
    const timeLimitedCache = new TimeLimitedCache()
    expect(timeLimitedCache.set(1, 42, 100)).toBeFalsy()
    jest.advanceTimersByTime(50)
    expect(timeLimitedCache.get(1)).toBe(42)
    expect(timeLimitedCache.count()).toBe(1)
    jest.advanceTimersByTime(100)
    expect(timeLimitedCache.get(1)).toBe(-1)
  })

  it('3.key过期后, 获取count', () => {
    const timeLimitedCache = new TimeLimitedCache()
    expect(timeLimitedCache.set(1, 42, 50)).toBeFalsy()
    jest.advanceTimersByTime(40)
    expect(timeLimitedCache.set(1, 50, 100)).toBeTruthy()
    jest.advanceTimersByTime(10)
    expect(timeLimitedCache.get(1)).toBe(50)
    jest.advanceTimersByTime(70)
    expect(timeLimitedCache.get(1)).toBe(50)
    jest.advanceTimersByTime(80)
    expect(timeLimitedCache.get(1)).toBe(-1)
    jest.advanceTimersByTime(50)
    expect(timeLimitedCache.count()).toBe(0)
  })

  it('4.获取不存在的key', () => {
    const timeLimitedCache = new TimeLimitedCache()
    expect(timeLimitedCache.get(1)).toBe(-1)
  })
})
