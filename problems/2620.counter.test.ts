import { createCounter } from './2620.counter'

describe('2620. 计数器', () => {
  function callFn(fn: () => number, op: Array<string>): number {
    let n = 0
    op.forEach((o) => {
      if (o === 'call')
        n = fn()
    })
    return n
  }

  it('输入正数', () => {
    const n = 10
    const op = ['call', 'call', 'call']

    const ans = callFn(createCounter(n), op)

    expect(ans).toBe(12)
  })
  it('输入负数', () => {
    const n = -2
    const op = ['call', 'call', 'call', 'call', 'call']

    const ans = callFn(createCounter(n), op)

    expect(ans).toBe(2)
  })
})
