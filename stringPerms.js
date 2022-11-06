function stringPerms(string){
  if(string.length <= 1){
    return new Set([string])
  }

  const allCharsExceptLast = string.slice(0, -1)
  const lastChar = string[string.length - 1]
  console.log("allCharsExceptLast:", allCharsExceptLast)
  const permutationsOfAllCharsExceptLast = stringPerms(allCharsExceptLast)
  console.log("permutationsOfAllCharsExceptLast:", permutationsOfAllCharsExceptLast)
  const permutations = new Set()
  permutationsOfAllCharsExceptLast.forEach( perm => {
    for(let pos = 0; pos <= allCharsExceptLast.length; pos++){
      const permu = perm.slice(0, pos) + lastChar + perm.slice(pos)
      debugger
      permutations.add(permu)
    }
  })

  return permutations
}
let word = "cats"
console.log(stringPerms(word))
