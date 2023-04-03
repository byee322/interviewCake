const s = "s"

const longestPalindrome = (s) => {
  let bank = {}
  let ans = ""
  let oddAns = ""

  for(let letter of s.split("")){
    if(!bank[letter]){
      bank[letter] = 1
    }else {
      bank[letter] += 1
    }
  }

  let singleLetters = 0
  let evenAmountOfLetters = 0
  let oddNumber = 0
  for(let key of Object.keys(bank)){
    if(bank[key] == 1){
      singleLetters += 1
    }else if(bank[key] % 2 == 0){
      evenAmountOfLetters += 1
      ans += key.repeat(bank[key])
    }else{
      oddNumber += 1
      if(bank[key] > oddAns){
        oddAns = key.repeat(bank[key])
      }
    }
  }

  if(singleLetters == 1 && oddNumber == 0 && evenAmountOfLetters > 0){
    return 1
  }else if(oddAns.length && singleLetters == 0) {
    return ans.length + oddAns.length
  }else if(singleLetters % 2 == 0 && ans.length){
    return ans.length
  }else {
    return ans.length + 1
  }
}

console.log("longestPalindrome: ", longestPalindrome(s))

// 7
//Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

