const isPalindrome = (str) => {
  let left = 0
  let right = str.length - 1
  let isPalindrome = true

  while(left < right){
    let leftLetter = str[left].match(/^[a-z0-9]+$/i)
    let rightLetter = str[right].match(/^[a-z0-9]+$/i)

    if(!leftLetter){
      left += 1
      leftLetter = str[left].match(/^[a-z0-9]+$/i)
    }

    if(!rightLetter){
      right -= 1
      rightLetter = str[right].match(/^[a-z0-9]+$/i)
    }

    debugger
    if(leftLetter[0] !== rightLetter[0]){
      isPalindrome = false
      break
    }
    left += 1
    right -= 1
  }

  return isPalindrome
}

const str = "amanaplanacanalpanama"
console.log("isPalindrome: ", isPalindrome(str))
