// https://leetcode.cn/problems/memoize-ii/

class CacheNode {
  save: boolean
  value: any
  primitive: Map<any, CacheNode>
  object: WeakMap<any, CacheNode>

  constructor() {
    this.save = false // 表示 value 是否有值
    this.value = undefined // 根据 save 状态缓存函数的计算结果
    this.primitive = new Map() // 存储基本类型参数变量
    this.object = new WeakMap() // 存储引用类型参数变量（使用 WeakMap 防止内存泄漏）
  }

  setValue(value: any): any {
    this.value = value
    this.save = true
    return value
  }
}

function isObject(arg: any): boolean {
  return typeof arg === 'function' || (typeof arg === 'object' && arg !== null)
}

type Fn = (...params: any) => any

export function memoize(fn: Fn): Fn {
  const root = new CacheNode()
  return function (...args) {
    let cur = root
    for (const item of args) {
      const cache = isObject(item) ? cur.object : cur.primitive
      // 判断是否有缓存，有则赋值给 cur，无则新建缓存节点
      if (!cache.has(item))
        cache.set(item, new CacheNode())
      cur = cache.get(item) as CacheNode
    }
    if (cur.save)
      return cur.value
    return cur.setValue(fn(...args))
  }
}
