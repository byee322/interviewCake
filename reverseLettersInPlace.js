const reverseInPlace = (letters) => {
  let rightIndex = letters.length -1
  let leftIndex = 0

  while(leftIndex < rightIndex){
    const temp = letters[rightIndex]
    letters[leftIndex] = letters[rightIndex]
    letters[rightIndex] = temp

    leftIndex++
    rightIndex--
  }

  return letters
}

console.log(reverseInPlace(["a","r","e","v","2"]))


/// time complexity: o(n)
/// space complexity: o(1)
