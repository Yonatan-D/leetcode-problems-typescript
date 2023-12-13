import { memoize } from './2623.memoize'

describe('2623. 记忆函数', () => {
  it('sum', () => {
    let callCount = 0
    const memoizedSum = memoize((a: number, b: number): number => {
      callCount += 1
      return a + b
    })
    expect(memoizedSum(2, 2)).toBe(4)
    expect(memoizedSum(2, 2)).toBe(4)
    expect(callCount).toBe(1)
    expect(memoizedSum(1, 2)).toBe(3)
    expect(callCount).toBe(2)
  })

  it('factorial', () => {
    let callCount = 0
    const memoizedFactorial = memoize((n: number): number => {
      callCount += 1
      const factorial = (n: number): number => (n <= 1) ? 1 : (n * factorial(n - 1))
      return factorial(n)
    })
    expect(memoizedFactorial(2)).toBe(2)
    expect(memoizedFactorial(3)).toBe(6)
    expect(memoizedFactorial(2)).toBe(2)
    expect(callCount).toBe(2)
    expect(memoizedFactorial(3)).toBe(6)
    expect(callCount).toBe(2)
  })

  it('fib', () => {
    let callCount = 0
    const memoizeFib = memoize((n: number): number => {
      callCount += 1
      const fib = (n: number): number => (n <= 1) ? 1 : (fib(n - 1) + fib(n - 2))
      return fib(n)
    })
    expect(memoizeFib(5)).toBe(8)
    expect(callCount).toBe(1)
  })
})
