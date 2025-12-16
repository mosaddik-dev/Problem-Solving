/**
* @param {string} str 
*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right])
      return false;
  }

  left++;
  right--;
  // const reversedString = str.split("").reverse().join("");
  // return str === reversedString;
}

console.log(isPalindrome("madam"));   //  true
console.log(isPalindrome("racecar")); //  true
console.log(isPalindrome("hello"));   //  false
