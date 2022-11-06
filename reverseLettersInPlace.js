const reverseInPlace = (letters, blacklist) => {
  let rightIndex = letters.length -1
  let leftIndex = 0

  while(leftIndex < rightIndex){
    let temp = letters[leftIndex]
    if(blacklist.indexOf(temp) !== -1){
      leftIndex++
      temp = letters[leftIndex]
    }

    if(blacklist.indexOf(letters[rightIndex]) !== -1){
      rightIndex--
    }

    letters[leftIndex] = letters[rightIndex]
    letters[rightIndex] = temp

    leftIndex++
    rightIndex--
  }

  return letters
}

console.log(reverseInPlace(["a","r","e","v","2"], ["v"]))


/// time complexity: o(n)
/// space complexity: o(1)
