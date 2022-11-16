// const ransomNote = "a"
// const magazine = "b"
// Output: false

const ransomNote = "aza"
const magazine = "abbza"
// Output: false

const isRansome = (ransome, magazine) => {
  let ranBank = ransome.split("").sort()
  let ans = ""
  for(let letter of magazine.split("")){
    if(ranBank.includes(letter)){
      ans += letter
    }
  }

  if(ans.split("").sort().join("") == ranBank.join("")){
    return true
  }

  return false
}

console.log("isRansome: ", isRansome(ransomNote, magazine))
