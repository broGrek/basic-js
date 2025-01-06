const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Count = {};
  let s2Count = {};
  let commonCount = 0;
  for (const char of s1) {
    s1Count[char] = (s1Count[char] || 0) + 1;
  }
  for (const char of s2) {
    s2Count[char] = (s2Count[char] || 0) + 1;
  }
  for (const char in s1Count) {
    if (s2Count[char]) {
      commonCount += Math.min(s1Count[char], s2Count[char]);
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
