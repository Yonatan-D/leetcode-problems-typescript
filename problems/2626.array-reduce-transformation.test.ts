import { reduce } from './2626.array-reduce-transformation'

describe('2626. 数组归约运算', () => {
  it('初始值为0', () => {
    const nums = [1, 2, 3, 4]
    const fn = function sum(accum: number, curr: number): number { return accum + curr }
    const init = 0
    expect(reduce(nums, fn, init)).toBe(10)
  })

  it('初始值为100', () => {
    const nums = [1, 2, 3, 4]
    const fn = function sum(accum: number, curr: number): number { return accum + curr * curr }
    const init = 100
    expect(reduce(nums, fn, init)).toBe(130)
  })

  it('整数数组为空', () => {
    const nums: number[] = []
    const fn = function sum(accum: number, curr: number): number { accum; curr; return 0 }
    const init = 25
    expect(reduce(nums, fn, init)).toBe(25)
  })
})
