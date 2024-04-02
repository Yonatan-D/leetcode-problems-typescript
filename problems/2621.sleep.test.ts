import { sleep } from './2621.sleep'

const Time = setTimeout

describe('2621. 睡眠函数', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.spyOn(globalThis, 'setTimeout')
  })

  it('在 100ms 后此异步函数执行完时返回一个 Promise 对象', (done) => {
    const callback = jest.fn()

    // 延时 100 毫秒
    sleep(100).then(callback)

    // 这时候 setTimeout 已经执行
    expect(setTimeout).toHaveBeenCalledTimes(1)

    // 快进 100 毫秒, 这时候 callback 已经执行
    jest.advanceTimersByTime(100)

    Time(() => {
      expect(callback).toHaveBeenCalled()
      done()
    })
  })

  it('在 200ms 后函数执行完时返回一个 Promise 对象', (done) => {
    const callback = jest.fn()

    // 延时 200 毫秒
    sleep(200).then(callback)

    // 这时候 setTimeout 已经执行
    expect(setTimeout).toHaveBeenCalledTimes(1)

    // 快进 100 毫秒, 这时候 callback 还没执行
    jest.advanceTimersByTime(100)

    Time(() => {
      expect(callback).not.toHaveBeenCalled()
      // 再快进 100 毫秒, callback 就执行了
      jest.advanceTimersByTime(100)
    })

    Time(() => {
      expect(callback).toHaveBeenCalled()
      done()
    })
  })
})
