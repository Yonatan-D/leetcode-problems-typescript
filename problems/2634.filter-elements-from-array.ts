// https://leetcode.cn/problems/filter-elements-from-array/

type Fn = (n: number, i: number) => any

export function filter(arr: number[], fn: Fn): number[] {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!fn(arr[i], i))
      arr.splice(i, 1)
  }
  return arr
};
