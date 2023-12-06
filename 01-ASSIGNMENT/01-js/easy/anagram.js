/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let charArray1 = str1.toLowerCase().split("");
  let charArray2 = str2.toLowerCase().split("");
  charArray1.sort();
  charArray2.sort();
  str1 = charArray1.join("");
  str2 = charArray2.join("");
  return str1 == str2;
}

module.exports = isAnagram;
