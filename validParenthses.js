/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let openBank = []

  if(s.length % 2 !== 0){
    return false
  }

  function checkBank(str){
    if(str == ")"){
      let index = openBank.indexOf("(")
      if(index !== -1){
        openBank.splice(index, 1)
      }
    }

    if(str == "}"){
      let index = openBank.indexOf("{")
      if(index !== -1){
        openBank.splice(index, 1)
      }
    }

    if(str == "]"){
      let index = openBank.indexOf("[")
      if(index !== -1){
        openBank.splice(index, 1)
      }
    }
  }

  for(let val of s.split("")){
    if(val == "(" || val == "[" || val == "{"){
      openBank.push(val)
    }

    if(val == ")" || val == "]" || val == "}"){
      checkBank(val)
    }

  }

  return openBank.length == 0
};

const s1 = "()"
console.log("validParens:", isValid(s1))
Output: true
const s2 = "()[]{}"
console.log("validParens:", isValid(s2))
Output: true
const s3 = "({[]})[]]"
console.log("validParens:", isValid(s3))
Output: false
