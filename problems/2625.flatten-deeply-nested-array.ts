// https://leetcode.cn/problems/flatten-deeply-nested-array/

type MultiDimensionalArray = (number | MultiDimensionalArray)[]

export const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  while (n > 0 && arr.some(Array.isArray)) {
    arr = [].concat(...arr as any)
    n--
  }
  return arr
}
