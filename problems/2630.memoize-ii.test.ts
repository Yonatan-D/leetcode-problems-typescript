import { memoize } from './2630.memoize-ii'

describe('2630. 记忆函数 II', () => {
  it('基本类型参数: sum', () => {
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

  it('引用类型参数: 空对象彼此都不是 === 相等的', () => {
    let callCount = 0
    const memoizedAssign = memoize((a: object, b: object): object => {
      callCount += 1
      return { ...a, ...b }
    })
    expect(memoizedAssign({}, {})).toEqual({})
    expect(callCount).toBe(1)
    expect(memoizedAssign({}, {})).toEqual({})
    expect(callCount).toBe(2)
    expect(memoizedAssign({}, {})).toEqual({})
    expect(callCount).toBe(3)
  })

  it('引用类型参数: 每个空对象都是相同的', () => {
    let callCount = 0
    const memoizedAssign = memoize((a: object, b: object): object => {
      callCount += 1
      return { ...a, ...b }
    })
    const o = {}
    expect(memoizedAssign(o, o)).toEqual({})
    expect(callCount).toBe(1)
    expect(memoizedAssign(o, o)).toEqual({})
    expect(callCount).toBe(1)
    expect(memoizedAssign(o, o)).toEqual({})
    expect(callCount).toBe(1)
  })
})
