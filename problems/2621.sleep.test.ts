import { sleep } from './2621.sleep'

describe('2621. 睡眠函数', () => {
  const act = async (millis: number, fn: () => void) => {
    await sleep(millis)
    fn()
  }

  beforeAll(() => {
    jest.useFakeTimers()
    jest.spyOn(globalThis, 'setTimeout')
  })

  it('在 100ms 后此异步函数执行完时返回一个 Promise 对象', async () => {
    const callback = jest.fn()

    const promise = act(100, callback)

    expect(callback).not.toHaveBeenCalled()
    jest.runAllTimers()

    await promise

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('在 200ms 后函数执行完时返回一个 Promise 对象', async () => {
    const callback = jest.fn()

    const promise = act(200, callback)

    expect(callback).not.toHaveBeenCalled()
    jest.runAllTimers()

    await promise

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
