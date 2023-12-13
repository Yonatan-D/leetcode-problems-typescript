// https://leetcode.cn/problems/function-composition/

export type F = (x: number) => number

export function compose(functions: F[]): F {
  return function (x) {
    for (const func of functions.reverse())
      x = func(x)

    return x
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
