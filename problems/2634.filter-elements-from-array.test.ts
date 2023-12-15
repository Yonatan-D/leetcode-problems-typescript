import { filter } from './2634.filter-elements-from-array'

describe('2634. 过滤数组中的元素', () => {
  it('过滤掉不大于 10 的值', () => {
    const arr = [0, 10, 20, 30]
    const fn = function greaterThan10(n: number): boolean { return n > 10 }
    const newArray = filter(arr, fn)
    expect(newArray).toEqual([20, 30])
  })

  it('过滤掉索引不为 0 的元素', () => {
    const arr = [1, 2, 3]
    const fn = function firstIndex(n: number, i: number): boolean { return i === 0 }
    const newArray = filter(arr, fn)
    expect(newArray).toEqual([1])
  })

  it('过滤掉加一后为 0 的值', () => {
    const arr = [-2, -1, 0, 1, 2]
    const fn = function plusOne(n: number): number { return n + 1 }
    const newArray = filter(arr, fn)
    expect(newArray).toEqual([-2, 0, 1, 2])
  })
})
