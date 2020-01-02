//
// 两数之和
// 给定一个数组，给定一个target，获取到两数之和等于target的两个数的下标
//

function twoSum(arr, target) {
  const map = {};
  for(let i = 0, len = arr.length; i < len; i++) {
    const left = target - arr[i];
    if (map[arr[i]] !== undefined) {
      return [map[arr[i]], i];
    }
    map[left] = i;
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 10)); // [3, 5]