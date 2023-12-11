import { flat } from './2625.flatten-deeply-nested-array'

describe('2625. 扁平化嵌套数组', () => {
  const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
  it('深度 n=0 始终得到原始数组', () => {
    const n = 0
    expect(flat(arr, n)).toEqual([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]])
  })

  it('深度 n=1 只有 [9,10,11] 未被扁平化', () => {
    const n = 1
    expect(flat(arr, n)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15])
  })

  it('深度 n=2 都被扁平化', () => {
    const n = 2
    expect(flat(arr, n)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  })
})
