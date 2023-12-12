import { debounce } from './2627.debounce'

describe('2627. 函数防抖', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('第一次调用被第二次调用取消', () => {
    const fn = jest.fn()
    const debouncedFn = debounce(fn, 50)
    setTimeout(() => debouncedFn(1), 50)
    setTimeout(() => debouncedFn(2), 75)
    jest.advanceTimersByTime(100)
    expect(fn).not.toHaveBeenCalled()
    jest.advanceTimersByTime(25)
    expect(fn).toHaveBeenCalledWith(2)
  })

  it('第一次调用延迟到 70ms, 第二次调用延迟到 120ms', () => {
    const fn = jest.fn()
    const debouncedFn = debounce(fn, 20)
    setTimeout(() => debouncedFn(1), 70)
    setTimeout(() => debouncedFn(2), 120)
    jest.advanceTimersByTime(90)
    expect(fn).toHaveBeenCalledWith(1)
    jest.advanceTimersByTime(50)
    expect(fn).toHaveBeenCalledWith(2)
  })

  it('第一次调用延迟了 150ms, 第二次调用被第三次调用取消, 第三次调用延迟了 150ms', () => {
    const fn = jest.fn()
    const debouncedFn = debounce(fn, 150)
    setTimeout(() => debouncedFn(1, 2), 50)
    setTimeout(() => debouncedFn(3, 4), 300)
    setTimeout(() => debouncedFn(5, 6), 300)
    jest.advanceTimersByTime(200)
    expect(fn).toHaveBeenCalledWith(1, 2)
    jest.advanceTimersByTime(250)
    expect(fn).not.toHaveBeenCalledWith(3, 4)
    expect(fn).toHaveBeenCalledWith(5, 6)
  })
})
