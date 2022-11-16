const anagram = (s, n) => {
  let bank = {}

  for(let str of s.split("")){
    if(!bank[str]){
      bank[str] = 1
    }else {
      bank[str] += 1
    }
  }

  for(let str of n.split("")){
    if(bank[str]){
      bank[str] -= 1
    }else {
      break;
    }
  }

  let values = Object.keys(bank).reduce((prev, curr) => {
    return prev += bank[curr]
  }, 0)

  if(values){
    return false
  }

  return true
}


const s = "rat"
const t = "car"
// Output: false

// const s = "anagram"
// const t = "nagaram"

console.log(anagram(s, t))

// Output: true
