// https://leetcode.cn/problems/array-reduce-transformation/

type Fn = (accum: number, curr: number) => number

export function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0)
    return init

  let ans = init
  for (const n of nums)
    ans = fn(ans, n)

  return ans
};
