import './2631.group-by'

describe('2631. 分组', () => {
  it('按 id 分组', () => {
    const array = [
      { id: '1' },
      { id: '1' },
      { id: '2' },
    ]
    const fn = (item: typeof array[0]): string => item.id
    expect(array.groupBy(fn)).toEqual({
      1: [{ id: '1' }, { id: '1' }],
      2: [{ id: '2' }],
    })
  })

  it('按数组第一个元素分组', () => {
    const array = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9],
    ]
    const fn = (list: number[]): string => String(list[0])
    expect(array.groupBy(fn)).toEqual({
      1: [[1, 2, 3], [1, 3, 5], [1, 5, 9]],
    })
  })

  it('按数字是否大于 5 分组', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const fn = (n: number): string => String(n > 5)
    expect(array.groupBy(fn)).toEqual({
      true: [6, 7, 8, 9, 10],
      false: [1, 2, 3, 4, 5],
    })
  })
})
