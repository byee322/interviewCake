const ransomNote = "a"
const magazine = "b"
// Output: false

const isRansome = (ransome, magazine) => {
  let ranBank = ransome.split("").sort()
  let ans = ""
  for(let letter of magazine.split("")){
    if(ranBank.includes(letter)){
      ans += letter
    }
  }

  if(ans.sort() == ranBank.join("")){
    return true
  }

  return false
}

console.log("ransomeNote: ", ransomeNote(ransomeNote, magazine))
