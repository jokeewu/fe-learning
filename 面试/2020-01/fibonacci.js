//
// 斐波那契数列，考虑性能
// 递推公式：F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）
//

/**
 * 递归方式
 */
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time('递归方式');
console.log('递归方式：', fibonacci(40)); // 8
console.timeEnd('递归方式');

/**
 * 递归加缓存
 */
function fibonacci2(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  fibonacci2.cache = fibonacci2.cache || {};
  if (!fibonacci2.cache[n]) {
    fibonacci2.cache[n] = fibonacci2(n - 1) + fibonacci2(n - 2);
  }
  return fibonacci2.cache[n];
}

console.time('递归加缓存');
console.log('递归加缓存', fibonacci2(40)); // 8
// console.log(fibonacci2.cache);
console.timeEnd('递归加缓存');