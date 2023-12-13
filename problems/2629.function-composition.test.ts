import type { F } from './2629.function-composition'
import { compose } from './2629.function-composition'

describe('2629. 复合函数', () => {
  it('三个函数不同', () => {
    const functions = [
      (x: number): number => x + 1,
      (x: number): number => x * x,
      (x: number): number => 2 * x,
    ]
    const x = 4
    const composeFn = compose(functions)
    expect(composeFn(x)).toBe(65)
  })

  it('三个函数相同', () => {
    const functions = [
      (x: number): number => 10 * x,
      (x: number): number => 10 * x,
      (x: number): number => 10 * x,
    ]
    const x = 1
    const composeFn = compose(functions)
    expect(composeFn(x)).toBe(1000)
  })

  it('空函数列表的复合函数就是恒等函数', () => {
    const functions: F[] = []
    const x = 42
    const composeFn = compose(functions)
    expect(composeFn(x)).toBe(42)
  })
})
