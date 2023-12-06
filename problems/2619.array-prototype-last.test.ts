import './2619.array-prototype-last'

describe('2619. 数组原型对象的最后一个元素', () => {
  it('返回最后一个元素', () => {
    const nums = [null, {}, 3]
    expect(nums.last()).toBe(3)
  })

  it('数组没有元素应该返回 -1', () => {
    const nums: any[] = []
    expect(nums.last()).toBe(-1)
  })
})
