import './2619.array-prototype-last'

describe('2619. 数组原型对象的最后一个元素', () => {
  it('返回最后一个元素', () => {
    const arr = [null, {}, 3]
    expect(arr.last()).toBe(3)
  })

  it('数组没有元素应该返回 -1', () => {
    const arr: any[] = []
    expect(arr.last()).toBe(-1)
  })
})
