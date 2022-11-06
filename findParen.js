
const findParen = (str, pos) => {
  let open = 0
  let ans = [pos]
  for(let i=pos; i < str.length; i++){
    if(str[i] == "("){
      open++
    }else if(str[i] == ")"){
      open--
      if(open === 0){
        debugger;
        ans.push(i)
      }
    }
  }
  return ans
}

const str = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

console.log(findParen(str, 10))
