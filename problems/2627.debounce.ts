// https://leetcode.cn/problems/debounce/

type F = (...args: number[]) => void

export function debounce(fn: F, t: number): F {
  let timer: number
  return function (...args) {
    if (timer)
      clearTimeout(timer)
    timer = setTimeout(() => fn(...args), t)
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
