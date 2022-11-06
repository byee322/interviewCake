 //optimized code for substring with duplicate letters type code.

function lengthOfLongestSubstring(check) {
  var letters = check.split("");
  var max = "";
  var result = new Map();

  for (var i = 0; i < letters.length; i++) {
    if (!result.has(letters[i])) {
      result.set(letters[i], i);
    } else {
      i = result.get(letters[i]);
      result.clear();
    }

    if (max.length < result.size) {
      max = [...result.keys()].join("")
    }
  }
  return max;
}

// Example:
console.log(lengthOfLongestSubstring("dvdf")); // 3

console.log(lengthOfLongestSubstring("pwwkew"))

//// space complexity: o(n)
//// time complexity: o(n)
