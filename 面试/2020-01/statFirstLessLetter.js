//
// 统计一个字符串中第一次出现最少的字符
//
function statFirstLessLetter(str) {
  const countMap = {};
  const letters = str.split('');
  letters.forEach(letter => {
    if (typeof countMap[letter] === 'undefined') {
      countMap[letter] = 1;
    } else {
      countMap[letter] += 1;
    }
  });

  let minCount = countMap[letters[0]];
  let minCountLetter = letters[0];
  for(let i = 0, len = letters.length; i < len; i++) {
    if (minCount > countMap[letters[i]]) {
      minCount = countMap[letters[i]];
      minCountLetter = letters[i];
    }
  }

  return [minCount, minCountLetter];
}

console.log(statFirstLessLetter('aabbbccc')); // [2, 'a']