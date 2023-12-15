import { map } from './2635.apply-transform-over-each-element-in-array'

describe('2635. 转换数组中的每个元素', () => {
  it('每个元素的值加 1', () => {
    const arr = [1, 2, 3]
    const fn = function plusone(n: number): number { return n + 1 }
    const newArray = map(arr, fn)
    expect(newArray).toEqual([2, 3, 4])
  })

  it('每个元素的值加索引', () => {
    const arr = [1, 2, 3]
    const fn = function plusI(n: number, i: number): number { return n + i }
    const newArray = map(arr, fn)
    expect(newArray).toEqual([1, 3, 5])
  })

  it('每个元素恒为 42', () => {
    const arr = [10, 20, 30]
    const fn = function constant() { return 42 }
    const newArray = map(arr, fn)
    expect(newArray).toEqual([42, 42, 42])
  })
})
